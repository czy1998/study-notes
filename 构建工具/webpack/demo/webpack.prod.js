const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.js')

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: '[name]_[chunkhash:8].js',
        publicPath: '', // 访问实际资源文件的路径.并不会对生成文件的路径造成影响，主要是对你的页面里面引入的资源的路径做对应的补全
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'newHtml', // 设置网页标题
            filename: 'newName.html', // 生成的index.html的路径和名称
            template: path.resolve(__dirname, 'public/index.html'), // 使用自己的模板，这里填这个模板的路径，使用了之后一些配置项就无效了，比如 title；
            // favicon：'https://inews.gtimg.com/newsapp_bt/0/14233516709/1000', // 指定网站图标路径，除了会在 html 上填充 favicon 相关内容，还会将该文件拷贝到打包文件夹下，非常好用
            inject: true, // script标签位于html文件的 body 底部
            // minify 是否压缩 html 文件。不设置时，如果 webpack 的 mode 为 production，就会压缩 html，移除多余的空格和注释之类的。
            minify: {
                minifyCSS: true, // 压缩html里的样式
                minifyJS: true, // 压缩html里的js
                removeEmptyElements: false, // 清理内容为空的元素
                removeComments: true, // 去除注释
                collapseWhitespace: true, // 压缩空格
                removeAttributeQuotes: true, // 去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
            },
        }),
    ],
})
