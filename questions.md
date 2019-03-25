# 目录

* <a href="#===">===运算符判断</a>
* <a href="#==">==运算符判断</a>
* <a href="#1">**HTML**</a>
* <a href="#1-1">xhtml、html区别</a>
* <a href="#1-2">Doctype作用？标准模式、兼任模式区别</a>
* <a name="#1-3">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>
* <a href="#1-4">渐进增强与优雅降级-----开发方式，设计理念</a>
* <a href="#1-5">src和href的区别</a>

* <a href="#2">**CSS**</a>
* <a href="#2-1">权重、优先级</a>
* <a href="#2-2">CSS引入的方式有哪些? link和@import的区别是?</a>
* <a href="#2-3">盒模型</a>
* <a href="#2-4">css选择器</a>
* <a href="#2-5">哪些属性可继承</a>
* <a href="#2-6">堆叠上下文(stacking context )z-index</a>
* <a href="#2-7">块级格式化上下文(BFC)</a>
* <a href="#2-8">display、visibility、overflow的隐藏问题</a>
* <a href="#2-9">CSS和JS的位置会影响页面效率，为什么？</a>

* <a href="#3">**JS**</a>
* <a href="#3-1">数据类型、内置对象</a>
* <a href="#3-2">undefined与null定义、区别</a>


# ===、==、Object.is()判断
![===、==、Object.is()](/img/===.png)

# <a name="===">===运算符判断</a>
    如果两个值不是相同类型，它们不相等
    如果两个值都是null或者都是undefined，它们相等
    如果两个值都是布尔类型true或者都是false，它们相等
    如果其中有一个是NaN，它们不相等
    如果都是数值型并且数值相等，他们相等， -0等于0
    如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
    如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等
    
# <a name="==">==运算符判断</a>
    如果两个值类型相同，按照===比较方法进行比较
    如果类型不同，使用如下规则进行比较
    如果其中一个值是null，另一个是undefined，它们相等
    如果一个值是数字另一个是字符串，将字符串转换为数字进行比较
    如果有布尔类型，将true转换为1，false转换为0，然后用==规则继续比较
    如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
    其他所有情况都认为不相等

# <,>,<=,>=的比较规则
    所有比较运算符都支持任意类型，但是比较只支持数字和字符串，所以需要执行必要的转换然后进行比较，转换规则如下:
    如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错
    经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）
    否则，如果有一个操作数不是字符串，将两个操作数转换为数字进行比较

# +运算符工作流程
    如果有操作数是对象，转换为原始值
    此时如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接
    否则：所有操作数都转换为数字并执行加



**前端页面由哪三层构成：结构层、表示层、行为层。**

# <a name="1">**HTML**</a>

## <a name="1-1">XHTML、HTML区别</a>
* HTML是一种基于标准通用标记语言（SGML）的应用，是一种非常灵活的置标语言，
  而XHTML则基于可扩展标记语言（XML），XML是SGML的一个子集。
* XHTML 与 HTML4 几乎是相同的
* XHTML是更为严格纯净的HTML版
* XHTML是作为一种xml应用被重新定义的HTML
* XHTML文档必须拥有根元素、元素必须被关闭、元素必须被正确地嵌套、标签应该使用小写

## <a name="1-2">Doctype作用？标准模式、兼任模式区别</a>
* documnet type(文档类型的简写),位于HTML文档的第一行，告知浏览器用什么规范解析
DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
* 在标准模式中，浏览器根据规范呈现页面；在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。
  >判断方法：document.compatMode 
    1. 标准模式：CSS1Compat
    2. 混杂模式：BackCompat	

## <a name="1-3">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>
* HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
* HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

## <a name="1-4">渐进增强与优雅降级-----开发方式，设计理念</a>

* 渐进增强：针对低版本浏览器构建页面，保证核心功能。再针对高级浏览器进行改进和追加功能以达到更好的用户体验
* 优雅降级：一开始就构建完整功能，在针对底版本浏览器兼容

    区别：
    优雅降级是从复杂的现状开始，并试图减少用户体验的供给，
    渐进增强则从基础的的版本开始，并不断扩充，以适应未来环境的需要。
    优雅降级意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## <a name="1-5">src和href的区别</a>
* href指向网络资源所在的位置, 用于在当前文档和引用资源间确定联系, 加载css。表达的是超链接。比如a元素、link元素。

* src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

总而言之，我们在可替换的元素上使用src，然而把href用于在涉及的文档和外部资源之间建立一个引用关系。

