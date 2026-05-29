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
