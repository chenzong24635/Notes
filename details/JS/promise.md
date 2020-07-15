
[手写一个Promise ](https://github.com/LuckyWinty/fe-weekly-questions/issues/20)

[JS 高级之手写一个Promise,Generator,async和 await【近 1W字】](https://juejin.im/post/5df83b93f265da33f8652ccc)

[【2019 前端进阶之路】站住，你这个Promise！](https://zhuanlan.zhihu.com/p/52714698)

[ES6 入门教程 --Promise](http://es6.ruanyifeng.com/#docs/promise)--阮一峰

[JavaScript Promise迷你书（中文版）](http://liubin.org/promises-book/)
[](http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/)

https://zhuanlan.zhihu.com/p/30797777
https://zhuanlan.zhihu.com/p/25178630
https://zhuanlan.zhihu.com/p/25198178
https://zhuanlan.zhihu.com/p/25199781

[PromiseA+官方定义规范](https://promisesaplus.com/)
# Promise

## 概述
Promise是一个构造函数（或者类），接受一个函数作为参数，该函数接受resolve，reject两个参数。

Promise 对象代表一个异步操作，有三种状态：

* pending（进行中）  
* fulfilled（已成功）  
* rejected（已失败）  

只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。  

Promise 对象的状态改变，只有两种可能：
* 从Pending变为Resolved  
* 从Pending变为Rejected  

只要这两种情况发生，状态就凝固了，不会再变了，就称为 （已定型）。

调用resolve或reject并不会终结 Promise 的参数函数的执行，其后面的代码也会执行，且先率先执行。  
一般来说，调用resolve或reject以后，Promise 的使命就完成了，因此可return resolve()
```js
console.log(1);

new Promise((resolve, reject) => {
    console.log(2);
    resolve(3);
    console.log(4);
}).then(console.log, console.error);

console.log(5);
// 输出
1
2
4
5
3
```


缺点：
* 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
* 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
* 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## 基本用法：  
```js
new Promise((resolve, reject) => {
  if (/## 异步操作成功 ##/){
    resolve('success');
    console.log(2)
  } else {
    reject('error');
  }
})
```
调用resolve()以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务

## Promise.resolve()
将现有对象转为 Promise 对象，
返回一个 fulfilled 状态的 promise

```js
Promise.resolve('success')
// 等价于  
new Promise((resolve, reject) => resolve('success'))
```

```js
Promise.resolve('success').then(
  res => {
    console.log(res)
  },
  err => {console.log(err)}
)
```

## Promise.reject()
将现有对象转为 Promise 对象，  
返回一个 rejected 状态的 promise

```js
Promise.reject('err');
// 等同于
new Promise((resolve, reject) => reject('err'))
```

```js
Promise.reject('err').then(
  res => {
    console.log(res)
  },
  err => {console.log(err)}
)
```

## Promise.prototype.then()  
then 方法返回新的Promise实例  
then 方法的第一个参数是 resolved 状态的回调函数，第二个参数（可选）是 rejected 状态的回调函数。
```js
new Promise((resolve, reject) => {
  if(Math.random()>=0.5){
    resolve('成功')
  }else{
    reject('失败')
  }
}).then((data) => {
  console.log(data) //成功
}, (error) => {
  console.log(error) //失败
})
```

then 方法接受的参数是函数，而如果传递的并非是一个函数,就会导致前一个 Promise 的结果穿透到下面
```js
Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)

// 1
```

## Promise.prototype.catch()  

catch方法 是.then(null, rejection) 或 .then(undefined, rejection)别名 用于指定发生错误时的回调函数

catch方法返回Promise 对象，因此后面还可以接着调用 then 方法。

如果异步操作抛出错误，状态就会变为 rejected，就会调用 catch 方法指定的回调函数，处理这个错误。 then 方法指定的回调函数，如果运行中抛出错误，也会被 catch 方法捕获。 catch 方法的写法更接近同步的写法（try/catch）。  
因此，建议总是使用 catch 方法，而不使用 then 方法的第二个参数。

```js
new Promise((resolve, reject) => {
  //
}).
then((data) => {
  
}).
catch((err) => {

})

等价于

new Promise((resolve, reject) => {
  //
}).
then((data) => {

},(err) => {
  
})
```

如果没有使用 catch 方法或者 then 第二个参数指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应

如果 Promise 状态已经变成resolved，再抛出错误是无效的。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。如下：
```js
new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
})
.then(function(value) { console.log(value) })
.catch(function(error) { console.log(error) });

//输出: ok
```

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

因此，`建议总是使用catch方法（且写在最后）`，而不使用then方法的第二个参数。
```js
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log(x);
})

```
上面的代码因为没有报错，跳过了catch方法，直接执行后面的then方法。此时，要是then方法里面报错，就与前面的catch无关  
因此用catch方法时写在最后

## Promise.prototype.finally()  

finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。  
不接收任何参数

```js
new Promise((resolve, reject) => {})
.then(res => {})
.catch(err => {})
.finally(() => {})
```

## Promise.all()

将多个Promise实例，包装成一个新的Promise实例  

```const p = Promise.all([p1, p2...])```

Promise.all 方法接受一个数组作为参数，如p1、p2 都是 Promise 实例，如果不是，就会先调用 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

p的状态由p1、p2决定，分成两种情况:
>

    只有 p1、p2 的状态都变成 fulfilled，p 的状态才会变成 fulfilled，此时 p1、p2 的返回值组成一个数组，传递给 p 的回调函数。

    只要 p1、p2 之中有一个被 rejected，p 的状态就变成 rejected，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数。


```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
        resolve('P1');
    } else {
        reject('error');
    }
  }, 500);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, 'P2');
});

let p = Promise.all([p1, p2]).
  then((results) => {
    console.log(results); // 输出：['P1', 'P2']
  }).
  catch((error) => {
      console.log(error); // 如果p1执行失败，则输出：error
  });
```

## Promise.race()

Promise.race()类似于all方法同样是将多个Promise实例，包装成一个新的 Promise 实例。

不同的是 只要 p1、p2 之中有一个实例率先改变状态，p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数。

```let p = Promise.race([p1, p2]);```

## Promise.try()
让同步函数同步执行，异步函数异步执行

## Promise.allSettled() ES2020
接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果(返回数组)，不管是fulfilled还是rejected，包装实例才会结束。

```js
const p1 = Promise.resolve(42);
const p2 = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([p1, p2]);

allSettledPromise.then((results) => {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```

有时候，我们不关心异步操作的结果，只关心这些操作有没有结束。这时，Promise.allSettled()方法就很有用。如果没有这个方法，想要确保所有操作都结束，就很麻烦。Promise.all()方法无法做到这一点。

## Promise.any()
 Promise.any()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。该方法目前是一个第三阶段的提案 。

Promise.any()跟Promise.race()方法很像，只有一点不同，就是不会因为某个 Promise 变成rejected状态而结束。

## 配合async
async函数返回一个 Promise 对象
```js
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
```

## 异步加载图片
```js
const preloadImage = function (url) {
  console.log(url)
  return new Promise(function (resolve, reject) {
    let image = new Image();
    image.onload  = resolve(url)
    image.onerror = reject('err');
    image.src = url;
    // document.body.appendChild(image)
  });
};
```

# 手写Promise

# 

## Promise.all()是并发的还是串行的？
并发的。不过Promise.all().then()结果中数组的顺序和Promise.all()接收到的数组顺序一致。

## 
Promise.all()的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。

.race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。

Promise.all().then()结果中数组的顺序和Promise.all()接收到的数组顺序一致。

all和race传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被then的第二个参数或者后面的catch捕获；但并不会影响数组中其它的异步任务的执行。

## Promise为什么能链式调用
由于它的then方法和catch、finally方法会返回一个新的Promise所以可以允许我们链式调用