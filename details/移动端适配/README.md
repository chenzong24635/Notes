https://juejin.im/post/6844903631993454600

https://mp.weixin.qq.com/s/tBq8QsuZdsu-rr_VY1j1jQ


## 动态修改font-size

依iphone678为例，则html的font-size为50px，则1rem = 50px; 1px = 0.02rem
```js
!(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 750) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			}
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

```