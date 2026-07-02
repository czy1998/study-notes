# mac首次使用配置

## 软件安装

1. 安装终端 [oh-my-zsh](./terminal/oh-my-zsh.md)
   - [切换shell](./linux/常用指令.md#切换终端工具-shell)
   - 配置文件内容

2. 迁移配置 git 文件
   - 目录位置 ~/.gitconfig
   - .gitconfig-own
   - .global-git-hooks/pre-push

3. 迁移其他文件
   - ~/desktop/fetchLogFileList.js
   - ~/.ssh

4. 安装 nvm
   - 安装 node 16.20.2
     - 全局安装
     - npm i nrm -g
       - nrm add hooshine https://verdaccio.hooshine.com/
     - npm i @hera/deploy -g
   - 安装 node 22.19.0
     - 全局安装
     - npm i git-branch-tool -g
     - npm i @openai/codex -g
       - 更新 ~/.codex/auth.json

       ```s
       {
        "auth_mode": "apikey",
        "OPENAI_API_KEY": "sk-W34MYHOpJZPnLAarDShWjgqp0l6S3Ie6616zplOzCC8N8wso"
       }
       ```

       - 更新 ~/.codex/config.toml

       ```s
        model = "gpt-5.4"

        openai_base_url = "https://api.code-relay.com/v1"

        [tui.model_availability_nux]
        "gpt-5.5" = 4
       ```

5. 安装软件
   - 微信
   - qq
   - wps
   - chrome
     - 插件
       - React Developer Tools
       - Redux DevTools
   - vscode
   - 微信开发者工具
   - 解压专家oka
   - docker
   - 网易云翻译
   - Raycast
     - https://www.raycast.com/
   - Snipaste 截图
   - clash verge
     - https://api.xfltd.cyou/cctv/user/client/get?token=NjYzOTAzOjdiMzIyNzBlZDU1NDE4MDM0N2UwMmJjZTJlZGNiZWU3MjdjOGEzNDg
