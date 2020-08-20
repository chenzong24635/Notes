* <a href="#"></a>


# 去除/修改浏览器默认行为

## <a name="清除手机端a链接点击高亮">清除手机端a链接点击高亮[![bakTop](/img/backward.png)](#top)

```css
/* 图片作为a标签点击按钮 */
a,a:hover,a:active,a:visited,a:link,a:focus{
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  outline:none;
  background: none;
  text-decoration: none;
}
```

## <a name="改变input placeholder颜色">改变input placeholder颜色</a>[![bakTop](/img/backward.png)](#top)
>
    ::-webkit-input-placeholder { color: #eee; }/*WebKit, Blink, Edge*/
    :-moz-placeholder { color: #eee; }/*Mozilla Firefox 4 to 18*/
    ::-moz-placeholder { color: #eee; }/*Mozilla Firefox 19+*/
    :-ms-input-placeholder { color: #eee; }/*Internet Explorer 10-11 */

## <a name="input自动填充上背景色">input自动填充上背景色</a>[![bakTop](/img/backward.png)](#top)
* 
>
    :-webkit-autofill{
      box-shadow: 0 0 0px 1000px #fff inset !important;
    }

* autocomplete="off"，直接关闭自动填充


## <a name="取消部分浏览器数字输入控件的操作按钮">取消部分浏览器数字输入控件的操作按钮</a>[![bakTop](/img/backward.png)](#top)
```css
input[type="number"] { /* firefox */
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button { /* chrome */
  margin: 0;
  -webkit-appearance: none;
}
```

## <a name="selection">selection 改变选中内容的字体、背景颜色</a>[![bakTop](/img/backward.png)](#top)
```css
::-moz-selection { 
  background-color: red; 
  color: #333; 
} 
::-webkit-selection { 
  background-color: red; 
  color: #333; 
}
::selection { 
  background-color: red; 
  color: #333; 
}
```
background-color为 #fff 或者 transparent 时，文本不可选中


## <a name="user-select">user-select 文本是否可选中</a>[![bakTop](/img/backward.png)](#top)
```css
{
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

语法
>
    user-select:none | text | all | element
    默认值：text
    适用范围：除替换元素外的所有元素

取值说明
>
    none:文本不能被选择
    text:可以选择文本
    all：当所有内容作为一个整体时可以被选择。如果双击或者在 上下文上点击子元素，
        那么被选择的部分将是以该子元素 向上回溯的最高祖先元素。

## <a name="禁止保存或拷贝图像">禁止保存或拷贝图像</a>[![bakTop](/img/backward.png)](#top)
```css
img {
  -webkit-touch-callout: none;
}
```

## <a name="pointer-events">pointer-events 禁用按钮上的默认指针事件</a>[![bakTop](/img/backward.png)](#top)
```css
.button.disabled {
  opacity: .5;
  pointer-events: none;
}
```

# 常用CSS效果

## <a name="文字超出省略">文字超出省略</a>[![bakTop](/img/backward.png)](#top)
#### 单行省略
```css
.ov1{
  white-space: nowrap; /* 强制文本在一行内输出 */
  overflow: hidden; /* 隐藏溢出部分 */
  text-overflow: ellipsis; /* 对溢出部分加上... */
}
```


#### 多行省略
```less
/* 只适用于webkit内核 */ 
.ov( @clamp:2 ){
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all; 
  -webkit-line-clamp: @clamp; /* 限制在显示的文本的行数,只有 WebKit 内核的浏览器才支持 */
  display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
  /* 防止打包后这段代码被删除 */
  /*! autoprefixer: off */
    -webkit-box-orient: vertical;/* 伸缩盒子的子元素排列：从上到下 */
  /* autoprefixer: on */
}

/* 其他浏览器 */
.ov(@maxHeight:40px){
  max-height: @maxHeight;
  &::after{
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    /* 以上三个属性，可以后续调整，看要把...放在哪个位置 */
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
    /* 背景色可写成渐变也可写成一样的颜色 */
  }
}

/* 火狐 */
@-moz-document url-prefix() {
  .ov
}

/* IE10、11  */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .ov
}
```

