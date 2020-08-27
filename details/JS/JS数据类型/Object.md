
* <a href="#"></a>
#  <a name=""></a>


## 对象特点:
对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。
对象有状态：对象具有状态，同一对象可能处于不同状态之下。
对象具有行为：即对象的状态，可能因为它的行为产生变迁。

(JS中，将状态和行为统一抽象为"属性")


对象的键名的转换:
* 对象的键名只能是字符串和 Symbol 类型
* 其他类型的键名会被转换成字符串类型
* 对象转字符串默认会调用 toString 方法

[demo](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/125)

## 对象的两类属性:

对 JavaScript 来说，属性并非只是简单的名称和值，JavaScript 用一组特征（attribute）来描述属性（property）。

数据属性 具有四个特征
* value：就是属性的值。
* writable：决定属性能否被赋值。默认false
* enumerable：决定能否枚举该属性。默认false
* configurable：决定该属性能否被删除或者改变特征值。默认false


访问器（getter/setter）属性，它也有四个特征
* getter：函数或 undefined，在取属性值时被调用。
* setter：函数或 undefined，在设置属性值时被调用。
* enumerable：决定 能否枚举该属性。
* configurable：决定该属性能否被删除或者改变特征值

----

* Object.defineProperty() 定义对象属性
* Object.defineProperties()定义对象多个属性

get/set方法来检测属性变化
```js
function foo() {}
Object.defineProperty(foo.prototype, 'z', 
  {
    get: function(){
      return 1
    }
  }
)
let obj = new foo();
console.log(obj.z) // 1
obj.z = 10
console.log(obj.z) // 1

```

Object.defineProperties()
```js
let obj ={};
Object.defineProperties(obj,{
  a: {
    value:'a'
  },
  b: {
    // value: 'b', //此时会报错， 不能同时指定访问器和值或可写属性
    get(){
      return 'get value ' + this.a;
    },
    set(val){
      this.a = val;
    }
  }
})
```
![defineProperty.jpg](/img/Object/defineProperty.jpg)

* Object.getOwnPropertyDescriptor() 读取属性
```js
let obj = {a: 1}
Object.getOwnPropertyDescriptor(obj, 'a'); 
//
{
  value: 1
  writable: true
  enumerable: true
  configurable: true
}
```

## 对象分类:
宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。全局对象window

内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。
* 固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
* 原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
* 普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。


## 属性/方法：

Object.getPrototypeOf 获得一个对象的原型；
Object.setPrototypeOf 设置一个对象的原型。
Object.assign(obj1, obj2,...)

```js
obj = {
  foo: 123,
  bar() { return 'abc' },
  syb: Symbol('s')
};
```

## has、 in
此方法可以接受两个参数，分别是目标对象、需查询的属性名，主要拦截如下几种操作：

* 属性查询: foo in proxy
* 继承属性查询: foo in Object.create(proxy)
* with 检查: with(proxy) { (foo); }
* Reflect.has()

has拦截只对in运算符生效，对for...in循环不生效

## Object.create(null) 根据指定的原型创建新对象
Object.create(null)创建出来后就是一个没任何属性的纯对象，

{}则会拥有一个__proto__原型指针，用于指向Object.prototype，因此可以通过__proto__直接访问Object.prototype中的属性。

## Object.preventExtensions、Object.seal、Object.freeze

## propertyIsEnumerable判断对象属性是否可枚举
obj.propertyIsEnumerable(name)
```js
({a:1}).propertyIsEnumerable('a') // true

Object.defineProperty({},'a',{
  value: 1
}).propertyIsEnumerable('a') // false
```

## hasOwnProperty检测一个对象是否含有特定的自身属性；
和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性

## <a name="Object.getOwnPropertyNames()">Object.getOwnPropertyNames()</a>
返回一个数组，包含对象自身的所有属性（包括不可枚举属性,不含 Symbol 属性）的键名

## <a name="Object.getOwnPropertyDescriptors()">Object.getOwnPropertyDescriptors()</a>
返回指定对象所有自身属性（非继承属性）的描述对象
>

    Object.getOwnPropertyDescriptors(obj)
    //
      { 
        foo:{ 
          value: 123,
          writable: true,
          enumerable: true,
          configurable: true 
        },
        bar:{ 
          value: [Function: bar],
          set: undefined,
          enumerable: true,
          configurable: true 
        },
        syb:{ 
          value: Symbol(s),
          set: undefined,
          enumerable: true,
          configurable: true 
        },
        
      }

主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题
>

    const source = {
      set foo (value) {
        console.log(value)
      },
      get bar () {
        return '浪里行舟'
      }
    }

    const target1 = {}
    Object.assign(target1, source)
    console.log(Object.getOwnPropertyDescriptor(target1, 'foo'))
    //
      {
        configurable: true
        enumerable: true
        value: undefined
        writable: true
      }

    值为undefined，这是因为Object.assign方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。

    const target2 = {}
    Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
    console.log(Object.getOwnPropertyDescriptor(target2, 'foo'))
    //
      {
        configurable: true
        enumerable: true
        get: undefined
        set: ƒ foo(value)
      }
      