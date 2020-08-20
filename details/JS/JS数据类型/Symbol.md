<a id="top"></a>

[Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)--MDN

[Symbol](https://es6.ruanyifeng.com/#docs/symbol)--阮一峰

* <a href="#概述">概述</a>
* <a href="#属性、方法">属性、方法</a>

# <a name="概述">概述</a>[![bakTop](./img/backward.png)](#top)

是一种数据类型; 不能 new,因为 Symbol 是一个原始类型的值，不是对象。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的

Symbol(description)
>description 可选,字符串

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

# <a name="属性、方法">属性、方法</a>[![bakTop](./img/backward.png)](#top)

* Symbol.length 长度属性，值为0

* Symbol.prototype 原型

* Symbol().description
  >返回Symbol值的描述  
  >Symbol('a').description //'a'

* Symbol.for  
  在全局中搜索有没有以该参数作为名称的 Symbol 值，如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值
  >
      let s1 = Symbol.for('foo');
      let s2 = Symbol.for('foo');
      s1 === s2 // true
  >
      let s1 = Symbol('foo');
      let s2 = Symbol('foo');
      s1 === s2 // false

* Symbol.keyFor  

  返回一个已登记的 Symbol 类型值的 key
  >
      var s1 = Symbol.for("foo");
      Symbol.keyFor(s1) // "foo"

      var s2 = Symbol("foo");
      Symbol.keyFor(s2) // undefined


* Symbol.hasInstance：指向一个内部方法，当其他对象使用instanceof运算符判断是否为此对象的实例时会调用此方法

* Symbol.isConcatSpreadable：指向一个布尔值，定义对象用于Array.prototype.concat()时是否可展开
```js
const obj = {
  0: 'hello',
  1: 'world',
  length: 2,
  [Symbol.isConcatSpreadable]: true
}
const message = ['Hi'].concat(obj)
console.log(message) // ['Hi', 'hello', 'world']
```

* Symbol.species：指向一个构造函数，当实例对象使用自身构造函数时会调用指定的构造函数

* Symbol.match：指向一个函数，当实例对象被String.prototype.match()调用时会重新定义match()的行为
```js
const smatch = {
  [Symbol.match] (value) {
    return value.length
  },
}
'abc'.match(smatch); //'3
```

* Symbol.replace：指向一个函数，当实例对象被String.prototype.replace()调用时会重新定义replace()的行为
* Symbol.search：指向一个函数，当实例对象被String.prototype.search()调用时会重新定义search()的行为
* Symbol.split：指向一个函数，当实例对象被String.prototype.split()调用时会重新定义split()的行为



* Symbol.iterator：指向一个默认遍历器方法，当实例对象执行for-of时会调用指定的默认遍历器

* Symbol.toPrimitive：指向一个函数，当实例对象被转为原始类型的值时会返回此对象对应的原始类型值

* Symbol.toStringTag：指向一个函数，当实例对象被Object.prototype.toString()调用时其返回值会出现在toString()返回的字符串之中表示对象的类型

* Symbol.unscopables：指向一个对象，指定使用with时哪些属性会被with环境排除

* Object.getOwnPropertySymbols()

  返回对象中所有用作属性名的Symbol值的数组
  >
      // 不可枚举属性
      var obj = Object.create({}, {
        num: {
          value: 1,
          enumerable: false
        }
      });
      obj.str = 'str';
      obj[Symbol('syb')] = 'symbol'; // Symbol属性

      console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(syb)]

* 当使用 JSON.strIngify() 时，以 symbol 值作为键的属性会被完全忽略  
JSON.stringify({[Symbol("foo")]: "foo"});  // '{}'

# <a name=""></a>
