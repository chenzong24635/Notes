# 目录

* <a href="#HTML">**HTML**</a>

* <a href="#XHTML、HTML区别">XHTML、HTML区别</a>
* <a href="#Doctype作用 标准模式、兼任模式区别">Doctype作用？标准模式、兼任模式区别</a>
* <a href="#HTML5 为什么只需要写">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>
* <a href="#渐进增强与优雅降级">渐进增强与优雅降级-----开发方式，设计理念</a>
* <a href="#src和href的区别">src和href的区别</a>
* <a href="#浏览器内核、私有化前缀">浏览器内核、私有化前缀</a>
* <a href="#web存储">cookies、sessionStorage 、和 localStorage 的区别</a>
* <a href="#HTML5的离线储存">HTML5的离线储存</a>
* <a href="#iframe缺点">iframe缺点</a>
* <a href="#响应式设计-viewport">响应式设计-viewport</a>
* <a href="#meta">meta</a>
* <a href="#IE hack">IE hack</a>
* <a href="#aria与role">aria与role</a>
* <a href="#CSS和JS的位置会影响页面效率，为什么">CSS和JS的位置会影响页面效率，为什么？</a>

# <a name="HTML">**HTML**</a>

网页标题引入图标

    <link rel="shortcut icon" href="favicon.ico" type="images/x-icon" />

    <link rel="icon" href="favicon.gif" type="image/gif" />

## <a name="XHTML、HTML区别">XHTML、HTML区别</a>
* HTML是一种基于标准通用标记语言（SGML）的应用，是一种非常灵活的置标语言，
  而XHTML则基于可扩展标记语言（XML），XML是SGML的一个子集。
* XHTML 与 HTML4 几乎是相同的
* XHTML是更为严格纯净的HTML版
* XHTML是作为一种xml应用被重新定义的HTML
* XHTML文档必须拥有根元素、元素必须被关闭、元素必须被正确地嵌套、标签应该使用小写

## <a name="Doctype作用 标准模式、混杂模式区别">Doctype作用？标准模式、混杂模式区别</a>
* documnet type(文档类型的简写),位于HTML文档的第一行，告知浏览器用什么规范解析
DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
* 在标准模式中，浏览器根据规范呈现页面；在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。
  >判断方法：document.compatMode 
    1. 标准模式：CSS1Compat
    2. 混杂模式：BackCompat	

## <a name="HTML5 为什么只需要写">HTML5 为什么只需要写 \<!DOCTYPE HTML\></a>
* HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）
* HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

## <a name="渐进增强与优雅降级">渐进增强与优雅降级-----开发方式，设计理念</a>

* 渐进增强：针对低版本浏览器构建页面，保证核心功能。再针对高级浏览器进行改进和追加功能以达到更好的用户体验
* 优雅降级：一开始就构建完整功能，在针对底版本浏览器兼容

    区别：
    优雅降级是从复杂的现状开始，并试图减少用户体验的供给，
    渐进增强则从基础的的版本开始，并不断扩充，以适应未来环境的需要。
    优雅降级意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## <a name="src和href的区别">src和href的区别</a>
* href指向网络资源所在的位置, 用于在当前文档和引用资源间确定联系, 加载css。表达的是超链接。比如a元素、link元素。

* src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

总而言之，我们在可替换的元素上使用src，然而把href用于在涉及的文档和外部资源之间建立一个引用关系。

## <a name="浏览器内核、私有化前缀">浏览器内核、私有化前缀</a>
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

#### 常见浏览器及其内核

| | Chrome | Firefox | IE | Safari | Opera |
:-:| :-:|:-:|:-:|:-:|:-:|
| 渲染引擎(内核) | Blink | Gecko | Trident | Webkit | Blink(原Presto) |
| JS 引擎 | V8 | SpiderMonkey | Nitro | Chakra | V8 |


#### 浏览器私有化前缀
    -webkit-:chrome safari 
    -ms-：IE
    -moz-:firefox
    -o-：opera

## <a name="web存储">cookies、sessionStorage 、和 localStorage 的区别</a>
### cookie
cookie是存储在浏览器端，并且随浏览器的请求一起发送到服务器端的，它有一定的过期时间，到了过期时间自动会消失。sessionStorage和localeStorage也是存储在客户端的，同属于web Storage，比cookie的存储大小要大有8m，cookie只有4kb，localeStorage是持久化的存储在客户端，如果用户不手动清除的话，不会自动消失，会一直存在，sessionStorage也是存储在客户端，但是它的存活时间是在一个回话期间，只要浏览器的回话关闭了就会自动消失。

客户端可以设置cookie 的下列选项：expires、domain、path、secure（有条件：只有在https协议的网页中，客户端设置secure类型的 cookie 才能成功），但无法设置HttpOnly选项。
读取：document.cookie

### 区别
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。 cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

* 存储大小：
  	cookie数据大小不能超过4k。
  	sessionStorage，localStorage  达到5M甚至更多
* 有期时间：
    localStorage   浏览器关闭后数据不丢失除非主动删除数据；多窗口数据共享
    sessionStorage 数据在当前浏览器窗口关闭后自动删除。同窗口数据共享
    cookie         设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
* 作用域:
    sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
    localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

* Storage方法
setItem(key, value) 保存数据
getItem(key) 读取数据
removeItem(key) 删除键值为key的存储内容
clear() 清空所有数据
key(n) 以索引值来获取键值key的数据
length 存储空间积累项的数目

保存数据：sessionStorage.setItem('key','value');/sessionStroge.key='value';
读取数据：sessionStorage.getItem('key'); /sessionStroge.key(n)

