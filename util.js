// 'use strict';
/*// 将日期格式转换成时间戳：
  var date = new Date('2014-04-23 18:55:49:123');
  // 有三种方式获取
  var time1 = date.getTime();   //--精确到毫秒
  var time2 = date.valueOf();   //--精确到毫秒
  var time3 = Date.parse(date); //--精确到秒
  console.log(time1);//1398250549123  
  console.log(time2);//1398250549123  
  console.log(time3);//1398250549000 */

function calculateDate(){ //2018年12月26日 星期三
  var date = new Date();
  var weeks = ["日","一","二","三","四","五","六"];
  return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+
  date.getDate()+"日 星期"+weeks[date.getDay()];
}

function timestampToTime(timestamp) { //时间戳 转 时间
  if ((timestamp + '').length === 10) {
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    timestamp *= 1000;
  } else {
    timestamp = timestamp / 1;
  }
  var date = new Date(timestamp);
  var Y = date.getFullYear();
  var M = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
}

function formatMsgTime(timestamp) {/* 时间戳--> 距当前时间 */
  if ((timestamp + '').length === 10) {
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    timestamp *= 1000;
  } else {
    timestamp = timestamp / 1;
  }
  if (!timestamp) return ''
  var date = new Date(timestamp)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
      return ''
  } else if ((time / 1000 < 10)) {
      return '刚刚'
  } else if (time / 1000 < 60) {
      return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
      return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 30) {
      return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000) + '月前'
  } else {
      return parseInt(time / 31536000000) + '年前'
  }
  return 'error';
}


function formatMsgTime1(timestamp) {/* 时间戳-->  */
  var minute = 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var year = month * 12;
  var now = new Date().getTime() / 1000;
  var diffValue = now - timestamp;
  var result = '';
  if (diffValue < 0) {
    return;
  }
  var yearC = diffValue / year;
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;

  var time = timestamp;
  if ((time + '').length == 10) {
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    time *= 1000;
  } else {
    time = time / 1;
  }
  var date = new Date(time)
  var Y = date.getFullYear()
  var M = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1))
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  if (yearC >= 1 || monthC >= 1 || weekC >= 1 || dayC >= 1) {
    result =  Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
  } else {
    //未超过1天 但时间为昨天
    if (new Date().getDay() - date.getDay() === 1) {
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
    }
    //当天 
    result = h + ':' + m
  }
  return result
}

function isPhone(val) {//手机验证
  var valnew = val.replace(/(^\s*)|(\s*$)/g, "")
  if(valnew.match(/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/) || valnew.match(/^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/)) {
    return true
  }else{
    return false
  }
}

function isEmail(val) {//邮箱验证
  var reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
  var  res=reg.test(val);
  if (res) {
    return true
  }else{
    return false
  }
}

function pswLen(val) {//密码验证 -- 6位数 、字母+数字
  var reg = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]+$/;
  var bool = reg.test(val);
  var  len = val.length;
  console.log(val);
  if (len >= 6 && bool) {
    console.log("ok");
    return true
  } else {
    console.log("no");
    return false
  }
}

//小数点后两位补零
function returnFloat(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split('.');
  if (xsd.length == 1) {
    value = value.toString() + '.00';
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + '0';
    }
    return value;
  }
}

//浮点型除法
function div(a, b) {
  var c, d, e = 0, f = 0;
  try {
    e = a.toString().split('.')[1].length;
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length;
  } catch (g) {}
  return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), mul(c / d, Math.pow(10, f - e));
}
//浮点型乘法
function mul(a, b) {
  var c = 0,
      d = a.toString(),
      e = b.toString();
  try {
    c += d.split('.')[1].length;
  } catch (f) {}
  try {
    c += e.split('.')[1].length;
  } catch (f) {}
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c);
}

//浮点型加法函数--保留小数点后两位-不足则补零
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}



// 去除字符串所有空格  
//\s	匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。
function sTrim(text) {
  return text.replace(/\s/ig, '');
}

// 数值千分位
function thousandth(n){
  if(n.toLocaleString()){
    return n.toLocaleString()
  }else{
    n = n + '';
    return n.replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g,'$1,')
  }
}

// 随机6位字符串：[a-zA-Z0-9]
Math.random().toString(32).slice(2,8)





















// function adapte(){//简易适配
//   var designWidth = 750; //设计图宽度
//   var rem2px = 100; //1rem = 100px
//   document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px + 'px';
// }

// $(function(){
//   adapte()
// })
// $(window).resize(function(){
//   adapte();
// })