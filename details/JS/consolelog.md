[Chrome 浏览器前端调试技巧大揭秘](https://mp.weixin.qq.com/s?__biz=MzUzOTM0MTE4OQ==&mid=2247486207&idx=1&sn=217d474172b4752d4451c3cb3c167f77&chksm=fac8b215cdbf3b03be8486e6af1389a0bf049f5ab989f4dd83f692200d60ce84fbe3796f2b8c&scene=0&xtrack=1&key=f7996279e56ff0c960fdcd6fc46af973f3cd29a09a4fb2543272423dd21a14a538eb8d392236fd402ded694ca172c4eedb1ccbbfa3d656a250b047b86c418ac388480eda6c6ab2e3411a209a4d6ea248&ascene=14&uin=MTIxNDM5MTUzOQ%3D%3D&devicetype=Windows+7&version=62060841&lang=zh_CN&pass_ticket=6hbWVbVQi9b8nDPWnQLyNwIhfW%2Fxii%2FBAH6JGd5v7eUzIH49WIfoITbvxT9QEwrs)

https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650591221&idx=1&sn=7c0deadf8caa1d9bc74cf2309183f681&chksm=8891dfd1bfe656c74cf6936da477b75a5a59c01f244f5e5d3290f487320677549db1b1896b10&scene=0&xtrack=1&key=4f115a90f0767c0815bb97b622173906cb5a49a030a29c799f0c930e01a34874e87c809a875bc167a174ddeae621b29a1df1bf4db2965ab6d987fd7d572f6ae39e400e40da2cddf4d591394c64c77008&ascene=14&uin=MTIxNDM5MTUzOQ%3D%3D&devicetype=Windows+7&version=6208006f&lang=zh_CN&exportkey=A%2FZDU%2FoVF%2FWNb6J4aEXPs0w%3D&pass_ticket=zkhY%2BWhftXQO4p0mBYV7zm2BPoBWhsgGVvhkMpovwKJ5K5jCbMBrEYRwIalgeL02

[0202年了, Chrome DevTools 你还只会console.log吗](https://juejin.im/post/5e0cb3ba5188253ab46da675)

[Chrome Devtool Performance报告中的DCL, L, FP, FCP, FMP, LCP 的含义](https://juejin.im/post/5dfc709b51882579dc6f7f71)

[Chrome Devtools 高级调试指南（新](https://juejin.im/post/5d9eea84e51d4577eb5d8510)

# 开发者工具面板：
>
    Elements：页面dom元素，查看网页的HTML源码和CSS代码。
    Console：控制台，用来运行 JavaScript 命令。
    Sources：查看网页加载的所有源码。
    Network： 网络
    Application：查看网页加载的各种资源文件（比如代码文件、字体文件、css文件等），以及在硬盘上创建的各种内容（比如本地缓存、Cookie、Local Storage等）。
    Performance：查看网页的性能情况，比如 CPU 和内存消耗。
    Security： 安全分析
    Audits： 审计，自动化测试工具


# console的常见用途
* 截图 ctrl+shift+p 输入screen
  >* 截图当前网页：Capture full size screenhot
  >* 截图当前区域：Capture area screenhot
  >* 截图单个元素：Capture node screenhot

* 调试程序，显示网页代码运行时的错误信息。
* 提供了一个命令行接口，用来与网页代码互动。

* console.log方法支持以下占位符，不同格式的数据必须使用对应格式的占位符。
  >   
      %s 字符串  %d 整数   %i 整数	 %f 浮点数	%o 对象的链接 	%c CSS格式字符串

* 如果第一个参数是格式字符串（使用了格式占位符），console.log方法将依次用后面的参数替换占位符，然后再进行输出。
  >
      console.log(' %s + %s = %s', 1, 1, 2)   //  1 + 1 = 2
      上面代码中，console.log方法的第一个参数有三个占位符（%s），第二、三、四个参数会在显示时，依次替换掉这个三个占位符。



* console.clear()  清空控制台

* console.log ('普通信息')
* console.info ('提示性信息')
* console.warn ('警示信息') 
* console.error ('错误信息,同时会显示错误发生的堆栈')

* console.dir()  对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
* console.dirxml() 用于以目录树的形式，显示 DOM 节点。如果参数不是 DOM 节点，而是普通的 JS对象,等同于console.dir.
* console.table()  用表格显示对象

* console.time()  console.timeEnd() 计算代码执行所耗的时间
>performance.now()

* console.count()  统计某段代码执行次数
* console.trace方法显示当前执行的代码在堆栈中的调用路径。

* console.assert  只有当第一个参数为false才输出相应信息到控制台。console.assert(false,'开发中的log信息。。。');
* console.profile() 新建一个性能测试器（profile），它的参数是性能测试器的名字。
* console.profileEnd () 无需传参，结束正在运行的性能测试器。
* console.group   console.groupEnd  用于将显示的信息分组。分在一组的信息，可以用鼠标折叠/展开
* console.groupCollapsed方法与console.group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。

* console.log还提供了一个的API：第一个参数可以带一些格式化指令，
>
    比如%c;看下面这个炫酷的效果：
    console.log('%c hello world', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');

* 另外，console.log() 接收不定参数，参数间用逗号分隔，最终会输出会将它们以空白字符连接。
>

    console.log('%cHello','color:red;','World')-->输出的Hello为红色

# $
$_属性返回上一个表达式的值。

> $0~$4则代表了最近5个你选择过的DOM节点。
>> 什么意思呢？在页面右击选择审查元素，然后在弹出来的DOM结点树上面随便点选，这些被点过的节点会被记录下来，而$0会返回最近一次点选的DOM结点，以此类推，$1返回的是上上次点选的DOM节点，最多保存了5个，如果不够5个，则返回undefined。

$(selector)返回第一个匹配的元素，等同于document.querySelector()。注意，如果页面脚本对$有定义，则会覆盖原始的定义。比如，页面里面有 jQuery，控制台执行$(selector)就会采用 jQuery 的实现，返回一个数组。

$$(selector)返回一个选中的DOM对象，等同于document.querySelectorAll。

$x(path)方法返回一个数组，包含匹配特定XPath表达式的所有DOM元素。
>$x("//p")匹配所有的p节点，$x("//p[a]");匹配所有子节点包含a的p节点

inspect(object)方法打开相关面板，并选中相应的元素：DOM元素在Elements面板中显示，JavaScript对象在Profiles面板中显示。

getEventListeners(object)方法返回一个对象，该对象的成员为登记了回调函数的各种事件（比如click或keydown），每个事件对应一个数组，数组的成员为该事件的回调函数。

keys(object)方法返回一个数组，包含特定对象的所有键名。  

values(object)方法返回一个数组，包含特定对象的所有键值。

# 页面可编辑：
控制台输入：  
document.body.contentEditable=true | false  
document.designMode='on'  | 'off' 

# monitor & unmonitor
monitor(function)，它接收一个函数名作为参数，比如function a，每次a被执行了，都会在控制台输出一条信息，里面包含了函数的名称a及执行时所传入的参数。而unmonitor(function)便是用来停止这一监听。
> 
    function sayHello(name){
      alert('hello,'+name);
    }
    monitor(sayHello);
    sayHello('damonare');
    sayHello('tjz');
    unmonitor(sayHello);

# debug & undebug
debug同样也是接收一个函数名作为参数。当该函数执行时自动断下来以供调试，类似于在该函数的入口处打了个断点，可以通过debugger来做到，同时也可以通过在Chrome开发者工具里找到相应源码然后手动打断点。而undebug 则是解除该断点。而其他还有好些命令则让人没有说的欲望，因为好些都可以通过Chrome开发者工具的UI界面来操作并且比用在控制台输入要方便。


# 浏览器地址栏运行JavaScript代码: 
-----地址栏输入:JavaScript:+执行的语句。

# 浏览器地址栏运行HTML代码
>
    地址栏中输入：data:text/html,'<h5>Hello, world!</h5>'  
    页面可编辑：document.body.contentEditable='true';

# 利用a标签自动解析URL
>
    let a=document.createElement('a');
    a.href='http://www.bing.com'
    console.log(a.host)

# 快速查找要调试的函数:
假设你要在函数中打断点，最常用的两种方式是：
>
    在控制台查找行并添加断点 .//debug(funcName)，当到达传入的函数时，代码将停止。 
    在代码中添加debugger

# 获取函数的堆栈跟踪信息:console.trace (仅仅只是在控制台中跟踪) 可以方便地调试JavaScript.
> 
    var car;
    var func1 = function() {
      func2();
    }
    var func2 = function() {
      func4();
    }
    var func3 = function() {}
    var func4 = function() {
      car = new Car();
      car.funcX();
    }
    var Car = function() {
      this.brand = 'volvo';
      this.color = 'red';
      this.funcX = function() {
        this.funcY();
      }
      this.funcY = function() {
        this.funcZ();
      }
      this.funcZ = function() {
        console.trace('trace car')
      }
    }
    func1();

可以看到 func1 调用 func2， func2 调用 func4。 Func4 创建了一个 Car 的实例，然后调用函数 car.funcX，依此类推。
