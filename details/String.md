[String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

* <a href="#概述">概述</a>
* <a href="#方法">方法</a>
  * <a href="#String.fromCharCode()、String.fromCodePoint()">~~String.fromCharCode()~~、String.fromCodePoint()</a>
  * <a href="#charCodeAt()、codePointAt()">~~str.charCodeAt()~~、str.codePointAt()</a>
  * <a href="#indexOf()、lastIndexOf()">str.indexOf()、str.lastIndexOf() 查找字符对应的索引</a>
  * <a href="#charAt()">str.charAt(index)查找索引对应的字符</a>
  * <a href="#slice()、substring()">slice()、substring()字符串截取</a>
  * <a href="#split()">split()字符串分割为数组</a>
  * <a href="#concat()">concat()字符串拼接</a>
  * <a href="#includes()">includes()判断是否存在某字符</a>
  * <a href="#startWith()、endWith()">startWith()、endWith()判断是否以某字符开头、结尾</a>
  * <a href="#padStart()、padEnd()">padStart()、padEnd() 填充字符串头部、尾部</a>
  * <a href="#repeat()">repeat()重复字符串</a>
  * <a href="#search()">search()检索字符串</a>
  * <a href="#match()、matchAll()">match()、matchAll()检索字符串</a>
  * <a href="#replace()">replace()替代字符串</a>
  * <a href="#toLowerCase()、toUpperCase()、toLocaleLowerCase()、toLocaleUpperCase()">toLowerCase()、toUpperCase()、toLocaleLowerCase()、toLocaleUpperCase()字符串转大小写</a>
  * <a href="#trim()、trimLeft()、trimRight()">trim()、trimLeft()、trimRight()取出空白符</a>
  * <a href="#localeCompare()">localeCompare()指示参考字符串是否在排序顺序前面或之后或相同。</a>
  * <a href="#normalize()">normalize()</a>
  * <a href="#row()">String.row()</a>
  * <a href="#"></a>

# <a name="概述">概述</a>
生成字符串： 
'string'  
String(thing)  
new String(thing)

String 有最大长度是 2^53 - 1

* 属性：prototype、length

# <a name="方法">方法</a>
## <a name="">toString() String()</a>

null,undefined没有toString()方法，有String()方法
toString()可以转进制字符串，String()不行
>
    二进制：.toString(2);
    八进制：.toString(8);
    十进制：.toString(10);
    十六进制：.toString(16);
>
    String(null)                 // 'null'
    String(undefined)            // 'undefined'
    String(true)                 // 'true'
    String(1)                    // '1'
    String(-1)                   // '-1'
    String(0)                    // '0'
    String(-0)                   // '0'
    String(Math.pow(1000,10))    // '1e+30'
    String(Infinity)             // 'Infinity'
    String(-Infinity)            // '-Infinity'
    String({})                   // '[object Object]'
    String([1,[2,3]])            // '1,2,3'
    String(['koala',1])          //koala,1

## <a name="">valueOf()</a>

## <a name="String.fromCharCode()、String.fromCodePoint()">~~String.fromCharCode()~~、String.fromCodePoint()</a>


* String.fromCharCode((num1, ..., numN)) 方法返回由指定的UTF-16代码单元序列创建的字符串
>num1, ..., numN:一系列UTF-16代码单元的数字。 范围介于0到65535（0xFFFF）之间。 `大于0xFFFF的数字将被截断, 不进行有效性检查。`

String.fromCharCode(0x20BB7)// "ஷ"

* String.fromCodePoint((num1, ..., numN))， fromCharCode的升级版，可以识别大于0xFFFF的字符

String.fromCodePoint(0x20BB7)// "𠮷"


## <a name="charCodeAt()、codePointAt()">~~str.charCodeAt()~~、str.codePointAt()</a>
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
    
## <a name="indexOf()、lastIndexOf()">str.indexOf()、str.lastIndexOf() 查找字符对应的索引</a>
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



## <a name="slice()、substring()">slice()、substring()字符串截取</a>
截取并返回字符串的一部分，且不会改动原字符串。

str.slice(beginIndex[, endIndex])  
str.substring(beginIndex[, endIndex])   
beginIndex  
>从该索引（以 0 为基数）处开始提取原字符串中的字符。默认0。

endIndex(不包含)    
>可选。在该索引（以 0 为基数）处结束提取字符串。默认this.length。大于this.length当作this.length

> startIndex 等于 beginIndex返回一个空字符串  
> startIndex、beginIndex若为字符串会转为数字，浮点数转为整数（向下取整）

slice
>
    如果值为负数，当做 this.length + beginIndex 
    如果该参数为负数，则被看作是 this.length  + endIndex，

substring
>
    如果任一参数小于 0 或为 NaN，则被当作 0。
    如果 indexStart 大于 indexEnd，调换两个参数。

>
    'abcd'.slice() // "abcd"
    'abcd'.substring() // "abcd"

    'abcd'.slice(1,3) // "bc"

    "abcd".slice(1,-1) //"bc"
    "abcd".substring(1,-1) //"a"

    "abcd".slice(1,NaN) //""
    "abcd".substring(1,NaN) //"a"


## <a name="split()">split()字符串分割为数组</a>

str.split([separator[, limit]])  
separator  
>分隔符（字符串或正则表达式）。 如果省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果为空字符串，则将原字符串中每个字符的数组形式返回。正则时 如果包含捕获括号，则其匹配结果将会包含在返回的数组中。

>limit  
一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

>
    let str= 'ab-cd'
    str.split() // ['ab-cd']
    str.split('') // ['a','b','-','c','d']
    str.split('-') // ['ab','cd']

    str.split(/-/)  //  ["ab", "cd"]
    str.split(/(-)/)  //  ["ab","-", "cd"]

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

## <a name="startWith()、endWith()">startWith()、endWith()判断是否以某字符开头、结尾</a>
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

## <a name="padStart()、padEnd()">padStart()、padEnd() 填充字符串头部、尾部</a>
用一个字符串填充当前字符串（可重复填充），返回填充后达到指定长度的字符串。从当前字符串的头部、末尾开始填充。

str.padEnd(targetLength [, padString])  
targetLength  
>当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。

padString 可选  
>填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。默认" "

>
    'abc'.padStart(10);          // "       abc"
    'abc'.padEnd(10);          // "abc       "
    'abc'.padEnd(10, "foo");   // "abcfoofoof"
    'abc'.padEnd(6, "123456"); // "abc123"
    'abc'.padEnd(1);           // "abc"

## <a name="repeat()">repeat()重复字符串</a>
str.repeat(n)  
>n:[0, +∞) 的整数。重复字符串次数。

>

    "abc".repeat(0)      // ""
    "abc".repeat(1)      // "abc"
    "abc".repeat(2)      // "abcabc"

## <a name="search()">search()检索字符串</a>
检索字符串是否匹配RegExp 返回 匹配到字符串首次出现的索引 或 -1  

str.search(reg) 会把字符串转换为正则  
>
    'ab'.search('a') // 0
    'ab'.search(/b/) // 1

## <a name="match()、matchAll()">match()、matchAll()检索字符串</a>

* str.match(reg|str)   
捕获匹配的字符串；若全局搜索（g）则捕获所有匹配的字符 ，否则返回首个匹配值（与exce方法一致）会返回捕获组；返回数组或null 

* str.matchAll(reg|str) 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器。配合 for...of, 扩展运算符(...), or Array.from()


* match(非全局搜索) --  str.match(reg|str)   
返回值：  
匹配的内容 | 捕获分组（括号里匹配）的内容，有几个分组就有几项  
index：匹配内容的起始索引  
input：原字符串  
groups：用于列举 “有名有姓”的捕获
  >语法为：(?<捕获分组的名字>捕获分组对应的规则)，/(?\<myname>\d))/

