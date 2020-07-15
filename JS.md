
# [常用链接](/details/website/JS-ES-TS#ES.md)

# 目录

<details open>
  <summary>
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
* <a href="#面向过程和面向对象">面向过程和面向对象</a>
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
* <a href="#事件执行机制">事件执行机制</a>
* <a href="#js延迟加载：defer,async">js延迟加载：defer,async</a>
* <a href="#重绘和回流">重绘和回流</a>
* <a href="#模块化">模块化</a>
* <a href="#跨域">跨域</a>
* <a href="#常见的web攻击">常见的web攻击</a>
* <a href="#字符转码、解码">字符转码、解码,encodeURIComponent、decodeURIComponent、encodeURI、decodeURI、escape、unescape</a>
* <a href="#URI、URL、URN">URI、URL、URN</a>
* <a href="#函数式编程">函数式编程</a>
* <a href="#函数重载">函数重载</a>
* <a href="#防抖、节流">防抖、节流</a>
* <a href="#尾调用">尾调用</a>
* <a href="#n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
* <a href="#webWorker">webWorker</a>
* <a href="#浏览器缓存">浏览器缓存</a>
* <a href="#前端性能优化的方法">前端性能优化的方法</a>
* <a href="#浏览器渲染">浏览器渲染</a>
* <a href="#从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>

* <a href="#get与post区别">get与post区别</a>
* <a href="#css和js动画的差异">css和js动画的差异</a>
* <a href="#use strict">"use strict"? 用处？</a>
* <a href="#深度优先遍历和广度优先遍历">深度优先遍历和广度优先遍历</a>
* <a href="#DOMContentLoaded、$(function(){})、window.onload事件、执行顺序">DOMContentLoaded、$(function(){})、window.onload事件、执行顺序</a>


</details> 

# <a name="运算符优先级">运算符优先级</a>
![运算符优先级](img/运算符优先级.png)
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

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

![==](/img/==.jpg)

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

JS的特点：无需编译、单线程、动态类型、弱类型、基于对象、事件驱动
JS的组成：核心( ECMAScript) , 文档对象模型(DOM), 浏览器对象模型(BOM)

JavaScript 是弱类型语言，而且JavaScript 声明变量的时候并没有预先确定的类型， 变量的类型就是其值的类型

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？



语句标签
```js
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
```

