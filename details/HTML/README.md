<a id="top"></a>

# [常用链接](/details/website/HTML.md)

# 目录
<details >

* <a href="#HTML">**HTML**</a>

* <a href="#XHTML、HTML区别">XHTML、HTML区别</a>
* <a href="#语义化">语义化</a>
* <a href="#HTML5 为什么只需要写">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>
* <a href="#Doctype作用？标准模式、混杂模式区别">Doctype作用？标准模式、混杂模式区别</a>
* <a href="#渐进增强与优雅降级">渐进增强与优雅降级-----开发方式，设计理念</a>
* <a href="#HTML5新标签">HTML5新标签</a>
* <a href="#块级元素、内联元素">块级元素、内联元素（行内元素、行内块级元素）</a>
* <a href="#HTML全局属性有哪些">HTML全局属性有哪些</a>
* <a href="#src和href的区别">src和href的区别</a>
* <a href="#浏览器内核、私有化前缀">浏览器内核、私有化前缀</a>
* <a href="#web存储">cookies、sessionStorage 、和 localStorage 的区别</a>
* <a href="#HTML中的字符实体">HTML中的字符实体</a>
* <a href="#HTML5的离线储存">HTML5的离线储存</a>
* <a href="#table优缺点">table优缺点</a>
* <a href="#div较table优点">div较table优点</a>
* <a href="#iframe缺点">iframe优缺点</a>
* <a href="#Video">Video</a>
* <details open>
    <summary><a href="#link标签属性">link标签属性</a></summary>

    * <a href="网页标题引入图标">网页标题引入图标</a>  
    * <a href="预加载页面资源prefetch、prefetch">预加载页面资源prefetch、prefetch</a>
    
  </details>  
* <a href="base标签">base标签</a>
* <details open>
    <summary><a href="#meta标签属性">meta标签属性</a></summary>

    * 必要属性
    * 可选属性
    * 声明文档使用的字符编码
    * 关键词 name="keywords"
    * 页面描述 name="description"
    * 搜索引擎索引方式 name="robots"
    * 页面重定向和刷新 http-equiv="refresh"
    * viewport
    * 其他
      
  </details> 
* <a href="#通过meta代码强制浏览器使用WebKit内核极速模式">通过meta代码强制浏览器使用WebKit内核极速模式</a>
* <a href="#IE hack">IE hack</a>
* <a href="#aria与role">aria与role</a>
* <a href="#CSS和JS的位置会影响页面效率，为什么">CSS和JS的位置会影响页面效率，为什么？</a>
* <a href="#未使用自适应写的PC页面在手机上显示不全的问题">未使用自适应写的PC页面在手机上显示不全的问题</a>
* <a href="#HTML 5.2">HTML 5.2新增标签、属性</a>
</details>

# <a name="HTML">**HTML**</a>[![bakTop](/img/backward.png)](#top)

## <a name="XHTML、HTML区别">XHTML、HTML区别</a>[![bakTop](/img/backward.png)](#top)

* HTML: 超文本标记语言（HyperText Markup Language），是一种基于标准通用标记语言（SGML）的应用，是一种非常灵活的置标语言，

* XHTML: 可扩展的超文本标记语言（Extensible HyperText Markup Language），基于XML(XML是SGML的一个子集)。  

* XML: 可扩展的标记语言（Extensible Markup Language），主要用于存储数据和结构；  

---

XHTML特性：
* XHTML 与 HTML4 几乎是相同的  
* XHTML是更为严格纯净的HTML版  
* XHTML是作为一种xml应用被重新定义的HTML  
* XHTML文档必须拥有根元素、元素必须被关闭、元素必须被正确地嵌套、标签应该使用小写

