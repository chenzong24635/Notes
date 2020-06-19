# [Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

[前端的各种日期操作](https://juejin.im/post/5e0a201ce51d4575eb4f38e7)

<details open>
  <summary>
    目录
  </summary>

  * <a href="#DateAPI">Date API</a>
  * <a href="#日期转时间戳">日期转时间戳</a>
  * <a href="#时间戳转日期">时间戳转日期</a>
  * <a href="#把日期格式化为指定格式">把日期格式化为指定格式</a>
  * <a href="#时间戳转距当前时间多久">时间戳 --> 距当前时间 多久</a>
  * <a href="#倒计时">倒计时</a>
  * <a href="#两个日期中间的有效日期">两个日期中间的有效日期</a>
</details>

# <a name="DateAPI">[Date API](https://www.runoob.com/jsref/jsref-obj-date.html)</a></a>

>
    new Date()

    new Date(milliseconds)
      new Date(1568093648697)

    new Date(dateString) 
      new Date("October 13, 1975 11:13:00")

    new Date(year, month, day, hours, minutes, seconds, milliseconds)
      new Date(79,5,24,11,33,0)

|方法|描述|
|:-|:-|
| getFullYear() | 返回完整的年份(4位,1970-????)  -- 2019 |
| getMonth() | 返回当前月份(0-11,0代表1月) -- 8 |
| getDate() | 返回当前日(1-31)   -- 18
| getDay() | 返回当前星期X(0-6,0代表星期天)  -- 3
| getTime() | 返回从1970.1.1开始到当前时间的毫秒数  -- 1568778089633
| valueOf() | 原始值, 返回从1970.1.1开始到当前时间的毫秒数 等同于getTime() -- 1568778089633
| UTC() | 返回从1970.1.1开始到指定日期的毫秒数  -- Date.UTC(2019,09,18,4,5,6,555) 1571371506555
| getHours() | 返回当前小时数(0-23)  -- 11
| getMinutes() | 返回当前分钟数(0-59)  -- 45
| getSeconds() | 返回当前秒数(0-59)  -- 30
| getMilliseconds() | 返回当前毫秒数(0-999)  -- 123
| toLocaleDateString() | 返回当前日期 - 本地时间格式 -- 2019/9/18
| toLocaleTimeString() | 返回当前时间 - 本地时间格式 -- 2019/9/18 上午11:47:06
| toLocaleString() | 返回日期与时间 - 本地时间格式 -- 上午11:41:29
| ..... |



# <a name="日期转时间戳">日期转时间戳</a>
>
    let date = new Date('2014-04-23 18:55:49:123')
    // 有三种方式获取
    let time1 = date.getTime();   //--精确到毫秒
    let time2 = date.valueOf();   //--精确到毫秒
    let time3 = Date.parse(date); //--精确到秒

    console.log(time1);//1398250549123  
    console.log(time2);//1398250549123  
    console.log(time3);//1398250549000

# <a name="时间戳转日期">时间戳转日期</a>
>
    function timestampToTime(timestamp) { //时间戳 转 时间
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      if ((timestamp + '').length === 10) {
        timestamp *= 1000;
      }
      timestamp = timestamp / 1;
      let date = new Date(timestamp);
      let Y = date.getFullYear();
      // let M = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
      let M = (date.getMonth() + 1 + '').padStart(2,0);
      let D = (date.getDate() + '').padStart(2,0);
      let h = (date.getHours() + '').padStart(2,0);
      let m = (date.getMinutes() + '').padStart(2,0);
      let s = (date.getSeconds() + '').padStart(2,0);
      let ms = (date.getMilliseconds() + '').padStart(3,0);
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s + ':' + ms;
    }
    console.log(timestampToTime(+new Date()))

#<a name="把日期格式化为指定格式">把日期格式化为指定格式</a>

>
    function format(date, fmt) {
      date = new Date(date)
      var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
      };

      if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      for(let k in o){
        if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
        }       
      }

      return fmt;
    }

    console.log(
      format(new Date(44222222222),"yyyy年MM月"),
      format(new Date(),"yyyy年MM月dd日"),
      format(new Date(2179,5,24,11,33,0),"yyyy/MM/dd hh:mm:ss")
    )

