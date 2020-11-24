
# [常用链接](/details/website/JS-ES-TS#JS.md)

# 目录

<details open>
  <summary>
  </summary>


* <a href="#JS">**JS**</a>

* <a href="#了解">了解</a>
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
* <a href="#垃圾回收机制">垃圾回收机制</a>
* <a href="#内存泄漏">内存泄漏</a>
* <a href="#原型、原型链、原型继承">原型、原型链、原型继承</a>
* <a href="#创建对象的几种方式">创建对象的几种方式</a>
* <a href="#作用域、作用域链、执行上下文">作用域、作用域链、执行上下文</a>
* <a href="#this">this理解</a>
* <a href="apply call bind">apply call bind</a>
* <a href="#公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>
* <a href="#继承方式">继承方式</a>
* <a href="#设计模式">设计模式</a>
* <a href="#事件执行机制">事件执行机制</a>
* <a href="#深浅拷贝">深浅拷贝</a>
* <a href="#js延迟加载：defer,async">js延迟加载：defer,async</a>
* <a href="#重绘和回流">重绘和回流</a>
* <a href="#模块化">模块化</a>
* <a href="#跨域">跨域</a>
* <a href="#常见的web攻击">常见的web攻击</a>
* <a href="#字符转码、解码">字符转码、解码,encodeURIComponent、decodeURIComponent、encodeURI、decodeURI、escape、unescape</a>
* <a href="#URI、URL、URN">URI、URL、URN</a>
* <a href="#防抖、节流">防抖、节流</a>
* <a href="#尾调用">尾调用</a>
* <a href="#n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
* <a href="#webWorker">webWorker</a>
* <a href="#浏览器缓存">浏览器缓存</a>
* <a href="#前端性能优化的方法">前端性能优化的方法</a>
* <a href="#浏览器页面渲染">浏览器页面渲染</a>
* <a href="#从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
* <a href="#use strict">"use strict"? 用处？</a>

</details> 


#  <a name="运算符">运算符</a>
[运算符](\details\JS\运算符.md)

#  <a name="keyCode">keyCode:键盘按键键码</a>
![keyCode](/img/keyCode.png)

# <a name="JS">**JS**</a>

## <a name="了解">了解</a>
1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 
[ECMAScript](https://www.ecma-international.org/ecma-262/)

JS的特点：
* 无需编译、
* 单线程、
* 弱类型、
* 基于对象、
* 事件驱动


JS的组成：
* ECMAScript , 
* DOM (Document Object Model 文档对象模型), 
* BOM (Browser Object Model 浏览器对象模型)


`JavaScript为什么是单线程？`

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？


## <a name="数据类型、内置对象">数据类型、内置对象</a>

### 数据类型：
基本数据类型： ---值传递 --栈内存
* [Undefined、Null](/details/JS/JS数据类型/Undefined、Null.md)
* [Boolean](/details/JS/JS数据类型/Boolean.md)
* [Number](/details/JS/JS数据类型/Number.md)
* [String](/details/JS/JS数据类型/String.md)
* [Symbol](/details/JS/JS数据类型/Symbol.md)
* [BigInt](/details/JS/JS数据类型/BigInt.md)

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

### [堆栈](/details\JS\details\堆-栈-队列.md)


### 内置对象
Object 是 JavaScript 中所有对象的父对象  
数据封装类对象：Object、Array、Boolean、Number、String  
其他对象：Function、Arguments、Math、Date、RegExp、Error  

window对象是顶层对象，指浏览器打开的窗口。  
document对象是Document对象（HTML 文档对象）的一个只读引用，window对象的一个属性。

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

## <a name="面向过程和面向对象">面向过程和面向对象</a>
https://zhuanlan.zhihu.com/p/55064276

### 面向过程POP（Procedure Oriented Programming）,面向对象OOP（Object Oriented Programming）
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
    console.log("bone!");
  },
};

hobby("cat"); //fish!
hobby("dog"); //bone!
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
    console.log("bone!");
  },
};
hobby(cat); //fish!
hobby(dog); //bone!
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

