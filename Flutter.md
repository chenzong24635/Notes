
[官网-中文](https://flutterchina.club/get-started/install/)
[官网-英文](https://flutter.dev/docs/get-started/install/)

[万字长文轻松彻底入门 Flutter，秒变大前端](https://zhuanlan.zhihu.com/p/90836859)

[Flutter 布局详解](https://juejin.im/post/5b09fe716fb9a07aa114a6d9)  
[Flutter 布局（二）- Padding、Align、Center详解](https://juejin.im/post/5b1cb0c46fb9a01e62598d56)  
[Flutter 布局（三）- FittedBox、AspectRatio、ConstrainedBox详解](https://juejin.im/post/5b2d04eef265da59951fe796)


# 目录
* <a href="搭建Flutter开发环境">搭建Flutter开发环境</a>
* <a href="vscode运行fluter">vscode运行fluter</a>
* <a href="概述">概述</a>
* <a href="Widget">Widget</a>
* <a href="布局">布局</a>
* <a href="Flutter for Web开发者">Flutter for Web开发者</a>
* <a href="http请求">http请求</a>
* <a href=""></a>

# <a name=""></a>
# <a name="搭建Flutter开发环境">[搭建Flutter开发环境](https://flutterchina.club/setup-windows/)</a>

* 由于在国内访问Flutter有时可能会受到限制，Flutter官方为中国开发者搭建了临时镜像，大家可以将如下环境变量加入到用户环境变量中：
PUB_HOSTED_URL=https://pub.flutter-io.cn  
FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn

![img](./img/flutter-sdk.jpg)

* [Flutter SDK](https://github.com/flutter/flutter/releases)
将安装包zip解压到你想安装Flutter SDK的路径（如：D:\src\flutter；注意，不要将flutter安装到需要一些高权限的路径如C:\Program Files\）。

* 添加环境变量到系统PATH
如果解压的Flutter SDK在D:\flutter文件夹下，则在用户变量的path添加;D:\flutter
![img](./img/flutter-sdk1.jpg)

* [android-studio安装](https://www.androiddevtools.cn/)
[Java9及更高版本问题](https://blog.csdn.net/jia__/article/details/92620921)

* 添加sdk到系统变量
变量名：ANDROID_HOME   
变量值：C:\Users\Administrator\AppData\Local\Android\sdk

变量Path添加;%ANDROID_HOME%  
%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools

* 终端输入：`flutter doctor`查看是否需要安装任何依赖项来完成安装

## 问题

* ANDROID_HOME = xxx but Android SDK not found at this location
更改android SDK路径:
>flutter config --android-sdk "现在的Android SDK 路径"
>如：flutter config --android-sdk "C:\Users\Administrator\AppData\Local\Android\sdk"

* Android license status unknown.
[参考](https://blog.csdn.net/jia__/article/details/92620921)
[参考](https://blog.csdn.net/u013275973/article/details/81134169)


# <a name="vscode运行fluter">vscode运行fluter</a>
* ctrl + shift + p
* 输入 ‘flutter’, 然后选择 ‘Flutter: New Project’
* 输入 Project 名称 (如myapp), 然后按回车键
* 指定放置项目的位置，然后按蓝色的确定按钮
* 等待项目创建继续，并显示main.dart文件
* f5 运行程序
* 或者终端输入`flutter run`(模拟器必须已运行) ,终端输入`r`热重载,`R`热重启


[flutter 卡在Running Gradle task 'assembleDebug'.](https://www.cnblogs.com/wupeng88/p/11455874.html)
```dart
修改项目中`android/build.gradle`文件 及`Flutter安装目录/packages/flutter_tools/gradle/flutter.gradle`所有的
google()
jcenter()
为
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
```


# <a name="概述">概述</a>
Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 
* 具有跨平台开发特性，支持IOS、Android、Web三端。
* 使用Dart语言，目前已经支持同时编译成Web端代码，
* 自绘UI引擎和编译成原生代码的方式，使得系统的运行时的高性能成为了可能



# <a name="Widget">Widget</a>
Dart 类build方法返回的便是Widget，`在Flutter中一切都是Widget`，Widget 是一切的基础，利用响应式模式进行渲染。

|类型|作用特点|
|:--|:--|
|MaterialApp|一般作为APP顶层的主页入口，可配置主题，多语言，路由等|
|Scaffold |一般用户页面的承载Widget，包含appbar、snackbar、drawer等material design的设定|
|Appbar|一般用于Scaffold的appbar ，内有标题，二级页面返回按键等，当然不止这些，tabbar等也会需要它 |
|Text|显示文本，几乎都会用到，主要是通过style设置TextStyle来设置字体样式等。|
|RichText|富文本，通过设置TextSpan，可以拼接出富文本场景。|
|TextField|文本输入框 |
|Image|图片加载|
|RaisedButton \| FlatButton \| OutlineButton \| IconButton|按钮 |


## 例子：
```dart
import 'dart:async';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Demo',
      home: MyHomePage('三秒后会改变'),
      routes: {}
    );
  }
}

class MyHomePage extends StatefulWidget {
  final String msg;

  //通过构造方法传值
  MyHomePage(this.msg);

  //主要是负责创建state
  @override
  MyHomePageState createState() => MyHomePageState(msg);
}

class MyHomePageState extends State<MyHomePage> {
  String msg;

  MyHomePageState(this.msg);

  @override
  //初始化，这个函数在生命周期中只调用一次
  void initState() {
    super.initState();
    //定时1秒
    new Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        msg = "我变了";
      });
    });
  }

  @override
  //销毁
  void dispose() {
    super.dispose();
  }

  @override
  //在initState之后调 Called when a dependency of this [State] object changes.
  void didChangeDependencies() {
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('title')
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            new Text(msg ?? 'aaaa'),
            FlatButton(
              color: Colors.red,
              textColor: Colors.white,
              onPressed: () {
                setState(() {
                  this.msg += ' 点击了按钮';
                });
              },
              child: Text('Click Me')
            )
          ],
        )
      )
    );
  }
}
```

##  Widget
Widget 分为 有状态 和 无状态 两种

### StatelessWidget 无状态 
自身不保存状态,是不可变的, 这意味着它们的属性不能改变 - 所有的值都是最终的，外部参数变化就销毁重新创建。尽量使用无状态的组件。

无状态变更，UI静态固化的Widget， 页面渲染性能更高。

```dart
class MyHome extends StatelessWidget {
  const MyHome({ Key key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return new Container(color: const Color(0xFF2DBD3A));
  }
}
```

### StatefulWidget  
持有的状态可能在widget生命周期中发生变化. 实现一个 stateful widget 至少需要两个类:
  * 一个 StatefulWidget类。
  * 一个 State类。 StatefulWidget类本身是不变的，但是 State类在widget生命周期中始终存在.

因状态变更可以导致UI变更的的Widget，涉及到数据渲染场景，都使用StatefulWidget。
```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({ Key key }) : super(key: key);

  @override
  MyHomePageState createState() => new MyHomePageState();
}

class MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return new Container(color: const Color(0xFFFFE306));
  }
}

```

### State  
setState()可以很方便的管理组件内的数据，但是Flutter中状态同样是从上往下流转的，因此也会遇到和React中同样的问题，如果组件树太深，逐层状态创建就显得很麻烦了，更不要说代码的易读和易维护性了。

State的生命周期有四种状态：

* created：当State对象被创建时候，State.initState方法会被调用；
* initialized：当State对象被创建，但还没有准备构建时，State.didChangeDependencies在这个时候会被调用；
* ready：State对象已经准备好了构建，State.dispose没有被调用的时候；
* defunct：State.dispose被调用后，State对象不能够被构建。

![State](/img/Flutter/state.jpg)
完整生命周期如下：
* 创建一个State对象时，会调用StatefulWidget.createState；
* 和一个BuildContext相关联，可以认为被加载了（mounted）；
* 调用initState；
* 调用didChangeDependencies；
* 经过上述步骤，State对象被完全的初始化了，调用build；
* 如果有需要，会调用didUpdateWidget；
* 如果处在开发模式，热加载会调用reassemble；
* 如果它的子树（subtree）包含需要被移除的State对象，会调用deactivate；
* 调用dispose,State对象以后都不会被构建；
* 当调用了dispose,State对象处于未加载（unmounted），已经被dispose的State对象没有办法被重新加载（remount）。


## Container
继承关系: Object > Diagnosticable > DiagnosticableTree > Widget > StatelessWidget > Container


```dart
Container(
  key: , //Container唯一标识符，用于查找更新
  width: 200,
  height: 200,
  padding: EdgeInsets.all(30),
  margin: EdgeInsets.fromLTRB(10, 20, 0, 50),
  transform: Matrix4.rotationZ(0.5), //设置变换矩阵，类型为Matrix4
  alignment: Alignment.topLeft, // 对齐方式
  constraints: new BoxConstraints.expand(//添加到child上额外的约束条件
    height:Theme.of(context).textTheme.display1.fontSize * 1.1 + 10.0,
  ),
  //color: Colors.blue,  
  foregroundDecoration: , //绘制在child前面的装饰,可能会遮盖color效果。
  decoration: new BoxDecoration( //绘制在child后面的装饰
    color: Colors.orange,
    borderRadius: BorderRadius.all(Radius.circular(20.0)),//弧度为4.0
    border: new Border.all(color: Colors.red, width: 10),//边框
  ),//设置了decoration，就不能设置Container的color，否则报错
  child: Text(
    "I am a Container",
    style:TextStyle(
      fontSize: 20,
      color: Colors.white
    )
  ),
),
```

EdgeInsets 设置padding，margin值
* EdgeInsets.all(value)  设置四个方向均使用相同数值的填充
* EdgeInsets.only(left: leftVal,top: topVal,right: rightVal,bottom: bottomVal) 设置某个方向的填充（参数个数为：0-4个）
* EdgeInsets.fromLTRB(left, top, right, bottom) 设置四个方向的填充(参数必填)
* EdgeInsets.symmetric(vertical: verticalVal,horizontal: horizontalVal) 设置对称方向的填充，vertical指top和bottom，horizontal指left和right （参数个数为：0-2）


Container是最常的widget。在以下情况会使用到Container，当然并不是绝对的，也可以通过其他widget来实现。
* 需要设置间隔（这种情况下，如果只是单纯的间隔，也可以通过Padding来实现）；
* 需要设置背景色；
* 需要设置圆角或者边框的时候（ClipRRect也可以实现圆角效果）；
* 需要对齐（Align也可以实现）；
* 需要设置背景图片的时候（也可以使用Stack实现）。


## Text
```dart
Text(
  "Hello world",
  softWrap: true, //是否自动换行（默认true）
  textAlign:TextAlign.left, // 文本对齐方式
  textDirection: TextDirection.ltr, // 文本方向
  overflow: TextOverflow.ellipsis, // 文字溢出
  maxLines: 2, //最大行数限制
  textScaleFactor: 2, // 字体显示倍率,相对于父元素字体的大小的倍数
  style: TextStyle( //文本样式
    fontSize: 50,
    fontWeight: FontWeight.bold,
    color:Colors.red,
    //color:Color(0xFF0000FF),
    decoration: TextDecoration.lineThrough, // 下划线位置
    decorationColor: Colors.purple, // 下划线颜色
    decorationStyle: TextDecorationStyle.wavy, // 下划线样式
  )
),
```
## TextSpan 
## Text.rich

## Button 按钮  
按钮类型：
* RaisedButton: 凸起的按钮
* FlatButton：扁平化按钮
* OutlineButton：带边框按钮
* IconButton：带图标按钮

```dart
OutlineButton(
  child: Text("我是 OutlineButton" ),
  color: Colors.blue,
  textColor: Colors.blue,
  onPressed: () {},
),
IconButton(
  icon: Icon(Icons.add),
  onPressed: () {},
)
```


## Image 图片加载
* Image()	通用方法，使用ImageProvider实现，如下方法本质上也是使用的这个方法
* Image.asset	加载资源图片
* Image.file	加载本地图片文件
* Image.network	加载网络图片
* Image.memory	加载Uint8List资源图片
---
* 属性：
```dart
new Directionality(
  textDirection: TextDirection.ltr, //对齐方向，
  child: image,
),
Image image = Image(
  image: NetworkImage(url),
  width: 200.0,
  height: 500.0,
  repeat: ImageRepeat.repeat, //重复方式
  alignment: Alignment.bottomRight, //对其方式
  fit: BoxFit.scaleDown, //图片适应方式,(拉伸，充满...)
  centerSlice: new Rect.fromCircle(center: const Offset(100.0, 100.0), radius: 10.0 ), //当图片需要被拉伸显示的时候，centerSlice定义的矩形区域会被拉伸
  //color和colorBlendMode一般配合使用
  color: Colors.greenAccent, // 背景色
  colorBlendMode: BlendMode.colorBurn, // 混合模式
  matchTextDirection: true, //与Directionality配合使用
  gaplessPlayback: true, //当ImageProvider发生变化后，重新加载图片的过程中，原图片的展示是否保留。若值为true，保留，若为false，不保留，直接空白等待下一张图片加载。
),
```
---

* 网络图片的加载
```dart
Image(
  image: NetworkImage("https://cn.bing.com/th?id=OHR.FrozenTree_ZH-CN9591258534_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"),
  width: 200.0,
),

或

Image.network("https://cn.bing.com/th?id=OHR.FrozenTree_ZH-CN9591258534_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"),
```
* 项目里的资源图片加载
```dart
//需在pubspec.yaml配置文件，添加图片的路径
flutter:

  uses-material-design: true
  assets:
      - lib/images/a.jpg

Image(
  image: AssetImage('lib/images/a.jpg'),
  width: 100.0,
),
或者 
Image.asset("lib/images/a.jpg",width: 100.0),
```

* 本地文件图片
```dart
Image.file(new File("/Users/gs/Downloads/1.jpeg")),
```


## 动画
```dart
bool _visible=true;

AnimatedOpacity(
  opacity: _visible ? 1.0:0.0,
  duration: Duration(milliseconds: 1000),
  child: Text('看我淡入淡出'),
),
RaisedButton(
  child: Text("显示隐藏"),
  onPressed: (){
    setState(() {
      _visible=!_visible;
    });
    },
),
```
在路由销毁的时候，需要释放动画资源，否则容易导致内存泄漏。


# <a name="布局">布局</a>
Flutter 中拥有需要将近30种内置的 [布局Widget](https://flutterchina.club/widgets/layout/)

Flutter中的边界约束，是指widget可以按照指定限定条件，来决定自身如何占用布局空间。Flutter借鉴了很多React相关的东西，包括一些布局思想，但是它自身没有抽离出布局样式，而是用不同的widget去实现不同的布局，将样式嵌入widget中，用户可以像搭积木一样写布局，写法上跟React很像，只不过没了样式的设定。

这样做的好处，我觉得可能是为了统一的渲染。加入样式，会让布局复杂不少，在渲染层面会降低很多性能。因此，Flutter在大的方向上，加入不同类型的布局widget。在小的方向上，只给出很少的定制化的东西，将布局限定在有限的范围内，在完成布局的同时，让整个渲染能够统一，加快了更新和渲染。

但是，缺点也是同样明显，少了很多灵活性，不同的布局方式都被抽离出了widget，大家需要了解的widget非常多，增加了学习成本。


常用布局

|类型|作用|特点|
|:--|:--|:--|
|Container|一个拥有绘制、定位、调整大小的 widget。默认充满，包含了padding、margin、color、宽高、decoration 等配置。|只有一个子 Widget|
|Padding|给child设置padding。|只有一个子 Widget|
|Align|将其子widget对齐，并可以根据子widget的大小自动调整大小。|只有一个子 widget|
|Center|只用于居中显示，常用于嵌套child，给child设置居中。|只有一个子 Widget|
|Transform|将其子Widget进行转换（rotate,skew...）|只有一个子 Widget|
|Expanded|拓展分配子Widget|只有一个子 Widget|
|Column|垂直布局|有多个子 Widget|
|Row|水平布局|有多个子 Widget|
|Wrap|多行显示其子widget，就像可换行的Row|有多个子 Widget|
|Flex|Flex布局|有多个子 Widget|
|Stack|将其子Widget简单的堆叠在一起,可结合Positioned进行绝对定位|有多个子 Widget|
|ListView|可滚动的列表|有多个子 Widget|

## [Container](https://api.flutter.dev/flutter/widgets/Container-class.html)  
容器  
```dart
new Container(
  margin: EdgeInsets.all(10.0), //设置maring
  height: 120.0,
  width: 500.0,
  //设置一个透明黑色遮罩
  //设置了decoration，就不能设置Container的color。
  decoration: new BoxDecoration(
    borderRadius: BorderRadius.all(Radius.circular(4.0)),//弧度为4.0
    color: Colors.black,
    border: new Border.all(color: Colors.red, width: 11.3),//边框
  ),
  child:new Text(
    "666666",
    style: TextStyle(
      color: Colors.white
    )
  ),
),
```

## [Padding](https://api.flutter.dev/flutter/widgets/Padding-class.html)
Flutter中并没有单独的Margin控件，在Container中有margin属性，看源码关于margin的实现。
```dart
if (margin != null)
  current = new Padding(padding: margin, child: current);
```
不难看出，Flutter中淡化了margin以及padding的区别，margin实质上也是由Padding实现的。

继承行为：Object > Diagnosticable > DiagnosticableTree > Widget > RenderObjectWidget > SingleChildRenderObjectWidget > Padding

```dart
new Padding(
  padding: new EdgeInsets.all(8.0),
  child: const Card(child: const Text('Hello World!')),
)
```

基本上需要间距的地方，它都能够使用。如果在单一的间距场景，使用Padding比Container的成本要小一些，毕竟Container里面包含了多个widget。Padding能够实现的，Container都能够实现，只不过，Container更加的复杂。

## [Align](https://api.flutter.dev/flutter/widgets/Align-class.html)
```dart
Align(
  //widthFactor:, //宽度因子，如果设置的话，Align的宽度就是child的宽度乘以这个值，不能为负数。
  //heightFactor:,//高度因子，如果设置的话，Align的高度就是child的高度乘以这个值，不能为负数。
  alignment: Alignment.topRight, //对齐方式
  //alignment: Alignment(0.2, 0.6),
  //alignment: FractionalOffset(0.2, 0.6),
  child: FlutterLogo(
    size: 60,
  ),
),
```

## [Center](https://api.flutter.dev/flutter/widgets/Center-class.html)
Center继承自Align，只不过是将alignment设置为Alignment.center，
其他属性例如widthFactor、heightFactor，布局行为，都与Align完全一样

```dart
Center(
  child: Text('Center'),
),
```

## [Transform](https://api.flutter.dev/flutter/widgets/Transform-class.html)
```dart
Transform(
  alignment: Alignment.topRight,
  transform: Matrix4.skewY(0.3)..rotateZ(12.0),
  child: Container(
    padding: const EdgeInsets.all(8.0),
    color: const Color(0xFFE8581C),
    child: const Text('Transform'),
  ),
),
```


## [Expanded](https://api.flutter.dev/flutter/widgets/Expanded-class.html)
```dart
Row(
  children:<Widget>[
    Expanded(
      flex: 2,
      child: Container(
        color: Colors.red,
        height: 100,
      ),
    ),
    Expanded(
      flex: 4,
      child: Container(
        color: Colors.amber,
        height: 100,
      ),
    ), 
  ],
),
```


## [Row](https://api.flutter.dev/flutter/widgets/Row-class.html) / [Column](https://api.flutter.dev/flutter/widgets/Column-class.html)
水平/垂直布局  
```dart
Row(
  children:<Widget>[
    Text('Row'),
    Text('Row'),
    Text('Row'),
  ],
),

Column(
  children:<Widget>[
    Text('Column'),
    Text('Column'),
    Text('Column'),
  ],
),
```


## [Wrap](https://api.flutter.dev/flutter/widgets/Wrap-class.html)
```dart
Wrap(
  spacing: 8.0, // 子Widget间距
  runSpacing: 4.0, //行间距
  children: <Widget>[
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
    Text('Laurens'),
  ],
),
```

## [Flex](https://api.flutter.dev/flutter/widgets/Flex-class.html)
Row，Column布局，其实都是继承自Flex，也属于流式布局。

如果轴向不确定，使用Flex，通过修改direction的值设定轴向  
如果轴向已确定，使用Row，Column，布局更简洁，更有语义化


示例中，轴向横向排列，最左边一个固定宽度的Container，右边两个Expanded，各自占剩下的宽度的一半
```dart
Flex(
  direction: Axis.horizontal,
  children: <Widget>[
    Container(
      width: 30,
      height: 100,
      color: Colors.blue,
    ),
    Expanded(
      flex: 1,
      child: Container(
        height: 100.0,
        color: Colors.red,
      ),
    ),
    Expanded(
      flex: 1,
      child: Container(
        height: 100.0,
        color: Colors.green,
      ),
    ),
  ],
),
```

## [Stack](https://api.flutter.dev/flutter/widgets/Stack-class.html)
```dart
Stack(
  children: <Widget>[
    Container(
      width: 100,
      height: 100,
      color: Colors.red,
      child: Align(
        alignment: Alignment.topRight,
        child: Text('1')
      ),
    ),
    Container(
      width: 60,
      height: 60,
      color: Colors.green,
      child: Align(
        alignment: Alignment.topRight,
        child: Text('2')
      ),
    ),
    Container(
      width: 30,
      height: 30,
      color: Colors.blue,
      child: Text('3'),
    ),
  ],
),
```
结合Positioned绝对定位
```dart
Stack(
  children:<Widget>[
    Image.network("https://cn.bing.com/th?id=OHR.FrozenTree_ZH-CN9591258534_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"),
    Positioned(
      top: 10,
      left: 10,
      child: Text(
        '这里是定位的文本',
        style:TextStyle(
          color: Colors.red,
          fontSize: 22,
        )
      ),
    ),
  ]
),
```

## [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)
```dart
ListView(
  padding: const EdgeInsets.all(8),
  children: <Widget>[
    Container(
      height: 50,
      color: Colors.amber[600],
      child: const Center(child: Text('Entry A')),
    ),
    Container(
      height: 50,
      color: Colors.amber[500],
      child: const Center(child: Text('Entry B')),
    ),
    Container(
      height: 50,
      color: Colors.amber[100],
      child: const Center(child: Text('Entry C')),
    ),
  ],
)
```


# <a name="Flutter for Web开发者">[Flutter for Web开发者](https://flutterchina.club/web-analogs/)</a>

* 路由跳转
```dart
Navigator.push(context, MaterialPageRoute(builder: (context){
  return ListPage();
}));

或：
Navigator.pushNamed(context, 'ListPage')

//这里的ListPage为路由名 需在 routes里注册
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Demo',
      home: MyHomePage(),
      routes: {
        "ListPage": (context) => ListPage(),
        "ListPage1": (context) { return new ListPage1(); },
      }
    );
  }
}
```

# <a name="http请求">http请求</a>
httpClient在 dart:io库中，不需要引入第三方库就可以使用，示例代码如下：

使用示例
```dart
import 'dart:convert';
import 'dart:io';

Future _getByHttpClient() async{
  //接口地址
  const url="https://www.demo.com/api";

  //定义httpClient
  HttpClient client = new HttpClient();
  //定义request
  HttpClientRequest request = await client.getUrl(Uri.parse(url));
  //定义reponse
  HttpClientResponse response = await request.close();
  //respinse返回的数据，是字符串
  String responseBody = await response.transform(utf8.decoder).join();
  //关闭httpClient
  client.close();
  //字符串需要转化为JSON
  var json= jsonDecode(responseBody);
  return json;
} 
```

第三方库
* [http](https://pub.dev/packages/http)
* [Dio](https://pub.flutter-io.cn/packages/dio)