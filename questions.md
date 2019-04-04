**前端页面由哪三层构成：结构层、表示层、行为层。**

## [HTML](HTML.md)
## [CSS](css.md)
## [JS](js.md)
## [AJAX](Ajax.md)
## [Vue](vue.md)
## [小程序](Applet.md)

## [HTTP](HTTP.md)
## [JS兼容](compatible.md)
## [遍历方法](Iterate.md)
## [正则](reg.md)

## [Git](git.md)
## [console.log](consolelog.md)

## [vscode快捷键](vscode.md)


# 论坛、社区、博客、网站

[前端导航网](http://jsdig.com/) 网站收集

[CSDN](https://www.csdn.net/)

[开源中国](https://www.oschina.net/)

[掘金](https://juejin.im/timeline)

[SegmentFault](https://segmentfault.com/) 、
[stackoverflow](https://stackoverflow.com/) 技术问答

[w3cplus-大漠](https://www.w3cplus.com/)

[张鑫旭](https://www.zhangxinxu.com/)

[技术胖](https://jspang.com/)

[廖雪峰](https://www.liaoxuefeng.com/)



[Can I Use](https://caniuse.com/#home) 兼容性查询

[W3CSchool](https://www.w3cschool.cn/)

[手册网](http://www.shouce.ren/)

[印记中文](https://www.docschina.org/)

[前端工具集](https://github.com/nieweidong/fetool)

[icomoon](https://icomoon.io/)

[icon-阿里巴巴](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)


[]()


#
 <a href="#常用">**常用**</a>

* <a href="#浏览器判断">浏览器判断navigator.userAgent</a>
* <a href="#获取当前页面url网址信息">获取当前页面url网址信息</a>
* <a href="#0.1+0.2">0.1+0.2!=0.3</a>
* <a href="#移动端点透问题">移动端点透问题(click 300ms延迟)</a>
* <a href="#随机字符串">随机字符串</a>
* <a href="#随机6个数字">随机6个数字</a>
* <a href="#范围内随机数，包括两个数在内">范围内随机数，包括两个数在内</a>
* <a href="#统计字符串中同一字符出现次数">统计字符串中同一字符出现次数</a>
* <a href="#argruments对象转换成数组">argruments对象转换成数组</a>
* <a href="#判断是否回文、实现回文">判断是否回文、实现回文</a>
* <a href="#实现f(a)(b)与f(a,b)一样的效果">实现f(a)(b)与f(a,b)一样的效果</a>
* <a href="#数组无序排列">数组无序排列</a>
* <a href="#数组扁平化:n维数组展开成一维数组">数组扁平化:n维数组展开成一维数组</a>
* <a href="#数组去重">数组去重</a>
* <a href="#数组排序">数组排序</a>
* <a href="#n的阶层（尾调用优化）">n的阶层（尾调用优化）</a>
* <a href="#斐波那契数列">斐波那契数列</a>


* <a href="#unicode转中文">unicode转中文</a>
* <a href="#取消选择，防止复制，禁止剪切、粘贴">取消选择，防止复制，禁止剪切、粘贴</a>
* <a href="#网页是否可编辑">网页是否可编辑</a>
* <a href="#逗号操作符">逗号操作符</a>



<a href="#题">题</a>

* <a href="#map(parseInt) 原理解析">['1','2','3'].map(parseInt) 原理解析</a>





# <a name="常用">**常用**</a>

## <a name="浏览器判断">浏览器判断navigator.userAgent</a>
使用navigator.userAgent属性 PC端、手机端、iPad判断 ，ie、火狐、其他浏览器判断， 微信浏览器判断， Android、IOS判断

* navigator为Window对象的一个属性，指向了一个包含浏览器相关信息的对象。
常用到的属性：
1. navigator.appVersion 浏览器的平台和版本信息
2. navigator.appName 浏览器的名称 
3. navigator.language 浏览器使用的语言 
4. navigator.platform 浏览器操作系统平台 
5. navigator.userAgent 浏览器的user-agent信息,客户机发送服务器的user-agent 头部的值


* PC端、手机端、iPad
    if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      console.log("手机端");
    } else if (/iPad/i.test(navigator.userAgent)) {
      console.log("iPad");
    } else {
      console.log("PC")
    }

* 微信内置浏览器
    if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger") {
      console.log("微信")
    } else { 
      console.log("非微信")
    } 

* IE 、火狐、其他
    if (navigator.userAgent.toLowerCase().indexOf("firefox") >=0) { // 若-1为其他，否则火狐
      console.log("firefox");
    } else if(window.addEventListener){
        console.log("not ie、not firefox");
    }else if(window.attachEvent){
      console.log("ie");
    }

* Android、IOS
    if(/android/i.test(navigator.userAgent)){
      console.log("Android");
    } else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
      console.log("iOS");
    }

## <a name="获取当前页面url网址信息">获取当前页面url网址信息</a>

#### window.location.href(设置或获取整个 URL 为字符串)

    var test = window.location.href;
    alert(test);
    返回：http://i.cnblogs.com/EditPosts.aspx?opt=1

#### window.location.protocol(设置或获取 URL 的协议部分)

    var test = window.location.protocol;
    alert(test);
    返回：http:

#### window.location.host(设置或获取 URL 的主机部分)

    var test = window.location.host;
    alert(test);
    返回：i.cnblogs.com

#### window.location.port(设置或获取与 URL 关联的端口号码)

    var test = window.location.port;
    alert(test);
    返回：空字符(如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符)

#### window.location.pathname(设置或获取与 URL 的路径部分（就是文件地址）)

    var test = window.location.pathname;
    alert(test);
    返回：/EditPosts.aspx

#### window.location.search(设置或获取 href 属性中跟在问号后面的部分)

    var test = window.location.search;
    alert(test);
    返回：?opt=1

#### window.location.hash(设置或获取 href 属性中在井号“##”后面的分段)

    var test = window.location.hash;
    alert(test);
    返回：空字符(因为url中没有)

#### js 获取 url 中的参数值
>

    地址链接参数
    var url = window.location.href.split("?")[1];
    var arr= url.split("&");       //将结果用&符分隔
    var a = arr[0].split("=")[1]; //参数1

##### 一、正则法

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

##### 二、split 拆分法

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

##### 三、指定取

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

##### 四、单个参数的获取方法

    function GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      if (url.indexOf("?") != -1) {  //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("=");  //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        alert(strs[1]);     //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
      }
    }


## <a name="0.1+0.2">0.1+0.2!=0.3</a>
* 解决：
>
    先升幂再降幂
    使用内置的 toPrecision() 和 toFixed() 方法，注意，返回值字符串。

* 原因：
>
    JavaScript 中的 number 类型就是浮点型，数字和浮点精度的处理相同，JavaScript 中的浮点数采用IEEE-754 格式的规定，这是一种二进制表示法，可以精确地表示分数，比如1/2，1/8，1/1024，每个浮点数占64位。但是，二进制浮点数表示法并不能精确的表示类似0.1这样 的简单的数字，会有舍入误差。
    由于采用二进制，JavaScript 也不能有限表示 1/10、1/2 等这样的分数。在二进制中，1/10(0.1)被表示为0.00110011001100110011…… 注意 0011 是无限重复的，这是舍入误差造成的，所以对于 0.1 + 0.2 这样的运算，操作数会先被转成二进制，然后再计算：
    0.1 => 0.0001 1001 1001 1001…（无限循环）
    0.2 => 0.0011 0011 0011 0011…（无限循环）
    双精度浮点数的小数部分最多支持 52 位，所以两者相加之后得到这么一串 0.0100110011001100110011001100110011001100...因浮点数小数位的限制而截断的二进制数字，这时候，再把它转换为十进制，就成了 0.30000000000000004。


## <a name="移动端点透问题">移动端点透问题(click 300ms延迟) </a>
https://codepen.io/chenzong24635/pen/jROWmM

在移动端开发中，有时会出现click点透的问题

A是遮罩层，B是正常的DOM，C是B上的某个元素，这里是链接。场景是点击A的时候A消失，结果点到了C，页面发生了跳转，

#### 点透的出现场景：
1. A/B两个层上下z轴重叠。
2. 上层的A点击后消失或移开。（这一点很重要）
3. B元素本身有默认click事件（如a标签） 或 B绑定了click事件。
在以上情况下，点击A/B重叠的部分，就会出现点透的现象。

#### 为什么会出现点透
 click延迟，延迟，还是延迟。

在移动端不使用click而用touch事件代替触摸是因为click事件有着明显的延迟，具体touchstart与click的区别如下：

1.
>
    touchstart：在这个DOM（或冒泡到这个DOM）上手指触摸开始即能立即触发
2. 
>
    click：在这个DOM（或冒泡到这个DOM）上手指触摸开始，且手指未曾在屏幕上移动（某些浏览器允许移动一个非常小的位移值），且在这个在这个dom上手指离开屏幕，且触摸和离开屏幕之间的间隔时间较短（某些浏览器不检测间隔时间，也会触发click）才能触发

    事件的触发时间按由早到晚排列为：touchstart 早于 touchend 早于 click。亦即click的触发是有延迟的，这个时间大概在300ms左右。

    由于我们在touchstart阶段就已经隐藏了罩层A，当click被触发时候，能够被点击的元素则是其下的B元素，根据click事件的触发规则：
    只有在被触发时，当前有click事件的元素显示，且在面朝用户的最前端时，才触发click事件。
    由于B绑定了click事件（或者B本身默认存在click事件），所以B的click事件被触发，产生了点透的情况。

#### 解决方案

1. 
>
    对于B元素本身没有默认click事件的情况（无a标签等），应统一使用touch事件，统一代码风格，并且由于click事件在移动端的延迟要大很多，不利于用户体验，所以关于触摸事件应尽量使用touch相关事件。

2.
   对于B元素本身存在默认click事件的情况,应及时取消A元素的默认点击事件，从而阻止click事件的产生。即应在上例的handle函数中添加代码如下：
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
1. 
Math.random().toString(36).slice(2)
>
    由于：number.toString(36) -> 0-9 a-z的字符串
    toString(radix) 方法以指定的基数返回该对象的字符串表示。
    radix-->用于数字到字符串的转换的基数(从2到36)。
    如果转换的基数大于10，则会使用字母来表示大于9的数字，比如基数为16的情况，则使用a到f的字母来表示10到15。
    如果基数没有指定，则使用 10

2. 随机生成n个字符串
>
    function a(n) {  
      let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
      let tmp = '',
          i = 0,
          l = str.length;
      for (i = 0; i < n; i++) {
        tmp += str.charAt(Math.floor(Math.random() * l));
      }
      return tmp;
    }

## <a name="随机6个数字">随机6个数字 </a>
Math.floor(Math.random() * 999999)
Math.random().toString().slice(-6) / 1
Math.random().toFixed(6).slice(-6) / 1

## <a name="范围内随机数，包括两个数在内">范围内随机数，包括两个数在内</a>
>
    const number =(min, max) => Math.random() * (max - min + 1) + min
    --->小数 
    --->整数： Math.floor(number) 

## <a name="统计字符串中同一字符出现次数">统计字符串中同一字符出现次数</a>
>
    str.split('').reduce((val, count) => (val[count]++ || (val[count] = 1), val), {});

## <a name="argruments对象转换成数组">argruments对象转换成数组</a>
>
    Array.prototype.slice.call(arguments) //  [].slice.call(arguments)
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

1. 
>
    function f(m,n){
      if (m!==undefined&&n!==undefined) { return m + n}
      else{ return function(a){  return m+a;} }
    }
2.  
>
    function f(...arg){
      if(arg.length == 2){ return arg[0]+arg[1];}
      else return function(x){ return  Number(...arg.join(''))+x}
    }

## <a name="数组无序排列">数组无序排列</a>
  arr.sort(function(){ return Math.random() - 0.5});


## <a name="数组扁平化:n维数组展开成一维数组">数组扁平化:n维数组展开成一维数组  </a>
var foo = [1, [2, 3], ['4', 5, ['6',7,[8]]], [9], 10]; 

0. foo.flat(Infinity) // Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。
1. 
>
    const flatten = (ary) => ary.reduce((pre, now) => pre.concat(Array.isArray(now) ? flatten(now) : now), []);
    flatten(foo); // [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

2. 
>
    function func(arr){
      var arr1 =[].concat(...arr);
      return arr1.some(item =>Array.isArray(item))?func(arr1):arr1
    }

3. 
>
    function flatten(a) {
      return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
    }
    flatten(foo); // [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

## <a name="数组去重">数组去重</a>
1. 
    [...new Set([1,2,2,3,4,1])]  --> [1,2,3,4]

2. 
>
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(element,index,self){
      return self.indexOf(element) === index;
    });
    console.log(arr2);

3. 
>
    var arr = [0,2,3,4,4,0,2];
    var obj = {};
    var tmp = [];
    for(var i = 0 ;i< arr.length;i++){
      if( !obj[arr[i]] ){
          obj[arr[i]] = 1;
          tmp.push(arr[i]);
      } else {obj[arr[i]]++}
    }
    console.log(tmp);

## 数组扁平化+去重: Array.from(new Set(arr.flat(Infinity)))

## <a name="数组排序"> 数组排序</a>
1. 冒泡排序： 每次将最小元素推至最前
>
    function bubble(arr) {
      if (Array.isArray(arr)) {
        if (arr.length > 1) {
          let b; 
          let n = 0; //计算循环次数
          let len = arr.length - 1
          for (i = 0; i < len; i++) {
            b = 1;
            for (j = 0; j < len - i; j++) {
              if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                b = 0;
                n++;
              }
            }
          }
          if (b) {
            return { arr, n};
          }
        }
      }
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
      for (var i = 0; i < arr.length; i++){
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
>
    function factorial(n, total=1) {
      if (n <= 1) return total;
      return factorial(n - 1, n * total);
    }
    factorial(5) // 120

## <a name="斐波那契数列">斐波那契数列</a>
>
    var arr=[];
    for(let i=0;i<10;i++){
      i<=1?arr.push(1):arr.push(arr[i-1]+arr[i-2])
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
    let arr=[1];
    function f(n,a=1,b=1) {
        arr.push(b);
        if(n<=2)return arr;
        return f(n-1,b,a+b);
    }
    f(80000)
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

禁止复制 obj.oncopy= () => return false
禁止剪切 obj.oncut= () => return false
禁止粘贴 obj.onpaste= () => return false

## <a name="网页是否可编辑">网页是否可编辑</a>
网页最后编辑时间  document.lastModified  
网页是否可编辑
document.body.contentEditable=true | false  控制当前文档是否可编辑 ，权限比designMode高
document.designMode='on'  | 'off'  控制当前文档是否可编辑 

## <a name="逗号操作符">逗号操作符</a>

 对它的每个操作对象求值（从左至右），返回最后一个操作对象的值
var f = (function f(){ return '1'; }, function g(){ return 2; })();
console.log(f) //2


# <a name="题">**题**</a>

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

## 
>
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

>
    function Foo(){
        getName = function () { console.log(1); };//赋值语句，全局方法
        return this;
    }
    Foo.getName = function () { console.log(2);};//静态方法
    Foo.prototype.getName = function () { console.log(3);};//公有方法
    var getName = function () {console.log(4);};//全局方法
    function getName() { console.log(5);} //全局函数

    Foo.getName();  //2 
      Foo函数上存储的静态方法 

    getName();  //4   
      函数表达式不提升，
      所以getName = function () {
        console.log(4);
      }
      在function getName() { console.log(5);}之后定义

    Foo().getName(); // 1  
      先执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数.Foo函数返回的是window对象，相当于执行 window.getName() ，而window中的getName已经被修改为console.log(1)，所以最终会输出1

    getName();// 1
      直接调用getName函数，相当于 window.getName() ,因为这个变量已经被Foo函数执行时修改了，遂结果与第三问相同，为1

    new Foo.getName();//2  
      考察的是js的运算符优先级问题  点(.)的优先级高于new。相当于new (Foo.getName)();
      https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

    new Foo().getName();  //3 
      括号()优先级高于new相当于 (new Foo()).getName()

    new new Foo().getName();// 4  
      相当于 new ((new Foo()).getName)();

# <a name="其他面试题跳转">**其他面试题跳转**</a>
https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-InterviewPreparation.md#chapter-two-one

https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers

https://github.com/qiu-deqing/FE-interview

https://github.com/foru17/front-end-collect

