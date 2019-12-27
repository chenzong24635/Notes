

[TypeScript-中文文档](https://www.tslang.cn/docs/home.html)  
[TypeScript-英文文档](https://www.typescriptlang.org/docs/home.html)

[TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)

* <a href="#准备">准备</a>
* <a href="#类型">类型</a>
* <a href="#泛型">泛型</a>
  * <a href="#Boolean">boolean 布尔值</a>
  * <a href="#Number">number 数字</a>
  * <a href="#String">string 字符串</a>
  * <a href="#Array">数组</a>
  * <a href="#Tuple">元组 Tuple</a>
  * <a href="#Enum">枚举 enum</a>
  * <a href="#Any">任意类型 :any</a>
  * <a href="#unkown">unkown</a>
  * <a href="#联合类型">联合类型(|)  表示取值可以为多种类型中的一种</a>
  * <a href="#Void">void</a>
  * <a href="#Null、Undefined">null、undefined</a>
  * <a href="#Never">never</a>
  * <a href="#Object">object</a>
* <a href="#类型断言">类型断言</a>
* <a href="#类型推论">类型推论</a>
* <a href="#泛型">泛型</a>
* <a href="#接口">接口interface、type</a>
  * <a href="#类型别名type">类型别名type， 可以声明基本类型别名，联合类型，元组等类型</a>
  * <a href="#interface 、types区别">interface 、types区别</a>
* <a href="#函数">函数</a>
* <a href="#class">class</a>
* <a href="#declear">declear声明</a>
* <a href="#命名空间namespace">命名空间namespace</a>
* <a href="#tsconfig">tsconfig.json</a>


# <a name="准备">准备</a>
TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上,它由 Microsoft 开发

TypeScript 是静态弱类型语言,因为要兼容 JavaScript， 所以 TypeScript 几乎不限制 JavaScript 中原有的隐式类型转换，它对类型的隐式转换是有容忍度的

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
`npm install typescript ts-node -g`

版本查看 
`tsc -v`    

编译ts -> js： 
>
    tsc 文件名.ts

编译后，vscode提示重复声明的问题
> 
    在项目根目录添加配置文件 tsconfig.json即可，空文件也可

在node运行ts
>
    头部添加：
    #!/usr/bin/env ts-node

    node里直接执行： ./文件名.ts （./不能省）

    或vscode下载code runner插件，右键run code，终端输出


* tsconfig.json配置
```json
{
  "compilerOptions": {
    // 不报告执行不到的代码错误。
    "allowUnreachableCode": true,
    // 必须标注为null类型,才可以赋值为null
    "strictNullChecks": true,
    // 严格模式, 强烈建议开启
    "strict": true,
    // 支持别名导入:
    // import * as React from "react"
    "esModuleInterop": true,
    // 目标js的版本
    "target": "es5",
    // 目标代码的模块结构版本
    "module": "es6",
    // 在表达式和声明上有隐含的 any类型时报错。
    "noImplicitAny": true,
    // 删除注释
    "removeComments": true,
    // 保留 const和 enum声明
    "preserveConstEnums": false,
    // 生成sourceMap    
    "sourceMap": true,
    // 目标文件所在路径
    "outDir": "./lib",
    // 编译过程中需要引入的库文件的列表
    "lib": [
        "dom",
        "es7"
    ],
    // 额外支持解构/forof等功能
    "downlevelIteration": true,
    // 是否生成声明文件
    "declaration": true,
    // 声明文件路径
    "declarationDir": "./lib",
    // 此处设置为node,才能解析import xx from 'xx'
    "moduleResolution": "node"
  },
  // 入口文件
  "include": [
      "src/main.ts"
  ]
}

```

* 生成错误提示信息
```ts
/**
 * 一个方法：生成错误提示信息
 * 
 * @param {string} message 提示信息，比如`you have a error`
 * @param {number | string} code 错误码，数字和字符都行
 * @param {string} type 类型，请写`demo1`或者`demo2`
 * 
 * [还不懂？点这里吧](https://www.google.com)
 * 
 * ```js
 * // demo
 * genErrMsg('demo', 10086)
 * 
 * ```
 */
function genErrMsg (message: string, code: number | string, type?: ('demo1' | 'demo2')): string {
  return (message || `网络繁忙，请稍候再试`) + (code ? `(${code})` : ``)
}
genErrMsg() //编译出错时，会提示上面注释的信息
```

# <a name="类型">类型</a>
Boolean Number String  
Array Funciton Object Symbol  
Undefined Null Void Any Never

使用 : 指定变量的类型

## <a name="Boolean">boolean 布尔值</a>

```ts
let isDone: boolean = false; // ok
let isDone: boolean = Boolean(1); // ok

// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
let newBoolean: boolean = new Boolean(1); // error!!!
// 返回的是一个 Boolean 对象：
let newBoolean: Boolean = new Boolean(1); // ok
```

## <a name="Number">number 数值</a>
```ts
let num: number = 5;
let num: number = NaN;
let num: number = Infinity;
let num: number = 0b10; // 二进制
let num: number = 0o744; // 八进制
let num: number = 0xf00d; // 十六进制
```


## <a name="String">string 字符串</a>
```ts
let str: string = 'aaa';

//使用模版字符串;被反引号包围(`)，以${ expr }嵌入
let str1: string = `${str} b`;
```

## <a name="Array">数组 : T[] | Array\<T> | ReadonlyArray\</a>
## <T>
1. 在元素类型后面接上 []，表示由此类型元素组成的一个数组 T[]
```ts
: number[] //数组内容都为number类型
: string[]
: {str: string, num: number}[]
....

let a:number[] = [3232,13]
let a:string[] = ['a','b']
let a:{str: string, num: number}[] = [{str:'aa',num:3}]
```  

    
2.  使用数组泛型，Array<T>、ReadonlyArray<T>
```ts
: Array<number> //数组内容都为number类型
: Array<any> //数组内容为任意类型
: Array<number | string> //数组内容为多种类型类型
...
```

* 用接口表示数组
```ts
interface NumberArray {
  [index: number]: number;
}
let arr: NumberArray = [1, 1, 2, 3, 5];
```

* 类数组，如 arguments  
arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

```ts
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
```

* ReadonlyArray<元素类型> //只读，数组创建后再也不能修改(但可以直接改变整个数组)
```ts
let arr: ReadonlyArray<number>; //只读的数组
arr[1] = 4 //error
arr.push(1)//error
arr.shift(1)//error
arr.length = 4 //error
arr = [] //ok -- 重写数组

let arr1: number[] = arr //error -- 不可分配给可变类型number[]

let arr1 = arr // ok
let arr1: any = arr // ok
let arr1 = arr as number[] //ok -- 用类型断言重写arr类型
```
## <a name="元组">元组 Tuple</a>
允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 (数组内定义不同类型的元素)
```ts
比如，你可以定义一对值分别为 string和number类型的元组。
let arr: [string, number];
arr = ['str', 2];

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
arr.push('a') // ok
arr.push(true) // error!!!,只能添加string、number类型的元素
```

## <a name="Enum">枚举 enum</a>
枚举 enum 为一组数值赋予友好的名字。默认，从0开始为元素编号。   
你也可以手动的指定成员的数值（相应的在其后面的元素编号也会随其变化）

枚举就是枚举值到枚举名进行反向映射
枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天	
```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"]); // 0
console.log(Days[0]); // 'Sun'

enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"]); // 7
```

枚举项有两种类型：
* 常数项（constant member）
* 计算所得项（computed member）

* 常数项
```ts
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
```

* 计算所得项
```ts
enum Color {Red, Green, Blue = "blue".length};
Color.Blue // 4

如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color {Red, Green = "red".length, Blue}; // error!!!; Blue必须赋值
```

* 常量枚举(const定义) ,与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
```ts
const enum cc {
  a = 1,
  c = 'aaa'.length, // error!!! 常量枚举不能包含计算成员
  b = 2.4,
  d
}
```

```ts
enum Enum {
  A = 0
}

declare enum Enum1 {
  A = 1
}

const enum Enum2 {
  A = 2
}
```
编译后的js, 可以看见只编译了普通枚举
```ts
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
```

* 运行时的枚举：枚举是在运行时真正存在的对象
```ts
enum E{
  x,
  y='a',
  z=2
}
function f(obj:{x: number, y: string}){
  return obj.x + obj.y
}
console.log(f(E)) //'0a'
```

* 反向映射: 从其值中访问成员的值以及成员名称。
```ts
enum Color {Red, Green, Blue}
let a: number = Color.Red // 1
let b: string = Color[0] // 'Red'
```

* 外部枚举：描述已经存在的枚举类型的形状，会在编译阶段被删除
```ts
declare enum Enum {
  A = 1,
  B,
  C = 2
}
```
外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。

## <a name="Any">任意类型 :any </a>
允许被赋值为任意类型;  
在任意值上访问任何属性、方法都是允许的;  
变量如果在声明的时候，未指定其类型且没有赋值，则默认为any类型;

```ts
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
a= [] // error!!!

```

any[] 用于不确定数组其内类型
```ts
let list: any[] = [1, true, "free"];
list[1] = 100;
```

## <a name="unkown">unkown</a>
TypeScript 3.0引入了一个顶级的unknown类型。 对照于any，unknown是类型安全的。 任何值都可以赋给unknown，但是当没有类型断言或基于控制流的类型细化时unknown不可以赋值给其它类型，除了它自己和any外。 同样地，在unknown没有被断言或细化到一个确切类型之前，是不允许在其上进行任何操作的。

```ts
type T00 = unknown & null;  // null
type T01 = unknown & undefined;  // undefined
type T02 = unknown & null & undefined;  // null & undefined (which becomes never)
type T03 = unknown & string;  // string
type T04 = unknown & string[];  // string[]
type T05 = unknown & unknown;  // unknown
type T06 = unknown & any;  // any

type T10 = unknown | null;  // unknown
type T11 = unknown | undefined;  // unknown
type T12 = unknown | null | undefined;  // unknown
type T13 = unknown | string;  // unknown
type T14 = unknown | string[];  // unknown
type T15 = unknown | unknown;  // unknown
type T16 = unknown | any;  // any
```

## <a name="联合类型">联合类型(|)  表示取值可以为多种类型中的一种</a>

```ts
let maybe: number | string;
maybe = 1;
maybe = 'str'
```

## <a name="Void">void</a>
没有任何类型。 当一个函数没有返回值时，返回值类型定义 void
```ts
function warnUser(): void {
  console.log("This is my warning message");
}

function warnUser1(): number {
  console.log("warnUser1");
  return 1
}
```
声明一个void类型的变量没有什么大用，只能为它赋予undefined和null
```ts
let a1: void = undefined;
let a2: void = null;
let a3: void = 43; // err
```

## <a name="Null、Undefined">null、undefined</a>

一个变量类型为 undefined | null，其值只能为null | undefined

```ts
let a1: null = null // ok
let a2: undefined = undefined // ok
let a3: null = undefined // ok
let a4: undefined = null // ok

let a: undefined = 45 // err

a1 // null
a2 // undefined
a3 // undefined
a4 // null
```

和 void相似   
默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。  
```ts
// tsconfig.json
{
  compilerOptions:{
    "strictNullChecks": flase
  }
}
// 运行编译都不会报错
let num: number = undefined;
num // undefined

// 但当strictNullChecks设为true，null和undefined只能赋值给void和它们各自;（编译时不会报错，运行会报错）  
let num: number = undefined;
let num1: null = undefined;
num // error : Type 'undefined' is not assignable to type 'number'.
num1 // err
```

## <a name="Never">never</a>

表示的是那些永不存在的值的类型。 

例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

```ts
let b: never =  23 // err
let b: never =  null // err
let b: any =  function(): never{ throw ''} // ok

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

// 声明不可能存在的交叉类型会被推导为never类型
let n: boolean & number;
n = 2; //error!!! 不能将类型“2”分配给类型“never”
```

## <a name="Object">object</a>

object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```


## <a name="类型断言">类型断言</a>

1. <类型>值
```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // 断言变量someValue为string类型
```

2. 值 as 类型
```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：

```ts
function toBoolean(something: string | number): boolean {
  return <boolean>something; // error ;变量something没有boolean类型
}

function toBoolean(something: string | number | boolean): boolean {
  return <boolean>something; // ok
}
```
当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。


## <a name="类型推论">类型推论</a>

如果没有明确的指定类型，但赋值了（没赋值就是any类型），那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
```ts
let a = 5; //一旦赋值就会进行类型推论，这里推测其为number类型
a = 15 // ok
a= [] // error!!!
```

# <a name="泛型">泛型</a>
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

例：定义泛型函数
```ts
function identity<T>(arg: T): T {
  return arg;
}
```

### 定义了泛型函数后，可以用两种方法使用  

* 第一种是，传入所有的参数，包含类型参数：
```ts
let output = identity<string>("myString");  // 输出值为string类型
```

* 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
```ts
let output = identity("myString");  // 输出值为string类型
```
---

使用带有调用签名的对象字面量来定义泛型函数：
```ts
let myIdentity: {<T>(arg: T): T} = identity;

// 可输入任意类型
console.log(myIdentity('ad')) // 'ad'
console.log(myIdentity(43)) // 43
```

### 一次定义多个类型参数
```ts
function swap<T, U>(tuple: [T, U]): [T, U] {
  return [tuple[0], tuple[1]];
}
// 可输入任意类型
swap([7, 'seven']) // [7, 'seven']
swap([true, {}])  // [true, {}]

// 指定类型
swap<string, number>(['peen', 22]); // ['peen', 22]
```

### 泛型约束: 
在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
```ts
function identity<T>(arg: T): T {
    console.log(arg.length); // error!!!
    return arg;
}
// 泛型 T 不一定包含属性 length，所以编译的时候报错了。
```

创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：
它不再是适用于任意类型，需要传入符合约束类型的值
```ts
interface len{
  length: number
}
function identity<T extends len>(arg: T): T {
  console.log(arg.length)
  return arg;
}

let output = identity([1]); // ok
let output = identity({}); // err {}没有length属性
let output = identity({length: 2}); // ok
let output = identity(1); //error!!!，数字没有length属性
```

## <a name="接口interface">接口interface</a>

TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

接口一般首字母大写  

### 大概有以下三种使用方式:
```ts
interface List {
  data: string;
}

// 声明一个对象
let obj: List = { data: 'msg' }

// 函数声明参数, 返回值
function a(x: List): List {
  return x;
}

// 类实现接口, 类似于 java 语言, 在接口描述一个方法，在类里实现它
class Crazy implements List {
  constructor() { }
  data: string;
}
```
声明一个对象另一种写法
```ts
interface List {
  data: string;
}
// 需要定义接口 所有必须属性
let obj: List = { data: 'msg' }

// 无需定义属性
let obj1 = <List>{}
```

### 可选属性,只读属性
* 可选属性( ? )：可以对可能存在的属性进行预定义，可以捕获引用了不存在的属性时的错误
* 只读属性( readonly ):只读，不可写

```ts
interface Lab {
  label: string;
  width?: number; //可选属性
  readonly size: number; //只读属性
  readonly height?: number; //可选属性+只读属性
}
// 分隔符也可用逗号 ,

let obj: Lab = {size: 10, label: "label"};
obj.label = 'ooo' // ok
obj.size // ok
obj.size = 11; // error!!! ,size属性只读
```

### 希望一个接口允许有任意的属性，可以使用如下方式：
```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: any; // 可定义任意属性(键名为string类型，键值为任意类型)
  // propName为自定义(命名规范同变量名)
}

