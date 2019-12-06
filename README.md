<a id="top"></a>


# 
<details>
  <summary>vscode 快捷键</summary>

  [vscode快捷键](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

>
    删除空行：ctrl+h键进行正则匹配：^\s*(?=\r?$)\n

    格式化代码： Shift + Alt + F

    多行光标：Shift + Alt + 鼠标左键

    跳到某行： Ctrl+ G 然后在弹出的框中输入行数就可以了

</details>


<details >
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
      background:url('./img/backward.png') no-repeat 100% 100% / cover;
      width:30px;
      height:30px;
    }
  </style> -->



* 分级标题
>
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题  <!--最多6级标题-->  

* 对齐方式
>
    <center>行中心对齐</center>
    <p align="left">行左对齐</p>
    <p align="right">行右对齐</p>

* 跳转
>
    [点击跳转](#5)  //限数字 1,1.5之类
    <a id="5">跳转到这</a>

    里面也能放图片
    [![img](./img/backward.png)](#backward)
    [<img src="./img/backward.png" width="20px" />](#backward)
>
    <a href="#点击跳转">点击跳转</a>
    <a name="点击跳转">跳转到这</a>

* 代码折叠、展开
>  
    <details open>
      <summary>伸/缩</summary>
      open：展开   
      测试内容,
      IE不支持
    </details>

* 文章中添加代码
>
    1. 使用反引号 :`<a>我是代码</a>`
    2. 使用制表符或者至少4个空格进行缩进的行:  
    >
        <a>我是代码</a>

* 生成多行相同代码
div.item*3>{$}
>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>

* 换行
两长段落之间没有空行 ，如何换行
>
    段落末尾空两格 （space + space）

* 表格
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

* 分割线
>
    * * *
    ***
    *****
    - - -
    -----------

* 强调——粗体和斜体
>
    *斜体*    
    **粗体** 
    ~~删除线~~  

* 链接
>
    1. aa<a.com>aa

    2. [链接文字](链接地址)

多次引用同一链接
>
    // []里的内容要一致
    [链接文字][]

    //这个不会显示
    [链接文字]: http://www.aaa.com/
>
    [github][1]  
    [1]:https://github.com


* 特殊字符

| 特殊字符 | 描述 | 字符代码 |
|:--|:--|:--|
| 	|空格符	|\&nbsp;|
| <	|小于号	|\&lt;|
| >	|大于号|\&gt;|
| &	|和号	|\&amp;|
| ￥	|人民币|\&yen;|
| ©	|版权	|\&copy;|
| ®	|注册商标	|\&reg;|
| °C|	摄氏度	|\&deg;C|
| ±	|正负号	|\&plusmn;|
| ×	|乘号	|\&times;|
| ÷	|除号	|\&divide;|
| ²	|平方（上标²）|\&sup2;|
| ³	|立方（上标³）|	\&sup3;|

</details>

# 
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

  `UI框架:`

  [Bootstrap](http://www.bootcss.com/)

  [vux](https://doc.vux.li/zh-CN/)

  [vant](https://youzan.github.io/vant/#/zh-CN/toast)

  [mint-ui](http://mint-ui.github.io/docs/#/)

  [Element](http://element-cn.eleme.io/#/zh-CN/component/installation)

  [iView](http://v1.iviewui.com/components/button)

  [jqweui](http://jqweui.com/components)

  [WeUI ](https://weui.io/)

  [echart](https://www.echartsjs.com/examples/zh/#chart-type-line)


  `图标、图片`：

  [icomoon](https://icomoon.io/)

  [icon-阿里巴巴](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

  [font-awesome](https://www.thinkcmf.com/font/search.html)

  [Squoosh图片压缩](https://squoosh.app/)
  
</details>

---

# 

**前端页面由哪三层构成：结构层、表示层、行为层。**

## [HTML](HTML.md)
## [CSS](CSS.md)
## [JS](JS.md) 

  * [Undefined、Null](/details/Undefined、Null.md)
  * [Boolean](/details/Boolean.md)
  * [Number](/details/Number.md)
  * [String](/details/String.md)
  * [Symbol??](/details/Symbol.md)
  * [Object](/details/Object.md)
    * [Array](/details/Array.md)
    * [Math](/details/Math.md)
    * [Date](/details/Date.md)
    * [Function??](/details/Function.md)
    * [Set、Map](/details/Set、Map.md)
  * --
  * [JS遍历方法](/details/Iterate.md) 
  * [JS兼容](/details/compatible.md)
  * [JS排序？？](/details/sort.md)
  * [JQ](/details/JQ.md)

## [TypeScript](TS.md)
## [正则](/details/RegExp.md)
## [AJAX](/details/Ajax.md)
## [跨域](/details/crossOrigin.md)
## [HTTP](HTTP.md)  

## [Vue](Vue.md)
## [Vuex](/details/vuex.md)
## [小程序??](Applet.md)
## [WebSocket??](/details/WebSocket.md)


## [Git](Git.md)
## [Node](Node.md)
## [console.log](/details/consolelog.md)

## [其他](others.md)

## 常用
<details open>
  <summary>
  <a href="#常用">目录</a>
  </summary>

  * <a href="#手机号验证">手机号验证</a>
  * <a href="#邮箱验证">邮箱验证</a>
  * <a href="#密码验证">密码验证</a>

  * <a href="#保留小数点后两位-不足则补零">保留小数点后两位-不足则补零</a>
  * <a href="#浮点型+-*/">浮点型+-*/</a>
  * <a href="#时间戳、日期 的转换">时间戳、日期 的转换</a>
  * <a href="#浏览器判断">浏览器、手机类型判断navigator.userAgent</a>
  * <a href="#获取当前页面url网址信息">获取当前页面url网址信息</a>
  * <a href="#解析url为对象">解析url为对象</a>
  * <a href="#FileReader">FileReader，图片转base64、blob，canvas图片压缩</a>
  * <a href="#图片转base64">图片转base64</a>
  * <a href="#图片转blob下载">图片转blob下载下载</a>
  * <a href="#打印">打印</a>
  * <a href="#base64数据导出文件">base64数据导出文件，文件下载</a>
  * <a href="#实现模糊搜索结果的关键词高亮显示">实现模糊搜索结果的关键词高亮显示</a>
  * <a href="#判断字符串长度">判断字符串长度</a>
  * <a href="#0.1+0.2">0.1+0.2!=0.3 原因，解决</a>
  * <a href="#移动端点透问题">移动端点透问题(click 300ms延迟)</a>
  * <a href="#随机字符串">随机字符串</a>
  * <a href="#随机6个数字">随机6个数字</a>
  * <a href="#范围内随机数，包括两个数在内">范围内随机数</a>
  * <a href="#数字千分位">数字千分位</a>
  * <a href="#统计字符串中同一字符出现次数">统计字符串中同一字符出现次数</a>
  * <a href="#查找字符串中出现最多的字符和个数">查找字符串中出现最多的字符和个数</a>
  * <a href="#类数组转化为数组">类数组转化为数组</a>
  * <a href="#判断是否回文、实现回文">判断是否回文、实现回文</a>
  * <a href="#两位大整数相加">两位大整数相加</a>
  * <a href="#实现f(a)(b)与f(a,b)一样的效果">实现f(a)(b)与f(a,b)一样的效果</a>
  * <a href="#无限累加的函数 add">实现一个无限累加的函数add(1)(2)(3)...</a>
  * <a href="#数组无序排列">数组无序排列</a>
  * <a href="#数组扁平化">数组扁平化:n维数组展开成一维数组</a>
  * <a href="#数组去重">数组去重</a>
  * <a href="#数组排序">数组排序</a>
  * <a href="#n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
  * <a href="#斐波那契数列">斐波那契数列</a>

  * <a href="#unicode转中文">unicode转中文</a>
  * <a href="#取消选择，防止复制，禁止剪切、粘贴">取消选择，防止复制，禁止剪切、粘贴</a>
  * <a href="#网页是否可编辑">网页是否可编辑</a>
  * <a href="#逗号操作符">逗号操作符</a>

  * <a href="#一道setTimeout面试题">一道setTimeout面试题</a>
  * <a href="#map(parseInt) 原理解析">['1','2','3'].map(parseInt) 原理解析</a>
  * <a href="#Array.apply(null,Array(3))与Array(3)区别">Array.apply(null,Array(3))与Array(3)区别</a>

  * <a href="#页面加载进度条">页面加载进度条</a>
  * <a href="#vue实现数字动态翻牌的效果">vue实现数字动态翻牌的效果</a>
  
  <a href="#"></a>

  * <a href="#面试题">**面试题**</a>


</details>


# <a name="常用">**常用**</a>

## <a name="手机号验证">手机号验证</a>
>
    function isPhone(tel) {
      return /^1[0-9]{10}$/.test(tel.toString())
    }

## <a name="邮箱验证">邮箱验证</a>
>
    function isEmail(val) {
      let reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
      let  res=reg.test(val);
      if (res) return true;
      return false;
    }

## <a name="身份证验证">身份证验证</a>
>
    function isCardNo(number) {
        var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return regx.test(number);
    }

## <a name="密码验证">密码验证</a>
>
    function pswLen(val) {// -- 6位数 、字母+数字
      let reg = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]+$/;
      let bool = reg.test(val);
      let len = val.length;
      console.log(val);
      if (len >= 6 && bool) return true
      return false
    }
## <a name="保留小数点后两位-不足则补零">保留小数点后两位-不足则补零</a>
>
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
## <a name="浮点型+-*/">浮点型+-*/</a>
* 加
>
    function accAdd(arg1, arg2) {
      let r1, r2, m;
      try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
      try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
      m = Math.pow(10, Math.max(r1, r2))
      return (arg1 * m + arg2 * m) / m
    }

* 减
>
    function accDec(arg1, arg2) {
      let r1, r2, m, n;
      try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
      try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
      m = Math.pow(10, Math.max(r1, r2));
      //动态控制精度长度
      n = (r1 >= r2) ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
    
* 乘
>
    function accMul(arg1, arg2) {
      let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
      try { m += s1.split(".")[1].length } catch (e) { }
      try { m += s2.split(".")[1].length } catch (e) { }
      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    }

* 除
>
    function accDiv(arg1, arg2) {
      let t1 = 0, t2 = 0, r1, r2;
      try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
      try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
      r1 = Number(arg1.toString().replace(".", ""))
      r2 = Number(arg2.toString().replace(".", ""))
      return (r1 / r2) * Math.pow(10, t2 - t1);
    }



## <a name="时间戳、日期 的转换">时间戳、日期 的转换</a>
![Date](/details/Date.md)

## <a name="浏览器判断">浏览器、手机类型判断navigator.userAgent</a>
使用navigator.userAgent属性 PC端、手机端、iPad判断 ，ie、火狐、其他浏览器判断， 微信浏览器判断， Android、IOS判断

* navigator为Window对象的一个属性，指向了一个包含浏览器相关信息的对象。
常用到的属性：
1. navigator.appVersion 浏览器的平台和版本信息
2. navigator.appName 浏览器的名称 
3. navigator.language 浏览器使用的语言 
4. navigator.platform 浏览器操作系统平台 
5. navigator.userAgent 浏览器的user-agent信息,客户机发送服务器的user-agent 头部的值


* PC端、手机端、iPad
>
    if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      console.log("手机端");
    } else if (/iPad/i.test(navigator.userAgent)) {
      console.log("iPad");
    } else {
      console.log("PC")
    }

* 微信内置浏览器
>
    if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger") {
      console.log("微信")
    } else { 
      console.log("非微信")
    } 

* IE 、火狐、其他
>
    if (navigator.userAgent.toLowerCase().indexOf("firefox") >=0) { // 若-1为其他，否则火狐
      console.log("firefox");
    } else if(window.addEventListener){
        console.log("not ie、not firefox");
    }else if(window.attachEvent){
      console.log("ie");
    }

* Android、IOS
>
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

## <a name="获取当前页面url网址信息">获取当前页面url网址信息</a>
    http://www.aaa.com/bbb.aspx?name=1

### 属性
#### window.location.href(设置或获取整个 URL 为字符串)

    // http://www.aaa.com/bbb.aspx?name=1

#### window.location.protocol(设置或获取 URL 的协议部分)

    // http:

#### window.location.host(设置或获取 URL 的主机部分)

    // www.aaa.com

#### window.location.port(设置或获取与 URL 关联的端口号码)

    // 空字符(采用默认的80端口返回空字符)

#### window.location.pathname(设置或获取与 URL 的路径部分（就是文件地址）)

    // bbb.aspx

#### window.location.search(设置或获取 href 属性中跟在问号后面的部分)

    // ?name=1 

#### window.location.hash(设置或获取 href 属性中在井号“##”后面的分段)

    // 空字符


### 获取 url 中的参数值

#### js 获取 url 中的参数值
>

    地址链接参数
    var url = window.location.href.split("?")[1];
    var arr= url.split("&");       //将结果用&符分隔
    var a = arr[0].split("=")[1]; //参数1

##### 正则

    function getQueryString(name, url) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = (url || window.location).search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    }
    console.log(getQueryString("参数名1"));
    console.log(getQueryString("参数名2"));
    console.log(getQueryString("参数名3"));

##### split

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
    Request = GetRequest();
    // Request['参数1'];


## <a name="解析url为对象">解析url为对象</a>
[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 定义了一些实用的方法来处理 URL 的查询字符串。
>
    var paramsString = "q=URLUtils.searchParams&topic=api"
    var searchParams = new URLSearchParams(paramsString);

    for (let p of searchParams) {
      console.log(p);
    }
    //output 
    ["q", "URLUtils.searchParams"]
    ["topic", "api"]

    searchParams.has("topic") === true; // true
    searchParams.get("topic") === "api"; // true
    searchParams.getAll("topic"); // ["api"]
    searchParams.get("foo") === null; // true
    searchParams.append("topic", "webdev");
    searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
    searchParams.set("topic", "More webdev");
    searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
    searchParams.delete("topic");
    searchParams.toString(); // "q=URLUtils.searchParams"


>
    //url里有= 字符会报错
    //?a=5&b=321===ad&c=a
    searchObj = search => JSON.parse(`{"${decodeURIComponent(search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=?/g, '":"')}"}`);

    searchObj(window.location.search)

>
    let url = 'http://www.aaa.com/?a=a1&b=123&c=打算'
    
    function parseParam(url) {
      const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
      const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
      let paramsObj = {};
      // 将 params 存到对象中
      paramsArr.forEach(param => {
        if (/=/.test(param)) { // 处理有 value 的参数
          let [key, val] = param.split('='); // 分割 key 和 value
          val = decodeURIComponent(val); // 解码
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

## <a name="FileReader">FileReader，图片转base64、blob，canvas图片压缩</a>
[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

* 常用

let fr = new FileReader()

readyStatus
>文件状态
>>EMPTY	0	还没有加载任何数据.  
>>LOADING	1	数据正在被加载.  
>>DONE	2	已完成全部的读取请求.  

fr.result
>文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

fr.readAsDataURL(file)
>转换成base64格式

fr.readAsText(file) 
>转换成字符串格式,返回文件内容的纯文本格式
>对于媒体文件（图片、音频、视频），其内部组成并不是按字符排列，会产生乱码

fr.readAsArrayBuffer(file)
>转换成ArrayBuffer格式

fr.abort()
>中止读取操作。在返回时，readyState属性为DONE

fr.loadstart
>处理loadstart事件。该事件在读取操作开始时触发。

fr.onload = function (e) { console.log(e.target.result) }
>处理load事件。该事件在读取操作完成时触发

fr.onloadend
>处理loadend事件。该事件在读取操作结束时（要么成功，要么失败）触发。

fr.onabort
处理abort事件。该事件在读取操作被中断时触发。

fr.onprogress
>处理progress事件。该事件在读取Blob时触发。

预览并上传的图片 | 文本内容
>
    <input type="file" name='file' id="file">
    <input type="file" accept="image/*" name='file' id="file">
    <input type="file" accept="txt/*" name='file' id="file">


    document.querySelector('#file').addEventListener('change', function(e) {
      let fr = new FileReader();
      // base64
      fr.readAsDataURL(this.files[0]); //e.target.files[0]
      fr.onload = function(e) {
        console.log(e)
        let img = new Image()
        img.src = e.target.result || fr.result || this.result;
        document.body.appendChild(img)
      };

      // 使用canvas进行图片压缩
      /* fr.onload = function(e) {
        let img = new Image();
        img.src = e.target.result
        img.onload = function (){
          let canvas = document.createElement('canvas');  
          let context = canvas.getContext("2d");  
          canvas.width = img.width; // 设置canvas的画布宽度为图片宽度  
          canvas.height = img.height;  
          context.drawImage(img, 0, 0, canvas.width, canvas.height) // 在canvas上绘制图片  
          let dataUrl = canvas.toDataURL('image/jpeg', 0.9) // 0.9为压缩比，可根据需要设置，设置过小会影响图片质量
          document.body.appendChild(canvas)
        } 
      };*/

      //blob
      /* fr.readAsArrayBuffer(this.files[0]);
      fr.onload=function(e){
        let blob = new Blob([fr.result],{type:"text/plain"});
        let img = new Image()
        img.src = URL.createObjectURL(blob); // 将file文件转换为一个URL地址
        document.body.appendChild(img)
        console.log(e)
        console.log(blob)
      } */

      // txt
      fr.readAsText(this.files[0]);
      fr.onload = function(e) {
        console.log(e)
        let div = document.createElement('div')
        div.innerHTML = e.target.result
        document.body.appendChild(div)
      };
      
    })

多图上传
>
    <input type="file" accept="image/*" multiple name='file' id="file">

    document.querySelector('#file').addEventListener('change',function (e) {
      for (var i = 0; i < e.target.files.length; i++) {
        let fr = new FileReader();
        fr.readAsDataURL(e.target.files[i]);
        fr.onload = function(e) {
          let img = new Image();
          img.src = e.target.result || fr.result || this.result;
          document.body.appendChild(img);
        };
      }
    })

## <a name="打印">打印</a>
[参考](https://www.jianshu.com/p/d19d66ef8d7e)


>
    此方法，要打印的内容要包含在id为print中,否则打印时定义的css会失效!!!
    //可能未引入原先写在head标签的css
    <div id="print">
      <table></table>
    </div>

    若这样，打印时不会加载设定的css
    <table id="print"></table>

    function startPrint() {
        // 打开一个新窗口
        const myWindow = window.open('', '标题');

        // 获取id为app内的html
        // const bodyHtml =this.$refs.print.innerHTML
        const bodyHtml = window.document.getElementById('print').innerHTML;

        // 获取head标签内的html
        let headHtml = document.head.innerHTML;
        //也可自定义head内容
        //但是原先写在head标签的css就不会引入了
        //let headHtml = "<head><meta charset='utf-8'/><title></title></head>";

        // 头中的screen换成打印样式print
        headHtml = headHtml.replace('screen', 'screen, print');
        //重新写入文档流
        let str = 
          '<html>' +
          headHtml  +
          '<body>' +
          bodyHtml +
          '<script>setTimeout(function() {window.print(); window.close();}, 500)</'+
          'script>' +
          '</body></html>'
        myWindow.document.write(str)
    }

>
    function printout() {
        //打开一个新的窗口
        let newWindow = window.open();

        // 是新窗口获得焦点  
        newWindow.focus();

        //保存写入内容  
        let newContent = "<html><head><meta charset='utf-8'/><title>打印</title></head><body>"
        newContent += document.getElementById("print").outerHTML;
        newContent += "</body></html>"

        // 将HTML代码写入新窗口中  
        newWindow.document.write(newContent);
        newWindow.print();

        // close layout stream 
        newWindow.document.close();
        //关闭打开的临时窗口
        newWindow.close();
        return false;
    };

## <a name="base64数据导出文件">base64数据导出文件，文件下载</a>
>
    downloadFile('dsd','./tets.md')
    function downloadFile(filename, data){
      let DownloadLink = document.createElement('a');
      if ( DownloadLink ){
        document.body.appendChild(DownloadLink);
        DownloadLink.style = 'display: none';
        DownloadLink.download = filename;
        DownloadLink.href = data;
        if ( document.createEvent ){
          let DownloadEvt = document.createEvent('MouseEvents');
          DownloadEvt.initEvent('click', true, false);
          DownloadLink.dispatchEvent(DownloadEvt);
        }
        else if ( document.createEventObject ){
          DownloadLink.fireEvent('onclick');
        }
        else if (typeof DownloadLink.onclick == 'function' ){
          DownloadLink.onclick();
        }
        document.body.removeChild(DownloadLink);
      }
    }

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




## <a name="判断字符串长度">判断字符串长度(英文占1个字符，中文汉字占2个字符)</a>
    
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

ASCII码由一个字节中的7位表示，范围共128个字符。而且ASCII码只能表示英文，数字和常用标点符号，编码在1-127之间。  
Unicode码可以表示所有字符，编码范围很大，能表示65000多个字符，其中汉字占40000多个。Unicode码包含ASCII码  

汉字转换为Unicode码后，其编码值都是大于127的; unicode双字节字符编码范围:\u0391-\uFFE5;    
一个汉字占两个字节，其余语言占一个字节。


## <a name="0.1+0.2">0.1+0.2!=0.3</a>
* 解决：
>
    先升幂再降幂

    使用内置的 toPrecision() 和 toFixed() 方法，注意，返回值字符串。

    Number.EPSILON(极小的常量; === Math.pow(2, -52))
        //设置“能够接受的误差范围”。
        function withinErrorMargin (left, right) {
          return Math.abs(left - right) < Number.EPSILON;
        }

        withinErrorMargin(0.1 + 0.2, 0.3) // true

* 原因：
>
    在进制转换和进阶运算的过程中出现精度损失。
    
    JavaScript 中的 number 类型就是浮点型，数字和浮点精度的处理相同，JavaScript 中的浮点数采用IEEE-754 格式的规定，这是一种二进制表示法，可以精确地表示分数，比如1/2，1/8，1/1024，每个浮点数占64位。但是，二进制浮点数表示法并不能精确的表示类似0.1这样 的简单的数字，会有舍入误差。  
    由于采用二进制，JavaScript 也不能有限表示 1/10、1/2 等这样的分数。在二进制中，1/10(0.1)被表示为0.00110011001100110011…… 注意 0011 是无限重复的，这是舍入误差造成的，所以对于 0.1 + 0.2 这样的运算，操作数会先被转成二进制，然后再计算：  
    0.1 => 0.0001 1001 1001 1001…（无限循环）  
    0.2 => 0.0011 0011 0011 0011…（无限循环）  
    双精度浮点数的小数部分最多支持 52 位，所以两者相加之后得到这么一串 0.0100110011001100110011001100110011001100...因浮点数小数位的限制而截断的二进制数字，这时候，再把它转换为十进制，就成了 0.30000000000000004。


## <a name="移动端点透问题">移动端点透问题(click 300ms延迟) </a>
https://codepen.io/chenzong24635/pen/jROWmM

https://juejin.im/post/5ce764a2f265da1b8c19645a

在移动端开发中，有时会出现click点透的问题

touch触摸事件
>
    touchstart：手指触摸到屏幕会触发
    touchmove：当手指在屏幕上移动时，会触发
    touchend：当手指离开屏幕时，会触发
    touchcancel：可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件

 

tap触碰事件
>
    一般用于代替click事件

    tap: 手指碰一下屏幕会触发
    longTap: 手指长按屏幕会触发
    singleTap: 手指碰一下屏幕会触发
    doubleTap: 手指双击屏幕会触发

A是遮罩层，B是正常的DOM，C是B上的某个元素，是个链接。场景是点击A的时候A消失，结果点到了C，页面发生了跳转，

#### 点透的出现场景：
1. A/B两个层上下z轴重叠。
2. 上层的A点击后消失或移开。（这一点很重要）
3. B元素本身有默认click事件（如a标签） 或 B绑定了click事件。
在以上情况下，点击A/B重叠的部分，就会出现点透的现象。

#### 为什么会出现点透
 click延迟

在移动端不使用click而用touch事件代替触摸是因为click事件有着明显的延迟，具体touchstart与click的区别如下：

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

2. 
   对于B元素本身存在默认click事件的情况,应及时取消A元素的默认点击事件，从而阻止click事件的产生。因为 触发事件顺序：touchstart 早于 touchend 早于 click
>
    document.querySelector('#A').addEventListener('touchend', function(event) {
      event.preventDefault();
    })

3. 
A 300ms延迟消失
>
    let A = document.querySelector('#A')
    A.addEventListener('touchend', function(event) {
      let timer = setTimeout(() => {
        A.style.display = 'none'
      }, 300)
    })

4. 
fastclick库地址 ：https://github.com/ftlabs/fastclick
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

## <a name="随机6个数字">随机6个数字 </a>
Math.floor(Math.random() * 999999)  

Math.random().toString().slice(-6) / 1  

Math.random().toFixed(6).slice(-6) / 1

## <a name="范围内随机数，包括两个数在内">范围内随机数</a>
>
    const number =(min, max) => Math.random() * (max - min) + min

## <a name="数字千分位">数字千分位 </a>
1. toLocaleString()
>   
    var a = 123456;
    a.toLocaleString() //'123,456'

2. reg
>

    function thousandth (num) {
      return num && num
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        //.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
    }
    //$&  表示整个被匹配的字符串

    //做多只支持 小数点后两位
    thousandth(16623.67864)//"16,623.67,864" ???
    thousandth(1662367864) //"1,662,367,864" 


3. reduce
>
    function thousandth(num) {//12345678
      var str = num + '';
      str = str.split("").reverse()
      // ["8", "7", "6", "5", "4", "3", "2", "1"]
      return str.reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev;
      })
    }

4. for
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

4. for
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

## <a name="类数组转化为数组">类数组转化为数组</a>
>
    
    [].slice.call(arguments) | Array.prototype.slice.call(arguments)  
    Array.from(arguments)  
    [...arguments]


## <a name="判断是否回文、实现回文">判断是否回文、实现回文</a>
* 判断是否回文
>
    function isPalindrome(line) {  
    line += "";//转为字符串
    line=line.replace(/\W/g, '').toLowerCase();   //替换非单词字符串，转换为小写  
    return line === line.split("").reverse().join("");  
    }

* 实现回文
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

## <a name="实现f(a)(b)与f(a,b)一样的效果">实现f(a)(b)与f(a,b)一样的效果</a>

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

## <a name="无限累加的函数 add">实现一个无限累加的函数add(1)(2)(3)...</a>

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



## <a name="数组无序排列">数组无序排列</a>
arr.sort(()=>Math.random() - 0.5)

arr.sort((a-b)=>a-b) 升序  
arr.sort((a-b)=>b-a) 降序
>
    如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。


## <a name="数组扁平化">数组扁平化:n维数组展开成一维数组  </a>
var arr = [1, [2, 3], ['4', 5, ['6',7,[8]]], [9], 10]; 

* flatten
>
    foo.flat(Infinity) // Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。

* reduce + flatten
>
    function flatten(arr){
      return arr.reduce((prev,now)=>{
        return prev.concat(Array.isArray(now) ? fun2(now) : now)
      },[])
    }
    // flatten = (ary) => ary.reduce((pre, now) => pre.concat(Array.isArray(now) ? flatten(now) : now), []);

* toString | join + split
>
    arr.join().split(",") 
    arr.toString().split(",") 
    //返回的内容都是字符串，arr.toString().split(",").map(Number)
    // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

* 
>
    flatten= (arr)=>Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
    flatten(foo); // [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

* for 
>
    function flatten(arr) {
      let res = []
      for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
          res = res.concat(flatted(arr[i]))
        } else {
          res.push(arr[i])
        }
      }
      return res
    }

## <a name="数组去重">数组去重</a>
[JS高性能数组去重](https://www.cnblogs.com/wisewrong/p/9642264.html)

* Set
>
    [...new Set([2,3,4,4,5,2,3,6])]        --> [2,3,4,5,6]  
    Array.from(new Set([2,3,4,4,5,2,3,6])) --> [2,3,4,5,6]  

* filter + indexOf
>
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(item,index,self){
      return self.indexOf(item) === index;
    });
    console.log(arr2);

* 
> includes
    function unique(arr) {
        const newArray = [];
        arr.forEach(item => {
            if (!newArray.includes(item)) {
                newArray.push(item);
            }
        });
        return newArray;
    }
    var array = [2,3,4,4,5,2,3,6];
    unique(array);


*  for...of + Object 利用对象的key不会重复的特性
>
    var arr = [2,3,4,4,5,2,3,6];
    var obj = {}; //重复次数
    var arr2 = []; //去重后的数组
    for(var i = 0 ;i< arr.length;i++){
      if( !obj[arr[i]] ){
          obj[arr[i]] = 1;
          arr2.push(arr[i]);
      } else {
        obj[arr[i]]++
      }
    }
    console.log(arr2);

## 数组扁平化+去重: Array.from(new Set(arr.flat(Infinity)))

## <a name="数组排序"> 数组排序</a>
[排序](/details/sort.md)

## <a name="n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
1 1 2 3 5 8 13....
>
    //获取第n个斐波那契数列
    function factorial(n, total=1) {
      if (n <= 1) return total;
      return factorial(n - 1, n * total);
    }
    factorial(5) // 120

## <a name="斐波那契数列">斐波那契数列</a>
F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
>
    //正常递归版 -- 存在大量的重复计算
    function fib(n){
      if(n==0)return 0
      else if(n==1)return 1
      else return fib(n-1) + fib(n-2)
    }
    //去除重复计算版
    function fib(n){
      function fib_(n, a = 0, b = 1){
        if(n==0) return a
        else return fib_(n-1, b, a + b)
      }
      return fib_(n)
    }

* 计算斐波那列数（js语言精粹
>
    var  arr=[0,1];
    var m=0;//计算运行次数
    function fib(n){
        var result=arr[n];
        if(typeof arr[n]!=='number'){
          m++;
          result=fib(n-1)+fib(n-2);
          arr[n]=result;
        }
        return result
      }
    console.log(fib(7),m);

* 输出n个fib数
1. 
>
    var arr = []
    function fib(n){
      function fib_(n, a = 0, b = 1){
        if(n === 0)return a
        return arr.push(b),fib_(n-1, b, a + b)
      }
      return fib_(n)
    }
    console.log(fib(33))
    console.log(arr)

2.
> 
    const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);console.log(fibonacci(80000))


##  <a name="自动触发onclick事件">自动触发onclick事件</a>
    if(document.all) { // IE
      document.getElementById("clickMe").click();
    }
    else { // 其它
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      document.getElementById("clickMe").dispatchEvent(e);
    }

## <a name="unicode转中文">unicode转中文</a>
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

## <a name="取消选择，防止复制，禁止剪切、粘贴">取消选择，防止复制，禁止剪切、粘贴</a>
取消选择 obj.onselectstart = () => return false  
    CSS: -moz-user-select:none  仅对FF有效

禁止右键 document.oncontextmenu= () =>  false  
禁止复制 document.oncopy= () =>  false  
禁止粘贴 document.onpaste= () =>  false  
禁止剪切 document.oncut= () =>  false  


>

    ['selectstart', 'contextmenu', 'copy', 'paste' ,'cut'].forEach(function(ev){
        document.addEventListener(ev, function(e){
          let event = e || window.event;
          return event.preventDefault ? event.preventDefault() : event.returnValue = false;
        })
    })

>


## <a name="网页是否可编辑">网页是否可编辑</a>
网页最后编辑时间：  document.lastModified  

控制、查看网页是否可编辑  
document.body.contentEditable=true | false  控制当前文档是否可编辑 ，权限比designMode高
document.body.isContentEditable //查看

document.designMode='on'  | 'off'  控制当前文档是否可编辑 
document.designMode // 查看

## <a name="逗号操作符">逗号操作符</a>

 对它的每个操作对象求值（从左至右），返回最后一个操作对象的值
 >
    var f = (function f(){ return '1'; }, function g(){ return 2; })();
    console.log(f) //2

## <a name="一道setTimeout面试题">一道setTimeout面试题</a>
https://zhuanlan.zhihu.com/p/25407758

## <a name="map(parseInt) 原理解析">['1','2','3'].map(parseInt) 原理解析</a>
https://juejin.im/post/5c6fab02e51d453eb7801914
https://www.zhihu.com/question/267702014

>

    var new_array = arr.map(function callback(currentValue[, index[, array]]) { 
      // Return element for new_array 
    }[, thisArg])

这个 callback 一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。

而 parseInt 则是用来解析字符串的，使字符串成为指定基数的整数。

parseInt(string, radix)接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。

parseInt('1', 0)  //radix 为 0 时，且 string 参数不以“0x”和“0”开头时，按照 10 为基数处理。这个时候返回 1；

parseInt('2', 1)  // 基数为 1（1 进制）表示的数中，最大值小于 2，所以无法解析，返回 NaN；

parseInt('3', 2)  // 基数为 2（2 进制）表示的数中，最大值小于 3，所以无法解析，返回 NaN。

map 函数返回的是一个数组，所以最后结果为 [1, NaN, NaN]。



## <a name="比较两个对象是否相等">比较两个对象是否相等</a>
[链接](https://segmentfault.com/a/1190000008187911)

>
JSON.stringify()

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



## <a name="Array.apply(null,Array(3))与Array(3)区别">Array.apply(null,Array(3))与Array(3)区别</a>
https://www.jianshu.com/p/6c7d0b18d4ca

>

    Array.apply(null, Array(3)) | Array.apply(null, { length: 3 })
    实际上等同于Array.apply(null,[undefined,undefined,undefined]),也就等同于Array(undefined,undefined,undefined)
    // 结果 [undefined, undefined, undefined]

    Array(3) //是一个只有length,没有元素和索引的空数组
    //结果 [empty × 3] // [,,]

>  如何设为[0,0,0...]

    Array.apply(null, Array(n)).map(()=>0) // n个0 [0,0,0,....]
    Array.apply(null, {length: n}).map(()=>0)
    ES6方法：new Array(n).fill(0)


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


### 通过css3来制作进度条小动画
![loading](img/loading.png)

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


###  根据当前页面加载图片数/页面所有图片数 实现加载进度条
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

###  根据文件加载顺序来 实现加载进度条
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

___

## <a name="vue实现数字动态翻牌的效果">vue实现数字动态翻牌的效果</a>
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

## <a name=""></a>


# <a name="面试题">**面试题**</a>
[Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md?tdsourcetag=s_pctim_aiomsg)

[前端基础面试题(JS部分)](https://zhuanlan.zhihu.com/p/28428367) <!-- 1 -->

[前端进阶系列](https://github.com/yygmind/blog)

[web前端大厂10道经典面试题汇总](https://zhuanlan.zhihu.com/p/57200821)

https://github.com/yygmind/blog 

https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-InterviewPreparation.md#chapter-two-one

https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers

https://github.com/qiu-deqing/FE-interview

https://github.com/foru17/front-end-collect


### 定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换模板内标记 
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

### 
>
    function Foo() {
        getName = function () {
            console.log(1);
        }
        return this;
    }
    Foo.getName = function () {
        console.log(2)
    }
    Foo.prototype.getName = function () {
        console.log(3)
    }
    var getName = function () {
        console.log(4)
    }
    function getName() {
        console.log(5)
    }
    Foo.getName();
    getName();
    Foo().getName();
    getName();
    new Foo.getName();
    new Foo().getName();
    new new Foo().getName()

上面的代码编译后如下(函数声明的优先级先于变量声明):
>
    function Foo(){
        getName = function () { console.log(1); };//赋值语句，全局方法
        return this;
    }
    function getName() {console.log(5)}; //全局函数(函数首先被提升)
    var getName //变量重复声明， 忽略
    Foo.getName = function () { console.log(2);};//静态方法
    Foo.prototype.getName = function () { console.log(3);};//原型方法
    getName = function () {console.log(4);};//getName重新赋值


解析：
>

    Foo.getName();  //2 
      Foo函数上存储的静态方法 

    getName();  //4   
      函数表达式不提升，getName重新赋值

    Foo().getName(); // 1  
      先执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数.Foo函数返回的是window对象，相当于执行 window.getName() ，而window中的getName已经被修改为console.log(1)，所以最终会输出1

    getName();// 1
      直接调用getName函数，相当于 window.getName() ,因为这个变量已经被Foo函数执行时修改了，遂结果与第三问相同，为1

    new Foo.getName();//2  
      考察的是js的运算符优先级问题 ，new 无参数列表，对应的优先级是18；成员访问操作符(.) , 对应的优先级是19。.优先级大于new，相当于new (Foo.getName)();
      （https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence）

    new Foo().getName();  //3 
      new 带参数列表，对应的优先级是19，和成员访问操作符.优先级相同。同级运算符，按照从左到右的顺序依次计算。new Foo()先初始化 Foo 的实例化对象，实例上没有getName方法，因此需要原型上去找，即找到了 Foo.prototype.getName，

    new new Foo().getName();// 3  
      new 带参数列表，优先级19，因此相当于是 new (new Foo()).getName()；先初始化 Foo 的实例化对象，然后将其原型上的 getName 函数作为构造函数再次 new ，相当于 new ((new Foo()).getName)();
      


