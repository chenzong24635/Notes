WebSocket实现了，在客户端和服务端上建立了一个长久的连接，两边可以任意发数据

它属于应用层的协议，它基于TCP传输协议，并复用HTTP的握手通道

## WebSocket的优势

支持双向通信，实时性更强

建立在 TCP 协议之上，服务器端的实现比较容易。

与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

数据格式比较轻量，性能开销小，通信高效。(连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较少)

可以发送文本，也可以发送二进制数据。

没有同源限制，客户端可以与任意服务器通信。

协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。ex：ws://example.com:80/some/path

不用频繁创建及销毁TCP请求，减少网络带宽资源的占用，同时也节省服务器资源;

WebSocket是纯事件驱动的，一旦连接建立，通过监听事件可以处理到来的数据和改变的连接状态，数据都以帧序列的形式传输。服务端发送数据后，消息和事件会异步到达。

无超时处理

## API
```js
let ws = new WebSocket("ws://localhost:8080")//创建实例
```

* ws.readyState // 只读属性,来指示连接的当前状态
  * CONNECTING	//正在连接中(值为:0	)
  * OPEN	      //已经连接并准备好进行通信。(值为:1)
  * CLOSING	    //连接正在关闭 (值为:2)
  * CLOSED	    //连接已经关闭或者连接无法建立(值为:3	)

* ws.onopen //指定连接成功后的回调函数

* ws.onclose // 指定连接关闭后的回调函数。

* ws.onmessage //指定收到服务器数据后的回调函数。

* ws.onerror //指定报错时的回调函数。


* ws.close() //关闭WebSocket连接或停止正在进行的连接请求。如果连接的状态已经是closed，这个方法不会有任何效果。

* ws.send() //向服务器发送数据。
  ```js
    ws.onopen = function () {
      ws.send('Hello Server!');
    }
  ```

## 例
只需要new一下就可以创建一个websocket的实例  
我们要去连接ws协议  
这里对应的端口就是服务端设置的端口号9999
```js
let ws = new WebSocket('ws://localhost:9999');

// onopen是客户端与服务端建立连接后触发
ws.onopen = function() {
    ws.send('哎呦，不错哦');
};

// onmessage是当服务端给客户端发来消息的时候触发
ws.onmessage = function(res) {
    console.log(res); // 打印的是MessageEvent对象
    console.log(res.data);// 真正的消息数据是 res.data
};
```

# socket.io库
[官网](https://socket.io/)

[github](https://github.com/socketio/socket.io)

[CDN](https://www.bootcdn.cn/socket.io/)

## 的特点
易用性：封装了服务端和客户端，使用简单方便

跨平台：支持跨平台，可以选择在服务端或是客户端开发实时应用

自适应：会根据浏览器来自己决定是使用WebSocket、Ajax长轮询还是Iframe流等方式去选择最优方式，甚至支持IE5.5