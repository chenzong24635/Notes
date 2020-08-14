# Node
[Node官网](https://nodejs.org/zh-cn/docs/)

[cnode社区](https://cnodejs.org/getstart)

[深入理解Node.js 中的进程与线程](https://juejin.im/post/5d43017be51d4561f40adcf9)

# <a name="npm">npm</a>
npm其实是Node.js的包管理工具（package manager），npm已经在Node.js安装的时候顺带装好了

`为啥我们需要一个包管理工具呢？`  

因为我们在Node.js上开发时，会用到很多别人写的JavaScript代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。  
于是一个集中管理的工具应运而生：大家都把自己开发的模块打包后放到npm官网上，如果要使用，直接通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。

并且如果我们要使用模块A，而模块A又依赖模块B，模块B又依赖模块C和D，此时npm会根据依赖关系，把所有依赖的包都下载下来并且管理起来。试想如果这些工作全靠我们自己去完成会多么麻烦！



[npm指令](/npm指令.md)

# <a name="了解">了解</a>

特点
* 单线程
* 异步非阻塞I/O
* 事件驱动


node 不是一门后台语言而是一个环境，一个能够让 js 运行在服务器的环境

Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

Node.js 是单进程单线程应用程序，但是其基于事件驱动、异步非阻塞I/O模式，可以应用于高并发场景，避免了线程创建、线程之间上下文切换所产生的资源开销。

node 遵循的是 CommonJs 规范
```js
require('./module')
module.exports = {
    a: 1,
}
exports.a = 1;
```

require方法接受以下几种参数的传递：
* http、fs、path等，原生模块  
* ./mod或../mod，相对路径的文件模块  
* /mod，绝对路径的文件模块  
* mod，第三方模块  



# <a name="全局对象与全局变量">全局对象与全局变量</a>
在浏览器 JavaScript 中，通常 window 是全局对象，
而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

gloabl:
```js
{
  global,
  clearInterval,
  clearTimeout,
  setInterval,
  setTimeout,
  queueMicrotask,
  clearImmediate,
  setImmediate,
}
```
Node里 this 是个空对象: 
Node里 没有window，访问会报错: 


* __filename 正在执行的脚本的文件名(所在位置的`绝对路径`)
  >C:\Users\Administrator\Desktop\node-demo\index.js

* __dirname 正在执行的脚本的目录
  >C:\Users\Administrator\Desktop\node-demo

* process 是一个全局变量，即 global 对象的属性。

# <a name="内置模块">内置模块</a>

## <a name="path路径">path路径</a>
处理路径相关
  
[path-所有API](https://nodejs.org/api/path.html)

### 常用方法
* path.join([...paths]) 连接任意多个路径字符串  
* path.resolve([...paths]) 将一系列路径或路径段解析为绝对路径  
* path.isAbsolute(path) 判断是否是绝对路径  
* path.relative(from, to) 将绝对路径转为相对路径，返回从 from 到 to 的相对路径  

#### path.join([path1][, path2][, ...]) 

```js
const path = require('path')
let myPath1 = path.join('/a','b');  // \a\b
let myPath2 = path.join('/a','/b'); // \a\b
let myPath3 = path.join('/a','./b'); // \a\b
let myPath4 = path.join('./a','./b'); // a\b
let myPath5 = path.join('/a', 'b', 'c/d', 'e', '..'); // \a\b\c\d
```

//不合法的字符串将抛出异常 
```js
path.join('a', {}, 'b') 
```

#### path.resolve([from ...], to) 

```js
const path = require('path')
let myPath1 = path.resolve('/a','b');  // D:\a\b
let myPath2 = path.resolve('/a','/b'); // D:\b
let myPath3 = path.resolve('/a','./b'); // D:\a\b
let myPath4 = path.resolve('./a','./b'); // D:\node-learn\a\b
let myPath5 = path.resolve('/a', 'b', 'c/d', 'e', '../'); // D:\a\b\c\d
```

#### 对比

```js
const path = require('path');
console.log(__dirname); // D:\node-learn
let myPath1 = path.join(__dirname,'/a/b');    // D:\node-learn\a\b
let myPath2 = path.join(__dirname,'./a/b');   // D:\node-learn\a\b
let myPath3 = path.resolve(__dirname,'/a/b'); // D:\a\b
let myPath4 = path.resolve(__dirname,'./a/b');// D:\node-learn\a\b
```


## <a name="http模块">http模块</a>
开启一个服务器

[http-所有API](https://nodejs.org/api/http.html)

### 常用方法
* http.createServer((req, res) => {}) 开启一个服务
  * res.writeHead(status,obj) 设置 HTTP 头部
  * res.write(str) 返回给页面的值
  * res.end() 结束
* server.listen(port); 监听端口号

```js
const http = require('http');
let server = http.createServer((req, res) => { // 开启一个服务
  // console.log(req); // 请求信息
  // console.log(res); // 响应信息
  console.log('Request received');

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


`注意`，当我们在服务器访问网页时，我们的服务器可能会输出两次 “Request received.”。那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico 

## <a name="fs文件系统">fs文件系统</a>
操作文件

[fs-所有API](https://nodejs.org/api/fs.html) 

### 常用方法
fs 模块中的方法均有异步和同步版本,
一般使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞

* fs.writeFile(path, data[, options], cb) 写入（覆盖）文件
  >path: 文件路径  
  >data(String | Buffer) : 写入的数据 
  >options: 可选,该参数是一个对象({encoding, mode, flag})或字符串。默认编码为 utf8, 模式为 0666 ， flag 为 'w'  
  >cb: 回调函数,传递一个异常参数 err

* fs.readFile(path, cb) 读取文件

* fs.appendFile(path, data, cb) 追加文件
* fs.unlink(path, cb) 删除文件
  ```js
  const fs = require('fs');

  fs.writeFile('./test.txt', 'hello world!', err => {
    if (err) {
      console.log('写入失败', err);
    } else {
      console.log('写入成功');
    }
  });

  fs.appendFile('test.txt','我是新增的',err=>{
    if(err) {
      console.log(err);
      return false;
    } else {
      console.log("追加成功");
    }
  })

  fs.readFile('./test.txt', (err, res) => {
    if (err) {
      console.log('读取失败', err);
    } else {
      // res 是二进制文件，非媒体文件可以用 toString 转换一下
      console.log('读取成功', res);  // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21 e6 88 91 e6 98 af e6 96 b0 e5 a2 9e e7 9a 84 31 31 31>
      console.log('读取成功', res.toString()); //hello world!我是新增的
    }
  });
  ```

* fs.stat(path, cb) 检查一个读取的是文件还是目录：
  >path: 文件路径
  >cb: 回调函数
  ```js
  const fs = require('fs');
  fs.stat('test.txt', (err, res) => {
    console.log(res)
    console.log(res.isFile()) // 是否文件
    console.log(res.isDirectory()) // 是否目录
    console.log(res.isBlockDevice()) // 是否块设备
    console.log(res.isCharacterDevice()) // 是否块设备
    console.log(res.isSymbolicLink()) // 是否字符设备
    console.log(res.isFIFO()) // 是否FIFO，FIFO是UNIX中的一种特殊类型的命令管道
    console.log(res.isSocket()) // 是否Socket
  })
  // 找到 test.txt 输出
  /* Stats {
    dev: 2080437921,
    mode: 33206,
    nlink: 1,
    uid: 0,
    gid: 0,
    rdev: 0,
    blksize: 4096,
    ino: 18014398510020630,
    size: 12,
    blocks: 0,
    atimeMs: 1594776252836.071,
    mtimeMs: 1594781379533.3013,
    ctimeMs: 1594781379533.3013,
    birthtimeMs: 1594776252836.071,
    atime: 2020-07-15T01:24:12.836Z,
    mtime: 2020-07-15T02:49:39.533Z,
    ctime: 2020-07-15T02:49:39.533Z,
    birthtime: 2020-07-15T01:24:12.836Z
  } */
  ```

* fs.readdir(path, cb) 读取目录
  ```js
  fs.readdir('./',(err,res)=>{})

  /* [
    'css',
    'index.js',
    'test.txt',
  ] */
  ```
* fs.mkdir(path, cb) 创建目录
* fs.rmdir(path, cb) 删除目录
  ```js
  fs.mkdir('css', (err) => {})
  fs.rmdir('css', (err) => {})
  ```

* fs.rename(oldPath,newPath,cb) 重命名
  >oldPath: 旧文件（夹）名
  >newPath: 新文件（夹）名
  ```js
  fs.rename('css','cssNew',(err,res)=>{})
  ```

* fs.open(path, flags[, mode], cb)
  >path - 文件的路径  
  >flags - 文件打开的行为。具体值详见下文  
  >mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)  
  >cb - 回调函数，带有两个参数如：cb(err, res)  

flags值:
* r   以读取模式打开文件。如果文件不存在抛出异常  
* r+	以读写模式打开文件。如果文件不存在抛出异常  
* rs	以同步的方式读取文件  
* rs+	以同步的方式读取和写入文件  
* w	  以写入模式打开文件，如果文件不存在则创建  
* wx	类似 'w'，但是如果文件路径存在，则文件写入失败  
* w+	以读写模式打开文件，如果文件不存在则创建  
* wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败  
* a	  以追加模式打开文件，如果文件不存在则创建  
* ax	类似 'a'， 但是如果文件路径存在，则文件追加失败  
* a+	以读取追加模式打开文件，如果文件不存在则创建  
* ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败  

同步，异步方法使用区别： 
异步读取
```js
let fs = require("fs");

console.log(1);
fs.readFile('test.txt',(err,res)=>{
  console.log(res.toString());
});
console.log(3);

// 1
// 3
// hello,world!
```

同步读取
```js
let fs = require("fs");

console.log(1);
let res = fs.readFileSync('test.txt');
console.log(res.toString());
console.log(3);

// 1
// hello,world!
// 3
```

## <a name="stream流">stream流</a>

当做 fs.readFile 和 fs.writeFile 的升级版；

readFile 和 writeFile 的工作流程 是先把整个文件读取到内存中，然后再一次写入，这种方式对于稍大的文件就不适用了，因为这样容易导致内存不足，所以更好的方式是什么呢？

`边读边写`，业界常说成管道流，就像水流经过水管一样，进水多少，出水就多少，这个水管就是占用的资源（内存），就那么大，这我们样就能合理利用内存分配啦，

fs 模块引用了它并对其做了封装，所以用 fs 即可


#### stream 种类

* Readable Stream  可读数据流
* Writeable Stream 可写数据流
* Duplex Stream 可以同时读和写，双向数据流
* Transform Stream 可读可写，转换数据流，同时可以转换（处理）数据(不常用)

#### 事件
所有的 Stream 对象都是 EventEmitter 的实例。

常用的事件：
* data - 当有数据可读时触发。
* end - 没有更多的数据可读时触发。
* error - 在接收和写入过程中发生错误时触发。
* finish - 所有数据已被写入到底层系统时触发。


#### stream 方法

* fs.createReadStream(path) 读取流  
* fs.createWriteStream(path) 写入流  
* rs.pipe(rw)  拷贝，数据流转(内容覆盖而不是添加)
  >可链式操作

```js
// test.txt
// hello world!

const fs = require('fs');

// 流的方式读取文件
let rs = fs.createReadStream('test.txt');

// 流的方式写入文件
let ws = fs.createWriteStream('test1.txt');

// 用 pipe 将 rs 和 ws 衔接起来，
// 将读取流的数据传到输出流(原内容会被替换)
rs.pipe(ws); 

// 读取次数
let count = 0;

// 保存数据
let str = '';

// 开始读取
rs.on('data', (chunk) => {
  console.log(`${++count} 接收到：${chunk.length}`); // 1 接收到：12
  str += chunk;
})

// 读取完成
rs.on('end', () => {
  console.log("——结束——");
  console.log(count); // 1
  // 输出test.txt里内容
  console.log(str); // hello world!
})

// 读取失败
rs.on('error', (error) => {
  console.log(error);
})

// 写入成功
ws.on('finish', () => {
  console.log('成功');
})
```

#### stream 缺点
* 用 rs.pipe(ws) 的方式来写文件并不是把 rs 的内容 append 到 ws 后面，而是直接用 rs 的内容覆盖 ws 原有的内容

* 已结束/关闭的流不能重复使用，必须重新创建数据流

* pipe 方法返回的是目标数据流，如 a.pipe(b) 返回的是 b，因此监听事件的时候请注意你监听的对象是否正确

* 如果你要监听多个数据流，同时你又使用了 pipe 方法来串联数据流的话，你就要写成：
代码实例：
  ```js
  data
    .on('end', function() {
        console.log('data end');
    })
    .pipe(a)
    .on('end', function() {
        console.log('a end');
    })
    .pipe(b)
    .on('end', function() {
        console.log('b end');
    });
  ```

## <a name="events模块">events模块</a>

[events-所有API](https://nodejs.org/api/events.html) 


Node 事件循环：
* Node 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
* Node 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
* Node 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。


EventEmitter实例方法
* emit(event, [arg1], [arg2], [...]) 触发事件,，如果事件有注册监听返回 true，否则返回 false
* on(event, listener) 为指定事件注册一个监听器（可对同一事件监听多次）
* once(event, listener)为指定事件注册一个单次监听器（只触发一次，触发后立即解绑）
* addListener(event, listener) 为指定事件添加一个监听器到监听器数组的尾部
* removeListener(event, listener) 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
* removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器
* listeners(event) 返回指定事件的监听器数组

```js
let fs = require("fs");
let events = require("events");
let EventEmitter = new events.EventEmitter();// 实例化事件对象

let getTxt = () => {
  fs.readFile('test.txt', (err, res) => {
    // 触发事件
    EventEmitter.emit('mydata', res.toString());
  })  
};

getTxt();

// 注册监听事件
EventEmitter.on('mydata', (res) => {
  console.log('on监听的数据：',res);
});

```

## <a name="url模块">url模块</a>

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

## <a name="util">util提供常用函数的集合</a>
util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。

[util-所有API](https://nodejs.org/api/util.html) 


* util.callbackify(fn) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数
  ```js
  const util = require('util');

  async function fn() {
    return 'hello world';
  }
  const cbFn = util.callbackify(fn);

  cbFn((err, res) => {
    if (err) throw err;
    console.log(res);
  });
  ```

* util.inherits(constructor, superConstructor) 实现对象间原型继承

* util.inspect(obj,[showHidden],[depth],[colors]) 将任意对象转换为字符串，通常用于调试和错误输出。
  >obj: 要转换的对象  
  >showHidden: 可选，为 true 时将会输出更多隐藏信息  
  >depth: 可选，表示最大递归的层数,（默认会递归 2 层，null表无限层）  
  >colors: 可选，为 true 时将输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。

* util.isArray(obj) 判断是否数组
* util.isRegExp(obj) 判断是否正则
* util.isDate(obj) 判断是否日期

## <a name="querystring查询字符串">querystring查询字符串</a>

[querystring-所有API](https://nodejs.org/api/querystring.html) 


要是用来把形如这样的字符串 a=1&b=2&c=3（&和=可以换成别的）解析成 { a: '1', b: '2', c: '3' } 对象，反过来也可以把对象拼接成字符串，

```js
const querystring = require('querystring');

let query = 'a=1&b=2&c=3'; // 形如这样的字符串就能被解析
let obj = querystring.parse(query);
console.log(obj, obj.a); // { a: '1', b: '2', c: '3' }   '1'

query = 'a=1&b=2&c=3&a=3'; // 如果参数重复，其所对应的值会变成数组
obj = querystring.parse(query);
console.log(obj); // { a: [ '1', '3' ], b: '2', c: '3' }

// 相反的我们可以用 querystring.stringify() 把对象拼接成字符串
query = querystring.stringify(obj);
console.log(query); // a=1&a=3&b=2&c=3
```

## <a name="zlib压缩">zlib压缩</a>

[zlib-所有API](https://nodejs.org/api/zlib.html) 


```js
const fs = require('fs');
const zlib = require('zlib');

let rs = fs.createReadStream('test.jpg');
let gz = zlib.createGzip();
let ws = fs.createWriteStream('test.jpg.gz');

// 可链式操作
rs.pipe(gz).pipe(ws);  // 原始文件 => 压缩 => 写入

rs.on('error', err => {
  console.log(err);
});
ws.on('finish', () => {
  console.log('成功');
})

```

## <a name="os模块">os模块</a>
提供了一些基本的系统操作函数

[os-所有API](https://nodejs.org/api/os.html)

### 常用方法，属性
* os.type() 操作系统名
* os.platform() 编译时的操作系统名
* os.hostname() 操作系统的主机名
* os.arch() 操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
* os.totalmem() 操作系统内存总量，单位为字节
* os.freemem() 操作系统空闲内存量，单位是字节
* os.uptime() 操作系统运行的时间，以秒为单位
* os.cpus() 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间

# <a name="第三方模块">第三方模块</a>

## <a name="express">express</a>
```js
const express = require('express')
const app = express() // 生成一个 express 实例 

// 挂载了一个根路由控制器
app.get('/', function (req, res) {
  res.send('hello, express')
})
// 监听 3000 端口并启动程序
app.listen(3000)
```

*  supervisor 每次修改代码保存后，重启程序

npm i -g supervisor
运行 supervisor index 启动程序

### 路由
常用的 req 的属性：
* req.query: 解析后的 url 中的 querystring，如 ?name=haha，req.query 的值为 {name: 'haha'}

* req.params: 解析 url 中的占位符，如 /:name，访问 /haha，req.params 的值为 {name: 'haha'}

* req.body: 解析后请求体，需使用相关的模块，如 body-parser，请求体为 {"name": "haha"}，则 req.body 为 {name: 'haha'}

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello, express')
})

app.get('/users/:name', function (req, res) {
  res.send('hello, ' + req.params.name)
})

app.listen(3000)
```
此时访问 http://localhost:3000/users/tom ，返回 hello, tom

### express.Router 实现更优雅的路由解决方案
利用express.Router优化路由：将 / 和 /users/:name 的路由分别放到了 routes/index.js 和 routes/users.js 中，每个路由文件通过生成一个 express.Router 实例 router 并导出，通过 app.use 挂载到不同的路径。

index.js
```js
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)
```

routes/index.js
```js
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('hello, express')
})

module.exports = router
```

routes/users.js
```js
const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.send('hello, ' + req.params.name)
})

module.exports = router
```

## ejs 模板引擎
模板引擎（Template Engine）是一个将页面模板和数据结合起来生成 html 的工具。上例中，我们只是返回纯文本给浏览器，现在我们修改代码返回一个 html 页面给浏览器。

[ejs](https://www.npmjs.com/package/ejs#tags)使用起来十分简单，而且与 express 集成良好
`npm i ejs --save`


ejs 有 3 种常用标签：
* <% code %>：运行 JavaScript 代码，不输出
* <%= code %>：显示转义后的 HTML内容
* <%- code %>：显示原始 HTML 内容

```html
注意：<%= code %> 和 <%- code %> 都可以是 JavaScript 表达式生成的字符串，当变量 code 为普通字符串时，两者没有区别。
当 code 比如为 <h1>hello</h1> 这种字符串时，<%= code %> 会原样输出 <h1>hello</h1>，而 <%- code %> 则会显示 H1 大的 hello 字符串。
```

demo.ejs
```html
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body {padding: 50px;font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;}
    </style>
  </head>
  <body>
    <h1><%= name.toUpperCase() %></h1>
    <p>hello, <%= name %></p>
  </body>
</html>
```



# Buffer(缓冲区)
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

[Buffer-所有API](https://nodejs.org/api/buffer.html)

### Buffer 与 字符编码转换
Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

```js
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
```

### 创建Buffer类
* Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

* Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据

* Buffer.allocUnsafeSlow(size)

* Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）

* Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。

* Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例

* Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例



### Buffer静态,实例属性，方法
* buf.length 缓冲区长度

* 

* buf.write(string[, offset[, length]][, encoding]) 写入缓冲区  
  返回值：返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串  
  >string - 写入缓冲区的字符串  
  >offset - 缓冲区开始写入的索引值，默认为 0  
  >length - 写入的字节数，默认为 buffer.length  
  >encoding - 使用的编码。默认为 'utf8'  

* buf.toString([encoding[, start[, end]]]) 从缓冲区读取数据  
  返回值：解码缓冲区数据并使用指定的编码返回字符串
  >encoding - 使用的编码。默认为 'utf8'  
  >start - 指定开始读取的索引位置，默认为 0  
  >end - 结束位置，默认为缓冲区的末尾  


* Buffer.concat([buf1,buf2]) 缓冲区合并  

* buf.toJSON() 将 Buffer 转换为 JSON 对象  

* buf1.compare(buf2) 缓冲区比较  
  返回一个数字(1,-1,0)，表示 buf1 在 buf2 之前，之后或相同。

* buf.slice([start[, end]])  缓冲区裁剪  
  返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
  >start - 数字, 可选, 默认: 0  
  >end - 数字, 可选, 默认: buffer.length  

* buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
  没有返回值
  >targetBuffer - 要拷贝的 Buffer 对象  
  >targetStart - 数字, 可选, 默认: 0  
  >sourceStart - 数字, 可选, 默认: 0  
  >sourceEnd - 数字, 可选, 默认: buffer.length  


#  非阻塞 I/O 事件驱动

Java、PHP 或者 .NET 等服务端语言，会为每一个客户端的连接创建一个新的线程。
Node 不会为每一个客户连接创建一个新的线程，而仅仅使用一个线程。

当有用户连接了，就会触发一个内部事件，通过非阻塞 I/O、事件驱动机制，让 Node 程序宏观上也是并行的。

# 环境变量

环境变量不属于 Node.js 的知识范畴，只不过我们在开发 Node.js 应用时经常与环境变量打交道，所以这里简单介绍下。

环境变量（environment variables）一般是指在操作系统中用来指定操作系统运行环境的一些参数。在 Mac 和 Linux 的终端直接输入 env，会列出当前的环境变量，如：USER=xxx。简单来讲，环境变量就是传递参数给运行程序的。

在 Node.js 中，我们经常这么用:
index.js
```js
console.log(process.env.NODE_ENV);
```
NODE_ENV=test node index.js


或者使用 [cross-env](https://www.npmjs.com/package/cross-env)
`npm i cross-env -g`
cross-env NODE_ENV=test node index.js


