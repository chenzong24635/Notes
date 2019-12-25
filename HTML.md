<a id="top"></a>

[MDN-HTML文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference)

<details open>
  <summary>目录</summary>

* <a href="#HTML">**HTML**</a>

* <a href="#语义化">语义化</a>
* <a href="#XHTML、HTML区别">XHTML、HTML区别</a>
* <a href="#Doctype作用 标准模式、兼任模式区别">Doctype作用？标准模式、兼任模式区别</a>
* <a href="#HTML5 为什么只需要写">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>
* <a href="#渐进增强与优雅降级">渐进增强与优雅降级-----开发方式，设计理念</a>
* <a href="#块级元素、内联元素">块级元素、内联元素（行内元素、行内块级元素）</a>
* <a href="#HTML全局属性有哪些">HTML全局属性有哪些</a>
* <a href="#src和href的区别">src和href的区别</a>
* <a href="#浏览器内核、私有化前缀">浏览器内核、私有化前缀</a>
* <a href="#web存储">cookies、sessionStorage 、和 localStorage 的区别</a>
* <a href="#HTML中的字符实体">HTML中的字符实体</a>
* <a href="#HTML5的离线储存">HTML5的离线储存</a>
* <a href="#iframe缺点">iframe缺点</a>
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
* <a href="#IE hack">IE hack</a>
* <a href="#aria与role">aria与role</a>
* <a href="#CSS和JS的位置会影响页面效率，为什么">CSS和JS的位置会影响页面效率，为什么？</a>
* <a href="#未使用自适应写的PC页面在手机上显示不全的问题">未使用自适应写的PC页面在手机上显示不全的问题</a>
</details>

# <a name="HTML">**HTML**</a>[![bakTop](./img/backward.png)](#top)

## <a name="语义化">语义化及好处</a>[![bakTop](./img/backward.png)](#top)

语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。

 HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构 ；

 css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如Microformat通过添加符合规则的class描述信息

好处:
>
    易于用户阅读，去掉样式后页面呈现清晰的结构  
    搜索引擎更好地理解页面，有利于SEO  
    有利于开发和维护，语义化更具可读性  
    方便其他设备解析，如盲人阅读器根据语义渲染网页  

## <a name="XHTML、HTML区别">XHTML、HTML区别</a>[![bakTop](./img/backward.png)](#top)

HTML是一种基于标准通用标记语言（SGML）的应用，是一种非常灵活的置标语言，  
而XHTML则基于可扩展标记语言（XML），XML是SGML的一个子集。

XHTML 与 HTML4 几乎是相同的  
XHTML是更为严格纯净的HTML版  
XHTML是作为一种xml应用被重新定义的HTML  
XHTML文档必须拥有根元素、元素必须被关闭、元素必须被正确地嵌套、标签应该使用小写

## <a name="HTML5新标签">[HTML5新标签](https://www.w3school.com.cn/html/html5_new_elements.asp)</a>[![bakTop](./img/backward.png)](#top)
>
    <header>	定义了文档的头部区域
    <article>	定义页面独立的内容区域。
    <aside>	定义页面的侧边栏内容。
    <main>	定义文档的主内容。
    <nav>	定义导航链接的部分。
    <section>	定义文档中的节（section、区段）。
    <footer>	定义 section 或 document 的页脚。

    <canvas>   
    <audio>	  
    <video>	 
    <source> 定义多媒体资源 <video> 和 <audio>
    <embed>	 定义嵌入的内容，比如插件。
    <track>  为<video> 和 <audio> 元素之类的媒介规定外部文本轨道。
    
    <datalist>	定义选项列表。与input配合使用来定义input可能的值。
        <input list="browsers" name="browser">
        <datalist id="browsers">
          <option value="Internet Explorer">
          <option value="Firefox">
          <option value="Chrome">
        </datalist>

    <keygen>	规定用于表单的密钥对生成器字段。
    <output>	定义不同类型的输出，比如脚本的输出。
    <bdi>	允许您设置一段文本，使其脱离其父元素的文本方向设置。
    <command>	定义命令按钮，比如单选按钮、复选框或按钮
    <details>	用于描述文档或文档某个部分的细节
    <dialog>	定义对话框，比如提示框
    <summary>	标签包含 details 元素的标题
    <figure>	规定独立的流内容（图像、图表、照片、代码等等）。
    <figcaption>	定义 <figure> 元素的标题
    <mark>	定义带有记号的文本。
    <meter>	定义度量衡。仅用于已知最大和最小值的度量。
    <progress>	定义任何类型的任务的进度。
    <ruby>	定义 ruby 注释（中文注音或字符）。
    <rt>	定义字符（中文注音或字符）的解释或发音。
    <rp>	在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
    <time>	定义日期或时间。
    <wbr>	规定在文本中的何处适合添加换行符。

