
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

    