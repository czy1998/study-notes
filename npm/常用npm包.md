# 常用 npm 包

### 1. cross-env

cross-env 是运行跨平台设置和使用环境变量的脚本

```js
// parkage.json

{

    "scripts": {
        "test": "cross-env APP_ENV=test node server.js"
    }
}

```

这里 cross-env 可以帮你设置环境变量，由于在不同系统平台设置环境变量的指令基本都不同（windows、mac 等），如果写死一种，则在其他系统下执行可能会报错.
cross-env 就可以帮你在不同系统下正确的的设置环境变量.
