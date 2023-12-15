# 目录

<a href="#JS兼容写法">**JS兼容写法**</a>

* <a href="#浏览器高度">浏览器宽高</a>
* <a href="#页面宽高">页面宽高</a>
* <a href="#屏幕可视区域的宽高">屏幕可视区域的宽高</a>
* <a href="#获取节点的兼容">获取节点的兼容</a>
* <a href="#event获取目标对象">event获取目标对象</a>
* <a href="#阻止冒泡">阻止冒泡</a>
* <a href="#阻止默认行为">阻止默认行为</a>
* <a href="#事件监听的兼容">事件监听的兼容</a>
* <a href="#清除选中">清除选中</a>
* <a href="#滚动事件mouseWheel">滚动事件mouseWheel</a>


# <a name="JS兼容写法">**JS兼容写法**</a>

## <a name="浏览器宽高">浏览器宽高</a>
窗口相对于屏幕的X和Y坐标： window.screenTop / window.screenLeft

屏幕分辨率的宽高： window.screen.width / height
屏幕可用工作区宽宽高： window.screen.availWidth / availHeight


## <a name="页面宽高">页面宽高(包括滚动的部分)</a>

document.documentElement.scrollWidth / scrollHeight  
document.documentElement.offsetWidth / offsetHeight

## <a name="屏幕可视区域的宽高">屏幕可视区域的宽高</a>

* 标准模式(有DTD)(CSS1Compat)： document.documentElement.clientWidth / clientHeight

* ie9及其以上的版本   window.innerWidth / innerHeight  

* 混杂模式 (没有DTD)(BackCompat)： document.body.clientWidth / clientHeight


兼容写法：
```js
clientWidth = 
  document.documentElement.clientWidth || 
  window.innerWidth || 
  document.documentElement.clientWidth

clientHeight =
  document.documentElement.clientHeight || 
  window.innerHeight || 
  document.body.clientHeight
```

## <a name="滚动条滚动的距离">滚动条滚动的距离</a>

* 标准模式 (有DTD)(CSS1Compat): window.pageYOffset

* IE低版本(ie<=8)的标准模式 (有DTD)(CSS1Compat): document.documentElement.scrollTop

* 混杂模式 (没有DTD)(BackCompat): document.body.scrollTop


兼容写法：
```js
scrollTop = 
  window.pageYOffset || 
  document.documentElement.scrollTop ||
  document.body.scrollTop  

scrollLeft = 
  window.pageXOffset ||  
  document.documentElement.scrollLeft ||
  document.body.scrollLeft 
```

封装函数：
```js
function scroll() { 
  if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
    // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  }
  else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
    return {
      left: document.documentElement.scrollLeft,
      top: document.documentElement.scrollTop
    }
  }
  return {   // 未声明 DTD
    left: document.body.scrollLeft,
    top: document.body.scrollTop
  }
}
```

## <a name="鼠标在页面的位置">鼠标在页面的位置 = 被卷去的部分+鼠标在当前屏幕的坐标</a>

```js
document.querySelector('html').addEventListener('click',function(e){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||  document.body.scrollTop  
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft ||  document.body.scrollLeft
  var event = e || window.event
  console.log('event.pageX,event.clientX，scrollLeft',event.pageX , event.clientX,scrollLeft)
  console.log('event.pageY,event.clientY，scrollTop',event.pageY, event.clientY,scrollTop)

  // pageX、Y 鼠标在页面的位置
  //scrollLeft、scrollTop为上面 滚动条滚动的距离的兼容写法
  //event.clientX、Y 鼠标点击的位置相对于文档的左边距，上边距
  var mouseX = event.pageX || (scrollLeft + event.clientX);
  var mouseY = event.pageY || (scrollTop + event.clientY);
  console.log('mouseX:',mouseX)
  console.log('mouseY:',mouseY)
})
```

## <a name="获取节点的兼容">获取节点的兼容</a>
```js
firstElementChild || firstChild
lastElementChild || lastChild
previousElementSibling || previousSibling
nextElementChild || nextChild
```

## <a name="event获取目标对象">event获取目标对象</a>
```js
// IE678  event.srcElement(事件源)
// 其他   event.target(事件源)

function getTarget(e){   
  var event = e || window.event // w3c | IE
  event.target?e.target:event.srcElement
} 
```

## <a name="阻止冒泡">阻止冒泡</a>
```js
// w3c(火狐、谷歌、IE11)e.stopPropagation()
// IE10以下：e.cancelBubble = true

function stopPropagation(e){
  var  event = e || window.event;
  event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
}
```

## <a name="阻止默认行为">阻止默认行为</a>
```js
// w3c: e.preventDefault()
// IE: e.returnValue = false
// 阻止事件冒泡
function preventDefault(e){ 
  var event = e || window.event;
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
}
```

## <a name="事件监听的兼容">事件监听的兼容</a>
  //eventListen.addEvent(btn,"click",fn)
```js
eventListen={
  // 添加事件
  addEvent: function (target, type, fn) {
    if (target.addEventListener) {
      target.addEventListener(type,fn);
    } else if(target.attachEvent) {
      target.attachEvent("on" + type, fn);
    } else {
      target["on" + type] = fn;
    }
  },
  // 移除事件
  removeEvent: function(target, type, fn) {
    if (target.removeEventListener) {
      target.removeEventListener(type, fn);
    } else if(target.removeEvent) {
      target.detachEvent("on" + type, fn);
    } else {
      target["on" + type] = null;
    }
  },
}
```

## <a name="清除选中">清除选中</a>
```js
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                        // IE9以下
```

## <a name="滚动事件mouseWheel">滚动事件mouseWheel</a>
```html
Firefox：DOMMouseScroll    (detail判断上下滑动)
  向上滚动：e.detail < 0
  向下滚动 ：e.detail > 0


IE/Chrome/Safari/Opera：mousewheel  (wheelDelta判断鼠标上下滑动)
  向上滚动：  e.wheelDelta == -120
  向下滚动 ： e.wheelDelta == 120
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