[HTML5 新增加的input输入类型](https://www.w3school.com.cn/html/html_form_input_types.asp)
>
    color
    date
    datetime
    datetime-local
    email
    month
    number
    range
    search
    tel
    time
    url
    week

[HTML5 新增加的input属性](https://www.w3school.com.cn/html/html_form_attributes.asp)
>
    autocomplete
    autofocus
    form
    formaction
    formenctype
    formmethod
    formnovalidate
    formtarget
    height 和 width
    list
    min 和 max
    multiple
    pattern (regexp)
    placeholder
    required
    step



## <a name="HTML5 为什么只需要写">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>[![bakTop](./img/backward.png)](#top)

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）

HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

## <a name="Doctype作用 标准模式、混杂模式区别">Doctype作用？标准模式、混杂模式区别</a>[![bakTop](./img/backward.png)](#top)

documnet type(文档类型的简写),位于HTML文档的第一行，告知浏览器用什么规范解析
DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

在标准模式中，浏览器根据规范呈现页面；在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。
>
    判断方法：document.compatMode 
    1. 标准模式：CSS1Compat
    2. 混杂模式：BackCompat	

常见dotype：
>
    HTML5: <!DOCTYPE html>

    HTML4.01 strict：不允许使用表现性、废弃元素（如font）以及frameset。
    声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

    HTML4.01 Transitional:允许使用表现性、废弃元素（如font），不允许使用frameset。
    声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    HTML4.01 Frameset:允许表现性元素，废气元素以及frameset。
    声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

    

## <a name="渐进增强与优雅降级">渐进增强与优雅降级-----开发方式，设计理念</a>[![bakTop](./img/backward.png)](#top)

渐进增强：针对低版本浏览器构建页面，保证核心功能。再针对高级浏览器进行改进和追加功能以达到更好的用户体验

优雅降级：一开始就构建完整功能，在针对底版本浏览器兼容

区别：  
>
    优雅降级是从复杂的现状开始，并试图减少用户体验的供给，  
    渐进增强则从基础的的版本开始，并不断扩充，以适应未来环境的需要。  
    优雅降级意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## <a name="块级元素、内联元素">块级元素、内联元素（行内元素、行内块级元素）</a>[![bakTop](./img/backward.png)](#top)

* 块级元素：display:block
>
    会独占一行,默认情况下,其宽度自动填满其父元素宽度.设置了宽度,仍然是独占一行.
    块级元素可以设置width,height,margin和padding属性.

    div,p,ol,ul,li,h1-h6,dl,dt,dd,
    main,header,footer,section,aside,nav,...

* 行内元素：display:inline.
>
    不会独占一行,相邻的行内元素会排列在同一行里,直到一行排不下,才会换行,其宽度随元素的内容而变化.  
    行内元素设置width,height属性无效，它的长度高度主要根据内容决定.  
    行内元素的margin和padding属性,水平方向(padding-left,padding-right,margin-left,margin- right)产生边距效果,但定义竖直方向(padding-top,padding-bottom,margin-top,margin-bottom)无效

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

特性：
>
    内容可以被替换,
    内容的外观不受页面上的 CSS 的影响
    有自己的尺寸
    在很多 CSS 属性上有自己的一套表现规则
>
    <img> 
    <input>
    <iframe>
    <video>
    <select>
    <button>
    <textarea>

![替换元素](/img/替换元素display值.jpg)

## <a name="HTML全局属性有哪些">HTML全局属性有哪些</a>[![bakTop](./img/backward.png)](#top)

    accesskey属性允许你设置一个或者多个键盘快捷键，快速聚焦到页面元素
        <input type="text" name="name" accesskey="n"/>  
        chrome：alt + n即可聚焦到该input
        firefox ctrl + alt + n即可聚焦到该input
        IE alt + n | ctrl + alt + n

    id: 元素id，文档内唯一
    class:为元素设置类标识
    contenteditable: 指定元素内容是否可编辑(true, false)
    data-*: 为元素增加自定义属性
    dir: 设置元素文本方向(auto、ltr、rtl)
    draggable: 设置元素是否可拖拽
    hidden: 隐藏元素
    lang: 元素内容的的语言
    style: 行内css样式
    title: 元素相关的建议信息
    tabindex: 使用tab键时的访问顺序。当设置为-1的时候，不会被选中。当为0时在所有大于0的之后

## <a name="src和href的区别">src和href的区别</a>[![bakTop](./img/backward.png)](#top)

href（Hypertext Reference）
>
    指向网络资源所在的位置, 用于在当前文档和引用资源间确定联系, 加载css。表达的是超链接。比如a元素、link元素。

src（source）
>
    是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。 
    当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

`总而言之，src用于替换当前元素；href用于在当前文档和引用资源之间建立联系。`

## <a name="浏览器内核、私有化前缀">浏览器内核、私有化前缀</a>[![bakTop](./img/backward.png)](#top)

#### 主要分为：
    渲染引擎(layout engineer或Rendering Engine)
    JS引擎
    
#### 渲染引擎：
>
    负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

#### JS引擎则：
>
    解析和执行javascript来实现网页的动态效果。
    
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

#### 常见浏览器及其内核、私有化前缀

| | Chrome | Firefox | IE | Safari | Opera |
:-:| :-:|:-:|:-:|:-:|:-:|
| 渲染引擎(内核) | Blink | Gecko | Trident | Webkit | Blink(原Presto) |
| JS 引擎 | V8 | SpiderMonkey | Nitro | Chakra | V8 |
| 私有化前缀 | -webkit- | -moz- | -ms- | -webkit- | -webkit- |


## <a name="web存储">cookies、sessionStorage 、和 localStorage 的区别</a>[![bakTop](./img/backward.png)](#top)

https://zhuanlan.zhihu.com/p/61704951

[cookie](/details/cookie.md)

### 区别
>

    cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。

    sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

* 存储大小：
>
  	cookie数据大小不能超过4k。
  	sessionStorage，localStorage  达到5M甚至更多

* 有期时间：
>
    localStorage   浏览器关闭后数据不丢失除非主动删除数据；多窗口数据共享
    sessionStorage 数据在当前浏览器窗口关闭后自动删除。同窗口数据共享
    cookie         设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

* 作用域:
>

    sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
    localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

* Storage方法
>

    setItem(key, value) 保存数据
    getItem(key) 读取数据
    removeItem(key) 删除键值为key的存储内容
    clear() 清空所有数据
    key(n) 以索引值来获取键值key的数据
    length 存储空间积累项的数目

    保存数据：sessionStorage.setItem('keyname','value') / sessionStroge.keyname='value';
    读取数据：sessionStorage.getItem('keyname') / sessionStroge.keyname /  sessionStroge.key(n)

* cookie方法
>

    let cookie = {
      set: function (key, val, time) { // 设置cookie方法
        let date = new Date() // 获取当前时间
        let expiresDays = time // 将date设置为n天以后的时间
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000) // 格式化为cookie识别的时间
        document.cookie = key + '=' + val + ';expires=' + date.toGMTString() + '; path=/' // 设置cookie
      },
      get: function (key) { // 获取cookie方法
        /* 获取cookie参数 */
        let getCookie = document.cookie.replace(/[ ]/g, '') // 获取cookie，并且将获得的cookie格式化，去掉空格字符
        let arrCookie = getCookie.split(';') // 将获得的cookie以'分号'为标识 将cookie保存到arrCookie的数组中
        let tips // 声明变量tips
        for (let i = 0; i < arrCookie.length; i++) { // 使用for循环查找cookie中的tips变量
          let arr = arrCookie[i].split('=') // 将单条cookie用'等号'为标识，将单条cookie保存为arr数组
          if (key === arr[0]) { // 匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
            tips = arr[1] // 将cookie的值赋给变量tips
            break // 终止for循环遍历
          }
        }
        return tips
      },
      delete: function (key) { // 删除cookie方法
        let date = new Date() // 获取当前时间
        date.setTime(date.getTime() - 10000) // 将date设置为过去的时间
        document.cookie = key + '=v; expires =' + date.toGMTString() // 设置cookie
      }
    }

### token
token是用户身份的验证方式，我们通常叫它：令牌。最简单的token组成:uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名，由token的前几位+盐以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接token请求服务器)。还可以把不变的参数也放进token，避免多次查库。

