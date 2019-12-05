



# IntersectionObserver 判断元素是否进入了"视口"（viewport）
[详情](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

# 保存canvas图片
>

    <!--创建一个cavas  用来存放图片-->
    <canvas  id="cavasimg" width="607" height="367"  ></canvas> 
        
    <!-- 触发下载图片到本地-->
    <input type="button" id="btnsavaImg" value="保存图片到本地" onclick="Download()"/> 

    function Download(){
      //canvas 保存图片到本地  js 实现
      //1.确定图片的类型  获取到的图片格式 data:image/Png;base64,....
      var type ='png';//你想要什么图片格式 就选什么吧
      var d=document.getElementById("img");
      var imgdata=d.toDataURL(type);
      //2.0 将mime-type改为image/octet-stream,强制让浏览器下载
      var fixtype = function(type){
          type = type.toLocaleLowerCase().replace(/jpg/i,'jpeg');
          var r = type.match(/png|jpeg|bmp|gif/)[0];
          return 'image/'+r;
      };
      imgdata = imgdata.replace(fixtype(type),'image/octet-stream');

      //3. 将图片保存到本地
      var savaFile=function(data, filename){
          var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
          save_link.href = data;
          save_link.download = filename;
          var event=document.createEvent('MouseEvents');
          event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
          save_link.dispatchEvent(event);
      };
      var filename=''+new Date().getSeconds()+'.'+type;  
      //我想用当前秒是可以解决重名的问题了 不行你就换成毫秒
      savaFile(imgdata,filename);
    }

    

 # <a name="图片转base64">图片转base64</a>
>
    getBase64(
      "http://pt.baicaitianzun.cn/20190925142975943"
    );
    function getBase64(imgUrl) {
      window.URL = window.URL || window.webkitURL;
      var xhr = new XMLHttpRequest();
      xhr.open("get", imgUrl, true);
      // 至关重要
      xhr.responseType = "blob";
      xhr.onload = function() {
        if (this.status == 200) {
          //得到一个blob对象
          var blob = this.response;
          console.log("blob", blob);
          // 至关重要
          let oFileReader = new FileReader();
          oFileReader.onloadend = function(e) {
            let base64 = e.target.result;
            console.log("base64:--->", base64);
          };
          oFileReader.readAsDataURL(blob);
          //====为了在页面显示图片，可以删除====
          var img = document.createElement("img");
          img.onload = function(e) {
            window.URL.revokeObjectURL(img.src); // 清除释放
          };
          img.src = window.URL.createObjectURL(blob)
          document.documentElement.appendChild(img);
          //====为了在页面显示图片，可以删除====
        }
      };
      xhr.send();
    }

# <a name="图片转blob下载">图片转blob下载</a>
>
    getImageBlob("./img/linear.gif");

    // 通过src获取图片的blob对象
    function getImageBlob(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.responseType = "blob";
      xhr.onload = function() {
        if (this.status == 200) {
          download(this.response);
        }
      };
      xhr.send();
    }

    function download(blob) {
      let reader = new FileReader();
      reader.addEventListener("loadend", function() {
        console.log(reader.result);
      });

      // 读取来看下下载的内容
      let suffix = blob.type.match(/\/.*/g)[0].slice(1) //图片后缀,jpg png...
      reader.readAsDataURL(blob);
      // 最终生成的字符串
      // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAA...
      // 生成下载用的URL对象
      let url = URL.createObjectURL(blob);
      // 生成一个a标签，并模拟点击，即可下载，批量下载同理
      let aDom = document.createElement("a");
      aDom.href = url;
      aDom.download = "download" + '.'+suffix;
      aDom.text = "下载文件";
      document.getElementsByTagName("body")[0].appendChild(aDom);
      aDom.click();
    }


# JS图片压缩预览/下载
>
    <input type="file" id="file" />
    <canvas id="canvas"></canvas>
      //js
      document.getElementById("file").onchange = function() {
        console.log(this.files[0]);
        //注意这个files是数组
        var reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = function(e) {
          //下面这三行就可以实现文件选择了图片以后，预览的功能，但是有些图片可能太大了影响页面观感，得统一缩小下。
          //var img = new Image();
          // img.src = e.target.result;
          // document.body.appendChild(img);
          render(e.target.result); //这个方法实现图片的压缩下载
        };
      };
      var MAX_H = 100;
      function render(src) {
        // 创建一个 Image 对象
        var image = new Image();
        // 设置src属性，加载图片内容，此时还未压缩
        image.src = src;
        // 绑定 load 事件处理器，加载完成后执行
        image.onload = function() {
          // 获取 canvas DOM 对象
          var canvas = document.getElementById("canvas");
          // 如果高度超标
          if (image.height > MAX_H) {
            // 宽度等比例缩放 *=
            image.width *= MAX_H / image.height;
            image.height = MAX_H;
          }
          // 获取 canvas的 2d 环境对象, 有些上古浏览器不支持canvas
          var ctx = canvas.getContext("2d");
          // canvas清屏
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // 把canvas宽高设置为图片宽高
          canvas.width = image.width;
          canvas.height = image.height;
          // 将图像绘制到canvas上
          //drawImage(img,startX,startY,endX,endY)
          ctx.drawImage(image, 0, 0, image.width, image.height);
          //将绘制好的canvas图像转为DataURL
          //toDataURL(图片类型,图片质量)，这个图片质量越高就越清晰（相同宽高）
          //canvas.toDataURL 返回的默认格式就是 image/png
          var data = canvas.toDataURL("image/jpeg", 0.5);
          //获取图片的dataUrl转成blob
          //这下面转blob的代码我也没搞懂，无百度了DataURL转blob就是这些代码了
          data = data.split(",")[1];
          console.log(data)
          data = window.atob(data);
          console.log(data)
          var ia = new Uint8Array(data.length);
          for (var i = 0; i < data.length; i++) {
            ia[i] = data.charCodeAt(i);
          }
          var blob = new Blob([ia], {
            type: "image/jpeg"
          });

          //生成blob文件的下载链接，把链接附在a便签上，把a便签加入dom中，点击就可以下载啦

          var url3 = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url3;
          a.text = "测试图片";
          a.download = "mytest.jpg";
          document.body.appendChild(a);
        };
      }
