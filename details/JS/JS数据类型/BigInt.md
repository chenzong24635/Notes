[BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

[](https://juejin.im/post/5d3f8402f265da039e129574)

## 概述

ES10 引入 BigInt。

`BigInt 是一种内置对象`，它提供了一种方法来表示大于 2<sup>53</sup> - 1 的整数。
这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。


许多编程语言支持多种数字类型，如浮点型、双精度型、整数型和双精度型，但JS却不是这样。在JS中，按照 [IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754-2008_revision)标准的定义，所有数字都以[双精度64位浮点](http://en.wikipedia.org/wiki/Double_precision_floating-point_format)格式表示。

在此标准下，无法精确表示的非常大的整数将自动四舍五入。确切地说，JS 中的Number类型只能安全地表示-9007199254740991 (-(2^53-1)) 和9007199254740991(2^53-1)之间的整数，任何超出此范围的整数值都可能失去精度。


## 使用
创建 BigInt 类型,只需要在数字后面加上 n 或者 BigInt(value) 转化，value 为数字或数字字符串 。也可以用二进制、八进制或十六进制表示
```js
123n  // 123n
BigInt(123) // 123n
BigInt('123') // 123n
BigInt(false) // 0n
BigInt(true) // 1n

//无法转换的数据类型和值报错
BigInt(10.2); // RangeError 
BigInt('a'); // SyntaxError 
BigInt('1a'); // SyntaxError 

typeof 123n  // "bigint"
Number(111111111n) // 111111111
Number.parseInt(111111111n) // 111111111
Number.parseFloat(111111111n) // 111111111

123n == 123 // true  //通过隐式转换
123n === 123 // false //类型不同

8n/3n // 2n //带小数的运算会被取整
// 不允许在bigint和 Number 之间进行混合操作
8n/3 // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

1n<2 //true //Number 和 BigInt 可以进行比较。

Boolean(0n) // false  //BigInt 在需要转换成 Boolean 的时表现跟 Number 类似
Boolean(1n) // true 
```

除一元加号(+)运算符外(为了兼容[asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs))，所有算术运算符都可用于BigInt

因为隐式类型转换可能丢失信息，所以不允许在bigint和 Number 之间进行混合操作。当混合使用大整数和浮点数时，结果值可能无法由BigInt或Number精确表示
* 不能用于 Math 对象中的方法；
* *不能和任何 Number 实例混合运算，两者必须转换成同一种类型。// 10 + 10n => TypeError

在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。// Math.abs(-1n) => TypeError


## 方法 
* BigInt.asIntN(width, bigint) 将 BigInt 值转换为一个 -2<sup>width-1</sup> 与 2<sup>width-1</sup>-1 之间的有符号整数。

* BigInt.asUintN(width, bigint) 将一个 BigInt 值转换为 0 与 2<sup>width</sup>-1 之间的无符号整数。

>width可存储整数的位数。
>bigint要存储在指定位数上的整数。