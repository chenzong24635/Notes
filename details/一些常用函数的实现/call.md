
```js
Function.prototype.selfCall = function (content, ...args) {
  // this 指向调用对象，其必须是个函数
  if (typeof this !== "function") {
    throw new TypeError("not a function")
  }

  // 构造被调用对象，兼容默认值 
  // 下方的 obj 对象
  content = content || window
  // 获取唯一属性名
  let fun = Symbol()
  // 增加属性方法，指向待调用函数 (下方的 toStr 函数)
  content[fun] = this
  /* 
  此时 content 为：
  {
    name: "tom "
    Symbol(): ƒ toStr(...str)
  }
  */

  let result = content[fun](...args)
  // 执行完毕后，删除该属性, 避免改变对象（下方的obj）属性
  delete content[fun]
  return result
}
```

```js
function toStr(...str){
  return this.name + str
}

let obj = {name: 'tom '}
console.log(toStr.selfCall(obj, [1,2],3));
```