应用场景：
>
    A：当用户首次登录成功（注册也是一种可以适用的场景）之后, 服务器端就会生成一个 token 值，这个值，会在服务器保存token值(保存在数据库中)，再将这个token值返回给客户端.
    B：客户端拿到 token 值之后,进行本地保存。（SP存储是大家能够比较支持和易于理解操作的存储）
    C：当客户端再次发送网络请求(一般不是登录请求)的时候,就会将这个 token 值附带到参数中发送给服务器.
    D：服务器接收到客户端的请求之后,会取出token值与保存在本地(数据库)中的token值做对比

    对比一：如果两个 token 值相同， 说明用户登录成功过!当前用户处于登录状态!
    对比二：如果没有这个 token 值, 则说明没有登录成功.
    对比三：如果 token 值不同: 说明原来的登录信息已经失效,让用户重新登录.

## <a name="HTML中的字符实体">HTML中的字符实体</a>[![bakTop](./img/backward.png)](#top)
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

## <a name="HTML5的离线储存">HTML5的离线储存</a>[![bakTop](./img/backward.png)](#top)

[MDN - 介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)
>
    离线存储可以将站点的一些文件存储在本地，在没有网络的时候还是可以访问到以缓存的对应的站点页面，其中这些文件可以包括html，js，css，img等等文件，但其实即使在有网络的时候，浏览器也会优先使用已离线存储的文件，返回一个200（from cache）头。这跟HTTP的缓存使用策略是不同的。


