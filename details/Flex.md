# [Flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
# <a href="#"></a>
<a name=""></a>

# 基本
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

display: flex | inline-flex; (适用于父类容器元素上)

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。


![flex](/img/flex/flex.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

# 容器属性

## flex-direction: 决定主轴的方向（即项目的排列方向）
  >row（默认值）：主轴为水平方向，起点在左端。  
  >row-reverse：主轴为水平方向，起点在右端。  
  >column：主轴为垂直方向，起点在上沿。  
  >column-reverse：主轴为垂直方向，起点在下沿。  

## flex-wrap: 是否换行，
  >nowrap（默认）：不换行。    
  >wrap: 换行，第一行在上方。  
  >wrap-reverse：换行，第一行在下方。


## flex-flow: flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

## justify-content:定义项目在主轴上的对齐方式
  >flex-start（默认值）：左对齐  
  >flex-end:右对齐  
  >center: 居中对齐  
  >space-between: 两端对齐，项目的间隔都相等。 
  >space-around: 两端对齐，项目的间隔相等。两端保留的间距为项目间距大小的一半。  
  >space-evenly: 两端对齐，项目的间隔相等。两端保留的间距等于项目间距大小

  ![justify-content](/img/flex/justify-content.svg)

## align-items：定义项目在交叉轴上对齐方式
  >stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
  >flex-start：交叉轴的起点对齐。  
  >flex-end：交叉轴的终点对齐。  
  >center：交叉轴的中点对齐。  
  >baseline: 项目的第一行文字的基线对齐。  
  
  ![align-items](/img/flex/align-items.svg)

## align-content:定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  >stretch（默认值）：轴线占满整个交叉轴。  
  >flex-start：与交叉轴的起点对齐。  
  >flex-end：与交叉轴的终点对齐。  
  >center：与交叉轴的中点对齐。  
  >space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。 
  >space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔>比轴线与边框的间隔大一倍。  

  ![align-content](/img/flex/align-content.svg)

# 项目属性

## order:定义项目的排列顺序。数值越小，排列越靠前，默认为0。
  >order: number（自然数）

  ![order](/img/flex/order.svg)


## flex:flex-grow flex-shrink flex-basis 简写形式(后两个属性可选)
  >flex: number number length|auto 
  >默认值：0      1      auto
  >该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)

## flex-grow:定义项目的扩展比例，默认为0(即如果存在剩余空间，也不放大)。
  > flex-grow: number（正整数）; /## default 0 */  
  >
      根据各个项目的flex-grow分配剩余空间

      容器600px，项目100px，剩余的300px会根据扩展比列分配
      first-child分配到2/3即200px,宽为300px
      last-child分配到1/3即100px,宽为200px
      .box { 
        display: flex; 
        justify-content: space-around;
        width: 600px;
      }
      .box-item{
        background-color: gold;
        border:1px solid #000;
        box-sizing: border-box;
        width: 100px;
      }
      .box-item:first-child{
        flex-grow:2;
      }
      .box-item:last-child{
        flex-grow:1;
      }
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
      </div>

## flex-shrink:定义项目的收缩比例，默认为1(即如果空间不足，该项目将缩小)。
  > flex-shrink: number（正整数） ; /## default 1 */
  >如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。  
  >如果一个项目的flex-shrink属性为0，当空间不足时其不缩小。  

## flex-basis：定义项目的默认基准值。在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
  >flex-basis: auto (默认值) | length（单位px,..) | percentage(%)
  >会覆盖原本设置的width
  >

      上面css代码.box-item添加flex-basis: 150px;
      则：项目的width:150px;剩余150px;
      根据扩展比列分配
      first-child分配到2/3即100px,宽为250px
      last-child分配到1/3即50px,宽为200px

## align-self:重定义单个项目的align-items属性,除了auto 其他值同align-items  
  >align-self: auto | flex-start | flex-end | center | baseline | stretch  
  >默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则为stretch。  

  ![align-self](/img/flex/align-self.svg)