# requestAnimationFrame

# insertAdjacentHTML



insertAdjacentHTML(position, text) 将指定的文本解析为 Element 元素，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用innerHTML操作更快。
  beforebegin：元素自身的前面。  
  afterbegin：插入元素内部的第一个子节点之前。  
  beforeend：插入元素内部的最后一个子节点之后。  
  afterend：元素自身的后面。  

安全问题
使用 insertAdjacentHTML 插入用户输入的HTML内容的时候，需要转义之后才能使用。
如果只是为了插入文本内容（而不是HTML节点），不建议使用这个方法，建议使用node.textContent 或者 node.insertAdjacentText()。因为这样不需要经过HTML解释器的转换，性能会好一点。

# CustomEvent

# IntersectionObserver 判断元素是否进入了"视口"（viewport）
[详情](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)


# 
跨域图片能正常裁剪（图片未转化成base64），应该满足三个条件：

* img元素中设置crossorigin属性  
* 图片允许跨域，设置响应头Access-Control-Allow-Origin  
* 使用js方式请求图片资源, 需要避免使用缓存，设置url后加上时间戳，或者http头设置Cache-Control为no-cache

主要原因是：
* 如果使用跨域的资源画到canvas中，并且资源没有使用CORS去请求，canvas会被认为是被污染了, canvas可以正常展示，但是没办法使用toDataURL()或者toBlob()导出数据，见Allowing cross-origin use of images and canvas。 所以通过在img标签上设置crossorigin，启用CORS，属性值为anonymous，在CORS请求时不会发送认证信息,见HTML attribute: crossorigin。

* 在启用CORS请求跨域资源时，资源必须允许跨域，才能正常返回，最简单的方式设置响应头Access-Control-Allow-Origin

* 图片已经通过img标签加载过，浏览器默认会缓存下来，下次使用js方式再去请求，直接返回缓存的图片，如果缓存中的图片不是通过CORS请求或者响应头中不存在Access-Control-Allow-Origin，都会导致报错。