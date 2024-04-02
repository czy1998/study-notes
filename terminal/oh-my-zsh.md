# oh-my-zsh

oh my zsh 是一个开源的、用于管理 zsh 配置的框架。
可以自定义 theme(主题)，添加各种功能的 plugin(插件)，让你的终端开发更加舒服和有效率。

**zsh**

Zsh（Z-shell）是一款用于交互式使用的 shell，也可以作为脚本解释器来使用。其包含了 bash，ksh，tcsh 等其他 shell 中许多优秀功能，也拥有诸多自身特色。

### 安装 oh-my-zsh

1. 检查是否已有 zsh

```sh
zsh --version
```

2. 安装 oh-my-zsh

```sh
# 通过 curl 安装
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 通过 wget 安装
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

**PS：安装完成后，你之前的 `.zshrc` 文件会被备份到 `~/.zshrc.pre-oh-my-zsh`，如果需要将原先的配置还原，可以内容重新拷贝至 `.zshrc` 中。**

3. 配置主题

```sh
# 1.打开配置文件，个人喜欢使用 vscode 编辑
code ~/.zshrc
# 2.修改主题，将 theme 这一行，将其设置为一下其一（下面两个主题是个人比较喜欢的）
ZSH_THEME="crcandy"
ZSH_THEME="amuse"
# 3.保存配置文件，更新当前 shell 会话的环境设置
source ~/.zshrc
```

如果使用 `amuse` 主题，shell 显示可能会有问题，部分字符显示不出来。
这时候可以去安装 `Powerline fonts`，将其应用于终端的【偏好设置】中。
vscode 终端里若也有问题，可以去设置中搜索 `Editor: Font Family`,将新安装的字体添加进入即可

4. 配置插件

个人推荐几个插件，都需要自己额外安装

```sh
plugins=(
    git
    zsh-autosuggestions
    # 插件功能：输入命令时可提示自动补全（灰色部分），按tab键（mac 是方向键→ ）即可补全。
    zsh-syntax-highlighting
    # 插件功能：这个包为shell zsh提供语法突出显示。这有助于在运行命令之前检查它们，特别是在捕获语法错误方面。
    # 例：在你输入某个命令时，如果该命令不存在，那么它显示为红色；否则，它会变成绿色。
    zsh-completions
    # zsh-completions 是一个开源的 ZSH 完成脚本集合，提供了对许多常用 命令行工具 的支持，可以为你的 ZSH shell 提供更强大的自动补全功能。
    # 例：在输入 cd 后，按下 Tab 键，可以快速浏览当前目录下的文件和子目录。
    # 例：在输入 git checkt 后，可以列出所有可用的分支或标签。
    zsh-z
    # 插件可以让你快速跳转到最常用的目录。它会记住你经常访问的目录，并在你输入 z <目录名> 的时候自动补全相应的目录。如果你经常在命令行下工作，这个插件会非常有用。
    # z 插件支持命令补全功能，同样是使用tab实现命令补全； 比如要进入的路径为 documnets/github/demo，终端输入 z de
    # 然后按tab键，便可显示出具体路径，如果是自己想进入的路径直接回车
)
```

5. 安装完成后新开终端，或者执行 `source ~/.zshrc` 命令即可。
