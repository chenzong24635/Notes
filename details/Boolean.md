[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

Boolean(value): true | false

如果第一个参数不是布尔值，则会将其转换为布尔值。

`如果省略该参数，或者值为 0（+0，-0）、null、false、NaN、undefined、空字符串（""） 为 false`

`这意味着字符串 "false" 、字符串"0" 、空对象 {} 和空数组 [] 都是真`

_____

注意不要将基本类型中的布尔值 true 和 false 与值为 true 和 false 的 Boolean 对象弄混了。  
任何不是 undefined 和 null 的对象，包括值为 false 的 Boolean 对象，直接用于条件语句时都会被当做 true 来对待。例如，下面 if 语句中的条件为真:

Boolean(new Boolean(false)) // true
