
[Null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Null)

[Undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)

# null
null 是一个字面量，不像 undefined，它不是全局对象的一个属性。null 是表示缺少的标识，指示变量未指向任何对象。

从逻辑的角度讲null是用来表示一个空指针，并且typeof返回object。通常null是用来声明一个对象,如：```let obj = null ```

null的几种情况
* 用来初始化一个变量，这个变量可能被赋值为一个对象。
* 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。
* 当函数的参数期望是对象时，被用作参数传入。
* 当函数的返回值期望是对象时，被用作返回值传出。
* 作为对象原型链的终点


# undefined 
undefined是全局对象的一个属性。也就是说，它是全局作用域的一个变量。undefined的最初值就是原始数据类型undefined。

undefined的几种情况
* 变量被声明了，但没有赋值时，就等于undefined。
* 调用函数时，应该提供的参数没有提供，该参数等于undefined。
* 对象没有赋值的属性，该属性的值为undefined。
* 函数没有返回值时，默认返回undefined。

# undefined与null区别
null和undefined只有文字形式，没有构造形式

undefined:语义：不存在该数据；声明了变量，但未赋值或对象属性不存在
null:语义：存在该数据，但未赋值； 表无值、无对象

只有被定义才有可能为 null，未定义时为 undefined。  
null 用于对象 , undefined 用于变量，属性和方法。

null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针，意思是你定义了它,但它没有分配内存空间。

```js
typeof null        // "object" ,null的类型是object
typeof undefined   // "undefined"

null  == undefined // true
null === undefined // false

undefined === undefined // true
null === null // true

!!undefined //false
!null //false
Boolean(null) //false
Boolean(undefined) //false

1 + null // 1 //Number(null) -> 0
1 + undefined  // NaN //Number(undefined) -> NaN
```

如果我们想测试对象是否为空，在对象还没定义时将会抛出一个错误。
要先使用 typeof 来检测对象是否已定义：if (typeof obj !== "undefined" && obj !== null) 


------

使用undefined和严格相等或不相等操作符来决定一个变量是否拥有值。

typeof 不会在一个变量没有被声明的时候抛出一个错误
```js
// 这里没有声明y
if(typeof y === 'undefined') {       // 没有错误，执行结果为true
  console.log("y is " + typeof y )  // y is undefined
}

if(y === undefined) { // ReferenceError: y is not defined

}
```

void判断  
```js
var x;
if(x === void 0) {
    // 执行这些语句
}

// 没有声明y
if(y === void 0) {
    // 抛出一个RenferenceError错误(与`typeof`相比)
}
```