## <a name="1-6">浏览器内核、私有化前缀</a>
* 主要分为：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
* 渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

* JS引擎则：解析和执行javascript来实现网页的动态效果。
  最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

* 浏览器私有化前缀
    -webkit-:chrome safari 
    -ms-：IE
    -moz-:firefox
    -o-：opera

## <a name="1-7">cookies、sessionStorage 、和 localStorage 的区别</a>
* cookie是存储在浏览器端，并且随浏览器的请求一起发送到服务器端的，它有一定的过期时间，到了过期时间自动会消失。sessionStorage和localeStorage也是存储在客户端的，同属于web Storage，比cookie的存储大小要大有8m，cookie只有4kb，localeStorage是持久化的存储在客户端，如果用户不手动清除的话，不会自动消失，会一直存在，sessionStorage也是存储在客户端，但是它的存活时间是在一个回话期间，只要浏览器的回话关闭了就会自动消失。

* cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。 cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
  sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

* 存储大小：
  	cookie数据大小不能超过4k。
  	sessionStorage，localStorage  达到5M甚至更多
* 有期时间：
    localStorage   浏览器关闭后数据不丢失除非主动删除数据；多窗口数据共享
    sessionStorage  数据在当前浏览器窗口关闭后自动删除。同窗口数据共享
    cookie         设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
* 作用域:
    sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
    localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

### cookie有什么作用？
* cookie可以解决http的无状态的问题，与服务器进行交互，作为http规范存在。它具有极高的简便性、可扩展性和可用性，也可以通过加密和SSL技术来提高其安全性。因此推荐使用cookie作为标识而不是身份验证的工具。
* cookie的缺点
1. 大小和数目受限制。浏览器对一个域cookie的条目数有上限要求，且每个cookie的大小不得超过4kb。
2. 存在安全性问题，易被人拦截。
3. 需要指定域，不可以跨域
4. 浪费带宽，因为我每次请求一个新的页面，cookie都会被自动发送过去。
5. 有的移动端浏览器不支持cookie或浏览器禁用cookie
6. 有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
* 如何删除cookie
在服务器端，以java为例，可以将同名cookie的maxAge属性置0；在客户端，可以将expires属性设置为过去的一个时间。即：document.cookie = ‘name=’+cookie_name+’;expires=’+ passed_date


## <a name="1-8">iframe缺点？</a>
1. 会阻塞主页面的onload事件
2. 不利于搜索引擎的检索，不利于SEO优化
3. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载.
通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。




# <a name="2">**CSS**</a>

## <a name="2-1">权重、优先级</a>
优先级就近原则，同权重情况下样式定义最近者为准;
载入样式以最后载入的定位为准;
1. 行内样式 > 内部样式表 > 外联样式表
2. important > 行内样式 > ID > 类，属性选择器和伪类选择器>元素和伪元素

## <a name="2-2">CSS引入的方式有哪些? link和@import的区别是?</a>
### CSS引入的方式
1. 行内样式：直接在 HTML 标签中的 style 属性中添加 \<div style=’color:red’></div>
2. 内接样式：写在head中style, \<head>\<style> div{color:red;}\</style>\</head>
3. 外接样式：在head标签中引入外部的 CSS 文件\<head><link rel="stylesheet" href="demo.css"></head>
4. @import: \<style>@import url(style.css);\</style>

### link与@important区别：
1. link是html标签,无兼容性问题;@import是在css2.1提出的，IE5以上才识别。
2. link不只能加载css，还可定义RSS等其；@import属于css范畴，只能加载css。
3. link引入的css与页面同时加载，而@important则需等页面完全载入后再加载
4. linnk支持使用javascript控制dom去改变样式；而@import不支持。

## <a name="2-3">盒模型</a>
* 定义：
HTML中每个元素都被描绘成一个矩形盒子，这些盒子通过一个模型来描述其占有空间，该模型称为盒模型。盒模型通过四个边界描述:内边距（padding）、外边距(margin)、边框(border)、内容(content)

* 区  别：box-sizing:content-box | border-box 
1. 标准盒子模型(W3C): 宽度 = 内容的宽度（content）+ border + padding + margin;
    box-sizing: content-box; 默认值，border和padding不计算入width之内
2. 怪异盒模型（IE）：  宽度 = 内容宽度（content+border+padding）+ margin
    box-sizing: border-box; border和padding计算入width之内

