# 目录
* <a href="#遍历方法">**遍历方法**</a>
  * <a href="#for">for</a>
  * <a href="#for in">for in</a>
  * <a href="#for of">for of</a>
  * <a href="#forEach()">forEach()</a>
  * <a href="#map()">map()</a>
  * <a href="#every()、some()、filter()">every()、some()、filter()</a>
  * <a href="#reduce()">reduce()</a>
  * <a href="#entries()、keys()、values()">entries()、keys()、values()--遍历数组</a>
  * <a href="#Object.entries()、Object.keys()、Object.values()">Object.entries()、Object.keys()、Object.values()、Object.fromEntries()--遍历对象</a>
  * <a href="#Object.getOwnPropertyNames()">Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Reflect.ownKeys()--遍历对象,返回键名</a>
  * <a href="#"></a>

# <a name="遍历方法">**遍历方法**</a>
```js
let arr = ['a', 'b'];
let obj = {
  'a': 'a1',
  'b': 'b1'
}
```

## <a name="for">for</a>
`能被break, continue,  return（函数中）中断`  
```js
for (let i = 0,len = arr.length; i < len ; i++) {
  console.log('key:', i, 'val:', arr[i])
  break;
}
```

## <a name="for in">for...in --遍历对象--遍历的是索引（键名）</a>
`能被break, continue,  return中断`    
`for in更适合遍历对象，不要使用for in遍历数组。`

* 遍历的是索引（键名）
* 遍历顺序有可能不是按照实际的内部顺序
* for in环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

```ts
for (key in obj) { 
  if (myObject.hasOwnProperty(key)) { //判断某属性是否是该对象的实例属性
　　　　console.log(key);
　　  }
  console.log('key:', key, ';val:', obj[key]);
}
```

不会改变原对象
```js
let obj = {a: 1, b: 2}
for(let item in obj){
  if(obj[item] >1)break;
  console.log(item)
}
console.log(obj)

```

## <a name="for of">for...of--遍历数组--遍历的是键值</a>
`能被break, continue,  return中断`      
`必须部署了 Iterator 接口后才能使用；遍历普通对象会报错`

不会改变原数组
```js
let arr = [1,2,3,4]
for (item of arr) {
  if(item >= 3)break;
  item *= 2;
  console.log('item:', item);
}
console.log(arr)
```
----

for-of 循环不仅支持数组，还支持大多数类数组对象，例如 DOM NodeList 对象。  
for-of 循环也支持字符串遍历，它将字符串视为一系列的 Unicode 字符来进行遍历：
```js
for (let item of "abcd") {
 console.log(item);
}
//输出
"a"
"b"
"c"
"d"
```
---
同样支持 Map 和 Set 对象遍历
```js
let set = new Set([1,2,344]);
for(let item of set){
  console.log(item);
}

let map = new Map([[{a:1},'a1']]);
for(let item of map){
  console.log(item);
}
```

## <a name="for await of">for await of-- 异步迭代器</a>
for await (let item of arr) {}

for await of可以用来遍历具有Symbol.asyncIterator方法的数据结构，也就是异步迭代器，且会等待前一个成员的状态改变后才会遍历到下一个成员，相当于async函数内部的await。

>
    function Gen (time) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(time)
        }, time)
      })
    }

    // for of遍历
    async function test () {
      let arr = [Gen(2000), Gen(100), Gen(3000)]
      for (let item of arr) {
        console.log(Date.now(), item.then(console.log))
      }
    }
    test()
    //输出
      1576030907652 Promise {<pending>}
      1576030907652 Promise {<pending>}
      1576030907652 Promise {<pending>}
      Promise {<resolved>: undefined}
      100
      2000
      3000

    // for await of遍历
    async function test () {
      let arr = [Gen(2000), Gen(100), Gen(3000)]
      for await (let item of arr) {
        console.log(Date.now(), item)
      }
    }
    test()
    //输出
      1575536194608 2000
      1575536194608 100
      1575536195608 3000

##  <a name="forEach">forEach()</a>
`遍历数组 ,无法遍历对象,跳过空位  `   
`没有返回值 为undefined, 不改变原数组 、能被return中断`

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
      console.log('forEach()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

##  <a name="map()">map()</a>
`遍历数组，返回修改后的新数组，不改变原数组，不能中断`

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

##  <a name="every()、some()、filter()">every()、some()、filter()</a>

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
>
    [1,2,,3].every(item => item >= 1) // true

>
    let arr = [ 1, 2, 3, 4 ];
    arr.some((item, index, array) => {
      console.log(item, index, array)
      return index > 1 //某个元素索引大于1返回true，否则false
    })
    //是否存在索引>3
    console.log(arr.some(x => x >3));    // 输出  true
    //是否存在索引>5
    console.log(arr.some(x => x > 5));    // 输出  false

    arr.every((item, index, array) => {
      console.log(item, index, array)
      return index>1 //每个元素索引大于1返回true，否则false
    })

>
    arr.filter((item, index, array) => {
      console.log('filter()-->', 'index:', index, ';item:', item, '源数组:', array)
      return index >= 1
    });

    // 利用filter去重
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(element,index,self){
      return self.indexOf(element) === index;
    });
    console.log(arr2);

## <a name="reduce()">reduce()</a>
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
>
    let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
    // 扁平结果 [1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]
    function flatted(arr) {
      return arr.reduce((pre, now, index, array) => {
        return pre.concat(Array.isArray(now) ? flatted(now) : now) 
      }, [])
    }


## <a name="entries()、keys()、values()">entries()、keys()、values()——用于遍历数组。它们都返回一个遍历器对象</a>
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

    
## <a name="Object.entries()、Object.keys()、Object.values()">Object.entries()、Object.keys()、Object.values()--遍历对象</a>

遍历对象，返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键值对数组、键名、键值。 

> 
    Object.entries(obj); // [['a','a1'],['b','b1']]

    Object.keys(obj);// ['a','b']

    Object.values(obj); // ['a1','b1']
    Object.values(arr); // ['a','b']


* Object.fromEntries()

Object.entries //可以将对象转换为数组  
Object.fromEntries //可以将数组转换为对象 -->数组格式：[[key,val],[key1,val1]]

>
    let obj = {
      a: 20,
      b: 22
    }
  
    var arr = Object.entrires(obj) //[[a,20],[b,22]]
    Object.fromEntries(arr) //{a: 20,b: 22}


>
    //key重复时，取后面的值
    let arr = [
      [ 'a', 22 ],
      [ 'b', 22 ],
      [ 'c', 21],
      [ 'a', 20 ]
    ]
    let obj = Object.fromEntries(arr);
    // { a: 20, b: 20, c: 21 }

## <a name="Object.getOwnPropertyNames()">Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Reflect.ownKeys()--遍历对象</a>

| 方法 | 返回值 | 包含不可枚举属性 | 包含Symbol属性| 
|:--|:--|:--|:--|
| Object.getOwnPropertyNames() | 返回数组，对象自身的所有属性（包含不可枚举属性,不含 Symbol 属性）的键名 | √ | ×
| Object.getOwnPropertySymbols() | 返回数组，对象自身的所有 Symbol 属性的键名 |  × | √
| Reflect.ownKeys() | 返回数组，对象自身的所有键名，(包含不可枚举属性及Symbol属性)| √ | √

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

    console.log(Object.getOwnPropertyNames(obj)); //  ["num", "str"]
    console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(syb)]
    console.log(Reflect.ownKeys(obj)); // ["num", "str",Symbol(syb)]


## <a name=""></a>
## <a name=""></a>