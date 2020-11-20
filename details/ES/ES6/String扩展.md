# String新增扩展

## String.fromCodePoint()
返回 Unicode 码点对应的字符;  
解决 String.fromCharCode() 不能识别大于0xFFFF的Unicode码点

```js
String.fromCharCode(0x20BB7)// "ஷ"
String.fromCodePoint(0x20BB7)// "𠮷"
```

## String.codePointAt()
返回字符对应的 Unicode 码点;返回的是码点的十进制值  
解决 str.charAt() 不能识别大于0xFFFF的Unicode码点
```js
var s = "𠮷"; // 𠮷 的码点是0x20BB7，UTF-16 编码为0xD842 0xDFB7（十进制为55362 57271），

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271

s.codePointAt(0) // 134071
// 通过toString 转换为 16 进制
s.codePointAt().toString(16) // 20bb7
```

## includes()、startsWith()、endsWith()
确定一个字符串是否包含在另一个字符串中 （ES5 只有个 indexOf方法），返回boolean 值

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
repeat(n) 重复n次字符串，返回的都是新字符串，不会修改原始字符串。

str.repeat(n)  
> n是[0, +∞) 的整数。重复字符串次数。  
  n是小数，向下取整；  
  n为0，+-0或为空时，即将字符串转为空字符串  
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


## trimStart()、trimEnd()
清除字符串头尾空格，返回的都是新字符串，不会修改原始字符串。

```js
let str = '   abc   '
str.trimStart() // 'abc   '
str.trimEnd() // '   abc'
str.trim() // 'abc'
```

## replaceAll() -- ES2021
replaceAll(searchValue, replacement) 替换所有匹配值，返回的都是新字符串，不会修改原始字符串。
>searchValue: 搜索的字符串或最正则表达式（必须带g修饰符）
>replacement：  
  * 是一个字符串，表示替换的文本，可以使用一些特殊字符串。
    * $&：匹配的子字符串。
    * $`：匹配结果前面的文本。
    * $'：匹配结果后面的文本。
    * $n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
    * \$\$：指代美元符号$。  
  * 也可以是一个函数,函数返回值替换匹配的文本。

解决 replace 只能替换第一个 匹配
```js
'aabbcc'.replace('b', '_')// 'aa_bcc'
'aabbcc'.replaceAll('b', '_')// 'aa__cc'
'aabbcc'.replaceAll(/b/g, '_')// 'aa__cc'
'aabbcc'.replaceAll('b', () => '_')// 'aa__cc'
```

## matchAll()
返回一个正则表达式在当前字符串的所有匹配

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

## normalize()

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