# <a name="时间戳转距当前时间多久"> 时间戳 --> 距当前时间 多久</a>

>

    function formatMsgTime(timestamp) {
      if (!timestamp) return ''
      if ((timestamp + '').length === 10) {
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        timestamp *= 1000;
      }
      timestamp = timestamp / 1;
      let s = 1000 // 秒
      let m = 60 * s // 分
      let h = 60 * m // 时
      let D = 24 * h // 天
      // let W = 7 * D // 周
      let M = 30 * D // 月
      let Y = 365 * M // 年 

      let time = new Date().getTime() - new Date(timestamp).getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
      if (time < 0) {
          return ''
      } else if ((time / 1000 < 10)) {
          return '刚刚'
      } else if (time / s < 60) {
          return parseInt((time / s)) + '秒前'
      } else if ((time / m) < 60) {
          return parseInt((time / m)) + '分钟前'
      } else if ((time / h) < 24) {
          return parseInt(time / h) + '小时前'
      } else if ((time / D) < 30) {
          return parseInt(time / D) + '天前'
      } else if ((time / M) < 12) {
          return parseInt(time / M) + '月前'
      } else {
          return parseInt(time / Y) + '年前'
      }
      return 'error';
    }
    console.log(formatMsgTime(+new Date('2019 4 5') ))
    
# <a name="倒计时">倒计时</a>
>
    function counter() { 
        var date = new Date(); 
        var year = date.getFullYear();
        var date2 = new Date(year, 12, 31, 23, 59, 59);
        /*转换成秒*/
        var time = (date2 - date) / 1000;
        var day = Math.floor(time / (24 * 60 * 60))
        var hour = Math.floor(time % (24 * 60 * 60) / (60 * 60))
        var minute = Math.floor(time % (24 * 60 * 60) % (60 * 60) / 60);
        var second = Math.floor(time % (24 * 60 * 60) % (60 * 60) % 60);
        var str = year + "年还剩" + day + "天" + hour + "时" + minute + "分" + second + "秒";
        console.log(str);
    }
    window.setInterval("counter()", 1000);

>
    function countdown(endTime){
      //月份默认30天
      //年份默认365天
      const s = 1000; //秒
      const m = 60 * s; // 分
      const h = 60 * m; // 时
      const D = 24 * h; // 天
      const M = 30 * D; // 月
      const Y = 365 * D; // 年
      endTime = + new Date(endTime);
      let now = + new Date();
      let time = endTime- now;
      let years = (Math.floor(time / Y) + '').padStart(2,0);
      let months = (Math.floor(time % Y / M) + '').padStart(2,0);
      let days = (Math.floor(time % M / D) + '').padStart(2,0);
      let hours = (Math.floor(time % D / h) + '').padStart(2,0);
      let minutes = (Math.floor(time % h / m) + '').padStart(2,0);
      let seconds = (Math.floor(time % m / s) + '').padStart(2,0);
      let milliseconds = (Math.floor(time % s) + '').padStart(3,0);
      let str = (years + '' === '00' ? '': years + '年')
              + (months + '' === '00' ? '': months + '月')
              + (days + '' === '00' ? '': days + '天')
              + (hours + '' === '00' ? '' :  hours + '时')
              + (minutes + '' === '00' ?'' :  minutes + '分')
              + (seconds + '' === '00' ? '' :  seconds + '秒') 
              // + (milliseconds + '' === '000'  ? '毫秒' :  milliseconds) 
      // let str = days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
      return str
    }

# <a name="两个日期中间的有效日期">两个日期中间的有效日期</a>
>
    function rangeDay (day1, day2) {
      const result = []
        const dayTimes = 24*60*60*1000 // 一天时间(毫秒)
        const range = day2.getTime() - day1.getTime() // 两日期相差时间(毫秒)
        let total = 0
        while (total <= range && range > 0) {
          // 添加有效日期(格式YYYY-MM--DD)
          result.push(new Date(day1.getTime() + total).toLocaleDateString().replace(/\//g, '-'))
          // 每次加1天
          total += dayTimes
        }
      return result
    };
    rangeDay(new Date("2015-02-08"), new Date("2015-03-03"))

# <a name=""></a>