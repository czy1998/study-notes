# npm run 会发生什么

```json
  "name": "demo",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "node ./src/index.js",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  }
```

用 npm 进行管理的项目都会在根目录下生成一个 package.json 文件。
当我们执行`npm run build`的时候，npm 会去 package.json 的 scripts 中寻找名为 build 的脚本，然后去执行脚本里的内容。
但是我们直接在终端运行脚本里的内容 ng build，会发现报错，这是因为操作系统里没有 ng build 这条命令
我们通过`npm install`安装依赖时，会在 node_modules/.bin 目录下创建好名为 ng 的可执行文件：
![P](https://pic4.zhimg.com/80/v2-6153b2c81f03ba794c848c77a9f7e743_1440w.webp)
.bin 这个目录并不是任何 npm 包，其目录底下的可执行文件都是一个个软链接；其余 node_modules 目录下的文件夹都是一个个下载下来的依赖模块
当我们运行`npm run build`命令的时候，虽然 ng 没有全局安装，但是 npm 会到 ./node_modules/.bin 目录里找到 ng.js 文件作为 node 脚本来执行，也就是相当于执行了
./node_modules/.bin/ng build 命令（最后的 build 作为参数传入）。
**P.S.：如果我们只运行了 npm run 命令，那么就会去执行 scripts 字段里所有的脚本命令。**

## .bin 下的软链接

我们可以直接在项目根目录下的 package-lock.json 文件里搜索 ng.js，可以看到 npm 在 install 的时候，就将 bin/ng.js 作为 bin 声明了：
![P](https://pic4.zhimg.com/80/v2-447abfc1327edb961f55542f73f6053f_1440w.webp)
因此在 npm 安装的时候，就把 bin/ng.js 文件软链接到了 ./node_modules/.bin 目录下
也就是说，软链接相当于是一种映射，在执行 npm run xxx 的时候，就会到 node_modules/.bin 目录里找到对应的映射文件，然后再找到相对应的 js 文件来执行。

而如果我们想不用软链接的方式，直接使用全局安装的命令的话，我们就需要在安装包的时候，使用 npm install -g xxx 来安装这个依赖，那么就会将 xxx 其中的 bin 文件加入到全局中；这样就可以和 node 一样，直接使用诸如 xxx build 这样的命令了。

# 参考资料

[当你运行 npm run 命令时，会发生什么？](https://zhuanlan.zhihu.com/p/513706080)
