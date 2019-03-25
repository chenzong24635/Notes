## 使用navigator.userAgent属性 PC端、手机端、iPad判断 ，ie、火狐、其他浏览器判断， 微信浏览器判断， Android、IOS判断

#### navigator为Window对象的一个属性，指向了一个包含浏览器相关信息的对象。
常用到的属性：
1. navigator.appVersion 浏览器的平台和版本信息
2. navigator.appName 浏览器的名称 
3. navigator.language 浏览器使用的语言 
4. navigator.platform 浏览器操作系统平台 
5. navigator.userAgent 浏览器的user-agent信息,客户机发送服务器的user-agent 头部的值


* PC端、手机端、iPad
    if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      console.log("手机端");
    } else if (/iPad/i.test(navigator.userAgent)) {
      console.log("iPad");
    } else {
      console.log("PC")
    }

* 微信内置浏览器
    if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger") {
      console.log("微信")
    } else { 
      console.log("非微信")
    } 

* IE 、火狐、其他
    if (navigator.userAgent.toLowerCase().indexOf("firefox") >=0) { // 若-1为其他，否则火狐
      console.log("firefox");
    } else if(window.addEventListener){
        console.log("not ie、not firefox");
    }else if(window.attachEvent){
      console.log("ie");
    }

* Android、IOS
    if(/android/i.test(navigator.userAgent)){
      console.log("Android");
    } else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
      console.log("iOS");
    }


# 0.1+0.2!=0.3 ？？？:
* 解决：
先升幂再降幂
使用内置的 toPrecision() 和 toFixed() 方法，注意，返回值字符串。

* 原因：
>
    JavaScript 中的 number 类型就是浮点型，数字和浮点精度的处理相同，JavaScript 中的浮点数采用IEEE-754 格式的规定，这是一种二进制表示法，可以精确地表示分数，比如1/2，1/8，1/1024，每个浮点数占64位。但是，二进制浮点数表示法并不能精确的表示类似0.1这样 的简单的数字，会有舍入误差。
    由于采用二进制，JavaScript 也不能有限表示 1/10、1/2 等这样的分数。在二进制中，1/10(0.1)被表示为0.00110011001100110011…… 注意 0011 是无限重复的，这是舍入误差造成的，所以对于 0.1 + 0.2 这样的运算，操作数会先被转成二进制，然后再计算：
    0.1 => 0.0001 1001 1001 1001…（无限循环）
    0.2 => 0.0011 0011 0011 0011…（无限循环）
    双精度浮点数的小数部分最多支持 52 位，所以两者相加之后得到这么一串 0.0100110011001100110011001100110011001100...因浮点数小数位的限制而截断的二进制数字，这时候，再把它转换为十进制，就成了 0.30000000000000004。

# 区分数组对象方法 

>
    Object.prototype.toString.call([]) // "[object Array]"
    Object.prototype.toString.call({}) // "[object Object]"

>
    ([] instanceof Array) // true
    ({} instanceof Array) // false

    ([].constructor) // ƒ Array() { [native code] }
    ({}.constructor) // ƒ Object() { [native code] }

# unicode=>中文
>
    document.onmousewheel = function (evt) {
      var e = evt || window.event;
      if(e.preventDefault && e.ctrlKey) e.preventDefault();
      if(e.ctrlKey) e.returnValue = false;
    };
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', document.onmousewheel, false);

    // 记得head标记中加入
    <meta http-equiv="content-type" content="text/html; charset=utf-8">  */
    var str = "\u6D77\u66D9\u4E2D\u5FC3\u83DC\u5E02\u573A" ;
    unescape(str.replace(/\\u/g, '%u'))

# 遍历方法

    let arr = ['a', 'b'];
    let obj = [
      {
        'a1': '1',
        'b1': '1'
      },
      {
        'a2': '2',
        'b2': '2'
      }
    ];

* for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
* for in更适合遍历对象，不要使用for in遍历数组。
## for...in
    for (index in arr) { 
      console.log('index:', index, ';item:', arr[index]);
    }

## for...of
    for (item of arr) {
      console.log('item:', item);
    }

## reduce((sum, item, index, array) => {}) 
    //接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值，// reduceRight() (从右到左)
    //  Accumulator (acc) (累计器 累计回调的返回值; 它是上一次调用回调时返回的累积值)
    //  Current Value (cur) (当前值)
    //  Current Index (idx) (当前索引)
    //  Source Array (src) (源数组)
    let reduce = arr.reduce((sum, item, index, array) => {
      sum += index
      console.log('reduce()-->', '累计器', sum, ';index:', index, ';item:', item, '源数组:', array);
      return sum
    }, 0);


## map()
    arr.map((item, index) => {
      console.log('map()-->', 'index:', index, ';item:', item)
    });


## forEach((item, index, array) => {})遍历所有值并忽略回调函数的返回值 --- 改变原数组
    // 	item--正在数组中处理的当前元素的值
    // 	index--数组中正在处理的元素的索引
    // 	array--源数组
    //  break不能中断其循环，使用return也不能返回到外层函数。
    arr.forEach((item, index, array) => {
      console.log('forEach()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

## every(),some(),filter()
    // every() 检测每个元素 是否符合条件（函数提供），全部满足才返回true，不检测空数组
    // some()                                      一个满足就返回true
    // filter() 以数组形式返回满足条件的元素，没有返回[]
    arr.filter((item, index, array) => {
      if (index >= 1) {console.log('index >= 1的值:',item)}
      console.log('filter()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

    // 利用filter去重
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(element,index,self){
    return self.indexOf(element) === index;
    });
    console.log(arr2);

## entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象
    for (let [index, item] of arr.entries()) {
      console.log('entries()-->','index:', index, ';item:', item);
    }
    for (let index of arr.values()) {
      console.log('.values()-->', 'index:', index);
    }
    for (let item of arr.keys()) {
      console.log('.keys()-->', 'item:', item);
    }

  
## Object.keys(obj)、Object.keys(obj)、Object.keys(obj)
#### 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键值对数组、键名、键值。  
    let entries = Object.entries(arr);
    console.log('Object.entries()-->', entries)

    let keys = Object.keys(arr);
    console.log('Object.keys()-->', keys)

    let values = Object.values(arr);
    console.log('Object.values()-->', values)

    // 删除变量
    var {a,b,...obj} = {
      d: 'd',
      e: 'e',
      a: 1,
      b: 2,
      c: 3
    }
    console.log(a,b)// 1 2
    console.log(obj)//{d: "d", e: "e", c: 3}

    // 交换两个变量的值
    var a = 20, b = 30;
    a ^= b;
    b ^= a;
    a ^= b;

    [a,b]=[b,a]

## 自动触发onclick事件
#### IE
    if(document.all) {
      document.getElementById("clickMe").click();
    }
#### 其它浏览器
    else {
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      document.getElementById("clickMe").dispatchEvent(e);
    }


## sleect 选中的option
    $("##select1  option:selected")
    //触发select 的chang事件
    $("##area").val(mes.rname).trigger('change');

    //回车键		 keypress						
    $('##search_input').on('keyup', function(event) {
    　　if (event.keyCode == "13") {//回车执行
    　　　　
    　　}
    });

## 地址链接参数
    var url = window.location.href.split("?")[1];
    var arr= url.split("&");       //将结果用&符分隔
    var a = arr[0].split("=")[1]; //参数1


## 数组元素的上下移动 //splice ---返回被删除的项目(数组形式）
    var swapItems = function(arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    };