let tom: Person = { // ok
  name: 'Tom',
  gender: 'male',
  length: 11
};
```

只读的任意的属性
```ts
interface Person {
  readonly [property: string] :any
}
let tom: Person = {
  aaa: 444
}
tom.aaa // 444
tom.aaa = 222 // error
```

### 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
```ts
interface Person {
    name: string;
    age?: number; // error!!! ,这里类型必须是string，对应下面任意属性的类型
    [propName: string]: string;
    //或者
    //[propName: string]: string | number;
    //[propName: string]: any;
}

let tom: Person = { 
    name: 'Tom',
    age: 25, // error!!!
    gender: 'male'
};
```


### 可以多层嵌套
```ts
interface List {
  id: number;
  data: string;
}
interface LearnList {
  subject: string,
  detail: List[];
}

let res: LearnList = {
  subject: 'math',
  detail: [{
    id: 1,
    data: '数学'
  }]
}
```

如果作为函数参数声明的话, 会有一个有意思的地方. 我们直接传值的话, 会有报错提示
```ts
function func(data: LearnList) {
 return data;
}
func({
 subject: 'math',
 xxx: 'sss', //报错, 多了一个属性
 detail: [{
     id: 1,
     data: '数学'
 }]
})
```
解决：
1. 将值赋值给一个对象  
也就是 cache 他有 LearnList 声明的对象里面的所有属性, 那 cache 兼容 LearnList 声明的对象, cache 也就可以赋值给 LearnList声明的对象.
```ts
const cache = {
 subject: 'math',
 xxx: 'sss', //报错, 多了一个属性
 detail: [{
     id: 1,
     data: '数学'
 }]
};
func(cache) //不报错
```
2. 类型断言
```ts
func({
  subject: 'math',
  xxx: 'sss',
  detail: [{
    id: 1,
    data: '数学'
  }]
} as LearnList)
```

###   
```ts    
interface A{
  name?: string;
  sex: string;
}
interface B {
  age?: number
}
```

### 交叉类型 (&):将多个类型合并为一个类型（interface，type）
```ts
let c: A & B = {
  sex: 'man',
  age: 4
}
```

### 联合类型 (|)：表示变量属于联合类型中的某种类型，使用时有时需要先断言一下（interface，type）
```ts
let c: A | B = {};
c.name = 'da'; // error
(<A>c).name = 'ad'; // ok
```

### is 关键字通常组成类型谓词，作为函数的返回值。谓词为 paramName is Type这种形式， paramName必须是来自于当前函数签名里的一个参数名。
```ts
let c: A | B = {};
(<A>c).name = 'ad'

