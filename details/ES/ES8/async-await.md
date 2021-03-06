[ECMAScript 6 入门-async](https://es6.ruanyifeng.com/#docs/async)--阮一峰

[理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316)


## 概述
async 函数是什么？一句话，它就是 Generator 函数的语法糖。

async函数返回 Promise 对象

async/await 让异步代码看起来、表现起来更像同步代码

await命令只能出现在 async 函数内部，否则都会报错。

[手写async/await](/details\常用的手写函数\async-await.md)

## async用法
#### async函数返回 Promise 对象，可以使用then方法添加回调函数。  
```js
async function fn() {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}

console.log(fn()); // Promise {<pending>}


fn().then((data) => {
  console.log(data); // 1
})
```

#### 返回值是普通值,会被包装成一个promise对象。该promise状态为fullfilled,
```js
async function fn() {
  return 1
}
console.log(fn()); // Promise {<resolved>: 1}

fn().then((data) => {
  console.log(data); // 1
})
```


#### 抛出 Error类型时,会被包装成一个promise对象，该promise对象的状态是reject, 
```js
async function fn() {
  throw new Error('ERROR')
}

console.log(fn()); //Promise {<rejected>: Error: ERROR

fn().then(data => {
  console.log(data); // 1
},err => {
  console.log('错误：',err);
})

fn().catch(err =>{
  cons
```

#### 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
```js
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 3000);
```
上面代码指定 3000 毫秒以后，输出hello world。


## async/await

使用await 取到 promise 对象中的值
```js
var p1 = Promise.resolve(1);
(async function() {
    console.log(await p1); // 1
})()

```

async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。
也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
```js
async function func(){
  await fun1();
  await fun2();
  await fun3();
  return 0;
}
function fun1(){console.log(1);}
function fun2(){console.log(2);}
function fun3(){console.log(3);}
func().then(console.log);
//输出：
// 1 2 3 0
```
执行完 fun1,fun2,fun3才会执行then方法里面的console.log。


### await 会阻塞线程吗？
`不会，本质是. then()的语法糖`


很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。await后面的表达式会先执行一遍，将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码。  

等本轮事件循环执行完了之后又会跳回到async函数中等待await 后面表达式的返回值，如果返回值为非promise则继续执行async函数后面的代码，否则将返回的promise放入promise队列

```js
await foo();
console.log("hello");

// 相当于

foo().then(() => {
    console.log("hello");
});

```



## 例子
```js
async function async1() {  
  console.log("async1 start");  
  await async2();  //执行这一句后，输出async2后，await会让出当前线程，将后面的代码`console.log("async1 end")`加到任务队列中，然后跳出整个async1函数 执行后面的同步代码
  console.log("async1 end");  
}  

async function async2() {  
  console.log("async2");  
}  

console.log("script start");  

setTimeout(function () {  
  console.log("settimeout");  
},0);  

async1();  

new Promise(function (resolve) {  
  console.log("promise1");  
  resolve();  
}).then(function () {  
  console.log("promise2");  
}); 

console.log('script end');  
```

由于因为async await 本身就是promise+generator的语法糖。所以await后面的代码是microtask。所以对于本题中的
```js

async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

等价于

async function async1() {
	console.log('async1 start');
	Promise.resolve(async2()).then(() => {
    console.log('async1 end');
  })
}
```

执行结果：
```js
script start
async1 start
async2
promise1
script end
promise2
async1 end
settimeout
```

## async 地狱
async 地狱主要是指开发者贪图语法上的简洁而让原本可以并行执行的内容变成了顺序执行，从而影响了性能，但用地狱形容有点夸张了点……
```js
(async () => {
  const getList = await getList();
  const getAnotherList = await getAnotherList();
})();
```
getList() 和 getAnotherList() 其实并没有依赖关系，但是现在的这种写法，虽然简洁，却导致了 getAnotherList() 只能在 getList() 返回后才会执行，从而导致了多一倍的请求时间。

为了解决这个问题，我们可以改成这样：
```js
(async () => {
  const listPromise = getList();
  const anotherListPromise = getAnotherList();
  await listPromise;
  await anotherListPromise;
})();
```

也可以使用 Promise.all()：
```js
(async () => {
  Promise.all([
    getList(),
    getAnotherList()
  ])
    .then(...);
})();
```

## 优雅的处理 async/await
无需每次使用 async/await 都包裹一层 try/catch ，更加的优雅
```js
async function errorCaptured(fn) {
  try {
    let res = await fn()
    return [null, res]
  } catch (err) {
    return [err, null]
  }
}

// 使用
let [err, res] = await errorCaptured(func)
```