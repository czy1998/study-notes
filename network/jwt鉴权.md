# jwt 鉴权

JWT（JSON Web Token），本质就是一个字符串书写规范，作用是用来在用户和服务器之间传递安全可靠的信息

## 概况

在目前前后端分离的开发过程中，使用`token`鉴权机制用于身份验证是最常见的方案，流程如下：

- 服务器当验证用户账号和密码正确的时候，给用户颁发一个令牌，这个令牌作为后续用户访问一些接口的凭证
- 后续访问会根据这个令牌判断用户时候有权限进行访问

`Token`，分成了三部分，头部（Header）、载荷（Payload）、签名（Signature），并以`.`进行拼接。其中头部和载荷都是以`JSON`格式存放数据，只是进行了编码

### header

每个 JWT 都会带有头部信息，这里主要声明使用的算法。声明算法的字段名为`alg`，同时还有一个`typ`的字段，默认`JWT`即可。以下示例中算法为 HS256

```json
{ "alg": "HS256", "typ": "JWT" }
```

因为 JWT 是字符串，所以我们还需要对以上内容进行 Base64 编码，编码后字符串如下：

```js
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

// 转换为对象
atob("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
```

### payload

载荷即消息体，这里会存放实际的内容，也就是`Token`的数据声明，例如用户的`id`和`name`，默认情况下也会携带令牌的签发时间`iat`，通过还可以设置过期时间，如下：

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

同样进行 Base64 编码后，字符串如下：

```js
"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

// 同理也用 atob 转换为对象
```

### Signature

签名是对头部和载荷内容进行签名，一般情况，设置一个`secretKey`，对前两个的结果进行`HMACSHA25`算法，公式如下：

```js
Signature = HMACSHA256(base64Url(header)+.+base64Url(payload),secretKey)
```

一旦前面两部分数据被篡改，只要服务器加密用的密钥没有泄露，得到的签名肯定和之前的签名不一致

## 应用

### 创建 token

借助第三方库`jsonwebtoken`，通过`jsonwebtoken` 的 `sign` 方法生成一个 `token`：

- 第一个参数指的是 Payload

- 第二个是秘钥，服务端特有

- 第三个参数是 option，可以定义 token 过期时间

```js
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const account = "tom";
const password = "123456";

const newPassword = crypto.createHash("md5").update(password).digest("hex");
// e10adc3949ba59abbe56e057f20f883e
const token = jwt.sign({ account, password: newPassword }, "secret", {
  expiresIn: 60 * 60,
});
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoidG9tIiwicGFzc3dvcmQiOiJlMTBhZGMzOTQ5YmE1OWFiYmU1NmUwNTdmMjBmODgzZSIsImlhdCI6MTc2NTM1NDIxNiwiZXhwIjoxNzY1MzU3ODE2fQ._Itn_zZM1NAn6V3O43XV81p5RY7zVYenz09kgiPkd8s
```

### 校验 token

使用 `koa-jwt` 中间件进行验证，方式比较简单

```js
// 注意：放在路由前面
app.use(
  koajwt({
    secret: "secret",
  }).unless({
    // 配置白名单
    path: [/\/api\/register/, /\/api\/login/],
  })
);
```

- secret 必须和 sign 时候保持一致
- 可以通过 unless 配置接口白名单，也就是哪些 URL 可以不用经过校验，像登陆/注册都可以不用校验
- 校验的中间件需要放在需要校验的路由前面，无法对前面的 URL 进行校验
  note
  获取`token`用户的信息方法如下：

```js
router.get("/api/userInfo", async (ctx, next) => {
  const authorization = ctx.header.authorization; // 获取jwt
  const token = authorization.replace("Beraer ", "");
  const result = jwt.verify(token, "test_token");
  ctx.body = result;
});
```

在分布式系统中，每个子系统都要获取到秘钥，那么这个子系统根据该秘钥可以发布和验证令牌，但有些服务器只需要验证令牌

这时候可以采用非对称加密，利用私钥发布令牌，公钥验证令牌，加密算法可以选择`RS256`

## 优缺点

优点：

- json 具有通用性，所以可以跨语言
- 组成简单，字节占用小，便于传输
- 服务端无需保存会话信息，很容易进行水平扩展
- 一处生成，多处使用，可以在分布式系统中，解决单点登录问题
- 可防护 CSRF 攻击

缺点：

- payload 部分仅仅是进行简单编码，所以只能用于存储逻辑必需的非敏感信息
- 需要保护好加密密钥，一旦泄露后果不堪设想
- 为避免 token 被劫持，最好使用 https 协议