## <a name="2-4">css选择器</a>
1. 通配符选择器（ * ）
2. id选择器（ #myid）
3. 类选择器（.myclassname）
4. 标签选择器（div, h1, p）
5. 相邻选择器（h1 + p）
6. 子选择器（ul > li）
7. 后代选择器（li a）
8. 属性选择器（a[rel = "external"]）
9. 伪类选择器（a:hover, li:nth-child）
10. .....

## <a name="2-5">哪些属性可继承</a>
* 不可继承的样式：border padding margin width height
* 可继承的样式：
    font-
    line- (line-height ...)
    text- (text-align,text-indent,text-transform,text-shadow ...)
    letter-spacing
    word-break
    word-spacing
    white-space
    color
    visibility
    cursor

## <a name="2-6" href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context">堆叠上下文(stacking context )z-index</a>

* 概述：主要用来比较一个拥有定位元素（position不为static）的元素的z轴层叠关系（z-index）。
同一个层叠上下文中，层叠级别（即z-index属性值）大的显示在上面。
同一个层叠上下文中，层叠级别相同的两个元素，依据它们在HTML文档流中的顺序，写在后面的会覆盖前面的。

层叠上下文的层级是 HTML 元素层级的一个层级，因为只有某些元素才会创建层叠上下文。可以这样说，没有创建自己的层叠上下文的元素 将被父层叠上下文包含。

* 满足以下任一条件即可形成：
根元素 (HTML),
1. z-index 值不为 "auto"的 绝对/相对定位，
2. z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
3. opacity值 < 1
4. transform 属性值不为 none
5. position: fixed
6. filter值不为 none
7. perspective值不为“none”的元素，
8. isolation 属性被设置为 "isolate"的元素，
9. mix-blend-mode 属性值不为 normal
10. 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
-webkit-overflow-scrolling 属性被设置 "touch"的元素

在层叠上下文中，其子元素同样也按照上面解释的规则进行层叠。 特别值得一提的是，其子元素的 z-index 值只在父级层叠上下文中有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。

* 总结:
给一个 HTML 元素定位和 z-index 赋值创建一个层叠上下文，（opacity 值不为 1 的也是相同）。
层叠上下文可以包含在其他层叠上下文中，并且一起创建一个有层级的层叠上下文。
每个层叠上下文完全独立于它的兄弟元素：当处理层叠时只考虑子元素。
每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会 在父层叠上下文中 按顺序进行层叠。

## <a name="2-7">块级格式化上下文(BFC)</a>
* 概述：BFC(Block Formatting Context)是Web页面中盒模型布局的CSS渲染模式。它的定位体系属于常规文档流。

浮动，绝对定位元素，非块级盒子的块级容器(如inline-blocks, table-cells, table-captions),和overflow的值不为visible的元素，（除了这个值已经被传到了视口的时候）将创建一个新的块级格式化上下文。

* BFC形成条件：
2. float的值不为none
3. position的值不为static或relative
4. overflow的值不为visible
5. display的值为 inline-block | flex | inline-flex | table-cell | table-caption |


* BFC的布局规则
1. 内部的元素会在垂直排列，可以理解为是BFC中的一个常规流
2. 元素垂直方向的距离由margin决定，属于同一个BFC的两个相邻盒子的margin可能会发生重叠
3. 每个元素的左外边距与包含块的左边界相接触(从左往右，否则相反)，即使存在浮动也是如此，说明BFC中的子元素不会超出它的包含块
4. BFC的区域不会与float元素区域重叠叠
5. 计算BFC的高度时，浮动子元素也参与计算
6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

* BFC的作用
1. 不和浮动元素重叠：
如果一个浮动元素后面跟着一个非浮动的元素，那么就会产生一个覆盖的现象。清除元素内部浮动，只要把父元素设为BFC就可以清理子元素的浮动了，最常见的用法就是在父元素上设置overflow: hidden样式，对于IE6加上zoom:1就可以了(IE Haslayout)。
2. 解决margin边距折叠问题
按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。
因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠了。
3. 防止文字环绕（给环绕元素添加BFC）
4. 在多列布局中使用BFC（最后一个子元素添加BFC）
如果我们正在创建的一个多列布局占满了整个容器的宽度，在某些浏览器中最后一列有时候将会被挤到下一行。会发生这样可能是因为浏览器舍入（取整）了列的宽度使得总和的宽度超过了容器的宽度。然而，如果我们在一个列的布局中建立了一个新的BFC，它将会在前一列填充完之后的后面占据所剩余的空间