* cookie方法
>
    let cookie = {
      set: function (key, val, time) { // 设置cookie方法
        let date = new Date() // 获取当前时间
        let expiresDays = time // 将date设置为n天以后的时间
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000) // 格式化为cookie识别的时间
        // document.cookie = key + '=' + val + ';expires=' + date.toGMTString();  //设置cookie
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
      remove: function (key) { // 删除cookie方法
        let date = new Date() // 获取当前时间
        date.setTime(date.getTime() - 10000) // 将date设置为过去的时间
        document.cookie = key + '=v; expires =' + date.toGMTString() // 设置cookie
      }
    }

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


## <a name="HTML5的离线储存">HTML5的离线储存</a>
[MDN - 介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)
>
    离线存储可以将站点的一些文件存储在本地，在没有网络的时候还是可以访问到以缓存的对应的站点页面，其中这些文件可以包括html，js，css，img等等文件，但其实即使在有网络的时候，浏览器也会优先使用已离线存储的文件，返回一个200（from cache）头。这跟HTTP的缓存使用策略是不同的。

    

## <a name="iframe缺点">iframe缺点</a>
1. 会阻塞主页面的onload事件
2. 不利于搜索引擎的检索，不利于SEO优化
3. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载.

通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。

## <a name="响应式设计-viewport">响应式设计-viewport</a>
>
    什么是 Viewport?
    viewport 是用户网页的可视区域。
    viewport 翻译为中文可以叫做"视区"。
    手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分

    viewport meta 标签属性：
    width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
    height：和 width 相对应，指定高度。
    initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
    maximum-scale：允许用户缩放到的最大比例。
    minimum-scale：允许用户缩放到的最小比例。
    user-scalable：用户是否可以手动缩放

## <a name="meta">meta</a>
###
    必要属性
    * content 
    

    可选属性
    * http-equiv:content-type / expire / refresh / set-cookie  把content属性关联到HTTP头部
    * name:author / description / keywords / generator / others  把content属性关联到一个名称

#### 声明文档使用的字符编码
    <meta charset='utf-8'>    

#### 关键词

    描述网页上所提供信息的描述性和代表性关键字及短语。标记不应超过 874 个字符。
    <meta name="keywords" content="关键词1, 关键词2">

#### 页面描述

    每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。
    <meta name="description" content="页面描述的内容">

#### 搜索引擎索引方式

    <meta name="robots" content="none,noindex,nofollow,all,index,follow">
    robots是一组使用逗号(,)分割的值，通常有如下几种取值：
    all, 文件将被检索，且页面上的链接可以被查询
    none, 文件将不被检索，且页面上的链接不可以被查询
    index, 文件将被检索
    noindex, 文件将不被检索
    follow, 页面上的链接可以被查询
    nofollow, 页面上的链接不可以被查询

#### 页面重定向和刷新

    content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。
    <meta http-equiv="refresh" content="0; url="">

### viewport
#### 基本
    <meta name="viewport" content="width=device-width, inital-scale=1.0, maximum-scale=1.0, user-scable=no">

    1.width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）

    2.height：高度（数值 / device-height）（范围从223 到10,000）

    3.initial-scale：初始的缩放比例 （范围从>0 到10）

    4.minimum-scale：允许用户缩放到的最小比例

    5.maximum-scale：允许用户缩放到的最大比例

    6.user-scalable：用户是否可以手动缩 (no,yes)

#### 忽略数字自动识别为电话号码

    <meta content="telephone=no" name="format-detection">

#### 忽略邮箱识别

    <meta content="email=no" name="format-detection">

#### 其他

    <!-- 浏览器内核控制 -->
    <meta name="renderer" content="webkit|ie-comp|ie-stand">

    <!-- 禁止浏览器从本地计算机的缓存中访问页面内容：这样设定，访问者将无法脱机浏览 -->
    <meta http-equiv="Pragma" content="no-cache">

    <!-- 用百度打开网页可能会对其进行转码（比如贴广告），避免转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp">

    <!-- 是否启用 WebApp 全屏模式 / 删除苹果默认的工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <!-- 设置苹果工具栏颜色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <meta name="format-detection" content="telphone=no, email=no" />

    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">

    <!-- 避免IE使用兼容模式 ,以最高版本IE来渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

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

    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">

    <!-- 设置页面不缓存 -->
    <meta http-equiv=”pragma” content=”no-cache”>
    <meta http-equiv=”cache-control” content=”no-cache”>
    <meta http-equiv=”expires” content=”0″>

#### IE

    IE中，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。
    <meta http-equiv="X-UA-Compatible" content="IE=7">

    IE中，IE8/9都会以IE8引擎来渲染页面。
    <meta http-equiv="X-UA-Compatible" content="IE=8">

    IE中，IE8/9及以后的版本都会以最高版本IE来渲染页面。
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta http-equiv="X-UA-Compatible" content="IE=7,IE=9">
    <meta http-equiv="X-UA-Compatible" content="IE=7,9">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    IE中最新的引擎渲染网页，chrome=1则可以激活Chrome Frame.


## <a name="IE hack">IE hack</a>
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

## <a name="aria与role">aria与role</a>
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



## <a name="CSS和JS的位置会影响页面效率，为什么">CSS和JS的位置会影响页面效率，为什么？</a>
css在加载过程中不会影响到DOM树的生成，但是会影响到Render树的生成，进而影响到layout，所以一般来说，style的link标签需要尽量放在head里面，因为在解析DOM树的时候是自上而下的，而css样式又是通过异步加载的，这样的话，解析DOM树下的body节点和加载css样式能尽可能的并行，加快Render树的生成的速度。

js脚本应该放在底部，原因在于js线程与GUI渲染线程是互斥的关系，如果js放在首部，当下载执行js的时候，会影响渲染行程绘制页面，js的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。
