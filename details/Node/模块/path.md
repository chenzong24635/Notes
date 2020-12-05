# path
处理路径相关
  
[path-所有API](https://nodejs.org/api/path.html)

## 常用方法
* path.basename(path,ext) 文件名，返回路径的最后一部分
* path.extname(path) 后缀名
* path.join([...paths]) 路径拼接 
* path.resolve([...paths]) 解析为绝对路径  
* path.isAbsolute(path) 判断是否是绝对路径  
* path.relative(from, to) 将绝对路径转为相对路径，返回从 from 到 to 的相对路径  

## path.join([path1][, path2][, ...]) 

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

## path.resolve([from ...], to) 

```js
const path = require('path')
let myPath1 = path.resolve('/a','b');  // D:\a\b
let myPath2 = path.resolve('/a','/b'); // D:\b
let myPath3 = path.resolve('/a','./b'); // D:\a\b
let myPath4 = path.resolve('./a','./b'); // D:\node-learn\a\b
let myPath5 = path.resolve('/a', 'b', 'c/d', 'e', '../'); // D:\a\b\c\d
```

## join、resolve对比
join、resolve 一般可以互换使用，但拼接的路径有 / 时不能使用 resolve 否则会解析为根路径

```js
const path = require('path');
console.log(__dirname); // D:\node-learn

let p1 = path.join(__dirname,'/a/b');    // D:\node-learn\a\b
let p2 = path.join(__dirname,'./a/b');   // D:\node-learn\a\b

let p3 = path.resolve(__dirname,'/a/b'); // D:\a\b
let p4 = path.resolve(__dirname,'./a/b');// D:\node-learn\a\b

// 拼接的路径有 / 时
let p5 = path.join(__dirname,'/a/b','/'); // D:\a\b\
let p6 = path.resolve(__dirname,'/a/b','/'); // D:\
```

## path.relative
相对路径
```js
console.log(path.relative('a','a/b/1.js')); //b\1.js
```
