# 目录
* <a href="window滚动">window滚动</a>
  * <a href="window.scrollTo">window.scrollTo,window.scroll</a>
  * <a href="window.scrollBy">window.scrollBy</a>
  * <a href="其他滚动方法">其他滚动方法</a>
    * <a href="document.scrollingElement">document.scrollingElement</a>
    * <a href="scrollIntoView">elm.scrollIntoView</a>
* <a href="#offset、scroll、client">offset、scroll、client</a>
* <a href="#getBoundingClientRect()">getBoundingClientRect()</a>
* <a href="#getComputedStyle()">getComputedStyle()</a>


# <a name="window滚动">window滚动</a>

## <a name="window.scrollTo"> window.scrollTo，window.scroll -- 绝对滚动</a>
[window.scrollTo](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)滚动到文档中的某个坐标

[window.scroll](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scroll)等同于 window.scrollTo

* window.scrollTo(x,y)
  >x: 文档中的横轴坐标  
  >y: 文档中的纵轴坐标

* window.scrollTo(options)
  options对象属性（都可选）
  >left: 等同于 x  
  >top: 等同于 y  
  >behavior: 类型String,表示滚动行为,支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值auto,实测效果等同于instant  

```js
window.scrollTo(0, 0);

// or
window.scrollTo({
  left: 0,
  top: 100,
  behavior: "smooth" // 平滑滚动
});
```

## <a name="window.scrollBy"> window.scrollBy -- 相对滚动</a>
相对与当前滚动条位置进行滚动

* window.scrollBy(x, y)
  >x: 水平滚动的偏移量，单位：像素  
  >y: 垂直滚动的偏移量，单位：像素  

* window.scrollBy(options)
  options对象属性（都可选）
  >left: 等同于 x  
  >top: 等同于 y  
  >behavior: 类型String,表示滚动行为,支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值auto,实测效果等同于instant  

