# 常用 npm 包

### 目录

**node 相关**

- yargs-parser 终端参数解析器
- schema-utils 在加载器和插件中验证选项的包
- rimraf 节点的深度删除模块(如' rm -rf ')
- ora 优雅的终端机
- node-ssh 封装 ssh2 的一个非常轻量级的 Promise 包装器，可以连接客户端和服务器
- inquirer 公共交互式命令行用户界面的集合
- update-notifier 以非侵入式的方式通知用户您的更新包
- chalk 是一个非常简单的库，创建它的目的很简单——给你的终端字符串添加样式
- fs-extra Node.js fs 包中没有包含的方法，比如 copy(), remove(), mkdirs()
- cross-env 运行跨平台设置和使用环境变量的脚本

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

**日期格式化相关**

- dayjs 2KB 不可变日期时间库，具有相同的现代 API，可替代 Moment.js

**金额计算相关**

- currency.js 一个小型、轻量的处理金额计算的工具

**Web 自动化**

- puppeteer 一个高级的 API 来控制无头 Chrome 在 DevTools 协议

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
