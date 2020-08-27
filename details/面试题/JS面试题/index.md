
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

## <a name="DOMContentLoaded、window.onload事件、执行顺序">DOMContentLoaded、window.onload事件、执行顺序</a>

DOMContentLoaded事件触发时：仅当DOM解析完成后，不包括样式表，图片等资源。

onload 事件触发时,页面上所有的 DOM,样式表,脚本,图片等资源已经加载完毕。

```js
window.onload = function (){console.log('window.onload');}



document.addEventListener( "DOMContentLoaded", function(){
  console.log('DOMContentLoaded')
}, false );

//DOMContentLoaded

//window.onload
```