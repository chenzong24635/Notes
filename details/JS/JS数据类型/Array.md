[Array - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

<details open>
  <summary>
    图
  </summary>
  
  ![Array](../../img/Array.png)
</details>


数组属性、方法

* <a href="#属性">属性</a>
    * <a href="#length">length</a>
    * <a href="#Array.protype">Array.protype</a>
* <a href="#方法">方法</a>
    * <a href="#toString()">toString()</a>
    * <a href="#toLocaleString()">toLocaleString()</a>
    * <a href="#Array.isArray()">Array.isArray()判断是否数组</a>
    * <a href="#Array.of()">Array.of()</a>
    * <a href="#Array.from()">Array.from()</a>
    * <a href="#find()、findIndex()、indexOf()、lastIndexOf()、includes()">find()、findIndex()、indexOf()、lastIndexOf()、includes()</a>
    * <a href="#join()">join()数组转字符串</a>
    * <a href="#fill()">fill()填充数组 -- 改变原数组</a>
    * <a href="#push()、unshift()、pop()、shift()">push()、unshift()、pop()、shift() -- 改变原数组</a>
    * <a href="#slice()">slice() -- 不改变原数组</a>
    * <a href="#splice()">splice() -- 改变原数组</a>
    * <a href="#sort()">sort() -- 改变原数组</a>
    * <a href="#reverse()">reverse() -- 改变原数组</a>
    * <a href="#flat()">flat()数组扁平化-- 不改变原数组</a>
    * <a href="#flatMap()">flatMap-- 不改变原数组</a>
    * <a href="#concat()">concat() -- 不改变原数组</a>
    * <a href="#copyWith()">copyWith() -- 改变原数组，但不改变原数组长度</a>
 
    * <a href="#forEach()">forEach() -- 不改变原数组</a>
    * <a href="#map()">map() -- 不改变原数组</a>
    * <a href="#some()、every()、filter()">some()、every()、filter() -- 不改变原数组</a>
    * <a href="#reduce()、reduceRight()">reduce()、reduceRight()</a>
    * <a href="#keys()、values()、entries()">keys()、values()、entries()——用于遍历数组。它们都返回一个遍历器对象</a>

* <a href="#"></a>

# 概述
数组是一种类列表对象，其数据在内存中也可以不连续

数组应该是一段线性分配的内存，但是JS的Array的检索和更新方式和对象一模一样

* Array它把下标变成数字，用其作属性。它比真正的数组慢，但用起来更方便。
* Array本质还是对象，其原型继承自Array.prototype，向上再继承自Object.prototype
* Array的方法是设计为对象通用的，对象也能调用数组的方法

```js
1+[1,2] // '11,2'
此时数组进行隐式转换,相当于
1 + ([1,2]).toString()
```

### 类数组
* 类数组不是数组，通过 Array.isArray() 会返回 false
* 类数组通过 Array.from 可以转换为数组
* 属性要为索引（数字）属性
* 必须有length属性 

###  常见的类数组

* 字符串
  >唯一的原生类数组
* arguments
  >arguments完全可以使用...args代替，这样不定参数就是真数组
* DOM

# <a name="属性">属性</a>
## <a name="length">length</a>
每个数组都有一个length属性。针对稠密数组，length属性值代表数组中元素的个数。当数组是稀疏数组时，length属性值大于元素的个数。
>
    let arr = [ 'a', 'b', 'c' ];  
    console.log(arr.length);  // 输出 3

    //删除数组
        arr.length = 2;
        console.log(arr);  // 输出 [ "a", "b" ]

        delete arr[2] //返回true | false
        console.log(arr);  // 输出 [ "a", "b",undefined ]

    //增加数组
    arr.length = 4;
    console.log(arr);  // 输出 [ "a", "b"，"c", undefined ]


## <a name="Array.protype">Array.protype</a>
Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。

属性特性：
>
    writable	false
    enumerable	false
    configurable	false

Array.prototype.length = 0 //它是个空数组

Array.prototype.constructor === Array //true 实例的原型的构造函数既本身

# <a name="方法">方法</a>
## <a name="toString()">toString()</a>
toString()返回一个字符串，表示指定的数组及其元素

Array对象覆盖了Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。

当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法。
```js
''+[1,3,'a'] // "1,3,a"
等同于
[1,3,'a'].toString() //"1,3,a"

4+[1,3,'a'] // "41,3,a"
```


## <a name="toLocaleString()">toLocaleString()</a>
toLocaleString(locales, options)

返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

locales 可选  
带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。  

options 可选  
一个可配置属性的对象，对于数字Number.prototype.toLocaleString()，对于日期Date.prototype.toLocaleString()
>
    var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    var localeString = array1.toLocaleString('en', {timeZone: "UTC"});

    console.log(localeString);//  "1,a,12/21/1997, 2:12:00 PM"

>
    var prices = ['￥7', 500, 8123, 12];
    prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

    // "￥7,￥500,￥8,123,￥12"



## <a name="Array.isArray()"> Array.isArray()判断是否为数组</a>
>

    console.log(Array.isArray([1, 2, 3]));   // 输出 true
    console.log(Array.isArray({num: 123}));   //输出 false

## <a name="Array.of()">Array.of()、Array()</a>
将一组值 转换为数组，不管参数的数量或类型如何。
>

  console.log(Array.of(3));    // 输出 [3]
  console.log(Array.of(1,2,3));   // 输出 [1,2,3]


主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
>
    Array() // []
    Array(3) // [, , ,]
    Array(3, 11, 8) // [3, 11, 8]
>
    Array.of() // []
    Array.of(3) // [3]
    Array.of(3, 11, 8) // [3,11,8]

## <a name="Array.from">Array.from()</a>
将(如: 数组、类数组、可遍历对象、或者是字符串、map 、set 等可迭代对象) 转为数组。

* Array.from(arrayLike[, mapFunction[, thisArg]])
>arrayLike：必传参数，想要转换成数组的伪数组对象或可迭代对象。  
>mapFunction：可选参数，mapFunction(item，index){…} 是在集合中的每个项目上调用的函数。返回的值将插入到新集合中。  
>thisArg：可选参数，执行回调函数 mapFunction 时 this 对象。这个参数很少使用。
```js
  console.log(Array.from('abcd'));  // 输出 [ "a", "b", "c", "d" ]
  //映射转换
  console.log(Array.from([1, 2, 3], item => item + 1));  // 输出 [ 2, 3, 4 ]
```

* 使用值填充数组
```js
Array.from({length:3} , () => ({})) // [{},{},{}]
Array(3).fill({}) // [{},{},{}]
Array(3).map(() => {}) // [undefined, undefined, undefined]
//这是因为 Array(length) 创建了一个有3个空项的数组(也称为稀疏数组)，但是 map() 方法会跳过空项。
```
* 生成数字范围[0,1,2....]
```js
Array.from({ length: 5 }, (item, index) => index)
// [0,1,2,3,4]
```

* 转换可迭代对象
```js
let itObj = {
  * [Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
  }
}
let arr = Array.from(itObj);
console.log(arr); //[1,2,3]
```

* 克隆数组
```js
// 数组的浅拷贝
Array.from([1,2,3]) //[1,2,3]

// 深拷贝（限于数组嵌套）
function clone(val) {
  return Array.isArray(val) ? Array.from(val, clone) : val;
}
```

## <a name="find()、findIndex()、indexOf()、lastIndexOf()、includes()">find()、findIndex()、indexOf()、lastIndexOf()、includes()</a>

### find()、findIndex()

* find(callback[, thisArg])  找到第一个满足检测函数条件的元素，并返回该元素，没找到则返回 undefined。
>callback：在数组每一项上执行的函数，接收 3 个参数
>>element：当前遍历到的元素。  
>>index可选：当前遍历到的索引  
>>array可选：数组本身  

> thisArg可选： 执行回调时用作this 的对象。

>

    let arr = [1, 2, 3, 4, 5,NaN];
    console.log(arr.find(x => x > 3));    // 输出  4

    arr.find(x => Number.isNaN(x)) // NaN

* findIndex() 找到第一个满足检测函数条件的元素，并返回该元素索引。找不到返回-1。
>

    let arr = [6, 7, 8, 9, 10,NaN];
    console.log(arr.findIndex(x => x > 8));    // 输出  3

    arr.findIndex(x => Object.is(NaN, x)) // 5

### indexOf()、lastIndexOf()
indexOf(searchElement[, fromIndex = 0])  
lastIndexOf(searchElement[, fromIndex = arr.length - 1])

searchElement： 查找的元素 （全等查找===）
fromIndex：表示查找的起始位置。

#### indexOf() 查找元素并返回第一个满足的元素索引值，找不到返回-1。  

>

    let arr= [1, 2, 3, 4];
    console.log(arr.indexOf(3));    // 输出 2
    console.log(arr.indexOf(6));    // 输出 -1
    console.log(arr.indexOf(2, 2));    // 输出 -1

**缺点**

* 一是不够语义化，要先找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。

* 二是，它内部使用严格相等运算符（===）进行判断，不能检测NaN
>
    [NaN].indexOf(NaN)// -1

#### lastIndexOf() 从后向前查找元素并返回元素索引值，找不到返回 -1。
>
    let arr = ['a', 'b', 'c', 'd'];
    console.log(arr.lastIndexOf('b'));    // 输出 1
    console.log(arr.lastIndexOf('e'));    // 输出 -1

### includes() --ES7
includes(searchElement[, fromIndex=0])

searchElement：查找的元素   
fromIndex：表示查找的起始位置，  
  >为负值从this.length + fromIndex 开始  
  >大于等于数组的长度，则会返回 false，且该数组不会被搜索。

判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

对象数组不能使用includes方法来检测
>

    let arr = [1, 2, 3,NaN];
    console.log(arr.includes(2));    // 输出 true
    console.log(arr.includes(NaN));    // 输出 true
    console.log(arr.includes(4));    // 输出 false

## <a name="join()">join()数组转字符串 -- 不改变原数组</a>
join([separator])  
指定一个字符串来分隔数组的每个元素。如果缺省该值，默认逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。


`如果一个元素为 undefined 或 null，它会被转换为空字符串。`

>
    let arr= [ 'a', 'b', 'c', 1, null, undefined ];
    console.log(arr.join());    // 输出 "a,b,c,1,,"
    console.log(arr.join("-"));   // 输出"a-b-c-1--"

## <a name="fill()">fill() 用一个固定值填充数组-- 改变原数组</a>
fill(value,start,end)  
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。`改变原数组，不能改变数组长度`

用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。  

value: 填充的值   
start: 填充的起始位置 （默认0），负数为 this.length+start  
end: 填充的结束位置（不包含）（默认this.length），负数为this.length+end  

>
    let arr = [1, 2, 3, 4];
    console.log(arr.fill(9, 1, 2));    // 输出 [ 1, 9, 3, 4 ]
    console.log(arr.fill(8, 1));      // 输出 [ 1, 8, 8, 8 ]
    console.log(arr.fill(7));          // 输出 [ 7, 7, 7, 7 ]

## <a name="push()、unshift()、pop()、shift()">push()、unshift()、pop()、shift() -- 改变原数组</a>

push() 在尾部添加一个或多个元素，返回数组的新长度。
>
    let arr= ['a', 'b', 'c'];
    console.log(arr.push('d'));   // 输出 4
    console.log(arr);   // 输出 [ "a", "b", "c", "d" ]

____

unshift() 在头部添加一个或多个元素，并返回数组的新长度。
>
    let arr = [ 4, 5, 6 ];
    console.log(arr.unshift(3));    // 输出 4
    console.log(arr);    // 输出 [ 3, 4, 5, 6 ]
    console.log(arr.unshift(1, 2));    // 输出 6
    console.log(arr);    // 输出 [ 1, 2, 3, 4, 5, 6 ]

____

pop() 从尾部删除一个元素，并返回该元素。
>
    let arr= ['a', 'b', 'c', 'd'];
    console.log(arr.pop());    // 输出 d
    console.log(arr);    // 输出 [ "a", "b", "c" ]

____

shift() 从头部删除一个元素，并返回该元素。
>
    let arr = [1, 2, 3];
    console.log(arr.shift());    // 输出 1
    console.log(arr);    // 输出 [ 2, 3 ]

## <a name="slice()">slice() -- 不改变原数组</a>
slice(start, end) 删除元素，返回一个新的数组对象，`不会改变原数组`  
start：开始位置（包含），默认0   
  >负数，表示从原数组中的倒数第几个元素开始提取  
  >大于原数组的长度，则会返回空数组 

end： 结束位置（不包含）,默认this.length
  >负数，表示从原数组中的倒数第几个元素结束提取  
  >大于数组的长度，this.length

## <a name="splice()">splice() -- 改变原数组</a>
splice(start, deleteCount, item1,tem2, ...)   添加、替换、删除元素。以数组形式返回被删除的元素(没有删除元素，返回空数组)。`改变原数组`    
start：表示替换的位置  
deleteCount ：表示删除元素的数量(>=0)   
item1... ： 表示添加的元素  
>

    let arr = [ 'a', 'c', 'd' ];

    arr.splice( 1, 0, 'b'); //返回 []
    console.log(arr);    // 输出 [ "a", "b", "c", "d" ]

    arr.splice(1,1);     // 返回 ["c"]
    console.log(arr);    // 输出 [ "a", "d" ]

    arr.splice(1,1,'bb','cc');// 返回["c"]
    console.log(arr);    // 输出 [ "a", "bb", "cc", "d" ]

## <a name="sort()">sort() -- 改变原数组</a>
sort(compareFunction(a, b)) 数组排序，并返回新数组 。`改变原数组`

默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

>
    let arr = [ 4, 3, 10, 2 ];
    console.log(arr.sort());    // 输出 [ 10, 2, 3, 4 ]

    //升序
    console.log(arr.sort((a, b) => a - b));    // 输出 [ 2, 3, 4, 10 ]

    //降序
    console.log(arr.sort((a, b) => b - a));    // 输出 [ 2, 3, 4, 10 ]

## <a name="reverse()">reverse() -- 改变原数组</a>

reverse() 倒置数组，并返回新数组。`会改变原数组`
>

    let sourceArray= [ 'a', 'b', 'c' ];
    let reverseArray = sourceArray.reverse();
    console.log(reverseArray);    // 输出 [ "c", "b", "a" ]
    console.log(sourceArray == reverseArray);    // 输出 true


## <a name="flat()">flat()数组扁平化-- 不改变原数组</a>

[数组拍平（扁平化） flat 方法实现](https://juejin.im/post/5dff18a4e51d455804256d31)

flat(n)按指定深度递归遍历数组，并返回包含所有遍历到的元素组成的新数组。`不改变原数组`。  
>n:要提取嵌套数组的结构深度，默认值为 1。使用 Infinity 作为深度，展开任意深度的嵌套数组    
>n<=0 的整数将返回原数组，不“拉平”  
>如果原数组有空位，flat()方法会跳过空位。

会移除数组中的空项
>
    let arr1 = [ 1, 2, ,'',null, undefined,[ 3, 4 ] ];
    console.log(arr1.flat());     // 输出 [1, 2, '', null, undefined, 3, 4]  ---移除数组中的空项

    let arr2 = [ 1, 2, [3, 4, [ 5, 6 ] ] ];
    console.log(arr2.flat());    // 输出 [ 1, 2, 3, 4,  [ 5, 6 ] ]

    let arr3 = [1, 2, [ 3, 4, [ 5, 6 ] ] ];
    console.log(arr3.flat(2));    // 输出 [ 1, 2, 3, 4, 5, 6 ]

    console.log(arr3.flat(Infinity));    // 输出 [ 1, 2, 3, 4, 5, 6 ]

## <a name="flatMap()">flatMap() -- 不改变源数组</a>
首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。

arr.flatMap(function callback(currentValue[, index[, array]]) {
}[, thisArg])
>callback 可以生成一个新数组中的元素的函数，可以传入三个参数： 
>>currentValue当前正在数组中处理的元素   
>>index 可选的。数组中正在处理的当前元素的索引。  
>>array 可选的。被调用的 map 数组   

>thisArg可选的。执行 callback 函数时 使用的this 值。

```js
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
//会进行一层flat 
// [2, 4, 6, 8]

arr1.flatMap(x => [[x * 2]]);
//flat深度只为1，所以只展开一层
// [[2], [4], [6], [8]]
```

```js
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```


## <a name="concat()">concat() -- 不改变源数组</a>
合并两个或多个数组，返回新数组，`不改变源数组`  
arr.concat(arr2,arr3,...)
>

  let arr = [ 'a', 'b' ];
  let arr1 = [ 'c', 'd' ];
  console.log(arr.concat(arr1));    // 输出 [ "a", "b", "c", "d" ]
  该方法可以有多个参数。

## <a name="copyWithin()">copyWithin() -- 改变原数组，但不改变原数组长度</a>
copyWithin(target,start,end)  
浅复制数组的一部分到改数组中的另一个位置，返回数组，`改变原数组，但不改变原数组长度`  

>target : 要复制到的索引位置，如为负值则从后向前计数。  
>start : 要复制序列的起始索引位置，如为负值则从后向前计数。如省略该值，则从索引0开始。  
>end : 要复制序列的结束位置，如为负值则从后向前计数。如省略该值，则复制到结尾位置。

>

    let arr = ['a', 'b', 'c', 'd', 'e','f'];
    console.log(arr.copyWithin(0, 3, 5));    // 输出 [ "d", "e", "c", "d", "e", "f" ]
    console.log(arr.copyWithin(1, 3));    // 输出 [ "d", "d", "e", "f", "e", "f" ]

## <a name="forEach()">forEach()-- 不改变原数组</a>
遍历数组 ,无法遍历对象, IE不支持  
`没有返回值, undefined` , `不改变原数组 、能被return中断`

forEach(callback,thisArg)
>callback(item,index,array)：生成新数组元素的函数，使用三个参数：  
>>item，数组中正在处理的当前元素。  
>>index数组中正在处理的当前元素的索引。  
>>array源数组  

>thisArg  
>>可选的。执行 callback 函数时 使用的this 值(箭头函数时，this指向window)

>
    forEach((item, index, array) => {})
    //  break,continue不能中断其循环，使用return也不能返回到外层函数。
    arr.forEach((item, index, array) => {
      if(index == 0)return;
      console.log('forEach()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

## <a name="map()">map() -- 不改变原数组</a>
遍历数组，返回修改后的数组，`不改变原数组，不能中断`

map(callback,thisArg)
>callback(item,index,array)：生成新数组元素的函数，使用三个参数：  
>>item，数组中正在处理的当前元素。  
>>index数组中正在处理的当前元素的索引。  
>>array源数组  

>thisArg  
>>可选的。执行 callback 函数时 使用的this 值(箭头函数时，this指向window)

```js
arr.map((item, index) => {
  console.log('map()-->', 'index:', index, ';item:', item)
  return item + index
});

['a','b'].map(function (item){
  console.log(this)
  return this
},{}) //返回 [{},{}]

//箭头函数时，this指向window
['a','b'].map((item) => {
  console.log(this)
  return this
},{}) //返回 [Window, Window]
```

map函数的回调函数只会被赋过值的项调用，会过滤空数组
```js
let arr = new Array(5);
//等同于 let arr = [,,,,,];
let arr1 = arr.map(() => {
  return 1 
});
console.log(arr1);
// [empty × 5];

---

let arr = new Array(5).fill();
let arr1 = arr.map(() => {
  return 1 
});
console.log(arr1);
// [1, 1, 1, 1, 1]
```

## <a name="some()、every()、filter()">some()、every()、filter() -- 不改变原数组</a>

>callback(item,index,array)：生成新数组元素的函数，使用三个参数：  
>>item，数组中正在处理的当前元素。  
>>index数组中正在处理的当前元素的索引。  
>>array源数组  

>thisArg  
>>可选的。执行 callback 函数时 使用的this 值(箭头函数时，this指向window)


| |检测元素是否符合条件| 空数组测试| 不改变原数组|
|:--|:--|:--:|:--:|
|every()| 全部满足才返回true|返回false| √|
|some()| 一个满足就返回true|返回false|√ |
|filter()| 数组形式返回符合元素|返回[]| √|

every()、some()、filter()会跳过空位
```js
[1,2,,3].every(item => item >= 1) // true
```

```js
let arr = [ 1, 2, 3, 4 ];
arr.some((item, index, array) => {
  console.log(item, index, array)
  return index > 1 //某个元素索引大于1返回true，否则false
})
console.log(arr.some(x => x >3));    // 输出  true
console.log(arr.some(x => x > 5));    // 输出  false
```

* every()  

检测数组中是否`所有元素`可以通过检测函数验证。返回Boolean值；（某个元素不满足会立即返回false）  
```js
let arr = [ 1, 2, 3, 4 ];
arr.every((item, index, array) => {
  console.log(item, index, array)
  return index>1 //每个元素索引大于1返回true，否则false
})
console.log(arr.every(x => x < 8));    //输出 true
console.log(arr.every(x => x < 4));    //输出 false
```
____

* filter() 

以数组形式返回满足条件的元素，没有返回[]
```js
arr.filter((item, index, array) => {
  return index > 1 //返回索引大于1的元素
});

//过滤空值
[1, 2, 0, undefined, null, false, ''].filter(Boolean) //[1.2]

// 利用filter去重
var arr = [2,3,4,4,5,2,3,6];
var arr2 = arr.filter(function(element,index,self){
  return self.indexOf(element) === index;
});
console.log(arr2);
```

## <a name="reduce()、reduceRight()">reduce()、reduceRight()</a>
reduce()接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值，  
// reduceRight() (从右到左)  

reduce(callback(acu, item, index, array),initialValue)  
>callback执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数 
>>acu：累计器 累计回调的返回值; 它是上一次调用回调时返回的累积值)   
>>item：当前值  
>>index：当前索引  
>>array：源数组

>initialValue可选,
作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。在没有初始值的空数组上调用 reduce 将报错。
>

    arr.reduce((prev, now, index, array) => {
      console.log('reduce()-->', '前一个值prev', prev, ';当前索引index:', index, ';值now:', now, '源数组array:', array);
      return prev += now
    }, 0);

    //使用reduce进行数组扁平化
    let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
    // 扁平结果：[1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]
    function flatted(arr) {
      return arr.reduce((pre, now, index, array) => {
        return pre.concat(Array.isArray(now) ? flatted(now) : now) 
      }, [])
    }



## <a name="keys()、values()、entries()">keys()、values()、entries()——用于遍历数组。它们都返回一个遍历器对象</a>
entries(): 键/值对迭代器  
keys():键迭代器  
values(): 值迭代器  

next()，返回一个对象{ value: 数组的key, done: false }  
next().done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false

    let iterator = arr.entries();
    iterator.next() // {done: false, value: [0, "a"]}
    iterator.next() // {done: false, value: [1, "b"]}
    iterator.next() // {done: true, value: undefined}

    for (let [index, item] of arr.entries()) {
      console.log('entries()-->','index:', index, ';item:', item);
    }
    for (let index of arr.values()) {
      console.log('.values()-->', 'index:', index);
    }
    for (let item of arr.keys()) {
      console.log('.keys()-->', 'item:', item);
    }

## <a name="">实现 map、filter、some、every、reduce、</a>
[一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧](https://juejin.im/post/5cef46226fb9a07eaf2b7516#heading-0)

实现 map
>
    Array.prototype.myMap = function(fn,context){
      let arr = Array.prototype.slice.call(this)
      let resultArr = []
      for(let i = 0, len = arr.length; i < len; i++){
        if(!arr.hasOwnProperty(i))continue;
        resultArr[i] = fn.call(context, arr[i], i, this)
      }
      return resultArr
    }

实现 filter
>
    Array.prototype.myFilter = function(fn,context){
      let arr = Array.prototype.slice.call(this)
      let resultArr = []
      for(let i = 0, len = arr.length; i < len; i++){
        if(!arr.hasOwnProperty(i))continue;
        fn.call(context, arr[i], i, this) && resultArr.push(arr[i])
      }
      return resultArr
    }

实现 some
>
    Array.prototype.mySome = function(fn,context){
      let arr = Array.prototype.slice.call(this)
      let resultArr = []
      for(let i = 0, len = arr.length; i < len; i++){
        if(!arr.hasOwnProperty(i))continue;
        if(fn.call(context, arr[i], i, this))return true
      }
      return false
    }

实现every
    Array.prototype.myEvery = function(fn,context){
      let arr = Array.prototype.slice.call(this)
      let resultArr = []
      for(let i = 0, len = arr.length; i < len; i++){
        if(!arr.hasOwnProperty(i))continue;
        if(!fn.call(context, arr[i], i, this))return false
      }
      return true
    }

实现reduce
>
    Array.prototype.myReduce = function(fn,initialValue){
      let arr = Array.prototype.slice.call(this)
      let result;
      let startIndex;
      if (initialValue === undefined) {
        // 找到第一个非空单元（真实）的元素和下标
        for (let i = 0,len = arr.length; i< len; i++) {
          if(!arr.hasOwnProperty(i))continue
          startIndex = i
          result = arr[i]
          break
        }
      } else {
        result = initialValue
      }
      for(let i =  ++startIndex || 0, len = arr.length; i < len; i++){
        if(!arr.hasOwnProperty(i))continue;
        result = fn.call(null, result, arr[i], i, this)
      }
      return result
    }

# <a name="数组一些操作">数组一些操作</a>

## <a name="类数组转化为数组">类数组转化为数组</a>
```js
[].slice.call(arguments) 
Array.prototype.slice.call(arguments)
Array.from(arguments)
[...arguments]
```

## <a name="交集，差集，并集，补集">交集，差集，并集，补集</a>

```js
intersect(arr1, arr2) { // 交集, 数组arr1与arr2都有的
  return arr1.filter(item=>arr2.includes(item))
},
diff (arr1, arr2) { // 差集，数组arr1相对于arr2所没有的
  return arr1.filter(item=>!arr2.includes(item))
},
union(arr1, arr2) { // 并集，两数组合并+去重
  // return arr1.filter(item=>!arr2.includes(item)).concat(arr2)
  return [...new Set([...arr1,...arr2])]
},
complement(arr1, arr2) { // 补集，两个数组各自没有的集合
  // return [...this.diff(arr1, arr2),...this.diff(arr2, arr1)]
  return [...arr1.filter(item=>!arr2.includes(item)),...arr2.filter(item=>!arr1.includes(item))]
},

let arr1 = [1,2,3,4,5]
let arr2 = [5,6,7,8,9]

let a1 = this.intersect(arr1, arr2)
console.log(a1); // [5]

let a2 = this.diff(arr1, arr2)
console.log(a2); // [1, 2, 3, 4]

let a3 = this.union(arr1, arr2)
console.log(a3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

let a4 = this.complement(arr1, arr2)
console.log(a4); //  [1, 2, 3, 4, 6, 7, 8, 9]
```

## <a name="数组无序排列">数组无序排列</a>

arr.sort(()=>Math.random() - 0.5)

arr.sort((a-b)=>a-b) 升序  
arr.sort((a-b)=>b-a) 降序

>

    如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
