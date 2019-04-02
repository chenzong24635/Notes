# 目录

<a href="#JS兼容写法">**JS兼容写法**</a>

* <a href="#浏览器高度">浏览器高度</a>
* <a href="#获取节点的兼容">获取节点的兼容</a>
* <a href="#event获取目标对象">event获取目标对象</a>
* <a href="#阻止冒泡">阻止冒泡</a>
* <a href="#阻止默认行为">阻止默认行为</a>
* <a href="#事件监听的兼容">事件监听的兼容</a>
* <a href="#清除选中">清除选中</a>
* <a href="#滚动事件mouseWheel">滚动事件mouseWheel</a>

* <a href="#"></a>


# <a name="JS兼容写法">**JS兼容写法**</a>

## <a name="浏览器高度">浏览器高度</a>
>
    可见区域宽/高： document.body.clientWidth / clientHeight
    可见区域宽/高(包括边线)： document.body.offsetWidth / offsetHeight
    正文全文宽/高 ： document.body.scrollWidth / scrollHeight;
    滚动条具 头部 / 左侧 距离： document.body.scrollTop / scrollLeft
    正文部分上： window.screenTop;
    正文部分左： window.screenLeft;

    屏幕分辨率的高： window.screen.height;
    屏幕分辨率的宽： window.screen.width;
    屏幕可用工作区高度： window.screen.availHeight;


    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

## <a name="获取节点的兼容">获取节点的兼容</a>
    firstElementChild || firstChild
    lastElementChild || lastChild
    previousElementSibling || previousSibling
    nextElementChild || nextChild

## <a name="event获取目标对象">event获取目标对象</a>
>
    IE678  event.srcElement（事件源）
    其他   event.target（事件源）

    function getTarget(e){   
      const event = e || window.event; // w3c | IE
      event.target?e.target:event.srcElement
    } 

## <a name="阻止冒泡">阻止冒泡</a>
>
    w3c的方法是：（火狐、谷歌、IE11）event.stopPropagation()
    IE10以下则是使用：event.cancelBubble = true

    function stopPropagation(e){
      const  event = e || window.event; // w3c | IE
      event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    }

## <a name="阻止默认行为">阻止默认行为</a>
>
    function preventDefault(e){ 
      cosnt event = e || window.event; // w3c | IE
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
    }


## <a name="事件监听的兼容">事件监听的兼容</a>
  //eventListen.addEvent(btn,"click",fn)
>
    eventListen={
      addEvent: function (target, type, fn) {
        if (target.addEventListener) {
          target.addEventListener(type,fn);
        } else if(target.attachEvent) {
          target.attachEvent("on" + type, fn);
        } else {
          target["on" + type] = fn;
        }
      },
      removeEvent: function(target, type, fn) { 
        if (target.removeEventListener) {
          target.removeEventListener(type, fn);
        } else if(target.removeEvent) {
          target.detachEvent("on" + type, fn);
        } else {
          target["on" + type] = null;
        }
      }
    }
>
    Event = {
    // 参数： 操作的元素,事件名称 ,事件处理程序
    // 添加事件
      addEvent : function(ele, type, handler) {
        ele.addEventListener?ele.addEventListener(type, handler, false):
        ele.attachEvent?ele.attachEvent('on'+type,function(){handler.call(ele);}):
        elet['on' + type] = handler;
      },
    // 移除事件
      removeEvent : function(ele, type, handler) {
        ele.removeEventListener?ele.removeEventListener(type, handler, false):
        ele.datachEvent?ele.detachEvent('on' + type, handler):
        ele['on' + type] = null;
      },
    // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
      stopPropagation : function(e) {
       var e=window.event || e;
        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;//IE
      },
    // 取消事件的默认行为
      preventDefault : function(e) {
       var e=window.event || e;
        e.preventDefault?e.preventDefault():e.returnValue = false;//IE
      },
    // 获取事件目标
      getTarget : function(e) {
             var e=window.event || e;
        return e.target || e.srcElement;
      },
    };

## <a name="清除选中">清除选中</a>
>
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                                              IE9以下

## <a name="滚动事件mouseWheel">滚动事件mouseWheel</a>
>
    Firefox：DOMMouseScroll    (detail判断上下滑动)
      向上滚动：e.detail < 0
      向下滚动 ：e.detail > 0
>
    IE/Chrome/Safari/Opera：mousewheel  (wheelDelta判断鼠标上下滑动)
      向上滚动：  e.wheelDelta == -120
      向下滚动 ： e.wheelDelta == 120


## <a name=""></a>
## <a name=""></a>
## <a name=""></a>