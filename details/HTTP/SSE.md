[ChatGPT对话为什么不用Websocket而使用EventSource？](https://juejin.cn/post/7246955055109210149?from=search-suggest)

[一文读懂即时更新方案：SSE](https://juejin.cn/post/7221125237500330039)

​ SSE 是 HTML5 中一个与通信相关的 API，主要由两部分组成：服务端与浏览器端的通信协议（HTTP 协议）及浏览器端可供 JavaScript 使用的 EventSource 对象。

SSE，全称Server-Sent Events，译为服务器发送事件，它是一种Web技术，允许服务器端实时地向客户端推送信息。SSE运行在HTTP协议之上，它利用持久化的HTTP连接，以事件流（Event Stream）的形式将数据发送给客户端，由客户端监听后获取。服务器端会定期向这个连接发送更新，这些更新被封装在一个或多个HTTP包中，每个包含有更新的事件流。这样，当有新的更新时，服务器就不需要等待客户端的请求，而是直接将数据推送给客户端。当连接被关闭或出现故障时，客户端会自动重新发送请求，重新建立连接。这确保了数据传输的连续性和实时性。


那么，SSE有什么优点呢?

* 单向通信：SSE只支持从服务器到客户端的单向通信，服务器可以主动发送数据，用户只能接收。
* 高效实时：因使用持久化连接，服务器可以实时地将数据推送给客户端，而无需客户端频繁发起请求。


 SSE 协议非常简单，本质是浏览器发起 http 请求，服务器在收到请求后，返回状态与数据，并附带以下 headers：
 ```js
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```

 ```js
 const response = await fetch('http://127.0.0.1:7345/api/gpt/get', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message.value,
      role: role.value,
    }),
  });

  if (!response.body) return;
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  while (true) {
    var { value, done } = await reader.read();
    if (done) break;
    value = value?.replace('undefined', '')
    console.log("received data -", value)
    output.value += value?.replace('undefined', '')
  }
 ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SSE Demo</title>
</head>
<body>
  <h1>SSE Demo</h1>
  <button onclick="connectSSE()">建立 SSE 连接</button>  
  <button onclick="closeSSE()">断开 SSE 连接</button>
  <br />
  <br />
  <div id="message"></div>

  <script>
    const messageElement = document.getElementById('message')

    let eventSource

    // 建立 SSE 连接
    const connectSSE = () => {
      eventSource = new EventSource('http://127.0.0.1:3000/sse?content=xxx')

      // 监听消息事件
      eventSource.addEventListener('customEvent', (event) => {
        const data = JSON.parse(event.data)
        messageElement.innerHTML += `${data.id} --- ${data.time} --- params参数：${JSON.stringify(data.params)}` + '<br />'
      })

      eventSource.onopen = () => {
        messageElement.innerHTML += `SSE 连接成功，状态${eventSource.readyState}<br />`
      }

      eventSource.onerror = () => {
        messageElement.innerHTML += `SSE 连接错误，状态${eventSource.readyState}<br />`
      }
    }

    // 断开 SSE 连接
    const closeSSE = () => {
      eventSource.close()
      messageElement.innerHTML += `SSE 连接关闭，状态${eventSource.readyState}<br />`
    }
  </script>
</body>
</html>
```