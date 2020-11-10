<a id="top"></a>

[Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)--MDN

[Symbol](https://es6.ruanyifeng.com/#docs/symbol)--阮一峰

* <a href="#概述">概述</a>
* <a href="#属性、方法">属性、方法</a>

# <a name="概述">概述</a>[![bakTop](/img/backward.png)](#top)

是一种数据类型; 不能 new,因为 Symbol 是一个`原始类型`的值，不是对象。

每个从Symbol()返回的symbol值都是`唯一`的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的

Symbol(description)
>description 可选,字符串

```js
typeof Symbol() // "symbol"

let s1 = Symbol();
let s2 = Symbol();
s1 === s2 // false

// 有参数的情况
let s1 = Symbol("foo");
let s2 = Symbol("foo");
s1 === s2 // false

// 参数为对象时
Symbol({a:1}) // Symbol([object Object])
Symbol([1,2,3]) // Symbol(1,2,3)
Symbol(()=>{}) // Symbol(()=>{})

// Symbol 值不能与其他类型的值进行运算，会报错
Symbol("foo")+'a' // Uncaught TypeError: Cannot convert a Symbol value to a string at ...

// 可以显式转为字符串
Symbol("foo").toString()+'a' // "Symbol(foo)a"

// 也可以转为布尔值，
Boolean(Symbol("foo")) // true
Boolean(Symbol("")) // true
Boolean(Symbol()) // true

// 但是不能转为数值,会报错
Number(Symbol('')) //Uncaught TypeError: Cannot convert a Symbol value to a number at Number (<anonymous>) at...

// symbol作为键名
let foo = Symbol('foo')
let obj = {
  [foo]: 123
}
obj[foo] // 123
obj.foo // undefined

```

`Symbol特点：`
* Symbol()参数表示对当前Symbol值的描述，即使相同参数的Symbol()返回值也不相等

* Symbol值不能与其他类型的值进行运算
* 参数会先转为字符串形式（toString）
* Symbol值可通过String()或toString()显式转为字符串;Boolean()转换为布尔值;不能直接转换为数字

* Symbol值作为对象属性名时，此属性是公开属性，但不是私有属性

* Symbol值作为对象属性名时，只能用方括号运算符([])读取，不能用点运算符(.)读取

* Symbol值作为对象属性名时，不会被常规方法遍历得到，可利用此特性为对象定义非私有但又只用于内部的方法


`Symbol作用`
* 唯一值
* 消除魔法字符串
  魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。

# <a name="属性、方法">属性、方法</a>[![bakTop](/img/backward.png)](#top)

## <a name="属性">属性</a>[![bakTop](/img/backward.png)](#top)


### <a name="description">Symbol.prototype.description</a>[![bakTop](/img/backward.png)](#top)

description 是一个`只读`属性，它会返回 Symbol 对象的可选描述的字符串。
```js
Symbol('myDescription').description // "myDescription"
Symbol.iterator.description; // "Symbol.iterator"
Symbol.for('foo').description; // "foo"
```

### <a name="hasInstance">Symbol.hasInstance</a>[![bakTop](/img/backward.png)](#top)

判断某对象是否为某构造器的实例，
指向一个内部方法，当其他对象使用 instanceof 运算符时会调用此方法
>如：foo instanceof Foo 在语言内部，实际调用的是Foo\[Symbol.hasInstance](foo)

```js
class MyArray {  
  static [Symbol.hasInstance](instance) {
    return instance instanceof Array;
  }
}
// 或
// let MyArray =  {  
//  [Symbol.hasInstance](instance) {
//     return instance instanceof Array;
//   }
// }

console.log([] instanceof MyArray); // true
console.log({} instanceof MyArray); // false
```

```js
class Person {}
let p1 = new Person;
console.log(p1 instanceof Person); //true
console.log(Person[Symbol.hasInstance](p1)); //true
console.log(Object[Symbol.hasInstance]({})); //true
console.log(Object[Symbol.hasInstance](123)); //false
```


### <a name="iterator">Symbol.iterator</a>[![bakTop](/img/backward.png)](#top)
为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用。


让对象变为可迭代的值
```js
let obj = {
  0: 'a',
  1: 'b',
  length: 2,
  
};
for (let item of obj) {
  console.log(item);
}
// Uncaught TypeError: obj is not iterable

obj[Symbol.iterator] = Array.prototype[Symbol.iterator]

for (let item of obj) {
  console.log(item);
}
// 'a' 'b'
```

使用 generator
```js
let obj = {};
obj[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for(let i of obj){
  console.log(i);
}
// 1 2 3
```

### <a name="toPrimitive">Symbol.toPrimitive</a>[![bakTop](/img/backward.png)](#top)
指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

Symbol.toPrimitive 被调用时，会接受一个字符串参数，表示当前运算的模式，一共有三种模式。
* Number：该场合需要转成数值
* String：该场合需要转成字符串
* Default：该场合可以转成数值，也可以转成字符串

```js
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
    }
  }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
```



### <a name="toStringTag">Symbol.toStringTag</a>[![bakTop](/img/backward.png)](#top)

指向一个函数，当实例对象被Object.prototype.toString()调用时其返回值会出现在toString()返回的字符串之中表示对象的类型

```js
let obj = {
  [Symbol.toStringTag]: "Foo"
}
console.log(obj.toString()) // "[object Foo]"


class Person {
  get [Symbol.toStringTag]() {
      return 'Person';
  }
}
let p = new Person;
console.log(Object.prototype.toString.call(p)); // "[object Person]"
```

### <a name="isConcatSpreadable">Symbol.isConcatSpreadable</a>[![bakTop](/img/backward.png)](#top)

指向一个布尔值，定义对象用于Array.prototype.concat()时是否可展开

```js
let arr = [1,2,3]
console.log(arr[Symbol.isConcatSpreadable]) // undefined
console.log([0].concat(arr)) // [0,1,2,3]

arr[Symbol.isConcatSpreadable] = false
console.log([0].concat(arr)) // [0,[1,2,3]]

arr[Symbol.isConcatSpreadable] = true
// 或
// arr[Symbol.isConcatSpreadable] = undefined
console.log([0].concat(arr)) // [0,1,2,3]
```


### Symbol.species
指向一个构造函数，当实例对象使用自身构造函数时会调用指定的构造函数

```js
class MyArray extends Array {
}

const a = new MyArray(1, 2, 3);
const b = a.map(x => x);

b instanceof MyArray // true
b.constructor.name // MyArray

```
a是MyArray的实例，
b是a的衍生对象,应该是数组（Array的实例）,却是MyArray的实例。

而Symbol.species属性就是为了解决这个问题而提供的。


```js
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const a = new MyArray();
const b = a.map(x => x);

b instanceof MyArray // false
b instanceof Array // true
b.constructor.name // Array
```

### Symbol.unscopables
指向一个对象，指定使用with时哪些属性会被with环境排除
```js
Array.prototype[Symbol.unscopables]
// {
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   includes: true,
//   keys: true
// }

Object.keys(Array.prototype[Symbol.unscopables])
// ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'includes', 'keys']
```

### Symbol.match
指向一个函数，当实例对象被String.prototype.match()调用时会重新定义match()的行为
```js
const rematch = {
  [Symbol.match] (value) {
    return value.length
  },
}
'abc'.match(rematch); // 3
```

### Symbol.matchAll
指向一个函数，当实例对象被String.prototype.matchAll()调用时会重新定义matchAll()的行为

### Symbol.replace
指向一个函数，当实例对象被String.prototype.replace()调用时会重新定义replace()的行为


### Symbol.search
指向一个函数，当实例对象被String.prototype.search()调用时会重新定义search()的行为


### Symbol.split
指向一个函数，当实例对象被String.prototype.split()调用时会重新定义split()的行为




## <a name="方法">方法</a>[![bakTop](/img/backward.png)](#top)

### <a name="getOwnPropertySymbols">Object.getOwnPropertySymbols()</a>[![bakTop](/img/backward.png)](#top)

Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组

```js
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

// 当使用 JSON.strIngify() 时，以 symbol 值作为键的属性会被完全忽略  
JSON.stringify({[Symbol("foo")]: "foo"});  // '{}'
```


### <a name="for">Symbol.for()</a>[![bakTop](/img/backward.png)](#top)
在全局中搜索有没有以该参数作为名称的 Symbol 值，如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值

 ```js
let s1 = Symbol.for('foo'); //第一次没有则创建新的 Symbol
let s2 = Symbol.for('foo'); //第二次存在则返回该 Symbol
s1 === s2 // true
// s1和s2都是 Symbol 值，但是它们都是由同样参数的Symbol.for方法生成的，所以实际上是同一个值


let s1 = Symbol('foo');
let s2 = Symbol('foo');
s1 === s2 // false
```

Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
即Symbol.for()会先检查给定的key是否已经存在，如果不存在才会新建一个值。

---

Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。
```js
function foo() {
  // 即使是函数内部运行的，但是生成的 Symbol 值是登记在全局环境的。
  return Symbol.for('bar');
}

const x = foo();
const y = Symbol.for('bar');
console.log(x === y); // true
```

### <a name="keyFor">Symbol.keyFor()</a>[![bakTop](/img/backward.png)](#top)
返回一个已登记的 Symbol 类型值的 key，没有返回 undefined
```js
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

