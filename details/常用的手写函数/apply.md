
[参考](https://juejin.im/post/5d469e0851882544b85c32ef)

类似 call ，不同于：
* 只取第一个参数且只能为数组
* 性能差异（call比apply快很多）(apply 在运行前要对作为参数的数组进行一系列检验和深拷贝)
```js
Function.prototype.selfApply = function (content, args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`)
  }

  // 参数必须为数组
  if(!Array.isArray(args)) {
    throw new TypeError(`${JSON.stringify(args)} is not a Array`)
  }

  content = content || window
  let fun = Symbol()
  content[fun] = this
  let result = content[fun](...args)
  delete content[fun]
  return result
}
```
