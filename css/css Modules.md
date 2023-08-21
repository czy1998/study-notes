# css Modules

### 全局作用域

```less
.demo {
    color: red;
    :global {
        .title {
            color: green;
        }
    }
}
```

### 继承

```css
.className {
    background-color: blue;
}

.title {
    composes: className;
    color: red;
}
```

# 参考文章

[CSS Modules 用法教程](https://www.ruanyifeng.com/blog/2016/06/css_modules.html)
[CSS Module](https://www.jianshu.com/p/35da48b0e5ed)