>

    var regexp = /t(e)(st(\d?))/g;
    var str = 'test1test2';
    str.match(regexp); // Array ['test1', 'test2']

    //使用 matchAll 可以通过如下方式获取分组捕获:
    let array = [...str.matchAll(regexp)];
    array[0];
    // ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
    array[1];
    // ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]

## <a name="replace()">replace()替代字符串</a>
str.replace(值类型 | regexp, 字符串 | 回调函数)  
* 当第二个参数是字符串时，如下的字符有特殊的含义：

|属性 | 描述 |
|:--|:--|
| $1,$2,...,$99 | 插入匹配第 1-99 个分组里捕获的文本 |
| $& | 插入匹配到的子串文本
| $` | 插入匹配到的子串的左边文本
| $' | 插入匹配到的子串的右边文本
| $$ | 插入一个 "$"

>
    str.replace(reg, '$1,$2....')
    str.replace(reg, '$&')

    var result="2+3=5".replace(/=/,"$&/$`/$&/$'/$&");
    console.log(result);// => "2+3=/2+3/=/5/=5"

* 当第二个参数是函数时

>

    str.replace(reg, function ($0,$1,$2,...) {
      // 第一个形参$0 表示匹配的字符
      // 若有分组，则从第二个参数开始就是分组的内容
      // 倒数第二个形参 表示匹配字符的起始索引
      // 倒数第一个形参 表示原字符串
    });

    "1234 2345 3456".replace(/(\d)\d{2}(\d)/g,function(match,$1,$2,index,input){
      //有两个括号（两个捕获分组） $1,$2
      console.log([match,$1,$2,index,input]);
    });
    // => ["1234", "1", "4", 0, "1234 2345 3456"]
    // => ["2345", "2", "5", 5, "1234 2345 3456"]
    // => ["3456", "3", "6", 10, "1234 2345 3456"]

