# DOM事件
## DOM事件的级别
* DOM0：不是W3C规范。
* DOM1：开始是W3C规范。专注于HTML文档和XML文档。
* DOM2：对DOM1增加了样式表对象模型
* DOM3：对DOM2增加了内容模型 (DTD 、Schemas) 和文档验证。

## 事件流: 捕获事件流、冒泡事件流。
捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。

冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。

DOM事件流：捕获阶段 -> 目标阶段 -> 冒泡阶段  
DOM事件捕获流程:window > document > documentElement(html标签) > body > ...> 目标对象
>
    事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。window => document => html => body => ... => 目标元素

    事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

    事件冒泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。

所有的事件都会捕获但不是所有事件都会冒泡,例如：
* submit
* onblur
* onfocus
* onmouseenter
* onmouseleave

### mouseover、mouseout、mouseenter、mouseleave区别与联系
* mouseover/mouseout是标准事件，所有浏览器都支持；
* mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持

* mouseover/mouseout是冒泡事件；
* mouseenter/mouseleave不冒泡。

需要为多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能

不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件，对应 mouseout。

只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件，对应 mouseleave。


## 事件模型：原始事件模型(DOM0级)、DOM2事件模型、IE事件模型。
1. DOM0级：没有事件流，事件一旦发生马上进行处理
```html
在html中直接指定属性值：<button id="demo" type="button" onclick="doSomeTing()" />　　
在js中: document.getElementsById("demo").onclick = doSomeTing()
```

优点：所有浏览器都兼容
缺点：逻辑与显示没有分离；相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面;  无法通过事件的冒泡、委托等机制

2. DOM2级：W3C制定的标准模型，现代浏览器（IE6~8除外）都已经遵循这个规范
```js
/**
 * @params {String} eventType 事件类型
 * @params {Function} handler 执行的回调函数
 * @params {Boolean} useCapture 否捕获(false（默认值）:冒泡；true：捕获);即默认冒泡
 */
addEventListener(eventType,handler,useCapture)
removeEventListener(eventType,handler,useCapture)

例：addEventListener('click', func)//事件不加on
```

3. IE事件模型：不支持事件捕获 (IE11以下)
```js
attachEvent(eventType,handler)
detachEvent(eventType,handler)

例：attachEvent("onclick",func)//事件加on
```

## event属性，方法
* event.preventDefault() 阻止默认行为
* event.stopPropagation() 阻止事件传播（冒泡，捕获）
* event.target 触发事件的元素
* event.currentTarget 事件所绑定的元素

## 自定义事件
[自定义事件的触发dispatchEvent](https://www.jianshu.com/p/5f9027722204)

自定义事件方法
* new Event()
* new CustomEvent()
* document.createEvent('CustomEvent');// 注意这里必须为'CustomEvent'

触发事件方法
* dispatchEvent()


```js
// new Event()定义事件
let myEvent1 = new Event(
  'myEvent1', // 事件名称
  {
    bubbles: true, //是否冒泡
    cancelable: false//是否取消默认事件
  });

// new CustomEvent()定义
let myEvent2 = new CustomEvent('myEvent2', {
  detail: {
    // 将需要传递的参数放到这里
    // 可以在监听的回调函数中获取到：event.detail
  },
  bubbles: true,    //是否冒泡
  cancelable: false //是否取消默认事件
})

// document.createEvent('CustomEvent')定义事件
let myEvent3 = document.createEvent('CustomEvent');// 注意这里必须为'CustomEvent'
// 事件初始化
myEvent3.initEvent(
  'myEvent3', // 事件名称
  true, // 是否冒泡
  false // 是否可以取消默认行为
)

// 添加事件
document.addEventListener('myEvent1', function(e){
    console.log('myEvent1 触发',e);
});
document.addEventListener('myEvent2', function(e){
    console.log('myEvent2 触发',e);
});
document.addEventListener('myEvent3', function(e){
    console.log('myEvent3 触发',e);
});

let div = document.querySelector('#div')
div.onclick = function(){
  document.dispatchEvent(myEvent1); // 触发事件
  document.dispatchEvent(myEvent2); // 触发事件
  document.dispatchEvent(myEvent3); // 触发事件
}

```

## w3c事件与IE事件区别
事件流
* w3c事件流:（事件捕获流）
  从根文档(html)开始遍历所有子节点，如果目标事件的父节点设置为捕获时触发，则执行该事件，直到目标被执行，然后再事件冒泡(设置为捕获时触发的事件不再被执行)。

* IE事件流:（事件冒泡流）
  从目标事件被执行，然后再冒泡父节点的事件，直到根文档。

阻止默认行为：
```js
event = e || window.event //w3c |  IE
event.preventDefault() || event.returnValue = false //w3c | IE
```

阻止冒泡：
```js
event = e || window.event //w3c | IE
event.stopPropagation() || event.cancelBubble = true // w3c  | IE
```

获取事件目标源：
```js
event = e || window.event
event.target || event.srcElement // w3c  | IE
```

[更多兼容性写法](/details\常用的JS兼容写法\README.md)


# 页面生命周期事件
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

首次页面进入时（刷新时）：
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

```