## <a name="数据类型、内置对象">数据类型、内置对象</a>
[JavaScript思维导图](https://github.com/lidaguang1989/javascript-knowhow)

### 数据类型：
基本数据类型： ---值传递 --栈内存
* [Undefined、Null](/details/JS数据类型/Undefined、Null.md)
* [Boolean](/details/JS数据类型/Boolean.md)
* [Number](/details/JS数据类型/Number.md)
* [String](/details/JS数据类型/String)
* [Symbol](/details/JS数据类型/Symbol)
* [BigInt](/details/JS数据类型/BigInt)

复杂（引用）数据类型:   --地址传递--堆内存
* [Object](/details/JS/JS数据类型/Object.md) 
  * [Array](/details/JS/JS数据类型/Array.md)
  * [Date](/details/JS/JS数据类型/Date.md)
  * [Math](/details/JS/JS数据类型/Math.md)
  * [RegExp](/details/JS/JS数据类型/RegExp.md)
  * [Function](/details/JS/JS数据类型/Function.md)
  * [Set、Map](/details/JS/JS数据类型/Set、Map.md)
  * [Error](/details/JS/JS数据类型/Error.md)

两类型的区别：存储位置不同；
>
    基本数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；

    引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

    栈内存（连续的存储空间，类似数据结构中的栈）：主要用来存放数值、字符、内存地址等小数据
    
    堆内存（散列的存储空间，类似数据结构中的链表）：存放可以动态变化的大数据

![堆栈](/img/堆栈.jpg)


对象的键名的转换:
* 对象的键名只能是字符串和 Symbol 类型
* 其他类型的键名会被转换成字符串类型
* 对象转字符串默认会调用 toString 方法

[demo](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/125)


### 内置对象
Object 是 JavaScript 中所有对象的父对象  
数据封装类对象：Object、Array、Boolean、Number、String  
其他对象：Function、Arguments、Math、Date、RegExp、Error  

window对象是顶层对象，指浏览器打开的窗口。  
document对象是Documentd对象（HTML 文档对象）的一个只读引用，window对象的一个属性。

### 区分数组对象方法 
```js
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call({}) // "[object Object]"

([] instanceof Array) // true
({} instanceof Array) // false

([].constructor) // ƒ Array() { [native code] }
({}.constructor) // ƒ Object() { [native code] }

Array.isArray([]) // true
Array.isArray({}) // false
```

### <a name="undefined与null定义、区别">undefined与null定义、区别</a>
[undefined、null](/details/JS/JS数据类型/Undefined、Null.md)

## <a name="面向过程和面向对象">面向过程和面向对象</a>
https://zhuanlan.zhihu.com/p/55064276

### 面向过程,面向对象
`面向过程：`
把复杂业务划分为若干个“Procedure、Function”。
彻底的理解现实场景，理清其中的逻辑关系和运行顺序，划分为若干个小的处理单元——落实为function

万物皆对象，把一个对象抽象成类,具体上就是把一个对象的静态特征和动态特征抽象成属性和方法,也就是把一类事物的算法和数据结构封装在一个类之中,程序就是多个对象和互相之间的通信组成的.

`面向对象：`
首先观察现实场景，发现其中有哪些角色和对象，赋予这些对象以属性和行为，让他们彼此发消息，从而构建整个大的应用场景。

面向过程就是关注实现需求的第个步骤，任何的工作都需要自己去做。
面向对象就是什么事都交给能做这件事的对象去做。

面向对象的语言有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象

```js
//面向过程装大象
1.开（冰箱）
2.（大象）装进（冰箱）
3.关（冰箱）

//面向对象装大象
1. 冰箱.开门（）
2. 冰箱.装进（大象）
3. 冰箱.关门（）
```

对象(Object)：现实应用/场景中的某个事物在程序中的体现。对象是无特定顺序的属性的集合。

### 面向对象的基本特征：
* 封装(capsulation)：把零散的多个变量组成一个整体
* 继承(inheritance)：子对象自动获得父对象的所有特征
* 多态(polymorphism)：一个方法根据参数的不同可以运行出不同的结果

JavaScript具备上述四种能力。
Object  =  Property  +  Method
属性和方法统一称为对象的特性(attribute)或成员(member)

#### 封装
就是把事物封装成类，隐藏事物的属性和方法的实现细节，仅对外公开接口。
* 构造函数
* 原型
* class类

[【何不三连】比继承家业还要简单的JS继承题-封装篇(牛刀小试)](https://juejin.im/post/5e707417e51d45272054d5d3)

#### 继承
继承就是子类可以使用父类的所有功能，并且对这些功能进行扩展。继承的过程，就是从一般到特殊的过程。


[继承方法](/details/继承/index.md)

#### 多态
[【何不三连】JS面向对象最后一弹-多态篇(羽化升仙)](https://juejin.im/post/5e945a15f265da47d31231dd)

多态实际上是不同对象作用与同一操作产生不同的效果。多态的思想实际上是把 “想做什么” 和 “谁去做” 分开。


```js
//非多态
let hobby = function (animal) {
  if (animal == "cat") {
    cat.eat();
  } else if (animal == "dog") {
    dog.eat();
  }
};

let cat = {
  eat() {
    console.log("fish!");
  },
};

let dog = {
  eat() {
    console.log("meat!");
  },
};

hobby("cat"); //fish!
hobby("dog"); //meat!
```

```js
// 多态
let hobby = function (animal) {
  if(animal.eat instanceof Function){
      animal.eat();
  }
};

let cat = {
  eat() {
    console.log("fish!");
  },
};

let dog = {
  eat() {
    console.log("meat!");
  },
};
hobby(cat); //fish!
hobby(cat); //meat!
```

### 为什么需要面向对象写法？
* 更方便
* 可以复用，减少代码冗余度
* 高内聚低耦合

简单来说，就是增加代码的可复用性，减少咱们的工作，使代码更加流畅。



## <a name="json jsonp">json jsonp</a>

JSON是一种key/value形式的数据格式，

JSONP则是一种跨域数据交互协议。

#### JSON：
* 定义:

JavaScript 对象表示法（JavaScript Object Notation）
是轻量级的文本数据交换格式,用于存储和交换文本数据领域，与xml类似但比xml更简洁，更快，更易解析
JSON 的网络媒体类型是 application/json。

* 相比XML，JSON的优势如下：  
-- 没有结束标签，长度更短，读写更快  
-- 能够直接被 JavaScript 解释器解析  
-- 可以使用数组

* 两种数据结构：1.无序的对象结构；2.有序的数组结构
```js
{
  "name": "a",
  "friends": ["b", "c"]
}

[
  {a:1},{b:2}
]
```

#### JSONP:

`jsonp定义：`
>
    是 json 的一种"使用模式"，是种跨域数据交互协议，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

`jsonp跨域原理：`
>
    在html页面中通过相应的标签从不同域名下加载静态资源文件是被浏览器允许的。一般，动态创建script标签，再去请求一个带参网址来实现跨域通信

    因此可利用 script 标签的src属性没有跨域的限制。JSONP请求一定需要对方的服务器做支持才可以。

    通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信(只支持get方法)

[更多](/details/跨域/跨域.md#jsonp跨域)

## <a name="BOM 浏览器对象模型">BOM 浏览器对象模型</a>

BOM 是 Browser Object Model 的缩写，即浏览器对象模型。

当一个浏览器页面初始化时，会在内存创建一个全局的对象，用以描述当前窗口的属性和状态，这个全局对象全局对象被称为浏览器对象模型，即BOM。

BOM的核心对象就是window，window 对象也是BOM的顶级对象，其中包含了浏览器的 6个核心模块：

* document - 即文档对象，渲染引擎在解析HTML代码时，会为每一个元素生成对应的DOM对象，由于元素之间有层级关系，因此整个HTML代码解析完以后，会生成一个由不同节点组成的树形结构，俗称DOM树，document 用于描述DOM树的状态和属性，并提供了很多操作DOM的API。
* frames - HTML 子框架，即在浏览器里嵌入另一个窗口，父框架和子框架拥有独立的作用域和上下文。
* history - 以栈(FIFO)的形式保存着页面被访问的历史记录，页面前进即入栈，页面返回即出栈。用于将窗口的历史浏览记录用文档和文档状态列表的形式表示。
* location - 表示该窗口中当前显示的文档的URL.。
* navigator - 用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。
* screen - 提供了浏览器显示屏幕的相关属性，比如显示屏幕的宽度和高度，可用宽度和高度。

常用的对话框也属于挂载在window对象上的方法：alert(); confirm(); prompt();

## <a name="DOM 文档对象模型">DOM-文档对象模型</a>

DOM 是 Document Object Model 的缩写，即 文档对象模型，是所有浏览器公共遵守的标准，DOM 将HTML和XML文档映射成一个由不同节点组成的树型结构，俗称DOM树。

其核心对象是document，用于描述DOM树的状态和属性，并提供对应的DOM操作API。

#### DOM 被划分为1级、2级、3级，共3个级别：
* 1级DOM -，由DOM核心与DOM HTML两个模块组成。DOM核心能映射以XML为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML通过添加HTML专用的对象与函数对DOM核心进行了扩展。

* 2级DOM - 鉴于1级DOM仅以映射文档结构为目标，DOM 2级面向更为宽广。通过对原有DOM的扩展，2级DOM通过对象接口增加了对鼠标和用户界面事件（DHTML长期支持鼠标与用户界面事件）、范围、遍历（重复执行DOM文档）和层叠样式表（CSS）的支持。同时也对DOM 1的核心进行了扩展，从而可支持XML命名空间。

* 3级DOM - 通过引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。


#### DOM事件
##### DOM事件的级别
* DOM0：不是W3C规范。
* DOM1：开始是W3C规范。专注于HTML文档和XML文档。
* DOM2：对DOM1增加了样式表对象模型
* DOM3：对DOM2增加了内容模型 (DTD 、Schemas) 和文档验证。

##### 事件流: 捕获事件流、冒泡事件流。
捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。

冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。

DOM事件流：捕获阶段 -> 目标阶段 -> 冒泡阶段  
DOM事件捕获流程:window > document > documentElement(html标签) > body > ...> 目标对象
>
    事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。window => document => html => body => ... => 目标元素

    事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

    事件冒泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。

所有的事件都会捕获但不是所有事件都会冒泡,例如：
* onblur
* onfocus
* onmouseenter
* onmouseleave
* submit


#### 事件模型：原始事件模型(DOM0级)、DOM2事件模型、IE事件模型。
1. DOM0级：没有事件流，事件一旦发生马上进行处理
>
    在html中直接指定属性值：\<button id="demo" type="button" onclick="doSomeTing()" />　　
    在js中: document.getElementsById("demo").onclick = doSomeTing()

    优点：所有浏览器都兼容
    缺点：逻辑与显示没有分离；相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面;  无法通过事件的冒泡、委托等机制

2. DOM2级：W3C制定的标准模型，现代浏览器（IE6~8除外）都已经遵循这个规范
>
                    //事件类型、需要执行的函数、是否捕获，(false（默认值）:冒泡；true：捕获)
    addEventListener(eventType,handler,useCapture)
    removeEventListener(eventType,handler,useCapture)

    addEventListener（'click', func)//事件不加on

3. IE事件模型：不支持事件捕获 . (IE11以下)
>
    attachEvent(eventType,handler) 
    detachEvent(eventType,handler)
    
    attachEvent("onclick",func)//事件加on

#### event属性，方法
* event.preventDefault() 阻止默认行为
* event.stopPropagation() 阻止事件传播（冒泡，捕获）
* event.target 触发事件的元素
* event.currentTarge 事件所绑定的元素

#### 自定义事件
[自定义事件的触发dispatchEvent](https://www.jianshu.com/p/5f9027722204)

自定义事件方法
* new Event()
* new CustomEvent()
* document.createEvent('CustomEvent');// 注意这里必须为'CustomEvent'

触发事件方法
* dispatchEvent()


```js
// new Event()定义事件
let myEvent1 = new Event(
  'myEvent1', // 事件名称
  {
    bubbles: true, //是否冒泡
    cancelable: false//是否取消默认事件
  });

// new CustomEvent()定义
let myEvent2 = new CustomEvent('myEvent2', {
  detail: {
    // 将需要传递的参数放到这里
    // 可以在监听的回调函数中获取到：event.detail
  },
  bubbles: true,    //是否冒泡
  cancelable: false //是否取消默认事件
})

// document.createEvent('CustomEvent')定义事件
let myEvent3 = document.createEvent('CustomEvent');// 注意这里必须为'CustomEvent'
myEvent3.initEvent(
  'myEvent3', // 事件名称
  true, // 是否冒泡
  false // 是否可以取消默认行为
)

// 添加事件
document.addEventListener('myEvent1', function(e){
    console.log('myEvent1 触发',e);
});
document.addEventListener('myEvent2', function(e){
    console.log('myEvent2 触发',e);
});
document.addEventListener('myEvent3', function(e){
    console.log('myEvent3 触发',e);
});

let div = document.querySelector('#div')
div.onclick = function(){
  document.dispatchEvent(myEvent1); // 触发事件
  document.dispatchEvent(myEvent2); // 触发事件
  document.dispatchEvent(myEvent3); // 触发事件
}

```

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
    event.preventDefault() || event.returnValue = false //w3c | IE

阻止冒泡：
>
    event = e || window.event //w3c | IE
    event.stopPropagation || event.cancelBubble = true // w3c  | IE
获取事件目标源：
>
    event = e || window.event
    event.target || event.srcElement // w3c  | IE

## <a name="mouseover、mouseout、mouseenter、mouseleave区别与联系">mouseover、mouseout、mouseenter、mouseleave区别与联系</a>
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
  >1 元素节点
  >2 属性节点
  >3 文本节点
  >8 注释节点
  >9 整个文档（DOM树的根节点）

  ```html
  <div class="div"><!-- 注释 --><p class="p">文本</p></div>

  <script>
    let div = document.querySelector('.div')
    console.log(div.nodeType); //1
    console.log(div.getAttributeNode('class').nodeType); //2
    console.log(div.childNodes[0].childNodes[0].nodeType); // 3
    console.log(div.childNodes[1].nodeType); // 8
    console.log(document.nodeType); // 9
  </script>  
  ```

* nodeName // 节点节点名称，返回值为大写 （如：DIV，P）

## <a name="DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点?</a>
#### 创建新节点
* document.createDocumentFragment()    //创建一个DOM片段
* document.createElement()   //创建一个元素节点
* document.createTextNode()   //创建一个文本节点
* document.createAttribute() // 创建一个属性节点,如class

#### 添加、移除、替换、插入、克隆
* appendChild(childNode)  添加节点
* insertBefore(newChild,oldChild) 添加节点
* removeChild(childNode) 删除节点    
* replaceChild(newNode,oldNode）替换节点
* cloneNode(boolean)复制节点： newNode=oldNode.cloneNode(boolean) ; 
  参数可选复制节点,接受一个布尔值参数， true表示深复制（复制节点及其所有子节点），  false表示浅复制（复制节点本身，不复制子节点）;默认是false 。


#### 查找节点
* document.querySelector() // 查找第一个 （id,className, tgaName)
* document.querySelectorAll() //查找所有 （id,className, tgaName)
* document.getElementById() //通过元素Id查找，唯一性
* document.getElementsByClassName() //通过元素classname查找(返回数组)
* document.getElementsByTagName() //通过标签名称查找(返回数组)
* document.getElementsByName()  //通过元素的Name属性的值查找(返回数组)

#### 操作属性的方法
* getAttribute(attrName)  //获取属性值
* setAttribute(attrName,attrValue)  //设置属性
* removeAttribute(attrName)  //移除属性
* hasAttribute(attrName) //判断是否存在该属性
* getAttributeNode(attrName) // 获取属性节点
* setAttributeNode(attrName) // 设置属性节点

## <a name="获取元素属性">获取元素属性innerHTML、outerHTML、innerText 、outerText、value</a>
>
    <div class="box">
      000
      <p class="1">11</p>
      <!-- 注释 -->
      <p class="2">22</p>
    </div>


#### innerHTML()

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
    //会替换 div.box 里的所有内容为 cnt

![innerHTML](/img/innerHTML.png) 

#### outerHTML

在读模式下，outerHTML 返回自身及其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。(同innerHTML)
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
    //会替换掉 div.box 为 cnt

![outerHTML](/img/outerHTML.png) 


#### innerText

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
    //<p>不会解析为标签，会当作字符串

![innerText](/img/innerText.png) 

#### outerText

在读模式下，(同innerText)
>
    box.outerText
    返回
      000

      11

      22

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
>
    box.outerText = '<p>outerText</p>' 
    //<p>不会解析为标签，会当作字符串，同时会替换掉 box

![outerText](/img/outerText.png) 

#### value  
设置或返回文本框的值
>
    <input type="text" class="ipt" value="111">
    document.querySelector('.ipt').value
    document.querySelector('.ipt').value = 222

## <a name="变量、函数声明提升">变量、函数声明提升</a>
(1) 变量声明提升：变量申明在进入执行上下文就完成了。
只要变量在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

(2) 函数声明提升：执行代码之前会先读取函数声明，意味着可以把函数申明放在调用它的语句后面。
只要函数在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

(3) 变量or函数声明：函数声明会覆盖变量声明，但不会覆盖变量赋值。

```js
var a = 1;
function a() { return true; }
console.log(a); // 1
```
变量，函数声明提升,函数声明会覆盖变量声明，a再复制为1

等同于
```js
function a() { return true; }
a=1
console.log(a); // 1
```


`let 命名不存在变量提升`

### 函数声明，函数形参，变量名 同名时优先级：
函数形参 > 函数声明 > 变量名

```js
var foo = {n:1};
(function foo(foo) {
    var foo;
    console.log(foo.n);//1 --形参
    foo.n=3; // --改变形参的n赋值
    var foo = {n:2};//重新声明定义foo 
    console.log(foo.n);// 2
})(foo); //存入全局的foo变量 作为 形参
console.log(foo.n); //3
```

## <a name="立即执行函数">立即执行函数IIFE</a>
定义:
>
    1、声明一个匿名函数
    2、马上调用这个匿名函数。
    (function(){})()
    (function(){}())
    +function(){}()
    ....

作用：创建一个独立的作用域。避免与全局作用域内的其他变量命名冲突或污染全局命名空间

场景：一般用于框架、插件等场景


## <a name="对象属性">对象属性configurable enumerable writable,value,get,set</a>

数据属性 4 个特性: configurable(可配置),enumerable(可枚举),writable(可修改),value(属性值)

访问器属性 2 个特性: get(获取),set(设置)

get,set 与 writable,value 是互斥的,如果有交集设置会报错

### configurable 可配置

* 能否使用delete
* 能否修改属性特性
* 能否修改访问器属性
* 值为false为不可重新定义
* 默认值为true 

简单的说 ，设置configurable为false之后，就不能删除这个属性或修改这个属性（属性值不影响），这个属性就是这个对象固有的，删除不了

```js
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
```

### enumerable 可枚举

对象属性是否可通过for-in循环，flase为不可循环，默认值为true 
简单的说，当你想用 for-in 遍历这个对象的时候，正常会输出每一个属性，但当你设置false时，这个属性就不会被for-in 遍历读到
```js
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
```

### writable 可修改

对象属性是否可修改,flase为不可修改，默认值为true 

设置不可修改后，可以理解为常量，不能对属性值进行修改
```js
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
```

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
		console.log("调用get函数");
		return this.name;
	},
	set: function (val) {
    console.log("调用set函数");
		return val;
	}
})
console.log(spy.sex) //调用get函数
console.log(spy.sex = "feme"); //调用set函数

```

## <a name="typeof instanceof">typeof 、instanceof 、in</a>
#### typeof 
[浅谈 instanceof 和 typeof 的实现原理](https://juejin.im/post/5b0b9b9051882515773ae714)

typeof 能够正确的判断基本数据类型，但是除了 null, typeof null输出的是对象  
在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。

|  | typeof |
:-:| :-:|
| Boolean    | "boolean"
| Number     | "number"
| String     | "string"
| Undefined  | "undefined"
| Null       | "object"
| Symbol     | "symbol"
| Object     | "object"
| BigInt     | "bigint"
| Function   | "function"

`typeof原理`： 不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位存储其类型信息。
* 000: 对象
* 010: 浮点数
* 100：字符串
* 110： 布尔值
* 1： 整数

但是，undefined 和 null 有点特殊的
null：所有机器码均为0
undefined：用 −2^30 整数来表示

`由于null的二进制表示全为0`，自然前三位也是0，所以执行typeof时会返回"object"。

#### instanceof
instanceof 是通过原型链判断的，判断实例对象在其原型链中是否存在一个构造函数的 prototype 属性。  

A instanceof B, 在A的原型链中层层查找，是否有原型等于 B.__proto__，如果一直找到A的原型链的顶端(null;即 Object.prototype.__proto__),仍然不等于B.prototype，那么返回false，否则返回true.

>
    语法：object instanceof constructor
        （要检测的对象）    （某个构造函数）
    描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。


>
    function P(){}
    let p = new P()
    console.log(p instanceof P) //true    

#### isPrototypeOf
判断指定对象是否存在于另一个对象的原型链中

```js
function P(){}
let p = new P()
console.log(P.prototype.isPrototypeOf(p));//true
```

#### in
in 操作符会检查属性是否存在对象及其 [[Prototype]] 原型链中。检查的是某个属性名是否存在
>
    var obj = {a:1}
    Object.prototype.b = 2
    'a' in obj // true
    'b' in obj // true


    对于数组来说，4 in [2, 4, 6] 结果返回 false，因为 [2, 4, 6] 这个数组中包含的属性名是0，1，2 ，没有4。


#### hasOwnProperty()
hasOwnProperty 只会检查属性是否存在对象中，不会向上检查其原型链。
>
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
    f1(f2); // 执行代码
 
优点：简单、容易理解和部署

缺点：回调地狱，不能用 try catch 捕获错误，不能 return；


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

[发布订阅模式](/details/设计模式/发布订阅模式.md)

### Generator
[Generator](/details/JS/Generator.md)

### Promise
[Promise](/details/JS/Promise.md)

### async await
[async_await](/details/JS/async_await.md)

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

* 闭包：
是指有权访问其他函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

简单说：当一个内部函数被其外部函数之外的变量引用时，就形成了一个闭包。

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

闭包实例
>
    function a(i){
      return function(){
        return i+1
      }
    }


```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
      console.log(new Date, i);
  }, 1000);
}
console.log(new Date, i);
// 立即输出5
// 大约一秒后输出5个5
```

如何输出 0 1 2 3 4 5
```js
// 使用let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
      console.log(new Date, i);
  }, 1000);
}
console.log(new Date, i);