[更多](/details/跨域/README.md#jsonp跨域)

## <a name="BOM 浏览器对象模型">BOM 浏览器对象模型</a>

BOM(Browser Object Model)浏览器对象模型。

当一个浏览器页面初始化时，会在内存创建一个全局的对象，用以描述当前窗口的属性和状态，这个全局对象全局对象被称为浏览器对象模型，即BOM。

BOM的核心对象就是window，window 对象也是BOM的顶级对象，其中包含了浏览器的 6个核心模块：

* document - 即文档对象，渲染引擎在解析HTML代码时，会为每一个元素生成对应的DOM对象，由于元素之间有层级关系，因此整个HTML代码解析完以后，会生成一个由不同节点组成的树形结构，俗称DOM树，document 用于描述DOM树的状态和属性，并提供了很多操作DOM的API。
* frames - HTML 子框架，即在浏览器里嵌入另一个窗口，父框架和子框架拥有独立的作用域和上下文。
* history - 以栈(FIFO)的形式保存着页面被访问的历史记录，页面前进即入栈，页面返回即出栈。用于将窗口的历史浏览记录用文档和文档状态列表的形式表示。
* location - 表示该窗口中当前显示的文档的URL.。
* navigator - 用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。
* screen - 提供了浏览器显示屏幕的相关属性，比如显示屏幕的宽度和高度，可用宽度和高度。

常用的对话框也属于挂载在window对象上的方法：alert(); confirm(); prompt();
9   1   8
208 230 247
  22   17

## <a name="DOM 文档对象模型">DOM-文档对象模型</a>

DOM(Document Object Model)文档对象模型，是所有浏览器公共遵守的标准，DOM 将HTML和XML文档映射成一个由不同节点组成的树型结构，俗称DOM树。

其核心对象是document，用于描述DOM树的状态和属性，并提供对应的DOM操作API。

### DOM 被划分为1级、2级、3级，共3个级别：
* 1级DOM -，由DOM核心与DOM HTML两个模块组成。DOM核心能映射以XML为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML通过添加HTML专用的对象与函数对DOM核心进行了扩展。

* 2级DOM - 鉴于1级DOM仅以映射文档结构为目标，DOM 2级面向更为宽广。通过对原有DOM的扩展，2级DOM通过对象接口增加了对鼠标和用户界面事件（DHTML长期支持鼠标与用户界面事件）、范围、遍历（重复执行DOM文档）和层叠样式表（CSS）的支持。同时也对DOM 1的核心进行了扩展，从而可支持XML命名空间。

* 3级DOM - 通过引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。

### [DOM事件](/details\JS\details\DOM事件.md)

## <a name="事件委托">事件委托(代理)delegate</a>

事件注册在父级元素上，依靠事件冒泡机制与事件捕获机制，子级元素的事件将委托给父级元素。

优点：
* 事件动态绑定，当新增子对象时，无需再对其进行事件绑定
* 可以减少事件注册数量，节约内存开销，提高性能。

缺点：
* 事件委托基于冒泡，对于不冒泡的事件不支持。

    层级过多，冒泡过程中，可能会被某层阻止掉。

    理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。

    把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。


[实现一个事件委托](\details\常用的方法\实现一个事件委托.md)


## <a name="DOM常用属性">DOM常用属性</a>
* parentNode  // 当前元素的父节点对象
* children // 当前元素所有子元素节点对象，只返回HTML节点
* childNodes  // 当前元素所有子节点，包括文本，HTML，属性节点。（回车也会当做一个节点）
* firstChild || firstElementChild // 当前元素的第一个子节点对象
* lastChild || lastElementChild // 前元素的最后一个子节点对象

* nextSibling || nextElementSibling  // 当前元素的下一个同级元素 没有就返回null
* previousSibling || previousElementSibling // 当前元素上一个同级元素 没有就返回 null

* innerHTML // 元素的所有文本，包括html代码
* innerText // 元素的自身及子代所有文本值，只是文本内容，不包括html代码
* 
* nodeName // 节点节点名称，返回值为大写 （如：DIV，P）
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


## <a name="DOM操作">DOM操作—添加、移除、移动、复制、创建和查找节点</a>
#### 创建新节点
* document.createDocumentFragment()  //创建一个DOM片段节点
* document.createElement('元素名')   //创建一个元素节点
* document.createTextNode('文本内容') //创建一个文本节点
* document.createAttribute('属性名') // 创建一个属性节点,如class
* document.createComment('注释节点'); // 创建一个注释节点

```js
var node = document.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

#### 添加、移除、替换、插入、克隆
* appendChild(childNode)  添加节点
* insertBefore(newChild,oldChild) 添加节点
* removeChild(childNode) 删除节点    
* replaceChild(newNode,oldNode）替换节点
* cloneNode(boolean)复制节点： newNode=oldNode.cloneNode(boolean) ; 
  参数可选复制节点,接受一个布尔值参数， true表示深复制（复制节点及其所有子节点），  false表示浅复制（复制节点本身，不复制子节点）;默认是false 。


#### 查找节点
* document.querySelector() // 查找第一个 （id、className、tgaName)
* document.querySelectorAll() //查找所有 （id、className、tgaName)

* document.getElementById() //通过元素Id查找，唯一性
* document.getElementsByClassName() //通过元素classname查找(返回数组)
* document.getElementsByTagName() //通过标签名称查找(返回数组)
* document.getElementsByName()  //通过元素的Name属性的值查找(返回数组)

* document.documentElement //获取页面中的HTML标签
* document.body //获取页面中的BODY标签
* document.all //获取页面中的所有元素节点的对象集合型，返回HTMLCollection
  >document.all[0] //相当于document.documentElement

* document.forms 获取当前页面所有form，返回一个 HTMLCollection 

#### 操作属性的方法
* createAttribute(attrName) // 创建一个属性节点
* getAttribute(attrName)  //获取属性值
* setAttribute(attrName,attrValue)  //设置属性
* removeAttribute(attrName)  //移除属性
* hasAttribute(attrName) //判断是否存在该属性
* getAttributeNode(attrName) // 获取属性节点
* setAttributeNode(attrName) // 设置属性节点

```js
let attr = document.createAttribute("class");
attr.nodeValue="democlass";
document.querySelector('#demo').setAttributeNode(attr); 
```

#### 样式相关API
* setProperty(propertyname, value, priority) // 设置 CSS 样式属性
  >priority: 可选，规定属性的优先级("important" | undefined | "")

* removeProperty(propertyname) // 移除指定的 CSS 样式属性

```js
ele.style.color = 'red';  
ele.style.setProperty('font-size', '16px', 'important');  
ele.style.removeProperty('color');  
```

* window.getComputedStyle(element, [pseudoElt]) 获取元素上的所有样式
  >pseudoElt 指定一个要匹配的伪元素的字符串。必须对普通元素省略（或null）。

* classList
  * add // 添加class
  * remove // 移除class
  * toggle // 切换class（没有添加，有则移除
  * replace // 替换class

```js
ele.classList.add("a");
ele.classList.remove("a");
ele.classList.toggle("a");
ele.classList.replace("a", "b");
``` 

## <a name="获取元素属性">获取元素属性innerHTML、outerHTML、innerText 、outerText、value</a>
```html
<div class="box">
  000
  <p class="1">11</p>
  <!-- 注释 -->
  <p class="2">22</p>
</div>
```

#### innerHTML()

在读模式下，innerHTML 返回其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。
```js
let box = document.querySelector('.box')
box.innerHTML
// 返回值
//   000
//   <p class="1">11</p>
//   <!-- 注释 -->
//   <p class="2">22</p>
```

在写模式下，innerHTML 会根据指定的值创建新的 DOM 树，然后用这个 DOM 树完全替换调用元素原先的所有子节点。
```js
let cnt = '<p class="2">2222</p>'
box.innerHTML = cnt
//会替换 div.box 里的所有内容为 cnt
```
![innerHTML](/img/innerHTML.png) 

#### outerHTML

在读模式下，outerHTML 返回自身及其所有子节点（包括元素、注释和文本节点）对应的 HTML 标签。(同innerHTML)
```js
let box = document.querySelector('.box')
box.outerHTML
// 返回值
//   <div class="box">
//     000
//     <p class="1">11</p>
//     <!-- 注释 -->
//     <p class="2">22</p>
//   </div>
```

在写模式下，outerHTML 会根据指定的 HTML 字符串创建新的 DOM 子树完全替换调用元素。
```js
let cnt = '<p>outerHTML</p>'
box.outerHTML = cnt 
//会替换掉 div.box 为 cnt
```
![outerHTML](/img/outerHTML.png) 

#### innerText

在读模式下，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来
```js
box.innerText
// 返回值
//   000

//   11

//   22
```

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
```js
box.innerText = '<p>innerText</p>' 
//<p>不会解析为标签，会当作字符串
```

![innerText](/img/innerText.png) 

#### outerText

在读模式下，(同innerText)
```js
box.outerText
// 返回值
//   000

//   11

//   22
```

在写模式下，会删除元素的所有子节点，插入包含相应文本值的文本节点(不会解析标签。。)
```js
box.outerText = '<p>outerText</p>' 
//<p>不会解析为标签，会当作字符串，同时会替换掉 box
```

![outerText](/img/outerText.png) 

#### value  
设置或返回文本框的值
```html
<input type="text" class="ipt" value="111">
document.querySelector('.ipt').value
document.querySelector('.ipt').value = 222
```

## <a name="变量、函数声明提升">变量、函数声明提升</a>
* 变量声明提升：变量申明在进入执行上下文就完成了。
* 函数声明提升：执行代码之前会先读取函数声明，意味着可以把函数申明放在调用它的语句后面。

只要变量、函数在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

`函数声明会覆盖变量声明，但不会覆盖变量赋值。`

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
函数声明 > 函数形参 >  变量名

```js
var foo = {n:1};
(function foo(foo) {
    var foo;
    console.log(foo.n);//1 --形参
    foo.n=3; // --改变形参(全局变量foo)的n赋值
    var foo = {n:2};//重新声明定义foo 
    console.log(foo.n);// 2 //此时foo为局部变量
})(foo); //存入全局的foo变量 作为 形参
console.log(foo.n); //3
```

```js
var foo = {n:1};
(function foo(foo) {
  var foo;
  console.log(foo);//foo(){} //函数声明提升
  var foo = {n:2};//重新声明定义foo 
  function foo(){}
  console.log(foo.n);// 2
})(foo); //存入全局的foo变量 作为 形参
console.log(foo.n); //1
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
[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

数据属性 4 个特性: 
* configurable(可配置)
* enumerable(可枚举)
* writable(可修改)
* value(属性值)

访问器属性 2 个特性: 
* get(获取)
* set(设置)

`get,set 与 writable,value 是互斥的,同时设置会报错`

[Object.getOwnPropertyDescriptor(obj, key)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
获取对象自有属性对应的属性描述符，返回一个对象

### configurable 可配置

* 能否使用delete
* 能否修改属性特性
* 能否修改访问器属性
* 值为false为不可重新定义
* 默认值为false 

简单的说 ，设置configurable为false之后，就不能删除或修改这个属性（属性值不影响）

Object.defineProperty定义时未设定configurable,enumerable,writable时默认false  
直接定义（obj={a:1}）时configurable,enumerable,writable时为true
```js
var obj = Object.defineProperty({},"a",{
  value :1,
  configurable :false,
  enumerable: true,
  writable: true
});
// 也可以这样写
/* var obj = Object.create({},{
    "a":{
      value :1,
      configurable :false,
      enumerable: true,
      writable: true
    },
}); */

console.log(Object.getOwnPropertyDescriptor(obj, 'a'))
/* 
{
  value: 1,
  writable: true,
  enumerable: true,
  configurable: false,
  __proto__: Object
}
 */

delete obj.a// 删除失败，普通模式没有提示或错误，严格模式会有TypeError
obj.a = 2;
console.log(obj.a);//正常使用，输出结果为 2
```

### enumerable 可枚举

对象属性是否可循环，false为不可循环，默认值为 false
简单的说，当你想遍历这个对象的时候，正常会输出每一个属性，但当你设置false时，这个属性就不会被遍历到

enumerable：false 无法遍历到的方法
* for in 
* Object.keys
* Object.values
* Object.entries

enumerable：false 依旧可以遍历到的方法
* Object.getOwnPropertyNames()
* Reflect.ownKeys()

```js
var obj = {
    a: 1,
    b: 2,
    c: 3
};
Object.defineProperty(obj,"a",{
  value: 1,
  configurable: true,
  enumerable: false,
  writable: true
});

for(var i in obj) {
    console.log(i); //输出b，c 不会输出a，a已经设置不被枚举
}

Object.keys(obj) // ['b','c']

Object.getOwnPropertyNames(obj) // ['a','b','c']
Reflect.ownKeys(obj) // ['a','b','c']
```

### writable 可修改

对象属性是否可修改,flase为不可修改，默认值为 false

设置不可修改后，可以理解为常量，不能对属性值进行修改
```js
var obj = Object.defineProperty({},"a",{
  value :1,
  configurable :true,
  enumerable :true,
  // writable:false
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
let obj = {
	a: 1,
};
Object.defineProperty(obj,"a",{
	get: function () {
		console.log("调用get函数");
	},
	set: function (val) {
    console.log("调用set函数");
		return val;
	}
})
console.log(obj.a) //调用get函数
console.log(obj.a = 999999); //调用set函数
```

### [Object.freeze()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
Object.freeze() 方法可以冻结一个对象(`浅冻结`)，防止对象被修改。

被冻结后对象的特性：
* 不能被修改
* 不能添加新的属性
* 不能删除已有属性
* 不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值
* 被冻结对象的原型也不能被修改

```js
let obj = Object.defineProperty({},'a', {
  value: 1,
  enumerable: true,
  configurable: true,
  writable: true,
})
Object.freeze(obj)
console.log(Object.getOwnPropertyDescriptor(obj,'a'));
// {
//   value: 1
//   writable: false
//   enumerable: true
//   configurable: false
// }
```

作为参数传递的对象与返回的对象都被冻结
所以不必保存返回的对象（因为两个对象全等）
```js
let obj1 = Object.freeze(obj);
obj1 === obj; // true
```

Object.isFrozen判断是否冻结
```js
Object.freeze(obj);
Object.isFrozen(obj) //true
```

Object.freeze()属于浅冻结
```js
let obj = {
  num: 1,
  a: {
    num: 1
  }
}
Object.freeze(obj)
obj.num=9
obj.a.num=9

console.log(obj)
// {
//   num: 1,
//   a: {
//     num: 9
//   }
// }
```

使用Object.freeze() 进行性能优化

Vue中可以使用Object.freeze()冻结一个静态数据，使其不进行响应式

Vue源码
```js
export function defineReactive() {
  // .....
  // 获取对象自有属性对应的属性描述符
  const property = Object.getOwnPropertyDescriptor(obj, key)
  // 如果属性不可配置 则return，不进行监测，
  if (property && property.configurable === false) {
    return
  }
  // .....
}  
```

## <a name="typeof instanceof">typeof 、instanceof 、in</a>
[判断数据类型typeof 、instanceof 、in...](/details\常用的方法\判断数据类型.md)


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
```js
function *fetch() {
   yield ajax('XXX1', () => {})
   yield ajax('XXX2', () => {})
   yield ajax('XXX3', () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()
```

### Promise
[Promise](/details/JS/Promise.md)

Promise 就是为了解决 callback 的问题而产生的。

Promise 实现了链式调用，也就是说每次 then 后返回的都是一个全新 Promise，如果我们在 then 中 return ，return 的结果会被 Promise.resolve() 包装。

```js
ajax('XXX1')
 .then(res => {
     // 操作逻辑
     return ajax('XXX2')
 }).then(res => {
     // 操作逻辑
     return ajax('XXX3')
 }).then(res => {
     // 操作逻辑
 })
 ```
优点：解决了回调地狱的问题。
缺点：无法取消 Promise ，错误需要通过回调函数来捕获。

### async await
[async_await](/details/JS/async_await.md)
```js
async function asyncFuns() {
  await fn1()
  await fn2()
  await fn3()
}
```

优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题

缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

```js
let a = 0
let b = async () => { 
  a = a + await 10
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1
```

首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，因为 await 内部实现了 generator ，generator会保留堆栈中东西，所以这时候a = 0被保存了下来；
因为 await 是异步操作，后来的表达式不返回 Promise 的话，就会包装成 Promise.reslove(返回值)，然后会去执行函数外的同步代码；




## <a name="闭包">闭包</a>
[闭包](/details\JS\details\闭包.md)

## <a name="垃圾回收机制">垃圾回收机制</a>
  Javascript具有自动垃圾回收机制(GC:Garbage Collecation)。

  原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

垃圾回收机制
* 引用计数法
* 标记清除法

### 引用计数法
引用计数的含义是跟踪记录每个值被引用的次数。

当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。
当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。
这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。

但是很重要的一点是当遇到循环引用的时候，函数的引用次数就不会为0，所以不会被垃圾回收器回收内存，会造成内存泄露

```js
function test(){ 
  var a = {} ; //a的引用次数为0 
  var b = a ; //a的引用次数加1，为1 
  var c = a; //a的引用次数再加1，为2 
  var b = {}; //a的引用次数减1，为1 
  var c = nul; //a的引用次数减1，为0 
  // GC回收a
}
```

`优点：`
* 可即刻回收垃圾，当被引用数值为0时，对象马上会把自己作为空闲空间连到空闲链表上，也就是说。在变成垃圾的时候就立刻被回收。
* 因为是即时回收,那么‘程序’不会暂停去单独使用很长一段时间的GC，那么最大暂停时间很短。
* 不用去遍历堆里面的所有活动对象和非活动对象

`缺点：`
* 计数器需要占很大的位置，因为不能预估被引用的上限，打个比方，可能出现32位即2的32次方个对象同时引用一个对象，那么计数器就需要32位。
* 最大的劣势是无法解决循环引用无法回收的问题 这就是前文中IE9之前出现的问题


```js
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o 引用 o2,o2的引用次数是1
  o2.a = o; // o2 引用 o,o的引用此时是1

  return "azerty";
}

f();
```
fn在执行完成之后理应回收fn作用域里面的内存空间，但是因为o里面有一个属性引用o2,导致o2的引用次数始终为1，o2也是如此，而又非专门当做闭包来使用，所以这里就应该使o和o2被销毁。
因为算法是将引用次数为0的对象销毁，此处都不为0，导致GC不会回收他们，那么这就是内存泄漏问题。


### 标记清除法
分为两个阶段

* 标记阶段：把所有活动对象做上标记。
* 清除阶段：把没有标记（也就是非活动对象）销毁。

在函数声明一个变量的时候，就将这个变量标记为“进入环境”。从逻辑上讲，永远都不能释放进入环境的变量作占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。
而当变量离开环境时，则将其标记为“离开环境”。

垃圾回收器在运行时候会给存储在内存中中的所有变量都加上标记。然后它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。
在此之后再被标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内存清楚工作，销毁那些带标记的值并回收他们所占用的内存空间。
```js
function test(){ 
  //a,b被标记 ，进入环境 
  var a = 10 ; 
  var b = 20 ; 
} 
test(); //执行完毕 之后 a、b又被标离开环境，被回收。
```

`优点：`

* 实现简单，打标记也就是打或者不打两种可能，所以就一位二进制位就可以表示
* 解决了循环引用问题

`缺点：`

* 造成碎片化（有点类似磁盘的碎片化）
* 再分配时遍次数多，如果一直没有找到合适的内存块大小，那么会遍历空闲链表(保存堆中所有空闲地址空间的地址形成的链表）一直遍历到尾端


## <a name="内存泄漏">内存泄漏</a>
内存泄漏:是指一块被分配的内存在使用完毕后未释放，直到浏览器进程结束。指任何对象在您不再拥有或需要它之后仍然存在，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

浏览器中采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，因此会产生内存泄漏。

* 意外的全局变量引起的内存泄漏（变量未声明，通过this创建,）
  ```js
  function foo(arg) {
    bar = "this is a hidden global variable";
  }
  ```

* 闭包引起的内存泄漏
  ```js
    function(){ 
      var a = 1 
      return function (){
        return 1+a
      }
    }
  ```

* 被遗忘的定时器或者回调
  ```js
  let inter = setInterval(function() {
    do something
  }, 1000);
  // 清除定时器
  // clearInterval(inter)
  // inter = null 
  ```

* 没有清理的DOM元素引用
  ```js
  var div = document.querySelector('.div')
  // div= null // 解除引用
  ```


* 子元素存在引用引起的内存泄露
```js
var parent = document.querySelector('#P');

var child = document.querySelector('#C');   //在DOM树中child是parent的一个子节点

parent = null;//parent还不能被回收，
child = null;//现在parent可以被释放了
```

* console.log   在传递给 console.log的对象是不能被垃圾回收 ，因为在代码运行之后需要在开发工具能查看对象信息。所以最好不要在生产环境中 console.log任何对象。

---

`如何避免内存泄漏`
* 减少不必要的全局变量，使用严格模式避免意外创建全局变量。
* 在你使用完数据后，及时解除引用(闭包中的变量，dom引用，定时器清除)。
* 组织好你的逻辑，避免死循环等造成浏览器卡顿，崩溃的问题。


## <a name="原型、原型链、原型继承">原型、原型链、原型继承</a>
[原型-原型链-继承](\details\面试题\JS面试题/原型-原型链-继承.md)

## <a name="创建对象的几种方式">创建对象的几种方式</a>

对象字面量：
`p = {name:'jack'}`

new Object():  
`p = new Object({name:'jack'})`

Object.create:
```js
// Object.create 允许你创建一个对象，只要该对象上的属性查找失败，它就可以查询另一个对象以查看该另一个对象是否具有该属性。
p = Object.create({name:'jack'}) //属性在原型上 
p = Object.create({},{name:{value:'jack'}}) //属性在自身上
```

构造函数：
```js
function P(name){this.name = name}
p = new P('jack')
```

## <a name="作用域、作用域链、执行上下文">作用域、作用域链、执行上下文(执行环境)</a>
[作用域-作用域链-执行上下文](\details\面试题\JS面试题/作用域-作用域链-执行上下文.md)

## <a name="this">this理解</a>
[this](/details/JS/details/this.md)

## <a name="apply call bind">apply call bind用法及实现</a>
区别
* 都是用来改变函数的this对象的指向的；

* 第一个参数都是this要指向的对象，也就是想指定的上下文；都可以利用后续参数传参；

* apply、call则是立即调用；bind是返回对应函数，便于稍后调用；
  >foo.apply(obj,[arg1,arg2]),foo.call(obj,arg1,arg2)


把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认规则。

下面两种情况下会传入null：

使用apply(..)来“展开”一个数组，并当作参数传入一个函数  
bind(..)可以对参数进行柯里化（预先设置一些参数）

```js
function foo(a, b) {
    console.log( "a:" + a + "，b:" + b );
}

foo.call( null, 2, 3 );

// 把数组”展开“成参数
foo.apply( null, [2, 3] ); // a:2，b:3

// 使用bind进行柯里化
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2，b:3
```

[手写apply ](/details/常用的手写函数/apply.md)
[手写call](/details/常用的手写函数/call.md)
[手写bind](/details/常用的手写函数/bind.md)


## <a name="公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>

```js
function P(age){
  var name = '私有变量';
  var fun = function(){console.log('私有方法')}

  this.age = age //公有(实例)变量
  this.func = function(){console.log('公有(实例)方法')}
}
P.fun = function(){console.log('静态方法')}
P.age = '静态变量'

console.log(P.age,P.fun())
```

私有变量和函数：
>在函数内部定义的变量和函数，如果不对外提供接口，外部是无法访问到的，也就是该函数的私有的变量和函数。


静态变量和静态函数：
>当定义一个函数后通过点号 “.”为其添加的属性和函数，通过对象本身仍然可以访问得到，但是其实例却访问不到


实例变量和实例函数：

1. 公有(原型)方法、属性：//必需先实例化对象
```js
function User(){
  this.age = 26;//  公有属性
  this.getAge = function(){}//公有方法
}
User.prototype.getName=function(){}//公有方法
var user = new User();
```

2. 私有方法、属性：//只能在函数内部直接调用
```js
function User(age){
  var age = age;//私有属性
  function getAge(){}//私有方法
}
```

3. 静态方法、属性：无需实例化就可以调用的方法、属性
>
    //静态方法无法调用公有属性、公有方法、私有方法、私有属性、特权方法和原型属性
    //对象的实例不能调用对象的静态方法，只能调用实例自身的静态属性和方法

```js
function User(){}
User.age = 26;//静态属性
User.getAge =function(){} //静态方法
```

4. 特权方法：
>用来访问私有变量和私有方法的 公有方法
```js
function User(age){
  var age = age;//私有属性
  this.getAge = function(){ //特权方法
    return age; //特权方法调用私有属性
  }
}
var user = new User(26);
```

## <a name="继承方式">继承方式</a>
[继承.md](details/继承/index.md)

## <a name="设计模式">设计模式</a>
[设计模式](/details/设计模式/index.md)

## <a name="事件执行机制">事件执行机制</a>
[事件执行机制](\details\面试题\JS面试题\事件执行机制EventLoop.md)

事件循环中分为宏任务队列和微任务队列。

其中settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行；

Promise本身是同步的立即执行函数；Promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；

async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。


## <a name="深浅拷贝">深浅拷贝</a>
[深浅拷贝](/details/常用的手写函数/深拷贝-浅拷贝.md)

## <a name="js延迟加载：defer,async">js异步延迟加载：async，defer</a>
[async-defer](/details\JS\details\async-defer.md)

## <a name="重绘和回流">[重绘和回流](https://github.com/chenjigeng/blog/issues/4)</a>
[重绘和回流](\details\JS\details\重绘-回流.md)


## <a name="模块化">模块化</a>
[模块化](/details/JS/Module.md)


## <a name="跨域">跨域</a>
[详情](/details/跨域/README.md)

## <a name="常见的web攻击">常见的web攻击</a>
[常见的web攻击](\details\面试题\JS面试题\常见的web攻击.md)


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
相当于 new URL('https://www.aaa.com/a')
 
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

[字符转码、解码](/details\其他\字符转码-解码.md)

## <a name="递归、迭代">递归、迭代</a>
`递归（recursion）`：递归常被用来描述以自相似方法重复事物的过程，在数学和计算机科学中，指的是在函数定义中使用函数自身的方法。（调用自身）
>一般是使用if else判断方式决定处理逻辑是返回还是接着自调用

`迭代（iteration）`：重复反馈过程的活动，每一次迭代的结果会作为下一次迭代的初始值。（用新值覆盖旧值）
>使用for，while循环执行

---

`递归是一个树结构`，从字面可以其理解为重复“递推”和“回归”的过程，当“递推”到达底部时就会开始“回归”，其过程相当于树的深度优先遍历。

`迭代是一个环结构`，从初始状态开始，每次迭代都遍历这个环，并更新状态，多次迭代直到到达结束状态。
![递归迭代](/img/递归迭代.png)

理论上递归和迭代时间复杂度方面是一样的，但实际应用中（函数调用和函数调用堆栈的开销）递归比迭代效率要低。

---

举个例子：你要给小孩子买玩具。

递归：你自己不太了解小孩子的需求，为了缩小范围，让你的儿子去给孙子挑选。儿子比你强点有限，但依然不太了解小孩子的需求。为了缩小范围，又让你孙子去挑选。如此这般，直到找到合适的玩具。

迭代：你挑了一件不行，又挑了一件又不行。如此这般，直到找到合适的玩具。

所以一句话：递归是自己调用自己，每次旨在缩小问题规模。迭代是自己执行很多次，每次旨在更接近目标。

---

实例：计算 n!

递归实现:
```js
function factorial(n) {
  if(n === 1) return n
  return n*factorial(n-1)
}
```

迭代实现：
```js
function factorial(n) {
  let s = n
  for(let i = n-1;i > 0;i--) {
    s *= i
  }
  return s
}
```

### 递归的劣势
* 递归容易产生"栈溢出"错误（stack overflow）
* 效率方面，递归可能存在冗余计算

## <a name="尾调用、尾递归">尾调用、尾递归</a>
[尾调用和尾递归](https://juejin.im/post/6844903590033621006)
### 尾调用

尾调用指的是函数作为另一个函数的最后一条语句被调用。

当全部满足以下条件，尾调用不再创建新的栈帧，而是清除并重用当前栈帧：
* 尾调用不访问当前栈帧的变量(函数不是一个闭包。)
* 尾调用是最后一条语句
* 尾调用的结果作为函数返回


非尾调用
```js
function foo () { console.log(111); }
function bar () { foo(); }
function baz () { bar(); }

baz();
```
函数在调用的时候会在调用栈（call stack）中存有记录，每一条记录叫做一个调用帧（call frame），每调用一个函数，就向栈中push一条记录，函数执行结束后依次向外弹出，直到清空调用栈，参考下图：
![](/img/tailcall-1.png)

造成这种结果是因为每个函数在调用另一个函数的时候，并没有 return 该调用，所以JS引擎会认为你还没有执行完，会保留你的调用帧。

baz() 里面调用了 bar() 函数，并没有 return 该调用，所以在调用栈中保持自己的调用帧，同时 bar() 函数的调用帧在调用栈中生成，同理，bar() 函数又调用了 foo() 函数，最后执行到 foo() 函数的时候，没有再调用其他函数，这里没有显示声明 return，所以这里默认 return undefined。

foo() 执行完了，销毁调用栈中自己的记录，依次销毁 bar() 和 baz() 的调用帧，最后完成整个流程。


尾调用优化
```js
'use strict'
function foo () { console.log(111); }
function bar () { return foo(); }
function baz () { return bar(); }

baz();
```

这里要注意： `尾调用优化只在严格模式下有效。`
在非严格模式下，大多数引擎会包含下面两个属性，以便开发者检查调用栈：
* func.arguments: 表示对 func最近一次调用所包含的参数
* func.caller: 引用对 func最近一次调用的那个函数

在尾调用优化中，这些属性不再有用，因为相关的信息可能以及被移除了。因此，严格模式(strict mode)禁止这些属性，并且尾调用优化只在严格模式下有效

![](/img/tailcall-2.png)

尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，只要直接用内层函数的调用记录取代外层函数的调用记录就可以了，调用栈中始终只保持了一条调用帧。那么在调用栈中的调用帧始终只有一条，这样会节省很大一部分的内存，这也是尾调用优化的意义。


非尾调用例子
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

### 尾递归
当一个函数尾调用自身，就叫做尾递归;解决递归栈溢出问题
```js
function foo () {
  return foo();
}
```

那么尾递归相比递归而言，有哪些不同呢？ 我们通过下面这个求阶乘的例子来看一下：
```js
function factorial (num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(5);            // 120
factorial(10);           // 3628800
factorial(500000);       // Uncaught RangeError: Maximum call stack size exceeded
```
上面是使用递归来计算阶乘的例子，操作系统为JS引擎调用栈分配的内存是有大小限制的，如果计算的数字足够大，超出了内存最大范围，就会出现栈溢出错误。

尾递归
```js
'use strict';

function factorial (num, total) {
    if (num === 1) return total;
    return factorial(num - 1, num * total);
}

factorial(5, 1);                // 120
factorial(10, 1);               // 3628800
factorial(500000, 1);           // 分情况

// 注意，虽然说这里启用了严格模式，但是经测试，在Chrome和Firefox下，还是会报栈溢出错误，并没有进行尾调用优化
// Safari浏览器进行了尾调用优化，factorial(500000, 1)结果为Infinity，因为结果超出了JS可表示的数字范围
// 如果在node v6版本下执行，需要加--harmony_tailcalls参数，node --harmony_tailcalls test.js
// node最新版本已经移除了--harmony_tailcalls功能

```

## <a name="">同步、异步、串行、并行、并发</a>

[同步、异步、串行、并行、并发](/details\JS\details\同步-异步-串行-并行-并发.md)

## <a name="WebWorker">WebWorker</a>
[WebWorker](/details\JS\WebWorker.md)

## <a name="浏览器缓存">浏览器缓存</a>
[浏览器缓存](/details\面试题\JS面试题\浏览器的缓存机制.md)

## <a name="前端性能优化的方法">前端性能优化的方法</a>
[WEB性能优化](/details/WEB性能优化/README.md)

## <a name="浏览器页面渲染">浏览器页面渲染</a>
[浏览器页面渲染](/details/面试题/JS面试题/浏览器页面渲染.md)

## <a name="从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
[从浏览器地址栏输入url到显示页面的步骤](\details\面试题\HTTP面试题\从浏览器地址栏输入url到显示页面的步骤.md)

## <a name="前端工程化">前端工程化</a>
前端工程化主要应该从模块化、组件化、规范化、自动化
[前端工程化](https://www.zhihu.com/question/24558375)


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

## <a name="语句标签">语句标签</a>

任何 JavaScript 语句是可以加标签的，在语句前加冒号即可：`firstStatement: var i = 1;`

大部分时候，这个东西类似于注释，没有任何用处。
唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环。
```js
outer: while(true) {
  inner: while(true) {
      break outer;
  }
}
console.log("finished")
```
break/continue 语句如果后跟了关键字，会产生带 target 的完成记录。一旦完成记录带了 target，那么只有拥有对应 label 的循环语句会消费它