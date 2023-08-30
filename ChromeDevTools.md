
# 开发者工具面板：
* Elements：页面dom元素，查看网页的HTML源码和CSS代码。
* Console：控制台，用来运行 JavaScript 命令。
* Sources：查看网页加载的所有源码。
* Network： 网络
* Application：查看网页加载的各种资源文件（比如代码文件、字体文件、css文件等），以及在硬盘上创建的各种内容（比如本地缓存、Cookie、Local Storage等）。
* Performance：查看网页的性能情况，比如 CPU 和内存消耗。
* Security： 安全分析
* Audits： 审计，自动化测试工具

# 地址栏输入
* 查看当前版本： chrome://version/
* 查看用户行为：  chrome://user-actions/
* dino 小游戏： chrome://dino/
* 查看实验中的功能: chrome://flags/
* 查看所有功能: chrome://chrome-urls/


* 浏览器地址栏运行JavaScript代码: 
  >地址栏输入:JavaScript:+执行的语句。

* 浏览器地址栏运行HTML代码
  >
      地址栏中输入：data:text/html,'<h5>Hello, world!</h5>'  




# 控制台的使用
## console
* console.clear()  清空控制台
* console.log('打印普通信息')
  > 支持以下占位符，不同格式的数据必须使用对应格式的占位符。
   %s 字符串  %d 整数   %i 整数	 %f 浮点数	%o 对象的链接 	%c CSS格式字符串
   如果第一个参数是格式字符串（使用了格式占位符），console.log方法将依次用后面的参数替换占位符，然后再进行输出。

  > 例子：
    console.log(' %s + %s = %s', 1, 1, 2)   //  1 + 1 = 2
    上面代码中，console.log方法的第一个参数有三个占位符（%s），第二、三、四个参数会在显示时，依次替换掉这个三个占位符。

* console.log() 接收不定参数，参数间用逗号分隔，最终会输出会将它们以空白字符连接。
  >比如%c;看下面这个炫酷的效果：
    console.log('%cHello World', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');

  >console.log('%cHello','color:red;','World') // 输出的Hello为红色


* console.info('打印提示性信息')
* console.warn('打印警示信息')
* console.error('打印错误信息,同时会显示错误发生的堆栈')

* console.dir()  对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
* console.dirxml() 用于以目录树的形式，显示 DOM 节点。如果参数不是 DOM 节点，而是普通的 JS对象,等同于console.dir.
* console.table()  用表格显示对象
* console.time()  console.timeEnd() 计算代码执行所耗的时间
  >performance.now()
* console.count()  用于统计表达式被执行的次数,
  >例子：
      function fn(){
        console.count('num:')
      }
      for(let i =0;i<10;i++){
        fn()
      }
* console.trace()方法显示当前执行的代码在堆栈中的调用路径。
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


* console.assert()  只有当第一个参数为false才输出相应信息到控制台。    
  >console.assert(false,'1');
   console.assert(true,'2');

* console.profile() 新建一个性能测试器（profile），它的参数是性能测试器的名字。
* console.profileEnd () 无需传参，结束正在运行的性能测试器。
  >在 DevTools 窗口控制台中，调用 console.profile()开启一个 JavaScript CPU 分析器.结束分析器直接调用 console.profileEnd().
  具体的性能分析会在分析器面板中

* console.group()   console.groupEnd()  用于将显示的信息分组。分在一组的信息，可以用鼠标折叠/展开
* console.groupCollapsed()  与console.group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。

## $ 在控制台使用
* $_ 可以获控制台最近一次的输出结果
* $0 直接访问页面元素
  >在元素面板选择一个元素,然后在控制台输入 $0,就会在控制台中得到刚才选中的元素。

  >控制台会存储最近 5 个被选择的元素和对象。最多保存5个，如果不够5个，则返回undefined。当你在元素面板选择一个元素或在分析器面板选择一个对象,记录都会存储在栈中。可以使用 $x来操作历史栈,x 是从 0 开始计数的,所以 $0 表示最近选择的元素, $4 表示最后选择的元素。

* $(selector,[startNode]) document.querySelector()的简化,  
  > startNode指定从哪个节点开始选择
* $$(selector,[startNode]) document.querySelectorAll()的简化
* $x(selector,[startNode])方法返回一个数组，包含匹配特定XPath表达式的所有DOM元素。
  >
      $x('html/body/div') 匹配所有 body 第一代子元素 div
      $x("//p") 匹配所有的p节点，
      $x("//p[a]") 匹配所有子节点包含a的p节点

## 其他方法在控制台使用
* copy() 快速拷贝值到剪切板
  >例：
      控制台打印 navigation
      输入 copy($_) 回车后， navigation 的值就被复制到你的剪切板上了
* keys(object)/values(object)  获取对象键值
* 函数监听器 monitor(function)/unmonitor(function)
  >
      monitor(function),当调用指定的函数时,会将一条消息记录到控制台,该消息指示调用时传递给该函数的函数名和参数。
      unmonitor(函数)停止对指定函数的监视。
  >例：
      function sum(x,y){
        return x+y
      }
      monitor(sum)
      sum(1,2)
      VM1119:1 function sum called with arguments: 1, 2 // monitor提示

* 事件监听器 monitorEvents(object[, events])/unmonitorEvents(object[, events])
  >monitorEvents(object[, events]),当指定的对象上发生指定的事件之一时,事件对象将被记录到控制台。事件类型可以指定为单个事件或事件数组。
  unmonitorevent (object[， events])停止监视指定对象和事件的事件。

  >例：
  monitorEvents(window,['scroll']) // 页面滚动时会被记录到控制台
  
* getEventListeners 获取注册到一个对象上的所有事件监听器
  

* 页面可编辑：
  >
      document.body.contentEditable=true | false  
      document.designMode='on'  | 'off' 



#  Command Menu
* 截图 
  ctrl+shift+p 输入 screenshot
  > 截图当前网页：Capture full size screenhot
  > 截图当前区域：Capture area screenhot
  > 截图单个元素：Capture node screenhot


* 动画检查器 
  ctrl+shift+p 输入 Show Animations
  > 检查动画。您希望慢速播放、重播或检查动画组的源代码。 
    修改动画。您希望修改动画组的时间、延迟、持续时间或关键帧偏移。当前不支持编辑贝塞尔曲线和关键帧。

#  工作区编辑文件 Edit Files With Workspaces
>工作空间使您能够将在 Chrome Devtools 中进行的更改保存到计算机上相同文件的本地副本。

>使用： 
sources面板， Filesystem 下 点击 Add folder to workspace 添加要同步的工作目录



   