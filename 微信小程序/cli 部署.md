# cli 部署

除了使用 `开发者工具` 上传项目外，还可以使用 `cli` 来实现部署，速度会更快

## 如何使用

前期准备：

- 上传密钥：登录微信公众平台，进入该小程序的【管理-开发管理-小程序代码上传】页，生成一个小程序代码上传密钥
- IP白名单：由于没有固定的 ip，关闭该设置

具体流程：

1. 将密钥文件放入项目根目录，并在 `.gitignore` 中加入密钥，避免随 git 上传
2. 执行 `npm install miniprogram-ci -S` 安装 cli 工具
3. 根目录下书写一个执行脚本 `scripts/cli-upload`，内容大致如下

   ```js
   const { resolve } = require("node:path");
   const exec = require("util").promisify(require("child_process").exec);
   const config = require("../config");
   const ci = require("miniprogram-ci");

   async function main() {
     console.log();
     console.log();
     console.log("————————开始执行 cli-upload ————————");

     const { stdout: branchName } = await exec("git branch --show-current");

     const root = resolve(__dirname, "..");
     // 注意： new ci.Project 调用时，请确保项目代码已经是完整的，避免编译过程出现找不到文件的报错。
     const project = new ci.Project({
       appid: "wx11xxxx", // 小程序 appid
       type: "miniProgram",
       projectPath: root,
       privateKeyPath: `${root}/private.wx11xxxx.key`, // 存放密钥文件的路径
       ignores: ["node_modules/**/*"],
     });

     // 在有需要的时候构建npm
     const warning = await ci.packNpm(project, {
       // packNpm 会先扫描 projectPath 下的 package.json；只忽略 node_modules 无法阻止它把 taro-project/package.json 当成打包入口
       ignores: ["taro-project/**"], // 如果项目中有 taro 的项目文件，需要将其过滤
       reporter: (infos) => {
         console.log("【packNpm】：", infos);
       },
     });

     const uploadResult = await ci.upload({
       project,
       version: config.env[0].toUpperCase() + config.env.slice(1),
       desc: `【上传分支-所处环境】：${branchName}-${config.env}`,
       setting: {
         useProjectConfig: true, // true 表示默认使用 project.config.json
       },

       onProgressUpdate: (val) => {
         if (!["done", "doing"].includes(val?.status)) {
           console.log("【upload】：", val);
         }
       },
     });
     console.log("【Complete】：", uploadResult);
     console.log();
     console.log();
     console.log("————————执行结束 cli-upload ————————");
   }

   main();
   ```

4. `project.config.json` 内 `setting` 加入 `ignoreUploadUnusedFiles: true`，可减少上传包体大小
5. package.json 中加入命令 `deploy: node ./scripts/cli-upload.js`，若有其他前置命令，可自行修改
6. 运行 `npm run deploy` 脚本即可

## 结合 jenkins 自动部署

准备工作：

1. 登录小程序的【微信公众平台-开发管理】
   - 关闭 `小程序代码上传-IP白名单`
   - 生成 `小程序代码上传-小程序代码上传密钥`
2. 项目根目录新建 Jenkins 文件（首字母大写）

```
pipeline {
  agent any

  tools {
      nodejs 'node'
  }

  environment {
      PATH = "${WORKSPACE}/node_modules/.bin:${env.PATH}"
      HOME = '/var/jenkins_home'
  }

  stages {
      stage('Install') {
          steps {
              sh '''
                  set -e
                  node -v
                  npm install
              '''
          }
      }
      stage('Upload MiniProgram') {
          steps {
              withCredentials([
                  file(
                      credentialsId: 'wechat-miniapp-private-key-wxbaec384fa8069f19',
                      variable: 'PRIVATE_KEY_FILE'
                  )
              ]) {
                  sh '''
                      set -e
                      npm run deploy "$PRIVATE_KEY_FILE"
                  '''
              }
          }
      }
  }

  post {
      success {
          qyWechatNotification mentionedId: '', mentionedMobile: '', moreInfo: '', webhookUrl: 'xxx'
      }

      failure {
         qyWechatNotification mentionedId: '', mentionedMobile: '', moreInfo: '', webhookUrl: 'xxx'
      }
  }
}
```

3. 登录私有 jenkins 系统
   1. 进入 `setting-Security-Credentials`
      - 点击 `Add Credentials` 选择 `Secret file`
      - 上传第一步生成的 key
   2. 回到首页，点击 `新建Item`，输入名称后，选择流水线，点击下一步
      - 勾选 `Do not allow concurrent builds`
      - 勾选 `Triggers-Gitee webhook 触发构建`
      - 选择 `根据分支名过滤`，输入需要触发的分支，我这里是设置 `test`
      - `Gitee WebHook 密码` 点击生成
      - `流水线-生成` 选择 `Pipeline script from SCM`
      - SCM 选择 `git`
      - Repository URL 输入仓库的 ssh 链接
      - Credentials 选择 `ssh 秘钥`
      - `Branches to build-指定分支` 输入上面指定的分支，即 test
      - 点击 save
   3. 进入 `setting-Plugins`
      - 搜索安装 `Gitee` 插件
   4. 进入 `setting-System`
      - 找到 `gitee Configuration`
      - 点击添加 Gitee Connection

4. 前往目标仓库的 `webhook` 设置页面（这里以 gitee 为例）
   - 点击 `新建 WebHook`
   - 输入 `URL`（取自 3-2-2 里显示的 url）
   - 密码/签名密钥 里输入 上面生成的 `webhook 密码`
   - 点击新建

5. 现在目标仓库的 test 分支一推送就会触发 自动部署了
