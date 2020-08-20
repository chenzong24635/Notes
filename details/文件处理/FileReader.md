[FileReader--MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

### FileReader
读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

* 常用

let fr = new FileReader()

readyStatus
>文件状态
>>EMPTY	0	还没有加载任何数据.  
>>LOADING	1	数据正在被加载.  
>>DONE	2	已完成全部的读取请求.  

fr.result
>文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

fr.readAsDataURL(file)
>转换成base64格式

fr.readAsText(file) 
>转换成字符串格式,返回文件内容的纯文本格式
>对于媒体文件（图片、音频、视频），其内部组成并不是按字符排列，会产生乱码

fr.readAsArrayBuffer(file)
>转换成ArrayBuffer格式  


fr.abort()
>中止读取操作。在返回时，readyState属性为DONE

fr.loadstart
>处理loadstart事件。该事件在读取操作开始时触发。

fr.onload = function (e) { console.log(e.target.result) }
>处理load事件。该事件在读取操作完成时触发

fr.onloadend
>处理loadend事件。该事件在读取操作结束时（要么成功，要么失败）触发。

fr.onabort
处理abort事件。该事件在读取操作被中断时触发。

fr.onprogress
>处理progress事件。该事件在读取Blob时触发。

```html
<input type="file" id='upload' />
<script>
document.getElementById('upload').addEventListener('change', function (e) {
    var file = this.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const result = reader.result;
        console.log(result);
    }
    reader.readAsText(file);
}, false);
</script>

```