```js
window.scrollBy(0, 100);

// or
window.scrollBy({
  left: 0,
  top: 100,
  behavior: "smooth" // 平滑滚动
});
```

 
## <a name="其他滚动方法">其他滚动方法</a>
### <a name="document.scrollingElement">document.scrollingElement</a>
[document.scrollingElement](https://developer.mozilla.org/zh-CN/docs/Web/API/document/scrollingElement)--MDN


scrollingElement （ Document 的只读属性）返回滚动文档的 Element 对象的引用。
* 在标准模式下，相当于 document.documentElement
  
* 在怪异模式下，相当于 document.body（若不存在返回 null ）

```js
// 滚动到文档的绝对位置
document.scrollingElement.scrollTop = 100
document.scrollingElement.scrollLeft = 100
```

### <a name="scrollIntoView">scrollIntoView</a>
 [scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)--MDN

让当前的元素滚动到浏览器窗口的可视区域内

* scrollIntoView(boolean) //默认true
  >如果为true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 options: {block: "start", inline: "nearest"}。这是这个参数的默认值。  

  >如果为false，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的options: {block: "end", inline: "nearest"}。


* scrollIntoView(options)
  options对象的属性（都是可选）：
  >behavior：定义动画过渡效果，"auto"或 "smooth" 之一。默认为 "auto"。  
  >block：定义垂直方向的对齐，"start", "center", "end", 或 "nearest"之一。默认为 "start"。  
  >inline：定义水平方向的对齐，"start", "center", "end", 或 "nearest"之一。默认为 "nearest"。

```js
// start出现在视口顶部、center出现在视口中央、end出现在视口底部，
//默认start
document.querySelector(".box").scrollIntoView({
  block: "start" || "center" || "end",
  behavior: "smooth" // 平滑滚动
});
```

# <a name="offset、scroll、client">offset、scroll、client</a>
![img](/img/offset_scroll_client.png)

### offset 自身

* [offsetParent](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent)
  >只读属性,返回一个元素，这个元素是距离调用 offsetParent的父级元素中最近的（在包含层次中最靠近的），

   * 如果当前元素的父级元素中没有进行CSS定位， offsetParent 为 body

  * 如果当前元素的父级元素中有CSS定位(relative/absoluted/sticky)， offsetParent 取父级中最近的元素

  * 无论是否定位，当display 设置为 "none" 时，offsetParent 返回 null

* offsetWidth(自身宽度)= border+ width+ padding (不包括滚动条)

* offsetHeight(自身高度) = border+ height+ padding (不包括滚动条)

* offsetTop  相对于版面或由 offsetParent 属性指定的父坐标的上侧

* offsetLeft 相对于版面或由 offsetParent 属性指定的父坐标的左侧


### scroll 滚动

* scrollWidth 只读,元素的宽度(包括滚动的宽度，没有滚动宽度时相当于 offsetWidth)

* scrollHeight 只读,元素的高度(包括滚动的宽度，没有滚动宽度时相当于 offsetHeight)

* scrollLeft 读取或设置元素滚动条到元素左边的距离

* scrollTop  读取或设置元素滚动条到元素顶部的距离

```html
<head>
  <style>
    #box{
      width: 400px;
      height: 400px;
      border: 1px solid #000;
      overflow: scroll;
    }
    #div{
      position:relative;width:700px;height:700px;background-color: red
    }
    #btn{
      position: fixed;
      bottom: 110px;
      left: 110px;
      padding: 10px 50px;
    }
  </style>
</head>
<body>
<div id="box">
  <div id="div"></div>
  <button id="btn">显示当前数据</button>
</div>
<script>
let btn = document.querySelector('#btn')
let box = document.querySelector('#box')
let redDiv = document.querySelector('#div')

btn.onclick=function(){
  // console.log(redDiv.offsetHeight);
  console.log(redDiv.scrollHeight);
  console.log('--');
  // console.log(box.offsetHeight);
  console.log(box.scrollHeight);

  console.log(box.scrollLeft);
  console.log(box.scrollTop);
}
</script>
</body>
```


### client 可视 

* clientWidth(可见的宽度) = padding+width (不包括滚动条)，会随窗口的显示大小改变

* clientHeight(可见的高度) = padding+height (不包括滚动条)，会随窗口的显示大小改变

* clientTop、clientLeft 
  >
      这两个返回的是元素周围边框的厚度，一般它的值就是0。因为滚动条不会出现在顶部或者左侧

# <a name="getBoundingClientRect()">getBoundingClientRect()</a>
[getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)返回元素的大小及其相对于视口的位置

el.getBoundingClientRect()返回值
```js
{
  x: 同left (IE不支持
  y: 同top   (IE不支持
  width: 自身宽
  height:自身高
  top:   元素上边到视窗上边的距离
  bottom:元素下边到视窗上边的距离
  left:  元素左边到视窗左边的距离
  right: 元素右边到视窗左边的距离
}

可知：
    width = right - left
    height = bottom - top
```
图示
![getBoundingClientRect](/img/getBoundingClientRect.png)

[兼容性-can i use](https://caniuse.com/#feat=css-grid&search=getBoundingClientRect)


实例

滚动和非滚动盒子下的返回值：
```html
<style>
#box{
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 10px 20px 30px 40px;
  /* overflow: scroll; */
}

#box p{
  width: 300px;
  height: 300px;
}
</style>
</head>
<body>
<div id="box">
  <p></p>
</div>
<script>
  let box = document.querySelector("#box");
  console.log('滚动盒子',box.getBoundingClientRect());
  // console.log('非滚动盒子',box.getBoundingClientRect());
</script>
</body>
```
返回值
![](/img/getBoundingClientRect-1.png)
![](/img/getBoundingClientRect-2.png)



设置border: 2px solid gold;padding: 50px; 和 box-sizing时
返回值

![](/img/getBoundingClientRect-3.png)
![](/img/getBoundingClientRect-4.png)



可知盒模型为
* 标准盒子模型（box-sizing:content-box）时，返回值的width/height 包含 padding
* 怪异盒模型（box-sizing:border-box）时，返回值的width/height 不包含 padding

无论是哪种盒模型，返回值的width/height都包含 border

# <a name="getComputedStyle()">getComputedStyle()</a>
[window.getComputedStyle](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle) 是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。

window.getComputedStyle(ele, pseudoElt);
>ele: 元素
>pseudoElt：指定一个要匹配的伪元素的字符串；可选（忽略或者传null）


```html
<style>
#box{
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  /* box-sizing: border-box; */
  /* border: 2px solid gold; */
  /* padding: 50px; */
  margin: 10px 20px 30px 40px;
  overflow: scroll;
}

#box p{
  width: 300px;
  height: 300px;
}
#box::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "after内容";
  background-color: red;
}
</style>

<div id="box"></div>
<script>
  let box = document.querySelector("#box");

  // 所有css属性
  let cssProps = getComputedStyle(box, null)
  console.log(cssProps);
  // css属性个数
  console.log(Object.keys(cssProps).length); // 798
  // 伪类
  console.log(getComputedStyle(box, "::after").content); // "after内容"
</script>
```


滚动和非滚动盒子下的返回值：
```js
console.log(
  '一些常用属性:',
  {
    width: cssProps.width,
    height: cssProps.height,
    top: cssProps.top,
    left: cssProps.left,
    bottom: cssProps.bottom,
    right: cssProps.right,
    marginTop: cssProps.marginTop,
    marginRight: cssProps.marginRight,
    marginBottom: cssProps.marginBottom,
    marginLeft:cssProps.marginLeft,
  },
);
```
非滚动盒子
![](/img/getComputedStyle-1.png)
滚动盒子
![](/img/getComputedStyle-2.png)



设置border: 2px solid gold;padding: 50px; 和 box-sizing时
返回值

box-sizing: content-box
![](/img/getComputedStyle-3.png)

box-sizing: border-box
![](/img/getComputedStyle-4.png)

可知 无论哪种盒模型 width 属性都不受 padding影响；
怪异盒模型时 wdith属性包含 border;

#### `getComputedStyle与style区别  `

1. ele.style 读取的只是元素的内联样式，即写在元素的 style 属性上的样式；而 getComputedStyle 读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。

2. ele.style 既支持读也支持写。而 getComputedStyle 仅支持读并不支持写入。

# 
具体图示
![getBoundingClientRect](/img/element-size.png)