function fun(arg: A | B): arg is A {
  return (<A>arg).name !== undefined
}
if(fun(c)){
  console.log(c.name)
}else{
  console.log(c.age)
}
```
若没有 `arg is A `,则c1.name就报错`类型“B”上不存在属性“name”`;
当然，也可使用断言`(<A>c).name`代替`c.name`


### extends继承接口

一个接口可以继承多个接口
```ts
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
// let square :Square = {
//   color: 'blue',
//   penWidth: 10,
//   sideLength: 5.0
// };

square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square) // { color: 'blue', sideLength: 10,penWidth: 5 }
```

## <a name="类型别名type">类型别名type， 可以声明基本类型别名，联合类型，元组等类型</a>

```ts
type age = number

type type = number | string

// 字符串字面量类型, 指定变量值
type EventNames = 'click' | 'scroll' | 'mousemove';
let way: EventNames = 'dbclick' // error
let way: EventNames = 'click' // ok


type Name = {
  name: string
}

type SetUser = (name: string, age: number) => void;
let a: SetUser = function(){}
console.log(a('1',1))
```

* &合并,可以合并interface和type
```ts
interface A  {
  name: string;
  age: number;
};

type B = {
  gender: number;
}
type C = A & B;

let obj: C = {
  name: 'a',
  age: 11,
  gender: 11
} 
console.log(obj);
```

## <a name="interface 、types区别">interface 、types区别</a>

* 都可以描述一个对象或者函数
```ts
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
```

* 都允许拓展（extends），并且两者并不是相互独立的，也就是说 interface 可以 拓展(extends) type, type 也可以拓展(&) interface 。
```ts
interface Name1 {
  name1: string
}
type Name2 = {
  name2: string
}
//type Name2 = Name1 // ok
//interface extends Name2 {} // ok

