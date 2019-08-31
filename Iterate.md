* <a href="#遍历方法">**遍历方法**</a>
  * <a href="#for in">for in</a>
  * <a href="#for of">for of</a>
  * <a href="#reduce()">reduce()</a>
  * <a href="#map()">map()</a>
  * <a href="#forEach()">forEach()</a>
  * <a href="#every()、some()、filter()">every()、some()、filter()</a>
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

  

## <a name="for in">for...in --遍历对象--遍历的是索引（即键名）</a>
for in更适合遍历对象，不要使用for in遍历数组。
>
    1.遍历的是索引（即键名）
    2.遍历顺序有可能不是按照实际的内部顺序
    3.for in环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。


    for (key in obj) { 
      if（myObject.hasOwnProperty(key)){ //判断某属性是否是该对象的实例属性
　　　　console.log(key);
　　  }
      console.log('key:', key, ';val:', obj[key]);
    }

## <a name="for of">for...of--遍历数组--遍历的是键值</a>
必须部署了 Iterator 接口后才能使用；
遍历普通对象会报错

    for (item of arr) {
      console.log('item:', item);
    }

## <a name="reduce()">reduce((sum, item, index, array) => {})</a>
    //接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值，// reduceRight() (从右到左)
    //  Accumulator (acc) (累计器 累计回调的返回值; 它是上一次调用回调时返回的累积值)
    //  Current Value (cur) (当前值)
    //  Current Index (idx) (当前索引)
    //  Source Array (src) (源数组)
    arr.reduce((prev, now, index, array) => {
      console.log('reduce()-->', '前一个值prev', prev, ';当前索引index:', index, ';值now:', now, '源数组array:', array);
      return prev += now
    }, 0);

    //使用reduce进行数组扁平化
    let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
    // let outputArr = [1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]
    function flatted(arr) {
      return arr.reduce((pre, now, index, array) => {
        // console.log(pre, now, index, array)
        return pre.concat(Array.isArray(now) ? flatted(now) : now) 
      }, [])
    }

##  <a name="map()">map()</a>
遍历数组，返回修改后的数组，不修改原数组，不能中断

    arr.map((item, index) => {
      console.log('map()-->', 'index:', index, ';item:', item)
    });

 
##  <a name="forEach">forEach((item, index, array) => {})</a>
遍历所有值并忽略回调函数的返回值 --- 改变原数组 、不能中断

    // 	item--正在数组中处理的当前元素的值
    // 	index--数组中正在处理的元素的索引
    // 	array--源数组
    //  break不能中断其循环，使用return也不能返回到外层函数。
    arr.forEach((item, index, array) => {
      console.log('forEach()-->', 'index:', index, ';item:', item, '源数组:', array)
    });
##  <a name="every()、some()、filter()">every()、some()、filter()</a>

    // every() 检测每个元素 是否符合条件（函数提供），全部满足才返回true，不检测空数组
    // some()                                      一个满足就返回true
    // filter() 以数组形式返回满足条件的元素，没有返回[]
    arr.filter((item, index, array) => {
      if (index >= 1) {console.log('index >= 1的值:',item)}
      console.log('filter()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

    // 利用filter去重
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(element,index,self){
      return self.indexOf(element) === index;
    });
    console.log(arr2);

## <a name="entries()、keys()、values()">entries()、keys()、values()——用于遍历数组。它们都返回一个遍历器对象</a>
    for (let [index, item] of arr.entries()) {
      console.log('entries()-->','index:', index, ';item:', item);
    }
    for (let index of arr.values()) {
      console.log('.values()-->', 'index:', index);
    }
    for (let item of arr.keys()) {
      console.log('.keys()-->', 'item:', item);
    }

    
## <a name="Object.entries()、Object.keys()、Object.values()">Object.entries()、Object.keys()、Object.values()</a>

#### 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键值对数组、键名、键值。 

> 
    let entries = Object.entries(obj);
    console.log('Object.entries()-->', entries)

    let keys = Object.keys(obj);
    console.log('Object.keys()-->', keys)

    let values = Object.values(obj);
    console.log('Object.values()-->', values)


Object.entrires //可以将对象转换为数组
Object.fromEntries //可以将数组转换为对象 -->数组格式：[[key,val],[key1,val1]]
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


>
    let obj = {
      a: 20,
      b: 22
    }
  
    var arr = Object.entrires(obj) //[[a,20],[b,22]]
    Object.fromEntries(arr) //{a: 20,b: 22}

>  
    // 
    var {a,b,...obj} = {
      d: 'd',
      e: 'e',
      a: 1,
      b: 2,
      c: 3
    }
    console.log(a,b)// 1 2
    console.log(obj)//{d: "d", e: "e", c: 3}

    // 交换两个变量的值
    var a = 20, b = 30;
    a ^= b;
    b ^= a;
    a ^= b;

    [a,b]=[b,a]

## <a name="Object.getOwnPropertyNames()">Object.getOwnPropertyNames()</a>
返回一个数组，包含对象自身的所有属性（包括不可枚举属性,不含 Symbol 属性）的键名


## <a name="#Object.getOwnPropertySymbols()">#Object.getOwnPropertySymbols()</a>
返回一个数组，包含对象自身的所有 Symbol 属性的键名。

## <a name="Reflect.ownKeys()">Reflect.ownKeys()</a>
返回一个数组，包含对象自身的所有键名，(包括Symbol、不可枚举属性)


## <a name=""></a>
## <a name=""></a>