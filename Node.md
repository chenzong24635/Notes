# Node
[Node官网-zh](http://nodejs.cn/)  
[Node官网-en](https://nodejs.org/en/)

[cnode社区](https://cnodejs.org/getstart)

[深入理解Node.js 中的进程与线程](https://juejin.im/post/5d43017be51d4561f40adcf9)


# <a name="了解">了解Node</a>


node 不是一门后台语言而是一个环境(执行时)，是一个基于 Chrome V8 引擎 能够让 js 运行在服务器的环境

Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

Node.js 是单进程单线程应用程序，但是其基于事件驱动、异步非阻塞I/O模式，可以应用于高并发场景，避免了线程创建、线程之间上下文切换所产生的资源开销。

Node作为中间层，可以解决跨域问题

Node 遵循的是 CommonJs 模块规范


特点
* 单线程
* 异步非阻塞I/O
* 事件驱动

## node解决哪些问题
Node在处理高并发,I/O密集场景有明显的性能优势

* 高并发（是指在同一时间并发访问服务器）

* I/O密集指的是文件操作、网络操作、数据库,相对的有CPU密集,CPU密集指的是逻辑处理运算、压缩、解压、加密、解密
>node不适合cpu密集，运算

Web主要场景就是接收客户端的请求读取静态资源和渲染界面,所以Node非常适合Web应用的开发。

## npm指令及package.json属性
npm其实是Node.js的包管理工具（package manager），npm已经在Node.js安装的时候顺带装好了

`为啥我们需要一个包管理工具呢？`  

因为我们在Node.js上开发时，会用到很多别人写的JavaScript代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。  
于是一个集中管理的工具应运而生：大家都把自己开发的模块打包后放到npm官网上，如果要使用，直接通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。

并且如果我们要使用模块A，而模块A又依赖模块B，模块B又依赖模块C和D，此时npm会根据依赖关系，把所有依赖的包都下载下来并且管理起来。试想如果这些工作全靠我们自己去完成会多么麻烦！

[npm指令及package.json属性](/npm指令.md)

# 调试
[Node调试](https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/)

浏览器调试
* 终端运行 node --inspect-brk 要调试的文件
* 打开chrome浏览器 输入 chrome://inspect


vscode调试
* 点击 vscode左侧 运行按钮， 
* 点击 创建 launch.json 文件
* 选择工作目录
* 选择环境（Node.js)
* 
默认再选择的目录下生成以下 json文件
```json
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "skipFiles": [ //要跳过的文件
        "<node_internals>/**" //跳过node原代码
      ],
      "program": "${workspaceFolder}\\index.js" // 运行的文件路径
    }
  ]
}
```
在代码里打断点，按 f5 启动调试

# EventLoop
[事件环EventLoop](/details\Node\EventLoop.md)
# <a name="全局对象与全局变量">全局对象与全局变量</a>

在浏览器 JavaScript 中，通常 window 是全局对象，
而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

gloabl:
* Buffer
* process
* setInterval、clearInterval
* setTimeout、clearTimeout
* setImmediate、clearImmediate
* console
* queueMicrotask


Node里 this 是个空对象，指向module.exports，不会指向 global（node为了实现模块化，在文件执行时 增加了匿名函数，所以 this 在该函数中被更改）
```js
// node里执行
console.log(this) // {}
(function(){
  console.log(this) // global
})()
console.log(global);
``` 

Node里 没有window，访问会报错


`所有模块都可以访问以下五个模块，但他们并不是全局属性 global的属性`
* require
* module
* exports
* __dirname
* __filename

## require、exports、module
node 遵循的是 CommonJs 模块规范

```js
let m = require('./module')
module.exports = {
    a: 1,
}
exports.a = 1;
```

exports 相当于 module.exports

源码中
```js
function xxx() {
  ...
  exports = module.exports;
  return module.exports;
}
```
因此 exports 和  module.exports指向同一引用地址

所以可以解释 为什么 exports 只能通过 . 的形式（exports.xxx = xxxx )暴露变量，  
要是通过 exports = xxx，则exports 指向新的引用地址，而module.exports未变，但最后函数返回的是 module.exports，因此引入模块时获取不到该变量

```js
console.log(module.exports === exports); //true
console.log(module.exports === this); //true
```

require方法接受以下几种参数的传递：
* 原生模块（http、fs、path等，）
* mod，第三方模块  
  >引用第三方模块 会去当前目录下查找 node_modules 文件夹；如果无法找到，则向上一级查找;找不到报错
* ./mod或../mod，相对路径的文件模块  
* /mod，绝对路径的文件模块  

## __filename 正在执行的脚本的文件名(所在位置的`绝对路径`)
```js
console.log(__filename);
// c:\Users\Cz\Desktop\node-demo\index.js
```
## __dirname 正在执行的脚本的目录
```js
console.log(__filename);
// c:\Users\Cz\Desktop\node-demo
```
## process 是一个全局变量，即 global 对象的属性。
* argv 运行时传递参数
* env 环境变量
* platform 运行平台
* cwd 当前工作目录 
* chdir 修改路径
* nextTick 
* ...

### argv 运行时传递参数
在node 运行时传入特定变量

```js
//node-demo/index.js
console.log(process.argv);

//终端执行
node index.js -a -b

// 打印process.argv返回
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Cz\\Desktop\\node-demo\\index.js',
  '-a',
  '-b'
]

process.argv.slice(2)//获取命令运行参数
```


```js
console.log(process.argv);
let params = {};
process.argv.slice(2).forEach((item, index, array)=>{
  if(item.startsWith('--')) {
    // 截取--后的字符作为键，后面的字符作为值
    params[item.slice(2)] = array[index+1];
  }
})
console.log(params);
// { port: '3000', config: 'webpack.config.js' }
```      

使用 commander 

<!-- index.js -->
```js
console.log(process.argv);
let program = require("commander");
// 需配置
program.option('--port <v>','set user port');
program.option('--config <v>','set user config file');
console.log(program.parse(process.argv));

```
`node index.js  --port 3000 --config webpack.config.js`

### env 环境变量（
当前命令行设置变量，set NODE_ENV=development 或 export NODE_ENV=development ）
```js
//node-demo/index.js
console.log(process.env.NODE_ENV);

//终端执行
export NODE_ENV = development
node index.js

打印process.env.NODE_ENV值为
development
```

通过 package.json 设置命令，使用cross-env插件在 改变环境变量
```js
npm init -y // 初始化 生成 package.json
npm i cross-env -D //安装cross-env插件

// package.json
"scripts": {
  "serve": "node index.js",
  "build": "cross-env NODE_ENV=production node index.js",
},

npm run build
// 打印 
production
```

### cwd 当前工作目录，chdir修改路径
```js
console.log(process.cwd());
// c:\Users\Cz\Desktop\node-demo
```

该路径可被修改

```js
process.chdir('../');
console.log(process.cwd());
// c:\Users\Cz\Desktop

```

# node中的模块的分类
* 核心模块/内置模块 fs http path 不需要安装 引入的时候不需要增加相对路径、绝对路径
* 第三方模块需要安装
* 自定义模块需要通过绝对路径或者相对路径进行引入

# [Buffer(缓冲区)](/details\Node\属性\Buffer.md)
# <a name="内置模块">内置模块</a>

## <a name="path路径">path路径</a>

## <a name="events模块">events模块</a>
[events模块](/details\Node\模块\Events.md)
## <a name="fs文件系统">fs文件系统</a>
 [fs文件系统](/details\Node\模块\fs.md)

 ## <a name="stream流">stream流</a>
[stream流](/details\Node\模块\stream.md)

## <a name="url模块">url模块</a>
[url模块](/details/Node/模块/url.md)
## <a name="http模块">http模块</a>
[http模块](/details/Node/模块/http.md)



## <a name="util">util提供常用函数的集合</a>
[util](/details/Node/模块/util.md)
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