interface User1 extends Name1, Name2 {
  age1: number
}

type User2 = Name1 & Name2 & {
  age2: number
}
```

* type 可以声明基本类型别名，联合类型，元组等类型；interface只能定义对象类型
```ts
interface Dog {
  age: number
}

type Name = string

type Pet = Dog | Name

type PetList = [Dog, Pet]
```

* interface 能够声明合并,type不行
```ts
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

let user: User = {
  name: 'user',
  age: 11,
  sex: 'man'
}
/*
User 接口会合并为 {
  name: string
  age: number
  sex: string 
}
    */
```

### implements明确的强制一个类去符合某种契约(interface,type)
```ts
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
```

```ts
type A  = {
  name: string;
  age: number;
};

class Animal implements A {
  constructor(public name: string,public age: number){
    this.name = name;
    this.age = age;
  }
}
let cow = new Animal('cow',34);
console.log(cow);
```

### keyof 查询健名,类似于JS中的Object.keys()方法
```ts
type Person = {
  name: string
  age: number
}
// 或
/* interface Person {
  name: string
  age: number
} */

type PersonKeys = keyof Person
//type PersonKeys =  'name' | 'age'
let a: PersonKeys = 'name' // ok
let a1: PersonKeys = 'age' // ok
let a2: PersonKeys = 'a' // error!!!

