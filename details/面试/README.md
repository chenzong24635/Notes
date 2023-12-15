# <a name="面试题">**面试题**</a>

[Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md?tdsourcetag=s_pctim_aiomsg)

[前端基础面试题(JS 部分)](https://zhuanlan.zhihu.com/p/28428367)

[web 前端大厂 10 道经典面试题汇总](https://zhuanlan.zhihu.com/p/57200821)

[前端进阶系列](https://github.com/yygmind/blog)-木易杨


# 

**前端页面由哪三层构成：结构层、表示层、行为层。**

## [HTML](HTML.md)

## [CSS](CSS.md)

## [JS](JS.md)

- [Undefined、Null](/details/JS/JS数据类型/Undefined、Null.md)
- [Boolean](/details/JS/JS数据类型/Boolean.md)
- [Number](/details/JS/JS数据类型/Number.md)
- [String](/details/JS/JS数据类型/String.md)
- [Symbol](/details/JS/JS数据类型/Symbol.md)
- [Object](/details/JS/JS数据类型/Object.md)
  - [Array](/details/JS/JS数据类型/Array.md)
  - [Math](/details/JS/JS数据类型/Math.md)
  - [Date](/details/JS/JS数据类型/Date.md)
  - [Function](/details/JS/JS数据类型/Function.md)
  - [Set、Map](/details/JS/JS数据类型/Set、Map.md)


## [ES](ES.md)

## [TypeScript](TS.md)

## [正则](/details/JS数据类型/RegExp.md)

## [AJAX](/details/Ajax.md)

## [跨域](/details/crossOrigin.md)

## [HTTP](HTTP.md)

## [Vue](Vue.md)

## [Vuex](/details/vuex.md)

## [小程序](MiniProgram.md)

## [WebSocket](/details/JS/其他/WebSocket.md)

## [Git](Git.md)

## [Node](Node.md)




# <a name="常用">**常用**</a>



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





## 点击一个input依次触发的事件
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

## <a name="var、let 及 const 区别">var、let 及 const 区别</a>
对于这个问题，我们应该先来了解提升（hoisting）这个概念。
```js
console.log(a) // undefined
var a = 1
```

从上述代码中我们可以发现，虽然变量还没有被声明，但是我们却可以使用这个未被声明的变量，这种情况就叫做提升，并且提升的是声明。

上述代码相当于
```js
var a
console.log(a) // undefined
a = 1
```
可知，使用 var 声明的变量会被提升到作用域的顶部，
同时var声明的全局变量会被挂载到 window 上（`打印 window.a 输出 1`）


接下来我们再来看 let 和 const 。
```js
// 全局变量绑定到 window ?
var a = 1
let b = 1
const c = 1
console.log(window.a) // 1
console.log(window.b) // undefined
console.log(window.c) // undefined

// 
{
  console.log(d) // undefined
  var d
  
  console.log(e) // Uncaught ReferenceError: Cannot access 'e' before initialization
  let e
}

{
  var f
  var f

  let g
  let g
}
// Uncaught SyntaxError: Identifier 'g' has already been declared


```
报错的原因是因为存在暂时性死区; 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。 

`let,const和var区别`
* 首先在全局作用域下使用 let 和 const 声明变量，变量并不会被挂载到 window 上，这一点就和 var 声明有了区别。


* 再者当我们在let/const声明 变量 之前如果使用了该变量，就会出现报错的情况,var 不会
* 同时let/const重复声明同一变量也会报错,var 不会


## <a name="Array.apply(null,Array(3))与Array(3)区别">Array.apply(null,Array(3))与 Array(3)区别</a>

https://www.jianshu.com/p/6c7d0b18d4ca

>

    Array.apply(null, Array(3)) | Array.apply(null, { length: 3 })
    实际上等同于Array.apply(null,[undefined,undefined,undefined]),也就等同于Array(undefined,undefined,undefined)
    // 结果 [undefined, undefined, undefined]

    Array(3) //是一个只有length,没有元素和索引的空数组
    //结果 [empty × 3] // [,,]

> 如何设为[0,0,0...]

    Array.apply(null, Array(n)).map(()=>0) // n个0 [0,0,0,....]
    Array.apply(null, {length: n}).map(()=>0)
    ES6方法：Array(n).fill(0)

## <a name="map(parseInt) 原理解析">['1','2','3'].map(parseInt) 原理解析</a>

[高频网红面试题['1','2','3'].map(parseInt) 原理解析](https://juejin.im/post/5dbff8735188252ddb2fd25e)
[关于数组的 ['1','2','3'].map(parseInt) 的问题?](https://www.zhihu.com/question/267702014)

- ['1','2','3'].map(parseInt)

```js
var arr1 = arr.map(function callback(currentValue[, index[, array]]) {
}[, thisArg])
```

解析：

>

    这个 callback 一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。

    而 parseInt 则是用来解析字符串的，使字符串成为指定基数的整数。

    parseInt(string, radix)接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。

    parseInt('1', 0)  //radix 为 0 时，且 string 参数不以“0x”和“0”开头时，按照 10 为基数处理。这个时候返回 1；

    parseInt('2', 1)  // 基数为 1（1 进制）表示的数中，最大值小于 2，所以无法解析，返回 NaN；

    parseInt('3', 2)  // 基数为 2（2 进制）表示的数中，最大值小于 3，所以无法解析，返回 NaN。

    map 函数返回的是一个数组，所以最后结果为 [1, NaN, NaN]。

- ['1', '2', '3'].map(parseFloat) // [1, 2, 3]
  parseFloat 不用考虑第二个参数，只需要看第一个参数是否能正常转换为数字就行。

* '1 2 3'.replace(/\d/g, parseInt) // "1 NaN 3"  
  replace 第二个参数可以是 callback 函数，这个 callback 函数里，第一个参数为匹配项的值，第二个参数为匹配项的索引 index，第三个参数为整个字符串 即'1 2 3'

* '123'.replace(/\d/g, parseInt) // "1NaNNaN"

## <a name="一道setTimeout面试题">一道setTimeout面试题</a>
[](https://zhuanlan.zhihu.com/p/25407758)

先看一道常见的题
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 * i);
}
// 每隔1s输出一个5
// 5 5 5 5 5
```

如何输出 0 1 2 3 4？

使用闭包
```js
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
```

或者let作用域
```js
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```


改一下，你看看会输出什么？
```js
for (var i = 0; i < 5; i++) {
  setTimeout((function(i) {
    console.log(i);
  })(i), i * 1000);
}
```
这里给 setTimeout 传递了一个立即执行函数。额，setTimeout 可以接受函数或者字符串作为参数，那么这里立即执行函数是个啥呢，w没有写返回值，返回 undefined ，也就是说等价于：
`setTimeout(undefined, ...);`

其实相当于
```js
for (var i = 0; i < 5; i++) {
  (function(i) {
    console.log(i);
  })(i)
}
```

而立即执行函数会立即执行，因此立马输出 0 到 4


## <a name="css和js动画的差异">css和js动画的差异</a>
CSS动画：  
* 优点
  * 性能好
  * 代码逻辑相对简单
* 缺点：
  * 动画上控制不够灵活；
  * 兼容性不好；
  * 部分动画功能无法实现（如滚动动画，视差滚动等）


JS动画：
* 优点
  * 控制能力强，动画效果丰富， 可以单帧的控制、变换
  * 兼容性好
  * 可以添加事件
* 缺点：
  * 干扰主线程导致阻塞，造成丢帧情况；
  * 代码复杂度高。

```css
.box {
  animation: moving 1500ms ease-in-out;
}

@keyframes moving {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100px, 100px);
  }
}
```

```js
var box = document.querySelector('.box');
var player = box.animate([
  {transform: 'translate(0)'},
  {transform: 'translate(100px, 100px)'}
], 1500);
// player.addEventListener('finish', function() {
//   box.style.transform = 'translate(100px, 100px)';
// });
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


<!-- src\shared\util.js -->



## cached 缓存
```js
function cached(fn) {
  const cache = Object.create(null)
  return (function cachedFn (str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}
```

## 类型判断
### isPrimitive 基本类型
```js
function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
```

### isPromise 是否promise类型
```js
function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}
function isDef (v){
  return v !== undefined && v !== null
}
```

### isNative 是否原生

```js
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}
```