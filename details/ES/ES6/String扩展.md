#


# 新增方法



## String.fromCodePoint()

解决 String.fromCharCode() 不能识别大于0xFFFF的Unicode码点

## String.codePointAt()

解决 str.charAt() 不能识别大于0xFFFF的Unicode码点
```js
var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
```

## includes()、startsWith()、endsWith()
确定一个字符串是否包含在另一个字符串中 （ES5 只有个 indexOf方法）

* str.includes(searchString[, index])：返回布尔值，表示是否找到了参数字符串。
* str.startsWith(searchString[, index])：返回布尔值，表示参数字符串是否在原字符串的头部。
* str.endsWith(searchString[, index])：返回布尔值，表示参数字符串是否在原字符串的尾部。
>searchString:要搜索的子字符串。  
>index:可选。搜索开始位置。默认 0


```js
let s = 'Hello world!';

s.includes('Hello') // true
s.includes('Hello', 7) // false
```

## repeat() 
重复字符串

str.repeat(n)  
>n:[0, +∞) 的整数。重复字符串次数。  
  n是小数，向下取整；
  n是负数或者Infinity，会报错。-0、NaN等同0
  n是字符串转为数字，
```js
"abc".repeat(NaN)     // ""
"abc".repeat(-0)     // ""
"abc".repeat(0)     // ""
"abc".repeat(1)     // "abc"
"abc".repeat(2)     // "abcabc"
"abc".repeat(2.6)     // "abcabc"
"abc".repeat('2.6') // "abcabc"
"abc".repeat('2.6a')// ""

"abc".repeat(-1)//Uncaught RangeError: Invalid count value
"abc".repeat(Infinity)//Uncaught RangeError: Invalid count value
```

## padStart

## String.raw
该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。

```js
`Hi\n${2+3}!`
// 返回 （"Hi\\n5!"）
"Hi
5!"

String.raw`Hi\n${2+3}!`

// 返回 
"Hi\n5!"
```

## str.normalize()

用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。


Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）。

这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。
```js
'\u01D1'==='\u004F\u030C' //false

'\u01D1'.length // 1
'\u004F\u030C'.length // 2
```

```js
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true
```