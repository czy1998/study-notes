# websocket

WebSocket 是一种`网络传输协议`，可在单个 `TCP` 连接上进行`全双工`通信，位于 OSI 模型的`应用层`

- 客户端和服务器只需要完成一次握手，两者之间就可以创建持久性的连接，并进行双向数据传输
- 引入`ws` 和 `wss` 分别代表明文和密文的`websocket`协议，且默认端口使用 80 或 443，几乎与`http`一致
  know

### 握手案例

WebSocket 是独立的、建立在 TCP 上的协议。

Websocket 通过 HTTP/1.1 协议的 101 状态码进行握手。

为了建立 Websocket 连接，需要通过浏览器发出请求，之后服务器进行回应

客户端请求：

```http
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

服务器回应：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat
```

#### 字段说明

- `Connection` 必须设置 Upgrade，表示客户端希望连接升级。
- `Upgrade` 字段必须设置 Websocket，表示希望升级到 Websocket 协议。
- `Sec-WebSocket-Key` 是随机的字符串，服务器端会用这些数据来构造出一个 SHA-1 的信息摘要。把“Sec-WebSocket-Key”加上一个特殊字符串“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”，然后计算 SHA-1 摘要，之后进行 Base64 编码，将结果做为“Sec-WebSocket-Accept”头的值，返回给客户端。如此操作，可以尽量避免普通 HTTP 请求被误认为 Websocket 协议。
- `Sec-WebSocket-Version` 表示支持的 Websocket 版本。RFC6455 要求使用的版本是 13，之前草案的版本均应当弃用。
- `Origin` 字段是必须的。如果缺少 origin 字段，WebSocket 服务器需要回复 HTTP 403 状态码（禁止访问）。[16]
- 其他一些定义在 HTTP 协议中的字段，如 Cookie 等，也可以在 Websocket 中使用

### 优点

- 较少的控制开销：数据包头部协议较小，不同于 http 每次请求需要携带完整的头部
- 更强的实时性：相对于 HTTP 请求需要等待客户端发起请求服务端才能响应，延迟明显更少
- 保持创连接状态：创建通信后，可省略状态信息，不同于 HTTP 每次请求需要携带身份验证
- 更好的二进制支持：定义了二进制帧，更好处理二进制内容
- 支持扩展：用户可以扩展 websocket 协议、实现部分自定义的子协议
- 更好的压缩效果：Websocket 在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率

## 二、应用场景

基于`websocket`的实时通信的特点，其存在的应用场景大概有：

- 弹幕
- 媒体聊天
- 协同编辑
- 基于位置的应用
- 体育实况更新
- 股票基金报价实时更新
