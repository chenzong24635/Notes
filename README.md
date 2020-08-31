<a id="top"></a>

### 

- [vscode 快捷键 for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

>
    折叠所有区域代码:  Ctrl + K Ctrl + 0

    展开所有折叠区域代码：Ctrl + K  Ctrl + J 
    
    删除空行：ctrl+h键进行正则匹配：^\s*(?=\r?$)\n

    格式化代码： Shift + Alt + F

    多行光标：Shift + Alt + 鼠标左键

    跳到某行： Ctrl+ G 然后在弹出的框中输入行数就可以了

    转到文件： Ctrl + P

    显示快捷键： Ctrl + K Ctrl + S

    查看定义： Alt + F12

- vsCode 添加浏览器调试和 js 调试的方法

安装插件 Debugger for Chrome

直接按 F5,在 launch.json 文件中的配置如下

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "谷歌浏览器", //运行html文件，用谷歌浏览器打开
      "type": "chrome",
      "request": "launch",
      "url": "${file}",
      "sourceMaps": true,
      "webRoot": "${workspaceRoot}"
    },
    {
      "name": "nodeLauch", //单独调试js，即可以直接运行js
      "type": "node",
      "request": "launch",
      "program": "${file}", //这个配置成你要调试的文件、${file}当前打开的文件
      "stopOnEntry": false,
      "args": [],
      "cwd": "${workspaceRoot}",
      "runtimeExecutable": null,
      "runtimeArgs": ["--nolazy"],
      "env": {
        "NODE_ENV": "development"
      },
      "console": "internalConsole",
      "preLaunchTask": "",
      "sourceMaps": false,
      "outDir": null
    }
  ]
}
```

### 

<details open>
  <summary>markdown 语法</summary>

[Markdown 语法说明](https://www.appinn.com/markdown/)

<!-- * css样式：可在markdown里写css样式,一般写在头部
>
  <style>
    a[href]{
      position:relative;
      padding-right:30px;
    }
    a[href="#TOP"]:after{
      content: '';
      position:absolute;
      top: 0;
      bottom:0;
      right: 0;
      background:url('/img/backward.png') no-repeat 100% 100% / cover;
      width:30px;
      height:30px;
    }
  </style> -->

- 分级标题

  >

      # 一级标题
      ## 二级标题
      ### 三级标题
      #### 四级标题
      ##### 五级标题
      ###### 六级标题  <!--最多6级标题-->

- 对齐方式

  >

      <center>行中心对齐</center>
      <p align="left">行左对齐</p>
      <p align="right">行右对齐</p>

- 跳转

  >

      [点击跳转](#5)  //限数字 1,1.5之类
      <a id="5">跳转到这</a>

      里面也能放图片
      [![img](/img/backward.png)](#backward)
      [<img src="/img/backward.png" width="20px" />](#backward)

  >

      <a href="#点击跳转">点击跳转</a>
      <a name="点击跳转">跳转到这</a>

- select选择
  >
      - [x] 步骤一
      - [x] 步骤二
        - [ ] 步骤2.2
        - [ ] 步骤2.3
      - [ ] 步骤三


- 代码折叠、展开

  >

      <details open>
        <summary>伸/缩</summary>
        open：展开
        测试内容,
        IE不支持
      </details>

- 文章中添加代码

1.  使用反引号 :
    >
        `let a = 0`
2.  使用制表符或者至少 4 个空格进行缩进的行:

    >

        >
            let a = 0

3.  推荐
    >
        ```js
        let a = 0
        ```

        //```后面添加js是为了增加代码可读性

- 生成多行相同代码
  div.item\*3>{\$}

  >

      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>

- 换行
  两长段落之间没有空行 ，如何换行

  >

      段落末尾空两格 （space + space）

- 表格
  >
      | Tables | Are  | Cool |
      |:--|:---------:|----:|
      | 靠左对齐 | 居中对齐  | 靠右对齐 |
      | *斜体* | **加粗**     | `渲染效果`
      | 书写时原始文字可以不用对整齐  |   |   |

>

    冒号: 在第二行中不同的位置表示对齐方式，在无冒号：的情况下默认靠左对齐
    标题元件(表头)至少需要3个---来分隔
    最外面的竖线|可以省略，书写的时候也可以不必需让原始的文字对得很整齐

- 分割线

  >

      * * *
      ***
      *****
      - - -
      -----------

- 强调——粗体和斜体

  >

      *斜体*
      **粗体**
      ~~删除线~~

- 链接

  >

      1. aa<a.com>aa

      2. [链接文字](链接地址)

- 添加复选框
```
- [x] 1
- [x] 2
  - [ ] 2.1
  - [ ] 2.2
- [ ] 3
```
* [x] 1
* [x] 2
  * [ ] 2.1
  * [ ] 2.2
* [ ] 3

- 多次引用同一链接

>

    // []里的内容要一致
    [链接文字][]

    //这个不会显示
    [链接文字]: http://www.aaa.com/

>

    [github][1]
    [1]:https://github.com

- 特殊字符

| 特殊字符 | 描述           | 字符代码  |
| :------- | :------------- | :-------- |
|          | 空格符         | \&nbsp;   |
| <        | 小于号         | \&lt;     |
| >        | 大于号         | \&gt;     |
| &        | 和号           | \&amp;    |
| ￥       | 人民币         | \&yen;    |
| ©        | 版权           | \&copy;   |
| ®        | 注册商标       | \&reg;    |
| °C       | 摄氏度         | \&deg;C   |
| ±        | 正负号         | \&plusmn; |
| ×        | 乘号           | \&times;  |
| ÷        | 除号           | \&divide; |
| ²        | 平方（上标 ²） | \&sup2;   |
| ³        | 立方（上标 ³） | \&sup3;   |

</details>

### 

<details >
  <summary>
  常用网站：论坛、社区、博客、网站、手册
  </summary>

