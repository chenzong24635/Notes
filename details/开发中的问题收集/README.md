# bug/功能实现 收集
# IE
### IE10 图片需设置高度（不会根据宽度缩放）

### 在style里添加以下属性ie10不会显示 （放在class里）
* justify-content
* align-items
* align-self
* align-content
* order
* flex-grow
* flex-shrink
* flex-basis


# vue-awesome-swiper相关
## vue-awesome-swiper 添加点击事件失效问题

直接在 swiper-slide 上绑定 @click 事件不会触发

须在 options 里的 on 添加

[参考](https://www.pianshen.com/article/74411480065/)

```js
let vm = null;
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        loop: true, // 循环滚动
        autoplay: {
          delay: 500,
          disableOnInteraction: false, // 如果设置为false，则在用户交互（滑动）后不会禁用自动播放，每次交互后都会重新启动自动播放
        },
        slidesPerview: 1, //预览个数
        init: true, // 事件将在Swiper初始化之后立即触发
        observe: true, // 设置为true以启用Swiper及其元素上的变异观察器。在这种情况下，如果您每次更改Swiper的样式（如hide/show）或修改其子元素（如添加/删除幻灯片），Swiper都会更新（重新初始化）
        observeParents: true, //是否监视Swiper父元素的突变
        allowTouchMove: false, //是否允许触摸滑动
        on: {
          click: function () {
            // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
            // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
            const realIndex = this.realIndex;
            vm.handleClickSlide(realIndex);
          },
        },
      },
    };
  },
  created() {
    vm = this;
  },
};
```

[swiperjs - api](https://swiperjs.com/api/#methods)

## vue-awesome-swiper 为内容添加 el-tooltip 时，拷贝列时，不会拷贝此元素

swiper 会拷贝预览个数（即预览几个拷贝几个放到最后），
但是添加 el-tooltip 组件时，拷贝的几个并不会同时拷贝 el-tooltip，

```html
<swiper ref="swiper" :options="swiperOptions">
  <swiper-slide v-for="item in lists" :key="item.id">
    <el-tooltip effect="dark" :content="`${item.content}${item.date}`">
      <p>{{item.content}}-- {{item.date}}</p>
    </el-tooltip>
  </swiper-slide>
</swiper>
```

解决:自己写个滚动。。。

# Element-UI相关
## el-slider日期滑动

## el-select下拉框滚动加载
https://segmentfault.com/a/1190000014972548
https://github.com/Ray-56/m-dream/issues/8

## el-table 自定义表头内容
https://blog.csdn.net/qq_32614411/article/details/80880785
### render-header

  ```html
  <el-table-column align="right" :render-header="renderHeader">
      <template slot-scope="scope">{{scope.row.name}}</template>
  </el-table-column>
  ```
* 使用JSX
  ```js
  renderHeader(h, { column, $index }){
    return (
      <div>
          <span>xxx</span>
          <el-tooltip effect="dark" content="xxx" placement="bottom">
            <i class="el-icon-warning"></i>
          </el-tooltip>
      </div>
    )
  }
  }
  ```
  编译报错，需要安装JSX语法编译工具
  npm install\
    babel-plugin-syntax-jsx\
    babel-plugin-transform-vue-jsx\
    babel-helper-vue-jsx-merge-props\
    babel-preset-es2015\
    --save-dev

  配置.babelrc文件

  {
    "presets": ["es2015"],
    "plugins": ["transform-vue-jsx"]
  } 

* 不使用JSX，直接使用渲染函数
  ```js
  renderHeader(h, data) {
      return h("div", [
          h("span", ['实收总金额(元) ']),
          h("el-tooltip", {
              attrs: {
                  class: "item",
                  effect: "dark",
                  content: "实收总金额 = 收款总金额 - 退款总金额",
                  placement: "bottom"
              }
          }, [
              h("i", {
                  'class': 'el-icon-warning table-msg'
              })
          ])
      ])
  }
  ```

### slot-header
当有个需求：hover+click表头都需要显示不同的内容
```html
  <el-table-column >
      <!-- slot="header、 #header -->
      <template slot="header" slot-scope="scope">
        <el-tooltip placement="top" content="这里是hover显示的内容" >
          <el-popover trigger="click" >
            <div>这里是点击表头显示的内容</div>
            <div slot="reference"><span>这里是表头的内容</span></div>
          </el-popover>
        </el-tooltip>
      </template>
  </el-table-column>
```

## el-autocomplete使用clearable,点击清除触发事件与重新输入值提示不显示问题
https://blog.csdn.net/weixin_43953710/article/details/107657918

```js
querySearch(queryString, cb) {
 this.$refs.elautocomplete.activated=true || this.$refs.elautocomplete.handleFocus()

 cb(results);

} 
```


## el-popver和el-dialog同时显示时，点击dialog，popover会隐藏

解决：将dialog的点击事件阻止冒泡
```html
<el-dialog 
  @click.native.stop="e=>e.stopPropagation()"
>
</el-dialog>
```

## IE 浏览器element-ui table: show-overflow-tooltip 临界值时失效
在ie浏览器中有时单元格里的内容过长并且显示了省略号，但是鼠标滑上却不显示tooltip。

这是因为单元格的padding-right影响到的；

show-overflow-tooltip 跟你设置的宽度只差两个字符时是不显示的
```css
.el-table .cell,
.el-table th div {
  padding-right: 0;
}
```

## tabled的多选
```html
<el-table
  ref="table"
  :data="[]"
  @selection-change="tableSelect"
  :row-key="getRowKeys"
>
  <el-table-column 
    :selectable="tableSelectable"
    type="selection"
    width="60"
    :reserve-selection="true"
    fixed
  >
  </el-table-column> 
</el-table>  
<script>
  export default{
    methods: {
      tableSelect(val) {
        this.selectList = val;
      },
      // select禁用
      tableSelectable(row, index) {
        return true
      },
      // 设置每行的唯一标识
      getRowKeys(row) {
        return row.id
      }
    }
  }
</script>  
```

## element的 el-table-column 使用slot插槽 v-if 报错
https://blog.csdn.net/weixin_34087503/article/details/91385563
```js
[Vue warn]: Error in render: "TypeError: u.$scopedSlots.default is not a function"
```

原因是因为表格是element-ui通过循环产生的，而vue在dom重新渲染时有一个性能优化机制，就是相同dom会被复用，通过key去标识一下当前行是唯一的，不许复用，就行了。

在其和其之后的一个显示的组件上添加 :key="Math.random()"复制代码
```html
<el-table-column label="DEMO" v-if="show" :key="Math.random()">
    <template slot-scope="scope">{{scope.row.demo}}</template>
</el-table-column>
<el-table-column prop="demo1" label="DEMO1" :key="Math.random()"></el-table-column>
```

## element 的 el-table 的 fixed 遮盖问题

如果页面够宽，表格没有水平滚动条时,表格底部会有列被遮盖。

### css 解决

覆盖原先 fixed 样式

```css
/deep/ .el-table__fixed,
/deep/ .el-table__fixed-right {
  height: 100% !important;
}

```

### js 解决

动态判断 fixed 属性是否添加，页面 resize 时，判断表格宽度，达到某个阈值时，水平滚动条显示则添加 fixed，否则去除

```js
resize: _debounce(function () {
  let table = document.getElementById("table");
  this.isFixedTable = table.offsetWidth < "某个宽度"; // 宽度需先通过resize浏览器宽度判断在小于哪个值下table才会出现水平滚动条
});
```

## element 的 el-table 的 fixed,鼠标悬停时高亮背景颜色混乱问题

### css

[参考](https://blog.csdn.net/zeng092210/article/details/98757941)
尝试未果，依旧有问题

```css
.el-table__body .el-table__row.hover-row td {
  background-color: #颜色;
}
```

### js 解决

给表格添加 mouseenter，mouseleave 事件，鼠标移入时，给该行添加 class

```html
<el-table
  ref="table"
  :data="tableData"
  id="table"
  @cell-mouse-enter="cellMouseEnter"
  @cell-mouse-leave="cellMouseLeave"
>
  <script>
    export default {
      methods: {
        cellMouseEnter(row, column, cell, event) {
          this.cellMouseEnterLeave(row, column, cell, event, "add");
        },
        cellMouseLeave(row, column, cell, event) {
          this.cellMouseEnterLeave(row, column, cell, event, "remove");
        },
        cellMouseEnterLeave(row, column, cell, event, type) {
          let index = row.index; //index属性需在 tableData 时添加
          let rowList = document
            .querySelector("#table")
            .querySelectorAll("table tbody");
          let len = rowList.length;
          for (let i = 0; i < len; i++) {
            let parentNode = rowList[i].parentNode.parentNode.parentNode; //获取table
            let tableRows = rowList[i].children; //获取table的所有tr
            if (
              tableRows[index]
              // && tableRows[index].id !== 'paymentDetailTable'，//当表格里有点击显示其它表格时需判断屏蔽
            ) {
              // 为该行添加/移除类名 hover-row
              // hover-row这个class样式 el-table已定义过
              tableRows[index].classList[type]("hover-row");
            }
          }
        },
      },
    };
  </script></el-table
>
```

## element，el-upload 上传，后端返回文件流下载

使用 http-request 实现自定义上传

```html
<el-upload :http-request="uploadFile"></el-upload>
<script>
  export default {
    methods: {
      uploadFile(fileObj) {
        let formDate = new FormData();
        formData.addend("file", fileObj.file);
        axios
          .request({
            url: "xxxx",
            method: "post",
            data: formData,
            responseType: "blob",
          })
          .then((res) => {
            let data = res.data;
            let blob = new Blob([data], "application/vnd.ms-excel");
            let fileName = "返回的文件.xls";
            if (window.navigator.msSaveBlob) {
              // ie下载
              window.navigator.msSaveBlob(blob, fileName);
            } else {
              let link = document.createElement("a");
              link.download = fileName;
              link.style.display = "none";
              link.href = window.URL.createObjectURL(blob);
              document.body.appendChild(link);
              link.click();
              // 点击后移除
              window.URL.revokeObjectURL(link.href);
              document.body.removeChild(link);
            }
          });
      },
    },
  };
</script>
```

# Vue相关
## keep-alive 下，deactivated 时 watch 和 computed 监听了 vuex 的变化不会销毁

每个页面里面设置的 watch 监听事件，如果监听了路由的变化或者 vuex 的变化，在切换页面的时候 watch 不会被销毁，导致下一个页面重复触发上一个 watch 监听的对象，重复请求接口。

### 解决 1：

- 设置个 boolean 值，在 activated/deactivated 时改变状态，监听时判断状态为 true 再执行方法

```js
export const mixin = {
  data () {
    return {
      activatedFlag: false
    };
  },
  mounted () {
    this.activatedFlag = true;
  },
  activated () {
    this.activatedFlag = true;
  },
  deactivated () {
    this.activatedFlag = false;
  }
};

export default = {
  mixins: [flagMixin],
  watch: {
    myName() {
      if(this.activatedFlag){
        // dosomething
      }
    }
  }
}
```

### 解决 2

```js
created() {
  this.watchFn()
},
actived() {
  this.watchFn()
},
deactivated() {
  this.unwatch()
},
methods: {
  watchFn() {
    this.unwatch = this.$watch('myName',() => {
      // dosomething
    })
  }
}
```


# echart相关
## 饼图，显示默认值（不是选中某个选项值，）

## 饼图多个legend滚动及样式修改
```js
legend: {
    type: 'scroll',
    // scrollDataIndex: 5,// 指定一页翻五个
    // pageIconColor: 'red', //翻页下一页的三角按钮颜色
    // pageIconInactiveColor: 'gold', //翻页（即翻页到头时）
    // pageIconSize: 11, //翻页按钮大小
    // pageButtonItemGap: 16,//翻页按钮的两个之间的间距
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    data: data.legendData,
    selected: data.selected
},

```

## echart 柱型图顶部加横线
https://blog.csdn.net/merryhyl/article/details/109630215

https://blog.csdn.net/qq_33281948/article/details/90026429

其中的主要思想就是将两个bar堆积起来，上面的bar值设置成小值，显示为横线，下面的bar设置成大值，并设置透明，制造成一种横线悬浮的假象。
```html
<script src="https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0-rc.1/echarts.js"></script>
<body>
  <div id="chart" style="width: 950px; height: 612px"></div>
  <script type="text/javascript">
    let myChart = echarts.init(document.getElementById("chart"));
    let datas = [10, 20, 30, 10, 20, 30];
    // 加的高度必须根据 data大小来设置，否则会出现横线，很高的情况
    // 获取最大值
    let max = Math.max(...datas.map(item=>item/1))；
    let height = max / 60;
    let allBarHeightData = datas.map(item=>item+max);
    let lineHeightData = datas.map(item=>max);
    let options = {
      title: {
        text: "世界人口总量",
        subtext: "数据来自网络",
      },
      tooltip: {
        trigger: "axis",
        formatter: function (params) {
          let relVal =
            '<span style="color:#333">' + params[0].name + "</span><br/>";
          params.forEach((item) => {
            console.log(item,'item');
            // series后面两个用来显示最上面的横线，因此无需显示
            let len = options.series.length - 2;
            console.log(options);
            if (item.seriesIndex < len) {
              relVal +=
                '<br/><span style="color:#999">' +
                item.seriesName +
                ':</span><span style="color:#333">' +
                item.value +
                "</span>";
            }
          });
          return relVal;
        },
        backgroundColor: "#fff",
        padding: [5, 10],
      },
      legend: {
        data: ["2011年", "2012年"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        // containLabel: true,
      },
      yAxis: {
        type: "value",
        // boundaryGap: [0, 0.01], // 坐标轴两边留白策略
        axisLine: {
          show: false,
        },
        axisTick: { // 是否显示坐标轴刻度
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#dadada'
          }
        }
      },
      xAxis: [
        // 底部x轴
        {
          type: "category", // 类目轴，适用于离散的类目数据
          axisLine: {
            show: false,
            lineStyle: {
              // color: "#000"
            }
          },
          axisTick: { // 是否显示坐标轴刻度
            show: false,
          },
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        // 头部x轴,用于下方 series的xAxisIndex
        {
          type: "category", // 类目轴，适用于离散的类目数据
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisPointer: {
            type: "none",
          },
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
      ],
      series: [
        {
          name: "2011年",
          type: "bar",
          stack: true,
          data: datas,
          itemStyle: {
            normal: {
              label: {
                show: true, //柱子上显示数字
                distance: 10, //数字距离柱子距离
                textStyle: { //数值样式
                  color: 'black',
                  fontSize: 16
                }
              },
              // barBorderRadius: 8,
              //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                let colorList = [
                  ["#C33531", "#fff"],
                  ["#EFE42A", "#fff"],
                  ["#64BD3D", "#fff"],
                  ["#EE9201", "#fff"],
                  ["#29AAE3", "#fff"],
                  ["#f9AAE3", "#fff"],
                ];
                let index = params.dataIndex;
                if (params.dataIndex >= colorList.length) {
                  index = params.dataIndex - colorList.length;
                }

                // 0, 0, 0 , 1 分别指的是 右/下/左/上四个方位.
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: colorList[index][0],
                  },
                  {
                    offset: 1,
                    color: colorList[index][1],
                  },
                ]);
              },
            },
          },
        },
        // {
        //   name: "2012年",
        //   type: "bar",
        //   stack: true,
        //   data: datas[1],
        //   itemStyle: {
        //     normal: {
        //       //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
        //       color: 'blue'
        //     }  
        //   },
        // },
        {
          name: "hideBar",
          stack: "breakevenEleGroup" /*数据组，需要设置才能将两个bar堆积在一起*/,
          type: "bar",
          xAxisIndex: 1, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)" /*设置bar为隐藏，撑起下面横线*/,
            },
          },
          // data: [19, 24, 30, 11, 35, 64],
          // data数据必须比之前的柱子总和多（多1即可，多的即横线距其它柱子距离）
          data: allBarHeightData
        },
        {
          /*这个bar是横线的显示*/
          name: "lineBar",
          stack: "breakevenEleGroup" /*数据组，需要设置才能将两个bar堆积在一起*/,
          type: "bar",
          xAxisIndex: 1,
          itemStyle: {
            normal: {
              color: function (params) {
                let colorList = [
                  "#C33531",
                  "#EFE42A",
                  "#64BD3D",
                  "#EE9201",
                  "#29AAE3",
                  "#f9AAE3",
                ];
                return colorList[params.dataIndex];
              },
            },
          },
          // 线高度
          data: lineHeightData
        },
      ],
    };

    myChart.setOption(options);
  </script>
</body>

```

## echart 柱型图渐变色
https://blog.csdn.net/qq_32674347/article/details/89354740
```js
series: [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "bar",
    itemStyle: {
      normal: {
        // barBorderRadius: 8,
        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
        color: function (params) {
          var colorList = [
            ["rgb(14,102,179)", "rgb(51,36,169)"],
            ["#F5cF0D", "#fff"],
            ["#61dbe8", "#0785de"],
            ["#ff9717", "#ff4518"],
          ];
          var index = params.dataIndex;
          if (params.dataIndex >= colorList.length) {
            index = params.dataIndex - colorList.length;
          }
          	
          // 0, 0, 0 , 1 分别指的是 右/下/左/上四个方位. 
          return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: colorList[index][0],
            },
            {
              offset: 1,
              color: colorList[index][1],
            },
          ]);
        },
      },
    },
  },
];
```
或者
```js
options ={
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'red',
      },
      {
        offset: 1,
        color: 'blue',
      },
    ])
}
```

```js
// https://echarts.apache.org/zh/option.html#backgroundColor
options ={
  // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
  color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
          offset: 0, color: 'red' // 0% 处的颜色
      }, {
          offset: 1, color: 'blue' // 100% 处的颜色
      }],
      global: false // 缺省为 false
  }
}
```

## echart 图形顶部放置图片

https://blog.csdn.net/qq_39759115/article/details/80506194

1. 不同柱子不同图片

````js
```series: [
  makePoint: {
    data: [
      {xAixs:}
    ]
  }
]

2. 所有
```js
label: {
  show: true,
  position: 'top',
  padding: [5, 10],
  height:100,
  width: 60,
  formatter: '{c}%',
  backgroundColor: {
      image: src
  },
  rich: {}
}
````

## echart-柱状图空白区域点击监听

使用 myChart.getZr().on('click' , params => {})监听画布，  
配合 myChart.containPixel('grid', pointInPixel) 方法判断点击位置是否在坐标系里面，从而解决需求问题。

```js
let myChart = this.myChart;
// 取消上次点击，避免重复点击
myChart.geZr().off("");
// 通过params.target是否为undefined判断是否点击到了空白处
// myChart.getZr().on('click', params => {
//   if(params.target) {
//     console.log('非空白区')
//   } else {
//     console.log('空白区');
//   }
// })

myChart.getZr().on("click", (params) => {
  let pointInPixel = [params.offsetX, params.offsetY];
  // 点击空白区域包括柱子的空白区域
  if (!myChart.containPixel("grid", pointInPixel) || !params.target) {
    // dosomething
  } else {
    // 点击柱子（有数据显示的柱子）,获取对应的柱子索引
    let index = myChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0];
    // 获取x轴数据
    let xData = myChart.getOption().xAxis[0].data[index];
    // dosomething
  }
});
```

# 文件相关
## 转换 blob 类型的数据，然后进行下载各种文件，还有各种 blob 转换的文件类型

[参考](https://blog.csdn.net/lu6545311/article/details/108409633)

```js
var blob = new Blob(ress, { type: "application/vnd.ms-excel;" }); //type这里表示xlsx类型
var link = document.createElement("a");
let windowURL = window.URL || window.webkitURL;
var href = windowURL.createObjectURL(blob); //创建下载的链接
link.href = href;
link.download = "result.xlsx"; //下载后文件名
document.body.appendChild(link);
link.click(); //点击下载
document.body.removeChild(link); //下载完成移除元素
windowURL.revokeObjectURL(href); //释放掉blob对象
```

## pdf 预览：

https://www.it1352.com/1624158.html

### iframe： 不兼容 IE

```html
<object data="您的pdf地址" type="application/pdf" width="100%" height="100%">
  <iframe src="您的PDF地址" width="100%" height="100%" style="border: none;">
    该浏览器不支持PDFs，请单击查看:
    <a href="您的PDF地址">Download PDF</a>
  </iframe>
</object>
```

```js
// pdf转为blob
let blob = "";
// 生成url
let url = URL.createObjectURL(blob);
```

### vue-pdf

https://blog.csdn.net/qrcode_y/article/details/108073246

https://blog.csdn.net/zone_dream/article/details/84580612

```html
<pdf
  :src="url"
  style="width: 100%; height: 600px;overflow-y: scroll;overflow-x: hidden;"
></pdf>

<pdf
  v-for="i in numPages"
  :key="i"
  :src="src"
  :page="i"
  ref="myPdfComponent"
></pdf>
<script>
  import pdf from "vue-pdf";
  // 解决部分文字不显示的问题
  import CMapReaderFactory from "vue-pdf/src/CMapReaderFactory.js";

  this.src = pdf.createLoadingTask({ url: datas, CMapReaderFactory });
  this.src.promise.then((pdf) => {
    this.numPages = pdf.numPages;
  });
</script>
```

### pdf.js

[pdf.js](https://github.com/mozilla/pdf.js/)

[vue-pdf.js-demo](https://github.com/goSunadeod/vue-pdf.js-demo)

[其它参考文章](https://blog.csdn.net/weixin_43911758/article/details/108229316)

#### 引用 web 文件夹

- 下载 pdf.js 的相关文件，推荐直接拷贝 vue-pdf.js-demo 里面的文件，然后放到 static 目录(或 public 目录：vue-cli3)下

  - static: `/static/pdf/web/viewer.html?file=${xxx}`
  - public: `/pdf/web/viewer.html?file=${xxx}`

- 预览本地 pdf

  - 将 viewer.js 的 10053 放开，10054 注释，输入路径 http://localhost:8080/static/pdf/web/viewer.html
  - 或者访问 http://localhost:8080/static/pdf/web/viewer.html?file=/static/pdf/web/demo.pdf

- 预览线上或 blob 流文件
- 在组件中合适的地方放入 iframe,将 pdf 的 url 路径拼接

  >

     <iframe :src="`/static/pdf/web/viewer.html?file=${encodeURIComponent(url)}`"  width="100%" height="100%" style="border:none;"></iframe>

- 也可通过 a 标签在本页面直接预览
  >
      <a :href="`/static/pdf/web/viewer.html?file=${encodeURIComponent(url)}`" >点我预览</a>
- window.open 打开新的页面进行预览
  > window.open(`/static/pdf/web/viewer.html?file=${encodeURIComponent(url)}`)

#### 使用可能出现的问题

- 在 pdf 预览的时候可能会存在跨域问题

  > 将 pdf/web/viewer.js 的 1863 行注释即可

- 预览文件 title 标题标题问题
  > 因为后端查找在服务器上的文件是 id 的地址，所以预览的时候自动换的就是 id 值或者是 undefined，现在手动添加预览文件名
  > 找到 pdf/web/viewer.js 的 1246 行的 `title = decodeURIComponent((0, _pdfjsLib.getFilenameFromUrl)(url)) || url;`
  > 改为 `title = decodeURIComponent(url.split('filename=')[1])`,
  > 同时在路径最后面再拼接上 filename = '任意文件名'（`/static/pdf/web/viewer.html?file=${encodeURIComponent(url)&filename=abc}`）

#### 其它

- pdf 加载失败时，更换页面样式
  > 找到 viewer.js 的 1378 行
    <!-- 获取 viewer.html的body -->
  let body = document.body || document.querySelector('.loadingInProgress')
    <!-- 自定义内容、样式 -->
  body.style.background = '#fff'
  body.innerHTML = `<p>加载出错</p>`

#### 引用 build

[](https://github.com/mozilla/pdf.js/blob/master/examples/learning/prevnext.html)

```html
<canvas id="pdf" width="400" height="400"></canvas>
<script>
  import pdfJS from "/static/pdf/build/pdf.js";

  export default {};
</script>
```

## doc 预览

[](https://github.com/evidenceprime/html-docx-js)

### [使用微软自己的 api](https://blog.csdn.net/qxianx/article/details/81317894)

```html
<iframe
  style="width: 100%;min-height: 600px;"
  src="https://view.officeapps.live.com/op/view.aspx?src=文件地址"
  width="100%"
  height="100%"
  frameborder="1"
></iframe>
```

“https://view.officeapps.live.com/op/view.aspx?src=”的后面拼上你的服务器word文件地址；

- 最好通过 encodeURIComponent 处理一下 url 地址
- 这个文件的服务器地址必须是域名，不可以使用 ip 地址，且端口需要是 80；（这也是 不太方便的一个限制条件，第三方的一般无此限制）


但Office Web View对word和ppt大小限制为10M，excel为5M


## word 转换为 html

https://www.cnblogs.com/heavenYJJ/p/9805202.html

### IE 的 ActiveXObject 方法

```js
var w = new ActiveXObject("Word.Application");
var docText;
var obj;
if (w != null) {
  w.Visible = true;
  obj = w.Documents.Open("D:\\word\\go.doc");
  docText = obj.Content;
  w.Selection.TypeText("Hello");
  w.Documents.Save();
  document.write(docText); //Print on webpage
  /*The Above Code Opens existing Document
    set w.Visible=false
    */
  /*Below code will create doc file and add data to it and will close*/
  w.Documents.Add();
  w.Selection.TypeText("Writing This Message ....");
  w.Documents.Save("D:\\word\\go.doc");
  w.Quit();
  /*Don't forget
    set w.Visible=false */
}
```

### [docx2html](https://github.com/lalalic/docx2html)

```js
// html 部分
<input type="file" @change="handleFileSelect">
<textarea id="text"></textarea>

// js部分
handleFileSelect(event){
	require("docx2html")(event.target.files[0]).then(function(converted){
		console.log(converted)
		document.querySelector('textarea').value=converted.toString()
	})
}
```

# 其它
## window.open 打开新窗口浏览器拦截

[](https://blog.csdn.net/yypsober/article/details/79487217)

### 表单提交

```js
var form = document.createElement("form");
form.action = "www.baidu.com?id=1";
form.target = "_blank";
form.method = "POST";
document.body.appendChild(form);
form.submit();
```

### 创建 a 标签,

```js
var a = document.createElement("a");
a.setAttribute("href", url);
a.setAttribute("target", "_blank");
a.setAttribute("id", url);
// 防止反复添加
if (!document.getElementById(url)) {
  document.body.appendChild(a);
}
a.click();
```

### 直接将打开窗口操作放在按钮/链接的 onclick 事件中

```js
<a href="javascript:void(0)" onclick="window.open(url)"></a>
```

### 延迟这个打开操作

```js
setTimeout("window.open(url);", 500); // 延迟时间不能太短 否则也会被拦截
```

### 以上依旧被拦截，则使用

```js
var tempwindow = window.open("_blank"); //打开一个窗口，然后

tempwindow.location = "xxx"; //跳转到
```

[如在 ajax 的回调里调用依旧失效时，可以用此方法](https://www.cnblogs.com/hss-blog/p/10194830.html)

```js
var tempwindow = window.open("_blank"); // 在ajax外部先打开空白新窗口
ajax({}).then((data) => {
  //window.open('http://www.jb51.net'); 这种方法会被浏览器拦截（错误方法）
  tempwindow.location = "http://www.baidu.com"; //异步成功之后再给新窗口的localtion赋值
});
```

或者将 ajax 请求异步改为同步（async: false）

## 浏览器打开图片的 url 默认是下载

[参考](https://www.zhihu.com/question/23528976/answer/26355063)

- 图片显示：通过绑定域名访问图片文件，确实是直接显示；
- 图片下载：如果有通过绑定域名而直接下载需求的话，可以设置 HTTP 头的 Content-Disposition=attachement;filename=xxxx，即可实现文件另存为"xxxx"；Content-Disposition=attachement 则按照原文件名另存为的下载模式，可以满足开发者的不同需求；

- 2、若使用 OSS 的默认域名： 则`Content-Disposition`的设置均会被系统默认的下载策略覆盖，都是图片下载；

使用 OSS 上传的时候如果指定了 Content-Type 是 image/jpeg，则产生的外链是在浏览器上直接显示。如果设置的 Content-Type 是 application/octet-stream 这种或者 multipart/form-data 这种，则外链是直接下载的
