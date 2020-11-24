# 流的概念
* 流是一组有序的，有起点和终点的字节数据传输手段
* 它不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理
* 流是一个抽象接口，被 Node 中的很多对象所实现。比如HTTP 服务器request和response对象都是流。

# stream流

当做 fs.readFile 和 fs.writeFile 的升级版；

readFile 和 writeFile 的工作流程 是先把整个文件读取到内存中，然后再一次写入，这种方式对于稍大的文件就不适用了，因为这样容易导致内存不足，所以更好的方式是什么呢？

`边读边写`，业界常说成管道流，就像水流经过水管一样，进水多少，出水就多少，这个水管就是占用的资源（内存），就那么大，这我们样就能合理利用内存分配啦，

fs 模块引用了它并对其做了封装，所以用 fs 即可

[stream api](http://nodejs.cn/api/stream.html)
[fs api](http://nodejs.cn/api/fs.html)

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

* fs.createReadStream(path,options) 读取流  
  >path: 
  >options
   * flags 默认值: 'r'。
   * encoding 默认值: null。
   * fd 默认值: null。
   * mode 默认值: 0o666。
   * autoClose 默认值: true。
   * emitClose默认值: false。
   * start 开始读取的索引位置，默认0
   * end 结束读取的索引位置,默认值: Infinity。
   * highWaterMark 每次读取大小,默认值: 64 * 1024。
   * fs 默认值: null。

* fs.createWriteStream(path) 写入流  
* rs.pipe(rw)  拷贝，数据流转(内容覆盖而不是添加)
  >可链式操作

* rs.pause 暂停（使流动模式的流停止触发 'data' 事件，并切换出流动模式）
* rs.resume 继续（使被暂停的可读流恢复触发 'data' 事件，并将流切换到流动模式。）
```js
// test.txt
// hello world!

const fs = require('fs');

// 流的方式读取文件
let rs = fs.createReadStream('test.txt',{
  flags: 'r',
  highWaterMark:1, // 每次读取1字节
  encoding:'utf-8' // utf-8编码格式
});

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
