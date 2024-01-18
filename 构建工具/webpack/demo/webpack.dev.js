const path = require("path"); // 由于webpack无法直接操作文件夹，所以需要引入node的path模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.base.js");

module.exports = merge(commonConfig, {
  mode: "development",
  // 使用development模式进行构建，不会压缩
  // development默认配置了sourcemap
  // development默认无tree shaking配置，需要额外配置
  entry: "./src/index.js", // 入口，可以设置多的入口
  // entry: {
  //     main: './src/index.js', // 指定当前目录的index.js为打包的入口文件
  //     // 实际上是 entry: './src/index.js' 的具体写法，main为打包的Chunk Name
  // },
  output: {
    filename: "bundle.js",
    // filename: '[name].js',
    path: path.resolve(__dirname, "dist"), // 打包后文件的输出路径
    publicPath: "/out/",
    // 是用来为构建的文件生成满足特定需求的前缀，并将这个前缀提供给需要的 resolver、plugin 或者其他的配置字段
    // 访问实际资源文件的路径.并不会对生成文件的路径造成影响，主要是对你的页面里面引入的资源的路径做对应的补全
  },
  // 更容易地追踪 error 和 warning，JavaScript 提供了 source maps 功能，可以将编译后的代码映射回原始源代码
  devtool: "inline-source-map",
  // 开发环境本地启动的服务配置
  devServer: {
    compress: true, // 启用 gzip compression
    open: true, // 自动打开浏览器
    port: 9000, // 端口号
    static: {
      directory: path.resolve(__dirname, "dist"),
      // publicPath: '/dev/', // 决定外部能以怎样的路径通过 devServer来访问构建在内存中的文件，这个字段未显式设定时，则会去沿用 output.publicPath 字段的显式值（如果有的话，否则就用自己的 default 值 '/'）
    },
    proxy: {
      // 接口请求代理
      "/api": {
        target: serverBase[process.env.NODE_ENV],
        pathRewrite: {
          "^/api": "", // 如果不希望传递/api，则需要重写路径
        },
        secure: true, // 默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器。 如果需要可以将其设置为false
        changeOrigin: true,
        // 如果为true,表示服务端收到的headers.host就是服务器本身所在的ip地址，
        // 如果为false,表示服务端收到的headers.host就是开发者电脑所在的ip地址,即开发者浏览器地址栏显示的地址
        // changeOrigin无论是true还是false,都不会影响发送“请求网址‘,只会影响服务器方的host值
        // 参考文章：https://blog.csdn.net/Old_Soldier/article/details/127204618 《原来我误会了 changeOrigin 这么多年》
      },
    },
  },
  resolve: {
    //用于省略后缀名的配置
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    // 对某种格式的文件进行转换处理
    rules: [
      // 解析顺序是从下到上、从右往左
      /* exclude 的优先级高于 include，是 test && include && ( !exclude ) 的关系 */
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"],
        options: {
          presets: ["@babel/react"],
          plugins: [
            /* babel-plugin-import 是一款babel插件 */
            /* 通过 .babelrc 配置文件或者 babel-loader 模块编程引入. */
            [
              "import",
              {
                libraryName: "antd",
                libraryDirectory: "es", //表示从库的package.json的main入口；否则默认为lib文件夹
                style: "css", // 在项目编译阶段，可以对引入的 antd 样式文件进行编译，从而可以压缩打包尺寸 true
                // style: 'css', 直接引入经过打包后的 antd 样式文件
              },
            ],
          ],
        },
      },
      {
        test: /\.(less|css)$/i,
        //这个正则的意思就是匹配目录下所有以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
        use: [
          "style-loader", // 将js的样式插入到style标签里
          { loader: "css-loader", options: { modules: true } }, // 将css文件转换为js，并且使用 css Modules 方式引入
          "less-loader", // 将less转换为css
        ],
        // 单独使用了css-loader只能保证我们能引用css模块进来，但是并没有效果
        // 而style-loader就可以创建一个style标签，并且把引入进来的css样式都塞到这个标签里
        // 但是有一点需要注意了，我们在当前项目的js中引入了几个css模块，它就会生成几个style标签
      },
      {
        test: /\.(png|svg|jpg|git)$/,
        use: [
          {
            loader: "file-loader",
            // base64处理，减少请求数量，会使体积变大
            options: {
              name: "[name].[ext]",
              // 将打包之后的图片命名为图片的原始名称
              // [hash:10]取hash的前十位
              outputPath: "images/",
              // 存放到images文件夹下
              // name的[name]表示使用文件的原始名称, [ext]表示文件的原始类型, [hash]表示以哈希值命名, [path]表示资源相对于context的路径.
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 插件在打包后会自动在dist文件夹下生成index.html, 而且还会帮我们把输出的js都引入进去
    new HtmlWebpackPlugin({
      title: "newHtml", // 设置网页标题
      filename: "newName.html", // 生成的index.html的路径和名称
      template: path.resolve(__dirname, "public/index.html"), // 使用自己的模板，这里填这个模板的路径，使用了之后一些配置项就无效了，比如 title；
      // favicon：'https://inews.gtimg.com/newsapp_bt/0/14233516709/1000', // 指定网站图标路径，除了会在 html 上填充 favicon 相关内容，还会将该文件拷贝到打包文件夹下，非常好用
      // inject: true, // script标签位于html文件的 body 底部
      // minify 是否压缩 html 文件。不设置时，如果 webpack 的 mode 为 production，就会压缩 html，移除多余的空格和注释之类的。
      // minify: {
      //     minifyCSS: true, // 压缩html里的样式
      //     minifyJS: true, // 压缩html里的js
      //     removeEmptyElements: false, // 清理内容为空的元素
      //     // removeComments: true, // 去除注释
      //     collapseWhitespace: true, // 压缩空格
      //     // removeAttributeQuotes: true, // 去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
      // },
    }),
    new CleanWebpackPlugin({
      //在每次构建前清理/dist文件夹
      cleanAfterEveryBuildPatterns: ["dist"], // 这个是非必填的
    }),
    // new MiniCssExtractPlugin({
    //     // 如果需要将css打包成单独文件，则需要引入它
    //     filename: './css/main.css', // 非必填，默认当前目录main.css，如指定路径和文件名可这样填写
    //     chunkFilename: '[id].css', // 间接引入css的才会走chunk.filename
    // }),
  ],
});