## <a name="iframe缺点">iframe缺点</a>[![bakTop](./img/backward.png)](#top)

1. 会阻塞主页面的onload事件
2. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载.
3. 不利于搜索引擎的检索，不利于SEO优化

通过javascript动态给iframe添加src属性值，这样可以解决1,2两个问题。


## <a name="link标签属性">link标签属性</a>[![bakTop](./img/backward.png)](#top)
### <a name="网页标题引入图标">网页标题引入图标</a>[![bakTop](./img/backward.png)](#top)
>

    <link rel="shortcut icon" href="favicon.ico" type="images/x-icon" />

    <link rel="icon" href="favicon.gif" type="image/gif" />

### <a name="预加载页面资源prefetch、prefetch">预加载页面资源prefetch、prefetch</a>[![bakTop](./img/backward.png)](#top)

[参考](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651557145&idx=2&sn=275f6a2cd5698993ac37c30d1272b6d9&chksm=80255ad8b752d3ced93788a47c1c0e09b358f520e427095282805ae38568d391ffb841629fc5&scene=0&xtrack=1&key=f7996279e56ff0c926f68429b9d715f81f365434df8bef8ae0fdc0f07356e1153e13ec7efaadcdcee3ee2a269ca1e1d26d64b4456b49e9d4a9470ffdb5dff4e18fb06a01c2606003c0a2f1d538732c1f&ascene=14&uin=MTIxNDM5MTUzOQ%3D%3D&devicetype=Windows+7&version=62060841&lang=zh_CN&pass_ticket=6hbWVbVQi9b8nDPWnQLyNwIhfW%2Fxii%2FBAH6JGd5v7eUzIH49WIfoITbvxT9QEwrs)

## <a name="base标签">base标签</a>[![bakTop](./img/backward.png)](#top)
>
    <base href="www.aaa.com" target="_blank"/>

    <base> 标签为页面上的所有链接(img、a、script等)规定默认地址或默认目标。
    <base>设置的target属性 ，a链接也会继承


