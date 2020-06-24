# Webpack 基础

# webpack 是什么

webpack 是一个现代 JavaScript 应用程序的静态模块打包器，当 webpack 处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle。

# webpack 的核心概念

- entry: 入口
- output: 输出
- loader: 模块转换器，用于把模块原内容按照需求转换成新内容
- 插件(plugins): 扩展插件，在 webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要做的事情

# webpack.config.js

用于指定入口、出口、loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能。

```js
// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",     //使用development模式进行构建，另一种为production模式，后者出口文件会简洁许多
  entry: {
    "./src/index.js", //入口，可以设置多的入口
    }
  output: {                //出口 
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  //loader的设置
  module: {   
    //对某种格式的文件进行转换处理
    rules: [
      {
        test: /\.css$/, 
        //这个正则的意思就是匹配目录下所有以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader   
        use: [
          //将js的样式插入到style标签里
          "style-loader", 
          //将css文件转换为js
          "css-loader"
        ],  
        //style-loader要放到css-loader前面, 不然打包的时候就会报错了.
        //这是因为loader的执行顺序是从右往左，从下往上的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面。
        //单独使用了css-loader只能保证我们能引用css模块进来，但是并没有效果
        //而style-loader就可以创建一个style标签，并且把引入进来的css样式都塞到这个标签里
        //但是有一点需要注意了，我们在当前项目的js中引入了几个css模块，它就会生成几个style标签
      },
      {
        test: /\.(png|svg|jpg|git)$/, //这里是加载图片
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", //将打包之后的图片命名为图片的原始名称
              outputPath: "images/", 
              //存放到images文件夹下
              //name的[name]表示使用文件的原始名称, [ext]表示文件的原始类型, [hash]表示以哈希值命名, [path]表示资源相对于context的路径.
              //(context 默认为webpack.config.js)
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({   //插件在打包后会自动在dist文件夹下生成index.html, 而且还会帮我们把输出的js都引入进去
      title: "Webpack Output Management", //为index.html的标题
      filename: "admin.html", //生成的index.html的路径和名称
      template: "src/index.html", //指定你的模版路径的
    }),
    new CleanWebpackPlugin({    //在每次构建前清理/dist文件夹
      cleanAfterEveryBuildPatterns: ["dist"], // 这个是非必填的
    }),
  ],
};
```

# NPM脚本

平时打包都是使用`npx webpack`，这样是不太方便的, 我们可以设置一个快捷方式. 在`package.json`中添加一个npm脚本:在`scripts`中新加了一个配置`"build: "webpack"`

```js
"scripts": {
    "build": "webpack"
  },
```
