
[TS](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

* <a href="#准备">准备</a>
* <a href="#类型">类型</a>
* <a href="#"></a>
* <a href="#"></a>


# <a name="准备">准备</a>

[在命令行中执行 ts](https://segmentfault.com/a/1190000018797239?utm_source=tag-newest)

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
* 布尔值
>
    : boolean 

    let isDone: boolean = false;

* 数字
>
    : number

    let num: number = 5;

* 字符串
>
    : string

    let str: string = 'aaa';

还可以使用模版字符串;被反引号包围（ `），以${ expr }嵌入
>
    let myname: string = `n`
    let age: number = 2
    let str: string  = `hello, my name is ${myname}, i am ${age} years old`

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

ReadonlyArray<元素类型> //只读，数组创建后再也不能修改(但可以直接改变整个数组)
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
    let x: [string, number];
    x = ['str', 2];

* 枚举 enum  
枚举 enum 为一组数值赋予友好的名字。默认，从0开始为元素编号。   
你也可以手动的指定成员的数值（相应的在其后面的元素编号也会随其变化）

>
    //enum Color {Red, Green, Blue}
    //enum Color {Red=1, Green, Blue} //改变默认排序 从1开始（Green=2，Blue=3
    // enum Color {Red = 'a', Green = 2, Blue = 4}
    enum Color {Red = 1, Green = 2, Blue = 4}

    Color.Green;// 2
    Color[1];// Red
    Color[3];// undefined

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



* 任意类型 any  
>
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false;

    //不确定数组 包含的类型
    let list: any[] = [1, true, "free"];
    list[1] = 100;

* 或(|) 多种类型
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

好比类型转换，但是不进行特殊的数据检查和解构。 

1. 尖括号 形式
>
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;

2. as语法
>
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;

当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。



# <a name="">泛型</a>
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

作用：当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

declare var $: (selector: string) => any;  
$('body')

declare var 并没有真的定义一个变量，只是定义了全局变量 $ 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。


* 新建一个声明文件以 .d.ts 为后缀，把声明语句单独放到该文件中： runoob.d.ts

* 声明文件或模块的语法格式如下：
>
    declare module Module_Name {
    }

* ts中引入声明文件：
>
    /// <reference path = " runoob.d.ts" />

-----

>
    //a.d.ts
    declare let myname: number

    //a.ts
    #!/usr/bin/env ts-node
    /// <reference path = "./a.d.ts" />
    myname = 5
    console.log(myname)

# <a name="接口">接口</a>
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

可选属性( ? )：可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误

只读属性( readonly )
>

    interface lab {
      label: string;
      width?: number; //可选属性
      readonly color: number; //只读属性
    }

    function printLabel(labObj: lab) {
      console.log(labObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);


implements明确的强制一个类去符合某种契约
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

继承接口

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

# <a name="函数">函数</a>
>
    function add(x: number, y: number): number {
      return x + y;
    }

>
    //         参数类型，        函数返回值类型   
    let add: (x: number, y: number) => number = (x, y) => x + y;
    //let add = (x: number, y: number): number =>  x + y;

>
    let add:(xx: number, yy: number) => number = (x: number, y: number): number =>  x + y;

函数重载:

在定义重载的时候，一定要把最精确的定义放在最前面。

>
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: {suit: string; card: number; }[]): number;
    function pickCard(x: number): {suit: string; card: number; };
    function pickCard(x): any { // 并不是重载列表的一部分
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

重载的pickCard函数在调用的时候会进行正确的类型检查。

# <a name=""></a>



# <a name=""></a>
