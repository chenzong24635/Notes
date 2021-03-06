
[MDN-正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#)

[JS正则表达式迷你书](https://github.com/qdlaoyao/js-regex-mini-book)  

[regexr](https://regexr.com/)正则调试网站
[regex101](https://regex101.com/)正则调试网站
[regexper](https://regexper.com/)正则表达式-图形化工具

[正则大全](https://any86.github.io/any-rule/)常用正则表达式


# 目录
* <a href="#创建正则表达式">创建正则表达式</a>
* <a href="#字符">字符</a>
* <a href="#操作符优先级">操作符优先级</a>
* <a href="#修饰符">修饰符</a>
* <a href="#属性">属性</a>
* <a href="#贪婪、懒惰">贪婪、懒惰</a>
* <a href="#零宽断言">零宽断言</a>
* <a href="#方法">正则、字符串方法</a>
* <a href="#分组">分组：括号的作用</a>
* <a href="#"></a>
* <a href="#常用">常用正则</a>


# <a name="创建正则表达式">创建正则表达式</a>

字面量形式：
```js
let re = /abc/gi;
```

构造函数形式：
```js
let re = new RegExp("abc",'gi');
let re = new RegExp(/abc/,'gi');  
let re = new RegExp(/abc/gi);  
```

# <a name="字符">字符</a>
| 字符| 描述| |
|:---|:---|:--|
| .  | 匹配除换行符（\n）以外的任意字符(匹配所有([\d\D]\*)或([\s\S]\*)或([\w\W]\*) 或开启单行模式(s)) | /.ar/g => The `car par`ked in the `gar`age.  |
| () | 数据分界,分组捕获 |  |
| (?:) |非捕获,  匹配?:后面内容，但是不记住匹配项。这种括号叫作非捕获括号 |  |
| [] | 匹配方括号内的任意字符(特殊字符无需转移) | [abc.]会匹配a或b或c或. |
| [^] | 匹配除了方括号内的任意字符 | [^abc]会匹配除a或b或c外的字符 |
| ^ | 匹配字符串的开始，有修饰符m时，表示匹配行开头位置| 如数字开头^\d|
| $ | 匹配字符串的结束，有修饰符m时，表示匹配行结尾位置| 如数字结尾\d$|
| \ | 转义字符| 转义特殊字符为普通字符 \\[\\] |
| \| | 管道符,惰性匹配, 多选一 匹配符号前或后的字符| /(c\|g\|p)ar/g => The `car` is `par`ked in the `gar`age. |
| \w | 匹配任何单词字符.等价于[A-Za-z0-9_] ||
| \W | 匹配任何非单词字符.等价于[^A-Za-z0-9_] ||
| \s | 匹配任意空白符,包括空格、制表符、换页符等等。等价于[\f\n\r\t\v]。||
| \S | 匹配任意非空白符,等价于[^\f\n\r\t\v]||
| \d | 匹配数字 (等价于[0-9] )||
| \D | 匹配非数字 (等价于[^0-9] [^\d])||
| \b | 匹配一个单词边界（单词的开始或结束）,即\w与\W、\w与^、\w与$之间的位置| “er\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”。|
| \B | 匹配一个非单词边界（非单词的开始或结束）,即\w与\w、\W与\W、\W与^，\W与$之间的位置 | “er\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”|
| \f | 匹配一个换页符。等价于\x0c和\cL。 |
| \n | 匹配一个换行符。等价于\x0a和\cJ。 |
| \r | 匹配一个回车符。等价于\x0d和\cM。 |
| \t | 匹配一个制表符。等价于\x09和\cI。 |
| \v | 匹配一个垂直制表符。等价于\x0b和\cK|


# <a name="操作符优先级">操作符优先级</a>
|操作符| 优先级(由高到低)|
|:--|:--|
| 转义符 \\ | 1
| 括号、方括号 (...)、(?:...)、(?=...)、(?!...)、[...] | 2
| 量词限定符 {m}、{m,n}、{m,}、?、*、+ | 3 |
|位置和序列 ^、$、\元字符、一般字符 | 4
|管道符 \| | 5

# <a name="修饰符">修饰符</a>

| 字符| 描述| |
|:---|:---|:--|
| g (global)| 全局搜索  |
| i (ignoreCase)| 忽略大小写 |
| s (dotAll)| 单行模式 :	更改 `.` 字符的含义，使它与每一个字符匹配（包括换行符\n）
| m (multiline)| 多行模式 : 更改^和$的含义，使它们分别在任意一行的行首和行尾匹配，而不仅仅在整个字符串的开头和结尾匹配。(在此模式下,$的精确含意是:匹配\n之前的位置以及字符串结束前的位置.)|
| u (unicode)| 使用unicode码的模式进行匹配,用来正确处理大于\uFFFF的 Unicode 字符。会正确处理四个字节的 UTF-16 编码。|
| y (sticky)| 执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。 |

`多行模式和单行模式没有任何关系.能同时使用`

**s修饰符**

单行模式s：更改.的含义，使它与每一个字符匹配（包括换行符\n）
```js

// 匹配a标签包括其内容
'<a href="daad" class="b"> ddad \n </a>'
.match(/<a[^>]+>.*(<\/a>)/gs)
// 等同于
'<a href="daad" class="b"> ddad \n </a>'
.match(/<a[^>]+>([\d\D]*)(<\/a>)/g)

// 多个a标签
'<a  class="b"> ddad \n </a> <a href="daad" class="aa"> ddad \n </a>'
.match(/<a[^>]+>([^<]*)<\/a>/g)
```

**u修饰符**
处理大于\uFFFF的 Unicode 字符
```js
/𠮷{2}/.test('𠮷𠮷') // false
/𠮷{2}/u.test('𠮷𠮷') // true
```

**y修饰符**  
y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
```js
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
```

# <a name="属性">属性</a>

* source 返回正则表达式的正文
  > /abc/ig.source  // "abc"

* lastIndex:整数,表示开始搜索下一个匹配项的字符位置,从0算起
  > /abc/ig.lastIndex  // 0

* flags 返回正则表达式的修饰符
  > /abc/ig.flags // 'gi'

* global 是否设置了 g 修饰符
  >/abc/g.global // true  
  >/abc/.global // false

* ignoreCase  是否设置了 i 修饰符
  >/abc/i.ignoreCase // true  
  >/abc/.ignoreCase // false

* dotAll 是否设置 s 修饰符
  >/abc/s.dotAll // true  
  >/abc/.dotAll // false

* multiline 是否设置 m 修饰符
  >/abc/m.multiline  // true  
  >/abc/.multiline  // false

* unicode 是否设置 u 修饰符
  >/abc/u.unicode   // true  
  >/abc/.unicode   // false

* sticky 是否设置了 y 修饰符
  > /abc/y.sticky // true  
  > /abc/.sticky // false


# <a name="贪婪、懒惰">贪婪、懒惰</a>

| 字符| 描述| |
|:---|:---|:--|
|`贪婪`| 尽可能多匹配 |
|?	 | 匹配重复0或1次 其之前的字符 |
|*	 | 匹配重复>=0次 其之前的字符 |
|+	 | 匹配重复>=1次 其之前的字符 |
|{n} |  匹配重复n次 其之前的字符 |
|{n,} | 匹配重复 >=n次 其之前的字符 |
|{n,m}| 匹配重复n到m次 其之前的字符 |
| `懒惰`  |其后加? 表示尽可能少匹配 |
| ??     |匹配重复0或1次，但尽可能少匹配|
| *?	   |匹配重复>=0次，但尽可能少匹配 |
| +?	   |匹配重复>=1次，但尽可能少匹配|
| {n,m}? |匹配重复n到m次，但尽可能少匹配|
| {n,}?  |匹配重复n次以上，但尽可能少匹配|

# <a name="零宽断言">零宽断言</a>

断言：俗话的断言就是“我断定什么什么”，而正则中的断言，就是说正则可以指明在指定的内容的前面或后面会出现满足指定规则的内容，意思正则也可以像人类那样断定什么什么，比如"ss1aa2bb3",正则可以用断言找出aa2后面有|没有bb3，也可以找出aa2前面有|没有ss1.

零宽：就是没有宽度，在正则中，断言只是匹配位置，不占字符，也就是说，匹配结果里是不会返回断言本身。



| 字符| 定义| 释义|例子 |
|:---|:---|:---|:---|
| ?=exp| 零宽度正预测先行断言-存在 | 断言此位置的后面能匹配表达式exp | /(T\|t)he(?=\sfat)/g => `The` fat cat sat on a fat . //匹配的the或The的后面要求 有着空白符及fat字符|
| ?<=exp | 零宽度正回顾后发断言-存在 |断言此位置的前面能匹配表达式exp | /(?<=(T\|t)he\s)fat/g => The `fat` cat sat on a fat. //匹配的fat字符 之前要求有着the或The及空白符 |
| ?!exp | 零宽度负预测先行断言-排除 | 断言此位置的后面不能匹配表达式exp  | /(T\|t)he(?!\sfat)/g => The fat cat sat on `the` mat. //匹配的the或The的后面要求 没有空白符及fat字符 |
| ?<!exp | 零宽度负回顾后发断言-排除 |断言此位置的前面不能匹配表达式exp | /(?<!(T\|t)he\s)fat/g => The fat cat sat on a `fat`. //匹配的fat字符 之前要求没有the或The及空白符 |

!：表不存在；  
=：表存在；  
\<：表前面；否则表后面；

>
    "<span class=\"read-count\">阅读数：641</span>".match(/\d+(?=<\/span>)/gi)

    //["641"]
      
    (?!B)[A-Z]这种写法，其实它是[A-Z]范围里，排除B的意思，前置的(?!B)只是对后面数据的一个限定，从而达到过滤匹配的效果。


# <a name="方法">正则、字符串方法</a>


| 方法 | 描述 | 返回 | 使用 |
|:--|:--|:--|:--|
| test( RegExp方法) | 验证字符串是否匹配 | boolean值：true\|false | reg.test(str)
| exec ( RegExp方法) | 捕获匹配的字符串,只捕获首个匹配的 | 数组 \| null |  reg.exec(str)
| match (String方法) | 捕获匹配的字符串；若全局搜索（g）则捕获所有匹配的字符 ，否则返回首个匹配值（与exce方法一致） | 数组 \| null |  str.match(str|reg)
| search | 检索字符串是否匹配RegExp | 匹配到字符串首次出现的索引 \| -1 | str.search(reg)
| replace | 替换匹配的字符串（不改变原字符串） | 替换后的新字符串 |  replace(str|reg, str1|callback)
| split | 分割字符串（不改变原字符串）   | 数组 |  str.split(reg|str,maxLen); maxLen: 返回数组最大长度;  date = '2017-11-21 23:40:56';date.split(/-|\s|:/); -->  ["2017", "11", "21", "23", "40", "56"]

### search和match，会把字符串转换为正则的
```js
var string="2017.06.27";
string.search(".")// 0

//修改
string.search("\\.") // 4
string.search(/\./) // 4
```


### exec, match
* exec --  reg.exec(str)  
* match(非全局搜索) --  str.match(reg|str)   
* matchAll() 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器。 

返回值：  
>
    匹配的内容 | 捕获分组（括号里匹配）的内容，有几个分组就有几项  
    index：匹配内容的起始索引  
    input：原字符串  
    groups：用于列举 “有名有姓”的捕获  
      语法为：(?<捕获分组的名字>捕获分组对应的规则)，/(?\<myname>\d))/

match,exec区别
```js
let str = '123'
let reg = /(?<first>\d)(?<second>\d)/
// 其中的?<first>、?<second>代表捕获的“名字”为first、second 
//reg.exec(str)
str.match(reg)
//返回：
// [
//   0: "12",
//   1: "1",
//   2: "2",
//   index: 0,
//   input: "123",
//   groups:{
//     first: "1"
//     second: "2"
//   }
// ]

// 若match全局匹配g,值返回匹配值
let reg = /(?<first>\d)(?<second>\d)/g
str.match(reg) //["12"]

// 而exex不影响
reg.exec(str)
// [
//   0: "12",
//   1: "1",
//   2: "2",
//   index: 0,
//   input: "123",
//   groups:{
//     first: "1"
//     second: "2"
//   }
// ]

```

没有匹配值都返回null
```js
let reg = /a/
let str = 'bc'
str.match(reg) // null
reg.exec(str) // null
```

matchAll用法
```js
let reg = /\d{2}[A-Za-z]/g
let str = '12a45b6666c'
let iter =str.matchAll(reg)
console.log(iter); 
// RegExpStringIterator {}

console.log(iter.next());
// {
//   value: Array(1),
//   0: "12a",
//   index: 0,
//   input: "12a45b6666c",
//   groups: undefined,
//   length: 1,
//   done: false
// }

console.log(iter.next());
// {
//   value: Array(1),
//   0: "45b",
//   index: 3,
//   input: "12a45b6666c",
//   groups: undefined,
//   length: 1,
//   done: false
// }

console.log(iter.next());
// {
//   value: Array(1),
//   0: "66c",
//   index: 8,
//   input: "12a45b6666c",
//   groups: undefined,
//   length: 1,
//   done: false
// }

console.log(iter.next());
// {
//   value: undefined
//   done: true
// }
```


* 捕获分组 非捕获分组  
() 捕获分组,返回多个匹配内容   
(?:)非捕获分组（匹配不捕获）    
  >如果只想要括号最原始的功能，但不会引用它，即，既不在 API 里引用，也不在正则里反向引用。
  >不需要捕获分布的内容时，在不需要捕获分组的里面加上?: 

```js
let str = "2018ceshi2019";

let reg = /\d\w/;
reg.exec(str);//["20", index: 0, input: "2018ceshi2019",groups:undefined]

let reg = /(\d)(\w)/; //捕获分组
reg.exec(str);//["20", "2", "0", index: 0, input: "2018ceshi2019",groups:undefined]

let reg = /(\d)(?:\w)/; //捕获分组+非捕获分组
reg.exec(str);//["20","2", index: 0, input: "2018ceshi2019",groups:undefined]

let reg = /(?:\d)(?:\w)/; //非捕获分组
reg.exec(str);//["20", index: 0, input: "2018ceshi2019",groups:undefined]
```

### replace, str.replace(值类型 | regexp, 字符串 | 回调函数)
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


___

将用户输入转义为正则表达式中的一个字面字符串
>
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
    }
    escapeRegExp('[].')// '\[\]\.'

>
    let date = '2017-11-21'
    date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$2/$3/$1')
    //返回："11/21/2017"

>
    let str = "11a22b33c44d";
    
    let newStr1 = str.replace(/\d+/g, function ($0,$1,$2) {
        return $0*2;
    });
    console.log(str);//11a22b33c44d
    console.log(newStr1);//22a44b66c88d
    
    // 若有量词，则分组里面的内容是匹配字符的最后一个字符
    let newStr2 = str.replace(/(\d+)/g, function ($0,$1,$2) {
        return $0*2;
    })
    console.log(str);//11a22b33c44d
    console.log(newStr2);//22a44b66c88d


# <a name="分组">分组：括号的作用</a>
使用括号提供分组功能，强调括号内的正则是一个整体，即提供子表达式;
>
    /(ab)/

* 捕获分组 非捕获分组  
() 捕获分组,返回多个匹配内容   
(?:)非捕获分组（匹配不捕获）    
  >如果只想要括号最原始的功能，但不会引用它，即，既不在 API 里引用，也不在正则里反向引用。
  >不需要捕获分布的内容时，在不需要捕获分组的里面加上?: 

## 分组引用
是括号一个重要的作用，有了它，我们就可以进行数据提取，以及更强大的替换操作

* 提取数据
>
    var regex=/(\d{4})-(\d{2})-(\d{2})/;
    var string="2017-06-12";
   
    var result=string.match(regex);
    console.log(result)
    // -->
    [
      "2017-06-12",
      "2017",
      "06",
      "12",
      groups: undefined,
      index: 0,
      input: "2017-06-12"
    ]
    
    使用构造函数的全局属性$1至$9来获取
    console.log(RegExp.$1) //2017
    console.log(RegExp.$2) //06
    console.log(RegExp.$3) //12



* 替换
>
    let regex=/(\d{4})-(\d{2})-(\d{2})/;
    let string="2017-06-12";
    let result=string.replace(regex,"$2/$3/$1");
    等同于：
    let result=string.replace(regex,function($0,$1,$2,$3){
      //$0，$1... 可以自定义命名
      return $2 + '/' +$3 +'/' + $1
    });

    console.log(result)// "06/12/2017"

    replace中的第二个参数里用$1、$2、$3指代相应的分组

## 反向引用
在正则本身里引用分组。但只能引用之前出现的分组，即反向引用

如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名> 或者 数字引用（\1）；可以同时使用。
>
    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
    //const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
    RE_TWICE.test('abc!abc') // true
    RE_TWICE.test('abc!ab') // false

>
    比如要写一个正则支持匹配如下三种格式：
    2016-06-1
    22016/06/1
    22016.06.12

    let regex=/\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
    regex.test("2017-06-12");// true 
    regex.test("2017/06/12");// true
    regex.test("2017.06.12");// true
    regex.test("2017-06/12");// true ???

要求分割符前后一致怎么办？此时需要使用反向引用：
>
    let regex=/\d{4}(-|\/|\.)\d{2}\1\d{2}/
    regex.test("2017/06/12"); // true
    regex.test("2017-06/12"); // false

    注意里面的\1，表示的引用之前的那个分组(-|\/|\.) 不管它匹配到什么（比如-），\1都匹配那个同样的具体某个字符。
    那么\2和\3的概念也就理解了，即分别指代第二个和第三个分组



# <a name="常用">正则的一些常用判断</a>

#### 去除字符头尾空格
```js
/^\s+|\s+$/g


//替换空白符为空字符
'  dffs  说的 gs.  '.replace(/^\s+|\s+$/g,'')
//"dffs  说的 gs."

//匹配整个字符串，然后用引用来提取出相应的数据
'  dffs  说的 gs.  '.replace(/^\s+(.*?)\s+$/g,'$1')
//"dffs  说的 gs."
//此处 $1 代表正则里括号内匹配的内容，然后替换掉原字符串
```

#### 单词首字母大写
```js
/(?:^|\s)\w/g


'a name My'.toLowerCase().replace(/(^|\s)\w/g,function($1){
  return $1.toUpperCase();
}); 
//"A Name My"
```

#### 用户名：
数字字母下划线 m到n个字符
```js
/^[A-Za-z0-9_]{m,n}$/
/\w{m,n}/
```

#### 密码：  
数字字母 m到n个字符
```js
/^[A-Za-z0-9]{m,n}$/

// 非数组   非字母       字母+数字
/^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]+$/
```

```js
function pswLen(val) {// -- 6位数 、字母+数字
  let reg = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]+$/;
  let bool = reg.test(val);
  let len = val.length;
  if (len >= 6 && bool) return true
  return false
}
```
#### 手机号

```js
/^1[0-9]{10}$/
```

#### 校验中文
```js
/^[\u4e00-\u9fa5]{0,}$/
```

#### 由数字、26个英文字母或下划线组成的字符串
```js
/^\w+$/
```

#### 校验Email
```js
/^([a-z\d_\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/
```

#### 校验身份证号码
```js
15位：
/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/

18位：
/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
```

#### 校验金额
精确到2位小数。
```js
/^[0-9]*(\.[0-9]{2})$/
```

#### 移除HMTL中的注释
```js
/<!--(.*?)-->/

'aaa <!-- fsf -->对对 对'.replace(/<!--(.*?)-->/, '')
// 对对对
```
