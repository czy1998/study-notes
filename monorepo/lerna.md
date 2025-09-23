### lerna 简介

lerna 是一个多包管理工具

```sh
# 将 lodash 包安装到 my-package 包中的依赖中
# lerna add lodash --scope=my-package
npx lerna add <package> [--scope=<package>]

# 更新一个子包的一个依赖
lerna exec --scope=package-name npm install dependency-name@version

lerna list # 查看所有的子包名称

```

**更新子包依赖的流程（from chatGPT3.5）**

> 我自己常用上方的前两条指令

1. 进入根目录，执行 lerna list 命令，查看所有的子包名称。
2. 找到需要更新依赖的子包名称，进入该子包目录。
3. 执行 npm update 或 yarn upgrade 命令，更新子包的依赖包。
4. 返回到根目录，执行 lerna bootstrap 命令。(重新安装所有的依赖包，并将所有子包的依赖包链接到根目录的 node_modules 目录中，以便于在不同的子包之间共享依赖。)

**lerna bootstrap 命令会执行以下操作**

1. 从根目录下的 package.json 文件中读取所有的依赖项和子包列表。
2. 在根目录下执行 npm install 命令，安装根目录下的所有依赖项。
3. 遍历所有子包，依次执行以下操作：
   1. 从子包的 package.json 文件中读取依赖项列表和包名称。
   2. 在子包目录下执行 npm install 命令，安装子包依赖项。
   3. 在根目录下的 node_modules 目录中，创建一个软链接，指向该子包的 node_modules 目录。

#### dumi + lerna 创建组件库基本流程

1. 使用 dumi 构建一个静态站点结构
2. 安装 lerna, 执行 lerna init, 修改 lerna.json 添加 `"packages": ["packages/*"]`
3. 修改 package.json, 添加 workspaces 配置 `"workspaces": [ "packages/*" ]`
4. 安装 father, 根目录下创建基础打包配置文件 `.fatherrc.base.ts`
5. 创建 packages 目录，新建 npm 包，每个包配置打包命令 `build: father build`, 并在包内创建 `.fatherrc.ts`, 继承根目录的配置, 完善每个包 package.json 下的 main, module, types, file 字段
6. 开发 npm 包内容, 若包内设有 demo 需要引入 package 下的包时，需要修改 `.dumirc.ts` 内的 alias, 为 tsconfig.json 添加 path 映射配置
7. 开发完成，根目录下床阿金 `.npmrc`, 指定要发包的仓库
8. 执行 `npx lerna publish` 进行发包

**注意**
要发的包的名称，不要和仓库内已有包相同，不然会冲突报错

### 参考资料

[Lerna 学习与理解](https://juejin.cn/post/7005399626744332295#heading-12)
[lerna 入门教程](https://blog.51cto.com/u_15342387/3612254)
