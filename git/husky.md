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

```bash
# ~/.global-git-hooks/pre-push
#!/usr/bin/env sh

# 获取当前分支名称
CURRENT_BRANCH=$(git branch --show-current)
# 获取最新的100条commit记录
LOG_LIST=$(git log --oneline -n 100)

# 只有当当前分支不包含 'test' 时才执行检查
# 使用grep检查是否包含合并提交
if [[ ! "$CURRENT_BRANCH" =~ test ]] && echo "$LOG_LIST" | grep -q "Merge branch '.*' into test"; then
    echo "[warning]: 当前分支可能被污染!"
    echo "           其中包含合并到 test 分支的提交!"
    echo "           请检查当前分支来源!"

    # 检查是否有交互式终端
    # true 有交互式终端，可以正常使用 read
    if [ -t 0 ]; then
        while true; do
            read -p "是否继续推送? (Y/N): " placeholder
            # read` 命令用于从标准输入读取一行，并将其赋值给变量 `placeholder`
            # `-p` 选项后面跟着提示信息，这里是“是否继续推送? (Y/N): ”
            echo # 换行

            case "$placeholder" in
                [Yy]* )
                    echo "用户选择继续推送"
                    break
                    ;;
                [Nn]* )
                    echo "用户选择取消推送"
                    exit 1
                    ;;
                * )
                    echo "请输入 Y 或 N"
                    ;;
            esac
        done
    else
        echo "           无法进行交互式确认，自动取消推送以确保安全"
        echo "           如果确定没有异常，可以执行下面指令来跳过检查"
        echo "           git push --no-verify"
        exit 1
    fi
fi
```

5. 如此一来，无论在那个项目执行 `git push` 时，都会触发该校验
