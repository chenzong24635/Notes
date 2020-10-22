# <a name="面试题">**面试题**</a>

[Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md?tdsourcetag=s_pctim_aiomsg)

[前端基础面试题(JS 部分)](https://zhuanlan.zhihu.com/p/28428367)

[web 前端大厂 10 道经典面试题汇总](https://zhuanlan.zhihu.com/p/57200821)

[前端进阶系列](https://github.com/yygmind/blog)-木易杨


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

## 页面生命周期事件
* DOMContentLoaded 仅当DOM解析完成后触发，不包括样式表，图片等资源 -- 刷新页面时调用
* load 页面上所有的 DOM,样式表,脚本,图片等资源已经加载完后触发 -- 刷新页面时调用
* beforeunload 即将离开当前页面（刷新或关闭）时触发。
* unload 页面卸载后触发 -- 刷新页面，关闭页面时调用
* pageshow  页面显示时触发 -- 刷新页面时调用
* pagehide 页面隐藏时触发 -- 刷新页面，关闭页面时调用
* visibilitychange  页面可见性改变时触发 -- 刷新页面，页面切换时调用
  >通过document.visibilityState获取当前页面可见性(两种状态：visible | hidden)

执行情况

```js
let event = ["DOMContentLoaded","load","unload", "pageshow","pagehide","visibilitychange"]
let count=0 // 便于页面卸载观测触发顺序
event.forEach(event=>{
  window.addEventListener(event, function(){
    count++
    if(event === "visibilitychange") {
      console.log(document.visibilityState+)
      // 用于查看 unload，pagehide 等事件触发
      // window.open(document.visibilityState+count)
      // alert(document.visibilityState+count)
    }else{
      console.log(event)
      // window.open(event+count)
      // alert(event+count)
    }
  });
})

首次页面进入时：
// DOMContentLoaded
// load
// pageshow

切换到其他页面，再切换回来时
// hidden
// visible


关闭页面时
// beforeunload
// hidden
// pagehide
// unload

刷新时

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

