# tree shanking

Tree shaking 是一个通常用于描述移除 JavaScript 上下文中的未引用代码 (dead-code) 行为的术语。

它依赖于 ES2015 中的 import 和 export 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

简单来说，Tree Shaking 是一种依赖 ESM 模块静态分析实现的功能，它可以在编译时安全的移除代码中未使用的部分（webpack 5 对 CommonJS 也进行了支持）。

### 推荐文章

[Tree Shaking：从原理到实现](https://github.com/campcc/blog/issues/26)
