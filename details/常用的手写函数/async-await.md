[手写async await的最简实现（20行）](https://juejin.im/post/6844904102053281806)

[babel编译async await](https://www.babeljs.cn/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAZgUysAFgNQIYBsCuCYC8MGEAnmMPDhVAJbgwAUAlDAN4BQM3MAbhgCcYAhBELEA7hlqwACgJABbWhAQA6ERBBZeCRgEZmAbi49QkbeqwgA5o364EAZmYcAvkaA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2017%2Cstage-2&prettier=false&targets=&version=7.11.5&externalPlugins=)
```js
let p = async function () {
  var value1 = await Promise.resolve(1);
  var value2 = await Promise.resolve(2);
  console.log(value2)
};
```
babel会编译成
```js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);
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


```js
function asyncToGenerator(generatorFunc) {
  return function(...args) {
    const gen = generatorFunc.apply(this, args)
    console.log(args);
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        const { value, done } = generatorResult
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step("next")
    })
  }
}
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

var gen = asyncToGenerator(testG)
gen(1,2).then(data => {
  console.log(data);
})


// (async function() {
//   let res1 = await promise(10);
//   console.log(res1);
//   let res2 = await promise(20);
//   console.log(res2);
// })()
```