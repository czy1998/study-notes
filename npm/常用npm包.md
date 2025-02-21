# 常用 npm 包

### 目录

**提效**

- @antfu/ni 运行脚本时自动识别项目所使用的 npm 包管理工具，并用其做关联操作
- vconsole 一个轻量、可拓展、针对手机网页的前端开发者调试面板
- http-server 一个简单的、零配置的命令行静态 HTTP 服务器
- serve 也能帮助你启动一个 http 服务器，相对于上面的工具，这个工具 github 最近更新比前者更近，推荐使用这个
  - 需要位于相应目录下，-L 不打印任何请求信息 -p 指定端口号
  - serve -Lp 3030

**node 相关**

- yargs-parser 终端参数解析器
- [schema-utils][1] 在加载器和插件中验证选项的包
- rimraf 节点的深度删除模块(如' rm -rf ')
- ora 优雅的终端机
- unjs/consola Node.js 和浏览器的优雅控制台日志
- node-ssh 封装 ssh2 的一个非常轻量级的 Promise 包装器，可以连接客户端和服务器
- inquirer 公共交互式命令行用户界面的集合
- update-notifier 以非侵入式的方式通知用户您的更新包
- chalk 是一个非常简单的库，创建它的目的很简单——给你的终端字符串添加样式
- fs-extra Node.js fs 包中没有包含的方法，比如 copy(), remove(), mkdirs()
- cross-env 运行跨平台设置和使用环境变量的脚本
- glob 使用 shell 使用的模式匹配文件。JavaScript 中最正确和第二快的 glob 实现
- dotenv 可以将一个 `.env` 文件中的变量加载到 `process.env` 中
- json-server 可以让你使用一个 JSON 文件快速创建一个完整的 RESTful API 服务器，帮助你在没有后端服务器的情况下进行前端开发和测试

**Lint 相关**

- husky git 钩子
- eslint 识别和报告 ECMAScript/JavaScript 代码中发现的模式的工具
- prettier 代码格式化器
- pretty-quick 在更改后的文件上运行 pretty
- stylelint 一个强大的 CSS linter，帮助您避免错误和强制约定
- lint-staged 由 git 暂存的 Lint 文件
- jest 单元测试工具
- @testing-library/react 简单而完整的 React DOM 测试实用程序，鼓励良好的测试实践
- @testing-library/user-event 模拟用户与浏览器交互时将在浏览器中发生的真实事件
- @testing-library/jest-dom 自定义匹配器来测试 DOM 的状态
- @umijs/test 封装好的单测测试工具

**组件相关**

- father 一个无捆绑/捆绑构建工具
- dumi React 组件的文档生成器
- classnames 一个简单的工具，用于有条件地连接类名
- react-beautiful-dnd 用于实现 React 内的拖拽功能

**日期格式化相关**

- dayjs 2KB 不可变日期时间库，具有相同的现代 API，可替代 Moment.js

**金额计算相关**

- currency.js 一个小型、轻量的处理金额计算的工具

**Web 自动化**

- puppeteer 一个高级的 API 来控制无头 Chrome 在 DevTools 协议

**Dom 相关**

- html2canvas 基于 DOM，根据页面上可用的信息构建截图。

### 使用介绍

**cross-env**
cross-env 是运行跨平台设置和使用环境变量的脚本

```js
// parkage.json
{
    "scripts": {
        "test": "cross-env APP_ENV=test node server.js"
    }
}
```

这里 cross-env 可以帮你设置环境变量，由于在不同系统平台设置环境变量的指令基本都不同（windows、mac 等），如果写死一种，则在其他系统下执行可能会报错.
cross-env 就可以帮你在不同系统下正确的的设置环境变量.

[1]: https://www.51cto.com/article/703602.html
