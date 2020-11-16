# 层叠上下文(stacking context )
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)

[z-index堆叠规则](https://www.cnblogs.com/starof/p/4424926.html)

[深入理解CSS中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/) -- 张鑫旭

[CSS世界.pdf--第7章](https://www.cssworld.cn/)-- 张鑫旭

## 什么是层叠上下文

层叠上下文，英文称作 `stacking context`，是 HTML 中的一个三维的概念。

我们假定用户正面向（浏览器）视窗或网页，而 HTML 元素沿着其相对于用户的一条虚构的 z 轴排开，层叠上下文就是对这些 HTML 元素的一个三维构想。

如果一个元素含有层叠上下文，我们可以理解为这个元素在 z 轴上就“高人一等”。

## 什么是层叠水平
层叠水平，英文称作 `stacking level`，`决定了同一个层叠上下文中元素在 z 轴上的显示顺序`。

页面中的每个元素都是独立的个体，它们一定是会有一个类似的排名顺序的存在。而这个排名顺序就是这里所说的“层叠水平”

`所有的元素都有层叠水平，包括层叠上下文元素，也包括普通元素`

需要注意的是，诸位`千万不要把层叠水平和 CSS 的 z-index 属性混为一谈`。尽管某些情况下 z-index 确实可以影响层叠水平，但是只限于定位元素以及 flex 盒子的孩子元素；而层叠水平是所有的元素都存在的。

## 什么是层叠顺序
层叠顺序，英文称作 `stacking order`，表示元素发生层叠时有着特定的垂直显示顺序。注意，这里跟上面两个不一样，上面的“层叠上下文”和“层叠水平”是**概念**，而这里的“层叠顺序”是**规则**。

在CSS2.1的年代，在CSS3还没有出现的时候，层叠顺序规则如下：
![zIndex](/img/zindex.jpg)

为什么内联元素的层叠顺序要比浮动元素和块状元素都高？
>
    诸如border/background一般为装饰属性，而浮动和块状元素一般用作布局，而内联元素都是内容。网页中最重要的是什么？当然是内容了哈，对不对！

    因此，一定要让内容的层叠顺序相当高，当发生层叠时，重要的文字、图片内容才可以优先显示在屏幕上


## 层叠准则
当元素发生层叠的时候，其覆盖关系遵循下面两条准则：
* 谁大谁上：同一个层叠上下文中，层叠级别（z-index属性值）大的显示在上面。
* 后来居上：同一个层叠上下文中，层叠级别相同的两个元素，依据它们在HTML文档流中的顺序，写在后面的会覆盖前面的。

## 层叠特性
* 层叠上下文的层叠水平要比普通元素高（原因后面会说明）。
* 层叠上下文可以阻断元素的混合模式（[见此文第二部分说明](https://www.zhangxinxu.com/wordpress/2016/01/understand-css3-isolation-isolate/)）。
* 层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的“层叠上下文”。
* 每个层叠上下文和兄弟元素独立，也就是说，当进行层叠变化或渲染的时候，只需要
考虑后代元素。
* 每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠
上下文的层叠顺序中。

## 层叠上下文创建条件： 
满足以下任一条件即可
* 文档根元素（html）
* position: fixed | sticky  
* z-index 值不为 "auto" 的 绝对 | 相对定位， 
* z-index 值不为 "auto" 的 flex | grid  子元素
* opacity值 < 1  
* mix-blend-mode 值不为 normal
* 以下任意属性值不为 none 的元素：
  * transform
  * filter
  * perspective
  * clip-path
  * mask / mask-image / mask-border
* isolation 值为 isolate 的元素，  
* -webkit-overflow-scrolling 值为"touch"的元素  
* 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值  
* contain 属性值为 layout、paint 或包含它们其中之一的合成值（比如 contain: strict、contain: content）的元素。

层叠上下文的层级是 HTML 元素层级的一个层级，因为只有某些元素才会创建层叠上下文。可以这样说，没有创建自己的层叠上下文的元素 将被父层叠上下文包含。

在层叠上下文中，其子元素同样也按照上面解释的规则进行层叠。
<b>其子元素的 z-index 值只在父级层叠上下文中有意义</b>。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。(每个层叠上下文完全独立于它的兄弟元素：当处理层叠时只考虑子元素。)


## 层叠顺序-优先级
### 不使用z-index的情况（默认的情况）
堆叠顺序如下：（低-->高)
* 根元素（即HTML元素）`<`
* 正常流中非定位后代元素(没定位层级比有定位的低) `<`  
  >总是先于定位元素渲染，所以表现就是在定位元素下方，跟在HTML中出现的顺序无关。 
* 浮动元素(浮动元素之间是不会出现z-index重叠的) `<`
* 有定位后代元素(越靠后出现 层级越高)  
  >没有指定z-index值的定位元素，他们的堆叠顺序取决于在HTML文档中的顺序，越靠后出现的元素，位置越高，和定位属性无关。  


![不使用z-index](/img/zIndex1.png)
分析：
>
    #5没有定位，处于正常流，所以根据以上规则，先于#1,#2,#3,#4这些已定位元素渲染，在最下方。

    #1，#2，#3，#4都是已定位元素，且未设置z-index，所以根据其在文档中出现的顺序依次被渲染，可以去掉apacity查看清晰效果。

### 使用z-index
z-index只适用于已经定位的元素
>
    定位元素z-index越大，层级越高（限同一父元素）
    transform-origin


![zindex](/img/zIndex2.png)

## z-index:0和auto区别
层级理解上，定位元素z-index:auto可以看成是z-index:0； 但是从层叠上下文来讲，两者却有着本质差异。

z-index:0 的会创建一个新的层叠上下文
而auto 不会

## z-index不起作用情况：
* 父标签 position属性为relative；
  >解决：改为position:absolute；
* 问题标签无position属性,不包括static 
  >解决：添加position属性
* 问题标签含有浮动(float)属性。
  >解决：去除浮动