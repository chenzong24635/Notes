
[Number - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

<details open>
  <summary>
    目录
  </summary>

* <a href="#概述">概述</a>
* <a href="#数值的表示">数值的表示</a>
* <a href="#属性">属性</a>
  * <a href="#Number.EPSILON">Number.EPSILON  能够表示的最小精度</a>
  * <a href="#Number.MAX_VALUE、Number.MIN_VALUE">>Number.MAX_VALUE、Number.MIN_VALUE  能够表示的最大、小值</a>
  * <a href="#Number.MAX_SAFE_INTEGER、Number.MIN_SAFE_INTEGER">>Number.MAX_SAFE_INTEGER、Number.MIN_SAFE_INTEGER  最大、小的安全整数</a>
  * <a href="#Number.NaN">Number.NaN 非数字</a>

  * <a href="#Number.POSITIVE_INFINITY、Number.NEGATIVE_INFINITY">Number.POSITIVE_INFINITY、Number.NEGATIVE_INFINITY 正、负无穷大</a>
* <a href="#方法">方法</a>
  * <a href="#valueOf()">valueOf()</a>
  * <a href="#toString()">toString()</a>
  * <a href="#Number()、Number.parseInt()、Number.parseFloat()">Number()、Number.parseInt()、Number.parseFloat()</a>
  * <a href="#toFixed()">num.toFixed(digits)格式化数值，小数点后数字的个数,返回字符串</a>
  * <a href="#toPrecision()">num.toPrecision(digits)指定数值的精度,返回字符串</a>
  * <a href="#toExponential()">num.toExponential(digits)转为指数形式,返回字符串</a>
  * <a href="#Number.isFinite()">Number.isFinite()是否为正常的数值</a>
  * <a href="#Number.isNaN()">Number.isNaN()判断是否为NaN</a>
  * <a href="#Number.isInteger()、Number.isSafeInteger()">Number.isInteger()、Number.isSafeInteger() 判断是否为整数、安全整数。</a>
  * <a href="#"></a>

</details>

#  <a name="概述">概述</a>
JS中的所有数字都是以64位浮点数形式储存，即使整数也是如此;`1 === 1.0 // true`

根据双精度浮点数的定义，Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。

同样根据浮点数的定义，非整数的 Number 类型无法用 ==（=== 也不行） 来比较；   
如，`0.1+0.2 !=0.3`： 解决: `Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON`(Number.EPSILON:JS能够表示的最小精度)


#  <a name="数值的表示">数值的表示</a>
* 十进制 ：最基本的数值字面量,没有前导的数值

* 二进制：开头（0 或 0b 或 0B）表示，然后是范围（0-1）的值，若超出范围，当做十进制(开头为0) 或报错(开头为0b,0B)

* 八进制：开头（0 或 0o 或 0O）表示，然后是范围（0-7）的值，若超出范围，当做十进制(开头为0) 或报错(开头为0o,0O)

* 十六进制: 开头（0x 或 0X）表示, 然后是范围（0-9,A-F|a-f）的值,若超出范围报错

```js
1 //整数
0.1 //浮点数
.1 //浮点数,不推荐
2.1e2 //210 科学计数法
2.1E2 //210 科学计数法
2.1E-2 //0.021 科学计数法
NaN //非数值
070 //八进制的56 

+0 === -0 //true
```

几乎所有场合,正零和负零都会被当作正常的0  
唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。
```js
(1 / +0) === (1 / -0) // false
// Infinity    -Infinity
```

#  <a name="属性">属性</a>

##  <a name="Number.EPSILON">Number.EPSILON  能够表示的最小精度</a>
表示 1 与Number可表示的大于 1 的最小的浮点数之间的差值。

Number.EPSILON === Math.pow(2, -52) //true   
值接近于2.2204460492503130808472633361816E-16

##  <a name="Number.MAX_VALUE、Number.MIN_VALUE">Number.MAX_VALUE、Number.MIN_VALUE  能表示的最大、小值</a>

Number.MIN_VALUE === 5e-324  //true  
Number.MAX_VALUE === 1.7976931348623157e+308  //true

##  <a name=">Number.MAX_SAFE_INTEGER、Number.MIN_SAFE_INTEGER">Number.MAX_SAFE_INTEGER、Number.MIN_SAFE_INTEGER  最大、小的安全整数</a>

Number.MAX_SAFE_INTEGER  === Math.pow(2,53) - 1 //true  
Number.MIN_SAFE_INTEGER  === Math.pow(2,-53) - 1 //true

Number.isSafeInteger()判断是否为安全整数

##  <a name="Number.NaN">Number.NaN 非数字</a>

主要出现在将字符串解析成数字出错的场合。  
无穷大除以无穷大  
>
    5 - 'x' // NaN
    0 / 0 // NaN
    Infinity / Infinity; // NaN

NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number
>
    typeof NaN // 'number'

NaN不等于任何值，包括它本身。
>
    NaN === NaN // false

Number.isNaN判断是否NaN
>
    Number.isNaN(NaN) // true


Boolean(NaN) // false

Number.isNaN()判断是否为NaN

##  <a name="Number.POSITIVE_INFINITY、Number.NEGATIVE_INFINITY">Number.POSITIVE_INFINITY、Number.NEGATIVE_INFINITY 正、负无穷大</a>
[参考](https://wangdoc.com/javascript/types/number.html#infinity)

Number.POSITIVE_INFINITY === Infinity //true  
Number.NEGATIVE_INFINITY === -Infinity //true

非0数值除以0值为Infinity；如1/0 //Infinity ( 0 / 0 为 NaN)  
加- 即 -Infinity

Infinity大于一切数值（除了NaN），-Infinity小于一切数值（除了NaN）。

>
    0 * Infinity // NaN
    0 / Infinity // 0
    Infinity / 0 // Infinity
    Infinity - Infinity // NaN
    Infinity / Infinity // NaN

#  <a name=方法"">方法</a>

##  <a name="valueOf()">valueOf()</a>
返回该数值对象的原始值。覆盖了 Object.prototype.valueOf() 方法。

##  <a name="toString()">toString()</a>
返回一个表示该数值对象的字符串。覆盖了 Object.prototype.toString() 方法。

##  <a name="">Number()、Number.parseInt()、Number.parseFloat()</a>

>
    // ES5的写法
    parseInt('12.34') // 12
    parseFloat('123.45#') // 123.45

    // ES6的写法
    Number.parseInt('12.34') // 12
    Number.parseFloat('123.45#') // 123.45

#### Number()将字符串转为數值,返回一个number类型的数值 或 NaN
Boolean值，true、false转换为1、0   
数值，不变（+0会转为0）  
undefined,{}转为NaN  
空数组转为0
字符串： 
>
    字符串内只有数字转为十进制数值或浮点数（会忽略前导0：'011'转为11）
    字符包含有效的进制格式（0b,0o,0x..）,转为相应的进制数值
    ''（空字符转）为 0
    其他NaN

  
`false,null,0,[],''转为 0`


>
    Number(+0) // 0
    Number(-0) // -0
    Number('') // 0
    Number([]) // 0
    Number('.3') // 0.3
    Number('131.3') // 131.3
    Number('131.3a') // NaN
    Number({}) // NaN

#### Number.parseInt() 将字符串转为整数,返回一个十进制整数 或 NaN

Number.parseInt(string[, radix])  
string: 字符 ，如果第一个参数不是字符串，会被先转为字符串   
radix： 基数(2-36)，即字符串以多少进制的数字表示,默认10

radix 这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略,默认十进制。
>
    parseInt('10', 37) // NaN
    parseInt('10', 1) // NaN
    parseInt('10', 0) // 10
    parseInt('10', null) // 10
    parseInt('10', undefined) // 10


字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。    

>
    parseInt('8a') // 8
    parseInt('12**') // 12
    parseInt('12.34') // 12
    parseInt('15e2') // 15
    parseInt('15px') // 15

如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。
>
    parseInt('abc') // NaN
    parseInt('.3') // NaN
    parseInt('') // NaN
    parseInt('+') // NaN
    parseInt('+1') // 1

会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。
>
    parseInt(0.0000008) // 8
    // 等同于
    parseInt('8e-7') // 8

#### Number.parseFloat()将一个字符串转为浮点数,返回浮点数 或 NaN
Number.parseFloat(string)

如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。
>
    parseFloat('3.14more non-digit characters') // 3.14

如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN。
>
    parseFloat([]) // NaN
    parseFloat('FF2') // NaN
    parseFloat('') // NaN

##  <a name="toFixed()">num.toFixed(digits)格式化数值，小数点后数字的个数,返回字符串</a>
digits
>小数点后数字的个数；介于 [0,20]，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。如果数值的位数不够用0填充，在必要时进行四舍五入 
>>如果数值大于 1e+21，该方法会简单调用 Number.prototype.toString()并返回一个指数记数法格式的字符串。  
>>如果 digits 太小或太大将会抛出该错误。

在一个非Number类型的对象上调用报错

>
    77.1.toFixed() // "77"
    77.1.toFixed(0) // "77"
    77.1.toFixed(1) // "77.1"
    77.1.toFixed(2) // "77.10"
    77.1234.toFixed(2) // '77.12'
    1e2.toFixed(2) // '100.00'

##  <a name="toPrecision()">num.toPrecision(digits)指定数值的精度,返回字符串</a>
digits
>可选。一个用来指定有效数个数的整数。
>>如果 digits 参数不在 1 和 100 （包括）之间，将会抛出该错误。执行环境也可以支持更大或更小的范围。ECMA-262 只需要最多 21 位显示数字。
>>如果忽略 digits 参数，则该方法表现类似于 Number.prototype.toString()。如果该参数是一个非整数值，将会向下舍入到最接近的整数。

在一个非Number类型的对象上调用报错

>
    num = 77.1234;
    num.toPrecision();  // "77.1234"
    num.toPrecision(4); // "77.12"
    num.toPrecision(2); // "77"
    num.toPrecision(1); // "8e+1"

##  <a name="toExponential()">num.toExponential(digits)转为指数形式,返回字符串</a>
digits  
>可选。一个整数，用来指定小数点后有几位数字。默认情况下用尽可能多的位数来显示数字。
>>如果 digits 太小或太大将会抛出该错误。介于 0 和 20（包括20）之间最安全

>
    num = 77.1234;
    num.toExponential(); // 7.71234e+1
    num.toExponential(4); // 7.7123e+1

##  <a name="Number.isFinite()">Number.isFinite()是否为正常的数值</a>
除了Infinity、-Infinity、NaN和undefined,字符串这几个值会返回false，其他的数值都会返回true。
>
    Number.isFinite(3) // true
    Number.isFinite() // false
    Number.isFinite(Infinity) // false
    Number.isFinite(null) // false

##  <a name="Number.isInteger()、Number.isSafeInteger()">Number.isInteger()、Number.isSafeInteger()是否为整数、安全整数</a>
* Number.isInteger()  

如果被检测的值是整数(包括0，-0，+0），则返回 true，否则返回 false。注意 NaN 和正负 Infinity 不是整数。

整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
>
    Number.isInteger(25) // true
    Number.isInteger(25.0) // true

如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0。这时，Number.isInteger也会误判。
>
    Number.isInteger(5E-324) // false
    Number.isInteger(5E-325) // true
    由于5E-325值太小，会被自动转为0，因此返回true。

总之，如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数。


* Number.isSafeInteger()判断传入的参数值是否是一个“安全整数”

安全整数范围为 -(253 - 1)到 253 - 1 之间的整数，包含 -(253 - 1)和 253 - 1。

##  <a name="Number.isNaN()">Number.isNaN()判断是否为NaN</a>

只对数值有效，如果传入其他值，会被先转成数值。  
比如，传入字符串的时候，字符串会被先转成NaN，所以最后返回true，这一点要特别引起注意。也就是说，isNaN为true的值，有可能不是NaN，而是一个字符串。


使用isNaN之前，最好判断一下数据类型。
>
    typeof value === 'number' && Number.isNaN(value);

判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。
>
    function myIsNaN(value) {
      return value !== value;
    }


##  <a name=""></a>