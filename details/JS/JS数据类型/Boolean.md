[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

Boolean(val) 是一个布尔值的对象包装器
>如果val不是布尔值，则会将其转换为布尔值。

返回值为 false 情况： 
* 省略该参数
* 0、+0、-0
* null
* false
* NaN
* undefined
* ""（空字符串）

其他都为 true： 
`这意味着字符串 "false" 、字符串"0" 、字符串 " "、空对象 {} 和空数组 [] 都是 true`

_____

注意不要将基本类型中的布尔值 true 和 false 与值为 true（new Boolean(true)） 和 false（new Boolean(false)） 的 Boolean 对象弄混了。  

```js
let bool0 = false // false -- 基本类型
typeof bool0 // "boolean"

let bool1 = Boolean(0) // false -- 基本类型
typeof bool1 // "boolean"
bool0 === bool1 // true

let bool2 = new Boolean(0) // Boolean{ false } -- 对象类型
typeof bool2 // "object"
bool0 === bool2 // false
bool0 == bool2 // true
```

任何不是 undefined 和 null 的对象，包括值为 false 的 Boolean 对象，直接用于条件语句时都会被当做 true 来对待。例如，下面 if 语句中的条件为真:

Boolean(new Boolean(false)) // true


`转换为布尔值方法`
* Boolean(data)
* !!data