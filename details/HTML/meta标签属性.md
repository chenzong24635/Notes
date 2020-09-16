# meta标签属性
[HTML meta标签总结与属性使用介绍](https://segmentfault.com/a/1190000004279791)

[meta](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)--MDN

meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。

`必要属性`: content 给出了与 http-equiv 或 name 属性相关的值


`可选属性`

* charset 声明文档使用的字符编码
  >\<meta charset='utf-8'>

* http-equiv: 把content属性关联到HTTP头部  
  * content-type  设定网页字符集
  
  * expire (网页到期时间)
    >\<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />

  * refresh (页面重定向和刷新 )
    >\<meta http-equiv="refresh" content="0; url="xxxx">  
      content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）

  * X-UA-Compatible
    >\<meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
  * set-cookie
    ><meta http-equiv="Set-Cookie" content="User=xxx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> 

* name: 把content属性关联到一个名称
  * author(作者信息) 
    >\<meta name="author" content="xxx"> 

  * copyright(标注版权信息) 
    >\<meta name="copyright" content="xxx"> 

  * description(网站内容的描述) 
    >\<meta name="description" content="页面描述的内容">
     每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。

  * keywords(关键词，告诉搜索引擎，网页的关键字) 
    >\<meta name="keywords" content="关键词1, 关键词2">
     描述网页上所提供信息的描述性和代表性关键字及短语,逗号隔开。标记不应超过 874 个字符。
  
  * generator(标明网页是什么软件做的)
    >\<meta name="generator" content="FrontPage 4.0">

  * robots(搜索引擎索引方式)
    > \<meta name="robots" content="none,noindex,nofollow,all,index,follow">  
      robots是一组使用逗号(,)分割的值，通常有如下几种取值：  
       * all, 文件将被检索，且页面上的链接可以被查询  
       * none, 文件将不被检索，且页面上的链接不可以被查询  
       * index, 文件将被检索  
       * noindex, 文件将不被检索  
       * follow, 页面上的链接可以被查询  
       * nofollow, 页面上的链接不可以被查询  

  * format-detection 
  * renderer(指定双核浏览器默认以何种方式渲染页面)
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

      * width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）  
      * height：高度（数值 / device-height）（范围从223 到10,000）  
      * initial-scale：初始的缩放比例 （范围从>0 到10）也即是当页面第一次 load 的时候缩放比例。  
      * minimum-scale：允许用户缩放到的最小比例  
      * maximum-scale：允许用户缩放到的最大比例  
      * user-scalable：用户是否可以手动缩 (no,yes)  
    
    

### 其他

[参考](https://segmentfault.com/a/1190000002407912)

meta对于移动端的一些特殊属性
```html
<meta name="screen-orientation" content="portrait"> <!-- uc强制竖屏 -->
<meta name="full-screen" content="yes">             <!-- uc全屏显示 -->
<meta name="browsermode" content="application">     <!-- UC应用模式，使用了application这种应用模式后，页面讲默认全屏，禁止长按菜单，禁止收拾，标准排版，以及强制图片显示。 -->
<meta name="x5-orientation" content="portrait">     <!-- QQ强制竖屏 -->
<meta name="x5-fullscreen" content="true">          <!-- QQ强制全屏 -->
<meta name="x5-page-mode" content="app">            <!-- QQ应用模式 -->


<!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<meta name="format-detection" content="telephone=no, email=no" />
```
更多
```html
<!-- 设置页面不缓存 -->
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">


<!-- 浏览器内核控制 -->
<meta name="renderer" content="webkit|ie-comp|ie-stand">

<!-- 避免IE使用兼容模式 ,以最高版本IE来渲染页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  

<!-- IE中，无论是否用DTD声明文档标准，以IE7引擎来渲染页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=7">    

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">



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


```