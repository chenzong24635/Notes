# vscode 快捷键

<details>
  <summary>展开/收缩</summary>

[vscode快捷键](chrome-extension://cdonnmffkdaoajfknoeeecmchibpmkmg/static/pdf/web/viewer.html?file=https%3A%2F%2Fcode.visualstudio.com%2Fshortcuts%2Fkeyboard-shortcuts-windows.pdf)

删除空行：
  ctrl+h键进行正则匹配：^\s*(?=\r?$)\n

格式化代码： Shift + Alt + F

多行光标：Shift + Alt + 鼠标左键

跳到某行： Ctrl+ G 然后在弹出的框中输入行数就可以了
</details>

# markdown 语法

<details >
  <summary>markdown 语法</summary>

  [Markdown 语法说明](https://www.appinn.com/markdown/)

  ## 代码折叠、展开
  <details open>
    <summary>展开/收缩</summary>
    测试内容,open：展开  
    IE不支持
  </details>

  ## 文章中添加代码
  1. 使用反引号  
  `<a>我是代码</a>`
  2. 使用制表符或者至少4个空格进行缩进的行  
  >
      <a>我是代码</a>


  ## 换行
  两长段落之间没有空行 ，如何换行
  >
      段落末尾空两格 （space + space）

  ## 表格
  | Tables       | Are       | Cool |
  |:-------------|:---------:|----:|
  | 靠左对齐   | 居中对齐  | 靠右对齐     |
  | 书写时     | 原始文字  |  可以不用对整齐 |
  *斜体*      | **加粗**     | `渲染效果`

  >
      冒号: 在第二行中不同的位置表示对齐方式，在无冒号：的情况下默认靠左对齐
      标题元件(表头)至少需要3个---来分隔
      最外面的竖线|可以省略，书写的时候也可以不必需让原始的文字对得很整齐

  ## 强调——粗体和斜体

  *斜体*      _斜体_  
  **粗体** __粗体__  
  ~~删除线~~  
  \*加入反斜线以显示星号\* 



  ## 链接
  1. aa<a.com>aa

  2. [链接文字](链接地址)

</details>


---


# 常用网站：论坛、社区、博客、网站、手册
<details open>
  <summary>
  展开/收缩
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

  [Can I Use-兼容性查询](https://caniuse.com/#home)

  [MDN](https://developer.mozilla.org/zh-CN/)

  [W3CSchool](https://www.w3cschool.cn/)

  [手册网](http://www.shouce.ren/)

  [印记中文](https://www.docschina.org/)

`UI框架:`

[Bootstrap](http://www.bootcss.com/)

[vux](https://doc.vux.li/zh-CN/)

[mint-ui](http://mint-ui.github.io/docs/#/)

[Element](http://element-cn.eleme.io/#/zh-CN/component/installation)

[jqweui](http://jqweui.com/components)

[WeUI ](https://weui.io/)

`图标、图片`：

  [icomoon](https://icomoon.io/)

  [icon-阿里巴巴](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

  [font-awesome](https://www.thinkcmf.com/font/search.html)

  [Squoosh图片压缩](https://squoosh.app/)
  
</details>


**前端页面由哪三层构成：结构层、表示层、行为层。**

## [HTML](HTML.md)
## [CSS](CSS.md)
## [JS](JS.md) 

  * [Undefined、Null](./details/Undefined_Null.md)
  * [Boolean](./details/Boolean.md)
  * [Number](./details/Number.md)
  * [String](./details/String.md)
  * [Symbol](./details/Symbol.md)
  * [Object](./details/Object.md)
    * [Array](./details/Array.md)
    * [Math](./details/Math.md)
    * [Date](./details/Date.md)
    * [Function??](./details/Function.md)
  * --
  * [JS遍历方法](./details/Iterate.md) 
  * [JS兼容](./details/compatible.md)
  * [JS排序？？](./details/sort.md)
  * [JQ](./details/jq.md)

## [TypeScript](TS.md)
## [正则](./details/reg.md)
## [AJAX](./details/Ajax.md)
## [跨域](./details/crossOrigin.md)
## [HTTP](HTTP.md)  

## [Vue](Vue.md)
## [Vuex](./details/vuex.md)
## [小程序??](Applet.md)
## [WebSocket??](./details/WebSocket.md)


## [Git](git.md)
## [console.log](./details/consolelog.md)

## [vscode快捷键](vscode.md)

## [其他](others.md)

# 目录
<details open>
  <summary>
  <a href="#常用">**`常用`**</a>
  </summary>

  * <a href="#手机号验证">手机号验证</a>
  * <a href="#邮箱验证">邮箱验证</a>
  * <a href="#密码验证">密码验证</a>
  * <a href="#保留小数点后两位-不足则补零">保留小数点后两位-不足则补零</a>
  * <a href="#浮点型+-*/">浮点型+-*/</a>
  * <a href="#时间戳、日期 的转换">时间戳、日期 的转换</a>
  * <a href="#浏览器判断">浏览器、手机类型判断navigator.userAgent</a>
  * <a href="#获取当前页面url网址信息">获取当前页面url网址信息</a>
  * <a href="#图片转base64">图片转base64</a>
  * <a href="#base64数据导出文件">base64数据导出文件，文件下载</a>
  * <a href="#判断字符串长度">判断字符串长度</a>
  * <a href="#0.1+0.2">0.1+0.2!=0.3 原因，解决</a>
  * <a href="#移动端点透问题">移动端点透问题(click 300ms延迟)</a>
  * <a href="#随机字符串">随机字符串</a>
  * <a href="#随机6个数字">随机6个数字</a>
  * <a href="#范围内随机数，包括两个数在内">范围内随机数</a>
  * <a href="#数字千分位">数字千分位</a>
  * <a href="#统计字符串中同一字符出现次数">统计字符串中同一字符出现次数</a>
  * <a href="#类数组转化为数组">类数组转化为数组</a>
  * <a href="#判断是否回文、实现回文">判断是否回文、实现回文</a>
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


  * <a href="#两位大整数相加">两位大整数相加</a>
  * <a href="#一道setTimeout面试题">一道setTimeout面试题</a>
  * <a href="#map(parseInt) 原理解析">['1','2','3'].map(parseInt) 原理解析</a>
  * <a href="#Array.apply(null,Array(3))与Array(3)区别">Array.apply(null,Array(3))与Array(3)区别</a>


  * <a href="#页面加载进度条">页面加载进度条</a>
  
  <a href="#"></a>
  <a href="#"></a>

  * <a href="#面试题">**面试题**</a>

  <a href="#"></a>

</details>


# <a name="常用">**常用**</a>

## <a name="手机号验证">手机号验证</a>
>
    function isPhone(tel) {
      tel = tel + '';
      if(tel.match(/^1[0-9]{10}$/gi)) return true;
      return false;
    }

## <a name="邮箱验证">邮箱验证</a>
>
    function isEmail(val) {
      let reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
      let  res=reg.test(val);
      if (res) return true;
      return false;
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
      try {
        r1 = arg1.toString().split('.')[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split('.')[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      return ((arg1 * m + arg2 * m) / m).toFixed(2);
      //减
      //return ((arg1 * m - arg2 * m) / m).toFixed(2);
    }


* 乘
>
    function mul(a, b) {
      var c = 0,
          d = a.toString(),
          e = b.toString();
      try {
        c += d.split('.')[1].length;
      } catch (err) {}
      try {
        c += e.split('.')[1].length;
      } catch (err) {}
      return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c);
    }

* 除
>
    function div(a, b) {
      var c, d, e = 0, f = 0;
      try {
        e = a.toString().split('.')[1].length;
      } catch (err) {}
      try {
        f = b.toString().split('.')[1].length;
      } catch (err) {}
      c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), mul(c / d, Math.pow(10, f - e));
      return c
    }

## <a name="倒计时">倒计时</a>
>
    function countdown(endTime){
      //月份默认30天
      //年份默认365天
      const s = 1000; //秒
      const m = 60 * s; // 分
      const h = 60 * m; // 时
      const D = 24 * h; // 天
      const M = 30 * D; // 月
      const Y = 365 * D; // 年
      endTime = + new Date(endTime);
      let now = + new Date();
      let time = endTime- now;
      const years = (Math.floor(time / Y) + '').padStart(2,0);
      const months = (Math.floor(time % Y / M) + '').padStart(2,0);
      const days = (Math.floor(time % M / D) + '').padStart(2,0);
      const hours = (Math.floor(time % D / h) + '').padStart(2,0);
      const minutes = (Math.floor(time % h / m) + '').padStart(2,0);
      const seconds = (Math.floor(time % m / s) + '').padStart(2,0);
      const milliseconds = (Math.floor(time % s) + '').padStart(3,0);
      let str = (years + '' === '00' ? '': years + '年')
              + (months + '' === '00' ? '': months + '月')
              + (days + '' === '00' ? '': days + '天')
              + (hours + '' === '00' ? '' :  hours + '时')
              + (minutes + '' === '00' ?'' :  minutes + '分')
              + (seconds + '' === '00' ? '' :  seconds + '秒') 
              // + (milliseconds + '' === '000'  ? '毫秒' :  milliseconds) 
      // let str = days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
      return str
    }


## <a name="时间戳、日期 的转换">时间戳、日期 的转换</a>
* [new Date()](https://www.runoob.com/jsref/jsref-obj-date.html)
>
    new Date()

    new Date(milliseconds)
      new Date(1568093648697)

    new Date(dateString) 
      new Date("October 13, 1975 11:13:00")

    new Date(year, month, day, hours, minutes, seconds, milliseconds)
      new Date(79,5,24,11,33,0)//

>


    new Date().getFullYear(); //获取完整的年份(4位,1970-????)  -- 2019
        
    new Date().getMonth(); //获取当前月份(0-11,0代表1月) -- 8

    new Date().getDate(); //获取当前日(1-31)   -- 18

    new Date().getDay(); //获取当前星期X(0-6,0代表星期天)  -- 3

    new Date().getTime(); //获取当前时间(从1970.1.1开始的毫秒数)  -- 1568778089633

    new Date().getHours(); //获取当前小时数(0-23)  -- 11

    new Date().getMinutes(); //获取当前分钟数(0-59)  -- 45

    new Date().getSeconds(); //获取当前秒数(0-59)  -- 30

    new Date().getMilliseconds(); //获取当前毫秒数(0-999)  -- 123

    new Date().toLocaleDateString(); //获取当前日期 - 本地时间格式 -- 2019/9/18

    new Date().toLocaleTimeString(); //获取当前时间 - 本地时间格式 -- 2019/9/18 上午11:47:06

    new Date().toLocaleString( ); //获取日期与时间 - 本地时间格式 -- 上午11:41:29
      上午11:41:29

    new Date().valueOf( ); //原始值, 获取当前时间(从1970.1.1开始的毫秒数) 等同于getTime() -- 1568778089633

* 日期 --> 时间戳
>
    let date = new Date('2014-04-23 18:55:49:123')
    // 有三种方式获取
    let time1 = date.getTime();   //--精确到毫秒
    let time2 = date.valueOf();   //--精确到毫秒
    let time3 = Date.parse(date); //--精确到秒

    console.log(time1);//1398250549123  
    console.log(time2);//1398250549123  
    console.log(time3);//1398250549000

* 时间戳 --> 日期
>
    function timestampToTime(timestamp) { //时间戳 转 时间
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      if ((timestamp + '').length === 10) {
        timestamp *= 1000;
      }
      timestamp = timestamp / 1;
      let date = new Date(timestamp);
      let Y = date.getFullYear();
      // let M = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
      let M = (date.getMonth() + 1 + '').padStart(2,0);
      let D = (date.getDate() + '').padStart(2,0);
      let h = (date.getHours() + '').padStart(2,0);
      let m = (date.getMinutes() + '').padStart(2,0);
      let s = (date.getSeconds() + '').padStart(2,0);
      let ms = (date.getMilliseconds() + '').padStart(3,0);
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s + ':' + ms;
    }
    console.log(timestampToTime(+new Date()))

* 把日期格式化为指定格式
>
    function format(date, fmt) {
      date = new Date(date)
      var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
      };

      if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      for(let k in o){
        if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
        }       
      }

      return fmt;
    }

    console.log(
      format(new Date(44222222222),"yyyy年MM月"),
      format(new Date(),"yyyy年MM月dd日"),
      format(new Date(2179,5,24,11,33,0),"yyyy/MM/dd hh:mm:ss")
    )


* 时间戳 --> 距当前时间 多久
>

    function formatMsgTime(timestamp) {
      if (!timestamp) return ''
      if ((timestamp + '').length === 10) {
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        timestamp *= 1000;
      }
      timestamp = timestamp / 1;
      let s = 1000 // 秒
      let m = 60 * s // 分
      let h = 60 * m // 时
      let D = 24 * h // 天
      // let W = 7 * D // 周
      let M = 30 * D // 月
      let Y = 365 * M // 年 

      let time = new Date().getTime() - new Date(timestamp).getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
      if (time < 0) {
          return ''
      } else if ((time / 1000 < 10)) {
          return '刚刚'
      } else if (time / s < 60) {
          return parseInt((time / s)) + '秒前'
      } else if ((time / m) < 60) {
          return parseInt((time / m)) + '分钟前'
      } else if ((time / h) < 24) {
          return parseInt(time / h) + '小时前'
      } else if ((time / D) < 30) {
          return parseInt(time / D) + '天前'
      } else if ((time / M) < 12) {
          return parseInt(time / M) + '月前'
      } else {
          return parseInt(time / Y) + '年前'
      }
      return 'error';
    }
    console.log(formatMsgTime(+new Date('2019 4 5') ))

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


## <a name="图片转base64">图片转base64</a>
>
    getBase64(
      "http://pt.baicaitianzun.cn/20190925142975943"
    );
    function getBase64(imgUrl) {
      window.URL = window.URL || window.webkitURL;
      var xhr = new XMLHttpRequest();
      xhr.open("get", imgUrl, true);
      // 至关重要
      xhr.responseType = "blob";
      xhr.onload = function() {
        if (this.status == 200) {
          //得到一个blob对象
          var blob = this.response;
          console.log("blob", blob);
          // 至关重要
          let oFileReader = new FileReader();
          oFileReader.onloadend = function(e) {
            let base64 = e.target.result;
            console.log("base64:--->", base64);
          };
          oFileReader.readAsDataURL(blob);
          //====为了在页面显示图片，可以删除====
          var img = document.createElement("img");
          img.onload = function(e) {
            window.URL.revokeObjectURL(img.src); // 清除释放
          };
          img.src = window.URL.createObjectURL(blob)
          document.documentElement.appendChild(img);
          //====为了在页面显示图片，可以删除====
        }
      };
      xhr.send();
    }

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
var foo = [1, [2, 3], ['4', 5, ['6',7,[8]]], [9], 10]; 

0. 
>
    foo.flat(Infinity) // Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。
1. 
>
    const flatten = (ary) => ary.reduce((pre, now) => pre.concat(Array.isArray(now) ? flatten(now) : now), []);

    flatten(foo); // [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

2. 
>
    function flatten(arr){
      var arr1 =[].concat(...arr);
      return arr1.some(item =>Array.isArray(item))?func(arr1):arr1
    }

3. 
>
    flatten= (arr)=>Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
    flatten(foo); // [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

4. 
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

1. Set
>
    [...new Set([1,2,2,3,4,1])]        --> [1,2,3,4]  
    Array.from(new Set([1,2,2,3,4,1])) --> [1,2,3,4]  

2. filter + indexOf
>
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(item,index,self){
      return self.indexOf(item) === index;
    });
    console.log(arr2);

3.  for...of + Object 利用对象的key不会重复的特性
>
    var arr = [0,2,3,4,4,0,2];
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
1. 冒泡排序： 每次将最小元素推至最前
>
    function bubble(arr) {
      if(arr.length <= 1)return arr
      let n = 0; //计算循环次数
      let len = arr.length;
      for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - i - 1; j++) {
          if (arr[j] > arr[j + 1]) { //相邻元素两两对比
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            n++;
          }
        }
      }
      return {arr, n};
    }

2. 快速排序：
>
    var quickSort = function(arr) {
      if (arr.length <= 1) { return arr; }
      //选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集
      var pivotIndex = Math.floor(arr.length / 2);
      var pivot = arr.splice(pivotIndex, 1)[0];
      var left = [];
      var right = [];
      //开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
      for (var i = 0, len = arr.length; i < len; i++){
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      //用递归不断重复这个过程，就可以得到排序后的数组。
    　return quickSort(left).concat([pivot], quickSort(right));
    };

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
      function fib_(n,a,b){
          if(n==0)  return a
          else return fib_(n-1,b,a+b)
      }
      return fib_(n,0,1)
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
      function fib_(n, a, b){
        if(n === 0) {
          return a
        } else {
          arr.push(b)
          return fib_(n-1, b, a+b)
        }
      }
      return fib_(n, 0, 1)
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

# <a name="面试题">**面试题**</a>

[前端基础面试题(JS部分)](https://zhuanlan.zhihu.com/p/28428367) <!-- 1 -->

[前端进阶系列](https://github.com/yygmind/blog)

[web前端大厂10道经典面试题汇总](https://zhuanlan.zhihu.com/p/57200821)

https://github.com/yygmind/blog 

https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-InterviewPreparation.md#chapter-two-one

https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers

https://github.com/qiu-deqing/FE-interview

https://github.com/foru17/front-end-collect


# 定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换模板内标记 
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

## 
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
      


