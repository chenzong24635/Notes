# ES9新特性（ES2018）

## 异步迭代器（asynchronous iterators） for await ... of 
循环等待每个Promise对象变为resolved状态才进入下一步

在async/await的某些时刻，你可能尝试在同步循环中调用异步函数。例如：
```js
async function process(array) {
  for (let i of array) {
    await doSomething(i);
  }
}

```

使用for await of;
以串行的方式运行异步操作。
```js
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}
```

```js
function Gen (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time)
    }, time)
  })
}

// for of遍历
function test (arr) {
  for (let item of arr) {
    console.log(Date.now(), item.then(console.log))
  }
}
test([Gen(2000), Gen(1000), Gen(3000)])
//输出
/*
  1576030907652 Promise {<pending>}
  1576030907652 Promise {<pending>}
  1576030907652 Promise {<pending>}
  Promise {<resolved>: undefined}
  1000
  2000
  3000 
*/

// for await of遍历
async function test (arr) {
  for await (let item of arr) {
    console.log(Date.now(), item)
  }
}
test()
//输出
/*   
  1575536194608 2000
  1575536194608 1000
  1575536195608 3000 
*/
```

## Promise.finally()
Promise 无论成功还是失败，都会执行
```js
new Promise((resolve,reject)=>{
  resolve(1)
})
  .then()
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
  });
```

## 为对象解构提供了和数组一样的Rest参数（）和展开操作符


## 正则表达式命名捕获组（Regular Expression Named Capture Groups）
允许命名捕获组使用符号?\<name>
```js
const reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let date = '2018-04-30';
date.replace(reg, '$<month>-$<day>-$<year>'); // "04-30-2018"

```

## 正则表达式反向断言（lookbehind）


## 正则表达式dotAll模式


## 正则表达式 Unicode 转义


## 非转义序列的模板字符串
