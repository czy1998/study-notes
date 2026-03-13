# webpack 中加入 swc

## 预期效果

将 js 语法编译部分从 babel 中迁移出来，用 swc-loader 来实现，从而减少打包消耗的时间

## 实现流程

1.  安装 swc `npm i -D @swc/core swc-loader @swc/helpers`
2.  分析旧项目中的 babel 配置，去 swc 中找到对应的配置项，抽离出可被 swc 替换的配置，写入 `webpack.swcrc.js` 中，原 babel 配置文件只保留无法被替换的部分

    ```json
    // 原 .babelrc
    {
      "presets": ["@babel/preset-env", "@babel/preset-react"],
      // jsc.target: 'es5'
      // jsc.parser.jsx: true
      "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        // ✅ jsc.parser.dynamicImport: true
        "@babel/plugin-syntax-import-meta",
        // ✅ jsc.parser.importMeta
        "@babel/plugin-proposal-json-strings",
        // 把字符串字面量中的 “未转义的 分隔符 U+2028 / 段落分隔符 U+2029” 转义成安全的形式
        // 当目标浏览器包含旧环境时会自动启用
        // ‘\u2028’ 在浏览器中显示效果和 ' ' 空格一样
        // ✅ 不需要单独插件，SWC 默认已经处理这个问题
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        // 装饰器语法，使用旧的（第 1 阶段）类装饰器语法和行为
        // ✅ jsc.parser.decorators: true
        // ✅ jsc.transform.legacyDecorator: true
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        // 转换 class 的 静态属性、实例属性语法
        // loose 为 true 时，class 属性将会编译成 一个赋值表达式，而不是 Object.defineProperty
        // ✅ jsc.parser.classProperty: true
        // ✅ jsc.transform.useDefineForClassFields: false 松散模式
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        // class 的 私有方法语法
        // loose 的值 必须和 @babel/plugin-transform-class-properties 的一致
        // ✅ jsc.parser.privateMethod: true
        [
          "@babel/plugin-proposal-private-property-in-object",
          { "loose": true }
        ],
        // class 的 私有属性语法
        // loose 的值 必须和 @babel/plugin-transform-class-properties 的一致
        // ✅ jsc.parser.classPrivateProperty: true
        "@babel/plugin-proposal-function-sent",
        // 用来支持一个 已废弃的 ECMAScript 提案 —— function.sent 元属性
        // ❌ 项目中没有用到
        // ❌ chatgpt 说不支持，我也没在 swc 配置项里找到对应的配置项
        "@babel/plugin-proposal-export-namespace-from",
        // 支持语法 export * as ns from './mod';
        // ✅ jsc.parser.exportNamespaceFrom: true
        "@babel/plugin-proposal-numeric-separator",
        // 支持数字分隔符：1_000_000
        // ✅ jsc.parser.numericSeparator: true
        "@babel/plugin-proposal-throw-expressions",
        // 允许在表达式（expression）中使用 throw：const x = foo ?? throw new Error();
        // 通常是单行语句（statement）进行 throw：throw 123，和表达式是有区别的
        // ❌ 项目中没有用到
        // ❌ chatgpt 说不支持
        "@babel/plugin-proposal-export-default-from",
        // 支持：export v from './mod';
        // ❌ 项目中有用到
        // ❌ chatgpt 说：是语法解析支持，不是标准语法支持，不会自动 transform 成标准语法，target 降级时也不会特殊处理
        // ✅ jsc.parser.exportDefaultFrom: true
        "@babel/plugin-proposal-logical-assignment-operators",
        // 例子
        // a ||= b;
        // obj.a.b ||= c;
        //
        // a &&= b;
        // obj.a.b &&= c;
        // ❌ 项目中没有用到
        // ❌ chatgpt 说不支持，我也没在 swc 配置项里找到对应的配置项
        "@babel/plugin-proposal-optional-chaining",
        // 可选链语法：a?.b
        // ✅ jsc.parser.optionalChaining: true
        [
          "@babel/plugin-proposal-pipeline-operator",
          {
            "proposal": "minimal"
          }
        ],
        // 管道语法
        // const result = foo(bar(baz('hello world')))
        // const result = 'hello world' |> baz |> bar |>foo
        // ❌ 项目中没有用到
        "@babel/plugin-proposal-nullish-coalescing-operator",
        // 空值合并运算符：a ?? b
        // ✅ jsc.parser.nullishCoalescing: true
        "@babel/plugin-proposal-do-expressions",
        // do 表达式
        // ❌ 项目中有用到
        // ❌ chatgpt 说不支持，我也没在 swc 配置项里找到对应的配置项
        "@babel/plugin-proposal-function-bind",
        // obj::func;
        //    is equivalent to:
        //    func.bind(obj)
        // ❌ 项目中没用到
        // ❌ chatgpt 说：是语法解析支持，不是标准语法支持，不会自动 transform 成标准语法，target 降级时也不会特殊处理
        // ✅ jsc.parser.functionBind: true
        [
          "import",
          { "libraryName": "antd", "libraryDirectory": "es", "style": true },
          "antd"
        ],
        // antd 按需加载
        // ❌ chatgpt 说不支持，项目中有用到
        ["styled-jsx/babel", { "optimizeForSpeed": true }]
        // styled-jsx 语法
        // ❌ chatgpt 说不支持，项目中有用到
      ]
    }
    ```

    ```json
    // 新 .babelrc
    {
      // "presets": ["@babel/preset-env", "@babel/preset-react"],
      "plugins": [
        // "@babel/plugin-syntax-dynamic-import",
        // "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-json-strings",
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        // ["@babel/plugin-proposal-class-properties", { "loose": true }],
        // ["@babel/plugin-proposal-private-methods", { "loose": true }],
        // ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        // ❌ "@babel/plugin-proposal-function-sent",
        // "@babel/plugin-proposal-export-namespace-from",
        // "@babel/plugin-proposal-numeric-separator",
        // ❌ "@babel/plugin-proposal-throw-expressions",
        // "@babel/plugin-proposal-export-default-from",
        // ❌ "@babel/plugin-proposal-logical-assignment-operators",
        // "@babel/plugin-proposal-optional-chaining",
        // ❌ [
        //     "@babel/plugin-proposal-pipeline-operator",
        //     {
        //         "proposal": "minimal"
        //     }
        // ],
        // "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-do-expressions",
        // "@babel/plugin-proposal-function-bind",
        [
          "import",
          { "libraryName": "antd", "libraryDirectory": "es", "style": true },
          "antd"
        ],
        ["styled-jsx/babel", { "optimizeForSpeed": true }]
      ]
    }
    ```

    ```js
    // webpack.swcrc.js
    module.exports = {
      jsc: {
        target: "es5",
        parser: {
          syntax: "ecmascript",
          jsx: true,
          dynamicImport: true, // 支持动态导入
          importMeta: true,
          decorators: true, // 如果使用了装饰器语法
          classProperty: true,
          privateMethod: true,
          classPrivateProperty: true,
          exportNamespaceFrom: true,
          numericSeparator: true,
          exportDefaultFrom: true,
          optionalChaining: true,
          nullishCoalescing: true,
          functionBind: true,
        },
        transform: {
          legacyDecorator: true,
          useDefineForClassFields: false,
        },
        loose: false,
        externalHelpers: true, // 使用外部的@swc/helpers，减少打包体积
        // Requires v1.2.50 or upper and requires target to be es2016 or upper.
        keepClassNames: false,
      },
      // env: {
      //   mode: "usage", // 按需注入 polyfill
      //   coreJs: "3.26.1", // 指定 core-js 版本，core-js 是一个 JavaScript 标准库的 polyfill（垫片）实现库
      // },
    };
    ```