## <a name="语义化">语义化及好处</a>[![bakTop](/img/backward.png)](#top)
[页面结构语义化](https://rainylog.com/post/ife-note-1/)

语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。

* HTML标签的语义化是指：根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。

* css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如Microformat通过添加符合规则的class描述信息

`语义化好处:`
* 易于用户阅读，去掉样式后页面呈现清晰的结构  
* 搜索引擎更好地理解页面，有利于SEO  
* 有利于开发和维护，语义化更具可读性  
* 方便其他设备解析，如盲人阅读器根据语义渲染网页


常见的语义化标签：

```html
<header></header>  头部

<nav></nav>  导航栏

<section></section>  区块（有语义化的div）

<main></main>  主要区域

<article></article>  主要内容

<aside></aside>  侧边栏

<footer></footer>  底部
```

### strong b标签区别
* 效果一样，意义不同
* b 仅表加粗
* strong 表加强，提示此内容比较重要
* 使用盲人阅读器，strong 会重读 ， b不会

## <a name="HTML5 为什么只需要写">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>[![bakTop](/img/backward.png)](#top)

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要 DOCTYPE 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）

HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。



## <a name="Doctype作用？标准模式、混杂模式区别">Doctype作用？标准模式、混杂模式区别</a>[![bakTop](/img/backward.png)](#top)


DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是**告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义来解析文档**，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在 HTML 第一行

DOCTYPE不存在或格式不正确会导致文档以怪异模式呈现。

在标准模式中，浏览器根据规范呈现页面；  
在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

判断方法：document.compatMode 
* 标准模式：CSS1Compat -- 默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
* 怪异(混杂)模式：BackCompat	-- 浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

常见dotype：
>
    HTML5: <!DOCTYPE html>

    HTML4.01 strict：不允许使用表现性、废弃元素（如font）以及frameset。
    声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

    HTML4.01 Transitional:允许使用表现性、废弃元素（如font），不允许使用frameset。
    声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    HTML4.01 Frameset:允许表现性元素，废气元素以及frameset。
    声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

    

## <a name="渐进增强与优雅降级">渐进增强与优雅降级-----开发方式，设计理念</a>[![bakTop](/img/backward.png)](#top)

渐进增强：针对低版本浏览器构建页面，保证核心功能。再针对高级浏览器进行改进和追加功能以达到更好的用户体验

优雅降级：一开始就构建完整功能，在针对底版本浏览器兼容

区别：  
* 优雅降级是从复杂的现状开始，并试图减少用户体验的供给  
* 渐进增强则从基础的的版本开始，并不断扩充，以适应未来环境的需要。  
* 优雅降级意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## <a name="HTML5新标签">[HTML5新标签](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)</a>[![bakTop](/img/backward.png)](#top)

[HTML5新标签](/details\HTML\HTML5新标签.md)

HTML5新特性：
* 本地存储特性
* 设备兼容特性 HTML5提供了前所未有的数据与应用接入开放接口
* 连接特性 WebSockets
* 网页多媒体特性 支持Audio Video SVG Canvas WebGL CSS3

增加拖放API、地理定位、SVG绘图、canvas绘图、Web Worker、WebSocket


## <a name="块级元素、内联元素">块级元素、内联元素（行内元素、行内块级元素）</a>[![bakTop](/img/backward.png)](#top)

* 块级元素：display:block
  >
      会独占一行,默认情况下,其宽度自动填满其父元素宽度.设置了宽度,仍然是独占一行.
      块级元素可以设置width,height,margin和padding属性.

      div,p,ol,ul,li,h1-h6,dl,dt,dd...
      main,header,footer,section,aside,articel,nav,...

* 行内元素：display:inline.
  >
      不会独占一行,相邻的行内元素会排列在同一行里,直到一行排不下,才会换行,其宽度随元素的内容而变化.  

      行内元素设置width,height属性无效，它的长度高度主要根据内容决定.  
      行内元素的margin和padding属性,水平方向(padding/margin-left/right)产生边距效果,但定义竖直方向(padding/margin-top/bottom)无效

      a,span,img,select,input

* 行内块级元素：display:inline-block
  >
      让行内元素拥有块级元素（除了独占一行）的特性

* 空元素：
  >
      没有内容的 HTML 元素被称为空元素。
      空元素是在开始标签中关闭的

      <br> <hr> <img> <input> <link> <meta>

* 替换元素  
  >
      内容可以被替换,
      内容的外观不受页面上的 CSS 的影响
      有自己的尺寸
      在很多 CSS 属性上有自己的一套表现规则
      
      <img> 
      <iframe>
      <video>
      <select>
      <input>
      <textarea>
      <button>


![替换元素](/img/替换元素display值.jpg)




## <a name="HTML全局属性有哪些">HTML全局属性有哪些</a>[![bakTop](/img/backward.png)](#top)

* id: 元素id，文档内唯一  
* class: 为元素设置类标识  
* contenteditable: 指定元素内容是否可编辑(true, false)  
* data-*: 为元素增加自定义属性  
* dir: 设置元素文本方向(auto、ltr、rtl)  
* draggable: 设置元素是否可拖拽  
* hidden: 隐藏元素  
* lang: 元素内容的的语言  
* style: 行内css样式  
* title: 元素相关的建议信息  
* tabindex: 使用tab键时的访问顺序。当设置为-1的时候，不会被选中。当为0时在所有大于0的之后  
* accesskey属性允许你设置一个或者多个键盘快捷键，快速聚焦到页面元素  
  >
      <input type="text" name="name" accesskey="n"/>  
      chrome：alt + n即可聚焦到该input
      firefox ctrl + alt + n即可聚焦到该input
      IE alt + n | ctrl + alt + n

## <a name="src和href的区别">src和href的区别</a>[![bakTop](/img/backward.png)](#top)

* href（Hypertext Reference） 

指向网络资源所在的位置, 用于在当前文档和引用资源间确定联系, 加载css。表达的是超链接。比如a元素、link元素。

* src（source）

是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和iframe等元素。 

当浏览器解析到src时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

`总而言之，src用于替换当前元素；href用于在当前文档和引用资源之间建立联系。`

## <a name="浏览器内核、私有化前缀">浏览器内核、私有化前缀</a>[![bakTop](/img/backward.png)](#top)

#### 主要分为：
* 渲染引擎(layout engineer或Rendering Engine)
* JS引擎
    
#### 渲染引擎：

负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

#### JS引擎：
解析和执行javascript来实现网页的动态效果。
    
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

#### 常见浏览器及其内核、私有化前缀

| | Chrome | Firefox | IE | Safari | Opera |
|:-:| :-:|:-:|:-:|:-:|:-:|
| 渲染引擎(内核) | Blink (原webkit) | Gecko | Trident | Webkit | Blink(原Presto) |
| JS 引擎 | V8 | SpiderMonkey | Nitro | Chakra | V8 |
| 私有化前缀 | -webkit- | -moz- | -ms- | -webkit- | -webkit- |


## <a name="H5是什么">常说的H5是什么</a>[![bakTop](/img/backward.png)](#top)
H5指移动端页面,符合 HTML5 标准实现的页面

通过WebView加载页面

WebView是一种控件，它基于webkit引擎，可以解析DOM 元素，展示html页面的控件，因此具备渲染Web页面的功能。

基于Webview的混合开发，就是在 Anddroid (安卓)/(苹果)原生APP里，通过WebView控件嵌入Web页面。
很多APP都是外边套原生APP的壳，内容是H5页面(基于html+css+js的Web页面)。现在的移动端混合开发软件，如果对于交互渲染要求不是特别高的项目，基本都是这么玩的。

WebView作用
* 显示和渲染Web页面
* 直接使用html文件（网络上或本地assets中）作布局
* 可和JavaScript交互调用



## <a name="web存储">cookies、sessionStorage 、和 localStorage 的区别</a>[![bakTop](/img/backward.png)](#top)
[cookies、sessionStorage 、和 localStorage 的区别](/details\HTML\Web存储.md)

## <a name="HTML中的字符实体">HTML中的字符实体</a>[![bakTop](/img/backward.png)](#top)
HTML中某些字符是预留的,预留字符必须被替换为字符实体。

在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。

如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。

常用：
|显示结果	|描述|	实体名称|	实体编号|
|:--|:--|:--|:--|
|  	| 空格 	| \&nbsp;	|\&#160;|
| <	| 小于号|	\&lt;	|\&#60;|
| >	| 大于号|	\&gt;	|\&#62;|
| &	| 和号	| \&amp;	|\&#38;|
| "	| 引号	| \&quot;	|\&#34;|
| '	| 撇号 	| \&apos; (IE不支持)	|\&#39;| 
|¥	|元（yen）|	\&yen;|	&#165;|
|© |版权（copyright）|	\&copy;|	\&#169;

[更多](https://www.w3cschool.cn/htmltags/ref-entities.html)

## <a name="HTML5的离线储存">HTML5的离线储存</a>[![bakTop](/img/backward.png)](#top)

[MDN - 介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)

离线存储可以将站点的一些文件存储在本地，在没有网络的时候还是可以访问到以缓存的对应的站点页面，其中这些文件可以包括html，js，css，img等等文件，但其实即使在有网络的时候，浏览器也会优先使用已离线存储的文件，返回一个200（from cache）头。这跟HTTP的缓存使用策略是不同的。



## <a name="table优缺点">table优缺点</a>[![bakTop](/img/backward.png)](#top)
优点：
* 写表格方便快捷，样式统一，居中对齐
* 兼容性好

缺点：  
* table会阻挡浏览器渲染引擎的渲染顺序,(会延迟页面的生成速度，让用户等待更久的时间)
  >table要等其中的内容完全下载之后才会显示出来,显示比div+css布局慢;
* table要比其它html标记占更多的字节,(延迟下载时间，占用服务器更多的流量资源)
* 在某些浏览器中table里的文字的拷贝会出现问题
* 代码臃肿，当在table中套用table的时候，阅读代码会显得异常混乱；
* 混乱的colspan与rowspan，用来布局时，频繁使用他们会造成整个文档顺序混乱；
* 深层的嵌套，导致搜索引擎读取困难，同时还很大程度上增加了代码冗余；
* table对对于页面布局来说，从语义上看是不正确的。(它描述的是表现，而不是内容。)
* 灵活性差，不易维护，无法适应响应式设计；
* 默认的表格布局算法会产生大量重绘


## <a name="div较table优点">div+css较table优点</a>[![bakTop](/img/backward.png)](#top)
* 加快了页面的加载速度（在IE中要将整个table加载完了才显示内容）
* 允许更多炫酷的页面效果，丰富了页面
* 符合W3C标准，代码结构清晰明了，结构、样式和行为分离，带来足够好的可维护性。
* 对SEO搜索引擎更加友好，

缺点: 不同浏览器对web标准默认值不同，所以更容易出现对浏览器的兼容性问题。

## <a name="iframe缺点">iframe优缺点</a>[![bakTop](/img/backward.png)](#top)
iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

优点：
* 实现无刷新文件上传；
* 跨域通信；
* 解决了加载缓慢的第三方内容如图标和广告等的加载问题。

缺点：
1. 会阻塞主页面的onload事件（window 的 onload 事件需要在所有 iframe加载完毕后（包含里面的元素）才会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 src 可以避免这种阻塞情况。）
2. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载.
3. 不利于搜索引擎的检索，不利于SEO优化
4. 浏览器的后退按钮失效。
5. 小型的移动设备无法完全显示框架。

通过javascript动态给iframe添加src属性值，这样可以解决1,2两个问题。

## <a name="Video">Video</a>[![bakTop](/img/backward.png)](#top)
[](https://juejin.im/post/5e54c3b4f265da575477918f)

```html
<video 
  class="video-source"
  width="100%"
  height="240px"  <!-- 如果有封面，请设置高度 -->
  style="object-fit:cover/fill"
  autoplay <!-- 自动播放 -->
  loop <!-- 循环播放 -->
  preload="auto" <!-- 页面加载完成后载入视频, 如果设置了 autoplay 属性，则忽略该属性--> 
  controls <!-- 显示播放器控件 --> 
  muted <!-- 静音 -->
  playsinline="true"  <!--IOS微信浏览器支持小窗内播放--> 
  webkit-playsinline="true"  <!--这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放-->  
  x5-video-player-type="h5-page" <!--启用X5内核同层渲染-->
  x5-video-orientation="h5" <!--播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏-->
  x5-video-player-fullscreen="true" <!--全屏设置，设置为 true 是防止横屏-->
  <!-- x5-playsinline="true" -->  <!--设置X5内核为行内播放模式，不能和`x5-video-player-type同时设置会覆盖-->
  x-webkit-airplay="true"  <!--未知-->
  x5-video-ignore-metadata="true" <!--未知-->
>
<source src=""></source>
</video>
```

## <a name="link标签属性">link标签属性</a>[![bakTop](/img/backward.png)](#top)
### <a name="网页标题引入图标">网页标题引入图标</a>[![bakTop](/img/backward.png)](#top)
>

    <link rel="shortcut icon" href="favicon.ico" type="images/x-icon" />

    <link rel="icon" href="favicon.gif" type="image/gif" />

### <a name="预加载页面资源prefetch、prefetch">预加载页面资源prefetch、prefetch</a>[![bakTop](/img/backward.png)](#top)
[什么是 Preload，Prefetch 和 Preconnect？](https://juejin.im/post/6844903646996480007)
[用 preload 预加载页面资源](https://juejin.im/post/6844903562070196237)

#### dns-prefetch
```html
<link rel="dns-prefetch" href="xxx.com">

提前进行域名解析，如：大型网站的网页中引用了大量很多其他域名的资源  
如果网站的所有的资源基本都在本域名下，那么这个基本没有什么作用。因为Chrome在访问你的网站就帮你缓存了
```

#### preload --提前加载（提前加载重要资源）
preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，同时不阻塞文档 onload 事件

使用 preload 后，不管资源是否使用都将提前加载,提升资源加载的优先级

优点
* 将加载和执行分离开，可不阻塞渲染和  onload 事件
* 提前加载指定资源，不再出现依赖的font字体隔了一段时间才刷出

href: 预加载的资源  
as: 标明资源类型;忽略as属性，或者错误的as属性会使preload等同于XHR请求，浏览器不知道加载的是什么内容，因此此类资源加载优先级会非常低。
```html
<!-- 获取字体时必须加上crossorigin属性，就如使用CORS的匿名模式获取一样。是的，即使你的字体与页面同域 -->
<link rel="preload" href="xxx.woff" as="font" crossorigin />
<link rel="preload" href="xxx.css"  as="style" />
<link rel="preload" href="xxx.js"   as="script" />
```

`preload只是提前加载不会生效，需要引用才会生效`
```html
<link rel="preload" as="style" href="demo.css" />
...
<link rel="stylesheet" href="demo.css" />
```

如何让preload的 CSS 样式表立即生效？
```html
<link rel="preload" href="xxx.css" as="style" onload="this.rel='stylesheet'"  />
```


使用 preload 后，Chrome 会有一个警告：
```
The resource xxxx was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
```

作用

Preload是为了让当前页面的关键资源尽早被发现和加载，从而提升首屏渲染性能。

#### Prefetch -- 空闲加载（用于后续加载可能会用到的资源）
浏览器会在空闲的时候，下载资源，当有页面使用的时候，直接从缓存中读取。其实是把决定是否和什么时间加载这个资源的决定权交给浏览器。

如果在prefetch还没下载完的时候，浏览器发现script标签也引用了同样的资源，浏览器会再次发起请求，这样会造成加载了两次，所以不要在当前页面马上就要用的资源上用prefetch，要用preload。

```html
<link rel="prefetch" href="xxx.js" />
```

作用

Prefetch是为了提前加载下一个导航所需的资源，提升下一次导航的首屏渲染性能。但也可以用来在当前页面提前加载运行过程中所需的资源，加速响应。

`preload和prefetch仅提前加载资源，而不会执行，需调用link，script引入对应文件资源时才会执行`

## <a name="base标签">base标签</a>[![bakTop](/img/backward.png)](#top)
>
    <base href="www.aaa.com" target="_blank"/>

    <base> 标签为页面上的所有链接(img、a、script等)规定默认地址或默认目标。
    <base>设置的target属性 ，a链接也会继承


## <a name="meta标签属性">meta标签属性</a>[![bakTop](/img/backward.png)](#top)
[meta标签属性](\details\HTML\meta标签属性.md)

## <a name="通过meta代码强制浏览器使用WebKit内核极速模式">通过meta代码强制浏览器使用WebKit内核极速模式</a>[![bakTop](/img/backward.png)](#top)

```html
<!-- 强制Chromium内核，作用于360浏览器、QQ浏览器等国产双核浏览器 -->
<meta name="renderer" content="webkit"/>

<!-- 强制Chromium内核，作用于其他双核浏览器 -->
<meta name="force-rendering" content="webkit"/>

<!-- 如果有安装 Google Chrome Frame 插件则强制为Chromium内核，否则强制本机支持的最高版本IE内核，作用于IE浏览器 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>

<!-- 当低版本IE用户访问时就会跳转到升级提示页，避免不必要的资源加载，降低网站服务器开销。 -->
<script>/*@cc_on window.location.href="http://support.dmeng.net/upgrade-your-browser.html?referrer="+encodeURIComponent(window.location.href); @*/</script>
```


## <a name="IE hack">IE hack</a>[![bakTop](/img/backward.png)](#top)
>
    <!--[if !IE]>除IE外都可识别<![endif]-->
    <!--[if IE]> 所有的IE可识别 <![endif]-->
    <!--[if IE 6]> 仅IE6可识别 <![endif]-->
    <!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
    <!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
    <!--[if IE 7]> 仅IE7可识别 <![endif]-->
    <!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
    <!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
    <!--[if IE 8]> 仅IE8可识别 <![endif]-->
    <!--[if IE 9]> 仅IE9可识别 <![endif]-->

## <a name="aria与role">aria与role</a>[![bakTop](/img/backward.png)](#top)
>
    这些都是HTML5针对html tag增加的属性，一般是为不方便的人士提供的功能，比如屏幕阅读器。

    role属性作用是告诉Accessibility类应用（比如屏幕朗读程序，为盲人提供的访问网络的便利程序），这个元素所扮演的角色，主要是供残疾人使用。使用role可以增强文本的可读性和语义化。

    role的作用是描述一个非标准的tag的实际作用。比如用div做button，那么设置div 的 role="button"，辅助工具就可以认出这实际上是个button。
    role属性的应用主要是表单，比如输入密码，对于正常人可以用placaholder提示输入密码，但是对于残障人士是无效的，这个时候就需要role了


    aria的意思是Accessible Rich Internet Application，aria-*的作用就是描述这个tag在可视化的情境中的具体信息。比如：
    <div role="checkbox" aria-checked="checked"></div>
    辅助工具就会知道，这个div实际上是个checkbox的角色，为选中状态。


## <a name="CSS和JS的位置会影响页面效率，为什么">CSS和JS的位置会影响页面效率，为什么？</a>[![bakTop](/img/backward.png)](#top)
css在加载过程中不会影响到DOM树的生成，但是会影响到Render树的生成，进而影响到layout，所以一般来说，style的link标签需要尽量放在head里面，因为在解析DOM树的时候是自上而下的，而css样式又是通过异步加载的，这样的话，解析DOM树下的body节点和加载css样式能尽可能的并行，加快Render树的生成的速度。

js脚本应该放在底部，原因在于js线程与GUI渲染线程是互斥的关系，如果js放在首部，当下载执行js的时候，会影响渲染行程绘制页面，js的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。

## <a name="未使用自适应写的PC页面在手机上显示不全的问题">未使用自适应写的PC页面在手机上显示不全的问题</a>[![bakTop](/img/backward.png)](#top)

原因：
>
    由于html样式的宽度只有980px，而实际需要是1200px

解决方法
>
    html,body{min-width: 1200px;} //(具体多少按实际情况
    或
	  <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=0.3, maximum-scale=1.0, minimum-scale=0.3">



# <a name="HTML 5.2">HTML 5.2新增标签、属性</a>[![bakTop](/img/backward.png)](#top)

[What’s New in HTML 5.2?](https://bitsofco.de/whats-new-in-html-5-2/)

## \<dialog\>标签 -- 创建对话框
默认是隐藏的

#### 属性
* open 显示

### 方法
* show() 弹框形式显示
* close() 关闭
* showModal() 模态框形式显示

### 使用
```html
<button id="open">Open Dialog</button>
<button id="close">Close Dialog</button>

<dialog id="dialog">
  <h2>Dialog Title</h2>
  <p>Dialog content and other stuff will go here</p>
</dialog>

<script>
const dialog = document.getElementById("dialog");

document.getElementById("open").addEventListener("click", () => {
  dialog.show();
});

document.getElementById("close").addEventListener("click", () => {
  dialog.close();
});
</script>

```

## allowpaymentrequest 属性 -- 允许 iframe 内部网页使用  Payment Request API
Payment Request API是结账的形式本地替代。它旨在通过将检索付款信息的处理移到浏览器上，而不是将每个网站上的单独结帐表格移到浏览器，从而为用户提供一种标准化且一致的网上支付方法。

在HTML 5.2之前，无法通过嵌入文档中的iframe发出这些付款请求。这使得第三方嵌入式支付解决方案（例如，Stripe，Paystack）基本上无法利用此API，因为它们的支付接口通常在iframe中处理。

### rel="apple-touch-icon" --  iOS设置网页 icon

```js
<link rel="apple-touch-icon" sizes="32x32" href="path/to/icon32.png"> /* IOS */
<link rel="icon" sizes="16x16" href="path/to/icon16.png">  /* 其他设备 */
```

## 允许多个\<main\>
HTML 5.2之前，\<main\>在DOM中必须唯一，以使页面有效。

HTML 5.2允许一个页面中同时存在多个 \<main\> 标签，不过只能有一个显示的，其他都要用 hidden 属性隐藏。
必须使用hidden属性隐藏 使用display: none; or visibility: hidden无效
```html
<main>...</main>
<main hidden>...</main>
<main hidden>...</main>
```

## \<legend\> 中可使用标题元素
HTML 5.2 之前，\<legend\> 中只能使用纯文本，HTML 5.2 开始，可以使用标题元素了。

```html
<fieldset>
    <legend><h2>Basic Information</h2></legend>
</fieldset>
```

## 新的无效实践
\<p\> 中的无效内容  
以下三类元素不能作为 \<p\> 段落的内容。  
* 行内块、表格元素（inline blocks、inline tables）
* 浮动元素（float）
* 定位元素（position block-level elements）


strict doctype  
HTML4 和 XHTML1 的严格文档类型声明（strict doctype）不再是有效 HTML。
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

```
