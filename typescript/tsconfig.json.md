# tsconfig

### 生成方法

```sh

  tsc --init # 全局安装了 typescript，可以使用此命令
  npx tsc --init # 只在项目中安装了 typescript，可以使用此命令

```

### 常用配置

```json
{
  "includes": ["./**/*.d.ts"] // 设置需要编译的文件/目录，支持文件名、通配符匹配。如果 files 被指定了，则默认值为 []；未指定，默认值则为 **/*
}
```

### 参考资料

- [tsconfig 最新常用配置手册【持更】](https://juejin.cn/post/7259715842873655333?searchId=202308080946159C02B64988AE376D56EB)
- [在线根据设置条件提供 tsconfig 配置](https://tsconfig.guide/)
- [阮一峰 typescript 教程 -- tsconfig 篇](https://sourcegraph.com/github.com/wangdoc/typescript-tutorial@57cdc82/-/blob/docs/tsconfig.json.md)
