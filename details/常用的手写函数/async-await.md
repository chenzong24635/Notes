[手写async await的最简实现（20行）](https://juejin.im/post/6844904102053281806)

[babel编译async await](https://www.babeljs.cn/repl)
```js
let p = async function () {
  var value1 = await Promise.resolve(1);
  var value2 = await Promise.resolve(2);
  console.log(value2)
};
```
babel会编译成
```js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg); // 具有 value 和 done 属性的对象
    var value = info.value;
  } catch (error) { // 抛出错误,reject
    reject(error);
    return;
  }
  if (info.done) { // 如果done为tue，则resolve结束
    resolve(value); 
  } else { // 否则封装一个新的promise，继续执行
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args); // 返回一个Generator 对象
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

const p = /*#__PURE__*/ (function () {
  var _ref = _asyncToGenerator(function* () {
    var value1 = yield Promise.resolve(1);
    var value2 = yield Promise.resolve(2);
    console.log(value2);
  });

  return function p() {
    return _ref.apply(this, arguments);
  };
})();
```



测试
```js
function promise(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
}

function* testG() {
  const data1 = yield promise(10)
  console.log('data1: ', data1);
  const data2 = yield promise(20)
  console.log('data2: ', data2);
  return 'success'
}

var gen = _asyncToGenerator(testG)
gen().then(data => {
  console.log(data);
})


// (async function() {
//   let res1 = await promise(10);
//   console.log(res1);
//   let res2 = await promise(20);
//   console.log(res2);
// })()
```