# 页面输入 url 后

0. 检查 URL 是否合规
   - 浏览器首先检查输入是否是合法 URL，是否包含协议（http://、https://）、主机名、端口和路径等。
   - 对于没有协议的输入，浏览器会补全默认协议；对相对路径、书签、搜索词等则进行特殊处理。

1. DNS 域名解析获取 IP 地址
   - 浏览器会先查询本地 DNS 缓存、操作系统缓存和 hosts 文件。
   - 如果本地没有缓存，再发起 DNS 解析请求，最终获得域名对应的 IP 地址。
   - DNS 负载均衡：一个域名可以有多个 A/AAAA 记录，DNS 服务器通常按轮询、权重、地域等策略返回多个 IP，从而实现简单的负载均衡。
   - DNS 查询过程通常是递归查询：客户端 -> 递归 DNS 解析器 -> 根域名服务器 -> 顶级域名服务器 -> 权威域名服务器。
   - 需要注意：DNS 解析和 HTTP 请求是两件事，DNS 只是把域名转成 IP，得到 IP 后浏览器才继续建立 TCP/TLS 连接。

2. 建立 TCP 连接（3 次握手）
   - 浏览器向服务器 IP 的目标端口（HTTP 默认 80，HTTPS 默认 443）发起 TCP 连接。
   - 第一次握手：客户端发送 SYN 包，进入 `SYN_SENT`。
   - 第二次握手：服务器收到 SYN 后，返回 `SYN+ACK`，进入 `SYN_RCVD`。
   - 第三次握手：客户端收到 `SYN+ACK` 后，返回 `ACK`，双方进入 `ESTABLISHED`，连接建立。
   - 传统握手本身不携带 HTTP 数据；一旦连接建立，才可以开始发送 HTTP 请求。但现代网络中存在 TCP Fast Open，可以在 SYN 包中携带少量数据。
   - 如果浏览器已经与该服务器存在可重用连接（keep-alive 或 HTTP/2/3），则可以跳过再次建立新的 TCP 连接。

3. TLS 协商（仅 HTTPS）
   - HTTPS 会在 TCP 之上额外完成 TLS 握手，用于协商加密算法、交换密钥、验证证书和建立安全信道。
   - TLS 1.2：通常需要 2 个往返（client hello -> server hello/cert -> client key exchange -> finished）。
   - TLS 1.3：减少到 1 个往返，且支持 0-RTT 重用历史会话，性能更好。
   - TLS 握手流程大致包括：ClientHello、ServerHello、证书链、密钥计算、Finished 消息。
   - 必须注意：TLS 只是保证传输层安全，HTTP 请求本身仍然发生在安全通道内。

4. 发送 HTTP 请求
   - 浏览器发出 HTTP 请求，包括方法、URL、Host、User-Agent、Cookie、Accept 等首部。
   - HTTP/1.1 默认使用持久连接（keep-alive），可以在一个 TCP 连接上复用多个请求；HTTP/2 进一步支持多路复用和头部压缩；HTTP/3 基于 QUIC，使用 UDP 传输。
   - 此时浏览器也会考虑是否需要使用代理、是否使用 HTTP/2、是否在同域名下复用已有连接。

5. HTTP 缓存机制
   - 浏览器缓存分为强缓存（不发送请求直接使用）和协商缓存（发送条件请求，服务器判断是否更新）。
   - 强缓存：由 `Cache-Control: max-age`、`Cache-Control: no-cache`、`Expires` 等控制。若缓存未过期，直接使用本地缓存。
   - 协商缓存：由 `ETag` / `If-None-Match` 或 `Last-Modified` / `If-Modified-Since` 控制。服务器判断资源是否变化，若未变则返回 `304 Not Modified`，浏览器继续使用缓存。
   - 真实过程：浏览器先检查本地缓存策略，若命中强缓存则不发送网络请求；否则发送带条件头的请求。
   - 还要注意的缓存相关头：`Vary`、`Pragma`、`Cache-Control: no-store`、`Expires`、`Age` 等。

