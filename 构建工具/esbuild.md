# esbuild

### 简介

`esbuild` 基于 Golang 开发的一款打包构建工具，相比传统的打包构建工具，主打性能优势，在构建速度上可以快 10~100 倍。

下图为 esbuild 和其他的构建工具用默认配置打包 10 个 three.js 库所花费时间的对比，我们能看见 esbuild 比 webpack5 的构建速度快了很多倍。
![图1](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63cbbab4f2b24adf8176182be0ca7a2f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 为什么能这么快？

根据官网 esbuild 的 FAQ 给出解释，简要总结下 esbuild 相比于传统构建工具有以下优势：

- **语言优势**。esbuild 是基于 go 语言，传统的 JS 开发的构建工具并不适合资源打包这种 CPU 密集场景下，go 更具性能优势。
- **多线程能力**。go 具有多线程运行能力，而 JS 本质上就是一门单线程语言。由于 go 的多个线程是可以共享内存的，所以可以将解析、编译和生成的工作并行化。
- **从零开始**。从一开始就考虑性能，不使用第三方依赖，从始至终使用的是一致的数据结构从而避免昂贵的数据转换。
- **内存的有效利用**。webpack 的工作机制在经过不同的工具链的时候，都会进行（`string => AST => string => ... => string`）string 到 AST 的不断转换，这样实际上会占用更多的内存并降低速度。而 esbuild 从头到尾尽可能的共用一份 AST，从而降低内存的占用，提升编译速度。

### 核心 API

esbuild 对外提供了两个核心 API——tranform 和 build，主要功能如下：

- 支持将 js、ts、jsx、tsx、css 等一系列文件的转译。
- 支持文件监听和 devServer。
- 支持 sourcemap。
  - sourceMap 是一项将编译、打包、压缩后的代码映射回源代码的技术
    由于打包压缩后的代码并没有阅读性可言，一旦在开发中报错或者遇到问题，直接在混淆代码中 debug 问题会带来非常糟糕的体验，
    sourceMap 可以帮助我们快速定位到源代码的位置，提高我们的开发效率。
    sourceMap 其实并不是 esbuild 特有的功能，而是 esbuild 支持 sourceMap ，像 JQuery 也支持 souceMap。
- 支持 code-splitting。
- 支持 tree-shaking 和文件压缩。
- ...

详细的可见[官方文档][1]。

### esbuild-loader

也许我们单纯去使用 esbuild 去编译打包我们的项目还是比较麻烦，esbuild 所提供的 esbuild-loader 帮我们解决了这个难题。在 webpack 中我们可以通过 esbuild-loader 体验到惊人的 JS/TS 文件编译的速度和高效的压缩能力。

接下来对比下在 webpack 环境下 `esbuild-loader` 和 `TerserPlugin` 的压缩效率：

**TerserPlugin 的压缩耗时：**
![图1][2]

**esbuild-loader 的压缩耗时：**
![图2][3]

两者压缩之后的 JS 产物的大小几乎没有太大差别，但是 `TerserPlugin` 所花费的时间是 `esbuild-loader` 的 10 多倍。

### 小结

**优势**：

- 构建速度非常快
- 压缩能力也非常强，可支持 JS 和 CSS 的压缩。

**不足**：

- 其 tranform 的 API 不能将产物编译到 es5 及以下，产物无法兼容低版本的浏览器。
- 直接使用 esbuild 进行打包具有一定的使用成本，并且不能完全覆盖使用场景。
- 在代码分割和 CSS 处理方面功能还有待完善。

### 参考资料

1. [esbuild api 文档](https://esbuild.github.io/api/)

[1]: https://esbuild.github.io/api/
[2]: https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00cc62c2e33c46169789efb629db0279~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?
[3]: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/141d7567ef5e4e77971eebe7f53f542c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?
