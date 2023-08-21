# vite

webpack 的`冷启动`（刚启动项目的时候）和`热更新速度`一直被人诟病。而一众`基于浏览器原生 ESM 支持`实现的 `bundleless` 构建工具的问世，让前端开发者又看到了新的希望，其中 Vite 又属于是 `bundleless` 构建工具阵营中的集大成者。

### `bundle`与`bundleless`的差异

![浏览器直接加载资源, 不依赖bundle][1]
![bundle 的开发模式, 每次启动和文件变化时都需要重新打包][2]
![bundleless 文件的处理有浏览器的请求驱动, 单文件变动只需要处理单个文件][3]

### 特点

-   **快速的冷启动**：Vite 基于 ESM 的支持实现了 no-bundle 服务，并且通过 esbuild 完成对依赖预构建工作。
-   **毫秒级的热更新**：不同于 webpack 的 HMR（热更替），Vite 基于原生 ESM 实现一套 HMR 方案，其可以精确锁定 HMR 的更新边界，无需重新构建；并利用浏览器缓存策略提升请求速度。
-   **开箱即用**：Vite 就像 CRA（<font color='red'>不知道是什么</font>） 一样内置了对大部分文件的支持，并拥有一套，把用户的使用成本降到最低。
-   **强大的插件生态**：Vite 继承了 Rollup 优秀的插件接口设计，意味着 Vite 用户可以利用 Rollup 强大的生态系统进行功能的扩展。

### 预构建的作用

-   **转换文件格式**：由于一些第三方依赖并没有 ESM 版本，而为了能在 Vite 上运行他们，则需要将其他格式转化为 ESM 的格式并缓存入  `node_modules/.vite`（默认路径）。
-   **减少 HTTP 请求**：Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能。例如像 lodash-es 这种库里面许多单独的文件相互导入，当我们执行  `import { debounce } from 'lodash-es'`  时，浏览器同时发出 600 多个 HTTP 请求。

### 为什么 vite 生产环境要打包?

尽管原生 ESM 现在得到了广泛支持，但由于嵌套导入会导致额外的网络往返，在生产环境中发布未打包的 ESM 仍然效率低下（即使使用 HTTP/2）。为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）。

### 小结

**优势**： 前面我们介绍 Vite 特点的时候就已经介绍了 Vite 的优势了，这边就不再赘述了。

**不足**：

-   项目启动或使用懒加载时页面加载时间过长<br>
    `no-bundle` 是一个双刃剑，虽然减少了开发环节构建时间，但是大量未经打包的 ESM 模块可能导致出现大量 HTTP 请求，从而导致页面加载会变得很慢。这也是为什么 Vite 在生产环境还是选择 rollup 进行打包，而不是直接用原生 ESM 模块。

-   预构建影响 devServer 性能<br>
    由于首次预构建在 devServer 启动之前，若页面依赖较多预构建就会长时间阻塞 devServer，从而导致页面加载时间过长；当依赖发生变化，导致页面重新加载。<br>

-   生态相比于 webpack 还有一定差距，不过差距正在不断缩小。

### 参考文章

-   [vite 官网](https://www.vitejs.net/)
-   [webpack or esbuild: Why not both?](https://blog.logrocket.com/webpack-or-esbuild-why-not-both/)
-   [深入理解 Vite 核心原理](https://juejin.cn/post/7064853960636989454)

[1]: https://img-blog.csdnimg.cn/c184c0bf821949dfb02349a36d148a7e.png
[2]: https://img-blog.csdnimg.cn/f7686393f7a24be8b4cfc1a98d2ae83d.png
[3]: https://img-blog.csdnimg.cn/04c8a5b12ede47cfbc5c9781ac2ae6c5.png
