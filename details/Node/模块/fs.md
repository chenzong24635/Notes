# fs
* 在Node.js中，使用fs模块来实现所有有关文件及目录的创建、写入及删除操作。
* 在fs模块中，所有的方法都分为同步和异步两种实现。
  >一般使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞
* 具有sync后缀的方法为同步方法，不具有sync后缀的方法为异步方法。
* 读取默认的编码是 buffer，写入的默认编码是utf-8



[fs-所有API](http://nodejs.cn/api/fs.html) 

### 常用方法
readFile 读取文件，文件不存在会报错， 
writeFile 写入文件，文件不存在会创建，存在会替换

* fs.readFile(path, options,cb) 读取文件,自动
* fs.writeFile(path, data[, options], cb) 写入（覆盖）文件
  >path: 文件路径  
  >data(String | Buffer) : 写入的数据 
  >options: 可选,该参数是一个对象({encoding, mode, flag})或字符串。默认编码为 utf8, 模式为 0666 ， flag 为 'w'  
  >cb: 回调函数,传递一个异常参数 err


* fs.open(path, flags[, mode], callback)
  >path - 文件的路径  
  >flags - 文件打开的行为。具体值详见下文  
  >mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)  
  >callback(err, fd) - 回调函数

* fs.read(fd, buffer, offset, length, position, callback)
  >fd 指定的文件
  >buffer 是数据（从 fd 读取）要被写入的 buffer。
  >offset 是 buffer 中开始写入的偏移量。
  >length 是整数，指定要读取的字节数。
  >position 参数指定从文件中开始读取的位置。 如果 position 为 null，则从当前文件位置读取数据，并更新文件位置。 如果 position 是整数，则文件位置会保持不变。
  >callback(err, bytesRead, buffer)
    >err 错误
    >bytesRead: 真实读取的个数

* fs.read(fd, [options,] callback)
* fs.write(fd, buffer[, offset[, length[, position]]], callback)
* fs.write(fd, string[, position[, encoding]], callback)
* fs.close(fd, callback)释放fd

* fs.existsSync 同步判断文件是否存在
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

// fs.readFile('./test.txt', 'utf-8',(err, res) => {
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



### flags值:
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



### 同步，异步方法使用区别： 
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