// 或者利用立即执行函数
for (let i = 0; i < 5; i++) {
  setTimeout((function() {
      console.log(new Date, i);
  })(), 1000);
}
console.log(new Date, i);
```

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
[new 实现](/details/一些常用函数的实现/new关键字实现.md)

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
[原型-原型链-继承](details/JS/原型-原型链-继承.md)

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
[作用域-作用域链-执行上下文](details/JS/作用域-作用域链-执行上下文.md)


## <a name="VO/AO">VO/AO</a>
* VO(变量对象), 也就是`variable object`, 创建执行上下文时与之关联的会有一个变量对象，该上下文中的所有变量和函数全都保存在这个对象中。

* AO(活动对象), 也就是`activation object`,进入到一个执行上下文时，此执行上下文中的变量和函数都可以被访问到，可以理解为被激活了。

VO/AO区别：

变量对象（VO）是规范上或者是JS引擎上实现的，并不能在JS环境中直接访问。

当进入到一个执行上下文后，这个变量对象才会被激活，所以叫活动对象（AO），这时候活动对象上的各种属性才能被访问

## <a name="this">this理解</a>
[this](/details/this.md)

## <a name="apply call bind">apply call bind及实现</a>
区别
* 都是用来改变函数的this对象的指向的；

* 第一个参数都是this要指向的对象，也就是想指定的上下文；都可以利用后续参数传参；

* apply、call则是立即调用；bind是返回对应函数，便于稍后调用；
  >foo.apply(obj,[arg1,arg2]),foo.call(obj,arg1,arg2)


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


[apply 实现](/details/一些常用函数的实现/apply.md)
[call 实现](/details/一些常用函数的实现/call.md)
[bind 实现](/details/一些常用函数的实现/bind.md)


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
[继承.md](details/继承/index.md)

## <a name="设计模式">设计模式</a>
[设计模式](/details/设计模式/index.md)

## <a name="事件执行机制">事件执行机制</a>
[事件执行机制](/details/JS/EventLoop.md)

事件循环中分为宏任务队列和微任务队列。

其中settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行；

Promise本身是同步的立即执行函数；Promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；

async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。


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

`回流（重排）`：当页面中的部分或者全部因为元素的规模尺寸，布局，隐藏等改变而需要重新构建,这就叫做回流。

`重绘`：当页面的中的可见性发上变化而不影响布局时，比如：背景颜色吗，文字颜色等，这样形成了重绘

会引起重绘和回流的操作如下：
* 添加、删除元素(回流+重绘)
* 隐藏元素：display:none(回流+重绘);visibility:hidden(重绘)
* 移动元素，比如改变top,left的值，或者移动元素到另外一个父元素中。(重绘+回流)
* 对style的操作(对不同的属性操作，影响不一样)
* 激活 CSS 伪类，比如 :hover （重绘+回流）
* 元素尺寸改变(边距、填充、边框、宽度和高度）（重绘+回流）
* 用户的操作，比如改变浏览器大小，改变浏览器的字体大小等(重绘+回流)


由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。

常用且会导致回流的属性和方法 (浏览器会立刻清空队列：)

>

    clientWidth、clientHeight、clientTop、clientLeft

    offsetWidth、offsetHeight、offsetTop、offsetLeft

    scrollWidth、scrollHeight、scrollTop、scrollLeft

    width、height、

    getComputedStyle()、getBoundingClientRect()


如何避免/减少重绘，回流：
* 尽量使用 class 进行样式修改，而不是直接操作样式
* 使用 transform 替代 top|left...
* transform 操作不会引起重绘和回流，是一种高效率的渲染（开启GPU渲染）。因为transform属于合成属性，进行动画时将会创建一个合成层，在一个独立的层中进行渲染。
* 使用 visibility 替换 display: none 
* 避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多。
* 尽可能在DOM树的最末端改变class。可以限制了回流的范围，使其影响尽可能少的节点
* 动画效果设置position为absolute，fixed
* 避免使用CSS表达式
* 避免使用table布局
* 减少DOM操作
* 缓存值，避免频繁读取会引发回流/重绘的属性
* DOM离线处理，处理完后一起更新
  - 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
  - 使用display:none技术，只引发两次回流和重绘；
  - 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘


## <a name="模块化">模块化</a>
[模块化](/details/JS/Module.md)


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


## <a name="跨域">跨域</a>
[详情](/details/crossOrigin.md)

## <a name="常见的web攻击">常见的web攻击</a>
https://github.com/LuckyWinty/fe-weekly-questions/issues/1

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
[页面url属性](/README#页面url属性)

![HREF](/img/href.png)

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
[函数式编程](/details/Function.md)


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


## <a name="尾调用">尾调用 尾递归</a>
尾调用指的是函数作为另一个函数的最后一条语句被调用。

当全部满足以下条件，尾调用不再创建新的栈帧，而是清除并重用当前栈帧：
* 尾调用不访问当前栈帧的变量(函数不是一个闭包。)
* 尾调用是最后一条语句
* 尾调用的结果作为函数返回

```js
'use strict'
function doSomethingElse () {
  console.log('do something else')
}
function doSomething () {
  return doSomethingElse()
}

```

```js
function doSomethingElse () {
  console.log('do something else')
}
function doSomething () {
  // 无法优化，没有返回
  doSomethingElse()
}
function doSomething () {
  // 无法优化，返回值又添加了其它操作
  return 1 + doSomethingElse()
}
function doSomething () {
  // 可能无法优化
  let result = doSomethingElse
  return result
}
function doSomething () {
  let number = 1
  let func = () => number
  // 无法优化，该函数是一个闭包
  return func()
}

```

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
    var worker = new Worker('/work.js'); //创建一个子线程
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

## <a name="深度优先遍历和广度优先遍历">深度优先遍历和广度优先遍历</a>
[参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9)



## <a name="get与post区别">get与post区别</a>
![getpost](/img/getpost.png)

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



