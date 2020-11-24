# url
处理网址相关，主要用来获取地址路径和参数的

[url-所有API](https://nodejs.org/api/url.html) 


### 方法
* url.parse(urlLink, boolean) 
  >urlLink: 网址  
  > boolean: 是否把参数解析成对象  

* url.format(parsedUrl)
  > parsedUrl: parse的对象

例子:
```js
const  url = require('url');
const parseUrl = url.parse("http://www.bing.com?a=1&b=2");
const formatUrl = url.format(parseUrl)

console.log(parseUrl);
/* Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.bing.com',
  port: null,
  hostname: 'www.bing.com',
  hash: null,
  search: '?a=1&b=2',
  query: 'a=1&b=2',
  pathname: '/',
  path: '/?a=1&b=2',
  href: 'http://www.bing.com/?a=1&b=2'
} */


console.log(formatUrl);
// http://www.bing.com/?a=1&b=2

```

```js
const url = require('url');

let site = 'http://www.xxx.com/a/b/index.html?a=1&b=2';

let { pathname, query } = url.parse(site, true);

console.log(pathname, query);
// /a/b/index.html  { a: '1', b: '2' }
```

```js
let url = require("url");
let http = require("http");

http.createServer(function (req, res) {

  /**
   * 访问地址是：http://localhost:8000/?a=1&b=2
   * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
   * ?a=1&b=2
   * /favicon.ico
   *  排除 req.url == /favicon.ico 的情况
   */
  if(req.url != "/favicon.ico") {
    let result = url.parse(req.url, true);
    console.log(result);
    /* Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?a=1&b=2',
      query: { a: '1', b: '2' },
      pathname: '/',
      path: '/?a=1&b=2',
      href: '/?a=1&b=2'
    } */
  }

  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');
  res.end();
}).listen(8000);
```