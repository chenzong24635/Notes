
[官网-中文](https://flutterchina.club/get-started/install/)
[官网-英文](https://flutter.dev/docs/get-started/install/)

# [搭建Flutter开发环境](https://flutterchina.club/setup-windows/)

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

# vscode运行fluter
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

# 概述
Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 
* 具有跨平台开发特性，支持IOS、Android、Web三端。
* 使用Dart语言，目前已经支持同时编译成Web端代码，
* 自绘UI引擎和编译成原生代码的方式，使得系统的运行时的高性能成为了可能

# 

Dart 类build方法返回的便是Widget，在Flutter中一切都是Widget，包括但不限于
* 结构性元素，menu，button等
* 样式类元素，font，color等
* 布局类元素，padding，margin等
* 导航
* 手势

Flutter中Widget可以分为三类，形如React中“展示组件”、“容器组件”，“context”。

* StatelessWidget 无状态 
Flutter中的“展示组件”，自身不保存状态,是不可变的, 这意味着它们的属性不能改变 - 所有的值都是最终的，外部参数变化就销毁重新创建。尽量使用无状态的组件。


* StatefulWidget  
状态组件就是类似于React中的“容器组件”了，持有的状态可能在widget生命周期中发生变化. 实现一个 stateful widget 至少需要两个类:

一个 StatefulWidget类。
一个 State类。 StatefulWidget类本身是不变的，但是 State类在widget生命周期中始终存在.


* State Management  
setState()可以很方便的管理组件内的数据，但是Flutter中状态同样是从上往下流转的，因此也会遇到和React中同样的问题，如果组件树太深，逐层状态创建就显得很麻烦了，更不要说代码的易读和易维护性了。

* InheritedWidget  
context

Flutter App的一切从lib/main.dart文件的main函数开始：
```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```
# [Flutter for Web开发者](https://flutterchina.club/web-analogs/)

# 布局
Flutter 中拥有需要将近30种内置的 [布局Widget](https://flutterchina.club/widgets/layout/)，其中常用有 Container、Padding、Center、Flex、Stack、Row、Column、ListView 等，下面简单讲解它们的特性和使用。

|类型|作用特点|
|:--|:--|
|Container|只有一个子 Widget。默认充满，包含了padding、margin、color、宽高、decoration 等配置。|
|Padding|只有一个子 Widget。只用于设置Padding，常用于嵌套child，给child设置padding。|
|Center|只有一个子 Widget。只用于居中显示，常用于嵌套child，给child设置居中。|
|Stack|可以有多个子 Widget。 子Widget堆叠在一起。|
|Column|可以有多个子 Widget。垂直布局。|
|Row|可以有多个子 Widget。水平布局。|
|Expanded|只有一个子 Widget。在  Column 和  Row 中充满。|
|ListView|可以有多个子 Widget。自己意会吧。|

* Container  
```dart
new Container(
  ///四周10大小的maring
  margin: EdgeInsets.all(10.0),
  height: 120.0,
  width: 500.0,
  ///透明黑色遮罩
  decoration: new BoxDecoration(
    ///弧度为4.0
    borderRadius: BorderRadius.all(Radius.circular(4.0)),
    ///设置了decoration的color，就不能设置Container的color。
    color: Colors.black,
    ///边框
    border: new Border.all(color: Color(GSYColors.subTextColor), width: 0.3)),
  child:new Text("666666"),
)

```