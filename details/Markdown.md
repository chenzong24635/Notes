
### 

<details open>
  <summary>markdown 语法</summary>

[Markdown 语法说明](https://www.appinn.com/markdown/)

<!-- * css样式：可在markdown里写css样式,一般写在头部
>
  <style>
    a[href]{
      position:relative;
      padding-right:30px;
    }
    a[href="#TOP"]:after{
      content: '';
      position:absolute;
      top: 0;
      bottom:0;
      right: 0;
      background:url('/img/backward.png') no-repeat 100% 100% / cover;
      width:30px;
      height:30px;
    }
  </style> -->

- 分级标题

  >

      # 一级标题
      ## 二级标题
      ### 三级标题
      #### 四级标题
      ##### 五级标题
      ###### 六级标题  <!--最多6级标题-->

- 对齐方式

  >

      <center>行中心对齐</center>
      <p align="left">行左对齐</p>
      <p align="right">行右对齐</p>

- 跳转
  > 
      [点击跳转](#-1)

      # 1

  >

      [点击跳转](#5)  //限数字 1,1.5之类
      <a id="5">跳转到这</a>

      里面也能放图片
      [![img](/img/backward.png)](#backward)
      [<img src="/img/backward.png" width="20px" />](#backward)

  >

      <a href="#点击跳转">点击跳转</a>
      <a name="点击跳转">跳转到这</a>

- select选择
  >
      - [x] 步骤一
      - [x] 步骤二
        - [ ] 步骤2.2
        - [ ] 步骤2.3
      - [ ] 步骤三


- 代码折叠、展开

  >

      <details open>
        <summary>伸/缩</summary>
        open：展开
        测试内容,
        IE不支持
      </details>

- 文章中添加代码

1.  使用反引号 :
    >
        `let a = 0`
2.  使用制表符或者至少 4 个空格进行缩进的行:

    >

        >
            let a = 0

3.  推荐
    >
        ```js
        let a = 0
        ```

        //```后面添加js是为了增加代码可读性

- 生成多行相同代码
  div.item\*3>{\$}

  >

      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>

- 换行
  两长段落之间没有空行 ，如何换行

  >

      段落末尾空两格 （space + space）

- 表格
  >
      | Tables | Are  | Cool |
      |:--|:---------:|----:|
      | 靠左对齐 | 居中对齐  | 靠右对齐 |
      | *斜体* | **加粗**     | `渲染效果`
      | 书写时原始文字可以不用对整齐  |   |   |

>

    冒号: 在第二行中不同的位置表示对齐方式，在无冒号：的情况下默认靠左对齐
    标题元件(表头)至少需要3个---来分隔
    最外面的竖线|可以省略，书写的时候也可以不必需让原始的文字对得很整齐

- 分割线

  >

      * * *
      ***
      *****
      - - -
      -----------

- 强调——粗体和斜体

  >

      *斜体*
      **粗体**
      ~~删除线~~

- 链接

  >

      1. aa<a.com>aa

      2. [链接文字](链接地址)

- 添加复选框
```
- [x] 1
- [x] 2
  - [ ] 2.1
  - [ ] 2.2
- [ ] 3
```
* [x] 1
* [x] 2
  * [ ] 2.1
  * [ ] 2.2
* [ ] 3

- 多次引用同一链接

>

    // []里的内容要一致
    [链接文字][]

    //这个不会显示
    [链接文字]: http://www.aaa.com/

>

    [github][1]
    [1]:https://github.com

- 特殊字符

| 特殊字符 | 描述           | 字符代码  |
| :------- | :------------- | :-------- |
|          | 空格符         | \&nbsp;   |
| <        | 小于号         | \&lt;     |
| >        | 大于号         | \&gt;     |
| &        | 和号           | \&amp;    |
| ￥       | 人民币         | \&yen;    |
| ©        | 版权           | \&copy;   |
| ®        | 注册商标       | \&reg;    |
| °C       | 摄氏度         | \&deg;C   |
| ±        | 正负号         | \&plusmn; |
| ×        | 乘号           | \&times;  |
| ÷        | 除号           | \&divide; |
| ²        | 平方（上标 ²） | \&sup2;   |
| ³        | 立方（上标 ³） | \&sup3;   |

</details>
