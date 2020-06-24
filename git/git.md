# Git

```js
//初始化与提交到本地仓库
git init //初始化git,把这个目录变成Git可以管理的仓库
git add <file> //添加文件到暂存区
git add . //添加所有修改的文件进暂存区
git commit -m <message> //将暂存区的文件提交到当前分支(本地仓库)
```

```js
//版本回退
git log //查看提交历史，以便确定要回退到哪个版本
git log --pretty=oneline //可以减少输出的信息
git reflog //查看命令历史，以便确定要回到未来的哪个版本
git reset --hard commit_id //回退到某个版本，其git log也会更改为跳转版本的log
git reset --hard HEAD^ //回退到上个版本，HEAD表示当前版本
git reset HEAD //是将暂存区和HEAD的提交保持一致
git reset --hard HEAD //是将工作区、暂存取和HEAD保持一致
git checkout -- file //文件在工作区的修改全部撤销
```

git checkout 的两种场景：

（1）文件自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

（2）已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

需要回退的场景：

（1）当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 git checkout -- file 或者 git restore readme.txt

（2）当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 git reset HEAD <file>，或者 git restore --staged readme.txt 就回到了场景 1，第二步按场景 1 操作。
  
（3）已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库

```js
//查看信息
git status //查看仓库当前的状态
git diff //查看工作区和暂存区差异
git diff --cached //查看暂存区和版本库差异，
git diff HEAD -- file //查看工作区中的文件与版本库中文件的差异
git rm //删除一个文件
```

（1）当暂存区中没有文件时，git diff 比较的是，工作区中的文件与上次提交到版本库中的文件。

（2）当暂存区中有文件时，git diff 则比较的是，当前工作区中的文件与暂存区中的文件。

```js
//远程仓库
git remote add origin git@server-name:path/repo-name.git //关联一个远程库
git push -u origin master //第一次推送master分支的所有内容,后面提交就不需要-u
git clone //克隆一个本地库
git branch //查看分支
git branch <name> //创建分支
git checkout <name> //切换分支
git switch <name> //切换分支
git checkout -b <name> //创建+切换分支
git switch -c <name> //创建+切换分支
git merge <name> //合并某分支到当前分支
git branch -d <name> //删除分支
git pull origin master //将远程主机的master分支最新内容拉下来后与当前本地分支直接合并 fetch+merge
```
