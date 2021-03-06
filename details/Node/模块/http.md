# http
开启一个服务器

[http-所有API](https://nodejs.org/api/http.html)

## 常用方法、属性
* http.createServer((req, res) => {}) 开启一个服务
* http.createServer().on('request',(req, res) => {})开启一个服务
* server.listen(port); 监听端口号
* server.on('error',(err)=>{}) 启动错误监听

* http.request 发起请求
### createServer
```js
const http = require('http');
let server = http.createServer((req, res) => { // 开启一个服务
  // console.log(req); // 请求信息
  // console.log(res); // 响应信息

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });
  // 或者
  // res.setHeader('Content-Type', 'text/html;charset=UTF-8');


  res.write('hello'); // 返回给页面的值，也就是页面会显示 hello
  res.end(); // 必须有结束的标识，否则页面会一直处于加载状态

  // 合并写法
  // res.end('hello'); 
})
server.listen(8888); // 端口号
```
访问 http://localhost:8888/ 

也可以这样写
```js
let server = http.createServer()
server.on('request',(req,res)=>{
  .....
});
server.listen(8888);
```


`注意`，当我们在服务器访问网页时，我们的服务器可能会输出两次 “Request received.”。那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico 

### [res、req属性方法](../details/res-req.md)