```

```ts
interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

type keys = keyof Rectangle;
// 等价于
// type keys = "x" | "y" | "width" | "height";

// 这里使用了泛型，强制要求第二个参数的参数名必须包含在第一个参数的所有字符串索引中
function getRectProperty<T extends object, K extends keyof T>(rect: T, property: K): T[K] {
  return rect[property];
} 

let rect: Rectangle = {
  x: 50,
  y: 50,
  width: 100,
  height: 200
};
console.log(getRectProperty(rect, 'width')); // -> 100
console.log(getRectProperty(rect, 'notExist')); // error!!! 类型“"notExist"”的参数不能赋给类型“"width" | "x" | "y" | "height"”的参数
```

```ts
type T = keyof any;
相当于
type T = string | number | symbol
```

### Exclude 允许您从其他类型中删除某些类型。
```ts

interface Person {
  name: string
  age: number
}
type PersonKeys = Exclude<keyof Person, 'name'>
//相当于type PersonKeys = 'age'

let b: PersonKeys = 'age' // ok
let b1: PersonKeys = 'name' // error
//不能将类型“"name"”分配给类型“"age"”
```

不加keyof时，好像没作用，
```ts
type PersonKeys = Exclude<Person, 'name'>
//相当于 type PersonKeys  = Person

