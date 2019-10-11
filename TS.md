

[TS](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

[TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)

* <a href="#准备">准备</a>
* <a href="#类型">类型</a>
* <a href="#泛型">泛型</a>
* <a href="#declear">declear声明</a>
* <a href="#接口">接口interface、type</a>
* <a href="#函数">函数</a>
* <a href="#class">class</a>
* <a href="#"></a>


# <a name="准备">准备</a>
TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上,它由 Microsoft 开发

TypeScript 增加了代码的可读性和可维护性  
* 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了  
* 可以在编译阶段就发现大部分错误，这总比在运行时候出错好  
* 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等  

TypeScript 非常包容  
* TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可  
* 即使不显式的定义类型，也能够自动做出类型推论  
* 可以定义从简单到复杂的几乎一切类型   
* 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
* 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取

[在node命令行中执行 ts](https://segmentfault.com/a/1190000018797239?utm_source=tag-newest)

安装：
>
    npm install typescript ts-node -g

编译ts -> js： 
>
    tsc 文件名.ts

在node运行ts
>
    头部添加：
    #!/usr/bin/env ts-node

    node里直接执行： ./文件名.ts （./不能省）

# <a name="类型">类型</a>
使用 : 指定变量的类型

* 布尔值  
: boolean 
>

    let isDone: boolean = false; // ok
    let isDone: boolean = Boolean(1); // ok

    // 注意，使用构造函数 Boolean 创造的对象不是布尔值：
    let newBoolean: boolean = new Boolean(1); // error
    // 返回的是一个 Boolean 对象：
    let newBoolean: Boolean = new Boolean(1); // ok

* 数值  
: number
>

    let num: number = 5;
    let num: number = NaN;
    let num: number = Infinity;
    let num: number = 0b10; // 二进制
    let num: number = 0o744; // 八进制
    let num: number = 0xf00d; // 十六进制

* 字符串  
: string
>

    let str: string = 'aaa';

    使用模版字符串;被反引号包围（ `），以${ expr }嵌入
    let str1: string = `${str} b`;


* 数组
1. 在元素类型后面接上 []，表示由此类型元素组成的一个数组 T[]
>
    : number[] //数组内容都为number类型
    : string[]
    : {str: string, num: number}[]
    ....
    
    let a:number[] = [3232,13]
    let a:string[] = ['a','b']
    let a:{str: string, num: number}[] = [{str:'aa',num:3}]
    

    
2.  使用数组泛型，Array< T >、ReadonlyArray< T >
>
    : Array<number> //数组内容都为number类型
    : Array<boolean> 
    : Array<any> //数组内容为任意类型
    ...
    
用接口表示数组
>
    interface NumberArray {
        [index: number]: number;
    }
    let arr: NumberArray = [1, 1, 2, 3, 5];

* 类数组，如 arguments  
arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
>
    interface Arguments {
      [index: number]: number;
      length: number;
      callee: Function;
    } 
    function aa(...arg): object{
      let args: Arguments = arguments
      return args
    }
    console.log(aa(21,'b2',[])) // { '0': 21, '1': 'b2', '2': [] }


* ReadonlyArray<元素类型> //只读，数组创建后再也不能修改(但可以直接改变整个数组)
>
    let arr: ReadonlyArray<number>; //只读的数组
    let arr1: number[] = []
    arr[1] = 4 //报错
    arr.push(1)//报错
    arr.shift(1)//报错
    arr.length = 4 //报错
    arr1 = arr //报错 -- 将其赋值到一个普通数组

    arr1 = arr as number[] //ok -- 用类型断言重写

    arr = [] //ok -- 重写数组

* 元组 Tuple  
允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 (数组内定义不同类型的元素)
>

    比如，你可以定义一对值分别为 string和number类型的元组。
    let arr: [string, number];
    arr = ['str', 2];

    当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
    arr.push('a') // ok
    arr.push(true) // error,只能添加string、number类型的元素

* 枚举 enum  
枚举 enum 为一组数值赋予友好的名字。默认，从0开始为元素编号。   
你也可以手动的指定成员的数值（相应的在其后面的元素编号也会随其变化）

枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。

常数项
>
    //enum Color {Red, Green, Blue}
    //enum Color {Red=1, Green, Blue} //改变默认排序 从1开始（Green=2，Blue=3
    // enum Color {Red = 'a', Green = 2, Blue = 4}
    enum Color {Red = 1, Green = 2, Blue = 4}

    Color.Green;// 2
    Color[1];// Red
    Color[3];// undefined

    手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
    enum Color {Red = 1, Green = 2.1, Blue}
    Color.Blue // 3.1

计算所得项
>
    enum Color {Red, Green, Blue = "blue".length};
    Color.Blue // 4

    如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
    enum Color {Red, Green = "red".length, Blue}; // error

常数枚举,与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
>
    const enum cc {
      a = 1,
      c = 'aaa'.length, // error
      b = 2.4,
      d
    }

枚举是在运行时真正存在的对象
>
    enum E{
      x,
      y='a',
      z=2
    }
    function f(obj:{x: number, y: string}){
      return obj.x + obj.y
    }
    console.log(f(E)) //'0a'

反向映射，这意味着我们可以从其值中访问成员的值以及成员名称。
>
    enum Color {Red, Green, Blue} 
    let a: number = Color.Red // 1
    let b: string = Color[0] // 'Red'

* 任意类型 any    
允许被赋值为任意类型;  
在任意值上访问任何属性、方法都是允许的;  
变量如果在声明的时候，未指定其类型且没有赋值，那么它会被识别为任意值类型
>
    let notSure: any = 4;
    notSure = "maybe a string instead"; // ok 
    notSure = false; // ok 
    notSure.a // ok 
    notSure.b() // ok 

    let a; // 未指定类型且未赋值，则为any
    a = 5 // ok
    a= [] // ok

    let a = 5; //一旦赋值就会进行类型推论，这里推测其为number类型
    a = 15 // ok
    a= [] // error

    //不确定数组 包含的类型
    let list: any[] = [1, true, "free"];
    list[1] = 100;

* 联合类型(|)  表示取值可以为多种类型中的一种。
>
    let maybe: number | string;
    maybe = 1;
    maybe = 'str'


* void  
没有任何类型。 当一个函数没有返回值时，返回值类型定义 void
>
    function warnUser(): void {
      console.log("This is my warning message");
    }

    function warnUser1(): number {
      console.log("warnUser1");
      return 1
    }

声明一个void类型的变量没有什么大用，只能为它赋予undefined和null
>
    let unusable: void = undefined;

* Null、Undefined  

和 void相似   
默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。但当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
>
    // 这样不会报错
    let num: number = undefined;

* never  

表示的是那些永不存在的值的类型。  
例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

>
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }

* object  

object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
>
    declare function create(o: object | null): void;

    create({ prop: 0 }); // OK
    create(null); // OK

    create(42); // Error
    create("string"); // Error
    create(false); // Error
    create(undefined); // Error

* 类型断言

1. <类型>值
>
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;

2. 值 as 类型
>
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;

类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
>
    function toBoolean(something: string | number): boolean {
      return <boolean>something;
    }

当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。

* 类型推论

如果没有明确的指定类型，但赋值了（没赋值就是any类型），那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
>
    let a = 5; //一旦赋值就会进行类型推论，这里推测其为number类型
    a = 15 // ok
    a= [] // error

# <a name="泛型">泛型</a>
定义泛型函数
>
    function identity<T>(arg: T): T {
      return arg;
    }

定义了泛型函数后，可以用两种方法使用。  

第一种是，传入所有的参数，包含类型参数：
>
    let output = identity<string>("myString");  // 输出值为string类型

第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
>
    let output = identity("myString");  // 输出值为string类型

---

使用带有调用签名的对象字面量来定义泛型函数：
>    
    let myIdentity: {<T>(arg: T): T} = identity;
    console.log(myIdentity(43))

---
约束： 

创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：
>
    interface len{
      length:number
    }
    function identity<T extends len>(arg: T): T {
      console.log(arg.length)
      return arg;
    }
    let output = identity([1]); // ok
    let output = identity({length: 2}); // ok
    let output = identity(1); //error，它不再是适用于任意类型，需要传入符合约束类型的值


# <a name="declear">declear声明</a>
[参考](https://segmentfault.com/a/1190000020000325)

[文档](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html)

作用：当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
>
    declare var $: (selector: string) => any;  
    $('body')

更推荐的是使用 @types 统一管理第三方库的声明文件。  
@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
npm install @types/jquery --save-dev

declare var 并没有真的定义一个变量，只是定义了全局变量 $ 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。

----

* 新建一个声明文件以 .d.ts 为后缀，把声明语句单独放到该文件中： runoob.d.ts

* 声明文件或模块的语法格式如下：
>
    declare module Module_Name {
    }

* ts中引入声明文件：
>
    /// <reference path = " runoob.d.ts" />

>
    不要在声明文件里使用  /// <reference path="..." />。
    应该使用  /// <reference types="..." />代替

-----

>
    //a.d.ts
    declare let myname: number

    //a.ts
    #!/usr/bin/env ts-node
    /// <reference path = "./a.d.ts" />
    myname = 5
    console.log(myname)

# <a name="接口">接口interface、类型别名type</a>
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

接口一般首字母大写

可选属性( ? )：可以对可能存在的属性进行预定义，可以捕获引用了不存在的属性时的错误

只读属性( readonly ):只读，不可写

>

    interface lab {
      label: string;
      width?: number; //可选属性
      readonly size: number; //只读属性
    }

    let obj: lab = {size: 10, label: "label"};
    obj.size = 11; // error ,size属性只读
    obj.label = 'ooo' // ok

希望一个接口允许有任意的属性，可以使用如下方式：
>
    interface Person {
      name: string;
      age?: number;
      [propName: string]: any;
    }

    let tom: Person = { // ok
      name: 'Tom',
      gender: 'male',
      length: 11
    };

一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
>

    interface Person {
        name: string;
        age?: number; // error ,这里类型必须是string，对应下面任意属性的类型
        [propName: string]: string;
    }

    let tom: Person = { 
        name: 'Tom',
        age: 25, // error
        gender: 'male'
    };

* implements明确的强制一个类去符合某种契约
>
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }

* extends继承接口

一个接口可以继承多个接口
>
    interface Shape {
        color: string;
    }

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
    console.log(square) // { color: 'blue', sideLength: 10,penWidth: 5 }

* type 可以声明基本类型别名，联合类型，元组等类型
>
    type age = number

    type type = number | string

    // 字符串字面量类型
    type EventNames = 'click' | 'scroll' | 'mousemove';

    type Name = {
      name: string
    }

    type SetUser = (name: string, age: number) => void
    let a:SetUser = function(){}
    console.log(a('1',1))



* keyof 查询组给定类型的钥匙
>
    interface Person {
      name: string
      age: number
    }
    type PersonKeys = keyof Person // 'name' | 'age'
    let a:PersonKeys = 'age' // ok
    let a:PersonKeys = 'a' // error

* Exclude 允许您从其他类型中删除某些类型。Exclude 来自 T 任何可分配的东西 T。
>

    type PersonKeys1 = Exclude<keyof Person, 'name'>

    let b:PersonKeys1 = 'age' // ok 
    let b:PersonKeys1 = 'name' //error

* Pick 允许您从其他类型中选择某些类型。Pick 来自 T 任何可分配的东西 T。
>
    type PersonKeys1 = Pick< Person, 'name'>

    let b:PersonKeys1 = {name:'1'}


* interface 、types区别
  * 都可以描述一个对象或者函数
  >
        interface User {
          name: string
        }
        
        interface SetUser {
          (name: string): void;
        }

        type User = {
          name: string
        };
        
        type SetUser = (name: string) => void

  * 都允许拓展（extends），并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。
    >
        interface Name1 {
          name1: string
        }
        type Name2 = {
          name2: string
        }

        interface User1 extends Name1, Name2 {
          age1: number
        }

        type User2 = Name1 & Name2 & {
          age2: number
        }

    * type 可以声明基本类型别名，联合类型，元组等类型；interface只能定义对象类型
    >
        interface Dog {
          age: number
        }

        type Name = string

        type Pet = Dog | Name
        
        type PetList = [Dog, Pet]
 

    * interface 能够声明合并,type不行
    >
        interface User {
          name: string
          age: number
        }
        
        interface User {
          sex: string
        }
        
        /*
        User 接口为 {
          name: string
          age: number
          sex: string 
        }
        */

# <a name="函数">函数</a>
可以为每个参数添加类型，及函数本身添加返回类型。

在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是参数类型，需要用括号括起来，右边是函数返回值类型。

用 ? 表示可选的参数,可选参数后面不允许再出现必需参数了

typeScript 会将添加了默认值的参数识别为可选参数,此时就不受「可选参数必须接在必需参数后面」的限制,

>
    function add(x: number, y: number, z?: string): number { // ok
      return x + y;
    }

    function add(x?: number, y: number, z?: string): number { // error 
      return x + y;
    }

    function add(x: number = 0, y: number, z?: string): number { // ok 
      return x + y;
    }

>
    //         参数类型，        函数返回值类型   
    let add: (x: number, y: number) => number = (x, y) => x + y;
    //let add = (x: number, y: number): number =>  x + y;

>
    let add:(xx: number, yy: number) => number = (x: number, y: number): number =>  x + y;

* 函数重载:

在定义重载的时候，一定要把最精确的定义放在最前面。  
因为TypeScript会选择第一个匹配到的重载当解析函数调用的时候。 当前面的重载比后面的“普通”，那么后面的被隐藏了不会被调用。
>
    let suits = ["a", "b"];

    function pick(x: {name: string; age: number; }[]): [string, object];
    function pick(x: number): [string, number];
    function pick(x): any { // 并不是重载列表的一部分
        if (typeof x === "object") {
          return ['object', x];
        }
        else if (typeof x === "number") {
          return ['number', x]
        }
    }

    let a = pick([{ name: "diamonds", age: 2 }]);
    console.log(a); // [ 'object', [ { name: 'diamonds', age: 2 } ] ]

    let b = pick(4343);
    console.log(b); // [ 'number', 4343 ]

重载的pickCard函数在调用的时候会进行正确的类型检查。


不要因为回调函数参数个数不同而写不同的重载,应该只使用最大参数个数写一个重载：  
因为回调函数总是可以忽略某个参数的，因此没必要为参数少的情况写重载。 参数少的回调函数首先允许错误类型的函数被传入，因为它们匹配第一个重载。
>
    /* 错误 */
    declare function beforeAll(action: () => void, timeout?: number): void;
    declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

    /* OK */
    declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

# <a name="class">class</a>
## class
可以向属性和方法的参数添加类型
>
    class Greeter {
      greeting: string
      constructor(message: string) {
        this.greeting = message
      }
      greet(name: string) {
        return `Hi ${name}, ${this.greeting}`
      }
    }

## 访问修饰符
ts可以使用三种访问修饰符:public、private 和 protected

public 修饰的属性或方法是公有的，可以在任何地方被访问到，`默认所有的属性和方法都是 public 的`;  
private 修饰的属性或方法是私有的，不能在声明它的类的外部访问;  
protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

js的static静态属性方法，通过类本身（和其子类）调用，不能在类的实例上调用静态方法  

>
    class M {
      age: number
      constructor(age){
        this.age = age
      }
      public a() {
        console.log('public')
        this.b() // 'private'
        this.c() // 'protected'

        M.d() // ok 不能直接使用 this 关键字来访问静态方法。而是要用类名来调用
        this.d() // error!!!
      }
      private b() {
        console.log('private')
      }
      protected c() {
        console.log('protected')
      }
      static d() {
        console.log('static')
      }
    }
    class N extends M {
      name: string
      constructor(age,name){
        super(age)
        this.name = name
      }
      getC() {
        this.c()
      }
    }
    let m = new M(23)
    let n = new N(23,'n')

    m.age // ok
    m.a() // ok
    m.b() // error，private不能在声明它的类的外部访问
    m.c() // error，protected不能在声明它的类的外部访问
    m.d() // error，static不能被实例调用

    n.getC() // ok，protected允许被子类访问
    M.d() // ok
    N.d() // ok

# <a name=""></a>
# <a name=""></a>