* 清除浮动
    .clearfix:after,.clearfix:before{
      content: " ";
      visibility: hidden;
      display: block;
      height: 0;
      line-height:0;
      clear: both;
    }
    .clearfix {zoom: 1;}

## <a name="2-8">display、visibility、overflow的隐藏问题</a>
* display：block | none | inline | table….. 
* overflow : visible | auto | hidden | scroll
      visible:不处理,  auto:默认属性    
      hidden:溢出隐藏, scroll:总是显示滚动条 

* visibility : inherit | visible | hidden|collapse
    inherit:继承
    visible:可视
    hidden:隐藏
    collapse: 主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。其他对象，等同于hidden。

### 三种隐藏方式差别:visibility:hidden,display:none,opacity:0
* 渲染上的差异:
1. display:none:隐藏且不占空间，会导致浏览器的回流和重绘。
2. visibility为hidden:隐藏但占空间，只会导致浏览器重绘而不会回流。
3. opacity:0,隐藏但占空间, 不重绘也不回流

* 事件绑定的差异
1. display:none：元素彻底消失，不会触发绑定的事件.
2. visibility:hidden：无法触发其点击事件
3. opacity:0：可以触发点击事件。设置元素透明度为0后，元素只是相对于人眼不存在而已，对浏览器来说，它还是存在的，所以可以触发绑定事件

* 动画属性的差异
1. display:none：完全不受transition属性的影响，元素立即消失
2. visibility：hidden：元素消失的时间跟transition属性设置的时间一样，但是没有动画效果.
3. opacity:0,动画属性生效,能够进行正常的动画效果.

## <a name="2-9">CSS和JS的位置会影响页面效率，为什么？</a>
css在加载过程中不会影响到DOM树的生成，但是会影响到Render树的生成，进而影响到layout，所以一般来说，style的link标签需要尽量放在head里面，因为在解析DOM树的时候是自上而下的，而css样式又是通过异步加载的，这样的话，解析DOM树下的body节点和加载css样式能尽可能的并行，加快Render树的生成的速度。

js脚本应该放在底部，原因在于js线程与GUI渲染线程是互斥的关系，如果js放在首部，当下载执行js的时候，会影响渲染行程绘制页面，js的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。


# <a name="3">**JS**</a>

JS的特点：无需编译、弱类型、基于对象、事件驱动
JS的组成：核心( ECMAScript) , 文档对象模型(DOM), 浏览器对象模型(BOM)

## <a name="3-1">数据类型、内置对象</a>
### 数据类型：
1. 基本数据类型：Undefined、Null、Boolean、Number、String、Symbol  ---值传递
2. 复杂（引用）数据类型:Object    --地址传递

* 两类型的区别：存储位置不同；
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

## <a name="3-2">undefined与null定义、区别</a>

null和undefined只有文字形式，没有构造形式

undefined:语义：不存在该数据；声明了变量，但未赋值或对象属性不存在
null:语义：存在该数据，但未赋值； 表无值、无对象

只有被定义才有可能为 null，未定义时为 undefined。

null 用于对象 , undefined 用于变量，属性和方法。

null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针，意思是你定义了它,但它没有分配内存空间。

null的类型是object，即 typeof null 返回object

undefined 
1. 变量被声明了，但没有赋值时，就等于undefined。
2. 调用函数时，应该提供的参数没有提供，该参数等于undefined。
3. 对象没有赋值的属性，该属性的值为undefined。
4. 函数没有返回值时，默认返回undefined。


如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。
要先使用 typeof 来检测对象是否已定义：if (typeof myObj !== "undefined" && myObj !== null) 

## <a name="3-3">BOM 浏览器对象模型</a>

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

## <a name="3-4">DOM 文档对象模型</a>

DOM 是 Document Object Model 的缩写，即 文档对象模型，是所有浏览器公共遵守的标准，DOM 将HTML和XML文档映射成一个由不同节点组成的树型结构，俗称DOM树。
其核心对象是document，用于描述DOM树的状态和属性，并提供对应的DOM操作API。
* DOM 被划分为1级、2级、3级，共3个级别：
1. 1级DOM -，由DOM核心与DOM HTML两个模块组成。DOM核心能映射以XML为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML通过添加HTML专用的对象与函数对DOM核心进行了扩展。
2. 2级DOM - 鉴于1级DOM仅以映射文档结构为目标，DOM 2级面向更为宽广。通过对原有DOM的扩展，2级DOM通过对象接口增加了对鼠标和用户界面事件（DHTML长期支持鼠标与用户界面事件）、范围、遍历（重复执行DOM文档）和层叠样式表（CSS）的支持。同时也对DOM 1的核心进行了扩展，从而可支持XML命名空间。
3. 3级DOM - 通过引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。