## <a name="toLowerCase()、toUpperCase()、toLocaleLowerCase()、toLocaleUpperCase()">toLowerCase()、toUpperCase()、toLocaleLowerCase()、toLocaleUpperCase()字符串转大小写</a>
str.toLowerCase()  将字符串转为小写  
str.toUpperCase()  将字符串转为大写  

str.toLocaleLowerCase()  使用本地化规则将字符串转为小写  
str.toLocaleUpperCase()  使用本地化规则将字符串转为大写

## <a name="trim()、trimLeft()、trimRight()">trim()、trimLeft()、trimRight()</a>
trime()  
trimLeft() | trimStart()  
trimRight() | trimEnd()  
返回的是一个新的字符串。

删除字符串的两端、左侧、右侧空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。

## <a name="localeCompare()">localeCompare()</a>
返回一个数字(-1:前，0:相同，1:后)来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。

referenceStr.localeCompare(compareString[, locales[, options]])  
>compareString: 用来比较的字符串  
>locales: 可选。  
>options: 可选。  

>
    'a'.localeCompare('a') // 0
    'a'.localeCompare('c') // -1
    'c'.localeCompare('a') // 1

## <a name="normalize()">String.normalize()</a>
按照指定的一种 Unicode 正规形式将当前字符串正规化。（如果该值不是字符串，则首先将其转换为一个字符串）。

str.normalize([form])
>form
>
    四种 Unicode 正规形式 "NFC", "NFD", "NFKC", 以及 "NFKD" 其中的一个, 默认值为 "NFC".

>
    let str = "\u1E9B\u0323";
    str.normalize("NFC") // "ẛ̣"
    str.normalize("NFD") // "ẛ̣"
    str.normalize("NFKC") // "ṩ"
    str.normalize("NFKD") // "ṩ"

## <a name="row()">String.row()</a>
把字符串所有变量替换且对斜杠进行转义的结果

String.raw(callSite, ...substitutions)  |
String.raw\`templateString`  
>callSite: 一个模板字符串的“调用点对象“ 。类似{ raw: ['foo', 'bar', 'baz'] }。  
>...substitutions: 任意个可选的参数，表示任意个内插表达式对应的值。

>templateString: 模板字符串，可包含占位符（${...}）。

>
    String.raw`Hi\n${2+3}!`
    // 'Hi\n5!'，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符

    String.raw({
      raw: ['foo', 'bar', 'baz'] 
    }, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'

## <a name="()">()</a>
