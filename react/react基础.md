# React 头部

- `import React from 'react'`  
  有 JSX 的地方，在文件开头就需要引入 React，因为实际上 JSX 是使用了 `React.createElement`，JSX 只是一个 JS 的语法糖，所以需要引入 React 包，否则会报错。

- `import ReactDOM from 'react-dom'`  
  react-dom 是一个把 React 代码渲染到网页端的包。如果在移动端渲染，就需要使用 React Native 的相关包。

- `import React, {Component} from 'react'`  
  作用相当于下面这两句话  
  1.`import React from 'react'` //导入 react 模块（组件）中的默认组件，并且命名为 React  
  2.`import {Component} from 'react'`//引入 react 文件中的成员组件 Component,可以用{}形式引入多个成员组件  
  注意：这里的 React 必须写在大括号前面，而不能顺序颠倒，否则会引起提示语法错误。

这属于 ES6 的解构赋值可以换为下面这种写法

```js
import React from "react";
const Component = React.Component;
```

# JSX

JSX 就是 Javascript 和 XML 结合的一种格式。React 发明了 JSX，可以方便的利用 HTML 语法来创建虚拟 DOM，当遇到`<`，JSX 就当作 HTML 解析，遇到`{`就当 JavaScript 解析.

- 在构建 JSX 时，React 会立即计算 `{}` 大括号内到内容，不管他最终是否会被渲染

在 jsx 中为标签添加样式，要用`className`

```js
<input
  className="input"
  value={this.state.inputValue}
  onChange={this.inputChange.bind(this)}
/>
```

要添加注释要写成`{/* 正确注释的写法 */}`  
要在文本框里输入一个\<h1>标签，并进行渲染，可以使用 dangerouslySetInnerHTML 属性解决

```js
<ul>
  {this.state.list.map((item, index) => {
    return (
      <li
        key={index + item}
        onClick={this.deleteItem.bind(this, index)}
        dangerouslySetInnerHTML={{ __html: item }} //这个可以对文本框中的html内容进行解析，且输出，所以<li>标签里就不需要写item了
      ></li>
    );
  })}
</ul>
```

# React.createElement

用 React 的 createElement 来创建 React DOM

```js
import React from "react";
import ReactDOM from "react-dom";

const title = React.createElement(
  "h1",
  { className: "main" },
  "Hello React (method 2)"
);
ReactDOM.render(title, document.getElementById("root"));
//ReactDom.render(<App />,document.getElementById('root'))如果是自定义的组件必须要大写字母开头
```

其中 `createElement(a, b, c)`

- 第一个参数 a：表示元素的类型，比如：h1, div 等
- 第二个参数 b：表示该元素上的属性，使用 JavaScript 对象方式表示
- 第三个参数 c：表示该元素内部的内容，可以是文字，可以继续嵌套另外一个 `React.createElement(a, b, c)`

# Fragment 标签

- 可以在不添加额外节点的情况下将子元素组合
- 通常使用 `<>...</>` 形式

```jsx
import React, { Component, Fragment } from "react";

const Demo = () => {
  return (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );
};
export default Demo;
```

# React 渲染与更新流程

1. 首次渲染：
   - React 使用初始状态 (initial state) 生成一棵 Virtual DOM 树。
   - React 将这棵 Virtual DOM 树转化为实际的 DOM 节点，并将其插入到页面中。
2. 状态更新：
   - 当调用 setState 或 useState 的状态更新函数时，React 使用新的状态生成一棵新的 Virtual DOM 树。
3. Virtual DOM Diffing：
   - React 将新的 Virtual DOM 树与之前的 Virtual DOM 树进行比较（diffing）。
   - diffing 算法会找出两棵树之间的差异。
4. 应用变更：
   - 根据 diffing 的结果，React 会对实际的 DOM 进行最小化的更新。
   - React 只会更新那些发生变化的 DOM 节点，而不会重新渲染整个树。
5. 新的 Virtual DOM 树：
   - 在完成实际 DOM 更新后，新的 Virtual DOM 树将成为 React 当前的 Virtual DOM 树，用于下一次的更新比较。