let b: PersonKeys = {
  name: 'ad',
  age: 24
}
```

### Pick 允许您从其他类型中选择某些类型。
```ts
interface Person {
  name: string
  age: number
}
type PersonKeys = Pick<Person, 'name'>
//相当于
/*
type PersonKeys = {
  name: string
} */

let b: PersonKeys = {name:'1'} // ok
let b1: PersonKeys = {age: 1} // error
//不能将类型“{ age: number; }”分配给类型“Pick<Person, "name">”。
//对象文字可以只指定已知属性，并且“age”不在类型“Pick<Person, "name">”中
```

加keyof时```type PersonKeys = Pick<keyof Person, 'name'>```,好像没什么作用；  
因此Pick不加keyof

### Partial 可选属性
### Omit 属性忽略

# <a name="函数">函数</a>

可以为每个参数添加类型，及函数本身添加返回类型。

`在 ts 的类型定义中的=>不同于ES6的=>`，其 => 用来表示函数的定义，=>左边是参数类型，需要用括号括起来，=>右边是函数返回值类型。
```ts
let add1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

相当于

type Func = (x: number, y: number) => number
let add1: Func = function (x: number, y: number): number {
  return x + y;
};
```

下方的代码； 第一个 => 是函数的类型定义，第二个 => 为ES6的箭头函数
```ts
let add2: (x: number, y: number) => number =  (x: number, y: number): number => {
    return x + y;
};

