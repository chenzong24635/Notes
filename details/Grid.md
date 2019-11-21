# Grid

## 基本

Grid(网格)布局，是一个二维的基于网格的布局系统，它的目标是完全改变我们基于网格的用户界面的布局方式

display:grid | inline-grid;

使用 grid-template-columns 和 grid-template-rows 设置 列 和 行 的尺寸大小，  
然后通过 grid-column 和 grid-row 将其子元素放入这个 grid(网格) 中。


* 网格项(Grid Item):网格容器（Grid Container）的直接子元素
>
    这里 item 元素就是网格项(Grid Item)，但是 sub-item 不是。
    <div class="container">
      <div class="item"></div> 
      <div class="item">
        <p class="sub-item"></p>
      </div>
      <div class="item"></div>
    </div>
* 网格线(Grid Line):构成网格结构的分界线。它们既可以是垂直的（“列网格线(column grid lines)”），也可以是水平的（“行网格线(row grid lines)”），并位于行或列的任一侧。例如，这里的黄线就是一条列网格线  
  <img src="../img/grid-line.svg" width="40%" >
  <!-- ![grid-line.svg](/img/grid-line.svg) -->

* 网格轨道(Grid Track): 两条相邻网格线之间的空间。你可以把它们想象成网格的列或行。  
  下图是第二条和第三条 行网格线 之间的 网格轨道(Grid Track)。  
  <img src="../img/grid-track.svg" width="40%" >

* 网格单元格(Grid Cell):两个相邻的行和两个相邻的列网格线之间的空间。这是 Grid(网格) 系统的一个“单元”。  
  下图是第 1 至第 2 条 行网格线 和第 2 至第 3 条 列网格线 交汇构成的 网格单元格(Grid Cell)。
  <img src="../img/grid-cell.svg" width="40%" >


* 网格区域(Grid Area):4条网格线包围的总空间。一个 网格区域(Grid Area) 可以由任意数量的 网格单元格(Grid Cell) 组成。  
  下图是 行网格线1和3，以及列网格线1和3 之间的网格区域。  
  <img src="../img/grid-area.svg" width="40%" >
  
  
## 容器属性
* display: 将元素定义为网格容器，并为其内容建立新的 网格格式上下文。
  >grid | inline-grid  
  >块级网格 | 内联网格

* grid-template-columns / grid-template-rows: 使用空格分隔的值列表，用来定义网格的列和行。这些值表示 网格轨道(Grid Track) 大小，它们之间的空格表示网格线。
  >\<track-size>： 长度值(px...) | auto | 百分比 | 等份网格容器中可用空间（使用 fr 单位）  
  >\<line-name>：你可以选择的任意名称
  >grid-template-columns: \<track-size> ... | \<line-name> \<track-size> ...;  
  >
      .container {
        grid-template-columns: 40px 50px auto 50px 40px;
        grid-template-rows: 25% 100px auto;
      }
  <img src="../img/template-columns-rows-01.svg" width="40%" >
  
* grid-template-areas


* grid-template


* grid-column-gap


* grid-row-gap


* grid-gap


* justify-items


* align-items


* place-items


* justify-content


* align-content


* place-content


* grid-auto-columns


* grid-auto-rows


* grid-auto-flow


* grid

## 项目属性

* grid-column-start


* grid-column-end


* grid-row-start


* grid-row-end


* grid-column


* grid-row


* grid-area


* justify-self


* align-self


* place-self

