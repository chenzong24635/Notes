# Promise
[PromiseA+官方定义规范](https://promisesaplus.com/) -- [【翻译】Promises/A+规范](https://www.ituring.com.cn/article/66566)


[Promise的源码实现（完美符合Promise/A+规范）](https://github.com/YvetteLau/Blog/issues/2)


# [最简实现Promise，支持异步链式调用（20行）](https://juejin.im/post/6844904094079926286)
```js
function Promise(fn) {
  this.cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  }

  fn(resolve);
}

Promise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

```


# 手写Promise

```js
// Promise存在三个状态：pending（等待态）、fulfilled（成功态）、rejected（失败态）
const PENDING = 'pending'
const RESOLVED = 'fulfilled'
const REJECTED = 'rejected'


function isObjOrFn(obj) {
  return (obj !== null && typeof obj === 'object') || typeof obj === 'function'
}

function resolvePromise(promise2,x,resolve,reject){
  // 循环引用报错
  if(promise2 === x) return reject(new TypeError('Chaining cycle detected for promise'))

  // 防止多次调用
  let called;

  // x是对象或函数
  if(isObjOrFn(x)) {
    // 尝试获取then属性
    // 存在且为函数则默认 x 为 promise
    try {
      let then = x.then
      then.call(x, y => {
        // 成功和失败只能调用一个
        if (called) return;
        called = true;
        // resolve的结果依旧是promise 递归解析
        resolvePromise(promise2, y, resolve, reject);
        // resolve(y)
      }, r => {
        // 成功和失败只能调用一个
        if (called) return;
        called = true;
        reject(r)
      })
    } catch (error) {
      // 成功和失败只能调用一个
      if (called) return;
      called = true;
      reject(err)
    }
  } else { 
    // 否则直接返回结果
    resolve(x)
  }
}
class MyPromise { 
  constructor(executor) { 
    this.status = PENDING // 状态
    this.value = null // resolve值
    this.reason = null // reject值
    this.resolvedFns = [] // 成功回调函数 
    this.rejectedFns = [] // 失败回调函数
    // 使用箭头函数固定this指向,否则使用普通函数，调用时，this指向window
    const resolved = (value) => {
      // 状态一旦固定，无法改变
      if(this.status === PENDING) {
        this.status = RESOLVED // 变更状态
        this.value = value
        this.resolvedFns.forEach(fn=>fn()) // 执行回调函数
        this.resolvedFns.length = 0
      } 
    }
    const rejected = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED // 变更状态
        this.reason = reason
        this.rejectedFns.forEach(fn=>fn())
        this.rejectedFns.length = 0
      }
    }


    // executor不是函数抛出错误
    if(typeof executor !=='function'){
      throw TypeError('Promise resolver undefined is not a function')
    }

    // new Promise时，需要传递一个 executor 执行器，并立刻执行
    // 执行出错时抛出
    try {
      executor(resolved, rejected)
    } catch (error) {
      rejected(error)
    }
  }
  then(onFulfilled, onRejected) {
    // onFulfilled, onRejected不是function时转换为function，
    // 让链式调用继续往下执行,实现then的结果穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : err => { 
      throw err
    }
    let _this = this
    let promise2 = new MyPromise((resolve, reject) => {
      switch(this.status) {
        // 等待状态
        case PENDING: 
          // push到执行队列,等待执行，异步形式调用
          _this.resolvedFns.push(()=>{
            setTimeout(()=>{
              try{
              let x = onFulfilled(_this.value)
                resolvePromise(promise2, x, resolve, reject)
              }catch(e) {
                reject(e)
              }
            },0)
          })
          _this.rejectedFns.push(()=>{
            setTimeout(()=>{
              try{
              let x = onRejected(_this.reason)
              resolvePromise(promise2, x, resolve, reject)
              }catch(e) {
                reject(e)
              }
            },0)
          })
          break;
        // 成功状态  
        case RESOLVED: 
          // 异步调用成功回调函数
          setTimeout(()=>{
            try{
              let x = onFulfilled(_this.value)
              resolvePromise(promise2, x, resolve, reject)
            }catch(e) {
              reject(e)
            }
          },0)
          break;
        case REJECTED: 
          setTimeout(()=>{
            try{
              let x = onRejected(_this.reason)
            resolvePromise(promise2, x, resolve, reject)
            }catch(e) {
              reject(e)
            }
          },0)
          break;
      }
    })
    return promise2
  }
  catch(fn){
    return this.then(null,fn);
  }
  finally(fn) {
    return this.then(
      value  => MyPromise.resolve(fn()).then(() => value),
      reason => MyPromise.resolve(fn()).then(() => { throw reason })
    );
  };
  static resolve(val){
    return new this((resolve,reject)=>{
      resolve(val)
    });
  }
  static reject(err){
    return new this((resolve, reject) => {
      reject(err)
    })
  }
  static race(promises){
    return new this((resolve,reject)=>{
      for(let i = 0;i < promises.length; i++){
        promises[i].then(resolve,reject)
      };
    })
  }
  static all(promises){
    let arr = []; // 存储结果
    let index = 0; // 记录processData执行次数
    function processData(i,data,resolve,reject){
      arr[i] = data;
      // 等于promises实例个数时，返回结果
      if(++index === promises.length){
        return resolve(arr);
      };
    };
    return new this((resolve,reject)=>{
      // 遍历promises数组，调用每个promise，
      for(let i=0;i<promises.length;i++){
        let val = promises[i]
        // 是promise
        if(isObjOrFn(val)) {
          val && val.then(data=>{
            processData(i,data,resolve,reject);
          },reject);
        }else{
          // 普通值
          processData(i,val,resolve,reject);
        }
      };
    });
  }
}
```

# 测试
在promise实现的代码中，增加以下代码:
```js
Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
```

安装 npm install -g promises-aplus-tests

执行 promises-aplus-tests promise.js

# 在node里实现异步方法链式调用 promisify
```js
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve,reject)=>{
      fn(...args,function(err,data){
        if(err)reject(errr)
        resolve(data)
      })
    })
  }
}
```