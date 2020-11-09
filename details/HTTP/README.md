


## <a name="http 1.1 中的 keep-alive 有什么作用">http 1.1 中的 keep-alive 有什么作用</a>
在 http 1.1 中，在响应头中设置 keep-alive 可以在一个 TCP 连接上发送多个 http 请求

避免了重开 TCP 连接的开销
避免了刷新时重新建立 SSL 连接的开销
避免了QPS过大时，服务器的连接数过大

在服务器端使用响应头开启 keep-alive
```js
Connection: Keep-Alive
Keep-Alive: timeout=5, max=1000
```

## <a name="TCP的三次握手与四次挥手">TCP的三次握手与四次挥手</a>
[TCP的三次握手与四次挥手理解](./TCP的三次握手与四次挥手.md)

## <a name="状态码301，302和307区别">状态码301，302和307区别</a>
* 301，Moved Permanently。永久重定向，该操作比较危险，需要谨慎操作：如果设置了301，但是一段时间后又想取消，但是浏览器中已经有了缓存，还是会重定向。

* 302，Fount。临时重定向，但是会在重定向的时候改变 method: 把 POST 改成 GET，于是有了 307
* 
* 307，Temporary Redirect。临时重定向，在重定向时不会改变 method

