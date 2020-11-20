# ES7新特性（ES2016）

## Array.prototype.includes()
判断一个数组是否包含一个指定的值，返回boolean值，
与 indexOf 方法相似,indexOf返回对应的索引或 -1

```js
[1,2,3].includes(2) // true
[1,2,3].includes(5) // false

[1,2,3].indexOf(2) // 2
[1,2,3].indexOf(5) // -1

arr.includes(x)
// 等价于
arr.indexOf(x) >= 0
```

## 指数操作符 ** 
** 具有与Math.pow(..)等效的计算结果
```js
2**10 // 1024
// 等同于
Math.pow(2,10) // 1024
```