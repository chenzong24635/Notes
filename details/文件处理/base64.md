## base
[](https://juejin.cn/post/6898104998547161096)

Base64是网络上最常见的用于传输8Bit字节码的编码方式之一
Base64就是一种基于64个可打印字符来表示二进制数据的方法
Base64要求把每三个8Bit的字节转换为四个6Bit的字节（38 = 46 = 24），然后把6Bit再添两位高位0，组成四个8Bit的字节
```js
const CHARTS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function transfer(str){
  let buf = Buffer.from(str);
  let result = '';
  for(let b of buf){
      result += b.toString(2);
  }
  return result.match(/(\d{6})/g).map(val=>parseInt(val,2)).map(val=>CHARTS[val]).join('');
}
let r = transfer('珠');
console.log(r);//54+g
```

### btoa、atob
```js
const utf8ToBase64 = window.btoa('Hello World!');  console.log(utf8ToBase64); // base64: SGVsbG8gV29ybGQh  
const base64ToUtf8 = window.atob(utf8ToBase64);  console.log(base64ToUtf8); // UTF-8: Hello World!
```

## base64 作用

base64编码是一种图片处理格式，通过特定算法将图片编码成一串字符串

### 优点
* 减少https请求: 网页上的每一个图片，都是需要消耗一个 http 请求下载而来的, 图片的下载始终都要向服务器发出请求，要是图片的下载不用向服务器发出请求，base64可以随着 HTML 的下载同时下载到本地
  
###  缺点：
* 尽管图片请求少了，但是 HTML 文件本身尺寸会变大，会影响首屏加载
* 根据 base64 的编码原理，大小比原文件大小大 1/3,比较适合用于小图标，

* base64 无法缓存，要缓存只能缓存包含 base64 的文件，比如 HTML 或者 CSS，这相比直接缓存图片要弱很多，一般 HTM 会改动频繁，所以等同于得不到缓存效益
* 兼容性问题，ie8以前不支持