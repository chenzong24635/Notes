https://segmentfault.com/a/1190000007535316

https://lidaguang1989.github.io/2018/04/async-await/

[ECMAScript 6 入门-async](https://es6.ruanyifeng.com/#docs/async)--阮一峰


async 函数是什么？一句话，它就是 Generator 函数的语法糖。

async函数返回 Promise 对象，可以使用then方法添加回调函数。  
async函数内部return语句返回的值，会成为then方法回调函数的参数。  
当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
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

asyncPrint('hello world', 50);
```
上面代码指定 50 毫秒以后，输出hello world。

async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
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
