
[](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

* <a href="#"></a>
* <a href="#类型">类型</a>
* <a href="#"></a>
* <a href="#"></a>


# <a name=""></a>
# 
[在命令行中执行 ts](https://segmentfault.com/a/1190000018797239?utm_source=tag-newest)

安装：
>
    npm install typescript -g
    npm install ts-node -g

编译ts -> js ： 
>
    tsc 文件名.ts

在node运行ts
>
    头部添加：
    #!/usr/bin/env ts-node

    node里直接执行： ./文件名.ts （./不能省）

# <a name=""></a>
# <a name=""></a>

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
    : number[] 
    : string[]
    ....
    
    
2.  使用数组泛型，Array< T >
>
    : Array<number> 
    : Array<boolean> 
    : Array<any> 
    ...

&nbsp;&nbsp; ReadonlyArray<元素类型> //只读，数组创建后再也不能修改(但可以直接改变整个数组)
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
    enum Color {Red = 1, Green = 2, Blue = 4}

    Color.Green;// 2
    Color[1];// Red
    Color[3];// undefined

* 任意类型 any  

>
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false;

    //不确定数组 包含的类型
    let list: any[] = [1, true, "free"];
    list[1] = 100;

&nbsp;&nbsp;或(|) 多种类型
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


* Never  

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

* Object  

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


# <a name=""></a>
# <a name=""></a>
# <a name=""></a>
