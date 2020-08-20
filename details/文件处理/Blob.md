## [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)

### 定义： 
Blob（Binary Large Object）表示二进制类型的大对象。在数据库管理系统中，将二进制数据存储为一个单一个体的集合。Blob 通常是影像、声音或多媒体文件。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。 

Blob 对象表示一个不可变、原始数据的类文件对象。Blob 表示的不一定是JavaScript原生格式的数据。File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。

![Blob](/img/Blob.jpg)

### 语法,参数
new Blob( array, options )
>array 是一个由ArrayBuffer, ArrayBufferView, Blob, DOMString 等对象构成的 Array ，或者其他类似对象的混合体，它将会被放进 Blob。DOMStrings会被编码为UTF-8。  
>options 是一个可选的BlobPropertyBag字典，它可能会指定如下两个属性：
>>type，默认值为 ""，它代表了将会被放入到blob中的数组内容的MIME类型。  
>>endings，默认值为"transparent"，用于指定包含行结束符\n的字符串如何被写入。 它是以下两个值中的一个： "native"，代表行结束符会被更改为适合宿主操作系统文件系统的换行符，或者 "transparent"，代表会保持blob中保存的结束符不变 

#### MIME（Multipurpose Internet Mail Extensions）多用途互联网邮件扩展类型
是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。

常见的 MIME 类型有：超文本标记语言文本 .html text/html、PNG图像 .png image/png、普通文本 .txt text/plain 等。



### 属性

* size（只读）：表示 Blob 对象中所包含数据的大小（以字节为单位）。  
* type（只读）：一个字符串，表明该 Blob 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串

```js
let blob = new Blob(['myBlob'],{type: 'text/plain'})
blob.size // 6
blob.type // text/plain

```


### 方法
* slice([start[, end[, contentType]]])：返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。

* stream()：返回一个能读取 blob 内容的 ReadableStream。

* text()：返回一个 Promise 对象且包含 blob 所有内容的 UTF-8 格式的 USVString。

* arrayBuffer()：返回一个 Promise 对象且包含 blob 所有内容的二进制格式的 ArrayBuffer。

```js
let blob = new Blob(['a','bc', 1],{type: 'text/plain'})// Blob {size: 4, type: "text/plain"}
let blob1 = blob.slice(1) // Blob {size: 3, type: ""}
blob.stream() // ReadableStream {locked: false}
blob.text().then(res=>{
  console.log(res); // abc1
})
blob.text().then(res=>{
  console.log(res);
  // ArrayBuffer(4) {
  //   [[Int8Array]]: Int8Array(4) [97, 98, 99, 49]
  //   [[Uint8Array]]: Uint8Array(4) [97, 98, 99, 49]
  //   [[Int16Array]]: Int16Array(2) [25185, 12643]
  //   [[Int32Array]]: Int32Array [828596833]
  // }
})
```


### ArrayBuffer

对象用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个类型化数组对象或 DataView 对象，该对象以特定格式表示缓冲区，并使用该对象读取和写入缓冲区的内容。
```js
const buffer = new ArrayBuffer(8);
// ArrayBuffer 对象有实例属性 byteLength ，表示当前实例占用的内存字节长度（单位字节）
console.log(buffer.byteLength);

```

### [DataView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)
new DataView(buffer [, byteOffset [, byteLength]])
* getInt8()
从DataView起始位置以byte为计数的指定偏移量(byteOffset)处`获取`一个8-bit数(`一个字节`).

* getUint8()
从DataView起始位置以byte为计数的指定偏移量(byteOffset)处`获取`一个8-bit数(`无符号字节`).

* setInt8()
从DataView起始位置以byte为计数的指定偏移量(byteOffset)处`储存`一个8-bit数(一个字节).

* setUint8()
从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(无符号字节).

* 还有其他方法 16、32、64


```js
let buffer = new ArrayBuffer(2);
console.log(buffer.byteLength); // 2
let dataView = new DataView(buffer);
dataView.setInt8(0, 1);
dataView.setInt8(1, 2);
console.log(dataView.getInt8(0)); // 1
console.log(dataView.getInt8(1)); // 2
console.log(dataView.getInt16(0)); // 258

```


### [TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
TypedArray对象描述了一个底层的二进制数据缓存区（binary data buffer）的一个类数组视图（view）。

与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 8
const int8Array = new Int8Array(buffer);
console.log(int8Array.length); // 8
const int16Array = new Int16Array(buffer);
console.log(int16Array.length); // 4

```


### Blob，ArrayBuffer区别
* 除非你需要使用 ArrayBuffer 提供的写入/编辑的能力，否则 Blob 格式可能是最好的。
* Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。
* ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。
* 虽然 Blob 可以直接作为参数传递给其他函数，比如 window.URL.createObjectURL() （生成一个url地址）。但是，你可能仍需要 FileReader 之类的 File API 才能与 Blob 一起使用。

###  Blob => ArrayBuffer
```js
let blob = new Blob([1,2,3,4])
let reader = new FileReader();
reader.onload = function(result) {
    console.log(result);
}
reader.readAsArrayBuffer(blob);
```

###  ArrayBuffer => Blob
```js
let blob = new Blob([buffer])
```

Blob和ArrayBuffer都能存储二进制数据。Blob相对而言储存的二进制数据大（如File文件对象）。

ArrayBuffer是原始的二进制数据缓冲区，不能设置MIME类型；  
Blob可以储存大量的二进制编码格式的数据，可以设置对象的MIME类型。