## 对象特点:
>
    
    对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。
    对象有状态：对象具有状态，同一对象可能处于不同状态之下。
    对象具有行为：即对象的状态，可能因为它的行为产生变迁。

    (JS中，将状态和行为统一抽象为"属性")


## 对象的两类属性:

对 JavaScript 来说，属性并非只是简单的名称和值，JavaScript 用一组特征（attribute）来描述属性（property）。

数据属性 具有四个特征
>
    value：就是属性的值。
    writable：决定属性能否被赋值。默认true
    enumerable：决定能否枚举该属性。默认true
    configurable：决定该属性能否被删除或者改变特征值。默认true
    

访问器（getter/setter）属性，它也有四个特征
>

    getter：函数或 undefined，在取属性值时被调用。
    setter：函数或 undefined，在设置属性值时被调用。
    enumerable：决定 能否枚举该属性。
    configurable：决定该属性能否被删除或者改变特征值

## 对象分类:
>
宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。全局对象window

内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。

  * 固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
  * 原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
  * 普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。


## 属性/方法：

Object.create 根据指定的原型创建新对象，原型可以是 null；
Object.getPrototypeOf 获得一个对象的原型；
Object.setPrototypeOf 设置一个对象的原型。
Object.assign(obj1, obj2,...)