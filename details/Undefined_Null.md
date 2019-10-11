
[Null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Null)

[Undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### null
1. 用来初始化一个变量，这个变量可能被赋值为一个对象。
2. 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。
3. 当函数的参数期望是对象时，被用作参数传入。
4. 当函数的返回值期望是对象时，被用作返回值传出。
5. 作为对象原型链的终点


### undefined 
1. 变量被声明了，但没有赋值时，就等于undefined。
2. 调用函数时，应该提供的参数没有提供，该参数等于undefined。
3. 对象没有赋值的属性，该属性的值为undefined。
4. 函数没有返回值时，默认返回undefined。

undefined与null区别
>

    null和undefined只有文字形式，没有构造形式

    undefined:语义：不存在该数据；声明了变量，但未赋值或对象属性不存在
    null:语义：存在该数据，但未赋值； 表无值、无对象

    只有被定义才有可能为 null，未定义时为 undefined。  
    null 用于对象 , undefined 用于变量，属性和方法。

    null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针，意思是你定义了它,但它没有分配内存空间。

    typeof null        // "object" ,null的类型是object
    typeof undefined   // "undefined"

    null  == undefined // true
    null === undefined // false

    undefined === undefined // true
    null === null // true

    !null //true

    isNaN(1 + null) // false
    isNaN(1 + undefined) // true


如果我们想测试对象是否为空，在对象还没定义时将会抛出一个错误。
要先使用 typeof 来检测对象是否已定义：if (typeof myObj !== "undefined" && myObj !== null) 