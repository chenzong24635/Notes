
# Number扩展

## 二进制和八进制表示发

ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。

```js
Number(0b11) // 3
0b11 === 3 // true

Number(0o71) // 57
0o71 === 57 // true
```

## Number.isFinite()

Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity，返回 boolean 值（对于非数值一律返回false）
```js
Number.isFinite(0); // true
Number.isFinite(15); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('a'); // false
Number.isFinite('15'); // false

// 原先 window.isFinite(),会先调用Number()将非数值的值转为数值，再进行判断
isFinite('15') // true
```

## Number.isNaN()
Number.isNaN()用来检查一个值是否为 NaN ，只有对于NaN才返回true，非NaN一律返回false。

```js
Number.isNaN(1) // false
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false

// 原先 window.isNaN(),会先调用Number()将非数值的值转为数值，再进行判断
isNaN(NaN) // true
isNaN("NaN") // true
```

## Number.parseInt()、Number.parseFloat()
ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。