## <a name="meta标签属性">meta标签属性</a>[![bakTop](./img/backward.png)](#top)
[HTML meta标签总结与属性使用介绍](https://segmentfault.com/a/1190000004279791)

* 必要属性: content 


* 可选属性 
>
    http-equiv: content-type | expire | refresh | set-cookie  ;把content属性关联到HTTP头部  

    name: author(作者) | copyright(版权) | description(描述) | keywords(关键词) | robots | format-detection | renderer(双核浏览器渲染方式) ;把content属性关联到一个名称

* 声明文档使用的字符编码
>
    <meta charset='utf-8'>    

* 关键词：name="keywords"
>
    描述网页上所提供信息的描述性和代表性关键字及短语,逗号隔开。标记不应超过 874 个字符。
    <meta name="keywords" content="关键词1, 关键词2">


* 页面描述：name="description"
>
    每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。
    <meta name="description" content="页面描述的内容">

* 搜索引擎索引方式：name="robots"
>
    <meta name="robots" content="none,noindex,nofollow,all,index,follow">
    robots是一组使用逗号(,)分割的值，通常有如下几种取值：
        all, 文件将被检索，且页面上的链接可以被查询
        none, 文件将不被检索，且页面上的链接不可以被查询
        index, 文件将被检索
        noindex, 文件将不被检索
        follow, 页面上的链接可以被查询
        nofollow, 页面上的链接不可以被查询

* 页面重定向和刷新 http-equiv="refresh"
>
    <meta http-equiv="refresh" content="0; url="">

    content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。
* renderer 用于指定双核浏览器默认以何种方式渲染页面。
>
    <meta name="renderer" content="webkit"> //默认webkit内核
    <meta name="renderer" content="ie-comp"> //默认IE兼容模式
    <meta name="renderer" content="ie-stand"> //默认IE标准模式

* viewport
>
    什么是 Viewport?
    viewport 是用户网页的可视区域。
    viewport 翻译为中文可以叫做"视区"。
    手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分

>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">

    width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）

    height：高度（数值 / device-height）（范围从223 到10,000）

    initial-scale：初始的缩放比例 （范围从>0 到10）也即是当页面第一次 load 的时候缩放比例。

    minimum-scale：允许用户缩放到的最小比例

    maximum-scale：允许用户缩放到的最大比例

    user-scalable：用户是否可以手动缩 (no,yes)


* 其他

[参考](https://segmentfault.com/a/1190000002407912)

>
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <meta name="format-detection" content="telephone=no, email=no" />

    <!-- 浏览器内核控制 -->
    <meta name="renderer" content="webkit|ie-comp|ie-stand">

    <!-- 避免IE使用兼容模式 ,以最高版本IE来渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  

    <!-- IE中，无论是否用DTD声明文档标准，以IE7引擎来渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=7">    

    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">

    <!-- 设置页面不缓存 -->
    <meta http-equiv=”pragma” content=”no-cache”>
    <meta http-equiv=”cache-control” content=”no-cache”>
    <meta http-equiv=”expires” content=”0″>      

    <!-- 禁止浏览器从本地计算机的缓存中访问页面内容：如此访问者将无法脱机浏览 -->
    <meta http-equiv="Pragma" content="no-cache">

    <!-- 用百度打开网页可能会对其进行转码（比如贴广告），避免转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp">

    <!-- 是否启用 WebApp 全屏模式 / 删除苹果默认的工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <!-- 设置苹果工具栏颜色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">


    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">

    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">

    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">

    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">

    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">

    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">

    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">

    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">



## <a name="IE hack">IE hack</a>[![bakTop](./img/backward.png)](#top)
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

## <a name="aria与role">aria与role</a>[![bakTop](./img/backward.png)](#top)
>
    这些都是HTML5针对html tag增加的属性，一般是为不方便的人士提供的功能，比如屏幕阅读器。

    role属性作用是告诉Accessibility类应用（比如屏幕朗读程序，为盲人提供的访问网络的便利程序），这个元素所扮演的角色，主要是供残疾人使用。使用role可以增强文本的可读性和语义化。

    role的作用是描述一个非标准的tag的实际作用。比如用div做button，那么设置div 的 role="button"，辅助工具就可以认出这实际上是个button。
    role属性的应用主要是表单，比如输入密码，对于正常人可以用placaholder提示输入密码，但是对于残障人士是无效的，这个时候就需要role了


    aria的意思是Accessible Rich Internet Application，aria-*的作用就是描述这个tag在可视化的情境中的具体信息。比如：
    <div role="checkbox" aria-checked="checked"></div>
    辅助工具就会知道，这个div实际上是个checkbox的角色，为选中状态。

## <a name=""></a>
## <a name=""></a>

## <a name="CSS和JS的位置会影响页面效率，为什么">CSS和JS的位置会影响页面效率，为什么？</a>[![bakTop](./img/backward.png)](#top)
css在加载过程中不会影响到DOM树的生成，但是会影响到Render树的生成，进而影响到layout，所以一般来说，style的link标签需要尽量放在head里面，因为在解析DOM树的时候是自上而下的，而css样式又是通过异步加载的，这样的话，解析DOM树下的body节点和加载css样式能尽可能的并行，加快Render树的生成的速度。

js脚本应该放在底部，原因在于js线程与GUI渲染线程是互斥的关系，如果js放在首部，当下载执行js的时候，会影响渲染行程绘制页面，js的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。

## <a name="未使用自适应写的PC页面在手机上显示不全的问题">未使用自适应写的PC页面在手机上显示不全的问题</a>[![bakTop](./img/backward.png)](#top)

原因：
>
    由于html样式的宽度只有980px，而实际需要是1200px

解决方法
>
    html,body{min-width: 1200px;} //(具体多少按实际情况
    或
	  <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=0.3, maximum-scale=1.0, minimum-scale=0.3">


## <a name=""></a>[![bakTop](./img/backward.png)](#top)
## <a name=""></a>[![bakTop](./img/backward.png)](#top)