可省略为
let add3: (x: number, y: number) => number = (x, y) => x + y;

可略为
let add4= (x: number, y: number) => number => x + y;

```

### 为函数定义类型
```ts
function add1(x: number, y: number): number {return x + y;}

let add2 = function(x: number, y: number): number { return x + y; };
```

### 书写完整函数类型
```ts
//         参数类型，        函数返回值类型   
let add: (x: number, y: number) => number = (x, y) => x + y;
//let add = (x: number, y: number): number =>  x + y;
```
函数类型包含两部分：参数类型和返回值类型  
我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
```ts
let add:(baseValue: number, increment: number) => number = (x: number, y: number): number =>  x + y;
```
只要参数类型匹配，无需在乎参数名是否正确（参数名：baseValue，increment）

返回值类型是函数类型的必要部分，如果函数没有返回任何值，必须指定返回值类型为 void而不能留空。
```ts
let add:(a: number) => void = (x: number): void =>  {
  console.log(x);
};
```

### 可选参数和默认参数

用 ? 表示可选的参数,可选参数后面不允许再出现必需参数了

typeScript 会将添加了默认值的参数识别为可选参数,此时就不受「可选参数必须接在必需参数后面」的限制,

```ts
function add(x: number, y: number, z?: string): number { // ok
  return x + y;
}

//此时x为可选参数，后面跟着必须参数，会报错
function add(x?: number, y: number, z?: string): number { // error!!! 可选参数后面不允许再出现必需参数了
  return x + y;
}

//此时x为可选参数，后面跟着必须参数，但x设置了默认值，因此不会报错
function add(x: number = 0, y: number, z?: string): number { // ok 
  return x + y;
}
```
默认参数
```ts
function isValidPasswordLength(
  password: string,
  min: number,
  max: number = Number.MAX_VALUE
) {
  return password.length >= min && password.length <= max;
}

```

### 剩余参数
有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来

可使用剩余参数，剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个
```ts
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

```


### 使用泛型 让函数在运行时才确定参数的类型
```ts
//同时返回 string类型 和number类型
function getData1(value:string):string{
  return value;
}
function getData2(value:number):number{
  return value;
}
```
上面的代码冗余，可以使用泛型解决，使参数或返回值类型 在函数调用时才确定
```ts
function getVal<T>(val: T): T {
  return val;
}
//在函数调用时确定类型
getVal<string>('da') 
getVal<number>(232) 
getVal<number>('da')  // error!!

//也可以 为函数参数传入任何类型
getVal('da')
getVal(232)
```


### this
https://www.tslang.cn/docs/handbook/functions.html

### 函数重载:

在定义重载的时候，一定要把最精确的定义放在最前面。  
TS会选择第一个匹配到的重载当解析函数调用的时候。 当前面的重载比后面的“普通”，那么后面的被隐藏了不会被调用。

```ts
function getVal(val: number): number 
function getVal(val: string):string 
function getVal(val: any):any {
    return val;
}
```
---

```ts
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
```
重载的pickCard函数在调用的时候会进行正确的类型检查。


不要因为回调函数参数个数不同而写不同的重载,应该只使用最大参数个数写一个重载：  
因为回调函数总是可以忽略某个参数的，因此没必要为参数少的情况写重载。 参数少的回调函数首先允许错误类型的函数被传入，因为它们匹配第一个重载。
```ts
/* 错误 */
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

/* OK */
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```



# <a name="class">class类</a>
## class
可以向属性和方法的参数添加类型
```ts
class P{
  name: string;
  constructor(name){
    this.name = name;
  }
  sayName(): void{
    console.log(this.name);
  }
}

class S extends P {
  age: number;
  constructor(name,age){
    super(age);
    this.age = age;
    this.name = name;
  }
  sayAge(): number{
    console.log(this.age);
    return this.age;
  }
}

