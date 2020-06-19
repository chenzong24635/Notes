通过FileReader，将图片转base64、blob，canvas

### 预览并上传的图片 | 文本内容
```html
<input type="file" name='file' id="file">
<input type="file" accept="image/*" name='file' id="file">
<input type="file" accept="txt/*" name='file' id="file">
<script>
  document.querySelector('#file').addEventListener('change', function(e) {
    let fr = new FileReader();
    let file = e.target.files[0] || this.files[0]
    
    // base64
    /* fr.readAsDataURL(file);
    fr.onload = function(e) {
      let img = new Image()
      console.log(base64toBlob(e.target.result,file.type))
      img.src = e.target.result || fr.result || this.result;
      document.body.appendChild(img)
    }; */

    // 使用canvas进行图片压缩
    /* fr.readAsDataURL(file);
    fr.onload = function(e) {
      let img = new Image();
      img.src = e.target.result
      img.onload = function (){
        let canvas = document.createElement('canvas');  
        let context = canvas.getContext("2d");  
        let {width, height} = scaleWH(img.width,img.height)
        canvas.width = width; // 设置canvas的画布宽度为图片宽度  
        canvas.height = height;  
        context.drawImage(img, 0, 0, width, height) // 在canvas上绘制图片  

        // canvas转为blob显示图片
        // canvas.toBlob(function(blob) {
        //   let img = new Image()
        //   img.src = URL.createObjectURL(blob); // 将file文件转换为一个URL地址
        //   document.body.appendChild(img)
        // }, file.type || 'image/png', 0.9)  

        //canvas显示图片  
        let dataUrl = canvas.toDataURL(file.type ||'image/jpeg', 0.9) // 0.9为压缩比，可根据需要设置，设置过小会影响图片质量,//返回base64
        document.body.appendChild(canvas)
      } 
    }; */

    //blob
    /* fr.readAsArrayBuffer(file);
    fr.onload=function(e){
      let blob = new Blob([fr.result],{type:"text/plain"});
      let img = new Image()
      img.src = URL.createObjectURL(blob); // 将file文件转换为一个URL地址
      document.body.appendChild(img)
      console.log(e)
      console.log(blob)
    } */

    // txt
    /* fr.readAsText(file);
    fr.onload = function(e) {
      console.log(e)
      let div = document.createElement('div')
      div.innerHTML = e.target.result
      document.body.appendChild(div)
    }; */
    
  })
  
  // 限制图片宽高度，进行等比例的缩放
  function scaleWH(width, height, maxWidth = 1000, maxHeight = 1000){
    // 最大限制时 缩放图片尺寸
    if (width > maxWidth || height > maxHeight) {
      if (width / height > 1) {
        //  宽图片
        height = Math.round(maxWidth * (height / width))
        width = maxWidth
      } else {
        // 高图片
        width = Math.round(maxHeight * (width / height))
        height = maxHeight
      }
    }
    return {
      width,
      height
    }
  }

  // blob转base64
  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
      // readAsDataURL
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
        reject(new Error('blobToBase64 error'));
      };
    });
  }

  // base64转blob
  function base64toBlob(base64Data) {
    let data = base64Data.split(';base64,'),
        mime = data[0].match(/:(.*?);/)[1],
        byteString = atob(data[1]),
        n = byteString.length,
        uInt8Array = new Uint8Array(n);
    while (n--) {
      // 转换编码后才可以使用charCodeAt 找到Unicode编码
      uInt8Array[n] = byteString.charCodeAt(n);
    }
    return new Blob([uInt8Array], { type: mime });
  }


  // base64转blob
  function base64ToBlob ({b64data = '', contentType = '', sliceSize = 512} = {}) {
    return new Promise((resolve, reject) => {
      // 使用 atob() 方法将数据解码
      let byteCharacters = atob(b64data);
      let byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = [];
        for (let i = 0; i < slice.length; i++) {
            byteNumbers.push(slice.charCodeAt(i));
        }
        // 8 位无符号整数值的类型化数组。内容将初始化为 0。
        // 如果无法分配请求数目的字节，则将引发异常。
        byteArrays.push(new Uint8Array(byteNumbers));
      }
      let result = new Blob(byteArrays, {
        type: contentType
      })
      result = Object.assign(result,{
        // 这里一定要处理一下 URL.createObjectURL
        preview: URL.createObjectURL(result),
        name: `XXX.png`
      });
      resolve(result)
    })
  }


</script>

```

### 多图上传
```html
<input type="file" accept="image/*" multiple name='file' id="file">
<script>
document.querySelector('#file').addEventListener('change',function (e) {
  for (var i = 0; i < e.target.files.length; i++) {
    let fr = new FileReader();
    let files = e.target.files[i]
    fr.readAsDataURL(files);
    fr.onload = function(e) {
      let img = new Image();
      img.src = e.target.result || fr.result || this.result;
      document.body.appendChild(img);
    };
  }
})
</script>
```