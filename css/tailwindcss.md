# 介绍

一个原子化 css 框架

## vscode 插件

Tailwind CSS IntelliSense，有代码提示，样式预览等功能

**如何使用**

- 在项目根目录下创建一个 `tailwindcss.config.js` 文件，内容大致如下。

- 按如下创建完后，即可在项目中使用插件提示功能了，不需要安装 `tailwindcss` 到项目中
- 不过这种方式，需要在项目中引入一份符合 `tailwindcss` 规则的 `css` 文件，类似下面这种

```js
// ./src/index.js
import "../style/tailwindcss.css";
```

- 如果想增加自定义的样式，并且想要其能加入到插件的提示中去，即可在 `tailwindcss.config.js` 下 theme.extend 中加入配置
- 这样你在输入代码时，类似 `text-pri`、`bg-pri` 都会出现 `text-primary`、`bg-primary` 的代码提示，以及样式预览

```js
// tailwindcss.config.js
module.exports = {
  content: ["src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#199aba",
      },
    },
  },
  plugins: [],
};
```

### 参考资料

- [重新定义现代前端开发的设计系统！Tailwind CSS 终极指南](https://juejin.cn/post/7399986979729522722#heading-4)
