[dart代码-线上运行](https://dartpad.cn/)

[dart-英文](https://dart.dev/guides/language/language-tour)
[dart-中文](https://dartcn.com/guides/language/language-tour)

* <a href=""></a>
* <a href=""></a>

#  <a name=""></a>

# vscode运行dart文件
[Dart SDK下载--Windows](https://gekorm.com/dart-windows/)  
Dart SDK与Flutter SDK捆绑在一起; 
如果已安装[Flutter SDK](https://github.com/flutter/flutter/releases)则可省略

vscode里安装 code runner插件

新建demo.dart文件  
点击F5调试运行，它会弹出launch的配置,添加以下代码：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Dart",
      "program": "${file}",
      "request": "launch",
      "type": "dart"
    }
  ]
}
```
将debug切换为之前在launch.json设定的dart  
打开终端，切换到控制台，即可查看代码的输出
![img](./img/dart-run.jpg)

# 了解Dart
Dart 是单线程的  
Dart 属于是强类型语言

Dart语言有着不少 Java、Kotlin 和 JS 的影子，所以对于 Android 原生开发者、前端开发者而言无疑是非常友好。

# [风格建议指南](https://dartcn.com/guides/language/effective-dart/design#types)

代码必须在`void main(){}`内运行
```dart
void main () {
  print('test');
}
或
main () {
  print('test');
}
```

每行代码末尾必须加封号(;) 否则直接报错

只有==  没有===

?? 、??= 属于操作符，如: AA ?? "999" 表示如果 AA 为空，返回999(类似于js的||)；AA ??= "999" 表示如果 AA 为空，给 AA 设置成 999。

控制台打印方法: print()

断言 assert():如果表达式结果为 false ， 则断言失败，并抛出异常.  
>在生产环境代码中 assert() 函数会被忽略，不会被调用。 在开发过程中, assert(condition) 会在非 true 的条件下抛出异常

is判断类型
```dart
print(1 is int); // true
print(1 is Object); // true
print(1.0 is double); // true
print('str' is String); // true
print([] is List); // true
print([] is Object); // true
print({} is Object); // true
```
所有的变量终究是一个对象（一个类的实例）

# 变量
var 可以定义变量，如 var tag = "666" 

Dart 属于是强类型语言 ，但可以用 var 来声明变量，Dart 会自推导出数据类型，所以 var 实际上是编译期的“语法糖”。  
dynamic 表示动态类型，被编译后，实际是一个 object 类型，在编译期间不进行任何的类型检查，而是在运行期进行类型检查。


创建一个变量并进行初始化:  
`var name = 'str';`
name 变量的类型被推断为 String 。

也可以通过指定类型的方式，来改变变量类型。 如果对象不限定为单个类型，可以指定为 对象类型 或 动态类型 
>dynamic //编译时不会揣测数据类型，但是运行时会推  
`dynamic name = 'str';`

显式声明可以推断出的类型：  
`String name = 'str';`  

### Final 和 Const 表示常量
从来不会被修改的变量， 可以使用 final 或 const, 而不是 var 或者其他类型，
Final 变量的值只能被设置一次；   
Const 变量在编译时就已经固定 (Const 变量 是隐式 Final 的类型.) 最高级 final 变量或类变量在第一次使用时被初始化。

```dart
final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';
```

* Const 关键字不仅可以用于声明常量变量。 还可以用来创建常量值，以及声明创建常量值的构造函数。 任何变量都可以拥有常量值。
```dart
var foo = const [];
final bar = const [];
const baz = []; //此时const可略, 等同于 const baz = const []
```

非 Final ， 非 const 的变量是可以被修改的，即使这些变量 曾经引用过 const 值。  
`foo = [1, 2, 3]; // 曾经引用过 const [] 常量值。`

Const 变量的值不可以修改：  
`baz = [42]; // Error: 常量变量不能赋值修改。`


### 默认值
未初始化的变量默认值是 `null`。即使变量是数字 类型默认值也是 null，因为在 Dart 中一切都是对象，数字类型 也不例外。


# 基本类型


# 内建类型类型
* Number  
* String  
* Boolean  
* List (也被称为 Array)  
* Map  
* Set  
* Rune (用于在字符串中表示 Unicode 字符)  
* Symbol  

所有的变量终究是一个对象（一个类的实例）， 所以变量可以使用 构造涵数 进行初始化

## Number
### Number 有两种类型:
* int 
>整数值不大于64位， 具体取决于平台。 在 Dart VM 上， 值的范围从 -263 到 263 - 1. Dart 被编译为 JavaScript 时，使用 JavaScript numbers, 值的范围从 -253 到 253 - 1.
* double 
>64位（双精度）浮点数，依据 IEEE 754 标准。

### 方法：
* num.parse()字符串转数字:可能会创建一个整型，否则为浮点型对象：  
* int.parse()字符串转换为整型  
* double.parse()字符串转换为双浮点型对象  
```dart
int.parse('111'); // 111
double.parse('111'); // 111
int.parse('a'); // Uncaught Error: FormatException: a
```
parse通过添加 radix 参数，指定整数的进制基数：
```dart
int.parse('42', radix: 16); // 66
```

## String
### 字符串拼接
* ${expression} 的方式内嵌表达式
```dart
String name = 'Tom';
print('I am ${name}'); // I am Tom
```

* +运算符拼接字符串
```dart
String name = 'Tom';
print('I am ' + name); // I am Tom
```

* \*运算符重复拼接
```dart
'str ' * 3 // 'str str str'
```

* 连续三个单引号或者三个双引号实现多行字符串对象的创建(类似ES6的``)
```dart
String name = 'Tom';
print('''
  I am ${name}
  Nice to meet you
''');
//   
I am Tom
Nice to meet you
```

* r 前缀，可以创建 “原始 raw” 字符串：
```dart
print("I am Tom \n Nice to meet you"); 
// I am Tom 
// Nice to meet you

print(r"I am Tom \n Nice to meet you"); 
// I am Tom \n Nice to meet you

print(r"I am ${name} \n Nice to meet you");
// I am ${name} \n Nice to meet you
```
### 属性
* length 长度  
* isEmpty 检查字符串是否为空  
* isNotEmpty 检查字符串是否不为空  
* codeUnits 获取一个字符串的所有 UTF-16 编码单元，返回数组。

```dart
''.isEmpty; // true
'a'.isNotEmpty // true
''.isNotEmpty // false

'ab'.codeUnits; // [97,98]
'ab'.codeUnits.toList(); // [97,98]
'ab'.codeUnits[0] is int // true ；为数组内容为int类型
```

### 字符串方法
* toString() 转换为字符串类型
```dart
42.5.toString() // '42.5'
42.toString() // '42'
```

* toStringAsFixed 指定小数点后的位数
```dart
123.456.toStringAsFixed(2) // '123.45'
```

* toStringAsPrecision 指定有效数字的位数
```dart
123.456.toStringAsPrecision(2) // '1.2e+2'
```
* contains() 判断一个字符串是否包含另一个字符串
```dart
'abc'.contains('a'); // true
'abc'.contains('q'); // false
'abc'.contains('ab'); // true
```


* split()
* startsWith()
* endsWith() 


## Boolean 布尔类型
Dart 是强 bool 类型检查，只有bool 类型的值是true 才被认为是true

Dart 下只有 bool 型可以用于 if 等判断，不同于JS,在Dart中这种使用方式是不合法的 `if(1){}`

## List 列表
类似于JS的Array

```dart
var list1 = List();// 不限定类型，可添加任意类型的数据
List list2 = List();// 不限定类型，可添加任意类型的数据
List list3 = List(2);//不限定类型，可添加任意类型的数据

var list4 = [1,2,3];//限定了类型，只能是int
var list5 = [2,'3',true];//未限定了类型，任意位置可用任意类型替换
List list6 = ['a',2,'b',false];//未限定了类型，任意位置可用任意类型

list4.add(32); // ok
list4.add('str'); // error
list4[0] = 5; // ok
list4[0] = 'str'; // error
```

限定list类型
```dart
var list1 = <String>['a'];
List list2 = <String>['a'];
List<String> list3 = ['a'];

list1.add('da') // ok
list1.add(11) // err ,只能添加string类型
```

```dart
var arr = []; // []
var arr1 = new List(3); // [null, null, null]
arr1.length; // 3
```

在 List 字面量之前添加 const 关键字，可以定义 List 类型的编译时常量
```dart
var constantList = const [1, 2, 3];
constantList = [1];
print(constantList); // [1]
constantList[1] = 43; // 报错,Unsupported operation: Cannot modify an unmodifiable list
```

### List属性
* length 长度
* isEmpty 是否为空
* isNotEmpty 是否不为空
* reversed 返回倒序的包含列表值的可迭代对象，不改变原List
* first 返回List第一个元素
* last 返回List最后一个元素
* list[index] 查看指定索引的list对应的值

```dart
List<String> list = List();
list.add('aaa');
list.add('bbb');
list.add('ccc');
print(list.length);//3    长度
print(list.isEmpty);//false      是否为空
print(list.isNotEmpty);//true     是否不为空
print(list.reversed);//(ccc, bbb, aaa)      返回一个List的倒序排列的Iterable  不改变原List
print(list.first);//aaa    第一个元素
print(list.last);//ccc    最后一个元素
```
### List方法
查询元素或索引
* indexOf(val, start) 获取指定元素在list中的索引，返回符合的第一个的索引
  >val:查找的值  
  >start:开始位置  
  >[0,1, 2, 3, 4, 1].indexOf(1) // 1

* lastIndexOf(val, start) 从后往前查找,返回符合的第一个的索引
  >val:查找的值  
  >start:开始位置  
  >[0,1, 2, 3, 4, 1].lastIndexOf(1) // 5

* elementAt(index) 获取指定索引位置的元素
  >[0,1, 2, 3, 4, 1].elementAt(2) // 2

* any((element)=>(bool)) 判断List中是否有任意一个元素符合给定的参数

添加
* add() 添加到末尾
* addAll(list1) 合并List
* insert(index,val) 插入值到指定索引
* insertAll(index,list1) 插入List到指定索引
* followedBy(list1) 合并List,返回可迭代对象,`不会改变原数组`

删除
* remove(item) 删除具体的元素(只会移除找到的第一个元素)，成功返回true
* removeAt(index) 删除索引位置的元素,返回被删除的元素
* removeLast() 删除末尾元素,返回被删除的元素
* removeRange(start,end) 范围删除(含头不含尾),`无返回值`
* removeWhere(() => {}) 根据条件删除, `无返回值` (对应retainWhere 根据条件保存)
* clear() 清空List, `无返回值`

修改
* setRange(start,end,list1) 范围修改List的值(含头不含尾),`无返回值`
  >从list1中取出[start, end)的值替换list对应的值  
  >start等于end，则不改变。 
  >start大于end 报错  
  >start和end任何一个超出list 或 list1的长度, 则报错  

* replaceRange(start,end,list1) 范围修改List的值(含头不含尾),`无返回值`
  >删除[start,end)的值,在start位置添加list1里的值  
  >start等于end，则不会删除`list`值，依旧会添加`list1`值。  
  >start大于end 报错  
  >start和end任何一个超出list的长度, 则报错  

* fillRange(start,end,value) 从[start,end) 每个元素用value替换(含头不含尾)`无返回值`
  >start等于end，则不改变  
  >start大于end 报错  
  >start和end任何一个超出list 或 list1的长度, 则报错 

* retainWhere(()=>{} 根据条件筛选元素`无返回值`

* setAll(index,list1) 从index开始，使用list1内的元素逐个替换list中的元素`无返回值`
  >从指定index位置开始使用list1的值进行替换替换，  
  >index+list1.length必须 <= list.length 否则报错


添加的方法代码展示
```dart
List list = [1, 2];

list.add('add'); // [1, 2, 'add']

list.addAll([6, 7, 8]); // [1, 2, 6, 7, 8]

list.insert(0,'insert'); // ['insert', 1, 2]

list.insertAll(0, [6, 7, 8]); // [6, 7, 8, 1, 2]

List list1 = [6, 7, 8];
list.followedBy(list1); // (1, 2, 6, 7, 8)
list.followedBy(list1) is  List ; // false
list // [1, 2]
list1 // [6, 7, 8]

```

删除的方法代码展示
```dart
List list = [1, 2, 'a', 2];

list.remove(2); // true
list; // [1, 'a', 2]

list.removeAt(2); // 'a'
list; // [1, 2, 2]

list.removeLast(); // 2
list; // [1, 2, 'a']

var list1 = list.removeRange(0,2);
list; // ['a', 2]
// 无法打印 使用removeRange返回的值
list1 // 报错 
---

list.removeWhere( (item) => item == 2);
list // [1, 'a']

list.clear();
list // []
```

修改的方法代码展示
```dart
List list = [1, 2, 3, 4];
List list1 = [6, 7, 8];

list.setRange(1,3,list1); //list里对应的索引的值替换为list1里的
list // [1, 6, 7, 4]

list.replaceRange(1, 3, list1);
list // [1, 6, 7, 8, 4]
List的replaceRange方法类似于JS数组的splice(start, len, arr1)方法(start:开始的索引，len:删除的个数，arr：拼接的数组或字符)
list.splice(1,2,...list1)
list // [1, 6, 7, 8, 4]

list.fillRange(1, 3, 0);
list // [1, 0, 0, 4]
list.fillRange(1, 1, 0);
list // [1, 2, 3, 4]

list.retainWhere( (item) => item > 2);
list // [3, 4]

list.setAll(1,[0,9]);
list // [1, 0, 9, 4]
```