
# HTML5新标签
* \<header>	定义了文档的头部区域
* \<article>	定义页面独立的内容区域。
* \<aside>	  定义页面的侧边栏内容。
* \<main>	  定义文档的主内容。
* \<nav>	    定义导航链接的部分。
* \<section>	定义文档中的节（section、区段）。
* \<footer>	定义 section 或 document 的页脚。

* \<picture> 屏幕匹配的不同尺寸显示不同图片
  ```html
  <picture>
    <source media="(min-width: 465px)" srcset="circle.png">
    <source media="(min-width: 650px)" srcset="circle@2x.png">
    <img src="circle.png">
  </picture>
  ```
  注意:\<img> 元素是放在最后一个 \<picture> 元素之后，如果浏览器不支持该属性则显示 \<img> 元素的的图片。

* \<canvas>   
* \<audio>	  
* \<video>	 
* \<source> 定义多媒体资源 \<video> 和 \<audio>
* \<embed>	 定义嵌入的内容，比如插件。
* \<track>  为\<video> 和 \<audio> 元素之类的媒介规定外部文本轨道。

* \<datalist>	定义选项列表。与input配合使用来定义input可能的值。
    ```html
      <input list="browsers" name="browser">
      <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
      </datalist>
    ```

* \<keygen>	规定用于表单的密钥对生成器字段。
* \<output>	定义不同类型的输出，比如脚本的输出。
* \<bdi>	允许您设置一段文本，使其脱离其父元素的文本方向设置。
* \<command>	定义命令按钮，比如单选按钮、复选框或按钮
* \<details>	用于描述文档或文档某个部分的细节
* \<dialog>	定义对话框，比如提示框
* \<summary>	标签包含 details 元素的标题
* \<figure>	规定独立的流内容（图像、图表、照片、代码等等）。
* \<figcaption>	定义 <figure> 元素的标题
* \<mark>	定义带有记号的文本。
* \<meter>	定义度量衡。仅用于已知最大和最小值的度量。
* \<progress>	定义任何类型的任务的进度。
* \<ruby>	定义 ruby 注释（中文注音或字符）。
* \<rt>	定义字符（中文注音或字符）的解释或发音。
* \<rp>	在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
* \<time>	定义日期或时间。
* \<wbr>	规定在文本中的何处适合添加换行符。

[HTML5 新增加的input输入类型](https://www.w3school.com.cn/html/html_form_input_types.asp)
* color
* date
* datetime
* datetime-local
* email
* month
* number
* range
* search
* tel
* time
* url
* week

[HTML5 新增加的input属性](https://www.w3school.com.cn/html/html_form_attributes.asp)
* autocomplete
* autofocus
* form
* formaction
* formenctype
* formmethod
* formnovalidate
* formtarget
* height 和 width
* list
* min 和 max
* multiple
* pattern (regexp)
* placeholder
* required
* step