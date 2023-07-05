# package.json

### type

-   设置为 module 后，允许指定包内所有的`.js`文件为 ESM 模块（import/export）
-   设置为 commonjs 或者省略，则对所有的`.js`文件都被视为 commonjs

### workspaces

> monorepo(monolithic repository)是一种项目架构，简单的来说：一个仓库内包含多个开发项目（模块，包）
>
> lerna 项目下也有 workspaces 应该也是用到了这个

在项目过大的时候，最近越来越流行 monorepo。提到 monorepo 就绕不看 workspaces，早期我们会用 yarn workspaces，现在 npm 官方也支持了 workspaces. workspaces 解决了本地文件系统中如何在一个顶层 root package 下管理多个子 packages 的问题，在 workspaces 声明目录下的 package 会软链到最上层 root package 的 node_modules 中。

直接以官网的例子来说明

```json
{
    "name": "my-project",
    "workspaces": ["packages/a"]
}
```

在一个 npm 包名为 my-project 的 npm 包中，存在 workspaces 配置的目录。

```ts
.
+-- package.json
+-- index.js
`-- packages
   +-- a
   |  `-- package.json
```

my-project 包下，有 packages/a 子包。此时，我们如果 npm install,那么在 root package 中 node_modules 中安装的 npm 包 a，指向的是本地的 package/a.

```ts
.
+-- node_modules
    // 下面指的就是从node_modules中a链接到本地npm包的软链
|  `-- packages/a -> ../packages/a
+-- package-lock.json
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
```

### 参考文献

[package.json 中你还不清楚的 browser，module，main 字段优先级](https://www.cnblogs.com/qianxiaox/p/14041717.html)
[️package.json 中的 sideEffects](https://blog.csdn.net/jexxx/article/details/128850519)
