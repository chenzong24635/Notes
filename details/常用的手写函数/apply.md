
[参考](https://juejin.im/post/5d469e0851882544b85c32ef)

类似 call ，不同于：
* 只取第一个参数且只能为数组
* 性能差异（call比apply快很多）(apply 在运行前要对作为参数的数组进行一系列检验和深拷贝)
```js
Function.prototype.selfApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`)
  }
  // 判断参数是否 undefined
  let isUndef = typeof args === 'undefined'
  // 当未传参或为 undefined 时做处理，否则下面参数结构会报错
  isUndef ? (args = []) : args
  // 参数必须为数组
  if(!Array.isArray(args)) {
    throw new TypeError(`${JSON.stringify(args)} is not a Array`)
  }

  context = context || window
  let fun = Symbol()
  context[fun] = this
  let result = context[fun](...args)
  delete context[fun]
  return result
}
```
