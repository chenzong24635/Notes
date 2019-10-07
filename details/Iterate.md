# 目录
* <a href="#遍历方法">**遍历方法**</a>
  * <a href="#for">for</a>
  * <a href="#for in">for in</a>
  * <a href="#for of">for of</a>
  * <a href="#forEach()">forEach()</a>
  * <a href="#map()">map()</a>
  * <a href="#every()、some()、filter()">every()、some()、filter()</a>
  * <a href="#reduce()">reduce()</a>
  * <a href="#entries()、keys()、values()">entries()、keys()、values()</a>
  * <a href="#Object.entries()、Object.keys()、Object.values()">Object.entries()、Object.keys()、Object.values()、Object.fromEntries()</a>
  * <a href="#Object.getOwnPropertyNames()">Object.getOwnPropertyNames()</a>
  * <a href="#Object.getOwnPropertySymbols()">Object.getOwnPropertySymbols()</a>
  * <a href="#Reflect.ownKeys()">Reflect.ownKeys()</a>
  * <a href="#"></a>

# <a name="遍历方法">**遍历方法**</a>
> 
    * 
    let arr = ['a', 'b'];
    let obj = [
      {
        'a1': '1',
        'b1': '1'
      },
      {
        'a2': '2',
        'b2': '2'
      }
    ];

  

## <a name="for">for</a>
`能被break, continue,  return中断`  
>
    for (let i = 0,len = arr.length; i < len ; i++) {
      console.log('key:', i, 'val:', arr[i])
    }

## <a name="for in">for...in --遍历对象--遍历的是索引（即键名）</a>
`能被break, continue,  return中断`    
`for in更适合遍历对象，不要使用for in遍历数组。`

>
    1.遍历的是索引（即键名）
    2.遍历顺序有可能不是按照实际的内部顺序
    3.for in环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

    for (key in obj) { 
      if (myObject.hasOwnProperty(key)) { //判断某属性是否是该对象的实例属性
　　　　console.log(key);
　　  }
      console.log('key:', key, ';val:', obj[key]);
    }

## <a name="for of">for...of--遍历数组--遍历的是键值</a>
`能被break, continue,  return中断`      
`必须部署了 Iterator 接口后才能使用；遍历普通对象会报错`

    for (item of arr) {
      
      console.log('item:', item);
    }

##  <a name="forEach">forEach()</a>
遍历数组 ,无法遍历对象, IE不支持  
`没有返回值 undefined` , `不改变原数组 、不能中断`

forEach((item, index, array) => {})
    // 	item-- 当前元素的值
    // 	index--当前元素的索引
    // 	array--源数组
    //  break,continue不能中断其循环，使用return也不能返回到外层函数。
    arr.forEach((item, index, array) => {
      console.log('forEach()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

##  <a name="map()">map()</a>
遍历数组，返回修改后的新数组，`不改变原数组，不能中断`

    arr.map((item, index) => {
      console.log('map()-->', 'index:', index, ';item:', item)
      return item + index
    });

 
##  <a name="every()、some()、filter()">every()、some()、filter()</a>

some、、every、filter(item, index, array)  
item: 键值  
index: 索引  
array：源数组 

| |检测元素是否符合条件| 空数组测试| 不改变原数组|
|:--|:--|:--:|:--:|
|every()| 全部满足才返回true|返回false| √|
|some()| 一个满足就返回true|返回false|√ | 
|filter()| 数组形式返回符合元素|返回[]| √|


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

reduce((sum, item, index, array) => {})  

接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值，// reduceRight() (从右到左)  

sum：累计器 累计回调的返回值; 它是上一次调用回调时返回的累积值)   
item：当前值  
index：当前索引  
array：源数组
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
    let entries = Object.entries(obj);
    console.log('Object.entries()-->', entries)

    let keys = Object.keys(obj);
    console.log('Object.keys()-->', keys)

    let values = Object.values(obj);
    console.log('Object.values()-->', values)


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

## <a name="Object.getOwnPropertyNames()">Object.getOwnPropertyNames()--遍历对象</a>
返回一个数组，包含对象自身的所有属性（含不可枚举属性,不含 Symbol 属性）的键名


## <a name="#Object.getOwnPropertySymbols()">#Object.getOwnPropertySymbols()</a>
返回一个数组，包含对象自身的所有 Symbol 属性的键名。

>

## <a name="Reflect.ownKeys()">Reflect.ownKeys()</a>
返回一个数组，包含对象自身的所有键名，(包括不可枚举属性和Symbol属性)

## <a name=""></a>
## <a name=""></a>