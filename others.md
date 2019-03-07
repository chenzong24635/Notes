    function Foo() {
        getName = function () {
            alert(1);
        }
        return this;
    }
    Foo.getName = function () {
        alert(2)
    }
    Foo.prototype.getName = function () {
        alert(3)
    }
    var getName = function () {
        alert(4)
    }
    function getName() {
        alert(5)
    }
    Foo.getName();
    getName();
    Foo().getName();
    getName();
    new Foo.getName();
    new Foo().getName();
    new new Foo().getName()


# 获取浏览器屏幕高度

    IE中：
    document.body.clientWidth ==> BODY对象宽度
    document.body.clientHeight ==> BODY对象高度
    document.documentElement.clientWidth ==> 可见区域宽度
    document.documentElement.clientHeight ==> 可见区域高度
    FireFox中：
    document.body.clientWidth ==> BODY对象宽度
    document.body.clientHeight ==> BODY对象高度
    document.documentElement.clientWidth ==> 可见区域宽度
    document.documentElement.clientHeight ==> 可见区域高度
    Opera中：
    document.body.clientWidth ==> 可见区域宽度
    document.body.clientHeight ==> 可见区域高度
    document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽）
    document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高）

# 获取当前页面 url 网址信息

## window.location.href(设置或获取整个 URL 为字符串)

    var test = window.location.href;
    alert(test);
    返回：http://i.cnblogs.com/EditPosts.aspx?opt=1

## window.location.protocol(设置或获取 URL 的协议部分)

    var test = window.location.protocol;
    alert(test);
    返回：http:

## window.location.host(设置或获取 URL 的主机部分)

    var test = window.location.host;
    alert(test);
    返回：i.cnblogs.com

## window.location.port(设置或获取与 URL 关联的端口号码)

    var test = window.location.port;
    alert(test);
    返回：空字符(如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符)

## window.location.pathname(设置或获取与 URL 的路径部分（就是文件地址）)

    var test = window.location.pathname;
    alert(test);
    返回：/EditPosts.aspx

## window.location.search(设置或获取 href 属性中跟在问号后面的部分)

    var test = window.location.search;
    alert(test);
    返回：?opt=1

## window.location.hash(设置或获取 href 属性中在井号“#”后面的分段)

    var test = window.location.hash;
    alert(test);
    返回：空字符(因为url中没有)

## js 获取 url 中的参数值

### 一、正则法

    function getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    }
    // 这样调用：
    alert(GetQueryString("参数名1"));
    alert(GetQueryString("参数名2"));
    alert(GetQueryString("参数名3"));

### 二、split 拆分法

    function GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    }
    var Request = new Object();
    Request = GetRequest();<br>// var id=Request["id"];
    // var 参数1,参数2,参数3,参数N;
    // 参数1 = Request['参数1'];
    // 参数2 = Request['参数2'];
    // 参数3 = Request['参数3'];
    // 参数N = Request['参数N'];

### 三、指定取

    比如说一个url：http://i.cnblogs.com/?j=js,我们想得到参数j的值，可以通过以下函数调用。

    function GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
      var context = "";
      if (r != null)
          context = r[2];
      reg = null;
      r = null;
      return context == null || context == "" || context == "undefined" ? "" : context;
    }
    alert(GetQueryString("j"));

### 四、单个参数的获取方法

    function GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      if (url.indexOf("?") != -1) {  //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("=");  //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        alert(strs[1]);     //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
      }
    }

# meta

    必要属性
    * content

    可选属性
    * http-equiv:content-type / expire / refresh / set-cookie  把content属性关联到HTTP头部
    * name:author / description / keywords / generator / others  把content属性关联到一个名称

# 关键词

    描述网页上所提供信息的描述性和代表性关键字及短语。标记不应超过 874 个字符。
    <meta name="keywords" content="关键词1, 关键词2">

# 页面描述

    每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。
    <meta name="description" content="页面描述的内容">

# 搜索引擎索引方式

    <meta name="robots" content="none,noindex,nofollow,all,index,follow">
    robots是一组使用逗号(,)分割的值，通常有如下几种取值：
    all, 文件将被检索，且页面上的链接可以被查询
    none, 文件将不被检索，且页面上的链接不可以被查询
    index, 文件将被检索
    noindex, 文件将不被检索
    follow, 页面上的链接可以被查询
    nofollow, 页面上的链接不可以被查询

# 页面重定向和刷新

    content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。
    <meta http-equiv="refresh" content="0;url=">

# viewport

    <meta name="viewport" content="width=device-width, inital-scale=1.0, maximum-scale=1.0, user-scable=no">

    1.width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）

    2.height：高度（数值 / device-height）（范围从223 到10,000）

    3.initial-scale：初始的缩放比例 （范围从>0 到10）

    4.minimum-scale：允许用户缩放到的最小比例

    5.maximum-scale：允许用户缩放到的最大比例

    6.user-scalable：用户是否可以手动缩 (no,yes)

# 忽略数字自动识别为电话号码

    <meta content="telephone=no" name="format-detection">

# 忽略邮箱识别

    <meta content="email=no" name="format-detection">

# 其他

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

    <!-- 避免IE使用兼容模式 -->
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

# IE

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
