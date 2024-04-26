# react-fiber

**背景**
react 中，调用 setState 方法后，会自顶向下重新渲染组件，也就是该组件以及它的子组件全部需要渲染。

**每次视图更新流程如下**

1. 组件渲染生成一棵虚拟 dom 树
2. 新旧虚拟 dom 树对比，找出变动的部分（也就是 diff 算法）
3. 为真正改变的部分创建真实 dom，把它们挂载到文档，实现页面重渲染。

**react fiber 出现的背景**
在数据更新时，react 生成了棵更大的虚拟 dom 树，给第二步 diff 带来的很大压力——我们想要找到真正变化的部分，需要花费更长的时间。
js 占据主线程去做比较，渲染线程便无法做其他工作，用户的交互得不到响应，所以便出现了 react fiber。

**react fiber 是什么**
是一种数据结构：一个节点有三个指针

1. 指向第一个子节点
2. 指向下一个兄弟节点
3. 指向父节点
   这样使得它可以在 diff 中断恢复以后继续向后进行

**react fiber 的作用**
react fiber 没法让比较的时间缩短，但它使得 diff 的过程被分成一小段一小段的，因为它有了“保存工作进度”的能力。
js 会比较一部分虚拟 dom，然后让渡主线程，给浏览器去做其他工作，然后继续比较，依次往复，等到最后比较完成，一次性更新到视图上。