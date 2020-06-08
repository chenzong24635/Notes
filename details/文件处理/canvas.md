
## drawImage
[drawImage--MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)

context.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
>img: 表示图片对象，可以是页面上获取的 DOM 对象，也可以是虚拟 DOM 中的图片对象。  
>dx, dy: 表示在 canvas 画布上规划处一片区域用来放置图片，dx, dy 为绘图位置在 Canvas 元素的 X 轴、Y 轴坐标  
>dWidth, dHeight:表示在 Canvas 元素上绘制图像的宽度和高度（未定义，默认在绘制时图片的宽度和高度不会缩放）  
>sx, sy:表示在源图片上裁剪位置的 X 轴、Y 轴坐标
>swidth, sheight:选择一个区域范围，裁剪出来的图片作为最终在 Canvas 上显示的图片内容（未定义，默认从坐标的 sx 和 sy 开始，到图片的右下角结束）。


## toDataURL
[toDataURL--MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)
返回base64

canvas.toDataURL(type, encoderOptions)
>type: 图片格式，默认为 image/png,图片的分辨率为96dpi。  
>encoderOptions: 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。

注意
* 如果画布的高度或宽度是0，那么会返回字符串“data:,”。  
* 如果传入的类型非“image/png”，但是返回的值以“data:image/png”开头，那么该传入的类型是不支持的。  
* Chrome支持“image/webp”类型。  

## toBlob
[toBlob--MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob)

canvas.toBlob(callback, type, encoderOptions)
>callback:回调函数，可获得一个单独的Blob对象参数。  
>type:DOMString类型，指定图片格式，默认格式为image/png。  
>encoderOptions:Number类型，值在0与1之间，当请求图片格式为image/jpeg或者image/webp时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。