### DOM事件
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

## <a name="3-5">DOM操作—怎样添加、移除、移动、复制、创建和查找节点?</a>
* 创建新节点
    createDocumentFragment()    //创建一个DOM片段
    createElement()   //创建一个具体的元素
    createTextNode()   //创建一个文本节点

* 添加、移除、替换、插入
    appendChlid(childNode)  添加节点
    insertBefore(newChild,oldChild) 添加节点
    removeChild(childNode) 删除节点    
    replaceChild(newNode,oldNode）替换节点
    cloneNode()     复制节点：
  	newNode=node.cloneNode(boolean) ; 不写默认是false
参数可选复制节点,接受一个布尔值参数， true 表示深复制（复制节点及其所有子节点），  false 表示浅复制（复制节点本身，不复制子节点）

* 查找
    document.querySelector() // 查找第一个 （id,className, tgaName)
    document.querySelectorAll() //查找所有 （id,className, tgaName)
    getElementsByTagName()    //通过标签名称
    getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
    getElementById()    //通过元素Id，唯一性
    getElementsByClassName（）//通过元素classname


## <a name="3-6">事件委托(代理)</a>
1. 事件注册在父级元素上，依靠事件冒泡机制与事件捕获机制，子级元素的事件将委托给父级元素。可以减少事件注册数量，节约内存开销，提高性能。
2. 对js动态添加的子元素可自动绑定事件
    function agent(){
      let ul=document.getElementsByTagName("ul");
      ul.addEventListener('click',function(e){
      let event = e || window.event;
      let target= event.target || event.srcElement;
    if(target.tagName.toLowerCase() =='li'){
          alert(event.target.innerHTML);
      }
      },false);
    };

## <a name="3-7">兼容的事件侦听器函数。（阻止冒泡，取消默认行为）</a>
Event = {
// 参数： 操作的元素,事件名称 ,事件处理程序
// 添加事件
	addEvent : function(ele, type, handler) {
		ele.addEventListener?ele.addEventListener(type, handler, false):
		ele.attachEvent?ele.attachEvent('on'+type,function(){handler.call(ele);}):
		elet['on' + type] = handler;
	},
// 移除事件
	removeEvent : function(ele, type, handler) {
		ele.removeEventListener?ele.removeEventListener(type, handler, false):
		ele.datachEvent?ele.detachEvent('on' + type, handler):
		ele['on' + type] = null;
	},
// 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
	stopPropagation : function(e) {
   var e=window.event || e;
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true;//IE
	},
// 取消事件的默认行为
	preventDefault : function(e) {
   var e=window.event || e;
		e.preventDefault?e.preventDefault():e.returnValue = false;//IE
	},
// 获取事件目标
	getTarget : function(e) {
         var e=window.event || e;
		return e.target || e.srcElement;
	},
};

## <a name="3-8">闭包</a>
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

## <a name="3-9">原型、原型链、原型继承</a>

* _proto_,prototype区别：
js里所有的对象都有proto属性(对象，函数)，可称为隐式原型，指向构造该对象的构造函数的原型。

只有函数function才具有prototype属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。
原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。

* 原型(prototype)：
函数本身就是个包含方法与属性的对象，每个对象都有个prototype(原型)属性。可通过原型为对象扩展属性，实现继承

* 原型链：
当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，直至undefined（Object的Prototype就是undefined）从而形成了所谓的“原型链”。

* 原型继承：
原型中的成员可以被和其相关的对象共享这一特性，可以实现继承。这种实现继承的方式，就叫做原型继承。

如何实现继承？
1. 构造继承
2. 原型继承
3. 实例继承
4. 拷贝继承

## <a name="3-10">作用域、作用域链、执行环境、上下文</a>
### 作用域：
作用域就是变量和函数的可访问范围，控制着变量和函数的可见性与生命周期，

作用域分类：
1. 全局作用域
2. 函数作用域
3. eval作用域
4. 块级作用域。

### 作用域链：
当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，直至全局函数，这种组织形式就是作用域链。

JavaScript中的函数采用静态作用域，也称词法作用域。当在执行函数调用时，不管何时何地执行函数，其中的变量在函数定义时就已经决定了，函数会从自身作用域节点开始，沿着作用域链向上访问变量的值。
注意：作用域链的顶端是全局作用域，作用域链在函数定义时就已经创建了。

### 上下文：执行上下文就是当前代码的执行环境 / 作用域
在相同作用域下的This值
JS的执行上下文可以理解为当前代码的执行环境，在执行JS程序时，每遇到一段JS可执行代码，都会创建一个可执行上下文。JS当中可执行代码分为三种：全局代码、函数代码、eval代码。所以一段JS程序必定会产生多个执行上下文，而JavaScript引擎则是以堆栈的形式来对其进行管理，也就是常说的函数调用栈。栈底是全局上下文，栈顶则是当前正在执行的上下文.执行上下文在函数调用栈中的顺序为:自底向上

* 特性：
1. 单线程
2. 同步执行
3. 只有一个全局上下文
4. 可有无数个函数上下文
5. 每个函数调用都会创建一个新的执行上下文，哪怕是递归调用

### 执行环境：
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


## <a name="3-11">公有、私有、静态、特权方法与属性</a>

私有变量和函数：
    在函数内部定义的变量和函数，如果不对外提供接口，外部是无法访问到的，也就是该函数的私有的变量和函数。
    
静态变量和静态函数：
    当定义一个函数后通过点号 “.”为其添加的属性和函数，通过对象本身仍然可以访问得到，但是其实例却访问不到

实例变量和实例函数：

1. 公有(原型)方法、属性：//必需先实例化对象
    function User(){
      this.age = 26;//  公有属性
      this.getAge = function(){}//公有方法
    }
    User.prototype.getName=function(){}//公有方法
    var user = new User();
 
2. 私有方法、属性：//只能在函数内部直接调用
    function User(age){
      var age = age;//私有属性
      function getAge(){}//私有方法
    }
    var user = new User(26);
 
3. 静态方法、属性：无需实例化就可以调用的方法、属性
//静态方法无法调用公有属性、公有方法、私有方法、私有属性、特权方法和原型属性
//对象的实例不能调用对象的静态方法，只能调用实例自身的静态属性和方法
    function User(){}
    User.age = 26;//静态属性
    User.getAge =function(){} //静态方法
    
4. 特权方法：
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






## <a name="">this</a>
https://juejin.im/post/5bd5509851882543e82f5564

http://www.cnblogs.com/pssp/p/5216085.html?tdsourcetag=s_pctim_aiomsg
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


箭头函数的this指向
1. 箭头函数不绑定this,箭头函数中的this相当于普通变量。
2. 箭头函数的this寻值行为与普通变量相同，在作用域中逐级寻找。
3. 箭头函数的this无法通过bind，call，apply来直接修改。
4. 改变作用域中this的指向可以改变箭头函数的this
5. eg. `function closure(){()=>{//code }}`，在此例中，我们通过改变封包环境`closure.bind(another)()`，来改变箭头函数this的指向。


可通过call、apply和 bind 等方法来改变函数的 this 指向，其中，call 和 apply 主动执行函数，bind一般在事件回调中使用，而 call 和 apply的区别只是参数的传递方式不同。

## <a name="">apply 、 call 、bind</a>

都是用来改变函数的this对象的指向的；
第一个参数都是this要指向的对象，也就是想指定的上下文；
都可以利用后续参数传参；
bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。

## <a name="">深，浅拷贝</a>

* 浅拷贝： 浅拷贝只复制指向某个对象的指针，即复制对象地址
>
    Object.create(Object.getPrototypeOf(a);Object.getOwnPropertyDescriptors(obj));
    Object.defineProperties(Object.getPrototypeOf(a),Object.getOwnPropertyDescriptors(obj));
    Object.assign(a, b) 是一种可以对非嵌套对象进行深拷贝的方法,如果对象中出现嵌套情况,那么其对被嵌套对象的行为就成了普通的浅拷贝.

* 深拷贝：开辟新的栈

1. 
JSON.parse(JSON.stringify(obj));
只能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象 即那些能够被 json 直接表示的  数据结构。当遇到层级较深，且序列化对象不完全符合JSON格式时会出现问题，像function没办法转成JSON。
2. 
>
    b=a.slice(0)  //数组一层深拷贝
    b=a.concat([])//数组一层深拷贝
    　
    function deepCopy(p, c) {
      var c = c || {};
      for (var i in p) {
        if (typeof p[i] === 'object') {
          c[i] = (p[i].constructor === Array) ? [] : {};
          deepCopy(p[i], c[i]);
        } else {
          c[i] = p[i];
        }
      }
      return c;
    }

    var C = {
      C:'C',
      ad: [1,32],
      ads:{a: 1, b:'31',b:[32]},
      func: function(){console.log(42)}
    }
    D = deepCopy(C);
    // Object.assign(D,C)
    C.ads.b='da'
    console.log(D)
    console.log(C)

## <a name="">js延迟加载：defer,async</a>

1. defer 属性  \<script src="file.js" defer>\</script>
  让js并行加载。defer是在HTML解析完之后才会执行，按加载的顺序执行
2. async 属性  \<script src="file.js" async>\</script>
  让js并行加载，async是在加载完成后立即执行，执行顺序和加载顺序无关。它们将在onload 事件之前完成。对于支持async属性的浏览器，动态插入的外链脚本, 相当于默认具有async=true；

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


## <a name="">重绘和回流</a>
回流必将引起重绘，而重绘不一定会引起回流。

回流：当页面中的部分或者全部因为元素的规模尺寸，布局，隐藏等改变而需要重新构建,这就叫做回流。
重绘：当页面的中的可见性发上变化而不影响布局时，比如：背景颜色吗，文字颜色等，这样形成了重绘

* 会引起重绘和回流的操作如下：
    添加、删除元素(回流+重绘)
    隐藏元素，display:none(回流+重绘)，visibility:hidden(重绘)
    移动元素，比如改变top,left的值，或者移动元素到另外一个父元素中。(重绘+回流)
    对style的操作(对不同的属性操作，影响不一样)
    用户的操作，比如改变浏览器大小，改变浏览器的字体大小等(回流+重绘)
    transform 操作不会引起重绘和回流，是一种高效率的渲染。因为transform属于合成属性，进行动画时将会创建一个合成层，在一个独立的层中进行渲染。


* 什么会导致回流呢？
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

* 避免方法：

  尽可能在DOM树的最末端改变class
  避免设置多重内联样式
  动画效果设置position为absolute，fixed
  避免使用table布局
  避免使用CSS表达式
  直接改变className，
  DOM离线处理，处理完后一起更新,如将其至于内存或设置display:none。
    a) 使用DocumentFragment进行缓存操作,引发一次回流和重绘；
    b) 使用display:none技术，只引发两次回流和重绘；
    c) 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘


## <a name="">内存泄漏</a>
内存泄漏:是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。浏览器中采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，因此会产生内存泄漏。

1. 意外的全局变量引起的内存泄漏（变量未声明，通过this创建,）
2. 闭包引起的内存泄漏
3. 没有清理的DOM元素引用
4. 被遗忘的定时器或者回调
5. 子元素存在引用引起的内存泄
6. console.log :  在传递给 console.log的对象是不能被垃圾回收 ，因为在代码运行之后需要在开发工具能查看对象信息。所以最好不要在生产环境中 console.log任何对象。


## <a name="">"use strict"? 用处？</a>

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



## <a name="">面向过程和面向对象的异同？</a>
面向过程：把复杂业务划分为若干个“Procedure、Function”。
面向过程的思维方式：彻底的理解现实场景，理清其中的逻辑关系和运行顺序，划分为若干个小的处理单元——落实为function
面向对象的思维方式：首先观察现实场景，发现其中有哪些角色和对象，赋予这些对象以属性和行为，让他们彼此发消息，从而构建整个大的应用场景。

对象(Object)：现实应用/场景中的某个事物在程序中的体现。对象是无特定顺序的属性的集合。
面向对象的程序需要具备的三个/四个基本特征：
封装(capsulation)：把零散的多个变量组成一个整体
继承(inheritance)：子对象自动获得父对象的所有特征
多态(polymorphism)：一个方法根据参数的不同可以运行出不同的结果
聚集(aggregation)：多个对象可以聚合为一个更大的对象
  JavaScript具备上述四种能力。
	Object  =  Property*  +  Method*
	属性和方法统一称为对象的特性(attribute)或成员(member)








