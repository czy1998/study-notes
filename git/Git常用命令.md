# Git 常用命令

```ts
/* 初始化与提交到本地仓库 */
git init // 初始化 git ，把这个目录变成 git 可以管理的仓库

git add <file> // 添加文件到暂存区
git add . // 添加所有修改的文件进暂存区

git commit -m <message> // 将暂存区的文件提交到当前分支(本地仓库)
git commit -am <message> // 将文件添加暂存区，并将暂存区的文件提交到当前分支(本地仓库)
```

```ts
/* 版本回退 */
git log // 查看提交历史，以便确定要回退到哪个版本
git log —- <文件相对路径> // 过滤提交记录，只查看该文件的提交记录
git log -p -- <文件相对路径> // 查看该文件的提交记录，包括每次提交的具体修改内容，
git log --stat // 显示每个提交的基本信息，以及涉及的文件和文件的统计信息，例如修改的文件数量和文件的添加/删除行数
git log --pretty=oneline // 可以减少输出的信息
git log --pretty="%h - %an, %ae, %ad : %s" // 以 "短哈希值 - 作者名字, 电子邮件地址, 提交日期 : 提交说明" 的格式显示提交历史
git log --grep="初始化" -i // 按照提交信息过滤，查看提交信息包含字段 "初始化" 的commit，-i 查找提交记录时忽略大小写
git log main..feature // 查找两个分支之间的区别，main..feature这个提交区间的表述，会给出所有已经存在于feature分支但还不存在于main分支的提交记录。如果git log命令在执行这两个区间时都有返回，那么也就意味着你的提交历史已经分叉了。

git show // 显示最近一次commit的想象信息
git show <commit-id> // 显示某次commit里的修改
git show <commit-id> 文件相对路径 // 显示某次commit里指定文件的修改

git stash // 暂存工作区、暂存区的修改
          // -m 同 gti commit 填写描述信息
          // -k 只暂存未被跟踪的文件（即未进行 git add 的）

git reflog // 查看命令历史，以便确定要回到未来的哪个版本

git reset --hard commit_id // 回退到某个版本，其 git log 也会更改为跳转版本的log
git reset --hard HEAD^ // 回退到上个版本，HEAD表示当前版本
git reset --hard HEAD // 是将工作区、暂存取和 HEAD 保持一致
git reset --hard origin/master // 将本地分支重置到远程分支 origin/master 的状态，并且强制更新工作区和暂存区的内容，丢弃所有未提交的修改
git reset HEAD // 是将暂存区和 HEAD 的提交保持一致
git reset -q HEAD -- . // 取消已暂存的文件（将文件恢复到上一次提交的状态），并将它们从暂存区中移除。 -q 关闭命令的输出，即不在终端显示
git reset -q HEAD -- <file path> // 取消暂存区的一个文件

git checkout -- <file path> // 撤销文件在工作区的修改，写多个 path 可撤销多个文件

git restore <file path> // 撤销文件在工作区的修改

git revert <commit hash> -m 1 -n // 撤销 commit，具体查看 使用技巧.md

git rebase -i --root // 变基所有的commit
                     // 相关介绍可以查阅 https://blog.csdn.net/weixin_42310154/article/details/119004977
```

```ts
/* 查看信息 */
git status // 查看仓库当前的状态
git status -bs // 简要的查看仓库当前的状态和分支信息，-b 显示分支信息 -s 简洁的显示状态

git diff // 查看工作区和暂存区差异
git diff --stat // 用于比较工作目录中的文件与暂存区（或指定的提交）之间的差异，并显示更改的文件数量和插入/删除的行数的统计信息
git diff --cached // 查看暂存区和最后一次提交的差异，
git diff HEAD -- <file path> // 用于比较当前工作目录中的文件 file 与最近一次提交的版本（即 HEAD）之间的差异。

git rm // 用于删除已跟踪的文件或目录，并将删除操作记录到版本历史中
```

**git diff 的比较逻辑**

1. 当暂存区中没有文件时，git diff 比较的是，工作区中的文件与上次提交到版本库中的文件。
1. 当暂存区中有文件时，git diff 则比较的是，当前工作区中的文件与暂存区中的文件。

```ts
//远程仓库
git remote add origin git@server-name:path/repo-name.git // 关联一个远程库

git pull origin master // 将远程主机的 master 分支最新内容拉下来后与当前本地分支直接合并，分两步 fetch + merge

git push -u origin master // 第一次推送 master 分支的所有内容，后面提交就不需要 -u，-u 设置上游
git push origin -d <branch name> // 删除远程分支，确保当前为远程分支对应的本地分支

git clone <git path> // 克隆一个本地库

git branch // 查看分支
git branch <name> // 创建分支
git branch -d <name> // 删除分支
git branch -vv // 查看本地分支对应的 远程分支 以及和远程分支commit的对比关系（谁多谁少），显示本地最近一次提交的 hash 和 commit msg

git checkout <name> // 切换分支
git checkout -b <name> // 创建 + 切换分支

git merge <name> // 合并某分支到当前分支
git merge --abort // 合并出现冲突后，取消这次合并，恢复代码
```

### 参考文章

- [Git 命令进阶操作：过滤日志](https://zhuanlan.zhihu.com/p/508811639)
