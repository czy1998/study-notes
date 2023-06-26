# css 变量

### :root

这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。所有主流浏览器均支持 :root 选择器，除了 IE8 及更早的版本。在声明全局 CSS 变量时 :root 会很有用。

### CSS 变量（`--*`）

带有前缀 -- 的属性名，比如`--example`，表示的是带有值的自定义属性，其可以通过 var 函数在全文档范围内复用的。

### var()

var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）

```css
:root {
    --first-color: #488cff;
}

#firstParagraph {
    background-color: var(--first-color);
    color: var(--second-color);
}
```

```js
<div style={{ color: 'var(--first-color)' }}>hello world</div>
```
