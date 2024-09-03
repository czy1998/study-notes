# nrm

nrm(npm registry manager)是 npm 的镜像源管理工具。

### 安装

```sh
npm i -g nrm # 推荐全局安装
```

### 使用

```sh
nrm ls # 展示所有的镜像源
nrm use [registry] # 使用指定的registry
                   # 案例
                   # nrm use npm
nrm current # 查看当前使用的registry
nrm add demo https://verdaccio.xxxx.com/` # 添加名为 demo 的镜像源
nrm del demo # 删除名为 demo 的镜像源
nrm test demo # 测试 demo 源的响应时间
nrm rename <registryName> <newName> # 自定义源的名称
```
