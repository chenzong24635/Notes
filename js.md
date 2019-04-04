# 链接

[MDN](https://developer.mozilla.org/zh-CN/)

[阮一峰《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)

[ECMAScript 6兼容性表](http://kangax.github.io/compat-table/es6/)


[阮一峰《JavaScript 标准参考教程》](http://javascript.ruanyifeng.com/)

[《JavaScript 教程》](https://wangdoc.com/javascript/index.html)

[《TypeScript》](https://www.tslang.cn/docs/home.html)

[《TypeScript》](https://ts.xcatliu.com/introduction/what-is-typescript.html)

[jQueryAPI](https://www.html.cn/jqapi-1.9/)

[jq22-插件库](http://www.jq22.com/)

[jQuery之家-插件库](http://www.htmleaf.com/)


[Swiper](https://www.swiper.com.cn/api/index.html) 轮播图
[]()
[]()


# 目录

* <a href="#===运算符判断">===运算符判断</a>
* <a href="#==运算符判断">==运算符判断</a>
* <a href="#比较运算符"><,>,<=,>=的比较规则</a>
* <a href="#加运算符">+运算符工作流程</a>
* <a href="#keyCode">keyCode:键盘按键键码</a>


* <a href="#JS">**JS**</a>

* <a href="#数据类型、内置对象">数据类型、内置对象</a>
* <a href="#undefined与null定义、区别">undefined与null定义、区别</a>

* <a href="#BOM 浏览器对象模型">BOM 浏览器对象模型</a>
* <a href="#DOM 文档对象模型">DOM 文档对象模型</a>
* <a href="#DOM事件">DOM事件</a>
* <a href="#DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点</a>
* <a href="#事件委托(代理)">事件委托(代理)</a>
* <a href="#闭包">闭包</a>
* <a href="#原型、原型链、原型继承">原型、原型链、原型继承</a>
* <a href="#typeof和instanceof的区别">typeof和instanceof的区别</a>
* <a href="#作用域、作用域链、执行环境、上下文">作用域、作用域链、执行环境、上下文</a>
* <a href="#公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>
* <a href="#this">this</a>
* <a href="apply call bind">apply call bind</a>
* <a href="#深，浅拷贝">深，浅拷贝</a>
* <a href="#js延迟加载：defer,async">js延迟加载：defer,async</a>
* <a href="#重绘和回流">重绘和回流</a>
* <a href="#模块化">模块化AMD CMD modules</a>
* <a href="#内存泄漏">内存泄漏</a>
* <a href="#use strict">"use strict"? 用处？</a>
* <a href="#面向过程和面向对象的异同">面向过程和面向对象的异同</a>
* <a href="#跨域">跨域</a>
* <a href="#常见的web攻击">常见的web攻击</a>
* <a href="#URI、URL、URN">URI、URL、URN</a>
* <a href="#函数重载">函数重载</a>
* <a href="#节流、防抖">节流、防抖</a>
* <a href="#柯里化">柯里化</a>
* <a href="#前端性能优化的方法">前端性能优化的方法</a>
* <a href="#从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤</a>
* <a href="#JS执行机制">JS执行机制</a>
* <a href="#设计模式">设计模式</a>
* <a href="#web安全">web安全</a>
* <a href="#get与post区别">get与post区别</a>
* <a href="#css和js动画的差异">css和js动画的差异</a>



# ===、==、Object.is()判断
![===、==、Object.is()](/img/===.png)

# <a name="===运算符判断">===运算符判断</a>
    如果两个值不是相同类型，它们不相等
    如果两个值都是null或者都是undefined，它们相等
    如果两个值都是布尔类型true或者都是false，它们相等
    如果其中有一个是NaN，它们不相等
    如果都是数值型并且数值相等，他们相等， -0等于0
    如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
    如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等
    
# <a name="==运算符判断">==运算符判断</a>
    如果两个值类型相同，按照===比较方法进行比较
    如果类型不同，使用如下规则进行比较
    如果其中一个值是null，另一个是undefined，它们相等
    如果一个值是数字另一个是字符串，将字符串转换为数字进行比较
    如果有布尔类型，将true转换为1，false转换为0，然后用==规则继续比较
    如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
    其他所有情况都认为不相等

# <a name="比较运算符"><,>,<=,>=的比较规则</a>

    所有比较运算符都支持任意类型，但是比较只支持数字和字符串，所以需要执行必要的转换然后进行比较，转换规则如下:
    如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错
    经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）
    否则，如果有一个操作数不是字符串，将两个操作数转换为数字进行比较

#  <a name="加运算符">+运算符工作流程</a>
    如果有操作数是对象，转换为原始值
    此时如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接
    否则：所有操作数都转换为数字并执行加



#  <a name="keyCode">keyCode:键盘按键键码</a>
![keyCode](/img/keyCode.png)

# <a name="JS">**JS**</a>

JS的特点：无需编译、弱类型、基于对象、事件驱动
JS的组成：核心( ECMAScript) , 文档对象模型(DOM), 浏览器对象模型(BOM)

## <a name="数据类型、内置对象">数据类型、内置对象</a>
### 数据类型：
1. 基本数据类型：Undefined、Null、Boolean、Number、String、Symbol  ---值传递
2. 复杂（引用）数据类型:Object    --地址传递

* 两类型的区别：存储位置不同；
>
    基本数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
    引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

    栈内存（连续的存储空间，类似数据结构中的栈）：主要用来存放数值、字符、内存地址等小数据
    堆内存（散列的存储空间，类似数据结构中的链表）：存放可以动态变化的大数据

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


## <a name="undefined与null定义、区别">undefined与null定义、区别</a>
>

    null和undefined只有文字形式，没有构造形式

    undefined:语义：不存在该数据；声明了变量，但未赋值或对象属性不存在
    null:语义：存在该数据，但未赋值； 表无值、无对象

    只有被定义才有可能为 null，未定义时为 undefined。

    null 用于对象 , undefined 用于变量，属性和方法。

    null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针，意思是你定义了它,但它没有分配内存空间。

    null的类型是object，即 typeof null 返回object

* undefined 
1. 变量被声明了，但没有赋值时，就等于undefined。
2. 调用函数时，应该提供的参数没有提供，该参数等于undefined。
3. 对象没有赋值的属性，该属性的值为undefined。
4. 函数没有返回值时，默认返回undefined。


如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。
要先使用 typeof 来检测对象是否已定义：if (typeof myObj !== "undefined" && myObj !== null) 

## <a name="BOM 浏览器对象模型">BOM 浏览器对象模型</a>
>
    BOM 是 Browser Object Model 的缩写，即浏览器对象模型。
    当一个浏览器页面初始化时，会在内存创建一个全局的对象，用以描述当前窗口的属性和状态，这个全局对象被称为浏览器对象模型，即BOM。
    BOM的核心对象就是window，window 对象也是BOM的顶级对象，其中包含了浏览器的 6个核心模块：

1. document - 即文档对象，渲染引擎在解析HTML代码时，会为每一个元素生成对应的DOM对象，由于元素之间有层级关系，因此整个HTML代码解析完以后，会生成一个由不同节点组成的树形结构，俗称DOM树，document 用于描述DOM树的状态和属性，并提供了很多操作DOM的API。
2. frames - HTML 子框架，即在浏览器里嵌入另一个窗口，父框架和子框架拥有独立的作用域和上下文。
3. history - 以栈(FIFO)的形式保存着页面被访问的历史记录，页面前进即入栈，页面返回即出栈。用于将窗口的历史浏览记录用文档和文档状态列表的形式表示。
4. location - 表示该窗口中当前显示的文档的URL.。
5. navigator - 用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。
6. screen - 提供了浏览器显示屏幕的相关属性，比如显示屏幕的宽度和高度，可用宽度和高度。
常用的对话框也属于挂载在window对象上的方法：alert(); confirm(); prompt();

## <a name="DOM 文档对象模型">DOM 文档对象模型</a>
>

  DOM 是 Document Object Model 的缩写，即 文档对象模型，是所有浏览器公共遵守的标准，DOM 将HTML和XML文档映射成一个由不同节点组成的树型结构，俗称DOM树。
  其核心对象是document，用于描述DOM树的状态和属性，并提供对应的DOM操作API。

* DOM 被划分为1级、2级、3级，共3个级别：
1. 1级DOM -，由DOM核心与DOM HTML两个模块组成。DOM核心能映射以XML为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML通过添加HTML专用的对象与函数对DOM核心进行了扩展。
2. 2级DOM - 鉴于1级DOM仅以映射文档结构为目标，DOM 2级面向更为宽广。通过对原有DOM的扩展，2级DOM通过对象接口增加了对鼠标和用户界面事件（DHTML长期支持鼠标与用户界面事件）、范围、遍历（重复执行DOM文档）和层叠样式表（CSS）的支持。同时也对DOM 1的核心进行了扩展，从而可支持XML命名空间。
3. 3级DOM - 通过引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。


#### DOM事件
* DOM事件的级别
1. DOM0：不是W3C规范。
2. DOM1：开始是W3C规范。专注于HTML文档和XML文档。
3. DOM2：对DOM1增加了样式表对象模型
4. DOM3：对DOM2增加了内容模型 (DTD 、Schemas) 和文档验证。

* 事件流: 捕获事件流、冒泡事件流。
1. 捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。
2. 冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。

DOM事件流：捕获阶段 -> 目标阶段 -> 冒泡阶段
DOM事件捕获流程:window > document > documentElement(html标签) > body > ...> 目标对象

　.事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。
　.事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。
　.事件冒泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。

所有的事件都会捕获但不是所有事件都会冒泡,例如submit事件就不会被冒泡。 


* 事件模型：原始事件模型(DOM0级)、DOM2事件模型、IE事件模型。
1. DOM0级：没有事件流，事件一旦发生马上进行处理
* 在html中直接指定属性值：\<button id="demo" type="button" onclick="doSomeTing()" />　　
* 在js中: document.getElementsById("demo").onclick = doSomeTing()
　优点：所有浏览器都兼容
　缺点：逻辑与显示没有分离；相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面;  无法通过事件的冒泡、委托等机制

2. DOM2级：W3C制定的标准模型，现代浏览器（IE6~8除外）都已经遵循这个规范
* addEventListener("eventType","handler","true|false")    //eventType注意不要加‘on’前缀，handler：函数
* removeEventListner("eventType","handler","true!false")//事件类型、需要执行的函数、是否捕获，

2. IE事件模型：IE不把该对象传入事件处理函数,由于在任意时刻只会存在一个事件,所以IE把它作为全局对象window的一个属性.
attachEvent( "eventType","handler")
detachEvent("eventType","handler" )

* event对象常用属性:
    target：发生事件的节点；
    currentTarget：当前正在处理的事件的节点，在事件捕获或冒泡阶段；
    timeStamp：事件发生的时间，时间戳。
    bubbles：事件是否冒泡。
    cancelable：事件是否可以用preventDefault()方法来取消默认的动作；
    keyCode：按下的键的值；

* event对象方法
    event.preventDefault()，阻止默认行为
    event.stopPropagation()，阻止事件冒泡
    event.stopImmediatePropagation()，阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上，这个方法不接受任何参数。阻止掉同一事件的其他优先级较低的侦听器的处理
    event.initEvent()//初始化新事件对象的属性，自定义事件会用，不常用

## <a name="DOM操作">DOM操作—怎样添加、移除、移动、复制、创建和查找节点?</a>
* 创建新节点
>
    createDocumentFragment()    //创建一个DOM片段
    createElement()   //创建一个具体的元素
    createTextNode()   //创建一个文本节点

* 添加、移除、替换、插入
>
    appendChlid(childNode)  添加节点
    insertBefore(newChild,oldChild) 添加节点
    removeChild(childNode) 删除节点    
    replaceChild(newNode,oldNode）替换节点
    cloneNode()     复制节点：
  	newNode=node.cloneNode(boolean) ; 不写默认是false
    参数可选复制节点,接受一个布尔值参数， true 表示深复制（复制节点及其所有子节点），  false 表示浅复制（复制节点本身，不复制子节点）

* 查找节点
>
    document.querySelector() // 查找第一个 （id,className, tgaName)
    document.querySelectorAll() //查找所有 （id,className, tgaName)
    getElementsByTagName()    //通过标签名称
    getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
    getElementById()    //通过元素Id，唯一性
    getElementsByClassName（）//通过元素classname


## <a name="事件委托">事件委托(代理)</a>

事件注册在父级元素上，依靠事件冒泡机制与事件捕获机制，子级元素的事件将委托给父级元素。可以减少事件注册数量，节约内存开销，提高性能。

对js动态添加的子元素可自动绑定事件
>
    function agent(){
      let ul=document.getElementsByTagName("ul");
      ul.addEventListener('click',function(e){
        let event = e || window.event;
        let target= event.target || event.srcElement;
        if(target.tagName.toLowerCase() =='li'){
          alert(event.target.innerHTML);
        }
      }, false);
    };

## <a name="闭包">闭包</a>
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

## <a name="原型、原型链、原型继承">原型、原型链、原型继承</a>

原型(prototype)：
>
    函数本身就是个包含方法与属性的对象，每个对象都有个prototype(原型)属性。可通过原型为对象扩展属性，实现继承

原型链：
>
    当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，直至undefined（Object的Prototype就是undefined）从而形成了所谓的“原型链”。

_proto_,prototype区别：
>
    js里所有的对象都有proto属性(对象，函数)，可称为隐式原型，指向构造该对象的构造函数的原型。

    只有函数function才具有prototype属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。
    原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。

>

    实例的 __proto__ 属性（原型）等于其构造函数的 prototype 属性。
    Object.proto === Function.prototype
    Function.prototype.proto === Object.prototype
    Object.prototype.proto === null

    function P (){};
    let p = new P();
    p.__proto__ == P.prototype // true
    p instanceof P // true

构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;如果return的是对象，则返回该对象(注：若return null也会忽略返回值）。

![prototype](/img/prototype.png)

* 原型继承：
原型中的成员可以被和其相关的对象共享这一特性，可以实现继承。这种实现继承的方式，就叫做原型继承。



#### 如何实现继承？
https://blog.csdn.net/hhthwx/article/details/78095944
https://blog.csdn.net/caijixin/article/details/78295676
1. 构造继承
2. 原型链继承
3. 组合继承：构造继承和原型链组合
4. 原型式继承
5. 原型式继承
6. 寄生组合式继承

## <a name="typeof和instanceof的区别">typeof和instanceof的区别</a>
在 JavaScript 中，判断一个变量的类型尝尝会用 typeof 运算符，在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。

    typeof 
    Undefined   "undefined"
    Null        "object"
    Boolean     "boolean"
    Number      "number"
    String      "string"
    Symbol      "symbol"
    Host object Implementation-dependent
    Function    "function"
    Object      "object"


instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
语法：object instanceof constructor
参数：object（要检测的对象.）constructor（某个构造函数）
描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

## <a name="作用域、作用域链、执行环境、上下文">作用域、作用域链、执行环境、上下文</a>
#### 作用域：
作用域就是变量和函数的可访问范围，控制着变量和函数的可见性与生命周期，

作用域分类：
1. 全局作用域
2. 函数作用域
3. eval作用域
4. 块级作用域。

#### 作用域链：
当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，直至全局函数，这种组织形式就是作用域链。

JavaScript中的函数采用静态作用域，也称词法作用域。当在执行函数调用时，不管何时何地执行函数，其中的变量在函数定义时就已经决定了，函数会从自身作用域节点开始，沿着作用域链向上访问变量的值。
注意：作用域链的顶端是全局作用域，作用域链在函数定义时就已经创建了。

#### 上下文：执行上下文就是当前代码的执行环境 / 作用域
在相同作用域下的This值
JS的执行上下文可以理解为当前代码的执行环境，在执行JS程序时，每遇到一段JS可执行代码，都会创建一个可执行上下文。JS当中可执行代码分为三种：全局代码、函数代码、eval代码。所以一段JS程序必定会产生多个执行上下文，而JavaScript引擎则是以堆栈的形式来对其进行管理，也就是常说的函数调用栈。栈底是全局上下文，栈顶则是当前正在执行的上下文.执行上下文在函数调用栈中的顺序为:自底向上

* 特性：
1. 单线程
2. 同步执行
3. 只有一个全局上下文
4. 可有无数个函数上下文
5. 每个函数调用都会创建一个新的执行上下文，哪怕是递归调用

#### 执行环境：
定义了变量和函数有权访问的其他数据，决定了他们的各自行为。
每个函数都有自己的执行环境，当代码在一个环境中执行时，会创建变量对象的作用域链。
执行环境(Execution context)指的是作用域而不是上下文。每个函数都会创建他自身的context

执行环境有两个阶段：创建和执行阶段
* 创建阶段（函数刚被调用但未执行的时候）
创建变量对象
创建作用域链
设置上下文值

* 执行阶段：
执行环境的第二个阶段就是代码执行阶段，进行其他赋值操作并且代码最终被执行。


## <a name="公有、私有、静态、特权方法与属性">公有、私有、静态、特权方法与属性</a>

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
    var user = new User(26);
 
3. 静态方法、属性：无需实例化就可以调用的方法、属性
>
    //静态方法无法调用公有属性、公有方法、私有方法、私有属性、特权方法和原型属性
    //对象的实例不能调用对象的静态方法，只能调用实例自身的静态属性和方法
    function User(){}
    User.age = 26;//静态属性
    User.getAge =function(){} //静态方法
    
4. 特权方法：
>
    //通过this调用公有方法、公有属性，
    通过对象本身调用静态方法和属性，
    在方法体内直接调用私有属性和私有方法
    function User(age){
      var age = age;//私有属性
      this.getAge = function(){ //特权方法
        return age;//私有属性和方法不能使用this调用
      }
    }
    var user = new User(26);



## <a name="this">this</a>
https://juejin.im/post/5bd5509851882543e82f5564

http://www.cnblogs.com/pssp/p/5216085.html?tdsourcetag=s_pctim_aiomsg

https://juejin.im/post/5c049e6de51d45471745eb98
* this
> 
    this 始终指向最后调用它的对象
    箭头函数”的this，总是指向定义时所在的对象，而不是运行时所在的对象。

    this 指针存在于函数中，用以标识函数运行时所处的上下文。
    对于普通函数，this始终指向全局对象window；严格模式下为undefined
    对于构造函数，this则指向新创建的对象；
    对于对象方法，this指向调用该方法的对象，//当函数被一个对象“包含”的时候，我们称函数的this被隐式绑定到这个对象里面了
    在对象方法内部再次定义一个方法，该方法的this关键字又会重新指向全局对象
 
    本质上，this 均指向触发函数运行时的那个对象。而在函数运行时，this 的值是不能被改变的。
    如果函数返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。

1. 如果一个函数中有this，这个函数未被上一级的对象所调用，那么this指向的就是window，(在js的严格模式中this指向的不是window，
2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象

可通过call、apply和 bind 等方法来改变函数的 this 指向，其中，call 和 apply 主动执行函数，bind一般在事件回调中使用，而 call 和 apply的区别只是参数的传递方式不同。


* 箭头函数的this指向
    箭头函数没有 this/super/arguments/new.target 的绑定，这些值是由外围最近一层非箭头函数决定。

1. 箭头函数不绑定this,箭头函数中的this相当于普通变量。
2. 箭头函数的this寻值行为与普通变量相同，在作用域中逐级寻找。
3. 箭头函数的this无法通过bind，call，apply来直接修改。
4. 改变作用域中this的指向可以改变箭头函数的this
5. 可通过改变封包环境，来改变箭头函数this的指向。

>
    var name = "window";
    var obj = {
      name: 'netease',
      print1: () => {
        console.log(this.name);
      },
      print2: function () {
        return ()=>{
            console.log(this.name);
        }
      }
    }
    obj.print1();// window
    obj.print2()();// netease 注意是返回闭包函数

    如果不用function（function有自己的函数作用域）将其包裹起来，那么默认绑定的父级作用域就是window。

    用function包裹的目的就是将箭头函数绑定到当前的对象上。 匿名函数的作用域是当前这个对象，所以之后箭头函数会自动绑定到此函数所在作用域的this，即obj 。


## <a name="apply call bind">apply call bind</a>
>

    都是用来改变函数的this对象的指向的；
    第一个参数都是this要指向的对象，也就是想指定的上下文；
    都可以利用后续参数传参；
    apply、call则是立即调用；bind是返回对应函数，便于稍后调用；

this优先级：
new绑定 > 显示绑定 > 隐式绑定

## <a name="深，浅拷贝">深，浅拷贝</a>

* 浅拷贝： 浅拷贝只复制指向某个对象的指针，即复制对象地址
>
    Object.assign(a, b) 是一种可以对非嵌套对象进行深拷贝的方法,如果对象中出现嵌套情况,那么其对被嵌套对象的行为就成了普通的浅拷贝.

* 深拷贝：开辟新的栈
    b=a.slice(0)  //数组一层深拷贝
    b=a.concat([])//数组一层深拷贝
1. 
>
    JSON.parse(JSON.stringify(obj));
    只能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象 即那些能够被 json 直接表示的  数据结构。当遇到层级较深，且序列化对象不完全符合JSON格式时会出现问题，像function没办法转成JSON。
2. 
>    
    function deepClone(objCloned, obj) {
      var obj = obj || {};
      for (var key in objCloned) {
        if (typeof objCloned[key] === 'object') {
          obj[key] = (objCloned[key].constructor === Array) ? [] : {};
          deepClone(objCloned[key], obj[key]);
        } else {
          obj[key] = objCloned[key];
        }
      }
      return obj;
    }    
3. 
>
    function deepClone(objCloned) {
      let obj = Array.isArray(objCloned) ? [] : {};
      if(objCloned && typeof objCloned === "object") {
        for(key in objCloned) {
          if(objCloned.hasOwnProperty(key)) {
            // 判断 obj 子元素是否为对象，如果是，递归复制
            if(objCloned[key] && typeof objCloned[key] === "object") {
              obj[key] = deepClone(objCloned[key]);
            } else { // 否则，简单复制
              obj[key] = objCloned[key];
            }
          }
        }
      }
      return obj;
    }


>
    var obj = {
      number: 1,
      arr: [],
      str: 'str',
      obj: {a: 'obj a', b: {arr: [1, 2, 5]}},
      func: function(){console.log('func')}
    }
    let obj1 = deepClone(obj);
    let obj2 = deepClone1(obj)
    obj1.name= 'obj1'
    obj1.obj.a= 'obj1 a'
    obj2.name= 'obj2'
    obj2.obj.a= 'obj2 a'
    console.log(obj);
    console.log(obj1);
    console.log(obj2);


## <a name="js延迟加载：defer,async">js延迟加载：defer,async</a>

defer 属性 
>
    <script src="file.js" defer></script>
    让js并行加载, defer是在HTML解析完之后才会执行，defer脚本按加载的顺序执行

async 属性 
>
    <script src="file.js" async></script>
    让js并行加载, async是在其加载完成后立即执行，async脚本执行顺序和加载顺序无关。它们将在onload 事件之前完成。对于支持async属性的浏览器，动态插入的外链脚本, 相当于默认具有async=true；

可以同时使用 async 和 defer。

* 动态创建DOM方式
>
    function downloadJSAtOnload() {
      varelement = document.createElement("script");
      element.src = "defer.js";
      document.body.appendChild(element);
    }
    if (window.addEventListener)
      window.addEventListener("load",downloadJSAtOnload, false);
    else if (window.attachEvent)
        window.attachEvent("onload",downloadJSAtOnload);
    else window.onload =downloadJSAtOnload;


## <a name="重绘和回流">重绘和回流</a>
回流必将引起重绘，而重绘不一定会引起回流。

回流：当页面中的部分或者全部因为元素的规模尺寸，布局，隐藏等改变而需要重新构建,这就叫做回流。

重绘：当页面的中的可见性发上变化而不影响布局时，比如：背景颜色吗，文字颜色等，这样形成了重绘

会引起重绘和回流的操作如下：
>
    添加、删除元素(回流+重绘)
    隐藏元素，display:none(回流+重绘)，visibility:hidden(重绘)
    移动元素，比如改变top,left的值，或者移动元素到另外一个父元素中。(重绘+回流)
    对style的操作(对不同的属性操作，影响不一样)
    用户的操作，比如改变浏览器大小，改变浏览器的字体大小等(回流+重绘)
    transform 操作不会引起重绘和回流，是一种高效率的渲染。因为transform属于合成属性，进行动画时将会创建一个合成层，在一个独立的层中进行渲染。


什么会导致回流呢？
>
    添加或者删除可见的DOM元素；
    增加或者移除样式表
    元素尺寸改变——边距、填充、边框、宽度和高度
    调整窗口大小
    改变字体
    内容变化，比如用户在input框中输入文字
    激活 CSS 伪类，比如 :hover 
    操作 class 属性
    操作 DOM
    计算 offsetWidth 和 offsetHeight 属性
    设置 style 属性的值 

避免方法：
>
    减少DOM操作
    尽量使用 class 进行样式修改，而不是直接操作样式
    尽可能在DOM树的最末端改变class,
    动画效果设置position为absolute，fixed
    避免使用table布局
    避免使用CSS表达式
    DOM离线处理，处理完后一起更新,如将其至于内存或设置display:none。
      a) 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
      b) 使用display:none技术，只引发两次回流和重绘；
      c) 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘
>
所有代码都运行在模块作用域，不会污染全局作用域；

模块可以多次加载，但只会在第一次加载的时候运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果；

模块的加载顺序，按照代码的出现顺序是同步加载的;


## <a name="模块化">模块化CommonJS AMD CMD ES6modules</a>
* CommonJS
>
　  CommonJS的核心思想就是通过 require 方法来<em>同步加载</em>所要依赖的其他模块，然后通过 exports 或者 module.exports 来导出需要暴露的接口

    一个文件就是一个模块，拥有单独的作用域
    普通方式定义的 变量、函数、对象都属于该模块内
    通过require来家在模块
    通过exports和module.exports来暴露模块中的内容

* AMD
>
    AMD规范则是非同步加载模块，允许指定回调函数
    require.js 在使用 require.js 的时候，必须提前加载所有模块。

    API：
    require([module], callback)
    define(id, [depends], callback)

* CMD 
>
    通过按需加载的方式，而不是必须在模块开始就加载所有的依赖
    sea.js

* ES6modules
>
    import 引入模块，
    exprot 导出模块
      export 可以导出的是一个对象中包含的多个属性，方法。(在一个文件或模块中可存在多个)
      export default  只能导出一个可以不具名的对象。(在一个文件或模块中仅可存在一个)

## <a name="内存泄漏">内存泄漏</a>
内存泄漏:是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。浏览器中采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，因此会产生内存泄漏。

1. 意外的全局变量引起的内存泄漏（变量未声明，通过this创建,）
2. 闭包引起的内存泄漏
3. 没有清理的DOM元素引用
4. 被遗忘的定时器或者回调
5. 子元素存在引用引起的内存泄
6. console.log :  在传递给 console.log的对象是不能被垃圾回收 ，因为在代码运行之后需要在开发工具能查看对象信息。所以最好不要在生产环境中 console.log任何对象。


## <a name="use strict">"use strict"? 用处？</a>

严格运行模式,这种模式使得 Javascript 在更严格的条件下运行,

1. 使JS编码更加规范化的模式,消除语法中的一些不合理、不严谨之处，减少怪异行为。
2. 默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值
3. 全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
4. 消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;
提高编译器效率，增加运行速度；
5. 使调试更加容易。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常，因此尽早提醒你代码中的问题，你才能更快地指引到它们的源代码。
防止意外的全局变量。
6. 消除 this 强制。如果没有严格模式，引用null或未定义的值到 this 值会自动强制到全局变量。这可能会导致许多令人头痛的问题和让人恨不得拔自己头发的bug。在严格模式下，引用 null或未定义的 this 值会抛出错误。
7. 不允许重复的属性名称或参数值。当检测到对象（例如，var object = {foo: "bar", foo: "baz"};）中重复命名的属性，或检测到函数中（例如，function foo(val1, val2, val1){}）重复命名的参数时，严格模式会抛出错误，因此捕捉几乎可以肯定是代码中的bug可以避免浪费大量的跟踪时间。
8. 使eval() 更安全。在严格模式和非严格模式下，eval() 的行为方式有所不同。最显而易见的是，在严格模式下，变量和声明在 eval() 语句内部的函数不会在包含范围内创建（它们会在非严格模式下的包含范围中被创建，这也是一个常见的问题源）。
9. 在 delete使用无效时抛出错误。delete操作符（用于从对象中删除属性）不能用在对象不可配置的属性上。当试图删除一个不可配置的属性时，非严格代码将默默地失败，而严格模式将在这样的情况下抛出异常。



## <a name="面向过程和面向对象的异同">面向过程和面向对象的异同？</a>
https://zhuanlan.zhihu.com/p/55064276
面向过程：
>
    把复杂业务划分为若干个“Procedure、Function”。
    彻底的理解现实场景，理清其中的逻辑关系和运行顺序，划分为若干个小的处理单元——落实为function

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
[详情看这里](crossOrigin)

同源：
协议相同
域名相同
端口相同
跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。


 “同源政策”越来越严格。目前，如果非同源，共有三种行为受到限制。
1. Cookie、LocalStorage 和 IndexedDB 无法读取。
2. DOM 无法获得。
3. AJAX 请求不能发送。、


跨域方法
1. 通过jsonp跨域
2. document.domain + iframe跨域
3. location.hash + iframe
4. window.name + iframe跨域
5. postMessage跨域
6. 跨域资源共享（CORS）
7. nginx代理跨域
8. nodejs中间件代理跨域
9. WebSocket协议跨域


## <a name="常见的web攻击">常见的web攻击</a>
1. XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。
2. SQL注入攻击
3. CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。


## <a name="URI、URL、URN">URI、URL、URN</a>
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

* URN
> 
    URN，uniform resource name，统一资源命名，是通过名字来标识资源，比如mailto:java-net@java.sun.com。

URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。笼统地说，每个 URL 都是 URI，但不一定每个 URI 都是 URL。这是因为 URI 还包括一个子类，即统一资源名称 (URN)，它命名资源但不指定如何定位资源。上面的 mailto、news 和 isbn URI 都是 URN 的示例。

在Java的URI中，一个URI实例可以代表绝对的，也可以是相对的，只要它符合URI的语法规则。而URL类则不仅符合语义，还包含了定位该资源的信息，因此它不能是相对的。

在Java类库中，URI类不包含任何访问资源的方法


## <a name="函数重载">函数重载</a>

函数名称一样，但是输入输出不一样。或者说，允许某个函数有各种不同输入，根据不同的输入，调用不同的函数，然后返回不同的结果。

## <a name="节流、防抖">节流、防抖</a>
* 同：
    都可以通过使用 setTimeout 实现。
    目的都是，降低回调执行频率。节省计算资源。

* 异
>
    函数防抖，在一段连续操作结束后，处理回调，利用 clearTimeout 和 setTimeout 实现。

    函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。

    函数防抖是一定时间连续触发，只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

* 防抖: 触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间；

调用定时器执行某个函数之前首先清除这个定时器。当函数多次被调用时, 
每一次都会将之前的定时器清除, 即只有在执行函数的请求停止了一段时间之后才会真正执行函数。
>
    function debounce(fn, delay = 500) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeout); // 每当调用函数时清除之前的定时器
        timeout = setTimeout(() => { // 再创建一个新的 setTimeout, 这样就能保证输入字符后的 间隔内再次调用函数，就不会执行
          fn.apply(this, arguments);
        }, delay);
      };
    }
    function sayHi() {
      console.log('防抖成功');
    }
    let ipt = document.getElementById('ipt');
    ipt.addEventListener('input', debounce(sayHi)); // 防抖


    function debounce(func, delay = 500, context) {
      clearTimeout(func.setTime);
      func.setTime = setTimeout(() => {
        func.call(context); 
      }, delay);
    }

* 节流: 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。

设置一个执行函数间隔时间time, 当多次触发某个事件时便将执行函数的频率降低到time 
>
    function throttle(fn, delay = 500) {
      let canRun = true; // 通过闭包保存一个标记
      return function () {
        if (!canRun) return; // 在函数开头判断标记是否为 true，不为 true 则 return
        canRun = false; // 立即设置为 false
        setTimeout(() => { // 将外部传入的函数的执行放在 setTimeout 中
          fn.apply(this, arguments);
          // 最后在 setTimeout 执行完毕后再把标记设置为 true(关键) 表示可以执行下一次循环了。当定时器没有执行的时候标记永远是 false，在开头被 return 掉
          canRun = true;
        }, delay);
      };
    }
    function sayHi(e) {
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
    window.addEventListener('resize', throttle(sayHi, 1000));

## <a name="柯里化">柯里化</a>
>

  柯里化，即Currying，可以是函数变得更加灵活。我们可以一次性传入多个参数调用它；也可以只传入一部分参数来调用它，让它返回一个函数去处理剩下的参数。

  它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。


  参数够了就执行，参数不够就返回一个函数，之前的参数存起来，直到够了为止。
  它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。
  柯里化的三个作用 : 1.参数复用 2. 提前返回 3.延迟计算
>  
    function curry(func) {
      var l = func.length
      return function curried() {
        var args = [].slice.call(arguments)
        if(args.length < l) {
          return function() {
            var argsInner = [].slice.call(arguments)
            return curried.apply(this, args.concat(argsInner))
          }
        } else {
          return func.apply(this, args)
        }
      }
    }
    var f = function(a, b, c) {
      return console.log([a, b, c])
    };
    var curried = curry(f)
    curried(1)(2)(3) // => [1, 2, 3]
    curried(1, 2)(3) // => [1, 2, 3]
    curried(1, 2, 3) // => [1, 2, 3]

## <a name="前端性能优化的方法">前端性能优化的方法</a>
>
    减少http请求次数：CSS Sprites, 、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
    JS、CSS源码压缩
    前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，减少请求次数
    用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
    设置样式时使用className（或el.style.cssText +=）而不是直接操作style。
    少用全局变量、缓存DOM节点查找的结果。
    避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。不使用@import
    图片预加载，将样式表放在顶部，将脚本放在底部  
    避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。


## <a name="从浏览器地址栏输入url到显示页面的步骤">从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)</a>

#### 浏览器工作原理
1.用户界面 2.网络 3.UI后端 4.数据存储 5.浏览器引擎 6.渲染引擎 7.js解释器
浏览器解析过程：
流程：解析html以构建dom树->构建render树->布局render树->绘制render树

#### 网页生成过程：
1.HTML被HTML解析器解析成DOM 树
2.css则被css解析器解析成CSSOM 树
3.结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4.生成布局（flow），即将所有渲染树的所有节点进行平面合成
5.将布局绘制（paint）在屏幕上
第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染。

####  简
1. 浏览器查找域名的 IP 地址
2. 这一步包括 DNS 具体的查找过程，包括：浏览器缓存->系统缓存->路由器缓存…
3. 浏览器向 web 服务器发送一个 HTTP 请求
4. 服务器的永久重定向响应（从 http://example.com 到 http://www.example.com）
5. 浏览器跟踪重定向地址
6. 服务器处理请求
7. 服务器返回一个 HTTP 响应
8. 浏览器显示 HTML
9. 浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）
10. 浏览器发送异步请求

#### 具体
1. 在浏览器地址栏输入URL
2. 浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤
    * 如果资源未缓存，发起新请求
    * 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
    * 检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control：
        * HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
        * HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
3. 浏览器解析URL获取协议，主机，端口，path
4. 浏览器组装一个HTTP（GET）请求报文
5. 浏览器获取主机ip地址，过程如下：
    * 浏览器缓存
    * 本机缓存
    * hosts文件
    * 路由器缓存
    * ISP DNS缓存
    * DNS递归查询（可能存在负载均衡导致每次IP不一样）
6. 打开一个socket与目标IP地址，端口建立TCP链接，三次握手如下：
    * 客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口
    * 服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
    * 客户端发送ACK=Y+1， Seq=Z
7. TCP链接建立后发送HTTP请求
8. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
9. 服务器检查HTTP请求头是否包含缓存验证信息如果验证缓存新鲜，返回304等对应状态码
10. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
11. 服务器将响应报文通过TCP连接发送回浏览器
12. 浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下：
    * 主动方发送Fin=1， Ack=Z， Seq= X报文
    * 被动方发送ACK=X+1， Seq=Z报文
    * 被动方发送Fin=1， ACK=X， Seq=Y报文
    * 主动方发送ACK=Y， Seq=X报文
13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
14. 如果资源可缓存，进行缓存
15. 对响应进行解码（例如gzip压缩）
16. 根据资源类型决定如何处理（假设资源为HTML文档）
17. 解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本，这些操作没有严格的先后顺序，以下分别解释
18. 构建DOM树：
    * Tokenizing：根据HTML规范将字符流解析为标记
    * Lexing：词法分析将标记转换为对象并定义属性和规则
    * DOM construction：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片、样式表、js文件，启动下载
20. 构建CSSOM树：
    * Tokenizing：字符流转换为标记流
    * Node：根据标记创建节点
    * CSSOM：节点创建CSSOM树
21. 根据DOM树和CSSOM树构建渲染树:
    * 从DOM树的根节点遍历所有可见节点，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
    * 对每一个可见节点，找到恰当的CSSOM规则并应用
    * 发布可视节点的内容和计算样式
22. js解析如下：
    * 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时document.readystate为loading
    * HTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
    * 当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document.write()，它们可以访问自己script和之前的文档元素
    * 当文档完成解析，document.readState变成interactive
    * 所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()
    * 浏览器在Document对象上触发DOMContentLoaded事件
    * 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为* complete,window触发load事件
23. 显示页面（HTML解析过程中会逐步显示页面）

#### 浏览器工作原理
1.用户界面 2.网络 3.UI后端 4.数据存储 5.浏览器引擎 6.渲染引擎 7.js解释器
浏览器解析过程：
流程：解析html以构建dom树->构建render树->布局render树->绘制render树

#### 网页生成过程：
1. HTML被HTML解析器解析成DOM 树
2. css则被css解析器解析成CSSOM 树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上
第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染。


## <a name="JS执行机制">JS执行机制</a>
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7
#### 浏览器的渲染进程是多线程的

1. GUI渲染线程
>
    负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
    当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
    注意，GUI渲染线程与JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
2. JS引擎线程
>
    也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）
    JS引擎线程负责解析Javascript脚本，运行代码。
    JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序
    同样注意，GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。
3. 事件触发线程
>
    归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）
    当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中
    当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理
    注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）
4. 定时触发器线程
>
    传说中的 setInternal与 setTimeout所在线程
    浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）
    因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）
    注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。
5. 异步http请求线程
>
    在XMLHttpRequest在连接后是通过浏览器新开一个线程请求
    将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由JavaScript引擎执行。
    看到这里，如果觉得累了，可以先休


JS里的一种分类方式，就是将任务分为：同步任务和异步任务。

按照这种分类方式:JS的执行机制是：
1. 首先判断JS是同步还是异步，同步就进入主进程，异步就进入event table
2.  异步任务在event table中注册函数，当满足触发条件后，被推入event queue
3. 同步任务进入主线程后一直执行，直到主线程空闲时，才会去event queue中查看是否有可执行的异步任务，如果有就推入主进程中
以上三步循环执行，这就是event loop。

而准确的划分方式是：
1. macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
2. micro-task(微任务)：Promise，process.nextTick
* macrotask（宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）
每一个task会从头到尾将这个任务执行完毕，不会执行其它
浏览器为了能够使得JS内部task与DOM任务能够有序的执行，会在一个task执行结束后，在下一个 task 执行开始前，对页面进行重新渲染

* microtask（微任务），可以理解是在当前 task 执行结束后立即执行的任务
也就是说，在当前task任务后，下一个task之前，在渲染之前
所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染
也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）

#### JS的执行机制是：
>
    执行一个宏任务，过程中如果遇到微任务，就将其放到微任务的“事件队列”里
    当前宏任务执行完成后，会查看微任务的“事件队列”，依次执行所有微任务
    执行完毕，开始检查渲染，然后GUI线程接管渲染
    渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）
![img](/img/JS的执行机制.jpg)

#### 进程、线程
>
    一个进程由一个或多个线程组成
    进程之间相互独立
    同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
    多个线程在进程中协作完成任务

    进程是能拥有资源和独立运行的最小单位
    线程是建立在进程的基础上的一次程序运行单位


## <a name="设计模式">设计模式</a>

   创建对象的几种方式？
    对象字面量：person={firstname:"Mark",lastname:"Yun",age:25};
    Object.create（）//o=Object.create({},{name:{value:’joo’}});
    构造函数：p=new Object();

#### 工厂模式 -- Factory
* 核心:
    1.return一个对象
    2.创建不同的引用类型
* 例子:    
    function People () {
      let person = {
        name: '人',
        walk: function () {console.log('walk')}
      }
      return person // 返回一个对象
    }
    let xiaoming = People() // 工厂生产对象

* 说明：
    1.在函数中定义对象,并定义对象的各种属性，,虽然属性可以为方法，但是建议将属性为方法的属性定义到函数之外，这样可以避免重复创建该方法
    2.引用该对象的时候，这里使用的是 var x = Parent()而不是 var x = new Parent();因为后者会可能出现很多问题（前者也成为工厂经典方式,后者称之为混合工厂方式），不推荐使用new的方式使用该对象
    3.在函数的最后返回该对象
    4.不推荐


#### 构造函数模式 -- Constructor
* 核心：
    1.将属性绑定到this上
    2.将方法绑定到prototype上
    3.用new 创建实例
* 例:
    function People() {
      this.name = '人'
    }
    People.prototype.walk = function () {
      console.log('walk')
    }
    let xiaoming = new People()
* 说明：
  1.与工厂方式相比，使用构造函数方式创建对象，无需再函数内部重建创建对象，而使用this指代，并而函数无需明确return
  2.同工厂模式一样，虽然属性的值可以为方法，扔建议将该方法定义在函数之外
  3.不推荐

#### 原型模式
* 例：
    function Parent(){};  
    Parent.prototype.name="john";  
    Parent.prototype.age="30";  
    Parent.prototype.lev=lev;  
    var x=new Parent();  
 * 说明：
    1.函数中不对属性进行定义
    2.利用prototype属性对属性进行定义
    3.同样的，不推荐使用这样方式创建对象

#### 混合模式 —— Mixin (原型模式+构造函数模式)
* 核心
    1.在JS中，一般我们实现继承的过程就是混合模式
    2.其概念就是提供能够被一个或者一组子类简单继承功能的类
* 例子
    function People(name, age) {
      this.name = name
      this.age = age
    }

    People.prototype.sayName = function () {
      console.log(this.name)
    }

    function Student(name, age, score) {
      People.call(this, name, age)
      this.score = score
    }

    function create(prototypeObj) {
      let empty = function () {}
      empty.prototype = prototypeObj
      return new empty()
      // return值如下
      // {
      //   __proto__:prototypeObj
      // }
    }
    Student.prototype = create(People.prototype)

    Student.prototype.work = function () {
      console.log('work')
    }

* 说明：
    1.该模式是指混合搭配使用构造函数方式和原型方式
    2.将所有属性不是方法的属性定义在函数中（构造函数方式）
    将所有属性值为方法的属性利用prototype在函数之外定义（原型方式）

#### 单例模式 —— Singleton
* 核心
    1.产生一个类的唯一实例
    2.好处就是节约内存

* 案例
    function createPeople() {
      let name
      return function (userName) {
          return name || (name = userName)
      }
    }

    let single = createPeople()
    console.log(single('人')) // '人'
    // 不管再传递任何值，也只会返回 '人'
    console.log(single('马')) // '马'


#### 模块模式 —— Module
* 核心
    在js中，常常使用闭包的形式来实现

* 案例
    let Person = (function () {
      let name = '小明'
      function sayName() {
        console.log(name)
      }

      return {
        name: name,
        sayName: sayName
      }
    })()


#### 发布订阅模式 —— Publish/Subscribe
* 核心
    比如我【订阅者】现在订阅了一个公众号，公众号【发布者】向我发布消息

* 案例
    实现一个jQuery的发布订阅案例

    // 订阅者
    $('div').on('click',function () {})

    // 发布者
    $('header').on('click',function () {
        $('div').trigger('click')
    })

* 代码：
    let EventCenter = (function () {
      let events = {}
      function on(evt, handler) {
        // 实现监听效果
        // 使用'或'是为了可以对同一个事件多次进行回调
        events[evt] = events[evt] || []
        events[evt].push({
            handler: handler
        })
      }

      function fire(evt, args) {
        if (!events[evt]) {
          // 如果未监听任何事件，直接中断
          return
        }
        for (let i = 0; i < events[evt].length; i++) {
          // 遍历，实现对同一个事件的多次回调
          events[evt][i].handler(args)
        }
      }

      function off(name) {
        delete events[name]
      }

      return {
        on: on, // 订阅者
        fire: fire, // 发布者
        off: off // 取消订阅
      }
    })()

    EventCenter.on('hello', function (num) {
      console.log(num)
    })
    EventCenter.on('hello', function (num) {
      console.log(num)
    })

    EventCenter.fire('hello', 1) // 1[出现两次]


## <a name="web安全">web安全</a>
    XSS CSRF

XSS(跨站脚本攻击)，恶意的注入html代码，其他用户访问时，会被执行

* 特点：
>
    能注入恶意的HTML/JavaScript代码到用户浏览的网页上，从而达到Cookie资料窃取、会话劫持、钓鱼欺骗等攻击

* 防御手段：
>
    浏览器禁止页面的JS访问带有HttpOnly属性的Cookie
    两端进行输入格式检查
    通过编码转义的方式进行输出检查


CSRF(攻击跨站请求伪造)

* 特点：
>
    重要操作的所有参数都是可以被攻击者猜测到的。攻击者预测出URL的所有参数与参数值，才能成功地构造一个伪造的请求。

* 防御手段：
>
    token验证机制，比如请求数据字段中添加一个token，响应请求时校验其有效性
    用户操作限制，比如验证码（繁琐，用户体验差）
    请求来源限制，比如限制HTTP Referer才能完成操作（防御效果相比较差）
    实践中常用第一种


## <a name="get与post区别">get与post区别</a>
![getpost](/img/getpost.png)
>

    Get 请求能缓存，Post 不能

    Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。

    Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术

    URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的

    Post 支持更多的编码类型且不对数据类型限制

## <a name="css和js动画的差异">css和js动画的差异</a>
>
    css性能好
    css代码逻辑相对简单
    js动画控制好
    js兼容性好
    js可实现的动画多
    js可以添加事件