## <a name="">跨域</a>

同源：
协议相同
域名相同
端口相同
跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。


 “同源政策”越来越严格。目前，如果非同源，共有三种行为受到限制。
（1） Cookie、LocalStorage 和 IndexedDB 无法读取。
（2） DOM 无法获得。
（3） AJAX 请求不能发送。、


跨域方法
1、 通过jsonp跨域
2、 document.domain + iframe跨域
3、 location.hash + iframe
4、 window.name + iframe跨域
5、 postMessage跨域
6、 跨域资源共享（CORS）
7、 nginx代理跨域
8、 nodejs中间件代理跨域
9、 WebSocket协议跨域


## <a name="">常见的web攻击</a>
1.XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。
2.SQL注入攻击
3.CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。


## <a name="">URI、URL、URN</a>
URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。
Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的
URI一般由三部组成：
①访问资源的命名机制
②存放资源的主机名
③资源自身的名称，由路径表示，着重强调于资源。

URL是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。
URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。
采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL一般由三部组成：
①协议(或称为服务方式)
②存有该资源的主机IP地址(有时也包括端口号)
③主机资源的具体地址。如目录和文件名等

URN，uniform resource name，统一资源命名，是通过名字来标识资源，比如mailto:java-net@java.sun.com。

URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。笼统地说，每个 URL 都是 URI，但不一定每个 URI 都是 URL。这是因为 URI 还包括一个子类，即统一资源名称 (URN)，它命名资源但不指定如何定位资源。上面的 mailto、news 和 isbn URI 都是 URN 的示例。
在Java的URI中，一个URI实例可以代表绝对的，也可以是相对的，只要它符合URI的语法规则。而URL类则不仅符合语义，还包含了定位该资源的信息，因此它不能是相对的。

