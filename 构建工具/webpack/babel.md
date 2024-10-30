# babel 介绍

### 介绍

Babel 是一个 JavaScript 编译器。主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以确保代码能够运行在当前和旧版本的浏览器或其他环境中。
但是，Babel 本身是无法转换代码的，它的转换功能是通过插件来实现的，Babel 插件是用于指定转换规则的工具，每个插件都可以处理不同的语法或功能转换。

经过 Babel 转换的代码默认会开启严格模式。

### 原理

首先是将源码转成抽象语法树(AST)，然后对语法树进行处理生成新的语法树，最后将新语法树生成新的 Javascript 代码，整个编译过程分为 parsing（解析）、transforming（转换）、generating（生成）。

> Babel 把 JS 语法分为 syntax 和 api。syntax 指像箭头函数、let、const、Decorators 等这些，在 JS 里是无法重写的；api 指可以通过函数重新覆盖的语法，类似 includes、map、Promise 等，凡是可以重写的都可以归属到 api。
> Babel 只负责编译新标准引入的语法，比如 Arrow function、Class、ES Module 等，它不会编译原生对象新引入的方法和 API，比如 Array.includes、Map、Set 等，这些需要通过 Polyfill 来解决。
> ![图解](https://img-blog.csdnimg.cn/20210322145844429.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzbG5fMTIzNDU2,size_16,color_FFFFFF,t_70)

### 参考资料

[Babel7](https://blog.csdn.net/wsln_123456/article/details/115065749)
[@babel/plugin-transform-runtime 这个包的使用场景是什么](https://www.cnblogs.com/longmo666/p/18116073)
