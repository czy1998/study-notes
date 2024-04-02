# macbook

1. 在 `访达` 里选中任一文件、文件夹，按下空格，文件会进行预览、文件夹会显示缩略信息（大小、包含项目数量、上次编辑时间）。

```sh
    cmd + shift + c # 呼出终端
    cmd + shift + .(大于号那个键) # 显示隐藏文件/文件夹

    ifconfig # 查看当前系统的网络接口配置信息
    ifconfig en0 # 查看以太网（Ethernet）接口配置信息，本地 IP 地址可以在 inet 字段找到。该字段显示了接口的 IPv4 地址
```

2. 快速切换左右相邻标签页，**（vs code、chrome 都可用）**
   按住 cmd + alt 然后在按左右方向键即可切换

3. 配置环境变量

```sh
    # 1.确认自己使用的 shell,
    echo $SHELL
    # 2.找到对应的配置文件,并打开
    bash 使用的 配置文件为 ~/.bash_profile
    zsh 使用的 配置文件为 ~/.zshrc

    vim ~/.bash_profile
    # 3.在配置文件的最后增加以下内容即可
    export PATh=$PATH:要配置的软件环境路径 # : 是多个路径的间隔，后续有新的环境变量需要配置，只需要用 冒号 隔开，继续写新的路径即可
    # 4.切换至英文输入法,保存退出
    按下 esc, 然后 shift + 冒号, 输入 wq, 再回车
    # 5.让配置文件生效
    关闭当前终端, 新开一个
    或者在终端输入并执行下方代码
    source .bash_profile
```

4. 设置命令别名
   在上一步的基础上我可以通过修改对于 SHELL 的配置文件，来实现设置命令别名，例如：

```sh
    # 假定配置文件是 .bash_profile

    # 1.想设置一条别名指令 ll ，使其具有 ls -al 的效果，可以进行以下操作：

    # a.终端执行指令
    echo "alias ll='ls -al'" >> ~/.bash_profile
    # b.指令编辑文件
    vim ~/.bash_profile
    # c.使用文本编辑器编辑

```

5. 快速切换/浏览桌面

```sh
  ctrl + 左/右方向键 # 切换桌面
  ctrl + 上/下方向键 # 预览桌面
```