let p = new P('ppp');
p.sayName();// 'ppp'

let s = new S('sss',23);
s.sayAge(); // 23
s.sayName(); // 'sss'
```

## 访问修饰符
ts可以使用三种访问修饰符:public、private 和 protected

* public 修饰的属性或方法是公有的，可以在任何地方被访问到，`默认所有的属性和方法都是 public 的`;  
* private 修饰的属性或方法是私有的，不能在声明它的类的外部访问;  
* protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

* js的static静态属性方法，通过类本身（和其子类）调用，不能在类的实例上调用静态方法  


`当构造函数修饰为 private 时，该类不允许被继承或者实例化`  
`当构造函数修饰为 protected时，该类只允许被继承不允许实例化`
```ts
class Animal {
  public name;
  private constructor (name) { // 构造函数私有化,不允许被继承或者实例化
      this.name = name;
  }
}
class Cat extends Animal { // error!!!,无法扩展类“P”。类构造函数标记为私有
  constructor (name) {
      super(name);
  }
}

let a = new Animal('Jack'); // error!!!；类“P”的构造函数是私有的，仅可在类声明中访问
```

```ts
class M {
  age: number
  constructor(age){
    this.age = age
  }
  public a() {
    console.log('public')
    this.b() // 'private'
    this.c() // 'protected'

    M.d() // 'static' 不能直接使用 this 关键字来访问静态方法。而是要用类名来调用
    this.d() // error!!!，类的静态函数，只能通过 M.d() 访问
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

m.age // 23
m.a() // 'public' 'private' 'protected' 'static'
m.b() // error!!!，private不能在声明它的类的外部访问
m.c() // error!!!，protected不能在声明它的类的外部访问
m.d() // error!!!，static不能被实例调用

n.getC() // 'protected' //protected允许被子类访问
M.d() // 'static'
N.d() // 'static'
```

* abstract 用于定义抽象类和其中的抽象方法 (抽象方法只能出现在抽象类中)。

抽象类是不允许被实例化的：
```ts
abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

let a = new Animal('Jack'); // error!!! 无法创建抽象类的实例
```

## implements 类实现接口
实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

```ts
interface Alarm {
    alert();
}

interface Light {
    lightOn();
    lightOff();
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```

## 构造器类型
语法：
`new (p1: T1, p2: T2, ...) => T`

构造器类型的语法和函数类型极为相似，区别是在最前面多了一个 new 关键字:
```ts
class TypeA {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say(){
    return this.name
  }
}

// 变量b为构造器类型，和类TypeA的构造器兼容
let A: new (name: string) => TypeA;
A = TypeA;
// b现在是一个类
let a = new A('type');
console.log(a.say()); // type
```


# <a name="declear">declear声明</a>
[参考](https://segmentfault.com/a/1190000020000325)

[文档](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html)

作用：当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
```ts
declare var $: (selector: string) => any;  
$('body')
```

更推荐的是使用 @types 统一管理第三方库的声明文件。  
@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
npm install @types/jquery --save-dev

declare var 并没有真的定义一个变量，只是定义了全局变量 $ 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。

----

* 新建一个声明文件以 .d.ts 为后缀，把声明语句单独放到该文件中： `runoob.d.ts`

* 声明文件或模块的语法格式如下：
` declare module Module_Name {} `

* ts中引入声明文件：

`/// <reference path = " runoob.d.ts" />`

```html
  不要在声明文件里使用  /// <reference path="..." />。
  应该使用  /// <reference types="..." />代替
```

```ts
//a.d.ts
declare let myname: number

//a.ts
#!/usr/bin/env ts-node
/// <reference path = "./a.d.ts" />
myname = 5
console.log(myname)
```

# <a name="namespace">命名空间namespace</a>
namespace：“内部模块”现在称做“命名空间”

moduleX{ 相当于现在推荐的写法 namespaceX{)

# <a name="tsconfig">tsconfig.json</a>
[项目配置](https://www.tslang.cn/docs/handbook/tsconfig-json.html)



# <a name=""></a>
