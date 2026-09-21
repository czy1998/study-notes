# husky

husky 是一个用于 Git 钩子管理的 npm 包。它简化了在项目中使用 Git 钩子（hooks）的过程，使得在特定的 Git 操作（如提交、推送等）发生时，自动执行指定的脚本或命令变得非常容易。husky 常用于确保代码质量、执行测试、格式化代码等任务，确保这些步骤在开发工作流中自动执行

### 功能与用途

- 自动执行脚本：在 Git 操作前后自动执行脚本，比如在提交代码前运行代码检查和测试
  - 常与 `lint-staged` 一起使用，处理暂存区的修改
- 确保代码质量：强制执行代码风格检查、静态代码分析、单元测试等
- 集成工具：可以与工具如 ESLint、Prettier、Jest 等集成，以确保代码库的一致性和可靠性

### 常用 Git 钩子

- pre-commit：在 git commit 命令执行前运行，通常用于检查代码风格和运行单元测试
- commit-msg：在提交信息输入后、提交保存前运行，通常用于验证提交信息的格式
- pre-push：在 git push 命令执行前运行，通常用于运行较长时间的测试和构建过程
- post-merge：在合并操作完成后运行，通常用于重新安装依赖或重新构建项目

### Usage

```sh

# 安装依赖
pnpm add husky -D

# 初始化 husky
pnpm exec husky init

# 在生成的钩子文件里添加脚本
npx

```

### 配置全局 git hook

1. 创建全局 git 配置文件 `.gitconfig`
2. 在其中填入如下内容

```sh
# .gitconfig
[core]
  hooksPath = ~/.global-git-hooks
```

3. 创建全局 hook 目录，并在其中创建一个 `pre-push` 钩子
4. 在其中填入如下内容，效果 `检测当前分支是否包含test分支的代码`

**ai优化版**

```bash
# ~/.global-git-hooks/pre-push
#!/usr/bin/env sh

# 本钩子用于避免将已包含 test 分支合并记录的提交推送到非 test 分支。
#
# 不扫描当前分支的完整历史，而是只检查本次 push 相对于远端分支新增的提交。
# 这样即使历史上曾有 test 污染、之后又被 revert，也不会持续阻塞后续正常推送。
#
# Git 调用 pre-push 时会通过标准输入逐行传入：
#   <本地引用> <本地 SHA> <远端引用> <远端 SHA>
# 例如：refs/heads/release <local_oid> refs/heads/release <remote_oid>
# LOCAL_REF 当前未参与判断，但必须读取，才能正确解析每一行的其余字段。

# Git 对新增或删除引用使用全 0 的 SHA-1 作为占位值。
ZERO_OID=0000000000000000000000000000000000000000

# 一次 push 可能同时更新多个引用；记录总体结果，待全部检查完成后再统一阻止 push。
HAS_SUSPECT_COMMIT=false

# 逐条读取 Git 传给 pre-push 钩子的“待推送引用”，分别检查
while read -r LOCAL_REF LOCAL_OID REMOTE_REF REMOTE_OID; do
    # 仅检查远端分支。标签和其他引用不属于分支污染检查的范围。
    case "$REMOTE_REF" in
        refs/heads/*)
            ;;
        *)
            continue
            ;;
    esac

    # 以实际推送目标作为判断依据，支持 `git push origin local:remote` 这类分支映射。
    TARGET_BRANCH=${REMOTE_REF#refs/heads/} # 这是字符串去前缀语法，refs/heads/release -> release

    # 推送到 test 分支本身是正常流程，不执行污染检查。
    # 保留原规则：分支名中含有 test 即视为 test 分支。
    case "$TARGET_BRANCH" in
        # *test* 表示分支名任意位置包含 test。这种分支被视为 test 分支，不进行拦截。
        *test*)
            continue
            ;;
    esac

    # 删除远端分支时 LOCAL_OID 为全 0；删除操作不包含新增内容，无需检查。
    if [ "$LOCAL_OID" = "$ZERO_OID" ]; then
        continue
    fi

    # 首次创建远端分支时 REMOTE_OID 为全 0，尚不存在可靠的远端基线。
    # 若扫描本地全部祖先，会把本次之前已经存在的历史误判为此次新增内容，
    # 因此此场景仅提示并跳过；已有远端分支的后续更新仍会正常检查。
    if [ "$REMOTE_OID" = "$ZERO_OID" ]; then
        echo "[warning]: 目标分支 $TARGET_BRANCH 为首次推送，跳过 test 污染增量检查。"
        continue
    fi

    # $(...) 表示执行命令并把输出赋值给变量。
    # <remote_oid>..<local_oid> 仅包含本地有、远端当前没有的提交，
    # 即本次成功 push 后会新增到目标分支的提交集合。
    # | 将 git log 的输出交给 grep 过滤，只保留疑似来自 test 合并历史的提交。
    # 继续沿用原有识别标准：提交主题出现 “Merge branch '...' into test”
    # 表明该提交来自 test 分支的合并历史，需要人工确认其是否被错误带入目标分支。
    SUSPECT_COMMITS=$(git log --format='%h %s' "$REMOTE_OID..$LOCAL_OID" | grep -E "Merge branch '.*' into test")
    if [ -n "$SUSPECT_COMMITS" ]; then
        echo "[warning]: 目标分支 $TARGET_BRANCH 的本次推送可能被 test 污染!"
        echo "           以下提交是在本次推送中新增的 test 合并记录:"
        echo "$SUSPECT_COMMITS"
        HAS_SUSPECT_COMMIT=true
    fi
done

# 所有引用检查完成后统一失败，避免多引用 push 只报告第一处问题。
if [ "$HAS_SUSPECT_COMMIT" = true ]; then
    echo "           请检查本次推送的提交来源；确认无异常后可执行 git push --no-verify 跳过检查。"
    exit 1
fi
```

**原版**

```bash
# ~/.global-git-hooks/pre-push
#!/usr/bin/env sh

# 获取当前分支名称
CURRENT_BRANCH=$(git branch --show-current)
# 获取最新的100条commit记录
LOG_LIST=$(git log --oneline -n 100)

# 只有当当前分支名称不包含 'test' 时才执行检查
# 使用grep检查是否包含合并提交
if [[ ! "$CURRENT_BRANCH" =~ test ]] && echo "$LOG_LIST" | grep -q "Merge branch '.*' into test"; then
    echo "[warning]: 当前分支可能被污染!"
    echo "           其中包含合并到 test 分支的提交!"
    echo "           请检查当前分支来源!"
    echo "           如果确定没有异常，可以执行下面指令来跳过检查"
    echo "           git push --no-verify"
fi
```

5. 如此一来，无论在那个项目执行 `git push` 时，都会触发该校验
