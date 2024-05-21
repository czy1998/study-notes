# postcss

postCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。例如：

- 自动添加浏览器前缀：自动根据指定的浏览器规则，为 CSS 属性添加适当的前缀，以确保在不同浏览器中的兼容性。
- CSS 预处理器支持：可以将 LESS、Sass 等预处理器编译成标准的 CSS。
- 代码优化：优化 CSS 代码，包括删除注释、空白、压缩代码等。
- 功能扩展：通过插件添加新的 CSS 功能，例如变量、混合、嵌套等。
- CSS 转换：将 CSS 转换为其他格式，例如将 CSS Modules 转换为标准的 CSS。
- 静态分析：分析 CSS 文件，以查找潜在的问题或优化机会。

### 常用插件

- postcss-px-to-viewport
  - 这是一个将 px 单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件，它可以将你 CSS 中的 px 单位转化为 vw，1vw 等于 1/100 视口宽度。
  - 可用于实现移动端适配
- autoprefixer
  - 配置了它就可以不用添加浏览器属性前缀。Autoprefixer 将使用基于当前浏览器流行度和属性支持的数据为您应用前缀。
  - Autoprefixer 使用 Browserslist 来定义目标浏览器。我们可以在 package.json 中添加 browserslist 字段，或者创建一个 .browserslistrc 文件
  - 如果以上两项配置都没有，其将默认使用 Browserslist 的默认配置（还需去查询确认）

### 参考资料

- [postcss 简介](https://www.cnblogs.com/aidixie/p/12771985.html)
