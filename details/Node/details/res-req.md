## req 请求信息
req 是个可读流

### 方法
* req.on('data',()=>{})
* req.on('end',()=>{})

### 属性
* req.method 请求方法(大写)
* req.url 请求地址
* req.httpVersion 请求http版本
* req.headers 请求头相关信息
  * host 
  * connection
  * cache-control



## res 响应信息
响应头
响应行
响应体

### 方法
* res.writeHea(statusCode[, statusMessage][, headers]) 设置响应头
  >res.writeHead(200, {'Content-Type': 'text/html'})
* res.setHeader(name, value) 设置响应头
  >res.setHeader('Content-Type', 'text/html');
* res.write(str) 返回给页面的值
* res.end(str) 结束，且返回页面值

### 属性

