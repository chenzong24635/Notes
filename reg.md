![a](../marigna.webp)

[MDN-正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#)

[正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm#mission)

[正则表达式迷你书](chrome-extension://cdonnmffkdaoajfknoeeecmchibpmkmg/static/pdf/web/viewer.html?file=https%3A%2F%2Fraw.githubusercontent.com%2Fqdlaoyao%2Fjs-regex-mini-book%2Fmaster%2FJavaScript%25E6%25AD%25A3%25E5%2588%2599%25E8%25A1%25A8%25E8%25BE%25BE%25E5%25BC%258F%25E8%25BF%25B7%25E4%25BD%25A0%25E4%25B9%25A6%25EF%25BC%25881.1%25E7%2589%2588%25EF%25BC%2589.pdf)

[正则表达式手册](http://tool.oschina.net/uploads/apidocs/jquery/regexp.html)

[正则调试](https://regex101.com/)

[正则表达式-图形化工具](https://regexper.com/)

# 创建正则表达式
字面量形式：
var re = /abc/gi;

构造函数形式：
var re = new RegExp("abc",gi);

# 字符
| 字符| 描述| |
|:---|:---|:--|
| .  | 匹配除换行符（\n）以外的任意字符(匹配所有([\d\D]\*)或([\s\S]\*)或([\w\W]\*) 或开启单行模式(s)) | /.ar/g => The `car par`ked in the `gar`age.  |
| () | 数据分界,分组捕获 |  |
| (?:) |非捕获,  匹配?:后面内容，但是不记住匹配项。这种括号叫作非捕获括号 |  |
| [] | 匹配方括号内的任意字符 | [abc]会匹配a或b或c |
| [^] | 匹配除了方括号内的任意字符 | [^abc]会匹配除a或b或c外的字符 |
| ^ | 匹配字符串的开始| 数字开头^\d|
| $ | 匹配字符串的结束| 数字结尾\d$|
| \ | 转义字符| 转义特殊字符为普通字符 \\[\\] |
| \| | 或运算符, 多选一 匹配符号前或后的字符| /(c\|g\|p)ar/g => The `car` is `par`ked in the `gar`age. |
| \w | 匹配任何单词字符.等价于[A-Za-z0-9_] ||
| \W | 匹配任何非单词字符.等价于[^A-Za-z0-9_] ||
| \s | 匹配任意空白符,包括空格、制表符、换页符等等。等价于[\f\n\r\t\v]。||
| \S | 匹配任意非空白符,等价于[^\f\n\r\t\v]||
| \d | 匹配数字 (等价于[0-9] )||
| \D | 匹配非数字 (等价于[^0-9] [^\d])||
| \b | 匹配一个单词边界 （单词的开始或结束）| “er\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”。|
| \B | 匹配一个非单词边界 （非单词的开始或结束）。具体就是\w与\W之间的位置（包括\w与^之间的位置，和\w与$之间的位置）。 | “er\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”|
| \f | 匹配一个换页符。等价于\x0c和\cL。 |
| \n | 匹配一个换行符。等价于\x0a和\cJ。 |
| \r | 匹配一个回车符。等价于\x0d和\cM。 |
| \t | 匹配一个制表符。等价于\x09和\cI。 |
| \v | 匹配一个垂直制表符。等价于\x0b和\cK|

>
    单行模式s：更改.的含义，使它与每一个字符匹配（包括换行符\n）

    匹配a标签包括其内容
    '<a href="daad" class="b"> ddad \n </a>'.match(/<a[^>]+>.*(<\/a>)$/gs)
    等同于
    '<a href="daad" class="b"> ddad \n </a>'.match(/<a[^>]+>([\d\D]*)(<\/a>)$/g)

    多个a标签
    '<a  class="b"> ddad \n </a> <a href="daad" class="aa"> ddad \n </a>'.match(/<a[^>]*?>([^<]*)<\/a>/g)

# 修饰符
| 字符| 描述| |
|:---|:---|:--|
| g | 全局搜索 |
| i | 忽略大小写 |
| s | 单行模式:	更改.的含义，允许 . 匹配换行符(\n)。
| m | 多行模式: 更改^和$的含义，使它们分别在任意一行的行首和行尾匹配，而不仅仅在整个字符串的开头和结尾匹配。(在此模式下,$的精确含意是:匹配\n之前的位置以及字符串结束前的位置.)|
| u | 使用unicode码的模式进行匹配|
| y | 执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。 |

`多行模式和单行模式没有任何关系.能同时使用`


# 贪婪、懒惰
| 字符| 描述| |
|:---|:---|:--|
|`贪婪`| |
|?	 | 匹配重复0或1次 其之前的字符 |
|*	 | 匹配重复>=0次 其之前的字符 |
|+	 | 匹配重复>=1次 其之前的字符 |
|{n} |	匹配重复n次 的字符 |
|{n,} | 匹配重复 >=n次 的字符 |
|{n,m}| 匹配重复n到m次 的字符 |
| `懒惰` |其后加? 表示尽可能少重复 |
| ??     |重复0或1次，但尽可能少重复|
| *?	  | 重复>=0次，但尽可能少重复 |
| +?	  | 重复>=1次，但尽可能少重复|
| {n,m}? |重复n到m次，但尽可能少重复|
| {n,}?  |重复n次以上，但尽可能少重复|


# 零宽断言
断言：俗话的断言就是“我断定什么什么”，而正则中的断言，就是说正则可以指明在指定的内容的前面或后面会出现满足指定规则的内容，意思正则也可以像人类那样断定什么什么，比如"ss1aa2bb3",正则可以用断言找出aa2后面有|没有bb3，也可以找出aa2前面有|没有ss1.

零宽：就是没有宽度，在正则中，断言只是匹配位置，不占字符，也就是说，匹配结果里是不会返回断言本身。



| 字符| 定义| | |
|:---|:---|:---|:---|
| ?=exp| 零宽度正预测先行断言-存在 | 断言此位置的后面能匹配表达式exp | /(T\|t)he(?=\sfat)/g => `The` fat cat sat on a fat . //匹配的the或The的后面要求 有着空白符及fat字符|
| ?<=exp | 零宽度正回顾后发断言-存在 |断言此位置的前面能匹配表达式 | /(?<=(T\|t)he\s)fat/g => The `fat` cat sat on a fat. //匹配的fat字符 之前要求有着the或The及空白符 |
| ?!exp | 零宽度负预测先行断言-排除 | 断言此位置的后面不能匹配表达式exp  | /(T\|t)he(?!\sfat)/g => The fat cat sat on `the` mat. //匹配的the或The的后面要求 没有空白符及fat字符 |
| ?<!exp | 零宽度负回顾后发断言-排除 |断言此位置的前面不能匹配表达式exp | /(?<!(T\|t)he\s)fat/g => The fat cat sat on a `fat`. //匹配的fat字符 之前要求没有the或The及空白符 |

! 不存在；  
= 存在；  
\< 前面；  
没有\< 后面；

>
    "<span class=\"read-count\">阅读数：641</span>".match(/\d+(?=<\/span>)/gi)

    //["641"]
      
    (?!B)[A-Z]这种写法，其实它是[A-Z]范围里，排除B的意思，前置的(?!B)只是对后面数据的一个限定，从而达到过滤匹配的效果。

#  方法

| 方法 | 描述 | 返回 | 使用 |
|:--|:--|:--|:--|
| test( RegExp 对象的方法) | 验证字符串是否匹配 | boolean值：true\|false | reg.test(str)
| exec ( RegExp 对象的方法) | 捕获匹配的字符串,只捕获首个匹配的 | 数组 \| null |  reg.exec(str)
| match (String 对象的方法) | 捕获匹配的字符串；若全局搜索（g）则一次性捕获所有，否则返回首个匹配值，与exce方法一致 | 数组 \| null |  str.match(reg)
| search | 检索字符串是否匹配RegExp | 匹配到字符串首次出现的索引 \| -1 | str.search(reg)
| replace | 替换匹配的字符串（不改变原字符串） | 替换后的新字符串 |  replace(str|regexp, newStr|callback)
| split | 分割字符串（不改变原字符串）   | 数组 |  str.split(reg,str1);   date = '2017-11-21 23:40:56';date.split(/-|\s|:/); -->  ["2017", "11", "21", "23", "40", "56"]

* exec --  reg.exec(str)  
* match(非全局搜索) --  str.match(reg)   
返回值：  
匹配的内容 | 捕获分组（括号里匹配）的内容，有几个分组就有几项  
index：匹配内容的起始索引  
input：原字符串  
groups：用于列举 “有名有姓”的捕获
  >语法为：(?<捕获分组的名字>捕获分组对应的规则)，/(?\<myname>\d))/

>
    let str = '123'
    let reg = /(?<first>\d)(?<second>\d)/
    // 其中的?<first>、?<second>代表捕获的“名字”为first、second 
    reg.exec(str)
    //返回：
    [
      "12","1","2",
      index: 0,
      input: "123",
      groups:{
        first: "1"
        second: "2"
      }
    ]

注意：  
()捕获分组,返回多个匹配内容   
?:非捕获分组（匹配不捕获）    
  >不需要捕获分布的内容时，在不需要捕获分组的里面加上?: 
>
    var str = "2018ceshi2019";
    
    var reg = /\d\w/;
    reg.exec(str);//["20", index: 0, input: "2018ceshi2019",groups:undefined]
    
    var reg = /(\d)(\w)/; //捕获分组
    reg.exec(str);//["20", "2", "0", index: 0, input: "2018ceshi2019",groups:undefined]
    
    var reg = /(\d)(?:\w)/; //捕获分组+非捕获分组
    reg.exec(str);//["20","2", index: 0, input: "2018ceshi2019",groups:undefined]

    var reg = /(?:\d)(?:\w)/; //非捕获分组
    reg.exec(str);//["20", index: 0, input: "2018ceshi2019",groups:undefined]

* replace, str.replace(值类型 | regexp, 值类型 | 回调函数)
>
    str.replace(reg, '$0,$1,$2')
    str.replace(reg, '$&,')

    str.replace(reg, function ($0,$1,$2,...) {
      // 第一个形参$0 表示匹配的字符
      // 若有分组，则从第二个参数开始就是分组的内容
      // 倒数第二个形参 表示匹配字符的起始索引
      // 倒数第一个形参 表示原字符串

      //$& 表示整个被匹配的字符串
    });

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
    var str = "11a22b33c44d";
    
    var newStr1 = str.replace(/\d+/g, function ($0,$1,$2) {
        return $0*2;
    });
    console.log(str);//11a22b33c44d
    console.log(newStr1);//22a44b66c88d
    
    // 若有量词，则分组里面的内容是匹配字符的最后一个字符
    var newStr2 = str.replace(/(\d+)/g, function ($0,$1,$2) {
        return $0*2;
    })
    console.log(str);//11a22b33c44d
    console.log(newStr2);//22a44b66c88d

# 常用

用户名：
数字字母下划线 m到n个字符
>
    /^[A-Za-z0-9_]{m,n}$/
    /\w{m,n}/

密码：  
数字字母 m到n个字符
>

    /^[A-Za-z0-9]{m,n}$/

校验中文
>
    /^[\\u4e00-\\u9fa5]{0,}$/

由数字、26个英文字母或下划线组成的字符串
>
    /^\w+$/

校验Email
>
    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/


 校验身份证号码
>

    15位：
    ^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$
    
    18位：
    ^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$

    ^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$



校验金额
>
    金额校验，精确到2位小数。

    /^[0-9]+(.[0-9]{2})?$/

校验手机号
>



提取URL链接
>




移除HMTL中的注释
>
    /<!--(.*?)-->/

    '<!-- fsf -->对对对'.replace(/<!--(.*?)-->/, '') => 对对对

