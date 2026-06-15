# verdaccio

Verdaccio 是一个轻量级的私有 npm 仓库（Private Registry），用于托管和管理 JavaScript/TypeScript 项目的包（package）。

它兼容 npm、pnpm、yarn 等包管理器，可以作为：

- 企业内部私有包仓库
- npm 官方仓库的代理缓存（Proxy Cache）
- 私有包 + 公共包混合仓库

简单来说，它相当于一个可以自己部署的 `npmjs.com`。

## 使用记录

公司搭建了一个 npm 私服，出于意外，发布了一个错误的包版本，现在需要将其删除，可以按如下操作实现：

1. 登录部署私服的服务器
2. 公司是使用 docker 进行部署，所以寻找 docker-compose.yaml 文件，获取 verdaccio 存放目录
3. 进入 verdaccio 目录，进入 verdaccio/storage/data/[`你需要修改的 npm 包的名称`] 目录
4. rm 删除错误包的压缩文件 (以.tgz结尾)
5. 编辑 package.json 文件，将新版本包名全部删除
