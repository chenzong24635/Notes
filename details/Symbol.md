# [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

<a name="TOP"></a>

<details open>
  <summary>
    目录
  </summary>

  * <a href="#概述">概述</a>
  * <a href="#for">for</a>
  * <a href="#keyFor">keyFor</a>
  * <a href="#"></a>
</details>

# <a name="概述">概述</a>

是一种数据类型; 不能 new,因为 Symbol 是一个原始类型的值，不是对象。

>
    Symbol(),可以传参
    let s1 = Symbol();
    let s2 = Symbol();
    s1 === s2 // false
    // 有参数的情况
    let s1 = Symbol("foo");
    let s2 = Symbol("foo");
    s1 === s2 // false

Symbol()参数表示对当前Symbol值的描述，相同参数的Symbol()返回值不相等

Symbol值不能与其他类型的值进行运算

Symbol值可通过String()或toString()显式转为字符串

Symbol值作为对象属性名时，此属性是公开属性，但不是私有属性

Symbol值作为对象属性名时，只能用方括号运算符([])读取，不能用点运算符(.)读取

Symbol值作为对象属性名时，不会被常规方法遍历得到，可利用此特性为对象定义非私有但又只用于内部的方法

# <a name="description">description</a><a href="#TOP"><img src="./img/backward.png" width="20px" /></a>

返回Symbol值的描述


Symbol('a').description //'a'

# <a name="for">for</a>
在全局中搜索有没有以该参数作为名称的 Symbol 值，如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值
>
    let s1 = Symbol.for('foo');
    let s2 = Symbol.for('foo');
    s1 === s2 // true

# <a name="keyFor">keyFor</a><a href="#TOP"><img src="./img/backward.png" width="20px" /></a>

返回一个已登记的 Symbol 类型值的 key
>
    var s1 = Symbol.for("foo");
    Symbol.keyFor(s1) // "foo"

    var s2 = Symbol("foo");
    Symbol.keyFor(s2) // undefined

# <a name=""></a>
Object.getOwnPropertySymbols()：返回对象中所有用作属性名的Symbol值的数组


# <a name=""></a>

Symbol.hasInstance：指向一个内部方法，当其他对象使用instanceof运算符判断是否为此对象的实例时会调用此方法

Symbol.isConcatSpreadable：指向一个布尔值，定义对象用于Array.prototype.concat()时是否可展开

Symbol.species：指向一个构造函数，当实例对象使用自身构造函数时会调用指定的构造函数

Symbol.match：指向一个函数，当实例对象被String.prototype.match()调用时会重新定义match()的行为

Symbol.replace：指向一个函数，当实例对象被String.prototype.replace()调用时会重新定义replace()的行为

Symbol.search：指向一个函数，当实例对象被String.prototype.search()调用时会重新定义search()的行为

Symbol.split：指向一个函数，当实例对象被String.prototype.split()调用时会重新定义split()的行为

Symbol.iterator：指向一个默认遍历器方法，当实例对象执行for-of时会调用指定的默认遍历器

Symbol.toPrimitive：指向一个函数，当实例对象被转为原始类型的值时会返回此对象对应的原始类型值

Symbol.toStringTag：指向一个函数，当实例对象被Object.prototype.toString()调用时其返回值会出现在toString()返回的字符串之中表示对象的类型

Symbol.unscopables：指向一个对象，指定使用with时哪些属性会被with环境排除

# <a name=""></a>

只有 Object.getOwnPropertySymbols(obj)和 Reflect.ownKeys(obj)可以拿到 Symbol 属性 

只有 Reflect.ownKeys(obj)可以拿到不可枚举属性