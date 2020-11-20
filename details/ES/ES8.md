# ES8新特性（ES2017）

## [async/await](./ES8/async-await.md)

## Object.values()、Object.entries()、Object.fromEntries()
ES5 引入了Object.keys()方法，返回一个数组，成员是参数对象自身的（`不含继承的`）所有可遍历（enumerable）属性的键名。

ES2017 引入了Object.values()和Object.entries()，作为遍历一个对象的补充手段，供for...of循环使用。

Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。


```js
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

// keys(obj) => ['a','b','c']
for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

// values(obj) => [1,2,3]
for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

// entries(obj) => [['a', 1], ['b', 2], ['c', 3]]
for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

Object.fromEntries(Object.entries(obj)) // {a: 1, b: 2, c: 3}
```




## padStart()、padEnd()
补全字符串长度，返回的都是新字符串，不会修改原始字符串。
如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

padStart(targetLength , str)、
padEnd(targetLength, str)
>targetLength: 字符串补全生效的最大长度,超过该长度，才会进行补全
>str：用来补全的字符串，省略则默认值为空格

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(5) // '    x'

// 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串
'xxx'.padStart(2, 'ab') // 'xxx'

// 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
'x'.padStart(5, 'abcdefg')
// 'abcdx'
```


## 函数参数列表结尾允许逗号
主要作用是方便使用git进行多人协作开发时修改同一个函数减少不必要的行变更。
```js
function fn(a,b,){}
```

## Object.getOwnPropertyDescriptors()
数用来获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。

## ShareArrayBuffer和Atomics对象，用于从共享内存位置读取和写入

SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于 ArrayBuffer 对象，它们都可以用来在共享内存（shared memory）上创建视图。与 ArrayBuffer 不同的是，SharedArrayBuffer 不能被分离。

```js
/**
 * 
 * @param {*} length 所创建的数组缓冲区的大小，以字节(byte)为单位。  
 * @returns {SharedArrayBuffer} 一个大小指定的新 SharedArrayBuffer 对象。其内容被初始化为 0。
 */
new SharedArrayBuffer(length)
```

Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作。