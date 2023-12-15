## 
[](https://juejin.im/post/6894629999215640583)
[](https://www.cnblogs.com/jiasm/p/7683930.html)

async 属性  -- 异步加载
` <script src="file.js" async></script>`
* 让js并行加载, 
* 加载完成后立即执行，
* 脚本执行顺序和加载顺序无关。在 load 事件之前完成。
* 对于支持async属性的浏览器，动态插入外链脚本, 相当于默认具有async=true；

defer 属性   -- 延迟加载
`<script src="file.js" defer></script>`
* 让js并行加载, 
* 在页面解析渲染完后才会执行，在 DOMContentLoaded 事件之前完成
* 脚本按加载的顺序执行。

使用defer、async的脚本禁止使用document.write()方法

同时使用 async 和 defer,defer优先级高



```JS
// 动态创建script
function downloadJSAtOnload() {
  var element = document.createElement("script");
  element.src = "defer.js";
  document.body.appendChild(element);
}
if (window.addEventListener) {
  window.addEventListener("load",downloadJSAtOnload, false);
} else if (window.attachEvent){
  window.attachEvent("onload",downloadJSAtOnload);
} else{
  window.onload =downloadJSAtOnload;
}
```

另：preload（提前加载），prefecth（空闲加载）能提前加载文件
```html
<link href="xxx.js" rel="preload"  as="script">
<link href="xxx.js" rel="prefetch">
```
