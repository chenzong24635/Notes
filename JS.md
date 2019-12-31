<details open>
  <summary>
    链接
  </summary>

  [MDN-JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

  [《JavaScript 教程》- 网道](https://wangdoc.com/javascript/index.html)

  [现代 JavaScript 教程](http://zh.javascript.info/)

  [《ECMAScript 6 入门》- 阮一峰](http://es6.ruanyifeng.com/)

  [ECMAScript 6兼容性表](http://kangax.github.io/compat-table/es6/)

  [TypeScript](https://www.tslang.cn/docs/home.html)

  [axios](https://www.kancloud.cn/yunye/axios/234845)

  [Swiper-轮播图插件](https://www.swiper.com.cn/api/index.html) 



</details>


<details open>
  <summary>
    目录
  </summary>

* <a href="#运算符优先级">运算符优先级</a>
* <a href="#运算符">运算符</a>
    * <a href="#加运算符">+运算符</a>
    * <a href="#~运算符">~运算符</a>
    * <a href="#比较运算符"><,>,<=,>=的比较规则</a>
* <a href="#===、==、Object.is()判断">===、==、Object.is()判断</a>
* <a href="#keyCode">keyCode:键盘按键键码</a>

* <a href="#JS">**JS**</a>

* <a href="#数据类型、内置对象">数据类型、内置对象</a>
* <a href="#undefined与null定义、区别">undefined与null定义、区别</a>
* <a href ="json jsonp">json jsonp</a>
* <a href="#BOM 浏览器对象模型">BOM 浏览器对象模型</a>
* <a href="#DOM 文档对象模型">DOM 文档对象模型</a>
* <a href="#DOM事件">DOM事件</a>
* <a href="#mouseover、mouseout、mouseenter、mouseleave区别与联系">mouseover、mouseout、mouseenter、mouseleave区别与联系</a>
* <a href="#DOM常用属性">DOM常用属性</a>
* <a href="#DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点</a>
* <a href="#获取元素属性">获取元素属性innerHTML、outerHTML、innerText 、outerText、value</a>
* <a href="#变量、函数声明提升">变量、函数声明提升</a>
* <a href="#立即执行函数">立即执行函数</a>
* <a href="#对象属性">对象属性configurable enumerable writable</a>
* <a href="#typeof instanceof">typeof instanceof in</a>
* <a href="#异步编程有哪几种方法">异步编程有哪几种方法</a>
* <a href="#事件委托(代理)">事件委托(代理)</a>
* <a href="#闭包">闭包</a>
* <a href="#内存泄漏">内存泄漏</a>
* <a href="#new的实现原理">new的实现原理</a>
* <a href="#原型、原型链、原型继承">原型、原型链、原型继承</a>
* <a href="#创建对象的几种方式">创建对象的几种方式</a>
* <a href="#作用域、作用域链、执行上下文">作用域、作用域链、执行上下文</a>
* <a href="#this">this理解</a>
* <a href="apply call bind">apply call bind</a>
* <a href="实现apply call bind">实现apply call bind</a>
* <a href="#公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>
* <a href="#继承方式">继承方式</a>
* <a href="#设计模式">设计模式</a>
* <a href="#promise">promise</a>
* <a href="#async、await">async、await</a>
* <a href="#class类">class类</a>
* <a href="#深，浅拷贝">深，浅拷贝</a>
* <a href="#js延迟加载：defer,async">js延迟加载：defer,async</a>
* <a href="#重绘和回流">重绘和回流</a>
* <a href="#模块化">模块化AMD CMD modules</a>
* <a href="#面向过程和面向对象的异同">面向过程和面向对象的异同</a>
* <a href =""></a>
* <a href="#跨域">跨域</a>
* <a href="#常见的web攻击">常见的web攻击</a>
* <a href="#字符转码、解码">字符转码、解码,encodeURIComponent、decodeURIComponent、encodeURI、decodeURI、escape、unescape</a>
* <a href="#URI、URL、URN">URI、URL、URN</a>
* <a href="#函数式编程">函数式编程</a>
* <a href="#函数重载">函数重载</a>
* <a href="#防抖、节流">防抖、节流</a>
* <a href="#柯里化">柯里化</a>
* <a href="#n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
* <a href="#斐波那契数列">斐波那契数列</a>
* <a href="#函数缓存">函数缓存</a>
* <a href="#webWorker">webWorker</a>
* <a href="#浏览器缓存">浏览器缓存</a>
* <a href="#前端性能优化的方法">前端性能优化的方法</a>
* <a href="#浏览器渲染">浏览器渲染</a>
* <a href="#从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
* <a href="#事件执行机制">事件执行机制</a>
* <a href="#get与post区别">get与post区别</a>
* <a href="#css和js动画的差异">css和js动画的差异</a>
* <a href="#use strict">"use strict"? 用处？</a>
* <a href="#深度优先遍历和广度优先遍历">深度优先遍历和广度优先遍历</a>
* <a href="#DOMContentLoaded、$(function(){})、window.onload事件、执行顺序">DOMContentLoaded、$(function(){})、window.onload事件、执行顺序</a>
* <a href="#WebAssembly">WebAssembly</a>

</details> 

# <a name="运算符优先级">运算符优先级</a>
![运算符优先级](img/运算符优先级.png)
[查看更多--MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

#  <a name="运算符">运算符</a>
##  <a name="加运算符">+运算符</a>
>
    如果有操作数是对象，转换为原始值  
    此时如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接  
    否则：所有操作数都转换为数字并执行加

##  <a name="~运算符">~运算符</a>
~，被称为“按位不运算符”，~n等价于 - n - 1。//返回一个整数
>
    ~15.5 // -16
    ~'15.5' // -16
    ~('daa') // -1
    ~(NaN)  // -1

~~n：可用于取整;
~~n 等价于  - (- n - 1) - 1 = n + 1 - 1 = n
>

    ~~15.5 // 15
    ~~(NaN) // 0

## <a name="比较运算符"><,>,<=,>=的比较规则</a>

所有比较运算符都支持任意类型，但是比较只支持数字和字符串，所以需要执行必要的转换然后进行比较  
转换规则如下:
>
    如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错  
    经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）  
    否则，如果有一个操作数不是字符串，将两个操作数转换为数字进行比较

# <a name="===、==、Object.is()判断">===、==、Object.is()判断</a>
![===、==、Object.is()](/img/===.png)

## ===运算符判断
* 如果两个值不是相同类型，它们不相等
* 如果两个值都是null或者都是undefined，它们相等
* 如果两个值都是布尔类型true或者都是false，它们相等
* 如果其中有一个是NaN，它们不相等
* 如果都是数值型并且数值相等，他们相等， -0等于0(+0)
* 如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者* 容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不* 等
* 如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等
    
## ==运算符判断
* 如果两个值类型相同，按照===比较方法进行比较
* 如果类型不同，使用如下规则进行比较
* 如果其中一个值是null，另一个是undefined，它们相等
* 如果一个值是数字，另一个是字符串，将字符串转换为数字进行比较
* 如果有布尔类型，将 true|false 转换为 1|0，然后用 == 规则继续比较
* 如果其中有一个是NaN，它们不相等(```NaN == NaN ==> false```)
* 如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用 == 规则继续比较
* 其他所有情况都认为不相等

![==](./img/==.jpg)

##  Object.is()
为true的情况
* 都是 undefined
* 都是 null
* 都是 true 或者都是 false
* 都是完全相同的字符串，
* 都是数字并且
  * 都是正零，0 | +0 (Object.is(0,+0) ==>true)
  * 都是负零 -0 (Object.is(0,-0) ==>false)
  * 都是 NaN 
  * 都是除零和 NaN 外的其它同一个数字
* 都指向同一个对象
  ```js
  let a = {}
  let b =a
  Object.is(a,b) // true

  Object.is({},{}) // false

  ```


这种相等性判断逻辑和传统的 == 运算不同，== 运算符会对它两边的操作数做隐式类型转换（如果它们类型不同），然后才进行相等性比较，（所以才会有类似 "" == false 等于 true 的现象），但 Object.is 不会做这种类型转换。

这与 === 运算符的判定方式也不一样。=== 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。


#  <a name="keyCode">keyCode:键盘按键键码</a>
![keyCode](/img/keyCode.png)

# <a name="JS">**JS**</a>

JS的特点：无需编译、弱类型、基于对象、事件驱动  
JS的组成：核心( ECMAScript) , 文档对象模型(DOM), 浏览器对象模型(BOM)

JavaScript 是弱类型语言，而且JavaScript 声明变量的时候并没有预先确定的类型， 变量的类型就是其值的类型

>  
    任何 JavaScript 语句是可以加标签的，在语句前加冒号即可：

    firstStatement: var i = 1;
        
    大部分时候，这个东西类似于注释，没有任何用处。唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环。

        outer: while(true) {
          inner: while(true) {
              break outer;
          }
        }
        console.log("finished")
        
    break/continue 语句如果后跟了关键字，会产生带 target 的完成记录。一旦完成记录带了 target，那么只有拥有对应 label 的循环语句会消费它。

## <a name="数据类型、内置对象">数据类型、内置对象</a>
[JavaScript思维导图](https://github.com/lidaguang1989/javascript-knowhow)

### 数据类型：
1. 基本数据类型：[Undefined、Null](./details/Undefined、Null.md)、[Boolean](./details/Boolean.md)、[Number](./details/Number.md)、[String](./details/String)、[Symbol](./details/Symbol)  ---值传递 --栈内存
2. 复杂（引用）数据类型:[Object](./details/Object.md)    --地址传递--堆内存

* 两类型的区别：存储位置不同；
>
    基本数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；

    引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

    栈内存（连续的存储空间，类似数据结构中的栈）：主要用来存放数值、字符、内存地址等小数据
    
    堆内存（散列的存储空间，类似数据结构中的链表）：存放可以动态变化的大数据

![堆栈](./img/堆栈.jpg)

对象的键名只能是字符串和 Symbol 类型。    
其他类型的键名会被转换成字符串类型。    
对象转字符串默认会调用 toString 方法。   
[demo](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/125)


* [**BigInt**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)   

ES10引入了一种新的数据类型 BigInt（大整数）,来表示大于 2^53 - 1 的整数。BigInt 可以表示任意大的整数。

创建 BigInt 类型,只需要在数字后面加上n(123n) 或者BigInt(value) 转化，value 为数字或数字字符串 。也可以用二进制、八进制或十六进制表示
```js
123n  

BigInt(123) // 123n
BigInt('123') // 123n
BigInt(false) // 0n
BigInt(true) // 1n 

typeof 123n  // "bigint"
Number(111111111n) // 111111111

123n == 123 // true  
123n === 123 // false
8n/3n // 2n
```

除一元加号(+)运算符外,会与 asm.js 冲突，所有算术运算符都可用于BigInt

它在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。

### 内置对象
Object 是 JavaScript 中所有对象的父对象  
数据封装类对象：Object、Array、Boolean、Number、String   
其他对象：Function、Arguments、Math、Date、RegExp、Error  

window对象是顶层对象，指浏览器打开的窗口。    
document对象是Documentd对象（HTML 文档对象）的一个只读引用，window对象的一个属性。

### 区分数组对象方法 

>
    Object.prototype.toString.call([]) // "[object Array]"
    Object.prototype.toString.call({}) // "[object Object]"

>
    ([] instanceof Array) // true
    ({} instanceof Array) // false

    ([].constructor) // ƒ Array() { [native code] }
    ({}.constructor) // ƒ Object() { [native code] }

    Array.isArray([]) // true
    Array.isArray({}) // false

## <a name="undefined与null定义、区别">undefined与null定义、区别</a>
[undefined、null](./details/Undefined、Null.md)

## <a name="json jsonp">json jsonp</a>

JSON是一种key/value形式的数据格式，

JSONP则是一种跨域数据交互协议。

#### JSON：
[你不知道的 JSON.stringify() 的威力](https://juejin.im/post/5decf09de51d45584d238319)

* 定义:
>

    JavaScript 对象表示法（JavaScript Object Notation）
    是轻量级的文本数据交换格式,用于存储和交换文本数据领域，与xml类似但比xml更简洁，更快，更易解析
    JSON 的网络媒体类型是 application/json。

* 相比XML，JSON的优势如下：  
-- 没有结束标签，长度更短，读写更快  
-- 能够直接被 JavaScript 解释器解析  
-- 可以使用数组

* 两种数据结构：1.无序的对象结构；2.有序的数组结构

>
    {
      "name": "a",
      "friends": ["b", "c"]
    }

    [
      {a:1},{b:2}
    ]

* 方法：  

JSON.parse(json, replacer)  //把json解析为javascript对象  
>第二个参数，是一个函数(key, value)=>{}。此函数有两个参数：key 和 value，分别代表键和值。当传入一个 JSON 字符串后，JSON 的每一组键/值对都要调用此函数。该函数有返回值，返回值将赋值给当前的键key。
```
JSON.parse('{"a":1,"b":2}', (key,value)=>console.log(key,value))

输出：
a 1
b 2
```

JSON.stringify(obj, replacer, space) //把javascript对象转换为JSON字符串  
>第二个参数（数组形式| 函数） 

>>数组形式：指定需要转成字符串的属性，只对对象的属性有效，对数组无效。
```
JSON.stringify({"a":1,"b":2},['a'])

输出：
"{"a":1}"
```

>>函数：(key, value)=>{},每一组键/值对都会调用此函数，该函数返回一个值，作为键的值变换到结果字符串中，如果返回 undefined，则该成员被忽略。
```
JSON.stringify({"a":1,"b":2}, (key, value) => {
  console.log('key:',key);
  console.log('value:',value);
  return value;
})

输出：
// 第一个参数不是对象的第一个键值对，而是空字符串作为 key 值，value 值是整个对象的键值对：
key: 
value: {a: 1, b: 2}
key: a
value: 1
key: b
value: 2
```

>space第三个参数（数字| 字符串），用于增加返回的JSON字符串的可读性。
>>数字：表示每个属性前面添加的空格（最多不超过10个）；  
>>字符串：（不超过10个字符），该字符串会添加在每行前面。  



#### JSONP: 
是 json 的一种"使用模式"，是种跨域数据交互协议，可以让网页从别的域名（网站）那获取资料，即跨域读取数据


## <a name="BOM 浏览器对象模型">BOM 浏览器对象模型</a>
>
    BOM 是 Browser Object Model 的缩写，即浏览器对象模型。
    当一个浏览器页面初始化时，会在内存创建一个全局的对象，用以描述当前窗口的属性和状态，这个全局对象全局对象被称为浏览器对象模型，即BOM。
    BOM的核心对象就是window，window 对象也是BOM的顶级对象，其中包含了浏览器的 6个核心模块：

1. document - 即文档对象，渲染引擎在解析HTML代码时，会为每一个元素生成对应的DOM对象，由于元素之间有层级关系，因此整个HTML代码解析完以后，会生成一个由不同节点组成的树形结构，俗称DOM树，document 用于描述DOM树的状态和属性，并提供了很多操作DOM的API。
2. frames - HTML 子框架，即在浏览器里嵌入另一个窗口，父框架和子框架拥有独立的作用域和上下文。
3. history - 以栈(FIFO)的形式保存着页面被访问的历史记录，页面前进即入栈，页面返回即出栈。用于将窗口的历史浏览记录用文档和文档状态列表的形式表示。
4. location - 表示该窗口中当前显示的文档的URL.。
5. navigator - 用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。
6. screen - 提供了浏览器显示屏幕的相关属性，比如显示屏幕的宽度和高度，可用宽度和高度。

常用的对话框也属于挂载在window对象上的方法：alert(); confirm(); prompt();

## <a name="DOM 文档对象模型">DOM-文档对象模型</a>
>

  DOM 是 Document Object Model 的缩写，即 文档对象模型，是所有浏览器公共遵守的标准，DOM 将HTML和XML文档映射成一个由不同节点组成的树型结构，俗称DOM树。
  其核心对象是document，用于描述DOM树的状态和属性，并提供对应的DOM操作API。

#### DOM 被划分为1级、2级、3级，共3个级别：
1. 1级DOM -，由DOM核心与DOM HTML两个模块组成。DOM核心能映射以XML为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML通过添加HTML专用的对象与函数对DOM核心进行了扩展。
2. 2级DOM - 鉴于1级DOM仅以映射文档结构为目标，DOM 2级面向更为宽广。通过对原有DOM的扩展，2级DOM通过对象接口增加了对鼠标和用户界面事件（DHTML长期支持鼠标与用户界面事件）、范围、遍历（重复执行DOM文档）和层叠样式表（CSS）的支持。同时也对DOM 1的核心进行了扩展，从而可支持XML命名空间。
3. 3级DOM - 通过引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。


#### DOM事件
##### DOM事件的级别
* DOM0：不是W3C规范。
* DOM1：开始是W3C规范。专注于HTML文档和XML文档。
* DOM2：对DOM1增加了样式表对象模型
* DOM3：对DOM2增加了内容模型 (DTD 、Schemas) 和文档验证。

##### 事件流: 捕获事件流、冒泡事件流。
1. 捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。
2. 冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。

DOM事件流：捕获阶段 -> 目标阶段 -> 冒泡阶段  
DOM事件捕获流程:window > document > documentElement(html标签) > body > ...> 目标对象
>
    事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。window => document => html => body => ... => 目标元素

    事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

    事件冒泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。

所有的事件都会捕获但不是所有事件都会冒泡,例如submit事件就不会被冒泡。 


#### 事件模型：原始事件模型(DOM0级)、DOM2事件模型、IE事件模型。
1. DOM0级：没有事件流，事件一旦发生马上进行处理
>
    在html中直接指定属性值：\<button id="demo" type="button" onclick="doSomeTing()" />　　
    在js中: document.getElementsById("demo").onclick = doSomeTing()

    优点：所有浏览器都兼容
    缺点：逻辑与显示没有分离；相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面;  无法通过事件的冒泡、委托等机制

2. DOM2级：W3C制定的标准模型，现代浏览器（IE6~8除外）都已经遵循这个规范
>
                    //事件类型、需要执行的函数、是否捕获，(默认false)
    addEventListener(eventType,handler,useCapture)
    removeEventListener(eventType,handler,useCapture)

    addEventListener（'click', func)//事件不加on

3. IE事件模型：不支持事件捕获 . (IE11以下)
>
    attachEvent(eventType,handler) 
    detachEvent(eventType,handler)
    
    attachEvent("onclick",func)//事件加on

#### 自定义事件
https://www.jianshu.com/p/5f9027722204
>
    // new Event()定义事件；dispatchEvent()触发事件
    var look = new Event('look', {"bubbles":true, "cancelable":false});
    document.addEventListener('look', function(){
        console.log('lootEvent_document 触发');
    });
    document.dispatchEvent(look);

#### w3c事件与IE事件区别
事件流
>
    w3c事件流:  
    标准的浏览器事件流是 事件捕获流；
    从根文档(html)开始遍历所有子节点，如果目标事件的父节点设置为捕获时触发，则执行该事件，直到目标被执行，然后再事件冒泡(设置为捕获时触发的事件不再被执行)。

    IE事件流:  
    IE的事件流是 事件冒泡流，
    从目标事件被执行，然后再冒泡父节点的事件，直到根文档。

阻止默认行为：
>
    event = e || window.event //w3c | IE
    event.preventDefault() || event.returnValue = false

阻止冒泡：
>
    event = e || window.event //w3c | IE
    event.stopPropagation || event.cancelBubble = true // w3c  | IE
获取事件目标源：
>
    event = e || window.event
    event.target || event.srcElement // w3c  | IE

## <a name="mouseover、mouseout、mouseenter、mouseleave区别与联系">mouseover、mouseout、mouseenter、mouseleave区别与联系</a>
>
    mouseover/mouseout是标准事件，所有浏览器都支持；mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持

    mouseover/mouseout是冒泡事件；mouseenter/mouseleave不冒泡。需要为多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能

    不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件，对应 mouseout。
    
    只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件，对应 mouseleave。

## <a name="DOM常用属性">DOM常用属性</a>
* parentNode  // 当前元素的父节点对象
* children // 当前元素所有子元素节点对象，只返回HTML节点
* childNodes  // 当前元素所有子节点，包括文本，HTML，属性节点。（回车也会当做一个节点）
* firstChild  // 当前元素的第一个子节点对象
* lastChild  // 前元素的最后一个子节点对象

* nextSibling  // 当前元素的下一个同级元素 没有就返回null
* previousSibling // 当前元素上一个同级元素 没有就返回 null

* innerHTML // 元素的所有文本，包括html代码
* innerText // 元素的自身及子代所有文本值，只是文本内容，不包括html代码

* nodeType // 节点的类型,
>元素节点，2：属性节点，3：文本节点。
* nodeName // 节点节点名称，返回值为大写 （如：DIV，P）

## <a name="DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点?</a>
* 创建新节点
>
    document.createDocumentFragment()    //创建一个DOM片段
    document.createElement()   //创建一个元素节点
    document.createTextNode()   //创建一个文本节点
    document.createAttribute() // 创建一个属性节点,如class

* 添加、移除、替换、插入、克隆
>
    appendChild(childNode)  添加节点
    insertBefore(newChild,oldChild) 添加节点
    removeChild(childNode) 删除节点    
    replaceChild(newNode,oldNode）替换节点
    cloneNode(boolean)复制节点： newNode=oldNode.cloneNode(boolean) ; 
      参数可选复制节点,接受一个布尔值参数， true表示深复制（复制节点及其所有子节点），  false表示浅复制（复制节点本身，不复制子节点）;默认是false 。

* 查找节点
>
    document.querySelector() // 查找第一个 （id,className, tgaName)
    document.querySelectorAll() //查找所有 （id,className, tgaName)
    document.getElementById()    //通过元素Id，唯一性
    document.getElementsByClassName() //通过元素classname
    document.getElementsByTagName()    //通过标签名称
    document.getElementsByName()  //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)

* 操作属性的方法
>
    getAttribute(attrName)  //获取属性值
    setAttribute(attrName,attrValue)  //设置属性
    removeAttribute(attrName)  //移除属性
    hasAttribute(attrName) //判断是否存在该属性
    getAttributeNode(attrName) // 获取属性节点
    setAttributeNode(attrName) // 设置属性节点

## <a name="获取元素属性">获取元素属性innerHTML、outerHTML、innerText 、outerText、value</a>
>
    <div class="box">
      000
      <p class="1">11</p>
      <!-- 注释 -->
      <p class="2">22</p>
    </div>


* innerHTML()

在读模式下，innerHTML 返回其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。
>
    let box = document.querySelector('.box')
    box.innerHTML
    返回
      000
      <p class="1">11</p>
      <!-- 注释 -->
      <p class="2">22</p>

在写模式下，innerHTML 会根据指定的值创建新的 DOM 树，然后用这个 DOM 树完全替换调用元素原先的所有子节点。
>   
    let cnt = '<p class="2">2222</p>'
    box.innerHTML = cnt
    替换div.box里的所有内容为 cnt
![innerHTML](/img/innerHTML.png) 

* outerHTML

在读模式下，outerHTML 返回自身及其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。
>
    let box = document.querySelector('.box')
    box.outerHTML
    返回
      <div class="box">
        000
        <p class="1">11</p>
        <!-- 注释 -->
        <p class="2">22</p>
      </div>

在写模式下，outerHTML 会根据指定的 HTML 字符串创建新的 DOM 子树完全替换调用元素。
>
    let cnt = '<p>outerHTML</p>'
    box.outerHTML = cnt 
![outerHTML](/img/outerHTML.png) 


* innerText

在读模式下，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来
>
    box.innerText
    返回
      000

      11

      22

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
>
    box.innerText = '<p>innerText</p>' 
![innerText](/img/innerText.png) 

* outerText

在读模式下，与 innerText 完全一样 
>
    box.outerText
    返回
      000

      11

      22

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
>
    box.outerText = '<p>outerText</p>' 

![outerText](/img/outerText.png) 

* value  
可设置或返回文本框的值
>
    <input type="text" class="ipt" value="111">
    document.querySelector('.ipt').value
    document.querySelector('.ipt').value = 222

## <a name="变量、函数声明提升">变量、函数声明提升</a>
>
    (1) 变量声明提升：变量申明在进入执行上下文就完成了。
    只要变量在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

    (2) 函数声明提升：执行代码之前会先读取函数声明，意味着可以把函数申明放在调用它的语句后面。
    只要函数在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

    (3) 变量or函数声明：函数声明会覆盖变量声明，但不会覆盖变量赋值。
        同一个名称标识a，即有变量声明var a，又有函数声明function a() {}，不管二者声明的顺序，函数声明会覆盖变量声明，也就是说，此时a的值是声明的函数function a() {}。注意：如果在变量声明的同时初始化a，或是之后对a进行赋值，此时a的值为变量的值。因为变量、函数声明提升，赋值在其之后才运行；如: var a = 1; function a() { return true; } console.log(a); ==> 1

<b>let 命名不存在变量提升</b>

### 函数声明，函数形参，变量名 同名时优先级：
函数形参 > 函数声明 > 变量名
>

    var foo = {n:1};
    (function foo(foo) {
        var foo;
        console.log(foo.n);//1 --形参
        foo.n=3; // --改变形参的n赋值
        var foo = {n:2};//重新声明定义foo 
        console.log(foo.n);// 2
    })(foo); //存入全局的foo变量 作为 形参
    console.log(foo.n); //3

## <a name="立即执行函数">立即执行函数IIFE</a>
定义:
>
    1、声明一个匿名函数
    2、马上调用这个匿名函数。
    (function(){})()
    (function(){}())
    +function(){}()
    ....

作用：创建一个独立的作用域。

好处：
>
    防止变量弥散到全局，以免各种js库冲突。隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。利用立即执行特性，返回需要的业务函数或对象，避免每次通过条件判断来处理

场景：一般用于框架、插件等场景


## <a name="对象属性">对象属性configurable enumerable writable,value,get,set</a>

数据属性 4 个特性: configurable(可配置),enumerable(可枚举),writable(可修改),value(属性值)

访问器属性 2 个特性: get(获取),set(设置)

get,set 与 wriable,value 是互斥的,如果有交集设置会报错

### configurable可配置

* 能否使用delete
* 能否修改属性特性
* 能否修改访问器属性
* 值为false为不可重新定义
* 默认值为true 

简单的说 ，设置这个为false之后，就不能删除这个属性或修改这个属性（属性值不影响），这个属性就是这个对象固有的，删除不了
>

    var obj = Object.create({},{
        "a":{
          value :1,
          configurable :false,
          enumerable: true,
          writable: true
        },
    });

    delete obj.a// 删除失败，普通模式没有提示或错误，严格模式会有TypeError
    obj.a = 2;
    console.log(obj.a);//正常使用，输出结果为 2


### enumerable可枚举

对象属性是否可通过for-in循环，flase为不可循环，默认值为true 
简单的说，当你想用 for-in 遍历这个对象的时候，正常会输出每一个属性，但当你设置false时，这个属性就不会被for-in 遍历读到
>    

    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    obj = Object.create(obj, {
        "a": {
            value: 1,
            configurable: true,
            enumerable: false,
            writable: true
        }
    });

    for(var i in obj) {
        console.log(i); //输出b，c 不会输出a，a已经设置不被枚举
    }

### writable可修改

对象属性是否可修改,flase为不可修改，默认值为true 

设置不可修改后，可以理解为常量，不能对属性值进行修改
>

    var obj = Object.create({},{
        "a":{
          value :1,
          configurable :true,
          enumerable :true,
          writable:false
        },
    });
    obj.a = 2;//普通模式不会抛异常，严格模式会抛出TypeError
    console.log(obj.a);//输出1 ，不可被修改

### value属性值
任何属性的值都保存在value中，哪怕值是一个函数。

### get获取
对读取属性进行额外操作的函数

### set设置
对设置属性进行额外操作的函数

```js
var spy = {
	sex: 'male',
};
Object.defineProperty(spy,"sex",{
	get: function () {
		console.log("get");
		return this.name;
	},
	set: function (val) {
    console.log("set");
		return val;
	}
})
console.log(spy.sex) //调用get函数
console.log(spy.sex = "feme"); //调用set函数

```

## <a name="delete">delete</a>
[你确定你会使用 delete 吗？](https://juejin.im/post/5e05bf71e51d4557ea02c1e8)

* configurable: false时属性不可配置时，非严格模式返回 false ，严格模式抛出语法错误  
* delete 不存在的属性时，依然返回 true ，只是 delete 语句没什么作用
* delete 只对对象自身属性起作用，不能删除原型链上的属性
* 使用 var 、let、const  声明的属性都是不可配置的， delete 不能删除
```js
var obj = {};
Object.defineProperty(obj, 'name', {configurable: false});
console.log(delete obj.name);  //   false
console.log(delete obj.a);  // true
console.log(obj);  // {name: undefined}
```

## <a name="typeof instanceof">typeof 、instanceof 、in</a>
typeof 
>
    typeof 能够正确的判断基本数据类型，但是除了 null, typeof null输出的是对象
    在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。

|  | typeof |
:-:| :-:|
| Boolean    | "boolean"
| Number     | "number"
| String     | "string"
| Object     | "object"
| Null       | "object"
| Undefined  | "undefined"
| Symbol     | "symbol"
| Function   | "function"


instanceof
>
    语法：object instanceof constructor
        （要检测的对象）    （某个构造函数）
    描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

>  
    instanceof 是通过原型链判断的，判断实例对象在其原型链中是否存在一个构造函数的 prototype 属性。  
    A instanceof B, 在A的原型链中层层查找，是否有原型等于 B.__proto__，如果一直找到A的原型链的顶端(null;即 Object.prototype.__proto__),仍然不等于B.prototype，那么返回false，否则返回true.


>
    function P(){}
    p = new P()
    console.log(p instanceof P) //true    

in
>
    操作符会检查属性是否存在对象及其 [[Prototype]] 原型链中。检查的是某个属性名是否存在
    var obj = {a:1}
    Object.prototype.b = 2
    'a' in obj // true
    'b' in obj // true


    对于数组来说，4 in [2, 4, 6] 结果返回 false，因为 [2, 4, 6] 这个数组中包含的属性名是0，1，2 ，没有4。


hasOwnProperty()
>
    只会检查属性是否存在对象中，不会向上检查其原型链。
    var obj = {a:1}
    Object.prototype.b = 2
    obj.hasOwnProperty('a') // true
    obj.hasOwnProperty('b') // false

    所有普通对象都可以通过 Object.prototype 的委托来访问 hasOwnProperty(...)，但是对于一些特殊对象（ Object.create(null) 创建）没有连接到 Object.prototype，这种情况必须使用 Object.prototype.hasOwnProperty.call(obj, "a")，显示绑定到 obj 上。


## <a name="异步编程有哪几种方法">异步编程有哪几种方法</a>
"同步模式"：后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；

"异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。


### 回调函数
>
    如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
    　　function f1(callback){
    　　　　setTimeout(function () {
    　　　　　　callback();// f1的任务代码
    　　　　}, 1000);
    　　}
    执行代码就变成下面这样：f1(f2);
 
优点：简单、容易理解和部署


缺点：
回调地狱，不能用 try catch 捕获错误，不能 return；


### 事件监听
>

    采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
    $("#clickity").on("click", function (e) { console.log("xxxxx");}

    
优点：  
比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。

缺点：  
整个程序都要变成事件驱动型，运行流程会变得很不清晰。

### 发布订阅模式

发布订阅模式，有一个事件池，用来给你订阅(注册)事件，当你订阅的事件发生时就会通知你，然后你就可以去处理此事件

[designMode](/details/designMode#发布订阅模式.md)

### Promises
>

    function fn(arg) {
      return new Promise((resolve, reject) => {
        if(true) {
          resolve(arg())
        } else {
          reject('err')
        }
      })
    }
    function fn1(){
      console.log('fn1')
      return 'fn1'
    }
    function fn2(){
      console.log('fn2')
      return 'fn2'
    }
    fn(fn1).then(fn2).catch((err) => {
      console.log('err:',err)
    });

    

    * 一旦状态改变，就不再变化，任何时候都可以得到这个结果。

每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数

### Generator

### async await
>
    async function asyncFuns() {
      await fn1()
      await fn2()
      await fn3()
    }

  优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题

  缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

>
    let a = 0
    let b = async () => { 
      a = a + await 10
      console.log('2', a) // -> '2' 10
    }
    b()
    a++
    console.log('1', a) // -> '1' 1

    首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，因为 await 内部实现了 generator ，generator会保留堆栈中东西，所以这时候a = 0被保存了下来；
    因为 await 是异步操作，后来的表达式不返回 Promise 的话，就会包装成 Promise.reslove(返回值)，然后会去执行函数外的同步代码；



## <a name="事件委托">事件委托(代理)delegate</a>

事件注册在父级元素上，依靠事件冒泡机制与事件捕获机制，子级元素的事件将委托给父级元素。

优点：
>
    事件动态绑定，可以减少事件注册数量，节约内存开销，提高性能。

缺点：
>
    事件委托基于冒泡，对于不冒泡的事件不支持。

    层级过多，冒泡过程中，可能会被某层阻止掉。

    理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。

    把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。


对js动态添加的子元素可自动绑定事件
>
    原生  未兼容IE(IE事件attachEvent)
    function agent(){
      let ul=document.getElementsByTagName("ul")[0];
      ul.addEventListener('click',function(e){
        let event = e || window.event;
        let target= event.target || event.srcElement;
        if(target.tagName.toLowerCase() =='li'){
          alert(event.target.innerHTML);
        }
      });
    };

> 
    jquery  
    $("ul").delegate("li", "click", function(){
      console.log($(this),$(this).html());
    });

## <a name="闭包">闭包</a>
>
    function a(i){
      return function(){
        return i+1
      }
    }

* 闭包：是指有权访问其他函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

当一个内部函数被其外部函数之外的变量引用时，就形成了一个闭包。

* 闭包的特性：
1. 函数嵌套
2. 函数内部可以引用外部的参数和变量
3. 参数和变量不会被垃圾回收机制回收

* 闭包作用域链通常包括三个部分：
1. 函数本身作用域。
2. 闭包定义时的作用域。
3. 全局作用域。

* 闭包优点：
1. 希望一个变量长期驻扎在内存中
2. 避免全局变量的污染
3. 私有成员的存在

>
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
          console.log(new Date, i);
      }, 1000);
    }
    console.log(new Date, i);
   立即输出5
   大约一秒后输出5个5

## <a name="内存泄漏">内存泄漏</a>
内存泄漏:是指一块被分配的内存在使用完毕后未释放，直到浏览器进程结束。
指任何对象在您不再拥有或需要它之后仍然存在。浏览器中采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，因此会产生内存泄漏。

1. 意外的全局变量引起的内存泄漏（变量未声明，通过this创建,）
    >
        function foo(arg) {
          bar = "this is a hidden global variable";
        }
2. 闭包引起的内存泄漏
    >
        var a = 1 
        var b = function(){ 
          return function (){return 1+a}
        }
3. 没有清理的DOM元素引用
4. 被遗忘的定时器或者回调
    >
        setInterval(function() {
            var node = document.getElementById('Node');
            if(node) {
                // 处理 node 和 someResource
                node.innerHTML = JSON.stringify(someResource));
            }
        }, 1000);
5. 子元素存在引用引起的内存泄露
6. console.log   在传递给 console.log的对象是不能被垃圾回收 ，因为在代码运行之后需要在开发工具能查看对象信息。所以最好不要在生产环境中 console.log任何对象。


如何避免内存泄漏
>
    减少不必要的全局变量，使用严格模式避免意外创建全局变量。
    在你使用完数据后，及时解除引用(闭包中的变量，dom引用，定时器清除)。
    组织好你的逻辑，避免死循环等造成浏览器卡顿，崩溃的问题。

## <a name="new的实现原理">new的实现原理</a>
new
* 创建一个空对象，并将这个空对象的 __proto__，指向构造函数的原型(prototype)对象 ，使其继承构造函数原型上的属性。  

* 改变构造函数内部 this 指针为这个对象(如果有传参，需要将参数也导入构造函数)  

* 执行构造函数中的代码，使其具有构造函数 this 指针的属性。  

* 如果构造函数中没有返回其它对象(tips：不包括null)，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。

new 操作返回的实例对象具有两个特征：
>
    具有构造函数中定义的 this 指针的属性和方法  
    具有构造函数原型上的属性和方法

```js
function Person(x){
  this.name = x
}
Person.prototype.say=()=>{console.log(this.name)}
var p = new Person('I am P')

console.log(p) // Person {name: 'I am P'}
```
构造函数return一个对象时
```js
function Person(x){
  this.name = x
  return {name:1}
}
Person.prototype.say=()=>{console.log(this.name)}
var p = new Person()

console.log(p) // {name: 1}
```

## <a name="原型、原型链、原型继承">原型、原型链、原型继承</a>
[前端面试必备 | 古怪的原型（鸡生蛋还是蛋生鸡）（原型篇：中）](https://juejin.im/post/5dff3e186fb9a016091dfa6a)

### 原型(prototype)：
>
    函数本身就是个包含方法与属性的对象，每个函数都有一个prototype属性,每个对象都有个__proto__属性指向其构造函数的prototype,称为原型。可通过原型为对象扩展属性，实现继承

### 原型链：
>
    当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，就从其原型找这个属性，原型对象也是对象也拥有原型，一层层寻找，直至null（即Object.prototype.__proto__）从而形成了所谓的“原型链”。

查找自身属性（不查找原型链）：obj.hasOwnProperty(prop)

* 不要再使用 __proto__
1. __proto__属性没有写入 ES6 的正文，而是写入了附录。

2. 原因是它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。

获取对象的原型方法: Object.getPrototypeOf(target) 替代  target.__proto__

* __proto__,prototype区别：
>
    js里所有的对象都有__proto__属性(对象，函数)，可称为隐式原型，指向构造该对象的构造函数的原型(prototype)。

    只有函数function才具有prototype(显示原型)属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。

    原型对象有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。


* 为什么只有函数有prototype属性
>
    JS通过 new来生成对象，但是仅靠构造函数，每次生成的对象都不一样。

    有时候需要在两个对象之间共享属性，由于JS在设计之初没有类的概念，所以JS使用函数的prototype来处理这部分需要被共享的属性，通过函数的prototype来模拟类：

    当创建一个函数时，JS会自动为函数添加 prototype属性，值是一个有 constructor的对象。

* 
>
    function A(){}
    var a = new A()

    //a是否为A的实例  
    a instanceof A // true

`实例的__proto__属性（原型）等于其构造函数的prototype属性`  
a.__proto__ === A.prototype // true  

`函数的prototype对象的constructor属性，指向其本身`  
A.prototype.constructor === A === a.constructor //true

`原型链的终点：Object.prototype`  
Object.getPrototypeOf(Function.prototype) === Object.prototype  //true

Object.getPrototypeOf(Object.prototype) === null //true

---
<!-- `Object是Function的实例` -->
Object.getPrototypeOf(Object) === Function.prototype //true

<!-- `Function的prototype是 Object的实例` -->
Object.getPrototypeOf(Function.prototype) === Object.prototype //true


Object instanceof Function // true 

Object instanceof Object // true 

Function instanceof Object // true 

Function instanceof Function // true



构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型、null、undefined等)会忽而略返回值;如果return的是对象，则返回该对象。

![prototype](/img/prototype0.png)
![prototype](/img/prototype.png)

每个函数的 prototype 属性都会有一个 constructor 属性，这个属性都是指向的函数自己。对于 Object 函数，prototype 有一个 constructor 属性指回了 Object 函数。
`Object.prototype.constructor === Object //true`




### 原型继承：
原型中的成员可以被和其相关的对象共享这一特性，可以实现继承。这种实现继承的方式，就叫做原型继承。

[继承方式](details/inherit.md)


## <a name="创建对象的几种方式">创建对象的几种方式</a>

对象字面量：
>p = {name:'jack'}

new Object():  
>p = new Object({name:'jack'})

Object.create:
>
    Object.create 允许你创建一个对象，只要该对象上的属性查找失败，它就可以查询另一个对象以查看该另一个对象是否具有该属性。
    p = Object.create({name:'jack'}) //属性在原型上 
    p = Object.create({},{name:{value:'jack'}}) //属性在自身上


构造函数：
>

    function P(name){this.name = name}
    p = new P('jack')


## <a name="作用域、作用域链、执行上下文">作用域、作用域链、执行上下文(执行环境)</a>
#### 作用域：
作用域就是变量和函数的可访问范围，控制着变量和函数的可见性与生命周期，

作用域分类：
>
    全局作用域:
    局部作用域:
      函数作用域
      块级作用域
      eval作用域

#### 作用域链：
当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

注意：作用域链的顶端是全局作用域，作用域链在变量定义时就已经创建了。

JavaScript中的函数采用静态作用域，也称词法作用域。当在执行函数调用时，不管何时何地执行函数，其中的变量在函数定义时就已经决定了，函数会从自身作用域节点开始，沿着作用域链向上访问变量的值。


#### 执行上下文（Execution Context）：
[深入理解JavaScript执行上下文和执行栈](https://segmentfault.com/a/1190000018550118?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com&share_user=1030000000178452)

[执行上下文与执行栈，变量对象](https://github.com/ZengLingYong/Blog/issues/1)

执行上下文可以理解为当前代码被解析和执行时所在环境，  
在执行JS程序时，每遇到一段JS可执行代码，都会创建一个可执行上下文。

分类：
>
    全局代码、
    函数代码、
    eval代码

    一段JS程序必定会产生多个执行上下文，而JavaScript引擎则是以堆栈的形式来对其进行管理，也就是常说的函数调用栈。  
    栈底是全局上下文，栈顶则是当前正在执行的上下文.

特性：
>
    单线程
    同步执行
    只有一个全局上下文
    可有无数个函数上下文
    每个函数调用都会创建一个新的执行上下文，哪怕是递归调用


生命周期:

* 创建阶段（函数刚被调用但未执行的时候）:
>

    创建变量对象
      函数环境会初始化创建Arguments对象（并赋值）
      函数声明（并赋值）
      变量声明，函数表达式声明（未赋值）
    确定this指向  
        this的值是在执行的时候才能确认，定义的时候不能确认.因为this是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候  
    创建作用域链

* 执行阶段：
>

    变量对象赋值
      变量赋值
      函数表达式赋值
    调用函数
    按顺序执行其它代码


一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入执行栈的顶部。  
每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行完成后，当前函数的执行上下文出栈，并等待垃圾回收。

浏览器的JS执行引擎总是访问栈顶的执行上下文。  
全局上下文只有唯一的一个，它在浏览器关闭时出栈。

## <a name="this">this理解</a>
[this](/details/this.md)

## <a name="apply call bind">apply call bind</a>
https://github.com/yygmind/blog/issues/22
>

    都是用来改变函数的this对象的指向的；

    第一个参数都是this要指向的对象，也就是想指定的上下文；
    都可以利用后续参数传参；

    apply、call则是立即调用；bind是返回对应函数，便于稍后调用；
      foo.apply(obj,[arg1,arg2]),foo.call(obj,arg1,arg2)


把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认规则。

下面两种情况下会传入null：

使用apply(..)来“展开”一个数组，并当作参数传入一个函数  
bind(..)可以对参数进行柯里化（预先设置一些参数）
>
    function foo(a, b) {
        console.log( "a:" + a + "，b:" + b );
    }

    // 把数组”展开“成参数
    foo.apply( null, [2, 3] ); // a:2，b:3

    // 使用bind(..)进行柯里化
    var bar = foo.bind( null, 2 );
    bar( 3 ); // a:2，b:3 

## <a name="实现apply call bind">实现apply call bind</a>
>
    let person = {
      name: 'Abiel'
    }
    function sayHi(age,type) {
      console.log(this.name, age, type);
    }

call
>
   
    Function.prototype.newCall = function(context, ...parameter) {
      if (typeof context === 'object' || typeof context === 'function') {
          context = context || window
      } else {
          context = Object.create(null)
      }
      let fn = Symbol()
      context[fn] = this
      const res =context[fn](...parameter)
      delete context.fn;
      return res
    }

    sayHi.newCall(person, 25, 'newCall');
    sayHi.call(person, 25, 'call');

apply
>
    Function.prototype.newApply = function(context, parameter) {
      if (typeof context === 'object' || typeof context === 'function') {
        context = context || window
      } else {
        context = Object.create(null)
      }
      let fn = Symbol()
      context[fn] = this
      return res=context[fn](...parameter);
    }

    sayHi.newApply(person, [25, 'newApply']); 
    sayHi.apply(person, [25, 'apply']);

bind
>
    Function.prototype.myBind = function (context,...innerArgs) {
      var me = this
      return function (...finnalyArgs) {
        return me.call(context,...innerArgs,...finnalyArgs)
      }
    }

    sayHi.myBind(person, 25)('myBind')
    sayHi.bind(person, 25)('bind')

## <a name="公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>

>
    function P(age){
      var name = '私有变量';
      var fun = function(){console.log('私有方法')}

      this.age = age //实例变量
      this.func = function(){console.log('实例方法')}
    }
    P.fun = function(){console.log('静态方法')}
    P.age = '静态变量'
    
    console.log(P.age,P.fun())


私有变量和函数：
>
    在函数内部定义的变量和函数，如果不对外提供接口，外部是无法访问到的，也就是该函数的私有的变量和函数。


    
静态变量和静态函数：
>
    当定义一个函数后通过点号 “.”为其添加的属性和函数，通过对象本身仍然可以访问得到，但是其实例却访问不到


实例变量和实例函数：

1. 公有(原型)方法、属性：//必需先实例化对象
>
    function User(){
      this.age = 26;//  公有属性
      this.getAge = function(){}//公有方法
    }
    User.prototype.getName=function(){}//公有方法
    var user = new User();
 
2. 私有方法、属性：//只能在函数内部直接调用
>
    function User(age){
      var age = age;//私有属性
      function getAge(){}//私有方法
    }


3. 静态方法、属性：无需实例化就可以调用的方法、属性
>
    //静态方法无法调用公有属性、公有方法、私有方法、私有属性、特权方法和原型属性
    //对象的实例不能调用对象的静态方法，只能调用实例自身的静态属性和方法
    function User(){}
    User.age = 26;//静态属性
    User.getAge =function(){} //静态方法
    
4. 特权方法：
>
    //用来访问私有变量和私有方法的 公有方法
    function User(age){
      var age = age;//私有属性
      this.getAge = function(){ //特权方法
        return age; //特权方法调用私有属性
      }
    }
    var user = new User(26);


## <a name="继承方式">继承方式</a>
[inherit.md](details/inherit.md)

## <a name="设计模式">设计模式</a>
[designMode](/details/designMode.md)

## <a name="promise">promise</a>
[promise](/details/promise.md)

## <a name="async、await">async、await</a>
https://segmentfault.com/a/1190000007535316

https://lidaguang1989.github.io/2018/04/async-await/
>

## <a name="setTimeout、Promise、Async/Await 的区别">setTimeout、Promise、Async/Await 的区别</a>
事件循环中分为宏任务队列和微任务队列。

其中settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行；

Promise本身是同步的立即执行函数；Promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；

async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。

[事件执行机制](/details/EventLoop.md)


## <a name="class类">ES6 class类</a>
[class类](/details/class类.md)

## <a name="深，浅拷贝">深，浅拷贝</a>
[如何写出一个惊艳面试官的深拷贝](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)

[浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e)



### 浅拷贝： 浅拷贝只复制指向某个对象的指针，即复制对象地址
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了，就会影响到另一个对象。

* 一层深拷贝

    Object.assign(a, b, c) 第一个参数是目标对象，后面的参数都是源对象
    是一种可以对非嵌套对象进行深拷贝的方法,如果对象中出现嵌套情况,那么其对被嵌套对象的行为就成了普通的浅拷贝.

    b = {...a,...b} //扩展运算符

    b = a.slice(0)

    b = a.concat([])



### 深拷贝：开辟新的栈  
将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象



* [函数库lodash](https://www.lodashjs.com/)  [CDN](https://www.bootcdn.cn/lodash.js/)  
提供_.cloneDeep深拷贝方法

*  JSON.parse(JSON.stringify(obj))
>

    只能正确处理的对象只有 Number, String, Boolean, Array，扁平对象 即那些能够被json直接表示的数据结构。
    会忽略 undefined、会忽略 symbol、NaN会转化为null。
    不能处理循环引用的对象,报错。
    不能正确处理new Date()。(转换结果不正确)
    不能处理正则。(直接解析为空对象{})
    不能序列化函数。

    循环引用情况：
    let obj = {
        a: 1,
        b: {
          c: 2,
        }
    }
    obj.a = obj.b;
    obj.b.c = obj.a;

    let b = JSON.parse(JSON.stringify(obj));
    //Uncaught TypeError:Converting circular structure to JSON

    序列化函数：通过操作JSON.parse,JSON.stringify的第二个参数
    let obj = {
        a: 1,
        func:function(){return this.a}
    }

    let b = JSON.parse(JSON.stringify(obj, function(key, val) {
      if (typeof val === 'function') {
        return val + '';
      }
      return val;
    }),function(key, val){
      if(val.indexOf && val.indexOf('function')>-1){
        return eval("(function(){return "+ val +" })()")
      }
      return val;
    });
    console.log(obj,b,b.func())    

* 
>
    //定义检测数据类型的功能函数
    function checkedType(target) {
      return Object.prototype.toString.call(target).slice(8, -1)
    }
    //实现深度克隆---对象/数组
    function clone(target) {
      //判断拷贝的数据类型
      //初始化变量result 成为最终克隆的数据
      let result, targetType = checkedType(target)
      if (targetType === 'Object') {
        result = {}
      } else if (targetType === 'Array') {
        result = []
      } else {
        return target
      }
      //遍历目标数据
      for (let i in target) {
        //获取遍历数据结构的每一项值。
        let value = target[i]
        //判断目标结构里的每一值是否存在对象/数组
        if (checkedType(value) === 'Object' ||
          checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
          //继续遍历获取到value值
          result[i] = clone(value)
        } else { //获取到value值是基本的数据类型或者是函数。
          result[i] = value;
        }
      }
      return result
    }


>
    var obj = {
      nl: null,
      und: undefined,
      number: 1,
      bool: true,
      str: 'str',
      arr: [],
      obj: {a: 'obj a', b: {arr: [1, 2, 5]}},
      func: function(){console.log(this.name)},
      error: new Error('my error'),
      date: new Date(),
      reg: /[1-9]/,
      symbol: Symbol('syb'),
    }
    let obj1 = deepClone(obj);
    obj1.name= 'obj1'
    obj1.obj.a= 'obj1 a'
    obj1.obj.b.arr.push('obj1')
    console.log(obj);
    console.log(obj1);



## <a name="js延迟加载：defer,async">js延迟加载：defer,async</a>
async 属性 
>
    <script src="file.js" async></script>
    让js并行加载, 
    加载完成后立即执行，
    脚本执行顺序和加载顺序无关。它们将在onload 事件之前完成。对于支持async属性的浏览器，动态插入的外链脚本, 相当于默认具有async=true；

defer 属性 
>
    <script src="file.js" defer></script>
    让js并行加载, 
    在页面渲染完后才会执行，
    脚本按加载的顺序执行


可以同时使用 async 和 defer。

* 动态创建script
>
    function downloadJSAtOnload() {
      var element = document.createElement("script");
      element.src = "defer.js";
      document.body.appendChild(element);
    }
    if (window.addEventListener) {
      window.addEventListener("load",downloadJSAtOnload, false);
    } else if (window.attachEvent){
      window.attachEvent("onload",downloadJSAtOnload);
    } else{
      window.onload =downloadJSAtOnload;
    }


## <a name="重绘和回流">[重绘和回流](https://github.com/chenjigeng/blog/issues/4)</a>
`回流必将引起重绘，而重绘不一定会引起回流。`

`回流`：当页面中的部分或者全部因为元素的规模尺寸，布局，隐藏等改变而需要重新构建,这就叫做回流。

`重绘`：当页面的中的可见性发上变化而不影响布局时，比如：背景颜色吗，文字颜色等，这样形成了重绘

会引起重绘和回流的操作如下：
>
    添加、删除元素(回流+重绘)
    隐藏元素：display:none(回流+重绘);visibility:hidden(重绘)
    移动元素，比如改变top,left的值，或者移动元素到另外一个父元素中。(重绘+回流)
    对style的操作(对不同的属性操作，影响不一样)
    激活 CSS 伪类，比如 :hover （重绘+回流）
    元素尺寸改变(边距、填充、边框、宽度和高度）（重绘+回流）
    用户的操作，比如改变浏览器大小，改变浏览器的字体大小等(重绘+回流)

    transform 操作不会引起重绘和回流，是一种高效率的渲染。因为transform属于合成属性，进行动画时将会创建一个合成层，在一个独立的层中进行渲染。


由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。

常用且会导致回流的属性和方法 (浏览器会立刻清空队列：)

>

    clientWidth、clientHeight、clientTop、clientLeft

    offsetWidth、offsetHeight、offsetTop、offsetLeft

    scrollWidth、scrollHeight、scrollTop、scrollLeft

    width、height

    getComputedStyle()、getBoundingClientRect()


避免方法：
>
    

    尽量使用 class 进行样式修改，而不是直接操作样式
    使用 transform 替代 top|left...
    使用 visibility 替换 display: none 
    避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点��级过多。
    尽可能在DOM树的最末端改变class。可以限制了回流的范围，使其影响尽可能少的节点
    动画效果设置position为absolute，fixed
    避免使用table布局
    避免使用CSS表达式

    减少DOM操作
    js避免频繁读取会引发回流/重绘的属性
    DOM离线处理，处理完后一起更新,如将其至于内存或设置display:none。
      a) 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
      b) 使用display:none技术，只引发两次回流和重绘；
      c) 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘


## <a name="模块化">模块化CommonJS AMD CMD ES6modules</a>
[参考](https://juejin.im/post/5c17ad756fb9a049ff4e0a62#comment)

把复杂的文件分成一个个独立的模块，比如js文件，分成独立的模块之后有利于代码的重用和维护，但是这样又会引来模块与模块之间的依赖问题

* IIFE
>
    使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。

    (function(){
    })()

* CommonJS
>
　  CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或者 module.exports 来导出需要暴露的接口

    一个文件就是一个模块，拥有单独的作用域
    普通方式定义的 变量、函数、对象都属于该模块内
    通过require来引入模块
    通过exports和module.exports来暴露模块中的内容

>
    所有代码都运行在模块作用域，不会污染全局作用域；

    模块可以多次加载，但只会在第一次加载的时候运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果；

    模块的加载顺序，按照代码的出现顺序是同步加载的;


* AMD
>
    AMD规范则是非同步加载模块，允许指定回调函数
    在使用 require.js 的时候，必须提前加载所有模块。

    API：
    require([module], callback)
    define(id, [depends], callback)

* CMD 
>
    通过按需加载的方式，而不是必须在模块开始就加载所有的依赖。
    库：sea.js

* ES6modules
>
    import 引入模块，//动态加载只有在用到的时候才会去加载
    exprot 导出模块
      export 可以导出的是一个对象中包含的多个属性，方法。(在一个文件或模块中可存在多个)
      export default  只能导出一个可以不具名的对象。(在一个文件或模块中仅可存在一个)

    import、export时可以使用as关键字重命名
>
    export {
      a,
      b as bbb
    }

    export default a

    import {a, b} from './index'

    除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
    import  * as name  from './index'


export：规定模块对外接口
>
    默认导出：export default Person(导入时可指定模块任意名称，无需知晓内部真实名称)
    单独导出：export const name = "Bruce"
    按需导出：export { age, name, sex }(推荐)
    改名导出：export { name as newName }

import：导入模块内部功能
>
    默认导入：import Person from "person"
    整体导入：import * as Person from "person"
    按需导入：import { age, name, sex } from "person"
    改名导入：import { name as newName } from "person"
    自执导入：import "person"
    复合导入：import Person, { name } from "person"


复合模式：export命令和import命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量
>
    默认导入导出：export { default } from "person"
    整体导入导出：export * from "person"
    按需导入导出：export { age, name, sex } from "person"
    改名导入导出：export { name as newName } from "person"
    具名改默认导入导出：export { name as default } from "person"
    默认改具名导入导出：export { default as name } from "person"


## <a name="垃圾回收机制">垃圾回收机制</a>
  Javascript具有自动垃圾回收机制(GC:Garbage Collecation)。

  原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

1. 标记清除
>
    在函数声明一个变量的时候，就将这个变量标记为“进入环境”。从逻辑上讲，永远都不能释放进入环境的变量作占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。
    垃圾回收器在运行时候会给存储在内存中中的所有变量都加上标记。然后它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。在此之后再被标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内存清楚工作，销毁那些带标记的值并回收他们所占用的内存空间。

    function test(){ 
      //a,b被标记 ，进入环境 
      var a = 10 ; 
      var b = 20 ; 
    } 
    test(); //执行完毕 之后 a、b又被标离开环境，被回收。

2. 引用计数法
>
        引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。

        但是很重要的一点是当遇到循环引用的时候，函数的引用次数就不会为0，所以不会被垃圾回收器回收内存，会造成内存泄露

    function test(){ 
      var a = {} ; //a的引用次数为0 
      var b = a ; //a的引用次数加1，为1 
      var c =a; //a的引用次数再加1，为2 
      var b ={}; //a的引用次数减1，为1 
    }

如何减少JavaScript中的垃圾回收



## <a name="面向过程和面向对象的异同">面向过程和面向对象的异同？</a>
https://zhuanlan.zhihu.com/p/55064276

面向过程：
>
    把复杂业务划分为若干个“Procedure、Function”。
    彻底的理解现实场景，理清其中的逻辑关系和运行顺序，划分为若干个小的处理单元——落实为function

    万物皆对象，把一个对象抽象成类,具体上就是把一个对象的静态特征和动态特征抽象成属性和方法,也就是把一类事物的算法和数据结构封装在一个类之中,程序就是多个对象和互相之间的通信组成的.

面向对象的思维方式：
>
    
    首先观察现实场景，发现其中有哪些角色和对象，赋予这些对象以属性和行为，让他们彼此发消息，从而构建整个大的应用场景。

面向过程就是关注实现需求的第个步骤，任何的工作都需要自己去做。
面向对象就是什么事都交给能做这件事的对象去做。

对象(Object)：现实应用/场景中的某个事物在程序中的体现。对象是无特定顺序的属性的集合。

面向对象的程序需要具备的三个/四个基本特征：
>
    封装(capsulation)：把零散的多个变量组成一个整体
    继承(inheritance)：子对象自动获得父对象的所有特征
    多态(polymorphism)：一个方法根据参数的不同可以运行出不同的结果
    聚集(aggregation)：多个对象可以聚合为一个更大的对象
      JavaScript具备上述四种能力。
      Object  =  Property*  +  Method*
      属性和方法统一称为对象的特性(attribute)或成员(member)


为什么需要面向对象写法？
>
    更方便
    可以复用，减少代码冗余度
    高内聚低耦合

    简单来说，就是增加代码的可复用性，减少咱们的工作，使代码更加流畅。


## <a name="跨域">跨域</a>
[详情](/details/crossOrigin.md)

## <a name="常见的web攻击">常见的web攻击</a>
[常见六大Web安全攻防解析](https://juejin.im/post/5c446eb1e51d45517624f7db)

[web 应用常见安全漏洞一览](https://segmentfault.com/a/1190000018004657)

[前端安全系列（一）：如何防止XSS攻击？](https://segmentfault.com/a/1190000016551188)

[前端安全系列之二：如何防止CSRF攻击](https://segmentfault.com/a/1190000016659945)

#### XSS（Cross-Site Scripting，跨站脚本攻击）

* 概念
>
    通过在目标网站上注入恶意脚本并运行，获取用户的敏感信息如 Cookie、SessionID 等，影响网站与用户数据安全。

* 特点：
>
    能注入恶意的HTML/JavaScript代码到用户浏览的网页上，从而达到Cookie资料窃取、会话劫持、钓鱼欺骗等攻击

* 防御
>
    验证用户输入:
    对于用户的任何输入要进行检查、过滤和转义。建立可信任的字符和 HTML 标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码

    过滤:
    移除用户上传的DOM属性，如onerror等
    移除用户上传的Style节点、Script节点、Iframe节点等

    校正:
    避免直接对HTML Entity解码
    使用DOM Parse转换，校正不配对的DOM标签

npm install xss --save

    let xss = reauire('xss')  
    console.log(xss('<a onclick="alert(xss)"></a>'))

过滤html代码
```js
function filterHtml (str) {
  return str.replace(/&/ig, "&amp;")
            .replace(/</ig, "&lt;")
            .replace(/>/ig, "&gt;")
            .replace(/\//ig, "&#x2F;")
            .replace(/"/ig, "&quot;")
            .replace(/'/ig, "&#x27;")
            .replace(" ", "&nbsp;")
}
```

#### CSRF（Cross-Site Request Forgeries，跨站点请求伪造）
* 概念
>
    指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。
![CSFR](img/CSFR.png)

* 特点：
>
    重要操作的所有参数都是可以被攻击者猜测到的。攻击者预测出URL的所有参数与参数值，才能成功地构造一个伪造的请求。

* 防御
>

    token验证机制，比如请求数据字段中添加一个token，响应请求时校验其有效性  
    用户操作限制，比如验证码
    请求来源限制，比如限制HTTP Referer才能完成操作（防御效果相比较差）

#### SQL注入攻击
* 概念
>
    SQL 注入就是通过给 web 应用接口传入一些特殊字符，达�������欺骗服务器执行恶意的 SQL 命令。



## <a name="URI、URL、URN">URI、URL、URN</a>
[页面url属性](./README#页面url属性)

![HREF](./img/href.png)

* URI
> 
    URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。
    Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的
    URI一般由三部组成：
    ①访问资源的命名机制
    ②存放资源的主机名
    ③资源自身的名称，由路径表示，着重强调于资源。

* URL
> 
    URL是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。
    URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。
    采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL一般由三部组成：
    ①协议(或称为服务方式)
    ②存有该资源的主机IP地址(有时也包括端口号)
    ③主机资源的具体地址。如目录和文件名等

    如 scheme://user:pwd@host:port/path;params?query#frag

* URN
> 
    URN，uniform resource name，统一资源命名，是通过名字来标识资源，

    如 mailto:java-net@java.sun.com。

URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。
URI包含URL和URN

HOST :主机名，资源所在服务器的IP地址或域名（需DNS转换IP地址）  
PORT：端口号，每项服务在服务器上对应一个监听端口号

js中encodeURI()函数不会对 :/@;?# 进行编码  
encodeURIComponent()函数会对上述标点进行编码

[彻底明白ip地址，区分localhost、127.0.0.1和0.0.0.0](https://blog.csdn.net/liyi1009365545/article/details/84780476)

* new URL(url)  

new URL('https://www.aaa.com')
>
    hash: ""
    host: "www.aaa.com"
    hostname: "www.aaa.com"
    href: "https://www.aaa.com/"
    origin: "https://www.aaa.com"
    password: ""
    pathname: "/"
    port: ""
    protocol: "https:"
    search: ""
    searchParams: URLSearchParams {}
    username: ""

还可以传入一个相对地址作为第一个参数，并把相对地址的基础URL作为第二个参数来创建一个URL对象    
new URL('a','https://www.aaa.com')
>
    hash: ""
    host: "www.aaa.com"
    hostname: "www.aaa.com"
    href: "https://www.aaa.com/a"
    origin: "https://www.aaa.com"
    password: ""
    pathname: "/a"
    port: ""
    protocol: "https:"
    search: ""
    searchParams: URLSearchParams {}
    username: ""

## <a name="字符转码、解码">字符转码、解码,encodeURIComponent、decodeURIComponent,encodeURI、decodeURI,escape、unescape,btoa、atob</a>
* 编码encodeURIComponent()、解码decodeURIComponent()  

将中文、韩文等特殊字符转换成utf-8格式的url编码   
传递参数时需要使用encodeURIComponent，这样组合的url才不会被#等特殊字符截断。

>
    var url = "http://localhost:8080/#/pp?a=1&b=" ;
    encodeURIComponent(encodeURIComponent(url))
    "http%3A%2F%2Flocalhost%3A8080%2F%23%2Fpp%3Fa%3D1%26b%3D"

* 编码encodeURI()、解码decodeURI()  
用于整个url跳转
>

    url = "http://localhost:8080/#/pro?a=1&b=张三&c=aaa"
    encodeURI(url)
    "http://localhost:8080/#/pro?a=1&b=%E5%BC%A0%E4%B8%89&c=aaa"
    本例中只是将中文转成%...，传过去再解码就可以拿到中文

* 编码escape() 、解码unescape()  
js对字符串进行编码。不常用
>
    escape('啊') // "%u554A"
    unescape("%u554A") // '啊'

* window.atob()、window.btoa()

window.btoa()：编码，Base64 to ASCII ,该方法不能直接作用于Unicode字符串.
>
    btoa('a') // "YQ=="
    btoa('啊') // 报错

window.atob() 解码，ASCII to Base64
>
    atob("YQ==") // "a"

如何让btoa支持Unicode字符编码  
>编码时，先用encodeURIComponent对字符串进行编码，再进行btoa进行Base64编码  
>解码时，先用atob对Base64编码的串进行解码，再用decodeURIComponent对字符串进行解码
>
    var str = "a啊";
    var encoded_str = btoa(encodeURIComponent(str));
    var decoded_str = decodeURIComponent(atob(encoded_str));
    console.log(encoded_str); // "YSVFNSU5NSU4QQ=="
    console.log(decoded_str); // "a啊"

## <a name="函数式编程">函数式编程</a>
[函数式编程](./details/Function.md)


## <a name="函数重载">函数重载</a>

函数名称一样，但是输入输出不一样。或者说，允许某个函数有各种不同输入，根据不同的输入，调用不同的函数，然后返回不同的结果。

重载其实是把多个功能相近的函数合并为一个函数，重复利用了函数名

>
    //第一个为要绑定方法的对象，第二个为绑定的方法名称，第三个为需要绑定的方法（匿名函数）
    function addMethod(object, name, fn) {
    　　var old = object[name]; //把前一次添加的方法存在一个临时变量old里面
    　　object[name] = function() { // 重写了object[name]的方法
    　　　　// 如果调用object[name]方法时，传入的参数个数跟预期的一致，则直接调用
    　　　　if(fn.length === arguments.length) {
    　　　　　　return fn.apply(this, arguments);
    　　　　// 否则，判断old是否是函数，如果是，就调用old
    　　　　} else if(typeof old === "function") {
    　　　　　　return old.apply(this, arguments);
    　　　　}
    　　}
    }

    var people = {
    　　values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
    };

    /* 下面开始通过addMethod来实现对people.find方法的重载 */

    // 不传参数时，返回people.values里面的所有元素
    addMethod(people, "find", function() {
    　　return this.values;
    });

    // 传一个参数时，按first-name的匹配进行返回
    addMethod(people, "find", function(firstName) {
      return this.values.filter((item)=>{
        return item.indexOf(firstName) === 0
      })
    });

    // 传两个参数时，返回first-name和last-name都匹配的元素
    addMethod(people, "find", function(firstName, lastName) {
      return this.values.filter((item)=>{
        return item === (firstName + lastName)
      })
    });

    // 测试：
    console.log(people)
    console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
    console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
    console.log(people.find("Dean Edwards")); //["Dean Edwards"]


## <a name="防抖、节流">防抖、节流</a>

[参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5)

同：
>
    都可以通过使用 setTimeout 实现。
    目的都是，解决高频触发某个事件的情况造成的性能消耗

异
>
    函数防抖，在一段连续操作结束后，处理回调，利用 clearTimeout 和 setTimeout 实现。

    函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。

    函数防抖是一定时间连续触发，只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

#### 防抖: 触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间；

调用定时器执行某个函数之前首先清除这个定时器。当函数多次被调用时, 
每一次都会将之前的定时器清除, 即只有在执行函数的请求停止了一段时间之后才会真正执行函数。

应用场景
>
    resize/scroll 触发统计事件
    文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

>
    function debounce(fn, delay = 500) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        //setTimeout里面的回调函数。如果是箭头函数，this指向的是input对象，如果为普通函数，this则指向window。
        //let _this = this
        if(timeout) clearTimeout(timeout); // 每当调用函数时清除之前的定时器
        timeout = setTimeout(() => { // 再创建一个新的 setTimeout, 这样就能保证输入字符后的 间隔内再次调用函数，就不会执行
          fn.apply(this, arguments);//把this及event还有参数传给回调函数
        }, delay);
      };
    }

    
    let ipt = document.getElementById('ipt');
    function sayHi() {
      console.log('防抖成功');
    }
    ipt.addEventListener('input', debounce(sayHi)); // 防抖


//或
>
    function debounce(func, delay = 500, context) {
      clearTimeout(func.setTime);
      func.setTime = setTimeout(() => {
        func.apply(context); 
      }, delay);
    }

#### 节流: 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。

设置一个执行函数间隔时间time, 当多次触发某个事件时便将执行函数的频率降低到time 

适用场景：
>
    滚动场景：监听滚动事件，比如懒加载时要监听计算滚动条的位置，但不必每次滑动都触发
    拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
    缩放场景：监控浏览器resize
    动画场景：避免短时间内多次触发动画引起性能问题

定时器：当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
>
    function throttle(func, delay=1000){
      let timer = null
      return function(){
        //let _this = this
        if(timer) return false
        timer = setTimeout(()=>{
          func.apply(_this, arguments)
          timer = null
        }, delay)
      }
    }
    function sayHi(e) {
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
    window.addEventListener('resize', throttle(sayHi, 1000));

时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
>
    function throttle (func, delay = 500) {
      let prevTime = 0
      return function () {
        let nowTime = +new Date()
        if (nowTime-prevTime > delay) {
          func.apply(this, arguments)
          prevTime = nowTime
        }
      }
    }

#### 解析：
>

    不加apply，sayHi里面this肯定是指向window的，因为sayHi 函数定义在全局中，所以调用时里面this指向window；所以才需要加上 apply，显示绑定 this 值(input对象)到 sayH 函数里面去。
    但是加上apply后，fn.apply(this, arguments)这段代码里面的this的指向就要分情况讨论了，而且这个this就是sayHi里面的this。
    这里的情况其实指的就是setTimeout里面的回调函数是普通函数还是箭头函数。如果是箭头函数，则这里的this最终指向的是input对象，如果为普通函数，this则指向window。  
    由此：回调函数开始先绑定this： let _this = this

![throttle](./img/throttle.png)


## <a name="柯里化">柯里化</a>
>

  柯里化，即Currying，可以是函数变得更加灵活。我们可以一次性传入多个参数调用它；也可以只传入一部分参数来调用它，让它返回一个函数去处理剩下的参数。

  它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。


  参数够了就执行，参数不够就返回一个函数，之前的参数存起来，直到够了为止。
  它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。
  柯里化的三个作用 : 1.参数复用 2. 提前返回 3.延迟计算
例 

>
    // 简
    const curry = (fn,...args1) => args.length < fn.length ? (...args2) => curry(fn,...args1,...args2) : fn(...args1)

 
>  
    function curry(fn) {
      var len = fn.length
      return function curried() {
        var args = [].slice.call(arguments)
        if(args.length < len) {
          return function() {
            var argsInner = [].slice.call(arguments)
            return curried.apply(this, args.concat(argsInner))
          }
        } else {
          return fn.apply(this, args)
        }
      }
    }
    
    var f = function(a, b, c) {
      return a+b+c
    };
    var curried = curry(f)
    curried(1)(2)(3) // => [1, 2, 3]
    curried(1, 2)(3) // => [1, 2, 3]
    curried(1, 2, 3) // => [1, 2, 3]

## <a name="n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
1 1 2 3 5 8 13....
>
    //获取第n个斐波那契数列
    function factorial(n, total=1) {
      if (n <= 1) return total;
      return factorial(n - 1, n * total);
    }
    factorial(5) // 120

## <a name="斐波那契数列">斐波那契数列</a>
F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
>
    //正常递归版 -- 存在大量的重复计算
    function fib(n){
      if(n==0)return 0
      else if(n==1)return 1
      else return fib(n-1) + fib(n-2)
    }
    
    //去除重复计算版
    function fib(n){
      function fib_(n, a = 0, b = 1){
        if(n==0) return a
        else return fib_(n-1, b, a + b)
      }
      return fib_(n)
    }

* 计算斐波那列数（js语言精粹
>
    var  arr=[0,1];
    var m=0;//计算运行次数
    function fib(n){
        var result=arr[n];
        if(typeof arr[n]!=='number'){
          m++;
          result=fib(n-1)+fib(n-2);
          arr[n]=result;
        }
        return result
      }
    console.log(fib(7),m);

* 输出n个fib数
1. 
>
    var arr = []
    function fib(n){
      function fib_(n, a = 0, b = 1){
        if(n === 0)return a
        return arr.push(b),fib_(n-1, b, a + b)
      }
      return fib_(n)
    }
    console.log(fib(33))
    console.log(arr)

2. 
> 
    const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
    console.log(fibonacci(800))

## <a name="函数缓存">函数缓存</a>

在函数内部用一个对象存储输入的参数，如果下次再输入相同的参数，那就比较一下对象的属性，把值从这个对象里面取出来。
>
    const memorize = function(fn) {
      const cache = {}
      return function(...args) {
        // 把传给 adder 函数的参数转为字符串，并且把它当做 cache 的 key
        const _args = JSON.stringify(args)
        return cache[_args] || (cache[_args] = fn.apply(fn, args))
      }
    }
    const add = function(a) {
      console.log(a)
      return a + 1
    }
    const adder = memorize(add)
    adder(1)    // 2    cache: { '[1]': 2 }
    adder(1)    // 2    cache: { '[1]': 2 }
    adder(2)    // 3    cache: { '[1]': 2, '[2]': 3 }

## <a name="webWorker">webWorker</a>

[详情](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

>
    web worker就是在js单线程执行的基础上开启一个子线程，进行程序处理，而不影响主线程的执行，当子线程执行完之后再回到主线程上，在这个过程中不影响主线程的执行。

    Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

    子线程与主线程之间提供了数据交互的接口postMessage和onmessage，来进行数据发送和接收;  
    通过error捕捉错误信息；
    使用terminate()可结束线程;


    Web Worker无法访问DOM节点；子线程完全受主线程控制并且不能操作dom，只有主线程可以操作dom
    Web Worker无法访问全局变量或是全局函数；
    Web Worker无法调用alert()或者confirm之类的函数,但可以使用 XMLHttpRequest 对象发出 AJAX 请求
    Web Worker无法访问window、document之类的浏览器全局变量
    但是可以访问navigator、location 

API：

主线程

>
    new Worker('js地址', { name : '指定 Worker 的名称' });
    Worker.onerror：指定 error 事件的监听函数。
    Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。
    Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
    Worker.postMessage()：向 Worker 线程发送消息。
    Worker.terminate()：立即终止 Worker 线程。


子线程：(self.可省略)

    self.name： Worker 的名字。该属性只读，由构造函数指定。
    self.onmessage：指定message事件的监听函数。
    self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
    self.close()：关闭 Worker 线程。
    self.postMessage()：向产生这个 Worker 线程发送消息。
    self.importScripts()：加载 JS 脚本。


分类：专用线程 Dedicated Worker，一个是共享线程 Shared Worker

>
    var worker = new Worker('./work.js'); //创建一个子线程
    worker.postMessage('Hello');
    worker.onmessage = function (e) {
        console.log(e.data); //接收信息：Hi
        worker.terminate(); //结束线程
    };
    worker.onerror = function (err) {
      console.log(err)
    }

    //worker.js
    onmessage = function (e) {
      console.log(e.data); //接收的信息：Hello
      postMessage("Hi"); //向主进程发送消息
    }

## <a name="浏览器缓存">浏览器缓存</a>
[浏览器缓存](/details/InternetCache.md)


## <a name="前端性能优化的方法">前端性能优化的方法</a>
[性能优化](/details/optimization.md)

## <a name="浏览器渲染">浏览器渲染</a>
[浏览器渲染详细过程：重绘、重排和 composite 只是冰山一角](https://juejin.im/entry/590801780ce46300617c89b8)

![render](img/render.png)
![render](img/render1.png)


页面渲染可分为下面5个步骤：
1. HTML被HTML解析器解析成DOM树
2. css则被css解析器解析成CSSOM树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上

4、5是最耗时的部分，这两步合起来即 渲染。


## <a name="从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
[从浏览器地址栏输入url到显示页面的步骤](/details/urlAnalysis.md)

## <a name="事件执行机制">事件执行机制</a>
[事件执行机制](/details/EventLoop.md)

## <a name="get与post区别">get与post区别</a>
![getpost](/img/getpost.png)
>


## <a name="css和js动画的差异">css和js动画的差异</a>
>
    css性能好
    css代码逻辑相对简单
    
    js动画控制好
    js兼容性好
    js可实现的动画多
    js可以添加事件


## <a name="use strict">"use strict"? 用处？</a>

严格运行模式,这种模式使得 Javascript 在更严格的条件下运行,

1. 使JS编码更加规范化的模式,消除语法中的一些不合理、不严谨之处，减少怪异行为。
2. 默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值
3. 全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
4. 消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改。提高编译器效率，增加运行速度；
5. 使调试更加容易。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常，因此尽早提醒你代码中的问题，你才能更快地指引到它们的源代码。
防止意外的全局变量。
6. 消除 this 强制。如果没有严格模式，引用null或未定义的值到 this 值会自动强制到全局变量。这可能会有bug。在严格模式下，引用 null或未定义的 this 值会抛出错误。
7. 不允许重复的属性名称或参数值。当检测到对象（例如，var object = {foo: "bar", foo: "baz"};）中重复命名的属性，或检测到函数中（例如，function foo(val1, val2, val1){}）重复命名的参数时，严格模式会抛出错误。  
8. 使eval() 更安全。在严格模式和非严格模式下，eval() 的行为方式有所不同。最显而易见的是，在严格模式下，变量和声明在 eval() 语句内部的函数不会在包含范围内创建（它们会在非严格模式下的包含范围中被创建，这也是一个常见的问题源）。
9. 在 delete使用无效时抛出错误。delete操作符（用于从对象中删除属性）不能用在对象不可配置的属性上。当试图删除一个不可配置的属性时，非严格代码将默默地失败，而严格模式将在这样的情况下抛出异常。

## <a name="深度优先遍历和广度优先遍历">深度优先遍历和广度优先遍历</a>
[参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9)


## <a name="DOMContentLoaded、$(function(){})、window.onload事件、执行顺序">DOMContentLoaded、$(function(){})、window.onload事件、执行顺序</a>
>
    window.onload = function (){console.log('window.onload');}

    $(function(){
      console.log('$(function{})')
    })

    document.addEventListener( "DOMContentLoaded", function(){
      console.log('DOMContentLoaded')
    }, false );

    //DOMContentLoaded
    //$(function{})
    //window.onload

## <a name="WebAssembly">[WebAssembly](https://github.com/AssemblyScript/assemblyscript)</a>
WebAssembly 是一种新的字节码格式，主流浏览器都已经支持 WebAssembly。 和 JS 需要解释执行不同的是，WebAssembly 字节码和底层机器码很相似可快速装载运行，因此性能相对于 JS 解释执行大大提升。  
也就是说 WebAssembly 并不是一门编程语言，而是一份字节码标准，需要用高级编程语言编译出字节码放到 WebAssembly 虚拟机中才能运行， 浏览器厂商需要做的就是根据 WebAssembly 规范实现虚拟机。

* 相对于 JS，WebAssembly 有如下优点：
>
    体积小：由于浏览器运行时只加载编译成的字节码，一样的逻辑比用字符串描述的 JS 文件体积要小很多；
    加载快：由于文件体积小，再加上无需解释执行，WebAssembly 能更快的加载并实例化，减少运行前的等待时间；
    兼容性问题少：WebAssembly 是非常底层的字节码规范，制订好后很少变动，就算以后发生变化,也只需在从高级语言编译成字节码过程中做兼容。可能出现兼容性问题的地方在于 JS 和 WebAssembly 桥接的 JS 接口。

## <a name=""></a>
=======
<details open>
  <summary>
    链接
  </summary>

  [MDN-JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

  [《JavaScript 教程》- 网道](https://wangdoc.com/javascript/index.html)

  [现代 JavaScript 教程](http://zh.javascript.info/)

  [《ECMAScript 6 入门》- 阮一峰](http://es6.ruanyifeng.com/)

  [ECMAScript 6兼容性表](http://kangax.github.io/compat-table/es6/)

  [《TypeScript》](https://www.tslang.cn/docs/home.html)

  [《TypeScript》](https://ts.xcatliu.com/introduction/what-is-typescript.html)

  [axios](https://www.kancloud.cn/yunye/axios/234845)

  [Swiper-轮播图插件](https://www.swiper.com.cn/api/index.html) 



</details>


<details open>
  <summary>
    目录
  </summary>

* <a href="#运算符优先级">运算符优先级</a>
* <a href="#运算符">运算符</a>
    * <a href="#加运算符">+运算符</a>
    * <a href="#~运算符">~运算符</a>
    * <a href="#比较运算符"><,>,<=,>=的比较规则</a>
* <a href="#===、==、Object.is()判断">===、==、Object.is()判断</a>
* <a href="#keyCode">keyCode:键盘按键键码</a>

* <a href="#JS">**JS**</a>

* <a href="#数据类型、内置对象">数据类型、内置对象</a>
* <a href="#undefined与null定义、区别">undefined与null定义、区别</a>
* <a href ="json jsonp">json jsonp</a>
* <a href="#BOM 浏览器对象模型">BOM 浏览器对象模型</a>
* <a href="#DOM 文档对象模型">DOM 文档对象模型</a>
* <a href="#DOM事件">DOM事件</a>
* <a href="#mouseover、mouseout、mouseenter、mouseleave区别与联系">mouseover、mouseout、mouseenter、mouseleave区别与联系</a>
* <a href="#DOM常用属性">DOM常用属性</a>
* <a href="#DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点</a>
* <a href="#获取元素属性">获取元素属性innerHTML、outerHTML、innerText 、outerText、value</a>
* <a href="#变量、函数声明提升">变量、函数声明提升</a>
* <a href="#立即执行函数">立即执行函数</a>
* <a href="#对象属性">对象属性configurable enumerable writable</a>
* <a href="#typeof instanceof">typeof instanceof in</a>
* <a href="#异步编程有哪几种方法">异步编程有哪几种方法</a>
* <a href="#事件委托(代理)">事件委托(代理)</a>
* <a href="#闭包">闭包</a>
* <a href="#内存泄漏">内存泄漏</a>
* <a href="#new的实现原理">new的实现原理</a>
* <a href="#原型、原型链、原型继承">原型、原型链、原型继承</a>
* <a href="#创建对象的几种方式">创建对象的几种方式</a>
* <a href="#作用域、作用域链、执行上下文">作用域、作用域链、执行上下文</a>
* <a href="#this">this理解</a>
* <a href="apply call bind">apply call bind</a>
* <a href="实现apply call bind">实现apply call bind</a>
* <a href="#公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>
* <a href="#继承方式">继承方式</a>
* <a href="#设计模式">设计模式</a>
* <a href="#promise">promise</a>
* <a href="#async、await">async、await</a>
* <a href="#深，浅拷贝">深，浅拷贝</a>
* <a href="#js延迟加载：defer,async">js延迟加载：defer,async</a>
* <a href="#重绘和回流">重绘和回流</a>
* <a href="#模块化">模块化AMD CMD modules</a>
* <a href="#面向过程和面向对象的异同">面向过程和面向对象的异同</a>
* <a href =""></a>
* <a href="#跨域">跨域</a>
* <a href="#常见的web攻击">常见的web攻击</a>
* <a href="#字符转码、解码">字符转码、解码,encodeURIComponent、decodeURIComponent、encodeURI、decodeURI、escape、unescape</a>
* <a href="#URI、URL、URN">URI、URL、URN</a>
* <a href="#函数式编程">函数式编程</a>
* <a href="#函数重载">函数重载</a>
* <a href="#防抖、节流">防抖、节流</a>
* <a href="#柯里化">柯里化</a>
* <a href="#n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
* <a href="#斐波那契数列">斐波那契数列</a>
* <a href="#函数缓存">函数缓存</a>
* <a href="#webWorker">webWorker</a>
* <a href="#浏览器缓存">浏览器缓存</a>
* <a href="#前端性能优化的方法">前端性能优化的方法</a>
* <a href="#浏览器渲染">浏览器渲染</a>
* <a href="#从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
* <a href="#事件执行机制">事件执行机制</a>
* <a href="#get与post区别">get与post区别</a>
* <a href="#css和js动画的差异">css和js动画的差异</a>
* <a href="#use strict">"use strict"? 用处？</a>
* <a href="#深度优先遍历和广度优先遍历">深度优先遍历和广度优先遍历</a>
* <a href="#DOMContentLoaded、$(function(){})、window.onload事件、执行顺序">DOMContentLoaded、$(function(){})、window.onload事件、执行顺序</a>
* <a href="#WebAssembly">WebAssembly</a>

</details> 

# <a name="运算符优先级">运算符优先级</a>
![运算符优先级](img/运算符优先级.png)
[查看更多--MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

#  <a name="运算符">运算符</a>
##  <a name="加运算符">+运算符</a>
>
    如果有操作数是对象，转换为原始值  
    此时如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接  
    否则：所有操作数都转换为数字并执行加

##  <a name="~运算符">~运算符</a>
~，被称为“按位不运算符”，~n等价于 - n - 1。//返回一个整数
>
    ~15.5 // -16
    ~'15.5' // -16
    ~('daa') // -1
    ~(NaN)  // -1

~~n：可用于取整;
~~n 等价于  - (- n - 1) - 1 = n + 1 - 1 = n
>

    ~~15.5 // 15
    ~~(NaN) // 0

## <a name="比较运算符"><,>,<=,>=的比较规则</a>

所有比较运算符都支持任意类型，但是比较只支持数字和字符串，所以需要执行必要的转换然后进行比较  
转换规则如下:
>
    如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错  
    经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）  
    否则，如果有一个操作数不是字符串，将两个操作数转换为数字进行比较

# <a name="===、==、Object.is()判断">===、==、Object.is()判断</a>
![===、==、Object.is()](/img/===.png)

## ===运算符判断
* 如果两个值不是相同类型，它们不相等
* 如果两个值都是null或者都是undefined，它们相等
* 如果两个值都是布尔类型true或者都是false，它们相等
* 如果其中有一个是NaN，它们不相等
* 如果都是数值型并且数值相等，他们相等， -0等于0(+0)
* 如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者* 容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不* 等
* 如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等
    
## ==运算符判断
* 如果两个值类型相同，按照===比较方法进行比较
* 如果类型不同，使用如下规则进行比较
* 如果其中一个值是null，另一个是undefined，它们相等
* 如果一个值是数字，另一个是字符串，将字符串转换为数字进行比较
* 如果有布尔类型，将 true|false 转换为 1|0，然后用 == 规则继续比较
* 如果其中有一个是NaN，它们不相等(```NaN == NaN ==> false```)
* 如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用 == 规则继续比较
* 其他所有情况都认为不相等

![==](./img/==.jpg)

##  Object.is()
为true的情况
* 都是 undefined
* 都是 null
* 都是 true 或者都是 false
* 都是完全相同的字符串，
* 都是数字并且
  * 都是正零，0 | +0 (Object.is(0,+0) ==>true)
  * 都是负零 -0 (Object.is(0,-0) ==>false)
  * 都是 NaN 
  * 都是除零和 NaN 外的其它同一个数字
* 都指向同一个对象
  ```js
  let a = {}
  let b =a
  Object.is(a,b) // true

  Object.is({},{}) // false

  ```


这种相等性判断逻辑和传统的 == 运算不同，== 运算符会对它两边的操作数做隐式类型转换（如果它们类型不同），然后才进行相等性比较，（所以才会有类似 "" == false 等于 true 的现象），但 Object.is 不会做这种类型转换。

这与 === 运算符的判定方式也不一样。=== 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。


#  <a name="keyCode">keyCode:键盘按键键码</a>
![keyCode](/img/keyCode.png)

# <a name="JS">**JS**</a>

JS的特点：无需编译、弱类型、基于对象、事件驱动  
JS的组成：核心( ECMAScript) , 文档对象模型(DOM), 浏览器对象模型(BOM)

JavaScript 是弱类型语言，而且JavaScript 声明变量的时候并没有预先确定的类型， 变量的类型就是其值的类型

>  
    任何 JavaScript 语句是可以加标签的，在语句前加冒号即可：

    firstStatement: var i = 1;
        
    大部分时候，这个东西类似于注释，没有任何用处。唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环。

        outer: while(true) {
          inner: while(true) {
              break outer;
          }
        }
        console.log("finished")
        
    break/continue 语句如果后跟了关键字，会产生带 target 的完成记录。一旦完成记录带了 target，那么只有拥有对应 label 的循环语句会消费它。

## <a name="数据类型、内置对象">数据类型、内置对象</a>
[JavaScript思维导图](https://github.com/lidaguang1989/javascript-knowhow)

### 数据类型：
1. 基本数据类型：[Undefined、Null](./details/Undefined、Null.md)、[Boolean](./details/Boolean.md)、[Number](./details/Number.md)、[String](./details/String)、[Symbol](./details/Symbol)  ---值传递 --栈内存
2. 复杂（引用）数据类型:[Object](./details/Object.md)    --地址传递--堆内存

* 两类型的区别：存储位置不同；
>
    基本数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；

    引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

    栈内存（连续的存储空间，类似数据结构中的栈）：主要用来存放数值、字符、内存地址等小数据
    
    堆内存（散列的存储空间，类似数据结构中的链表）：存放可以动态变化的大数据

![堆栈](./img/堆栈.jpg)

对象的键名只能是字符串和 Symbol 类型。    
其他类型的键名会被转换成字符串类型。    
对象转字符串默认会调用 toString 方法。   
[demo](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/125)


[**BigInt**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)   

ES10引入了一种新的数据类型 BigInt（大整数）,来表示大于 2^53 - 1 的整数。BigInt 可以表示任意大的整数。

创建 BigInt 类型,只需要在数字后面加上n(123n) 或者BigInt(value) 转化，value 为数字或数字字符串 。也可以用二进制、八进制或十六进制表示
```js
123n  

BigInt(123) // 123n
BigInt('123') // 123n
BigInt(false) // 0n
BigInt(true) // 1n 

typeof 123n  // "bigint"
Number(111111111n) // 111111111

123n == 123 // true  
123n === 123 // false
8n/3n // 2n
```

除一元加号(+)运算符外,会与 asm.js 冲突，所有算术运算符都可用于BigInt

它在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。

### 内置对象
Object 是 JavaScript 中所有对象的父对象  
数据封装类对象：Object、Array、Boolean、Number、String   
其他对象：Function、Arguments、Math、Date、RegExp、Error  

window对象是顶层对象，指浏览器打开的窗口。    
document对象是Documentd对象（HTML 文档对象）的一个只读引用，window对象的一个属性。

### 区分数组对象方法 

>
    Object.prototype.toString.call([]) // "[object Array]"
    Object.prototype.toString.call({}) // "[object Object]"

>
    ([] instanceof Array) // true
    ({} instanceof Array) // false

    ([].constructor) // ƒ Array() { [native code] }
    ({}.constructor) // ƒ Object() { [native code] }

    Array.isArray([]) // true
    Array.isArray({}) // false

## <a name="undefined与null定义、区别">undefined与null定义、区别</a>
[undefined、null](./details/Undefined、Null.md)

## <a name="json jsonp">json jsonp</a>

JSON是一种key/value形式的数据格式，

JSONP则是一种跨域数据交互协议。

#### JSON：
[你不知道的 JSON.stringify() 的威力](https://juejin.im/post/5decf09de51d45584d238319)

* 定义:
>

    JavaScript 对象表示法（JavaScript Object Notation）
    是轻量级的文本数据交换格式,用于存储和交换文本数据领域，与xml类似但比xml更简洁，更快，更易解析
    JSON 的网络媒体类型是 application/json。

* 相比XML，JSON的优势如下：  
-- 没有结束标签，长度更短，读写更快  
-- 能够直接被 JavaScript 解释器解析  
-- 可以使用数组

* 两种数据结构：1.无序的对象结构；2.有序的数组结构

>
    {
      "name": "a",
      "friends": ["b", "c"]
    }

    [
      {a:1},{b:2}
    ]

* 方法：  

JSON.parse(json, replacer)  //把json解析为javascript对象  
>第二个参数，是一个函数(key, value)=>{}。此函数有两个参数：key 和 value，分别代表键和值。当传入一个 JSON 字符串后，JSON 的每一组键/值对都要调用此函数。该函数有返回值，返回值将赋值给当前的键key。
```
JSON.parse('{"a":1,"b":2}', (key,value)=>console.log(key,value))

输出：
a 1
b 2
```

JSON.stringify(obj, replacer, space) //把javascript对象转换为JSON字符串  
>第二个参数（数组形式| 函数） 

>>数组形式：指定需要转成字符串的属性，只对对象的属性有效，对数组无效。
```
JSON.stringify({"a":1,"b":2},['a'])

输出：
"{"a":1}"
```

>>函数：(key, value)=>{},每一组键/值对都会调用此函数，该函数返回一个值，作为键的值变换到结果字符串中，如果返回 undefined，则该成员被忽略。
```
JSON.stringify({"a":1,"b":2}, (key, value) => {
  console.log('key:',key);
  console.log('value:',value);
  return value;
})

输出：
// 第一个参数不是对象的第一个键值对，而是空字符串作为 key 值，value 值是整个对象的键值对：
key: 
value: {a: 1, b: 2}
key: a
value: 1
key: b
value: 2
```

>space第三个参数（数字| 字符串），用于增加返回的JSON字符串的可读性。
>>数字：表示每个属性前面添加的空格（最多不超过10个）；  
>>字符串：（不超过10个字符），该字符串会添加在每行前面。  



#### JSONP: 
是 json 的一种"使用模式"，是种跨域数据交互协议，可以让网页从别的域名（网站）那获取资料，即跨域读取数据


## <a name="BOM 浏览器对象模型">BOM 浏览器对象模型</a>
>
    BOM 是 Browser Object Model 的缩写，即浏览器对象模型。
    当一个浏览器页面初始化时，会在内存创建一个全局的对象，用以描述当前窗口的属性和状态，这个全局对象全局对象被称为浏览器对象模型，即BOM。
    BOM的核心对象就是window，window 对象也是BOM的顶级对象，其中包含了浏览器的 6个核心模块：

1. document - 即文档对象，渲染引擎在解析HTML代码时，会为每一个元素生成对应的DOM对象，由于元素之间有层级关系，因此整个HTML代码解析完以后，会生成一个由不同节点组成的树形结构，俗称DOM树，document 用于描述DOM树的状态和属性，并提供了很多操作DOM的API。
2. frames - HTML 子框架，即在浏览器里嵌入另一个窗口，父框架和子框架拥有独立的作用域和上下文。
3. history - 以栈(FIFO)的形式保存着页面被访问的历史记录，页面前进即入栈，页面返回即出栈。用于将窗口的历史浏览记录用文档和文档状态列表的形式表示。
4. location - 表示该窗口中当前显示的文档的URL.。
5. navigator - 用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。
6. screen - 提供了浏览器显示屏幕的相关属性，比如显示屏幕的宽度和高度，可用宽度和高度。

常用的对话框也属于挂载在window对象上的方法：alert(); confirm(); prompt();

## <a name="DOM 文档对象模型">DOM-文档对象模型</a>
>

  DOM 是 Document Object Model 的缩写，即 文档对象模型，是所有浏览器公共遵守的标准，DOM 将HTML和XML文档映射成一个由不同节点组成的树型结构，俗称DOM树。
  其核心对象是document，用于描述DOM树的状态和属性，并提供对应的DOM操作API。

#### DOM 被划分为1级、2级、3级，共3个级别：
1. 1级DOM -，由DOM核心与DOM HTML两个模块组成。DOM核心能映射以XML为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML通过添加HTML专用的对象与函数对DOM核心进行了扩展。
2. 2级DOM - 鉴于1级DOM仅以映射文档结构为目标，DOM 2级面向更为宽广。通过对原有DOM的扩展，2级DOM通过对象接口增加了对鼠标和用户界面事件（DHTML长期支持鼠标与用户界面事件）、范围、遍历（重复执行DOM文档）和层叠样式表（CSS）的支持。同时也对DOM 1的核心进行了扩展，从而可支持XML命名空间。
3. 3级DOM - 通过引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。


#### DOM事件
##### DOM事件的级别
* DOM0：不是W3C规范。
* DOM1：开始是W3C规范。专注于HTML文档和XML文档。
* DOM2：对DOM1增加了样式表对象模型
* DOM3：对DOM2增加了内容模型 (DTD 、Schemas) 和文档验证。

##### 事件流: 捕获事件流、冒泡事件流。
1. 捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。
2. 冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。

DOM事件流：捕获阶段 -> 目标阶段 -> 冒泡阶段  
DOM事件捕获流程:window > document > documentElement(html标签) > body > ...> 目标对象
>
    事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。window => document => html => body => ... => 目标元素

    事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

    事件冒泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。

所有的事件都会捕获但不是所有事件都会冒泡,例如submit事件就不会被冒泡。 


#### 事件模型：原始事件模型(DOM0级)、DOM2事件模型、IE事件模型。
1. DOM0级：没有事件流，事件一旦发生马上进行处理
>
    在html中直接指定属性值：\<button id="demo" type="button" onclick="doSomeTing()" />　　
    在js中: document.getElementsById("demo").onclick = doSomeTing()

    优点：所有浏览器都兼容
    缺点：逻辑与显示没有分离；相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面;  无法通过事件的冒泡、委托等机制

2. DOM2级：W3C制定的标准模型，现代浏览器（IE6~8除外）都已经遵循这个规范
>
                    //事件类型、需要执行的函数、是否捕获，(默认false)
    addEventListener(eventType,handler,useCapture)
    removeEventListener(eventType,handler,useCapture)

    addEventListener（'click', func)//事件不加on

3. IE事件模型：不支持事件捕获 . (IE11以下)
>
    attachEvent(eventType,handler) 
    detachEvent(eventType,handler)
    
    attachEvent("onclick",func)//事件加on

#### 自定义事件
https://www.jianshu.com/p/5f9027722204
>
    // new Event()定义事件；dispatchEvent()触发事件
    var look = new Event('look', {"bubbles":true, "cancelable":false});
    document.addEventListener('look', function(){
        console.log('lootEvent_document 触发');
    });
    document.dispatchEvent(look);

#### w3c事件与IE事件区别
事件流
>
    w3c事件流:  
    标准的浏览器事件流是 事件捕获流；
    从根文档(html)开始遍历所有子节点，如果目标事件的父节点设置为捕获时触发，则执行该事件，直到目标被执行，然后再事件冒泡(设置为捕获时触发的事件不再被执行)。

    IE事件流:  
    IE的事件流是 事件冒泡流，
    从目标事件被执行，然后再冒泡父节点的事件，直到根文档。

阻止默认行为：
>
    event = e || window.event //w3c | IE
    event.preventDefault() || event.returnValue = false

阻止冒泡：
>
    event = e || window.event //w3c | IE
    event.stopPropagation || event.cancelBubble = true // w3c  | IE
获取事件目标源：
>
    event = e || window.event
    event.target || event.srcElement // w3c  | IE

## <a name="mouseover、mouseout、mouseenter、mouseleave区别与联系">mouseover、mouseout、mouseenter、mouseleave区别与联系</a>
>
    mouseover/mouseout是标准事件，所有浏览器都支持；mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持

    mouseover/mouseout是冒泡事件；mouseenter/mouseleave不冒泡。需要为多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能

    不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件，对应 mouseout。
    
    只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件，对应 mouseleave。

## <a name="DOM常用属性">DOM常用属性</a>
* parentNode  // 当前元素的父节点对象
* children // 当前元素所有子元素节点对象，只返回HTML节点
* childNodes  // 当前元素所有子节点，包括文本，HTML，属性节点。（回车也会当做一个节点）
* firstChild  // 当前元素的第一个子节点对象
* lastChild  // 前元素的最后一个子节点对象

* nextSibling  // 当前元素的下一个同级元素 没有就返回null
* previousSibling // 当前元素上一个同级元素 没有就返回 null

* innerHTML // 元素的所有文本，包括html代码
* innerText // 元素的自身及子代所有文本值，只是文本内容，不包括html代码

* nodeType // 节点的类型,
>元素节点，2：属性节点，3：文本节点。
* nodeName // 节点节点名称，返回值为大写 （如：DIV，P）

## <a name="DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点?</a>
* 创建新节点
>
    document.createDocumentFragment()    //创建一个DOM片段
    document.createElement()   //创建一个元素节点
    document.createTextNode()   //创建一个文本节点
    document.createAttribute() // 创建一个属性节点,如class

* 添加、移除、替换、插入、克隆
>
    appendChild(childNode)  添加节点
    insertBefore(newChild,oldChild) 添加节点
    removeChild(childNode) 删除节点    
    replaceChild(newNode,oldNode）替换节点
    cloneNode(boolean)复制节点： newNode=oldNode.cloneNode(boolean) ; 
      参数可选复制节点,接受一个布尔值参数， true表示深复制（复制节点及其所有子节点），  false表示浅复制（复制节点本身，不复制子节点）;默认是false 。

* 查找节点
>
    document.querySelector() // 查找第一个 （id,className, tgaName)
    document.querySelectorAll() //查找所有 （id,className, tgaName)
    document.getElementById()    //通过元素Id，唯一性
    document.getElementsByClassName() //通过元素classname
    document.getElementsByTagName()    //通过标签名称
    document.getElementsByName()  //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)

* 操作属性的方法
>
    getAttribute(attrName)  //获取属性值
    setAttribute(attrName,attrValue)  //设置属性
    removeAttribute(attrName)  //移除属性
    hasAttribute(attrName) //判断是否存在该属性
    getAttributeNode(attrName) // 获取属性节点
    setAttributeNode(attrName) // 设置属性节点

## <a name="获取元素属性">获取元素属性innerHTML、outerHTML、innerText 、outerText、value</a>
>
    <div class="box">
      000
      <p class="1">11</p>
      <!-- 注释 -->
      <p class="2">22</p>
    </div>


* innerHTML()

在读模式下，innerHTML 返回其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。
>
    let box = document.querySelector('.box')
    box.innerHTML
    返回
      000
      <p class="1">11</p>
      <!-- 注释 -->
      <p class="2">22</p>

在写模式下，innerHTML 会根据指定的值创建新的 DOM 树，然后用这个 DOM 树完全替换调用元素原先的所有子节点。
>   
    let cnt = '<p class="2">2222</p>'
    box.innerHTML = cnt
    替换div.box里的所有内容为 cnt
![innerHTML](/img/innerHTML.png) 

* outerHTML

在读模式下，outerHTML 返回自身及其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。
>
    let box = document.querySelector('.box')
    box.outerHTML
    返回
      <div class="box">
        000
        <p class="1">11</p>
        <!-- 注释 -->
        <p class="2">22</p>
      </div>

在写模式下，outerHTML 会根据指定的 HTML 字符串创建新的 DOM 子树完全替换调用元素。
>
    let cnt = '<p>outerHTML</p>'
    box.outerHTML = cnt 
![outerHTML](/img/outerHTML.png) 


* innerText

在读模式下，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来
>
    box.innerText
    返回
      000

      11

      22

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
>
    box.innerText = '<p>innerText</p>' 
![innerText](/img/innerText.png) 

* outerText

在读模式下，与 innerText 完全一样 
>
    box.outerText
    返回
      000

      11

      22

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
>
    box.outerText = '<p>outerText</p>' 

![outerText](/img/outerText.png) 

* value  
可设置或返回文本框的值
>
    <input type="text" class="ipt" value="111">
    document.querySelector('.ipt').value
    document.querySelector('.ipt').value = 222

## <a name="变量、函数声明提升">变量、函数声明提升</a>
>
    (1) 变量声明提升：变量申明在进入执行上下文就完成了。
    只要变量在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

    (2) 函数声明提升：执行代码之前会先读取函数声明，意味着可以把函数申明放在调用它的语句后面。
    只要函数在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

    (3) 变量or函数声明：函数声明会覆盖变量声明，但不会覆盖变量赋值。
        同一个名称标识a，即有变量声明var a，又有函数声明function a() {}，不管二者声明的顺序，函数声明会覆盖变量声明，也就是说，此时a的值是声明的函数function a() {}。注意：如果在变量声明的同时初始化a，或是之后对a进行赋值，此时a的值为变量的值。因为变量、函数声明提升，赋值在其之后才运行；如: var a = 1; function a() { return true; } console.log(a); ==> 1

<b>let 命名不存在变量提升</b>

### 函数声明，函数形参，变量名 同名时优先级：
函数形参 > 函数声明 > 变量名
>

    var foo = {n:1};
    (function foo(foo) {
        var foo;
        console.log(foo.n);//1 --形参
        foo.n=3; // --改变形参的n赋值
        var foo = {n:2};//重新声明定义foo 
        console.log(foo.n);// 2
    })(foo); //存入全局的foo变量 作为 形参
    console.log(foo.n); //3

## <a name="立即执行函数">立即执行函数IIFE</a>
定义:
>
    1、声明一个匿名函数
    2、马上调用这个匿名函数。
    (function(){})()
    (function(){}())
    +function(){}()
    ....

作用：创建一个独立的作用域。

好处：
>
    防止变量弥散到全局，以免各种js库冲突。隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。利用立即执行特性，返回需要的业务函数或对象，避免每次通过条件判断来处理

场景：一般用于框架、插件等场景


## <a name="对象属性">对象属性configurable enumerable writable,value,get,set</a>

数据属性 4 个特性: configurable(可配置),enumerable(可枚举),writable(可修改),value(属性值)

访问器属性 2 个特性: get(获取),set(设置)

get,set 与 wriable,value 是互斥的,如果有交集设置会报错

### configurable可配置

* 能否使用delete
* 能否修改属性特性
* 能否修改访问器属性
* 值为false为不可重新定义
* 默认值为true 

简单的说 ，设置这个为false之后，就不能删除这个属性或修改这个属性（属性值不影响），这个属性就是这个对象固有的，删除不了
>

    var obj = Object.create({},{
        "a":{
          value :1,
          configurable :false,
          enumerable: true,
          writable: true
        },
    });

    delete obj.a// 删除失败，普通模式没有提示或错误，严格模式会有TypeError
    obj.a = 2;
    console.log(obj.a);//正常使用，输出结果为 2


### enumerable可枚举

对象属性是否可通过for-in循环，flase为不可循环，默认值为true 
简单的说，当你想用 for-in 遍历这个对象的时候，正常会输出每一个属性，但当你设置false时，这个属性就不会被for-in 遍历读到
>    

    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    obj = Object.create(obj, {
        "a": {
            value: 1,
            configurable: true,
            enumerable: false,
            writable: true
        }
    });

    for(var i in obj) {
        console.log(i); //输出b，c 不会输出a，a已经设置不被枚举
    }

### writable可修改

对象属性是否可修改,flase为不可修改，默认值为true 

设置不可修改后，可以理解为常量，不能对属性值进行修改
>

    var obj = Object.create({},{
        "a":{
          value :1,
          configurable :true,
          enumerable :true,
          writable:false
        },
    });
    obj.a = 2;//普通模式不会抛异常，严格模式会抛出TypeError
    console.log(obj.a);//输出1 ，不可被修改

### value属性值
任何属性的值都保存在value中，哪怕值是一个函数。

### get获取
对读取属性进行额外操作的函数

### set设置
对设置属性进行额外操作的函数

```js
var spy = {
	sex: 'male',
};
Object.defineProperty(spy,"sex",{
	get: function () {
		console.log("get");
		return this.name;
	},
	set: function (val) {
    console.log("set");
		return val;
	}
})
console.log(spy.sex) //调用get函数
console.log(spy.sex = "feme"); //调用set函数

```

## <a name="typeof instanceof">typeof 、instanceof 、in</a>
typeof 
>
    typeof 能够正确的判断基本数据类型，但是除了 null, typeof null输出的是对象
    在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。

|  | typeof |
:-:| :-:|
| Boolean    | "boolean"
| Number     | "number"
| String     | "string"
| Object     | "object"
| Null       | "object"
| Undefined  | "undefined"
| Symbol     | "symbol"
| Function   | "function"


instanceof
>
    语法：object instanceof constructor
        （要检测的对象）    （某个构造函数）
    描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

>  
    instanceof 是通过原型链判断的，判断实例对象在其原型链中是否存在一个构造函数的 prototype 属性。  
    A instanceof B, 在A的原型链中层层查找，是否有原型等于 B.__proto__，如果一直找到A的原型链的顶端(null;即 Object.prototype.__proto__),仍然不等于B.prototype，那么返回false，否则返回true.


>
    function P(){}
    p = new P()
    console.log(p instanceof P) //true    

in
>
    操作符会检查属性是否存在对象及其 [[Prototype]] 原型链中。检查的是某个属性名是否存在
    var obj = {a:1}
    Object.prototype.b = 2
    'a' in obj // true
    'b' in obj // true


    对于数组来说，4 in [2, 4, 6] 结果返回 false，因为 [2, 4, 6] 这个数组中包含的属性名是0，1，2 ，没有4。


hasOwnProperty()
>
    只会检查属性是否存在对象中，不会向上检查其原型链。
    var obj = {a:1}
    Object.prototype.b = 2
    obj.hasOwnProperty('a') // true
    obj.hasOwnProperty('b') // false

    所有普通对象都可以通过 Object.prototype 的委托来访问 hasOwnProperty(...)，但是对于一些特殊对象（ Object.create(null) 创建）没有连接到 Object.prototype，这种情况必须使用 Object.prototype.hasOwnProperty.call(obj, "a")，显示绑定到 obj 上。


## <a name="异步编程有哪几种方法">异步编程有哪几种方法</a>
"同步模式"：后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；

"异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。


### 回调函数
>
    如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
    　　function f1(callback){
    　　　　setTimeout(function () {
    　　　　　　callback();// f1的任务代码
    　　　　}, 1000);
    　　}
    执行代码就变成下面这样：f1(f2);
 
优点：简单、容易理解和部署


缺点：
回调地狱，不能用 try catch 捕获错误，不能 return；


### 事件监听
>

    采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
    $("#clickity").on("click", function (e) { console.log("xxxxx");}

    
优点：  
比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。

缺点：  
整个程序都要变成事件驱动型，运行流程会变得很不清晰。

### 发布订阅模式

发布订阅模式，有一个事件池，用来给你订阅(注册)事件，当你订阅的事件发生时就会通知你，然后你就可以去处理此事件

[designMode](/details/designMode#发布订阅模式.md)

### Promises
>

    function fn(arg) {
      return new Promise((resolve, reject) => {
        if(true) {
          resolve(arg())
        } else {
          reject('err')
        }
      })
    }
    function fn1(){
      console.log('fn1')
      return 'fn1'
    }
    function fn2(){
      console.log('fn2')
      return 'fn2'
    }
    fn(fn1).then(fn2).catch((err) => {
      console.log('err:',err)
    });

    

    * 一旦状态改变，就不再变化，任何时候都可以得到这个结果。

每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数

### Generator

### async await
>
    async function asyncFuns() {
      await fn1()
      await fn2()
      await fn3()
    }

  优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题

  缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

>
    let a = 0
    let b = async () => { 
      a = a + await 10
      console.log('2', a) // -> '2' 10
    }
    b()
    a++
    console.log('1', a) // -> '1' 1

    首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，因为 await 内部实现了 generator ，generator会保留堆栈中东西，所以这时候a = 0被保存了下来；
    因为 await 是异步操作，后来的表达式不返回 Promise 的话，就会包装成 Promise.reslove(返回值)，然后会去执行函数外的同步代码；



## <a name="事件委托">事件委托(代理)delegate</a>

事件注册在父级元素上，依靠事件冒泡机制与事件捕获机制，子级元素的事件将委托给父级元素。

优点：
>
    事件动态绑定，可以减少事件注册数量，节约内存开销，提高性能。

缺点：
>
    事件委托基于冒泡，对于不冒泡的事件不支持。

    层级过多，冒泡过程中，可能会被某层阻止掉。

    理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。

    把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。


对js动态添加的子元素可自动绑定事件
>
    原生  未兼容IE(IE事件attachEvent)
    function agent(){
      let ul=document.getElementsByTagName("ul")[0];
      ul.addEventListener('click',function(e){
        let event = e || window.event;
        let target= event.target || event.srcElement;
        if(target.tagName.toLowerCase() =='li'){
          alert(event.target.innerHTML);
        }
      });
    };

> 
    jquery  
    $("ul").delegate("li", "click", function(){
      console.log($(this),$(this).html());
    });

## <a name="闭包">闭包</a>
>
    function a(i){
      return function(){
        return i+1
      }
    }

* 闭包：是指有权访问其他函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

当一个内部函数被其外部函数之外的变量引用时，就形成了一个闭包。

* 闭包的特性：
1. 函数嵌套
2. 函数内部可以引用外部的参数和变量
3. 参数和变量不会被垃圾回收机制回收

* 闭包作用域链通常包括三个部分：
1. 函数本身作用域。
2. 闭包定义时的作用域。
3. 全局作用域。

* 闭包优点：
1. 希望一个变量长期驻扎在内存中
2. 避免全局变量的污染
3. 私有成员的存在

>
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
          console.log(new Date, i);
      }, 1000);
    }
    console.log(new Date, i);
   立即输出5
   大约一秒后输出5个5

## <a name="内存泄漏">内存泄漏</a>
内存泄漏:是指一块被分配的内存在使用完毕后未释放，直到浏览器进程结束。
指任何对象在您不再拥有或需要它之后仍然存在。浏览器中采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，因此会产生内存泄漏。

1. 意外的全局变量引起的内存泄漏（变量未声明，通过this创建,）
    >
        function foo(arg) {
          bar = "this is a hidden global variable";
        }
2. 闭包引起的内存泄漏
    >
        var a = 1 
        var b = function(){ 
          return function (){return 1+a}
        }
3. 没有清理的DOM元素引用
4. 被遗忘的定时器或者回调
    >
        setInterval(function() {
            var node = document.getElementById('Node');
            if(node) {
                // 处理 node 和 someResource
                node.innerHTML = JSON.stringify(someResource));
            }
        }, 1000);
5. 子元素存在引用引起的内存泄露
6. console.log   在传递给 console.log的对象是不能被垃圾回收 ，因为在代码运行之后需要在开发工具能查看对象信息。所以最好不要在生产环境中 console.log任何对象。


如何避免内存泄漏
>
    减少不必要的全局变量，使用严格模式避免意外创建全局变量。
    在你使用完数据后，及时解除引用(闭包中的变量，dom引用，定时器清除)。
    组织好你的逻辑，避免死循环等造成浏览器卡顿，崩溃的问题。

## <a name="new的实现原理">new的实现原理</a>
new
* 创建一个空对象，并将这个空对象的 __proto__，指向构造函数的原型(prototype)对象 ，使其继承构造函数原型上的属性。  

* 改变构造函数内部 this 指针为这个对象(如果有传参，需要将参数也导入构造函数)  

* 执行构造函数中的代码，使其具有构造函数 this 指针的属性。  

* 如果构造函数中没有返回其它对象(tips：不包括null)，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。

new 操作返回的实例对象具有两个特征：
>
    具有构造函数中定义的 this 指针的属性和方法  
    具有构造函数原型上的属性和方法

```js
function Person(x){
  this.name = x
}
Person.prototype.say=()=>{console.log(this.name)}
var p = new Person('I am P')

console.log(p) // Person {name: 'I am P'}
```
构造函数return一个对象时
```js
function Person(x){
  this.name = x
  return {name:1}
}
Person.prototype.say=()=>{console.log(this.name)}
var p = new Person()

console.log(p) // {name: 1}
```

## <a name="原型、原型链、原型继承">原型、原型链、原型继承</a>


* 原型(prototype)：
>
    函数本身就是个包含方法与属性的对象，每个函数都有一个prototype属性,每个对象都有个__proto__属性指向其构造函数的prototype,称为原型。可通过原型为对象扩展属性，实现继承

* 原型链：
>
    当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，就从其原型找这个属性，原型对象也是对象也拥有原型，一层层寻找，直至null（即Object.prototype.__proto__）从而形成了所谓的“原型链”。

查找自身属性（不查找原型链）：obj.hasOwnProperty(prop)

* 不要再使用 __proto__
1. __proto__属性没有写入 ES6 的正文，而是写入了附录。

2. 原因是它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。

获取对象的原型方法: Object.getPrototypeOf(target) 替代  target.__proto__

* __proto__,prototype区别：
>
    js里所有的对象都有__proto__属性(对象，函数)，可称为隐式原型，指向构造该对象的构造函数的原型(prototype)。

    只有函数function才具有prototype(显示原型)属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。

    原型对象有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。


* 为什么只有函数有prototype属性
>
    JS通过 new来生成对象，但是仅靠构造函数，每次生成的对象都不一样。

    有时候需要在两个对象之间共享属性，由于JS在设计之初没有类的概念，所以JS使用函数的prototype来处理这部分需要被共享的属性，通过函数的prototype来模拟类：

    当创建一个函数时，JS会自动为函数添加 prototype属性，值是一个有 constructor的对象。

* 
>
    function A(){}
    var a = new A()

    //a是否为A的实例  
    a instanceof A // true

`实例的__proto__属性（原型）等于其构造函数的prototype属性`  
a.__proto__ === A.prototype // true  

`函数的prototype对象的constructor属性，指向其本身`  
A.prototype.constructor === A === a.constructor //true

`原型链的终点：Object.prototype`  
Object.getPrototypeOf(Function.prototype) === Object.prototype  //true

Object.getPrototypeOf(Object.prototype) === null //true

---
<!-- `Object是Function的实例` -->
Object.getPrototypeOf(Object) === Function.prototype //true

<!-- `Function的prototype是 Object的实例` -->
Object.getPrototypeOf(Function.prototype) === Object.prototype //true



构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型、null、undefined等)会忽而略返回值;如果return的是对象，则返回该对象。

![prototype](/img/prototype0.png)
![prototype](/img/prototype.png)

* 原型继承：
原型中的成员可以被和其相关的对象共享这一特性，可以实现继承。这种实现继承的方式，就叫做原型继承。

[继承方式](details/inherit.md)


## <a name="创建对象的几种方式">创建对象的几种方式</a>

对象字面量：
>p = {name:'jack'}

new Object():  
>p = new Object({name:'jack'})

Object.create:
>
    Object.create 允许你创建一个对象，只要该对象上的属性查找失败，它就可以查询另一个对象以查看该另一个对象是否具有该属性。
    p = Object.create({name:'jack'}) //属性在原型上 
    p = Object.create({},{name:{value:'jack'}}) //属性在自身上


构造函数：
>

    function P(name){this.name = name}
    p = new P('jack')


## <a name="作用域、作用域链、执行上下文">作用域、作用域链、执行上下文(执行环境)</a>
#### 作用域：
作用域就是变量和函数的可访问范围，控制着变量和函数的可见性与生命周期，

作用域分类：
>
    全局作用域:
    局部作用域:
      函数作用域
      块级作用域
      eval作用域

#### 作用域链：
当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

注意：作用域链的顶端是全局作用域，作用域链在变量定义时就已经创建了。

JavaScript中的函数采用静态作用域，也称词法作用域。当在执行函数调用时，不管何时何地执行函数，其中的变量在函数定义时就已经决定了，函数会从自身作用域节点开始，沿着作用域链向上访问变量的值。


#### 执行上下文（Execution Context）：
[深入理解JavaScript执行上下文和执行栈](https://segmentfault.com/a/1190000018550118?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com&share_user=1030000000178452)

[执行上下文与执行栈，变量对象](https://github.com/ZengLingYong/Blog/issues/1)

执行上下文可以理解为当前代码被解析和执行时所在环境，  
在执行JS程序时，每遇到一段JS可执行代码，都会创建一个可执行上下文。

分类：
>
    全局代码、
    函数代码、
    eval代码

    一段JS程序必定会产生多个执行上下文，而JavaScript引擎则是以堆栈的形式来对其进行管理，也就是常说的函数调用栈。  
    栈底是全局上下文，栈顶则是当前正在执行的上下文.

特性：
>
    单线程
    同步执行
    只有一个全局上下文
    可有无数个函数上下文
    每个函数调用都会创建一个新的执行上下文，哪怕是递归调用


生命周期:

* 创建阶段（函数刚被调用但未执行的时候）:
>

    创建变量对象
      函数环境会初始化创建Arguments对象（并赋值）
      函数声明（并赋值）
      变量声明，函数表达式声明（未赋值）
    确定this指向  
        this的值是在执行的时候才能确认，定义的时候不能确认.因为this是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候  
    创建作用域链

* 执行阶段：
>

    变量对象赋值
      变量赋值
      函数表达式赋值
    调用函数
    按顺序执行其它代码


一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入执行栈的顶部。  
每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行完成后，当前函数的执行上下文出栈，并等待垃圾回收。

浏览器的JS执行引擎总是访问栈顶的执行上下文。  
全局上下文只有唯一的一个，它在浏览器关闭时出栈。

## <a name="this">this理解</a>
[this](/details/this.md)

## <a name="apply call bind">apply call bind</a>
https://github.com/yygmind/blog/issues/22
>

    都是用来改变函数的this对象的指向的；

    第一个参数都是this要指向的对象，也就是想指定的上下文；
    都可以利用后续参数传参；

    apply、call则是立即调用；bind是返回对应函数，便于稍后调用；
      foo.apply(obj,[arg1,arg2]),foo.call(obj,arg1,arg2)


把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认规则。

下面两种情况下会传入null：

使用apply(..)来“展开”一个数组，并当作参数传入一个函数  
bind(..)可以对参数进行柯里化（预先设置一些参数）
>
    function foo(a, b) {
        console.log( "a:" + a + "，b:" + b );
    }

    // 把数组”展开“成参数
    foo.apply( null, [2, 3] ); // a:2，b:3

    // 使用bind(..)进行柯里化
    var bar = foo.bind( null, 2 );
    bar( 3 ); // a:2，b:3 

## <a name="实现apply call bind">实现apply call bind</a>
>
    let person = {
      name: 'Abiel'
    }
    function sayHi(age,type) {
      console.log(this.name, age, type);
    }

call
>
   
    Function.prototype.newCall = function(context, ...parameter) {
      if (typeof context === 'object' || typeof context === 'function') {
          context = context || window
      } else {
          context = Object.create(null)
      }
      let fn = Symbol()
      context[fn] = this
      const res =context[fn](...parameter)
      delete context.fn;
      return res
    }

    sayHi.newCall(person, 25, 'newCall');
    sayHi.call(person, 25, 'call');

apply
>
    Function.prototype.newApply = function(context, parameter) {
      if (typeof context === 'object' || typeof context === 'function') {
        context = context || window
      } else {
        context = Object.create(null)
      }
      let fn = Symbol()
      context[fn] = this
      return res=context[fn](...parameter);
    }

    sayHi.newApply(person, [25, 'newApply']); 
    sayHi.apply(person, [25, 'apply']);

bind
>
    Function.prototype.myBind = function (context,...innerArgs) {
      var me = this
      return function (...finnalyArgs) {
        return me.call(context,...innerArgs,...finnalyArgs)
      }
    }

    sayHi.myBind(person, 25)('myBind')
    sayHi.bind(person, 25)('bind')

## <a name="公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>

>
    function P(age){
      var name = '私有变量';
      var fun = function(){console.log('私有方法')}

      this.age = age //实例变量
      this.func = function(){console.log('实例方法')}
    }
    P.fun = function(){console.log('静态方法')}
    P.age = '静态变量'
    
    console.log(P.age,P.fun())


私有变量和函数：
>
    在函数内部定义的变量和函数，如果不对外提供接口，外部是无法访问到的，也就是该函数的私有的变量和函数。


    
静态变量和静态函数：
>
    当定义一个函数后通过点号 “.”为其添加的属性和函数，通过对象本身仍然可以访问得到，但是其实例却访问不到


实例变量和实例函数：

1. 公有(原型)方法、属性：//必需先实例化对象
>
    function User(){
      this.age = 26;//  公有属性
      this.getAge = function(){}//公有方法
    }
    User.prototype.getName=function(){}//公有方法
    var user = new User();
 
2. 私有方法、属性：//只能在函数内部直接调用
>
    function User(age){
      var age = age;//私有属性
      function getAge(){}//私有方法
    }


3. 静态方法、属性：无需实例化就可以调用的方法、属性
>
    //静态方法无法调用公有属性、公有方法、私有方法、私有属性、特权方法和原型属性
    //对象的实例不能调用对象的静态方法，只能调用实例自身的静态属性和方法
    function User(){}
    User.age = 26;//静态属性
    User.getAge =function(){} //静态方法
    
4. 特权方法：
>
    //用来访问私有变量和私有方法的 公有方法
    function User(age){
      var age = age;//私有属性
      this.getAge = function(){ //特权方法
        return age; //特权方法调用私有属性
      }
    }
    var user = new User(26);


## <a name="继承方式">继承方式</a>
[inherit.md](details/inherit.md)

## <a name="设计模式">设计模式</a>
[designMode](/details/designMode.md)

## <a name="promise">promise</a>
[promise](/details/promise.md)

## <a name="async、await">async、await</a>
https://segmentfault.com/a/1190000007535316

https://lidaguang1989.github.io/2018/04/async-await/
>

## <a name="setTimeout、Promise、Async/Await 的区别">setTimeout、Promise、Async/Await 的区别</a>
事件循环中分为宏任务队列和微任务队列。

其中settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行；

Promise本身是同步的立即执行函数；Promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；

async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。

[事件执行机制](/details/EventLoop.md)


## <a name="深，浅拷贝">深，浅拷贝</a>
[如何写出一个惊艳面试官的深拷贝](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)

[浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e)



### 浅拷贝： 浅拷贝只复制指向某个对象的指针，即复制对象地址
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了，就会影响到另一个对象。

* 一层深拷贝

    Object.assign(a, b, c) 第一个参数是目标对象，后面的参数都是源对象
    是一种可以对非嵌套对象进行深拷贝的方法,如果对象中出现嵌套情况,那么其对被嵌套对象的行为就成了普通的浅拷贝.

    b = {...a,...b} //扩展运算符

    b = a.slice(0)

    b = a.concat([])



### 深拷贝：开辟新的栈  
将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象



* [函数库lodash](https://www.lodashjs.com/)  [CDN](https://www.bootcdn.cn/lodash.js/)  
提供_.cloneDeep深拷贝方法

*  JSON.parse(JSON.stringify(obj))
>

    只能正确处理的对象只有 Number, String, Boolean, Array，扁平对象 即那些能够被json直接表示的数据结构。
    会忽略 undefined、会忽略 symbol、NaN会转化为null。
    不能处理循环引用的对象,报错。
    不能正确处理new Date()。(转换结果不正确)
    不能处理正则。(直接解析为空对象{})
    不能序列化函数。

    循环引用情况：
    let obj = {
        a: 1,
        b: {
          c: 2,
        }
    }
    obj.a = obj.b;
    obj.b.c = obj.a;

    let b = JSON.parse(JSON.stringify(obj));
    //Uncaught TypeError:Converting circular structure to JSON

    序列化函数：通过操作JSON.parse,JSON.stringify的第二个参数
    let obj = {
        a: 1,
        func:function(){return this.a}
    }

    let b = JSON.parse(JSON.stringify(obj, function(key, val) {
      if (typeof val === 'function') {
        return val + '';
      }
      return val;
    }),function(key, val){
      if(val.indexOf && val.indexOf('function')>-1){
        return eval("(function(){return "+ val +" })()")
      }
      return val;
    });
    console.log(obj,b,b.func())    

* 
>
    //定义检测数据类型的功能函数
    function checkedType(target) {
      return Object.prototype.toString.call(target).slice(8, -1)
    }
    //实现深度克隆---对象/数组
    function clone(target) {
      //判断拷贝的数据类型
      //初始化变量result 成为最终克隆的数据
      let result, targetType = checkedType(target)
      if (targetType === 'Object') {
        result = {}
      } else if (targetType === 'Array') {
        result = []
      } else {
        return target
      }
      //遍历目标数据
      for (let i in target) {
        //获取遍历数据结构的每一项值。
        let value = target[i]
        //判断目标结构里的每一值是否存在对象/数组
        if (checkedType(value) === 'Object' ||
          checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
          //继续遍历获取到value值
          result[i] = clone(value)
        } else { //获取到value值是基本的数据类型或者是函数。
          result[i] = value;
        }
      }
      return result
    }


>
    var obj = {
      nl: null,
      und: undefined,
      number: 1,
      bool: true,
      str: 'str',
      arr: [],
      obj: {a: 'obj a', b: {arr: [1, 2, 5]}},
      func: function(){console.log(this.name)},
      error: new Error('my error'),
      date: new Date(),
      reg: /[1-9]/,
      symbol: Symbol('syb'),
    }
    let obj1 = deepClone(obj);
    obj1.name= 'obj1'
    obj1.obj.a= 'obj1 a'
    obj1.obj.b.arr.push('obj1')
    console.log(obj);
    console.log(obj1);



## <a name="js延迟加载：defer,async">js延迟加载：defer,async</a>
async 属性 
>
    <script src="file.js" async></script>
    让js并行加载, 
    加载完成后立即执行，
    脚本执行顺序和加载顺序无关。它们将在onload 事件之前完成。对于支持async属性的浏览器，动态插入的外链脚本, 相当于默认具有async=true；

defer 属性 
>
    <script src="file.js" defer></script>
    让js并行加载, 
    在页面渲染完后才会执行，
    脚本按加载的顺序执行


可以同时使用 async 和 defer。

* 动态创建script
>
    function downloadJSAtOnload() {
      var element = document.createElement("script");
      element.src = "defer.js";
      document.body.appendChild(element);
    }
    if (window.addEventListener) {
      window.addEventListener("load",downloadJSAtOnload, false);
    } else if (window.attachEvent){
      window.attachEvent("onload",downloadJSAtOnload);
    } else{
      window.onload =downloadJSAtOnload;
    }


## <a name="重绘和回流">[重绘和回流](https://github.com/chenjigeng/blog/issues/4)</a>
`回流必将引起重绘，而重绘不一定会引起回流。`

`回流`：当页面中的部分或者全部因为元素的规模尺寸，布局，隐藏等改变而需要重新构建,这就叫做回流。

`重绘`：当页面的中的可见性发上变化而不影响布局时，比如：背景颜色吗，文字颜色等，这样形成了重绘

会引起重绘和回流的操作如下：
>
    添加、删除元素(回流+重绘)
    隐藏元素：display:none(回流+重绘);visibility:hidden(重绘)
    移动元素，比如改变top,left的值，或者移动元素到另外一个父元素中。(重绘+回流)
    对style的操作(对不同的属性操作，影响不一样)
    激活 CSS 伪类，比如 :hover （重绘+回流）
    元素尺寸改变(边距、填充、边框、宽度和高度）（重绘+回流）
    用户的操作，比如改变浏览器大小，改变浏览器的字体大小等(重绘+回流)

    transform 操作不会引起重绘和回流，是一种高效率的渲染。因为transform属于合成属性，进行动画时将会创建一个合成层，在一个独立的层中进行渲染。


由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。

常用且会导致回流的属性和方法 (浏览器会立刻清空队列：)

>

    clientWidth、clientHeight、clientTop、clientLeft

    offsetWidth、offsetHeight、offsetTop、offsetLeft

    scrollWidth、scrollHeight、scrollTop、scrollLeft

    width、height

    getComputedStyle()、getBoundingClientRect()


避免方法：
>
    

    尽量使用 class 进行样式修改，而不是直接操作样式
    使用 transform 替代 top|left...
    使用 visibility 替换 display: none 
    避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点��级过多。
    尽可能在DOM树的最末端改变class。可以限制了回流的范围，使其影响尽可能少的节点
    动画效果设置position为absolute，fixed
    避免使用table布局
    避免使用CSS表达式

    减少DOM操作
    js避免频繁读取会引发回流/重绘的属性
    DOM离线处理，处理完后一起更新,如将其至于内存或设置display:none。
      a) 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
      b) 使用display:none技术，只引发两次回流和重绘；
      c) 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘


## <a name="模块化">模块化CommonJS AMD CMD ES6modules</a>
[参考](https://juejin.im/post/5c17ad756fb9a049ff4e0a62#comment)

把复杂的文件分成一个个独立的模块，比如js文件，分成独立的模块之后有利于代码的重用和维护，但是这样又会引来模块与模块之间的依赖问题

* IIFE
>
    使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。

    (function(){
    })()

* CommonJS
>
　  CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或者 module.exports 来导出需要暴露的接口

    一个文件就是一个模块，拥有单独的作用域
    普通方式定义的 变量、函数、对象都属于该模块内
    通过require来引入模块
    通过exports和module.exports来暴露模块中的内容

>
    所有代码都运行在模块作用域，不会污染全局作用域；

    模块可以多次加载，但只会在第一次加载的时候运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果；

    模块的加载顺序，按照代码的出现顺序是同步加载的;


* AMD
>
    AMD规范则是非同步加载模块，允许指定回调函数
    在使用 require.js 的时候，必须提前加载所有模块。

    API：
    require([module], callback)
    define(id, [depends], callback)

* CMD 
>
    通过按需加载的方式，而不是必须在模块开始就加载所有的依赖。
    库：sea.js

* ES6modules
>
    import 引入模块，//动态加载只有在用到的时候才会去加载
    exprot 导出模块
      export 可以导出的是一个对象中包含的多个属性，方法。(在一个文件或模块中可存在多个)
      export default  只能导出一个可以不具名的对象。(在一个文件或模块中仅可存在一个)

    import、export时可以使用as关键字重命名
>
    export {
      a,
      b as bbb
    }

    export default a

    import {a, b} from './index'

    除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
    import  * as name  from './index'


export：规定模块对外接口
>
    默认导出：export default Person(导入时可指定模块任意名称，无需知晓内部真实名称)
    单独导出：export const name = "Bruce"
    按需导出：export { age, name, sex }(推荐)
    改名导出：export { name as newName }

import：导入模块内部功能
>
    默认导入：import Person from "person"
    整体导入：import * as Person from "person"
    按需导入：import { age, name, sex } from "person"
    改名导入：import { name as newName } from "person"
    自执导入：import "person"
    复合导入：import Person, { name } from "person"


复合模式：export命令和import命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量
>
    默认导入导出：export { default } from "person"
    整体导入导出：export * from "person"
    按需导入导出：export { age, name, sex } from "person"
    改名导入导出：export { name as newName } from "person"
    具名改默认导入导出：export { name as default } from "person"
    默认改具名导入导出：export { default as name } from "person"


## <a name="垃圾回收机制">垃圾回收机制</a>
  Javascript具有自动垃圾回收机制(GC:Garbage Collecation)。

  原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

1. 标记清除
>
    在函数声明一个变量的时候，就将这个变量标记为“进入环境”。从逻辑上讲，永远都不能释放进入环境的变量作占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。
    垃圾回收器在运行时候会给存储在内存中中的所有变量都加上标记。然后它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。在此之后再被标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内存清楚工作，销毁那些带标记的值并回收他们所占用的内存空间。

    function test(){ 
      //a,b被标记 ，进入环境 
      var a = 10 ; 
      var b = 20 ; 
    } 
    test(); //执行完毕 之后 a、b又被标离开环境，被回收。

2. 引用计数法
>
        引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。

        但是很重要的一点是当遇到循环引用的时候，函数的引用次数就不会为0，所以不会被垃圾回收器回收内存，会造成内存泄露

    function test(){ 
      var a = {} ; //a的引用次数为0 
      var b = a ; //a的引用次数加1，为1 
      var c =a; //a的引用次数再加1，为2 
      var b ={}; //a的引用次数减1，为1 
    }

如何减少JavaScript中的垃圾回收



## <a name="面向过程和面向对象的异同">面向过程和面向对象的异同？</a>
https://zhuanlan.zhihu.com/p/55064276

面向过程：
>
    把复杂业务划分为若干个“Procedure、Function”。
    彻底的理解现实场景，理清其中的逻辑关系和运行顺序，划分为若干个小的处理单元——落实为function

    万物皆对象，把一个对象抽象成类,具体上就是把一个对象的静态特征和动态特征抽象成属性和方法,也就是把一类事物的算法和数据结构封装在一个类之中,程序就是多个对象和互相之间的通信组成的.

面向对象的思维方式：
>
    
    首先观察现实场景，发现其中有哪些角色和对象，赋予这些对象以属性和行为，让他们彼此发消息，从而构建整个大的应用场景。

面向过程就是关注实现需求的第个步骤，任何的工作都需要自己去做。
面向对象就是什么事都交给能做这件事的对象去做。

对象(Object)：现实应用/场景中的某个事物在程序中的体现。对象是无特定顺序的属性的集合。

面向对象的程序需要具备的三个/四个基本特征：
>
    封装(capsulation)：把零散的多个变量组成一个整体
    继承(inheritance)：子对象自动获得父对象的所有特征
    多态(polymorphism)：一个方法根据参数的不同可以运行出不同的结果
    聚集(aggregation)：多个对象可以聚合为一个更大的对象
      JavaScript具备上述四种能力。
      Object  =  Property*  +  Method*
      属性和方法统一称为对象的特性(attribute)或成员(member)


为什么需要面向对象写法？
>
    更方便
    可以复用，减少代码冗余度
    高内聚低耦合

    简单来说，就是增加代码的可复用性，减少咱们的工作，使代码更加流畅。


## <a name="跨域">跨域</a>
[详情](/details/crossOrigin.md)

## <a name="常见的web攻击">常见的web攻击</a>
[参考](https://mp.weixin.qq.com/s?__biz=MzA3NTUzNjk1OA==&mid=2651562103&idx=1&sn=0b52850e0ca268918928629bdb80499f&chksm=84900f26b3e78630bfd3cc5c5d8f02de909b8a27f366c3855a8adf4e0c660819d88689a39f39&scene=0#rd)

#### XSS（Cross-Site Scripting，跨站脚本攻击）
https://segmentfault.com/a/1190000016551188

* 概念
>
    通过在目标网站上注入恶意脚本并运行，获取用户的敏感信息如 Cookie、SessionID 等，影响网站与用户数据安全。

* 特点：
>
    能注入恶意的HTML/JavaScript代码到用户浏览的网页上，从而达到Cookie资料窃取、会话劫持、钓鱼欺骗等攻击

* 防御
>
    验证用户输入:
    对于用户的任何输入要进行检查、过滤和转义。建立可信任的字符和 HTML 标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码

    过滤:
    移除用户上传的DOM属性，如onerror等
    移除用户上传的Style节点、Script节点、Iframe节点等

    校正:
    避免直接对HTML Entity解码
    使用DOM Parse转换，校正不配对的DOM标签

npm install xss --save

    let xss = reauire('xss')  
    console.log(xss('<a onclick="alert(xss)"></a>'))


#### CSRF（Cross-Site Request Forgeries，跨站点请求伪造）
* 概念
>
    指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。
![CSFR](img/CSFR.png)

* 特点：
>
    重要操作的所有参数都是可以被攻击者猜测到的。攻击者预测出URL的所有参数与参数值，才能成功地构造一个伪造的请求。

* 防御
>

    token验证机制，比如请求数据字段中添加一个token，响应请求时校验其有效性  
    用户操作限制，比如验证码
    请求来源限制，比如限制HTTP Referer才能完成操作（防御效果相比较差）

#### SQL注入攻击
* 概念
>
    SQL 注入就是通过给 web 应用接口传入一些特殊字符，达�������欺骗服务器执行恶意的 SQL 命令。



## <a name="URI、URL、URN">URI、URL、URN</a>
[页面url属性](./README#页面url属性)

![HREF](./img/href.png)

* URI
> 
    URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。
    Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的
    URI一般由三部组成：
    ①访问资源的命名机制
    ②存放资源的主机名
    ③资源自身的名称，由路径表示，着重强调于资源。

* URL
> 
    URL是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。
    URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。
    采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL一般由三部组成：
    ①协议(或称为服务方式)
    ②存有该资源的主机IP地址(有时也包括端口号)
    ③主机资源的具体地址。如目录和文件名等

    如 scheme://user:pwd@host:port/path;params?query#frag

* URN
> 
    URN，uniform resource name，统一资源命名，是通过名字来标识资源，

    如 mailto:java-net@java.sun.com。

URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。
URI包含URL和URN

HOST :主机名，资源所在服务器的IP地址或域名（需DNS转换IP地址）  
PORT：端口号，每项服务在服务器上对应一个监听端口号

js中encodeURI()函数不会对 :/@;?# 进行编码  
encodeURIComponent()函数会对上述标点进行编码

[彻底明白ip地址，区分localhost、127.0.0.1和0.0.0.0](https://blog.csdn.net/liyi1009365545/article/details/84780476)

* new URL(url)  

new URL('https://www.aaa.com')
>
    hash: ""
    host: "www.aaa.com"
    hostname: "www.aaa.com"
    href: "https://www.aaa.com/"
    origin: "https://www.aaa.com"
    password: ""
    pathname: "/"
    port: ""
    protocol: "https:"
    search: ""
    searchParams: URLSearchParams {}
    username: ""

还可以传入一个相对地址作为第一个参数，并把相对地址的基础URL作为第二个参数来创建一个URL对象    
new URL('a','https://www.aaa.com')
>
    hash: ""
    host: "www.aaa.com"
    hostname: "www.aaa.com"
    href: "https://www.aaa.com/a"
    origin: "https://www.aaa.com"
    password: ""
    pathname: "/a"
    port: ""
    protocol: "https:"
    search: ""
    searchParams: URLSearchParams {}
    username: ""

## <a name="字符转码、解码">字符转码、解码,encodeURIComponent、decodeURIComponent,encodeURI、decodeURI,escape、unescape,btoa、atob</a>
* 编码encodeURIComponent()、解码decodeURIComponent()  

将中文、韩文等特殊字符转换成utf-8格式的url编码   
传递参数时需要使用encodeURIComponent，这样组合的url才不会被#等特殊字符截断。

>
    var url = "http://localhost:8080/#/pp?a=1&b=" ;
    encodeURIComponent(encodeURIComponent(url))
    "http%3A%2F%2Flocalhost%3A8080%2F%23%2Fpp%3Fa%3D1%26b%3D"

* 编码encodeURI()、解码decodeURI()  
用于整个url跳转
>

    url = "http://localhost:8080/#/pro?a=1&b=张三&c=aaa"
    encodeURI(url)
    "http://localhost:8080/#/pro?a=1&b=%E5%BC%A0%E4%B8%89&c=aaa"
    本例中只是将中文转成%...，传过去再解码就可以拿到中文

* 编码escape() 、解码unescape()  
js对字符串进行编码。不常用
>
    escape('啊') // "%u554A"
    unescape("%u554A") // '啊'

* window.atob()、window.btoa()

window.btoa()：编码，Base64 to ASCII ,该方法不能直接作用于Unicode字符串.
>
    btoa('a') // "YQ=="
    btoa('啊') // 报错

window.atob() 解码，ASCII to Base64
>
    atob("YQ==") // "a"

如何让btoa支持Unicode字符编码  
>编码时，先用encodeURIComponent对字符串进行编码，再进行btoa进行Base64编码  
>解码时，先用atob对Base64编码的串进行解码，再用decodeURIComponent对字符串进行解码
>
    var str = "a啊";
    var encoded_str = btoa(encodeURIComponent(str));
    var decoded_str = decodeURIComponent(atob(encoded_str));
    console.log(encoded_str); // "YSVFNSU5NSU4QQ=="
    console.log(decoded_str); // "a啊"

## <a name="函数式编程">函数式编程</a>
[函数式编程](./details/Function.md)


## <a name="函数重载">函数重载</a>

函数名称一样，但是输入输出不一样。或者说，允许某个函数有各种不同输入，根据不同的输入，调用不同的函数，然后返回不同的结果。

重载其实是把多个功能相近的函数合并为一个函数，重复利用了函数名

>
    //第一个为要绑定方法的对象，第二个为绑定的方法名称，第三个为需要绑定的方法（匿名函数）
    function addMethod(object, name, fn) {
    　　var old = object[name]; //把前一次添加的方法存在一个临时变量old里面
    　　object[name] = function() { // 重写了object[name]的方法
    　　　　// 如果调用object[name]方法时，传入的参数个数跟预期的一致，则直接调用
    　　　　if(fn.length === arguments.length) {
    　　　　　　return fn.apply(this, arguments);
    　　　　// 否则，判断old是否是函数，如果是，就调用old
    　　　　} else if(typeof old === "function") {
    　　　　　　return old.apply(this, arguments);
    　　　　}
    　　}
    }

    var people = {
    　　values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
    };

    /* 下面开始通过addMethod来实现对people.find方法的重载 */

    // 不传参数时，返回people.values里面的所有元素
    addMethod(people, "find", function() {
    　　return this.values;
    });

    // 传一个参数时，按first-name的匹配进行返回
    addMethod(people, "find", function(firstName) {
      return this.values.filter((item)=>{
        return item.indexOf(firstName) === 0
      })
    });

    // 传两个参数时，返回first-name和last-name都匹配的元素
    addMethod(people, "find", function(firstName, lastName) {
      return this.values.filter((item)=>{
        return item === (firstName + lastName)
      })
    });

    // 测试：
    console.log(people)
    console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
    console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
    console.log(people.find("Dean Edwards")); //["Dean Edwards"]


## <a name="防抖、节流">防抖、节流</a>

[参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5)

同：
>
    都可以通过使用 setTimeout 实现。
    目的都是，解决高频触发某个事件的情况造成的性能消耗

异
>
    函数防抖，在一段连续操作结束后，处理回调，利用 clearTimeout 和 setTimeout 实现。

    函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。

    函数防抖是一定时间连续触发，只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

#### 防抖: 触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间；

调用定时器执行某个函数之前首先清除这个定时器。当函数多次被调用时, 
每一次都会将之前的定时器清除, 即只有在执行函数的请求停止了一段时间之后才会真正执行函数。

应用场景
>
    resize/scroll 触发统计事件
    文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

>
    function debounce(fn, delay = 500) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        //setTimeout里面的回调函数。如果是箭头函数，this指向的是input对象，如果为普通函数，this则指向window。
        //let _this = this
        if(timeout) clearTimeout(timeout); // 每当调用函数时清除之前的定时器
        timeout = setTimeout(() => { // 再创建一个新的 setTimeout, 这样就能保证输入字符后的 间隔内再次调用函数，就不会执行
          fn.apply(this, arguments);//把this及event还有参数传给回调函数
        }, delay);
      };
    }

    
    let ipt = document.getElementById('ipt');
    function sayHi() {
      console.log('防抖成功');
    }
    ipt.addEventListener('input', debounce(sayHi)); // 防抖


//或
>
    function debounce(func, delay = 500, context) {
      clearTimeout(func.setTime);
      func.setTime = setTimeout(() => {
        func.apply(context); 
      }, delay);
    }

#### 节流: 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。

设置一个执行函数间隔时间time, 当多次触发某个事件时便将执行函数的频率降低到time 

适用场景：
>
    滚动场景：监听滚动事件，比如懒加载时要监听计算滚动条的位置，但不必每次滑动都触发
    拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
    缩放场景：监控浏览器resize
    动画场景：避免短时间内多次触发动画引起性能问题

定时器：当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
>
    function throttle(func, delay=1000){
      let timer = null
      return function(){
        //let _this = this
        if(timer) return false
        timer = setTimeout(()=>{
          func.apply(_this, arguments)
          timer = null
        }, delay)
      }
    }
    function sayHi(e) {
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
    window.addEventListener('resize', throttle(sayHi, 1000));

时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
>
    function throttle (func, delay = 500) {
      let prevTime = 0
      return function () {
        let nowTime = +new Date()
        if (nowTime-prevTime > delay) {
          func.apply(this, arguments)
          prevTime = nowTime
        }
      }
    }

#### 解析：
>

    不加apply，sayHi里面this肯定是指向window的，因为sayHi 函数定义在全局中，所以调用时里面this指向window；所以才需要加上 apply，显示绑定 this 值(input对象)到 sayH 函数里面去。
    但是加上apply后，fn.apply(this, arguments)这段代码里面的this的指向就要分情况讨论了，而且这个this就是sayHi里面的this。
    这里的情况其实指的就是setTimeout里面的回调函数是普通函数还是箭头函数。如果是箭头函数，则这里的this最终指向的是input对象，如果为普通函数，this则指向window。  
    由此：回调函数开始先绑定this： let _this = this

![throttle](./img/throttle.png)


## <a name="柯里化">柯里化</a>
>

  柯里化，即Currying，可以是函数变得更加灵活。我们可以一次性传入多个参数调用它；也可以只传入一部分参数来调用它，让它返回一个函数去处理剩下的参数。

  它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。


  参数够了就执行，参数不够就返回一个函数，之前的参数存起来，直到够了为止。
  它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。
  柯里化的三个作用 : 1.参数复用 2. 提前返回 3.延迟计算
例 

>
    // 简
    const curry = (fn,...args1) => args.length < fn.length ? (...args2) => curry(fn,...args1,...args2) : fn(...args1)

 
>  
    function curry(fn) {
      var len = fn.length
      return function curried() {
        var args = [].slice.call(arguments)
        if(args.length < len) {
          return function() {
            var argsInner = [].slice.call(arguments)
            return curried.apply(this, args.concat(argsInner))
          }
        } else {
          return fn.apply(this, args)
        }
      }
    }
    
    var f = function(a, b, c) {
      return a+b+c
    };
    var curried = curry(f)
    curried(1)(2)(3) // => [1, 2, 3]
    curried(1, 2)(3) // => [1, 2, 3]
    curried(1, 2, 3) // => [1, 2, 3]

## <a name="n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
1 1 2 3 5 8 13....
>
    //获取第n个斐波那契数列
    function factorial(n, total=1) {
      if (n <= 1) return total;
      return factorial(n - 1, n * total);
    }
    factorial(5) // 120

## <a name="斐波那契数列">斐波那契数列</a>
F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
>
    //正常递归版 -- 存在大量的重复计算
    function fib(n){
      if(n==0)return 0
      else if(n==1)return 1
      else return fib(n-1) + fib(n-2)
    }
    
    //去除重复计算版
    function fib(n){
      function fib_(n, a = 0, b = 1){
        if(n==0) return a
        else return fib_(n-1, b, a + b)
      }
      return fib_(n)
    }

* 计算斐波那列数（js语言精粹
>
    var  arr=[0,1];
    var m=0;//计算运行次数
    function fib(n){
        var result=arr[n];
        if(typeof arr[n]!=='number'){
          m++;
          result=fib(n-1)+fib(n-2);
          arr[n]=result;
        }
        return result
      }
    console.log(fib(7),m);

* 输出n个fib数
1. 
>
    var arr = []
    function fib(n){
      function fib_(n, a = 0, b = 1){
        if(n === 0)return a
        return arr.push(b),fib_(n-1, b, a + b)
      }
      return fib_(n)
    }
    console.log(fib(33))
    console.log(arr)

2. 
> 
    const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
    console.log(fibonacci(800))

## <a name="函数缓存">函数缓存</a>

在函数内部用一个对象存储输入的参数，如果下次再输入相同的参数，那就比较一下对象的属性，把值从这个对象里面取出来。
>
    const memorize = function(fn) {
      const cache = {}
      return function(...args) {
        // 把传给 adder 函数的参数转为字符串，并且把它当做 cache 的 key
        const _args = JSON.stringify(args)
        return cache[_args] || (cache[_args] = fn.apply(fn, args))
      }
    }
    const add = function(a) {
      console.log(a)
      return a + 1
    }
    const adder = memorize(add)
    adder(1)    // 2    cache: { '[1]': 2 }
    adder(1)    // 2    cache: { '[1]': 2 }
    adder(2)    // 3    cache: { '[1]': 2, '[2]': 3 }

## <a name="webWorker">webWorker</a>

[详情](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

>
    web worker就是在js单线程执行的基础上开启一个子线程，进行程序处理，而不影响主线程的执行，当子线程执行完之后再回到主线程上，在这个过程中不影响主线程的执行。

    Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

    子线程与主线程之间提供了数据交互的接口postMessage和onmessage，来进行数据发送和接收;  
    通过error捕捉错误信息；
    使用terminate()可结束线程;


    Web Worker无法访问DOM节点；子线程完全受主线程控制并且不能操作dom，只有主线程可以操作dom
    Web Worker无法访问全局变量或是全局函数；
    Web Worker无法调用alert()或者confirm之类的函数,但可以使用 XMLHttpRequest 对象发出 AJAX 请求
    Web Worker无法访问window、document之类的浏览器全局变量
    但是可以访问navigator、location 

API：

主线程

>
    new Worker('js地址', { name : '指定 Worker 的名称' });
    Worker.onerror：指定 error 事件的监听函数。
    Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。
    Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
    Worker.postMessage()：向 Worker 线程发送消息。
    Worker.terminate()：立即终止 Worker 线程。


子线程：(self.可省略)

    self.name： Worker 的名字。该属性只读，由构造函数指定。
    self.onmessage：指定message事件的监听函数。
    self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
    self.close()：关闭 Worker 线程。
    self.postMessage()：向产生这个 Worker 线程发送消息。
    self.importScripts()：加载 JS 脚本。


分类：专用线程 Dedicated Worker，一个是共享线程 Shared Worker

>
    var worker = new Worker('./work.js'); //创建一个子线程
    worker.postMessage('Hello');
    worker.onmessage = function (e) {
        console.log(e.data); //接收信息：Hi
        worker.terminate(); //结束线程
    };
    worker.onerror = function (err) {
      console.log(err)
    }

    //worker.js
    onmessage = function (e) {
      console.log(e.data); //接收的信息：Hello
      postMessage("Hi"); //向主进程发送消息
    }

## <a name="浏览器缓存">浏览器缓存</a>
[浏览器缓存](/details/InternetCache.md)


## <a name="前端性能优化的方法">前端性能优化的方法</a>
[性能优化](/details/optimization.md)

## <a name="浏览器渲染">浏览器渲染</a>
![render](img/render.png)
![render](img/render1.png)


页面渲染可分为下面5个步骤：
1. HTML被HTML解析器解析成DOM树
2. css则被css解析器解析成CSSOM树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上

4、5是最耗时的部分，这两步合起来即 渲染。


## <a name="从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
[从浏览器地址栏输入url到显示页面的步骤](/details/urlAnalysis.md)

## <a name="事件执行机制">事件执行机制</a>
[事件执行机制](/details/EventLoop.md)

## <a name="get与post区别">get与post区别</a>
![getpost](/img/getpost.png)
>


## <a name="css和js动画的差异">css和js动画的差异</a>
>
    css性能好
    css代码逻辑相对简单
    
    js动画控制好
    js兼容性好
    js可实现的动画多
    js可以添加事件


## <a name="use strict">"use strict"? 用处？</a>

严格运行模式,这种模式使得 Javascript 在更严格的条件下运行,

1. 使JS编码更加规范化的模式,消除语法中的一些不合理、不严谨之处，减少怪异行为。
2. 默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值
3. 全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
4. 消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改。提高编译器效率，增加运行速度；
5. 使调试更加容易。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常，因此尽早提醒你代码中的问题，你才能更快地指引到它们的源代码。
防止意外的全局变量。
6. 消除 this 强制。如果没有严格模式，引用null或未定义的值到 this 值会自动强制到全局变量。这可能会有bug。在严格模式下，引用 null或未定义的 this 值会抛出错误。
7. 不允许重复的属性名称或参数值。当检测到对象（例如，var object = {foo: "bar", foo: "baz"};）中重复命名的属性，或检测到函数中（例如，function foo(val1, val2, val1){}）重复命名的参数时，严格模式会抛出错误。  
8. 使eval() 更安全。在严格模式和非严格模式下，eval() 的行为方式有所不同。最显而易见的是，在严格模式下，变量和声明在 eval() 语句内部的函数不会在包含范围内创建（它们会在非严格模式下的包含范围中被创建，这也是一个常见的问题源）。
9. 在 delete使用无效时抛出错误。delete操作符（用于从对象中删除属性）不能用在对象不可配置的属性上。当试图删除一个不可配置的属性时，非严格代码将默默地失败，而严格模式将在这样的情况下抛出异常。

## <a name="深度优先遍历和广度优先遍历">深度优先遍历和广度优先遍历</a>
[参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9)


## <a name="DOMContentLoaded、$(function(){})、window.onload事件、执行顺序">DOMContentLoaded、$(function(){})、window.onload事件、执行顺序</a>
>
    window.onload = function (){console.log('window.onload');}

    $(function(){
      console.log('$(function{})')
    })

    document.addEventListener( "DOMContentLoaded", function(){
      console.log('DOMContentLoaded')
    }, false );

    //DOMContentLoaded
    //$(function{})
    //window.onload

## <a name="WebAssembly">[WebAssembly](https://github.com/AssemblyScript/assemblyscript)</a>
WebAssembly 是一种新的字节码格式，主流浏览器都已经支持 WebAssembly。 和 JS 需要解释执行不同的是，WebAssembly 字节码和底层机器码很相似可快速装载运行，因此性能相对于 JS 解释执行大大提升。  
也就是说 WebAssembly 并不是一门编程语言，而是一份字节码标准，需要用高级编程语言编译出字节码放到 WebAssembly 虚拟机中才能运行， 浏览器厂商需要做的就是根据 WebAssembly 规范实现虚拟机。

* 相对于 JS，WebAssembly 有如下优点：
>
    体积小：由于浏览器运行时只加载编译成的字节码，一样的逻辑比用字符串描述的 JS 文件体积要小很多；
    加载快：由于文件体积小，再加上无需解释执行，WebAssembly 能更快的加载并实例化，减少运行前的等待时间；
    兼容性问题少：WebAssembly 是非常底层的字节码规范，制订好后很少变动，就算以后发生变化,也只需在从高级语言编译成字节码过程中做兼容。可能出现兼容性问题的地方在于 JS 和 WebAssembly 桥接的 JS 接口。

## <a name=""></a>