3.  更新 webpack module 配置

    > `swc-loader` 要和 `babel` 一起用的话，`options.parseMap` 必须设置为 true
    > `babel-loader` 要开启缓存模式

    ```js
    // webpack.common.config.js
    module.exports = {
      module: {
        rules: [
          {
            test: /\.(js)$/,
            use: [
              "babel-loader?cacheDirectory=true",
              {
                loader: "swc-loader",
                options: { ...swcConfig, parseMap: true },
              },
            ], // swc-loader 要和
            include: path.join(__dirname, "src"),
            exclude: /(node_modules)/,
          },
        ],
      },
    };
    ```

4.  运行打包命令，修改遇到的问题
    - 早期页面JSX中使用 `>>` 作为内容，而没有用引号包裹为字符串

    ```sh
    SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at /Users/xxx/Desktop/work/web/project-A/node_modules/swc-loader/src/index.js:104:45
    ```

    - 经过排查，发现是打包配置里没有配置 `source-map`，而 swc-loader options 设置了 `parseMap` 导致的
    - 去掉 `parseMap` 选项后，重新打包，其他配置不变，本次测试了 `mode: 'production'`、`mode: 'development'` 两种情况的打包时间
      - `production`: 122.563s
      - `development`: 53.625s
    - 询问 cc 得知
      - `Development` (53s): 主要是文件读取、通过 swc-loader 转译（这很快）、简单的模块合并。
      - `Production` (122s): 包含 `Development` 的所有步骤，额外增加了全量的 JS 压缩、CSS 压缩、作用域提升等繁重的计算任务。
    - 优化方案：利用 `SWC` 来替代 `Terser` 进行代码压缩。SWC 是基于 Rust 编写的，其压缩速度通常比 Terser 快 7-10 倍。

    ```js
    module.exports = {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          minify: (file, sourceMap) => {
            // 使用 swc 进行压缩，速度比 terser 快很多
            const swc = require("@swc/core");
            const filename = Object.keys(file)[0];
            const content = file[filename];
            const { code, map } = swc.minifySync(content, {
              compress: {
                drop_console: true, // 保持了你原有的去除 console 配置
                drop_debugger: true,
              },
              mangle: true,
              sourceMap: !!sourceMap,
            });
            return { code, map };
          },
        }),
      ],
    };
    ```

    - 优化过后，`mode: 'production'`下打包时间为 90s

