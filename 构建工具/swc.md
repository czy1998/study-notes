# swc

### 简介

SWC 全称为 `Speed Web Compiler`，其是基于 Rust 实现的工具，目前被很多前端知名项目（Next.js、Parcel 和 Deno）所使用。
其编译 JS/TS 文件速度比 Babel 快不少，其所对标的工具就是 Babel。

### 核心功能库

**@swc/cli**: CLI 命令行工具，可通过命令行编译文件。
**@swc/core**: 编译转码核心的 API 的集合。
**swc-loader**: 该模块允许您将 SWC 与 webpack 一起使用。
**@swc/wasm-web**: 该模块允许您使用 WebAssembly 在浏览器内同步转换代码。
**@swc/jest**: 该模块可以让 jest 的 tranform 速度更快。
而这些功能库几乎都能在 Babel 找到对应的库，例如`@babel/cli`、`@babel/core`、以及 `babel-loader` 等。也更加印证了 SWC 的竞争对手就是 Babel。

### 配置文件

swc 有自己的配置文件`.swcrc`，与 babel 的配置文件不同的是 swc 的配置文件基本做到开箱即用，不需要进行对插件或预设进行二次安装。

```json
{
    "jsc": {
        "parser": {
        // 语法,支持ecmascript和typescript
        "syntax": "ecmascript",
        // 是否解析jsx，对应插件 @babel/plugin-transform-react-jsx
        "jsx": false,
        // 动态加载 等同于 @babel/plugin-syntax-dynamic-import
        "dynamicImport": true,
        // 装饰器 等同于 @babel/plugin-syntax-decorators
        "decorators": false,
        // 顶层await 等同于@babel/plugin-syntax-top-level-await
        "topLevelAwait": false,
        ...
        // 支持多种编译插件的配置
        },
        // 编译目标
        "target": "es5",
        // 等同babel-preset-env的松散配置
        "loose": false,
        // 输出代码可能依赖于辅助函数来支持目标环境。
        "externalHelpers": false
    },
    // 压缩代码
    "minify": false
}
```

更多配置可见[官方文档][1]。

### 小结

**优势**：

-   编译速度快
-   迁移成本低，基本可以从 babel 无痛迁移并能覆盖基本的使用场景。

**不足**：

-   生态相比于 babel 来说不够完善，用户的覆盖面也不高，某些场景可能会有试错成本。
-   若需要深入开发的话，需要学习 Rust，有较高的学习成本。
-   SWC 虽然有 bundle 能力，但是 bundle 能力还不太完善，目前其在工程化领域更像是 Compiler（编译工具）。

### 参考资料

1. [SWC 文档-配置文件部分](https://swc.rs/docs/configuration/swcrc)

[1]: https://swc.rs/docs/configuration/swcrc