6. 服务器处理请求，并返回 HTTP 响应
   - 服务器端可能是负载均衡器、反向代理、Web 服务器（如 Nginx、Apache）以及后端应用服务器。
   - 静态内容直接由 Web 服务器返回；动态内容由后端应用生成（例如 MVC、REST API、GraphQL 等）。
   - 响应包括状态码、响应头和响应体。常见状态码有 `200`、`301`、`302`、`304`、`404`、`500` 等。
   - 服务器处理过程中可能涉及缓存、压缩、CDN、重定向、鉴权、日志等环节。

7. 浏览器解析与渲染页面
   - 浏览器架构一般包含：UI 进程、浏览器引擎、渲染引擎、网络线程、JS 引擎、GPU 进程、存储层等。
   - 渲染进程内通常有多个线程：GUI、JS、事件、定时器、网络等。
   - 页面渲染流程：
     1. 下载 HTML，并进行字符解码。
     2. HTML 解析生成 DOM 树。
     3. 下载并解析 CSS，生成 CSSOM。
     4. 合并 DOM 树和 CSSOM，构建渲染树（Render Tree）。
     5. 布局（Layout / Reflow），计算元素位置和尺寸。
     6. 绘制（Paint / Rasterize），生成像素并显示到屏幕。
   - 需要注意的阻塞关系：
     - 外部 CSS 会阻塞渲染和后续脚本执行。
     - 普通 `<script>` 会阻塞 HTML 解析；`defer` 延迟到 DOM 构建结束后执行；`async` 在下载完成后尽快执行。
     - HTTP/2、HTTP/3 下资源下载更高效，但 CSS/JS 的阻塞规则仍然存在。
   - HTML 解析过程可概括为：bytes -> characters -> tokens -> nodes -> DOM。
     1. 转换 将获取的数据根据编码规则转译成一个个字符
     2. 分词 将生成的字符按 HTML 规范标准，转换成一个个不同的标记 token，每个 token 都有自己独特的含义以及规则集
     3. 词法分析 将生成的 token 转换成对象，这些对象分别定义他们的属性和规则
     4. 构建 dom 根据生成的对象，构建 dom 树，因为 HTML 标记定义的就是不同标签之间的关系，这个关系就像是一个树形结构一样
   - CSS 解析过程可概括为：bytes -> characters -> tokens -> rules -> CSSOM。
   - 渲染树不包含不可见元素，例如 `display:none`、`<head>`、`<script>` 和不可见伪元素等。

8. 连接关闭（TCP 4 次挥手）
   - HTTP/1.1 keep-alive 情况下，连接在请求/响应后可能保持一段时间，并不会立即关闭。
   - 主动关闭时如果使用 TCP，关闭过程为四次挥手：
     1. 客户端发送 FIN，进入 `FIN_WAIT_1`。
     2. 服务器收到后回复 ACK，进入 `CLOSE_WAIT`；客户端进入 `FIN_WAIT_2`。
     3. 服务器发送 FIN，进入 `LAST_ACK`。
     4. 客户端回复 ACK，进入 `TIME_WAIT`，服务器进入 `CLOSED`。
   - `TIME_WAIT` 是为了确保最后一个 ACK 能被可靠传输，并防止旧的重复报文影响后续连接。
   - 在 HTTP/2/3 中，连接通常更长时间保持复用，关闭方式由底层协议决定；HTTP/3 则使用 QUIC、UDP，并非传统 TCP 四次挥手。

附注

- 如果页面使用 Service Worker、App Cache、预加载等机制，浏览器的请求调度和缓存行为会更复杂。
- 如果浏览器从缓存中直接命中资源，在第 2、3 步（TCP/TLS）可能不会发生。

[1]: https://img-blog.csdnimg.cn/img_convert/790029c5837a81d54508659b55d9f61b.png
[2]: https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/23/172deb73bf08212b~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image
