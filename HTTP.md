



HTTP协议 ：Hyper Text Transfer Protocol（超文本传输协议）,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。是互联网上应用最为广泛的一种网络协议。所有的WWW文件都必须遵守这个标准。

HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。

HTTP是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。


HTTP特点：
>
    简单快速。
    灵活。
    HTTP是无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
    HTTP是无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。
    HTTP是媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过HTTP发送。客户端以及服务器指定使用适合的MIME-type内容类型。

[TCP的三次握手与四次挥手理解](https://mp.weixin.qq.com/s?__biz=MzA3NTUzNjk1OA==&mid=2651562210&idx=1&sn=eee83a676a8df0ec24caf68e0a90b078&chksm=84900fb3b3e786a531c179ecec61dccbb5f5fcfdbf25c04b15185cafe1ec5d84b0502ec4e998&scene=0&xtrack=1#rd)

三次握手：
>
    第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SEN状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
    第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
    第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。客户端与服务器正式开始传送数据

            ----第二次握手后的状态，称为半连接，服务器会创建半连接队列。若收到第三次握手确认，则删除当前连接，若未收到，每隔一段时间重传第二次握手信息，直至半连接超时
          ----若半连接队列满了   ，丢弃新请求---半连接攻击
    目的：
    为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”。
    或则说 解决“网络中存在延迟的重复分组”的问题。

如何关闭连接（四次挥手）：
>
    TCP的连接的拆除需要发送四个包，因此称为四次挥手(four-way handshake)
    客户端A发送一个FIN，用来关闭客户A到服务器B的数据传送。 
    服务器B收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。 
    服务器B关闭与客户端A的连接，发送一个FIN给客户端A。 
    客户端A发回ACK报文确认，并将确认序号设置为收到序号加1

![三次握手四次挥手](img/tcp.jpg)

Web访问过程
>
    （1）客户端在浏览器输入URL
    （2）客户端操作系统左DNS解析，获得目标服务器的IP地址
    （3）客户端操作系统打开一个自由短裤。向服务器发起连接请求
    （4）经过三次握手，服务器端确认与该客户端的连接，打开一个自由端口与该客户端通信
    （5）客户端开始请求数据——以4KB为大小的一个又一个请求数据包——发送HTTP Request
    （6）服务器开始接收请求数据包，接收完成后，处理接收到的数据——Request Handling
    （7）服务器开始向客户端发送以4KB为大小的响应数据——发送HTTP Response
    （8）响应结束之后，服务器会经过四次握手，断开连接，关闭各自的自由端口





HTTP 1.1 做了哪些升级：
>
    缓存处理，在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
    带宽优化及网络连接的使用，HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
    错误通知的管理，在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。
    Host头处理，在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。
    长连接，HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。

HTTP/2的多路复用和HTTP1.1中的长连接复用有什么区别？
> 
    HTTP/1.0 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接；
    HTTP/1.1 可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；
    HTTP/2多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；

### URL、URI、URN
>
    URI：Unified Resource Identifier   包含URL和URN
    URL：Unified Resource Locator    如 http://www.baidu.com/q?kw=js
    URN：Unified Resource Naming    如 mailto: admin@tarena.com

URL的完整格式：scheme://user:pwd@host:port/path;params?query#frag

js中encodeURI()函数不会对 :/@;?# 进行编码
encodeURIComponent()函数会对上述标点进行编码

HOST :主机名，资源所在服务器的IP地址或域名（需DNS转换IP地址）
PORT：端口号，每项服务在服务器上对应一个监听端口号

### HTTP协议详解
>
    RFC:  Request For Comment(www.rfc.org)，一项协议在正式发布之前的专家制定的意见征求稿，如RFC-405
    HTTP协议的详细格式也是由一篇RFC文档确定的。其中规定了两种消息的格式：
    Request Message  请求消息/报文
    Response Message  响应消息/报文


HTTP请求到服务器的请求消息组成部分：请求行（request line）、请求头部（header）、空行、请求数据

HTTP响应也由四个部分组成：状态行、消息报头、空行和响应正文。


请求方法：指定了客户端想对指定的资源/服务器作何种操作；
>
    HTTP1.0请求方法： GET, POST 和 HEAD方法。
    HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。

    GET		请求指定的页面信息，并返回实体主体。
    HEAD	类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
    POST	向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。该请求可能会导致新的资源的建立和/或已有资源的修改。
    PUT		从客户端向服务器传送的数据取代指定的文档的内容。
    DELETE	请求服务器删除指定的页面。
    CONNECT 预留给能够将连接改为管道方式的代理服务器。
    OPTIONS 允许客户端查看服务器的性能。
    TRACE	回显服务器收到的请求，主要用于测试或诊断。

最常见的请求方法：
>
    GET：浏览器地址栏直接输入URL、页面内容解析时引入外部资源、超链接跳转、JS跳转、GET方式提交表单
    POST：POST方式提交表单

get与post区别：

![getpost](/img/getpost.png)



HTTP请求和响应优化
>
    减少DNS次数
    使用持久连接
    减少请求次数，设置资源的合理的Expires时间、缓存时长
    缩短响应处理时间——使用数据库数据缓存、动态页面静态化、AJAX
    减少响应数据的长度——启用数据压缩    



数据缓存优点：
>
    减少数据传输量
    节省服务器宽带
    减低对服务器的资源消耗和运行要求
    减低由于远距离所造成的加载延时


同源策略与跨域
同源策略是浏览器的一种安全策略
所谓同源是指，域名，协议，端口完全相同
例如http://www.example.com/
>
    http://api.example.com/detail.html	不同源	域名不同
    https//www.example.com/detail.html	不同源	协议不同
    http://www.example.com:8080/detail.html不同源	端口不同
    http://api.example.com:8080/detail.html	不同源	域名、端口不同
    https://api.example.com/detail.html	不同源	协议、域名不同
    https://www.example.com:8080/detail.html不同源	端口、协议不同
    http://www.example.com/detail/index.html同源	只是目录不同


> 

| 协议 | 默认端口号 | 协议基本作用
:-:|      :-:|       :-: |
| FTP     | 21        | 文件上传、下载
| DNS     | 53        | 域名解析
| HTTP    | 80        | 超文本传输
| HTTPS   | 443       | 加密传输的HTTPS
| SSH	  | 22	      | 安全的远程登录
| TELNET  | 23	      | 远程登录
| SMTP 	  | 25	      | 邮件传输
| POP3    | 109	      | 邮件接收
| NETBIOS | 137、138、139 | 网上邻居传输文件

几种常见的应用层协议：
>
    (1)DNS： Domain Naming Service，域名解析服务，一台DNS服务器可以帮助客户端进行域名解析服务，即把一个域名解析为该域名对应的IP地址
    (2)FTP： File Transfer Protocol，文件传输协议，可用于在服务器与客户端之间传递文件，文件下载：S给C传文件；文件上传：C给S传文件。----ftp://tom:123456@127.0.0.1:21
    (3)TELNET：通过TELNET客户端，可以远程登录到启动了TELNET服务的远程服务器，在远程实施对服务器的控制。如远程控制公司在“阿里云”购买的服务器。注意：TELNET协议传输过程中都是明文的，不安全的，现在基本已经被SSH代替了。


### HTTP状态码:
    由三个十进制数字组成，第一个十进制数字定义了状态码的类型

分为5种类型：
>
    1**	临时响应，只包含状态行和某些可选的响应头信息。服务器收到请求，需要请求者继续执行操作
    2**	请求成功，操作被成功接收并处理
    3**	重定向，需要进一步的操作以完成请求
    4**	客户端错误，请求包含语法错误或无法完成请求
    5**	服务器错误，服务器在处理请求的过程中发生了错误
>
| 状态码  |	名称 描述 |
:-:| :-|
| 100 |	Continue 继续 。客户端应当继续发送请求。这个临时响应是用来通知客户端它的部分请求已经被服务器接收	
| 101 | Switching Protocols	切换协议。 服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如切换到HTTP的新版本协议
| 200 | OK 请求成功。 一般用于GET与POST请求
| 201 | Created	已创建  。 成功请求并创建了新的资源
| 202 | Accepted 已接受 。已经接受请求，但未处理完成
| 203 | Non-Authoritative Information	非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
| 204 | No Content 无内容。 服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
| 205 | Reset Content 重置内容。  服务器处理成功，用户终端（例如：浏| 览器）应重置文档视图。可通过此返回码清除浏览器的表单域
| 206 | Partial Content	部分内容。 服务器成功处理了部分GET请求
| 300 | Multiple Choices 多种选择。 请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
| 301 | Moved Permanently 永久移动。 请求的资源已被永久的移动到新URI，返回信 息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
| 302 | Found 临时移动。 资源只是临时被移动。客户端应继续使用原有URI
| 303 | See Other 查看其它地址。 使用GET和POST请求查看
| 304 | Not Modified	未修改。 所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
| 305 | Use Proxy 使用代理。 所请求的资源必须通过代理访问
| 306 | Unused | 已废弃
| 307 | Temporary Redirect 临时重定向。与302类似。使用GET请求重定向
| 400 | Bad Request	客户端请求的语法错误，服务器无法理解
| 401 | Unauthorized	请求要求用户的身份认证
| 402 | Payment Required 保留，将来使用
| 403 | Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
| 404 | Not Found 服务器无法根据客户端的请求找到资源（网页）。 网站设计人员可设置"您所请求的资源无法找到"的个性页面
| 405 | Method Not Allowed 客户端请求中的方法被禁止
| 406 | Not Acceptable 服务器无法根据客户端请求的内容特性完成请求
| 407 | Proxy Authentication Required 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
| 408 | Request Time-out	服务器等待客户端发送的请求时间过长，超时
| 409 | Conflict	服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突
| 410 | Gone	客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410 代码，网站设计人员可通过301代码指定资源的新位置
| 411 | Length Required	服务器无法处理客户端发送的不带Content-Length的请求信息
| 412 | Precondition Failed	客户端请求信息的先决条件错误
| 413 | Request Entity Too Large	由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
| 414 | Request-URI Too Large	请求的URI过长（URI通常为网址），服务器无法处理
| 415 | Unsupported Media Type	服务器无法处理请求附带的媒体格式
| 416 | Requested range not satisfiable	客户端请求的范围无效
| 417 | Expectation Failed	服务器无法满足Expect的请求头信息
| 
| 500 | Internal Server Error	服务器内部错误，无法完成请求
| 501 | Not Implemented	服务器不支持请求的功能，无法完成请求
| 502 | Bad Gateway	充当网关或代理的服务器，从远端服务器接收到了一个无效的请求
| 503 | Service Unavailable	由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
| 504 | Gateway Time-out	充当网关或代理的服务器，未及时从远端服务器获取请求
| 505 | HTTP Version not supported	服务器不支持请求的HTTP协议的版本，无法完成处理