5.  运行本地启动命令，修改遇到的问题
    - 第3步中，我将 `babel-loader` 放在了 `swc-loader` 前面
      本地服务启动后发现，babel 配置中的部分插件效果和原先有所区别(如 `styled-jsx/babel`)，这时候想到`loader` 处理是从下到上，就想着先用 `babel-loader` 再去用 `swc-loader`，于是我就把 `babel-loader` 放在后面

      重新启动后，浏览器报错了，信息如下

      ```sh
      Uncaught ReferenceError: LocaleProvider is not defined
        at ./src/index.js (index.js:218:6)
        at __webpack_require__ (bootstrap:837:1)
        at fn (bootstrap:129:1)
        at 0 (main_1cc14bbe.js:238391:18)
        at __webpack_require__ (bootstrap:837:1)
        at bootstrap:1016:1
        at bootstrap:1016:1
      ```

      然后查了下打包后的 `main_1cc14bbe.js` 文件，找到 `./src/index.js` 入口文件所在，发现其中引入的 `LocaleProvider` 没有被 `babel-plugin-import` 处理，内容如下:

      ```js
      react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          LocaleProvider,
          {
            locale:
              antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_9___default.a,
          },
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react_redux__WEBPACK_IMPORTED_MODULE_12__["Provider"],
            {
              store: store,
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              hera_ui__WEBPACK_IMPORTED_MODULE_10__["ConfigProvider"],
              ConfigProviderProps,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _router_Pages__WEBPACK_IMPORTED_MODULE_18__["default"],
                null,
              ),
            ),
          ),
        ),
        document.getElementById("app"),
      );
      ```

      看了下正式环境的 `main` 文件，内容如下:

      ```js
      react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          antd_es_locale_provider__WEBPACK_IMPORTED_MODULE_1__["default"],
          {
            locale:
              antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_10___default.a,
          },
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"],
            {
              store: store,
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              hera_ui__WEBPACK_IMPORTED_MODULE_11__["ConfigProvider"],
              ConfigProviderProps,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                _router_Pages__WEBPACK_IMPORTED_MODULE_19__["default"],
                null,
              ),
            ),
          ),
        ),
        document.getElementById("app"),
      );
      ```

      这时候感觉奇怪了，明明都先用 `babel-loader` 处理了，于是就去问了 cc，说是可能在 babel 处理完后传递给 swc 时出现问题了。尝试了 cc 提供的几个方案（`babel-loader` 加 `source-map` 选项、`swc-loader` 去掉 `parseMap` 选项）都没有效果

      然后我直接把 `babel-loader` 注释，重新启动。项目是正常启动了，但是页面样式完全错乱了。

      于是，恢复 `babel-loader` 然后将其放在 `swc-loader` 的前面，重新启动。项目正常启动了，样式也正确了。

      cc 的解释:

      ```md
      1. 为什么原来的顺序（先 Babel 后 SWC）会报错？

      在 Webpack 中，use 数组的执行顺序是 从下往上（从右往左） 的。

      - 原配置：use: ['swc-loader', 'babel-loader']
      - 预期流程：
        a. babel-loader 先执行：处理 import，注入 antd 样式，转换 styled-jsx。此时代码已经变了。
        b. swc-loader 后执行：理应接收 Babel 改过的代码，将其转译成 ES5。
      - 实际情况：
        由于 swc-loader（特别是你使用的 ^0.2.7 老版本）存在缺陷，它在执行时并没有使用 Babel 传递过来的代码字符串，而是直接去磁盘上重新读取了源文件（Raw Source）。
      - 结果：Babel 的所有工作（按需加载、样式注入）都被 SWC 这一步“覆盖”并丢弃了。SWC 编译的是原始代码，自然就导致了 LocaleProvider 变量未定义（因为 Babel 的 import 转换没生效）以及样式缺失。

      2. 为什么现在的顺序（先 SWC 后 Babel）能成功？

      你将 babel-loader 放在 swc-loader 的“前面”（即数组索引靠前，意味着后执行）：

      - 新配置：use: ['babel-loader', 'swc-loader']
      - 实际流程：
        a. swc-loader 先执行：它读取源文件，处理 JSX、TS 语法，将其转译成标准的 JavaScript 代码。关键点在于：它保留了 import 语句（ES Modules），没有将其转成 require。
        b. babel-loader 后执行：Babel 作为一个成熟的 Loader，它能够正确接收上一个 Loader（SWC）输出的代码字符串。
        c. Babel 插件生效：Babel 看到代码里依然有 import { Button } from 'antd'，于是 babel-plugin-import 正常工作，将其转换为按需加载的样式引用。
      - 结果：SWC 负责了“脏活累活”（语法转译，速度快），Babel 负责了“精细活”（插件处理，功能全）。两者衔接上了，所以项目跑通了。
      ```

      但是经测试，发现 `styled-jsx/babel` 转换还是有些问题:
      1. jsx 中 后代选择器，本地所有后代会生效，生产环境则只生效了子代一层
      2. 浏览器查看样式来源，本地是跳转到 当前 div 同层下到 style 标签，生产环境则是跳转到 <head /> 下的一个 style 标签(`<style type="text/css" data-styled-jsx=""></style>`)

      ```jsx
      // 项目原代码
      <style jsx>
        {`
            .empty_content {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 45px 0 44px;
            }
            .empty_content img {
                width: 84px;
                heigth: 84px;
            }
            .empty_content span {
                margin: 5px 0 10px;
                color: #999;
            }
        `}
      </style>
      <div className="empty_content">
        <img
          src="https://assets.ecaisys.com/2022/6/23/F28XO2HL72/e75820a8f0e1d3a89531e58046bdaa4d.png"
        />
        <span>暂无数据</span>
        <Button type="primary" onClick="{this.addReport}">新增汇报</Button>
      </div>

      // 浏览器生产环境 html
      <div class="jsx-2157041604 empty_content">
        <img
          src="https://assets.ecaisys.com/2022/6/23/F28XO2HL72/e75820a8f0e1d3a89531e58046bdaa4d.png"
          class="jsx-2157041604"
        />
        <span class="jsx-2157041604">暂无数据</span>
        <button type="button" class="ant-btn ant-btn-primary">
          <span>新增汇报</span>
        </button>
      </div>

      // 生产环境样式
      // 最外层的 div
      // .empty_content.jsx-2157041604 {
      //     display: flex;
      //     flex-direction: column;
      //     -webkit-box-align: center;
      //     align-items: center;
      //     padding: 45px 0px 44px;
      // }
      // antd Button 内的 content
      // jsx 没有生效

      // 浏览器本地环境 html
      <div class="empty_content">
        <img
          src="https://assets.ecaisys.com/2022/6/23/F28XO2HL72/e75820a8f0e1d3a89531e58046bdaa4d.png"
        />
        <span>暂无数据</span>
        <button type="button" class="ant-btn ant-btn-primary">
          <span>新增汇报</span>
        </button>
      </div>
      // 本地环境样式
      // 最外层的 div
      // .empty_content {
      //     display: flex;
      //     flex-direction: column;
      //     align-items: center;
      //     padding: 45px 0 44px;
      // }
      // antd Button 内的 content
      // .empty_content span {
      //      margin: 5px 0 10px;
      //      color: #999;
      //  }
      ```

      于是，现在有三种办法处理这个问题:
      1. 将所有用到的 `styled-jsx` 写成 `less` 并卸载 `styled-jsx`
      2. 找出所有的 `styled-jsx` ，检查其是否是因为写法问题没有生效，修改代码
      3. 尝试用 `swc` 下的 `@swc/plugin-styled-jsx` 插件替换
         - 把 `babel` 里的 `styled-jsx` 注释掉
         - `swc` 配置中写入如下

           ```js
             {
               "jsc": {
                 "experimental": {
                   "plugins": [
                     ["@swc/plugin-styled-jsx", {}]
                   ]
                 }
               }
             }
           ```

         - 项目启动后出现如下错误，暂时没有发现解决问题，先停止

           ```sh
             ERROR in ./src/Page/ApplyCenter/TaskDataStatistics/ReportSetting/ReportSettingList.js
             Module build failed (from ./node_modules/swc-loader/src/index.js):
             Error: plugin

               × failed to invoke plugin on 'Some("/Users/hooshine/Desktop/work/web/hera-medicine/src/Page/ApplyCenter/TaskDataStatistics/ReportSetting/ReportSettingList.js")'

             @ ./src/router/index.js 850:9-89
             @ ./src/layout/layoutCom.js
             @ ./src/router/Pages.js
             @ ./src/index.js
             ℹ ｢wdm｣: Failed to compile.
           ```

## 最终结果

实现了冷启动、打包的提速，提升幅度约达 25%

打包: 123s => 93s
