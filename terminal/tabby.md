# Tabby

Tabby 是一款免费、开源、跨平台的终端模拟器，支持 Windows、macOS 和 Linux。它既可以运行本机的 Shell，也集成了 SSH、Telnet 和串口客户端，可作为系统终端、PuTTY 或 iTerm 等工具的替代品。

需要注意：Tabby 本身不是 Shell。它负责提供终端界面，实际执行命令的仍是 Bash、Zsh、PowerShell、WSL 等 Shell。

## 有什么用

- 在一个应用中管理本地终端和多台远程服务器。
- 使用标签页和分屏同时处理多个终端会话，并恢复上次打开的标签页。
- 保存 SSH 连接，支持跳板机、端口转发、Agent 转发和 Zmodem 文件传输等功能。
- 自定义主题、配色、字体和快捷键，还可以安装插件扩展功能。
- 在 Windows 上统一使用 PowerShell、WSL、Git Bash、CMD 等环境。

## 如何使用

1. 进入 [Tabby 官网](https://tabby.sh/) 或 [GitHub Releases](https://github.com/Eugeny/tabby/releases/latest)，下载对应系统的安装包并完成安装。
2. 启动 Tabby，新建终端标签页。Tabby 通常会自动识别本机已有的 Shell，选择 Bash、Zsh、PowerShell 或 WSL 等配置即可开始输入命令。
3. 如需连接服务器，在设置中新增 SSH 配置，填写主机地址、端口、用户名以及密码或私钥，保存后点击该配置建立连接。
4. 在设置中调整默认 Shell、外观和快捷键；需要更多功能时，可直接在 Tabby 的设置页面安装插件或主题。

## 参考资料

- [Tabby 官网](https://tabby.sh/)
- [Tabby GitHub 仓库](https://github.com/Eugeny/tabby)