[Github](https://github.com/chenzong24635)

[前端工具集](https://github.com/nieweidong/fetool)

[前端导航网](http://jsdig.com/)

[CSDN](https://www.csdn.net/)

[开源中国](https://www.oschina.net/)

[掘金](https://juejin.im/timeline)

[SegmentFault](https://segmentfault.com/)

[stackoverflow](https://stackoverflow.com/)

[w3cplus-大漠](https://www.w3cplus.com/)

[张鑫旭](https://www.zhangxinxu.com/)

[技术胖](https://jspang.com/)

[廖雪峰](https://www.liaoxuefeng.com/)

`手册、API:`  
 [DevDocs API](https://devdocs.io/)

[Can I Use-兼容性查询](https://caniuse.com/#home)

[MDN](https://developer.mozilla.org/zh-CN/docs/Web)

[W3CSchool](https://www.w3cschool.cn/)

[手册网](http://www.shouce.ren/)

[印记中文](https://www.docschina.org/)

`插件：`  
 [axios](https://www.kancloud.cn/yunye/axios/234845)  
 [Swiper-轮播图插件](https://www.swiper.com.cn/api/index.html)
[echart](https://www.echartsjs.com/examples/zh/#chart-type-line)

`图标、图片：`  
 [icomoon](https://icomoon.io/)

[icon-阿里巴巴](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

[font-awesome](https://www.thinkcmf.com/font/search.html)

[Squoosh 图片压缩](https://squoosh.app/)

</details>

---

# 

**前端页面由哪三层构成：结构层、表示层、行为层。**

## [HTML](HTML.md)

## [CSS](CSS.md)

## [JS](JS.md)

- [Undefined、Null](/details/Undefined、Null.md)
- [Boolean](/details/Boolean.md)
- [Number](/details/Number.md)
- [String](/details/String.md)
- [Symbol](/details/Symbol.md)
- [Object](/details/Object.md)
  - [Array](/details/Array.md)
  - [Math](/details/Math.md)
  - [Date](/details/Date.md)
  - [Function](/details/Function.md)
  - [Set、Map](/details/Set、Map.md)
- --
- [JS 遍历方法](/details/Iterate.md)
- [JS 兼容](/details/compatible.md)
- [JS 排序？？](/details/sort.md)
- [JQ](/details/JQ.md)

## [ES](ES.md)

## [TypeScript](TS.md)

## [正则](/details/JS数据类型/RegExp.md)

## [AJAX](/details/Ajax.md)

## [跨域](/details/crossOrigin.md)

## [HTTP](HTTP.md)

## [Vue](Vue.md)

## [Vuex](/details/vuex.md)

## [小程序](Applet.md)

## [WebSocket](/details/WebSocket.md)

## [Git](Git.md)

## [Node](Node.md)

## [console.log](/details/consolelog.md)

## [其他-待整理](others.md)

## 常用

<details open>
  <summary>
  <a href="#常用">目录</a>
  </summary>

- <a href="#手机号验证">手机号验证</a>
- <a href="#邮箱验证">邮箱验证</a>
- <a href="#密码验证">密码验证</a>

- <a href="#requestAnimationFrame">requestAnimationFrame</a>
- <a href="#判断网络状态">判断网络状态</a>
- <a href="#延迟函数delay">延迟函数 delay</a>

- <a href="#保留小数点后两位-不足则补零">保留小数点后两位-不足则补零</a>
- <a href="#浮点型+-*/">浮点型+-\*/</a>
- <a href="#时间戳、日期 的转换">时间戳、日期 的转换</a>
- <a href="#浏览器判断">浏览器、手机类型判断 navigator.userAgent</a>
- <a href="#页面url属性">页面 url 属性</a>
- <a href="#解析url为对象">解析 url 为对象</a>
- <a href="#FileReader">FileReader，图片转 base64、blob，canvas 图片压缩</a>
- <a href="#下载图片">下载图片</a>
- <a href="#打印">打印</a>
- <a href="#base64数据导出文件">base64 数据导出文件，文件下载</a>
- <a href="#实现模糊搜索结果的关键词高亮显示">实现模糊搜索结果的关键词高亮显示</a>
- <a href="#判断字符串长度">判断字符串长度</a>
- <a href="#0.1+0.2">0.1+0.2!=0.3 原因，解决</a>
- <a href="#移动端点透问题">移动端点透问题(click 300ms 延迟)</a>
- <a href="#随机字符串">随机字符串</a>
- <a href="#随机HEX色值">随机 HEX 色值</a>
- <a href="#随机6个数字">随机 6 个数字</a>
- <a href="#范围内随机数，包括两个数在内">范围内随机数</a>
- <a href="#数字千分位">数字千分位</a>
- <a href="#统计字符串中同一字符出现次数">统计字符串中同一字符出现次数</a>
- <a href="#查找字符串中出现最多的字符和个数">查找字符串中出现最多的字符和个数</a>
- <a href="#类数组转化为数组">类数组转化为数组</a>
- <a href="#判断是否回文、实现回文">判断是否回文、实现回文</a>
- <a href="#两位大整数相加">两位大整数相加</a>
- <a href="#实现f(a)(b)与f(a,b)一样的效果">实现 f(a)(b)与 f(a,b)一样的效果</a>
- <a href="#无限累加的函数 add">实现一个无限累加的函数 add(1)(2)(3)...</a>
- <a href="#数组无序排列">数组无序排列</a>
- <a href="#数组扁平化">数组扁平化:n 维数组展开成一维数组</a>
- <a href="#数组去重">数组去重</a>
- <a href="#数组扁平化+去重">数组扁平化+去重</a>
- <a href="#数组排序">数组排序</a>

- <a href="#unicode转中文">unicode 转中文</a>
- <a href="#将字符串复制到剪贴板">将字符串复制到剪贴板</a>
- <a href="#取消选择，防止复制，禁止剪切、粘贴">取消选择，防止复制，禁止剪切、粘贴</a>
- <a href="#网页是否可编辑">网页是否可编辑</a>
- <a href="#逗号操作符">逗号操作符</a>

- <a href="#map(parseInt) 原理解析">['1','2','3'].map(parseInt) 原理解析</a>
- <a href="#Array.apply(null,Array(3))与Array(3)区别">Array.apply(null,Array(3))与 Array(3)区别</a>

- <a href="#页面加载进度条">页面加载进度条</a>
- <a href="#vue实现数字动态翻牌的效果">vue 实现数字动态翻牌的效果</a>

<a href="#"></a>

- <a href="#面试题">**面试题**</a>

</details>

# <a name="常用">**常用**</a>

## <a name="如何把http的请求换成https">如何把http的请求换成https</a>

在html页面中添加meta
```html
<meta http-equiv ="Content-Security-Policy" content="upgrade-insecure-requests">
```

在nginx配置中进行header的添加：
```conf
server {
  location / {
    #添加响应头
    add_header Content-Security-Policy upgrade-insecure-requests;
  }
}
```

## <a name="requestAnimationFrame">requestAnimationFrame</a>

[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

window.requestAnimationFrame(callback);

> 下一次重绘之前更新动画帧所调用的函数(即上回调函数)。该回调函数会被传入 DOMHighResTimeStamp 参数，该参数与 performance.now()的返回值相同，它表示 requestAnimationFrame() 开始去执行回调函数的时刻。

若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 window.requestAnimationFrame()

优势：由系统决定回调函数的执行时机。60Hz 的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。


与setTimeout动画对比的话，有以下几点优势

当页面隐藏或者最小化时，setTimeout仍然在后台执行动画，此时页面不可见或者是不可用状态，动画刷新没有意义，而言浪费CPU。rAF不一样，当页面处理未激活的状态时，该页面的屏幕绘制任务也会被系统暂停，因此跟着系统步伐走的rAF也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了 CPU 开销。


```js
const scrollToTop = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  if (top > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, top - top / 8);
  }
};
// 调用
scrollToTop()
```


## <a name="检查指定的元素在视口中是否可见">检查指定的元素在视口中是否可见</a>

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// 事例
elementIsVisibleInViewport(el); // 需要左右可见
elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见
```

## <a name="判断网络状态">判断网络状态</a>

- [navigator.onLine](https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorOnLine/onLine)返回 Boolean 值

非常简单，但是并不准确：
navigator.onLine 只会在机器未连接到局域网或路由器时返回 false，其他情况下均返回 true。
也就是说，机器连接上路由器后，即使这个路由器没联通网络，navigator.onLine 仍然返回 true。

- [navigator.connection](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/connection)

返回值：

```js
NetworkInformation {
  onchange: null, // 有值代表网络状态变更
  effectiveType: "4g", //网络类型 2g 3g 4g
  rtt: 50, //估算的往返时间
  downlink: 10, //宽带有效值  等于0时  表示无网络
  saveData: false // 打开/请求数据保护模式
}
```

- 事件监听 online 和 offline

```js
function jugeNet(){
  let el = document.body;
  let onlineFn = function () {
    console.log("online");
  }
  let offlineFn = function () {
    console.log("offline");
  }

  if (el.addEventListener) {
    window.addEventListener("online", onlineFn, true);
    window.addEventListener("offline", offlineFn, true);
  }
  else if (el.attachEvent) {
    window.attachEvent("ononline",onlineFn);
    window.attachEvent("onoffline", offlineFn);
  }
  else {
    window.ononline = onlineFn
    window.onoffline = offlineFn
  }
}
```

## <a name="延迟函数delay">延迟函数 delay</a>

因为 async await 本身就是 promise+generator 的语法糖。所以 await 后面的代码是 microtask。

```js
const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const getData = (status) =>
  new Promise((resolve, reject) => {
    status ? resolve("done") : reject("fail");
  });
const getRes = async (data) => {
  try {
    const res = await getData(data);
    const timestamp = new Date().getTime();
    await delay(1000);
    console.log(res, new Date().getTime() - timestamp);
  } catch (error) {
    console.log(error);
  }
};
getRes(true); // 隔了1秒
// Promise {<pending>}
// done 1000
```

## <a name="保留小数点后两位-不足则补零">保留小数点后两位-不足则补零</a>

```
function returnFloat(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split('.');
  if (xsd.length == 1) {
    value = value.toString() + '.00';
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + '0';
    }
    return value;
  }
}
```

## <a name="浮点型+-*/">浮点型+-\*/</a>

- 加

```
function accAdd(arg1, arg2) {
  let r1, r2, m;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
```

- 减

```
function accDec(arg1, arg2) {
  let r1, r2, m, n;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
```

- 乘

```
function accMul(arg1, arg2) {
  let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch (e) { }
  try { m += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
```

- 除

```
function accDiv(arg1, arg2) {
  let t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  r1 = Number(arg1.toString().replace(".", ""))
  r2 = Number(arg2.toString().replace(".", ""))
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
```

## <a name="时间戳、日期 的转换">时间戳、日期 的转换</a>

[Date](/details/Date.md)

## <a name="浏览器判断">浏览器、手机类型判断 navigator.userAgent</a>

使用 navigator.userAgent 属性 PC 端、手机端、iPad 判断 ，ie、火狐、其他浏览器判断， 微信浏览器判断， Android、IOS 判断

- navigator 为 Window 对象的一个属性，指向了一个包含浏览器相关信息的对象。
  常用到的属性：
- navigator.appVersion 浏览器的平台和版本信息
- navigator.appName 浏览器的名称
- navigator.language 浏览器使用的语言
- navigator.platform 浏览器操作系统平台
- navigator.userAgent 浏览器的 user-agent 信息,客户机发送服务器的 user-agent 头部的值

---

浏览器判断：

- PC 端、手机端、iPad

```
    if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      console.log("手机端");
    } else if (/iPad/i.test(navigator.userAgent)) {
      console.log("iPad");
    } else {
      console.log("PC")
    }
```

- 微信内置浏览器

```
    if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger") {
      console.log("微信")
    } else {
      console.log("非微信")
    }
```

- IE 、火狐、其他

```

    if (navigator.userAgent.toLowerCase().indexOf("firefox") >=0) { // 若-1为其他，否则火狐
      console.log("firefox");
    } else if(window.addEventListener){
        console.log("not ie、not firefox");
    }else if(window.attachEvent){
      console.log("ie");
    }
```

- Android、IOS

```
    if(/android/ig.test(navigator.userAgent)){
      console.log("Android");
    } else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
      console.log("iOS");
    }

    var obj = {
        userAgent: navigator.userAgent.toLowerCase()
        isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
        isIphone: Boolean(navigator.userAgent.match(/(iPhone|iPad|iPod|iOS)/ig)),
        isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
    }
```

## <a name="页面url属性">页面 url 属性</a>

new URL('http://www.aaa.com/bbb.aspx?name=1')

> hash: ""  
> host: "www.aaa.com:8080"  
> hostname: "www.aaa.com"  
> href: "http://www.aaa.com:8080/bbb.aspx?name=1"  
> origin: "http://www.aaa.com:8080"  
> password: ""  
> pathname: "/bbb.aspx"  
> port: "8080"  
> protocol: "http:"  
> search: "?name=1"  
> searchParams: URLSearchParams {}
> username: ""

- hash (URL 中在井号“#”后面的分段)

  > window.location.hash  
  > new URL(url).hash

- host (URL 的主机部分包含端口号)

- href (URL 整个地址字符串)

- hostname (URL 的主机部分不含端口号)

- origin (只读属性，返回具有 URL 来源的 Unicode 序列化 USVString。Origin 的结构是由传入的 URL 类型决定的，对于 http 或 https 的链接，得到的 Origin 将会为 协议（http/https）+ (://) + 域名 + (:端口)，一般情况下，默认端口将会被忽略。对于 BLOB 链接，Origin 返回的则是 BLOB：后面的部分)

- userName 和 password 属性也是可写属性，它能提取域名前的用户名和密码部分的内容

  ```js
  url = new URL("https://username1:password1@www.grapecity.com.cn");

  console.log(url.username, url.password);
  //username1 password1
  ```

- pathname (URL 的第一个斜杠(/) 后面除参数外的部分)

- port (URL 的端口号)

  > (默认的 80 端口返回空字符)

- protocol (URL 的协议部分,一般是指类似 http:，https:，ftp:，file:等这样的协议)

- search (URL 地址参数?后面的部分)

- searchParams 属性  
  search 属性只为我们获取了整个参数字符串，如果有把字符串解析为键值对，这时候 searchParams 属性就派上了用场，该属性将获得一个 URLSearchParams 对象，该对象具有列出查询字符串键值对列表的能力，例如，要获取参数列表，我们可以这样使用。
  > new URL('http://www.aaa.com/bbb.aspx?name=1').searchParams.get('name') // 1
  > new URLSearchParams(window.loaction.search).get('name')

### 获取 url 中的参数值

### new URL
```js
new URL('https://www.aaa.com/?name=dadan&id=95827')

// 返回值
{
  href: "https://www.aaa.com:8888/?name=dadan&id=95827"
  origin: "https://www.aaa.com:8888"
  protocol: "https:"
  username: ""
  password: ""
  host: "www.aaa.com:8888"
  hostname: "www.aaa.com"
  port: "8888"
  pathname: "/"
  search: "?name=dadan&id=95827"
  searchParams: URLSearchParams {}
  hash: ""
}
```

### URLSearchParams:解析 url 为对象

[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 定义了一些实用的方法来处理 URL 的查询字符串。

```js
let url = "http://www.aaa.com/?id=0&name=dadan&age=13&hobby=nothing"
let searchParams = new URLSearchParams(url);

for (let item of searchParams) {
  console.log(item);
}
//output
// ["http://www.aaa.com/?id", "0"]
// ["name", "dadan"]
// ["age", "13"]
// ["hobby", "nothing"]

console.log(searchParams.has("name")) // true
console.log(searchParams.get("name")) // dadan
console.log(searchParams.get("name1")) // null
console.log(searchParams.getAll("name")) // ["dadan"]
console.log(searchParams.set("name", "我是95827"),searchParams.get("name")) // undefined "我是95827"
console.log(searchParams.append("appendname", "我叫楚大蛋"),searchParams.get("appendname"))// undefined "我叫楚大蛋"
console.log(decodeURIComponent(searchParams.toString())) // http://www.aaa.com/?id=0&name=我是95827&age=13&hobby=nothing&appendname=我叫楚大蛋
console.log(searchParams.delete("name"),searchParams.get("name"))// undefined null
```

### 将 url 中的参数转换为对象

```js
function getQueryString(name, url=window.location) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = new URL(url).search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
console.log(getQueryString("参数名1"));
console.log(getQueryString("参数名2"));
console.log(getQueryString("参数名3"));
```

* 

```js
function parseParam(url=window.location) {
  url = new URL(url).search; //获取url中"?"符后的字串
  let obj = {};
  if (url.includes("?")) {
    let str = url.substr(1); //去除 ?
    let arr = str.split("&"); 
    for(var i = 0; i < arr.length; i ++) {
      let tempArr = arr[i].split("=")
      obj[tempArr[0]] = encodeURIComponent(tempArr[1]);
    }
  }
  return obj;
}
console.log(parseParam());
```

* 
```js
let url = 'http://www.aaa.com/?a=a1&b=123&c=打算'

function parseParam(url=window.location) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = encodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })
  return paramsObj;
}
console.log(parseParam(url)) //{a: "a1", b: 123, c: "打算"}
```


## <a name="实现模糊搜索结果的关键词高亮显示">[实现模糊搜索结果的关键词高亮显示](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/141)</a>

>

    <div class="input">
        <input type="text" oninput="search(event)">
        <ul class="options"></ul>
    </div>

    <script>
        const list = [1,1111,'13','a','ab','baa','上海', '上海市', '上海海昌海洋公园', '上海市徐汇区', '上海自来水来自海上'];
        function setList(value) {
          const ul = document.querySelector('.options');
          ul.innerHTML = '';
          if (!value) {
            ul.innerHTML = '';
            return;
          }
          list.forEach((item, index) => {
            //number没有replace方法
            item = String(item)
            if (item.indexOf(value) !== -1) {
              const li = document.createElement('li');
              const innerHtml = item.replace(value, `<span style="color:red">${value}</span>`);
              console.log(innerHtml)
              li.innerHTML = innerHtml;
              li.setAttribute('key', index);
              ul.appendChild(li);
            }
          })
        }
        function search(e) {
          const value = e.target.value;
          setList(value)
        }
    </script>

## <a name="判断字符串长度">判断字符串长度(英文占 1 个字符，中文汉字占 2 个字符)</a>

>

    function strLength(str) {
      var len = 0;
      for (var i = 0, strLen = str.length; i < strLen ; i++) {
        if (str.charCodeAt(i)>=128) {
          len += 2;
        }
        else {
          len ++;
        }
      }
      return len;
    }

>

    //通过正则将所有双字节字符替换为2个单字节字符，在去取长度
    function getStrLength(str){
        return str.replace(/[\u0391-\uFFE5]/g,"aa").length;
    }

ASCII 码由一个字节中的 7 位表示，范围共 128 个字符。而且 ASCII 码只能表示英文，数字和常用标点符号，编码在 1-127 之间。  
Unicode 码可以表示所有字符，编码范围很大，能表示 65000 多个字符，其中汉字占 40000 多个。Unicode 码包含 ASCII 码

汉字转换为 Unicode 码后，其编码值都是大于 127 的; unicode 双字节字符编码范围:\u0391-\uFFE5;  
一个汉字占两个字节，其余语言占一个字节。

## <a name="0.1+0.2">0.1+0.2!=0.3</a>

- 原因：

在进制转换和进阶运算的过程中出现精度损失。

JavaScript 中的 number 类型就是浮点型，数字和浮点精度的处理相同，JavaScript 中的浮点数采用 IEEE-754 格式的规定，这是一种二进制表示法，可以精确地表示分数，比如 1/2，1/8，1/1024，每个浮点数占 64 位。但是，二进制浮点数表示法并不能精确的表示类似 0.1 这样 的简单的数字，会有舍入误差。  
由于采用二进制，JavaScript 也不能有限表示 1/10、1/2 等这样的分数。在二进制中，1/10(0.1)被表示为 0.00110011001100110011…… 注意 0011 是无限重复的，这是舍入误差造成的，所以对于 0.1 + 0.2 这样的运算，操作数会先被转成二进制，然后再计算：  
0.1 => 0.0001 1001 1001 1001…（无限循环）  
0.2 => 0.0011 0011 0011 0011…（无限循环）  
双精度浮点数的小数部分最多支持 52 位，所以两者相加之后得到这么一串 0.0100110011001100110011001100110011001100...因浮点数小数位的限制而截断的二进制数字，这时候，再把它转换为十进制，就成了 0.30000000000000004。

- 解决：

  >

      先升幂再降幂

      使用内置的 toPrecision() 和 toFixed() 方法，注意，返回值字符串。

      Number.EPSILON(极小的常量; === Math.pow(2, -52))
          //设置“能够接受的误差范围”。
          function withinErrorMargin (left, right) {
            return Math.abs(left - right) < Number.EPSILON;
          }

          withinErrorMargin(0.1 + 0.2, 0.3) // true

## <a name="移动端点透问题">移动端点透问题(click 300ms 延迟) </a>

https://codepen.io/chenzong24635/pen/jROWmM

https://juejin.im/post/5ce764a2f265da1b8c19645a

在移动端开发中，有时会出现 click 点透的问题

touch 触摸事件

>

    touchstart：手指触摸到屏幕会触发
    touchmove：当手指在屏幕上移动时，会触发
    touchend：当手指离开屏幕时，会触发
    touchcancel：可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件

tap 触碰事件

>

    一般用于代替click事件

    tap: 手指碰一下屏幕会触发
    longTap: 手指长按屏幕会触发
    singleTap: 手指碰一下屏幕会触发
    doubleTap: 手指双击屏幕会触发

A 是遮罩层，B 是正常的 DOM，C 是 B 上的某个元素，是个链接。场景是点击 A 的时候 A 消失，结果点到了 C，页面发生了跳转，

#### 点透的出现场景：

1. A/B 两个层上下 z 轴重叠。
2. 上层的 A 点击后消失或移开。（这一点很重要）
3. B 元素本身有默认 click 事件（如 a 标签） 或 B 绑定了 click 事件。
   在以上情况下，点击 A/B 重叠的部分，就会出现点透的现象。

#### 为什么会出现点透

click 延迟

在移动端不使用 click 而用 touch 事件代替触摸是因为 click 事件有着明显的延迟，具体 touchstart 与 click 的区别如下：

1.

>

    touchstart：在这个DOM（或冒泡到这个DOM）上手指触摸开始即能立即触发

2.

>

    click：在这个DOM（或冒泡到这个DOM）上手指触摸开始，且手指未曾在屏幕上移动（某些浏览器允许移动一个非常小的位移值），且在这个在这个dom上手指离开屏幕，且触摸和离开屏幕之间的间隔时间较短（某些浏览器不检测间隔时间，也会触发click）才能触发

    事件的触发时间按由早到晚排列为：touchstart 早于 touchend 早于 click。亦即click的触发是有延迟的，这个时间大概在300ms左右。

    由于我们在touchstart阶段就已经隐藏了罩层A，当click被触发时候，能够被点击的元素则是其下的B元素，根据click事件的触发规则：只有在被触发时，当前有click事件的元素显示，且在面朝用户的最前端时，才触发click事件。
    由于B绑定了click事件（或者B本身默认存在click事件），所以B的click事件被触发，产生了点透的情况。

#### 解决方案

0.

>

    以下可以通过 hack 技巧，不添加 fastClick 也能修复延迟的问题

    禁用缩放
      Chrome on Android (all versions)
      iOS 9.3

    <meta name="viewport" content="user-scalable=no" />
    或
    html {
      touch-action: manipulation;
      -ms-touch-action: manipulation; // IE10
    }

    不禁用缩放
        Chrome 32+ on Android
        iOS 9.3

    <meta name="viewport" content="width=device-width" />

1.

>

    对于B元素本身没有默认click事件的情况（无a标签等），应统一使用touch事件，统一代码风格，并且由于click事件在移动端的延迟要大很多，不利于用户体验，所以关于触摸事件应尽量使用touch相关事件。

2.  对于 B 元素本身存在默认 click 事件的情况,应及时取消 A 元素的默认点击事件，从而阻止 click 事件的产生。因为 触发事件顺序：touchstart 早于 touchend 早于 click

    >

        document.querySelector('#A').addEventListener('touchend', function(event) {
          event.preventDefault();
        })

3.

A 300ms 延迟消失

>

    let A = document.querySelector('#A')
    A.addEventListener('touchend', function(event) {
      let timer = setTimeout(() => {
        A.style.display = 'none'
      }, 300)
    })

4.

fastclick 库地址 ：https://github.com/ftlabs/fastclick

>

    在原生的js前直接加上
    window.addEventListener( "load", function() {
      FastClick.attach( document.body );
    }, false )

## <a name="随机字符串">随机字符串</a>

>

    Math.random().toString(36).slice(2)

    Math.random().toString(36).slice(-6)// 随机6位字符串

    由于：number.toString(36) -> 0-9 a-z的字符串
    toString(radix) 方法以指定的基数返回该对象的字符串表示。
    radix-->用于数字到字符串的转换的基数(从2到36)。
    如果转换的基数大于10，则会使用字母来表示大于9的数字，比如基数为16的情况，则使用a到f的字母来表示10到15。
    如果基数没有指定，则默认使用 10

>

    function a(n) {
      let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
      let tmp = '',
          i = 0,
          len = str.length;
      for (i = 0; i < n; i++) {
        tmp += str.charAt(Math.floor(Math.random() * len));
      }
      return tmp;
    }

## <a name="随机HEX色值">随机 HEX 色值 </a>

RandomColor = () => "#" + Math.floor(Math.random() \* 0xffffff).toString(16).padEnd(6, "0");

## <a name="随机6个数字">随机 6 个数字 </a>

Math.floor(Math.random() \* 999999)

Math.random().toString().slice(-6) / 1

Math.random().toFixed(6).slice(-6) / 1

## <a name="范围内随机数，包括两个数在内">范围内随机数</a>

>

    // 小数
    const number =(min, max) => Math.random() * (max - min) + min

    // 整数
    const number = = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

## <a name="数字千分位">数字千分位 </a>

1.  toLocaleString()

    >

        var a = 123456;
        a.toLocaleString() //'123,456'

2.  reg

    >

        function thousandth (num) {
          return num && num
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            //.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
        }
        //$&  表示整个被匹配的字符串

        //最多只支持 小数点后三位
        thousandth(1662367864) //"1,662,367,864"
        thousandth(16623.678)//"16,623.678"
        thousandth(16623.6786)//"16,623.67,86" ???

3)  reduce

    >

        function thousandth(num) {//12345678
          var str = num + '';
          str = str.split("").reverse()
          // ["8", "7", "6", "5", "4", "3", "2", "1"]
          return str.reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
          })
        }

4)  for

    >

        function thousand(num) {
          var str = ''
          num = (num + '').split('') //数组
          for(var i = num.length-1,j=0; i>=0 ; i--, j++) {
            //每隔三位加逗号，过滤数组的最后一位
            if(j%3 === 0 && j!=0){
              num.splice(i,1,num[i],',')//当前索引后 添加','
            }
          }
          return num.join('')
        }

5)  for
    >
        function format(num){
          var str="";//字符串累加
          num = num+'';//数字转字符串
          for(var i=num.length- 1,j=1;i>=0;i--,j++){
            if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况
              str+=num[i]+",";//加千分位逗号
              continue;
            }
            str+=num[i];//倒着累加数字
          }
          return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串
        }

## <a name="统计字符串中同一字符出现次数">统计字符串中同一字符出现次数</a>

>

    str.split('').reduce((val, count) => (val[count]++ || (val[count] = 1), val), {})
    //
    function thousand(str){
      return str.split('').reduce((val, count) => {
        if(val[count]){
          val[count]++
        }else{
          val[count] = 1
        }
        return val
      }, {})
    }

## <a name="查找字符串中出现最多的字符和个数">查找字符串中出现最多的字符和个数</a>

>

    let str = "abcabcabcbbccccc";
    let num = 0;
    let char = '';

    // 使其按照一定的次序排列
    str = str.split('').sort().join('');
    // "aaabbbbbcccccccc"

    // 定义正则表达式
    let re = /(\w)\1+/g;
    str.replace(re,($0,$1) => {
        if(num < $0.length){
            num = $0.length;
            char = $1;
        }
    });
    console.log(`字符最多的是${char}，出现了${num}次`);



## <a name="判断是否回文、实现回文">判断是否回文、实现回文</a>

- 判断是否回文

  >

      function isPalindrome(line) {
      line += "";//转为字符串
      line=line.replace(/\W/g, '').toLowerCase();   //替换非单词字符串，转换为小写
      return line === line.split("").reverse().join("");
      }

- 实现回文
  >
      let arr=[1,2,3,4];
      let temp=arr.join().split(',');
      temp.pop();
      temp.reverse();
      console.log(arr.concat(temp).join())

## <a name="两位大整数相加">两位大整数相加</a>

>

    function sumStrings(a,b){
      console.log(a);
      console.log(b);
      var res='', c=0;
      console.log()
      a = a.split('');
      b =b.split('');
      while (a.length || b.length || c){
          c += ~~a.pop() + ~~b.pop();
          res = c % 10 + res;
          //console.log(res);
          c = c>9;
      }
      return res.replace(/^0+/,'');
    }
    console.log(sumStrings('37486040775460377773700','7669000000000000000000000000000'))

    代码解析：
    1. 使用split方法，将字符串转换为数组
    2. 通过判断a,b,c的长度，决定是否还需要就行对应的位进行相加
    3. 使用~~a.pop()的目的：保证若b的长度大于a的长度，则此时a.pop()=undefined，~~undefined=0
    4. 将两个位置上的数进行相加，若大于9，则需要进位，即，将c的值存为true，这样当进行相加时，true会进行变量提升为1
    5. 输出最后结果的时候，由于前面可能存在0，所以使用字符串的replace方法将前面的0去掉。

>

    function func(a,b){
      a = a + ''
      b = b + ''
      var len1 = a.length
      var len2 = b.length
      for(var i = 0;i < Math.abs(len1-len2); i++){
        if(len1>len2) b = '0' + b
        if(len1<len2) a = '0' + a
      }
      a = a.split('').reverse()
      b = b.split('').reverse()
      var n = Math.max(len1,len2)
      var result = new Array(n).fill(0)
      // var result = Array.apply(this, Array(n)).map(()=>{return 0})
      for(var j = 0;j < n; j++){
        var temp = Number.parseInt(a[j]) + Number.parseInt(b[j])
        if(temp > 9){
          result[j] += temp-10
          result[j+1] = 1
        } else {
          result[j] += temp
        }
      }
      return result.reverse().join('').toString()
    }

## <a name="实现f(a)(b)与f(a,b)一样的效果">实现 f(a)(b)与 f(a,b)一样的效果</a>

>

    function f(m, n){
      if (m !== undefined && n !== undefined) { return m + n}
      else { return function(a){  return m + a;} }
    }

>

    function f(...arg){
      if(arg.length == 2){ return arg[0]+arg[1];}
      else return function(x){ return  Number(...arg.join(''))+x}
    }

## <a name="无限累加的函数 add">实现一个无限累加的函数 add(1)(2)(3)...</a>

1.

>

    打印函数时会自动调用 toString()方法，函数 add(a) 返回一个闭包 s(b)，函数 s() 中累加计算 a = a + b，只需要重写sum.toString()方法返回变量 a 就可以了。
    alert()会调用valueOf或toString方法

    function add(a){
      function s(b){
        a =   a+b;
        return s;
      }
      s.toString = function(){return a;}//重写toString
      return s;
    }
    add(1)(2)(3)

    执行add(1);
    返回的是里面的  s  函数， 通过闭包，s 函数里面可以访问到 变量 a=1;  所以 当我们 alert(add(1)); 的时候， 调用的 toSting（）方法会将作用域（原型链）里面的 a = 1 弹出来。

    执行add(1)(2);
    等价于s(2);  这里面相当于 把 2 传递给 s()函数里面的 b , 让作用域（原型链）里面的 a = a+b ,此时 a = 3， 继续保存在作用域中了。 然后还是返回 s 函数。

    执行 add(1)(2)(3);
    等价于s(3);和上面 b) 中的分析一样，只是更新了作用域中的 a = 6 了，然后同样是返回 s 函数


    console.log(add(1)(2)(3)); // f 6 --输出函数
    alert(add(1)(2)(3)); //6 -- 输出字符串

1.

>

    function add(x) {
      var c = 0;
      return function(x) {
        c = c + x ;
        arguments.callee.toString = function(){
          return c;
        };
        return arguments.callee;
      }(x);
    };

add(1)(2)(3)

2.

>

    function add (a){
        if(!isFinite(add.i)){
          add.i = a
        }else {
          add.i += a;
        }
        add.valueOf = add.toString = function(){
          return add.i
        }
        return add;
    }
    add(1)(2)(3)







## <a name="自动触发onclick事件">自动触发 onclick 事件</a>

    if(document.all) { // IE
      document.getElementById("clickMe").click();
    }
    else { // 其它
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      document.getElementById("clickMe").dispatchEvent(e);
    }

## <a name="unicode转中文">unicode 转中文</a>

>

    document.onmousewheel = function (evt) {
      var e = evt || window.event;
      if(e.preventDefault && e.ctrlKey) e.preventDefault();
      if(e.ctrlKey) e.returnValue = false;
    };
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', document.onmousewheel, false);

    // 记得head标记中加入
    <meta http-equiv="content-type" content="text/html; charset=utf-8">  */
    var str = "\u6D77\u66D9\u4E2D\u5FC3\u83DC\u5E02\u573A" ;
    unescape(str.replace(/\\u/g, '%u'))

## <a name="将字符串复制到剪贴板">将字符串复制到剪贴板</a>

```js
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

copyToClipboard("Lorem ipsum");
```

## <a name="取消选择，防止复制，禁止剪切、粘贴">取消选择，防止复制，禁止剪切、粘贴</a>

取消选择 obj.onselectstart = () => return false  
 CSS: -moz-user-select:none 仅对 FF 有效

禁止右键 document.oncontextmenu= () => false  
禁止复制 document.oncopy= () => false  
禁止粘贴 document.onpaste= () => false  
禁止剪切 document.oncut= () => false

>

    ['selectstart', 'contextmenu', 'copy', 'paste' ,'cut'].forEach(function(ev){
        document.addEventListener(ev, function(e){
          let event = e || window.event;
          return event.preventDefault ? event.preventDefault() : event.returnValue = false;
        })
    })

>

## <a name="网页是否可编辑">网页是否可编辑</a>

网页最后编辑时间： document.lastModified

控制、查看网页是否可编辑  
document.body.contentEditable=true | false 控制当前文档是否可编辑 ，权限比 designMode 高
document.body.isContentEditable //查看

document.designMode='on' | 'off' 控制当前文档是否可编辑
document.designMode // 查看

## <a name="逗号操作符">逗号操作符</a>

对它的每个操作对象求值（从左至右），返回最后一个操作对象的值

>

    var f = (function f(){ return '1'; }, function g(){ return 2; })();
    console.log(f) //2



## <a name="比较两个对象是否相等">比较两个对象是否相等</a>

[链接](https://segmentfault.com/a/1190000008187911)

> JSON.stringify()

//深度判断

>

    function deepCompare(x, y) {
      var i, l, leftChain, rightChain;
      function compare2Objects(x, y) {
        var p;
        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
          return true;
        }

        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
          return true;
        }

        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
          (x instanceof Date && y instanceof Date) ||
          (x instanceof RegExp && y instanceof RegExp) ||
          (x instanceof String && y instanceof String) ||
          (x instanceof Number && y instanceof Number)) {
          return x.toString() === y.toString();
        }

        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
          return false;
        }

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
          return false;
        }

        if (x.constructor !== y.constructor) {
          return false;
        }

        if (x.prototype !== y.prototype) {
          return false;
        }

        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
          return false;
        }

        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
          } else if (typeof y[p] !== typeof x[p]) {
            return false;
          }
        }

        for (p in x) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
          } else if (typeof y[p] !== typeof x[p]) {
            return false;
          }
          switch (typeof (x[p])) {
            case 'object':
            case 'function':
              leftChain.push(x);
              rightChain.push(y);
              if (!compare2Objects(x[p], y[p])) {
                return false;
              }
              leftChain.pop();
              rightChain.pop();
              break;
            default:
              if (x[p] !== y[p]) {
                return false;
              }
              break;
          }
        }
        return true;
      }

      if (arguments.length < 1) {
        return true; //Die silently? Don't know how to handle such case, please help...
        // throw "Need two or more arguments to compare";
      }

      for (i = 1, l = arguments.length; i < l; i++) {
        leftChain = []; //Todo: this can be cached
        rightChain = [];
        if (!compare2Objects(arguments[0], arguments[i])) {
          return false;
        }
      }
      return true;
    }



## <a name="页面加载进度条">页面加载进度条</a>

>

    首先，咱们要想知道页面是否加载完毕，需要知道以下几点：
    1.document.onreadystatechange 页面加载状态改变时的事件
    2.document.readyState 页面当前文档的状态 :有四种状态
        uninitialized 还未开始载入
        loading 载入中
        interactive 已加载，文档和永和可以开始交互
        complete 载入完成


    document.onreadystatechange = function () {//即在加载的过程中执行下面的代码
        if(document.readyState=="complete"){//complete加载完成

        }
    }

### 通过 css3 来制作进度条小动画

![loading](/img/loading.png)

    .loading {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: #fff;
    }

    .loading .pic {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }

    .loading .pic i {
      display: block;
      float: left;
      width: 6px;
      height: 50px;
      background-color: #399;
      margin: 0 2px;
      transform: scaleY(.4);
      animation: load .6s infinite;
    }

    .loading .pic i:nth-child(2) {
      animation-delay: .1s;
    }

    .loading .pic i:nth-child(3) {
      animation-delay: .2s;
    }

    .loading .pic i:nth-child(4) {
      animation-delay: .3s;
    }

    .loading .pic i:nth-child(5) {
      animation-delay: .4s;
    }

    @keyframes load {
      0%,
      100% {
        transform: scaleY(.4);
      }
      50% {
        transform: scaleY(1);
      }
    }

    <div class="loading">
        <div class="pic">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>

    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {//加载完成隐藏
        document.querySelector('.loading').style.display = 'none'
      }
    }

### 根据当前页面加载图片数/页面所有图片数 实现加载进度条

    .loading1 {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: #fff;
    }

    .loading1 .pic1 {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      font-size: 30px;
      text-align: center;
      line-height: 100px;
    }

    .loading1 .pic1 span {
      display: block;
      width: 80px;
      height: 80px;
      position: absolute;
      top: 10px;
      left: 10px;
      border-radius: 50%;
      box-shadow: 0 3px 0 #666;
      animation: rotate 1s infinite linear;
      -webkit-animation: rotate 1s infinite linear;
    }

    @-webkit-keyframes rotate {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    <div class="loading1">
        <div class="pic1">
        <span></span>
        <b>0%</b>
        </div>
    </div>

    <script>
        $(function () {
            var imgs = $('img'); // 获取所有图片
            var num = 0;
            imgs.each(function (i) {
                var cImg = new Image();
                cImg.onload = null;
                cImg.onload = function () { // 图片加载时
                    num++;
                    $('.loading1 b').html(parseInt(num / $('img').length * 100) + '%'); // 更新进度条
                    if (num >= $('img').length) { // 所有图片加载完毕时
                        $('.loading1').fadeOut(); // 隐藏 进度条
                    }
                }
                cImg.src = imgs[i].src;
            });
        });
    </script>

### 根据文件加载顺序来 实现加载进度条

>

    设置几个加载进度节点,加载到时则实现加载动画
    .line {
      position: fixed;
      top: 0;
      left: 0;
      height: 1px;
      background-color: #000;
    }

    <div class="line"></div>
    <header>
        <img src='img.jpg'>
    </header>

    <script>
        $('.line').animate({width:'10%'},100);
    </script>

    <section class='banner'>
        <img src='img.jpg'>
    </section>

    <script>
        $('.line').animate({width:'60%'},100);
    </script>

    <footer'>
        <img src='img.jpg'>
    </footer>

    <script>
        $('.line').animate({width:'100%'},100,function(){
            $('.line').fadeOut(); // 底部加载完成后隐藏进度条
        });
    </script>

---

## <a name="vue实现数字动态翻牌的效果">vue 实现数字动态翻牌的效果</a>

[原文](https://juejin.im/post/5de8bf5851882512480a73dc#heading-0)

>

    <!--
      writing-mode: vertical-lr，使数字竖直排版，
      2d移动 transform: translate(-50%, -40%); y值控制移动至哪个数字，
      transition 控制transform属性有动画效果
    -->
    <template>
      <div class="chartNum">
        <div class="box-item">
          <li
            :class="{'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
            v-for="(item,index) in orderNum"
            :key="index"
          >
            <span v-if="!isNaN(item)">
              <i ref="numberItem">0123456789</i>
            </span>
            <span class="comma" v-else>{{item}}</span>
          </li>
        </div>
      </div>
    </template>
    <script>
      export default {
          data() {
              return {
                  orderNum: ['0', '0', '0', '0', '0', '0', '0', '0'], // 默认订单总数
              }
          },
          mounted(){
              setTimeout(() => {
                  this.toOrderNum(12654) // 这里输入数字即可调用
              }, 500);

          },
          methods: {
                  // 设置文字滚动
              setNumberTransform () {
                const numberItems = this.$refs.numberItem // 拿到数字的ref，计算元素数量
                const numberArr = this.orderNum.filter(item => !isNaN(item))
                // 结合CSS 对数字字符进行滚动,显示订单数量
                for (let index = 0; index < numberItems.length; index++) {
                  const elem = numberItems[index]
                  elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
                }
              },
              // 处理总订单数字
              toOrderNum(num) {
                num = num.toString()
                // 把订单数变成字符串
                  if (num.length < 8) {
                      num = '0' + num // 如未满八位数，添加"0"补位
                      this.toOrderNum(num) // 递归添加"0"补位
                  } else if (num.length === 8) {
                      // 订单数中加入逗号
                      // num = num.slice(0, 2) + ',' + num.slice(2, 5) + ',' + num.slice(5, 8)
                      this.orderNum = num.split('') // 将其便变成数据，渲染至滚动数组
                  } else {
                      // 订单总量数字超过八位显示异常
                      this.$message.warning('总量数字过大')
                  }
                  this.setNumberTransform()
              },
          }
      }
    </script>
    <style scoped lang='scss'>
    /*订单总量滚动数字设置*/
    .box-item {
      position: relative;
      height: 100px;

      font-size: 54px;
      line-height: 41px;
      text-align: center;
      list-style: none;
      color: #2d7cff;
      writing-mode: vertical-lr;
      text-orientation: upright;
      /*文字禁止编辑*/
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      /* overflow: hidden; */
    }
    /* 默认逗号设置 */
    .mark-item {
      width: 10px;
      height: 100px;
      margin-right: 5px;
      line-height: 10px;
      font-size: 48px;
      position: relative;
      & > span {
        position: absolute;
        width: 100%;
        bottom: 0;
        writing-mode: vertical-rl;
        text-orientation: upright;
      }
    }
    /*滚动数字设置*/
    .number-item {
      width: 41px;
      height: 75px;
      /* 背景图片 */
      background: url(/images/text-bg-blue.png) no-repeat center center;
      background-size: 100% 100%;
      // background: #ccc;
      list-style: none;
      margin-right: 5px;
      // background:rgba(250,250,250,1);
      border-radius: 4px;
      border: 1px solid rgba(221, 221, 221, 1);
      & > span {
        position: relative;
        display: inline-block;
        margin-right: 10px;
        width: 100%;
        height: 100%;
        writing-mode: vertical-rl;
        text-orientation: upright;
        overflow: hidden;
        & > i {
          font-style: normal;
          position: absolute;
          top: 11px;
          left: 50%;
          transform: translate(-50%, 0);
          transition: transform 1s ease-in-out;
          letter-spacing: 10px;
        }
      }
    }
    .number-item:last-child {
      margin-right: 0;
    }
    </style>

# <a name="面试题">**面试题**</a>

[Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md?tdsourcetag=s_pctim_aiomsg)

[前端基础面试题(JS 部分)](https://zhuanlan.zhihu.com/p/28428367)

[web 前端大厂 10 道经典面试题汇总](https://zhuanlan.zhihu.com/p/57200821)

[前端进阶系列](https://github.com/yygmind/blog)-木易杨



### 点击一个input依次触发的事件
```js
const ipt = document.getElementById('ipt');
ipt.onclick = function (e) {
  console.log('click')
}
ipt.onfocus = function (e) {
  console.log('focus')
}
ipt.onmousedown = function (e) {
  console.log('mousedown')
}
ipt.onmouseover = function (e) {
  console.log('mouseover')
}
ipt.onmouseenter = function (e) {
  console.log('mouseenter')
}

// mouseover
// mouseenter
// mousedown
// focus
// click
```

### 定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format 实参用来替换模板内标记

>

    (function (window) {
        function fn(str) {
            this.str = str;
        }

        fn.prototype.format = function () {
            var arg = Array.prototype.slice.call(arguments, 0);
            return this.str.replace(/\{\s*(\d+)\s*\}/g, function (a, b) {
                return arg[b] || '';
            });
        };

        window.fn = fn;
    })(window);

    // use
    (function () {
        var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
        console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
    })();


