[String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

* <a href="#概述">概述</a>
* <a href="#方法">方法</a>
  * <a href="#String.fromCharCode()、String.fromCodePoint()">~~String.fromCharCode()~~、String.fromCodePoint()</a>
  * <a href="#charCodeAt()、str.codePointAt()">~~str.charCodeAt()~~、str.codePointAt()</a>
  * <a href="#str.indexOf()、str.lastIndexOf()">str.indexOf()、str.lastIndexOf() 查找字符对应的索引</a>
  * <a href="#str.charAt()">str.charAt(index)查找索引对应的字符</a>
  * <a href="#"></a>
  * <a href="#"></a>

# <a name="概述">概述</a>
生成字符串： 
'string'  
String(thing)  
new String(thing)

String 有最大长度是 2^53 - 1

* 属性：prototype、length

# <a name="方法">方法</a>
## <a name="">toString()</a>
## <a name="">valueOf()</a>

## <a name="String.fromCharCode()、String.fromCodePoint()">~~String.fromCharCode()~~、String.fromCodePoint()</a>


* String.fromCharCode((num1, ..., numN)) 方法返回由指定的UTF-16代码单元序列创建的字符串
>num1, ..., numN:一系列UTF-16代码单元的数字。 范围介于0到65535（0xFFFF）之间。 `大于0xFFFF的数字将被截断, 不进行有效性检查。`

String.fromCharCode(0x20BB7)// "ஷ"

* String.fromCodePoint((num1, ..., numN))， fromCharCode的升级版，可以识别大于0xFFFF的字符

String.fromCodePoint(0x20BB7)// "𠮷"


## <a name="charCodeAt()、str.codePointAt()">~~str.charCodeAt()~~、str.codePointAt()</a>
* str.charCodeAt(index) 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元
* str.codePointAt(index)  方法返回 一个 Unicode 编码点值的非负整数。
  >index:一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。索引超出范围，则返回 NaN

>
    '总'.charCodeAt() //24635  
    '陈总'.charCodeAt(1) // 24635 

对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。
>
    var s = "𠮷"; //码点是0x20BB7

    s.length // 2
    s.charAt(0) // ''
    s.charAt(1) // ''

    s.charCodeAt(0) // 55362
    s.charCodeAt(1) // 57271

    s.codePointAt(0) // 134071
    s.codePointAt(1) // 57271
    
## <a name="str.indexOf()、str.lastIndexOf()">str.indexOf()、str.lastIndexOf() 查找字符对应的索引</a>
str.indexOf()：第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。   
str.lastIndexOf()：最后一次出现的指定值的索引

str.indexOf(val,fromIndex)、str.lastIndexOf()
>searchValue:被查找的字符。如果没有提供，设置为 "undefined"   

>fromIndex 可选：开始查找的位置(任意整数)，默认值为 0。如果 fromIndex 小于 0，则查找整个字符串（等价于传入了 0）。如果 fromIndex 大于等于 str.length，则必返回 -1。

>
"Blue Whale".indexOf("blue") // 返回 -1
"Blue Whale".indexOf("Blue");     // 返回  0
"Blue Whale".indexOf("Whale", 5); // 返回  5
"Blue Whale".indexOf("Whale", 15); // 返回  -1

## <a name="charAt()">str.charAt(index)查找索引对应的字符</a>
从一个字符串中返回指定的字符。

str.charAt(index)
>index：[0,str.length-1]的整数，默认0

'abc'.charAt(1) // 'b'



## <a name="concat()">concat()字符串拼接</a>
str.concat(string2, string3[, ..., stringN])  
将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
>
    a='a'
    b=a.concat('b','c') //"abc"

## <a name="includes()">includes()判断是否存在某字符</a>
判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

str.includes(searchString[, index])
>searchString:要搜索的子字符串。

>index:可选。搜索开始位置。默认 0 

>
    var str = 'To be, or not to be, that is the question.';

    str.includes('To be')   // true
    str.includes('TO BE')     // false
    str.includes('To be', 1)  // false

## <a name="str.startWith()、str.endWith()">str.startWith()、str.endWith()判断是否以某字符开头、结尾</a>
判断当前字符串是否是以另外一个给定的子字符串“开头”、“结尾”的，根据判断结果返回 true 或 false。

str.startsWith(searchString[, index])、
str.endsWith(searchString[, index])
>searchString:要搜索的子字符串。

>index:可选。搜索开始位置。默认 0 、str.length。

>
    var str = "To be, or not to be, that is the question.";

    str.startsWith("To be")       // true
    str.startsWith("not to be")   // false
    str.startsWith("not to be", 10) // true

    str.endsWith("question.")  // true
    str.endsWith("to be")     // false
    str.endsWith("to be", 19)  // true

