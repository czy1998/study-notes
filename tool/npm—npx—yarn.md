# npm 
Node.js 官方提供的包管理工具

### 常用命令

```js
npm install npm@latest -g    //自我更新
npm help                     //查看npm命令列表
npm -l                       //查看各个命令的简单用法
npm -v                       //查看npm的版本
npm config list -l           //查看npm的配置
npm init -y                  //初始化项目
npm config set registry http://registry.npm.taobao.org          //设置为淘宝镜像源
npm list                     //列出安装的模块
npm info                     //查看模块具体信息
npm install/i $module@$version [-global/-g] [--save]/[-S] [--save-dev]/[-D] [-f]    //安装包
npm uninstall $module        //删除包，参数同install
npm update                   //更新包，参数同install
npm install                  //安装 dependencies 字段和 devDependencies 字段中的所有模块
npm [run] $script            //执行package.json 文件scripts 字段中的脚本
npm bin                      //列出当前项目可执行脚本目录
npm config set prefix "E:/nodejs/npm_global"                    //修改npm全局包路径
npm config set cache "E:/nodejs/npm_global/npm_cache"           //修改npm全局包缓存路径
```

  全局安装会安装到node安装目录的node_modules并且安装的模块命令在系统环境变量中，而本地安装只会安装到本项目的node_modules中。  
    
  [--save]/[-S]代表是否将依赖信息添加到package.json的dependencies中。  
    
  [--save-dev]/[-D]代表将依赖信息以开发模式添加到package.json的devDependencies中。  
  
  -f代表无论以前是否安装过某模块，都重新安装  

# cnpm 
淘宝团队做的国内镜像，因为npm的服务器位于国外可能会影响安装

### 常用命令
```js
npm install cnpm -g --registry=https://registry.npm.taobao.org    //安装cnpm
npm config get registry                                           //查看正在使用的镜像地址
npm config set registry https://registry.npm.taobao.org           //设置新镜像地址
//cnpm其他命令同npm
```

# npx
npx是npm5.2之后发布的一个命令。官网说它是“execute npm package binaries”，就是执行npm依赖包的二进制文件，简而言之，就是我们可以使用npx来执行各种命令。  
使用npx可以在命令行直接执行本地已安装的依赖包命令，不用在scripts脚本写入命令，也不用麻烦的去找本地脚本。  
使用npx，可以在不全局安装依赖包的情况下，运行命令，而且运行后不会污染全局环境

### 运行原理
step1：去node_modules/.bin路径检查npx后的命令是否存在，找到之后执行；

step2：找不到，就去环境变量$PATH里面，检查npx后的命令是否存在，找到之后执行;

step3：还是找不到，自动下载一个临时的依赖包最新版本在一个临时目录，然后再运行命令，运行完之后删除，不污染全局环境。

# yarn
Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 ，正如官方文档中写的，Yarn 是为了弥补 npm 的一些缺陷而出现的

### yarn的安装
1. yarn官网下载mis安装程序安装
2. npm install -g yarn

### 修改yarn全局包与缓存的安装位置
```js
yarn global bin               //检查当前yarn的bin的位置
yarn global dir               //检查当前yarn的全局安装位置
yarn cache dir                //检查当前yarn的全局缓存位置
yarn config set global-folder "D:\Software\yarn\global"               //修改当前yarn的全局安装位置
//修改后如果用yarn安装的全局目录没有生效，重新打开cmd再用yarn安装即可。
yarn config set cache-folder "D:\Software\yarn\cache"                 //相应修改yarn的缓存
yarn cache clean              //清除全局缓存
```

### 常用命令

```js
yarn [global] add [package]@[version]               //安装包
yarn upgrade [package | package@tag | package@version | @scope/]... [--ignore-engines] [--pattern]  //更新包
yarn remove <package...>                            //删除包
yarn list [--depth] [--pattern]                     //列出所有包和它们的依赖
yarn run [script] [<args>]                          //运行脚本
yarn config set registry http://registry.npm.taobao.org               //yarn指定淘宝源
```
