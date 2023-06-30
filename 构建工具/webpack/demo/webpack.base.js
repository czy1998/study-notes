const path = require('path')

module.exports = {
    entry: './src/index.js', // 入口，可以设置多的入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包后文件的输出路径
    },
}
