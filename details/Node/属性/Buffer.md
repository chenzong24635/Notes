# 编码的发展
一个字节由8个位组成，gbk中一个汉字2个字节，utf8中一个汉字3个字节
* ASCII编码
* GB2312
* GBK
* GB18030
* Unicode
* UTF-8

Node中不支持GBK编码，我们需要将GBK转为UTF8编码

[字符发展史](/details\其他\字符发展史.md)

## 字节、进制
字节
* 字节(Byte)是计算机存储时的一种计量单位，一个字节等于8位二进制数
* 一个位就代表一个0或1，每8个位（bit）组成一个字节（Byte）
* 字节是通过网络传输信息的基本单位
* 一个字节最大值十进制数是255(2**8-1)

进制
* 0b 2进制
* 0x 16进制
* 0o 8进制

# Buffer

* 缓冲区Buffer是暂时存放输入输出数据的一段内存。
* JS语言没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
* NodeJS提供了一个Buffer对象来提供对二进制数据的操作
* 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
* Buffer好比由一个8位字节元素组成的数组，可以有效的在JavasScript中表示二进制数据

[Buffer-所有API](http://nodejs.cn/api/buffer.html)

## Buffer 与 字符编码转换
Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

```js
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
```

## 创建Buffer类
* Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

* Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据

* Buffer.allocUnsafeSlow(size)

* Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）

* Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。

* Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例

* Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

## 常用的定义buffer的三种方式
* 通过长度定义buffer
  ```js
  // 创建一个长度为 10、且用 0 填充的 Buffer。
  const buf1 = Buffer.alloc(10); //<Buffer 00 00 00 00 00 00 00 00 00 00>
  // 创建一个长度为 10、且用 0x1 填充的 Buffer。
  const buf2 = Buffer.alloc(10, 1); // <Buffer 01 01 01 01 01 01 01 01 01 01>
  // 创建一个长度为 10、且未初始化的 Buffer。
  const buf3 = Buffer.allocUnsafe(10); // <Buffer 38 53 6c 69 63 65 00 00 00 00>
  ```

* 通过数组定义buffer
  ```js
  // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
  const buf4 = Buffer.from([1, 2, 3]); // <Buffer 01 02 03>
  ```

* 字符串创建
  ```js
  const buf5 = Buffer.from('zfpx'); // <Buffer 7a 66 70 78>
  const buf6 = Buffer.from('abcd'); // <Buffer 61 62 63 64>
  
  ```

## Buffer常用属性，方法
* buf.length 长度

* buf.fill(value[, offset[, end]][, encoding]) 用指定的 value 填充 buf;`会改变原值`
  返回buffer
  >value: 填充 buf 的值。
  >offset: 开始填充 buf 的偏移量。默认值: 0。
  >end: 结束填充 buf 的偏移量（不包含）。默认值: buf.length。
  >encoding: 如果 value 是字符串，则指定 value 的字符编码。默认值: 'utf8'。  

  ```js
  let buf = Buffer.from('xxxx'); // <Buffer 78 78 78 78>
  let buf1 = buf.fill(3) // <Buffer 03 03 03 03>
  buf===buf1 //true
  ```

* buf.write(string[, offset[, length]][, encoding]) 写入缓冲区  
  返回值：返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串  
  >string - 写入缓冲区的字符串  
  >offset - 缓冲区开始写入的索引值，默认为 0  
  >length - 写入的字节数，默认为 buffer.length  
  >encoding - 使用的编码。默认为 'utf8'  

* buf.toString([encoding[, start[, end]]]) //buffer转为字符串
  返回值：解码缓冲区数据并使用指定的编码返回字符串
  >encoding - 使用的编码。默认为 'utf8'  
  >start - 指定开始读取的索引位置，默认为 0  
  >end - 结束位置，默认为缓冲区的末尾  
  ```js
  let buf = Buffer.from('xxxx'); // 字符串转buffer
  let buf1 = buf.toString() //buffer转字符串
  buf // <Buffer 78 78 78 78>
  buf1 // xxxx
  ```

* buf.toJSON() 将 Buffer 转换为 JSON 对象  

* buf1.compare(buf2) 缓冲区比较  
  返回一个数字(1,-1,0)，表示 buf1 在 buf2 之前，之后或相同。

* buf.slice([start[, end]])  缓冲区裁剪  
  返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
  >start - 数字, 可选, 默认: 0  
  >end - 数字, 可选, 默认: buffer.length  

* buf.indexOf(value[, byteOffset][, encoding]) 字符索引
  >value 要查找的值。
  >byteOffset开始查找的偏移量。默认值: 0。
  >encoding 

* buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])拷贝buf
  没有返回值
  >targetBuffer - 要拷贝的 Buffer 对象  
  >targetStart - target 中开始写入之前要跳过的字节数。默认值: 0。
  >sourceStart - buf 中开始拷贝的偏移量。默认值: 0。 
  >sourceEnd - buf 中结束拷贝的偏移量（不包含）。默认值: buf.length。

* Buffer.concat([buf1,buf2]) 缓冲区合并  

* Buffer.isBuffer(val) 判断是否是buffer

* Buffer.byteLength(string[, encoding]) 计算字节数。

# Buffer应用

### 前端下载html功能
```js
let str = `<h1>hello world</h1>`;
const blob = new Blob([str], {
  type: 'text/html'
});
let a = document.createElement('a');
a.setAttribute('download', 'a.html');
a.href = URL.createObjectURL(blob);
// document.body.appendChild(a);
a.click()
```
[下载](/details\文件处理\下载.md)

### 文件上传预览功能
```js
<input type="file" id="file">

file.addEventListener('change', (e) => {
  let file = e.target.files[0];
  let fileReader = new FileReader();
  fileReader.onload = function () {
      let img = document.createElement('img');
      console.log(fileReader);
      img.src = fileReader.result;
      document.body.appendChild(img)
  }
  fileReader.readAsDataURL(file);
})
```

[图片转base64、blob、canvas](/details\文件处理\图片转base64、blob、canvas.md)