在Java类库中，URI类不包含任何访问资源的方法


## <a name="">函数重载</a>

函数名称一样，但是输入输出不一样。或者说，允许某个函数有各种不同输入，根据不同的输入，调用不同的函数，然后返回不同的结果。

## <a name="">柯里化</a>

柯里化，即Currying，可以是函数变得更加灵活。我们可以一次性传入多个参数调用它；也可以只传入一部分参数来调用它，让它返回一个函数去处理剩下的参数。

它与函数绑定紧密相关, 用于创建已经设置好了一个或多个参数的函数, 其具体做法时使用一个闭包返回一个函数, 当函数被调用时, 返回的函数还需要设置一些传入的参数。

柯里化的三个作用 : 1.参数复用 2. 提前返回 3.延迟计算



## <a name="">前端性能优化的方法？</a>

减少http请求次数：CSS Sprites, 、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
JS、CSS源码压缩
前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，减少请求次数
用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
设置样式时使用className（或el.style.cssText +=）而不是直接操作style。
少用全局变量、缓存DOM节点查找的结果。
避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。不使用@import
图片预加载，将样式表放在顶部，将脚本放在底部  
避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。


## <a name="">从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)</a>

### 浏览器工作原理
1.用户界面 2.网络 3.UI后端 4.数据存储 5.浏览器引擎 6.渲染引擎 7.js解释器
浏览器解析过程：
流程：解析html以构建dom树->构建render树->布局render树->绘制render树

### 网页生成过程：
1.HTML被HTML解析器解析成DOM 树
2.css则被css解析器解析成CSSOM 树
3.结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4.生成布局（flow），即将所有渲染树的所有节点进行平面合成
5.将布局绘制（paint）在屏幕上
第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染。

###  简
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

### 具体
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



## <a name="">JS执行机制：</a>

#### 浏览器的渲染进程是多线程的

1. GUI渲染线程
负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
注意，GUI渲染线程与JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
2. JS引擎线程
也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）
JS引擎线程负责解析Javascript脚本，运行代码。
JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序
同样注意，GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。
3. 事件触发线程
归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）
当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中
当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理
注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）
4. 定时触发器线程
传说中的 setInternal与 setTimeout所在线程
浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）
因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）
注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。
5. 异步http请求线程
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
  执行一个宏任务，过程中如果遇到微任务，就将其放到微任务的“事件队列”里
  当前宏任务执行完成后，会查看微任务的“事件队列”，依次执行所有微任务
  执行完毕，开始检查渲染，然后GUI线程接管渲染
  渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）


#### 进程、线程
一个进程由一个或多个线程组成
进程之间相互独立
同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
多个线程在进程中协作完成任务

进程是能拥有资源和独立运行的最小单位
线程是建立在进程的基础上的一次程序运行单位



## <a name="3-22">设计模式</a>

### 创建对象的几种方式？
    对象字面量：person={firstname:"Mark",lastname:"Yun",age:25};
    Object.create（）//o=Object.create({},{name:{value:’joo’}});
    构造函数：p=new Object();

### 工厂模式 -- Factory
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


### 构造函数模式 -- Constructor
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

### 原型模式
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

### 单例模式 —— Singleton
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


### 混合模式 —— Mixin
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

### 模块模式 —— Module
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


### 发布订阅模式 —— Publish/Subscribe
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

