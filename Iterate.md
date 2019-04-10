<a href="#遍历方法">**遍历方法**</a>

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

## for...in --遍历对象
>
    1.遍历的是索引（即键名）
    2.遍历顺序有可能不是按照实际数组的内部顺序
    3.for in环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
for in更适合遍历对象，不要使用for in遍历数组。

    for (index in arr) { 
      if（myObject.hasOwnProperty(index)){ //判断某属性是否是该对象的实例属性
　　　　console.log(index);
　　  }
      console.log('index:', index, ';item:', arr[index]);
    }

## for...of
for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name

    for (item of arr) {
      console.log('item:', item);
    }

## reduce((sum, item, index, array) => {}) 
    //接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值，// reduceRight() (从右到左)
    //  Accumulator (acc) (累计器 累计回调的返回值; 它是上一次调用回调时返回的累积值)
    //  Current Value (cur) (当前值)
    //  Current Index (idx) (当前索引)
    //  Source Array (src) (源数组)
    let reduce = arr.reduce((sum, item, index, array) => {
      sum += index
      console.log('reduce()-->', '累计器', sum, ';index:', index, ';item:', item, '源数组:', array);
      return sum
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

## map()
    arr.map((item, index) => {
      console.log('map()-->', 'index:', index, ';item:', item)
    });


## forEach((item, index, array) => {})遍历所有值并忽略回调函数的返回值 --- 改变原数组
    // 	item--正在数组中处理的当前元素的值
    // 	index--数组中正在处理的元素的索引
    // 	array--源数组
    //  break不能中断其循环，使用return也不能返回到外层函数。
    arr.forEach((item, index, array) => {
      console.log('forEach()-->', 'index:', index, ';item:', item, '源数组:', array)
    });

## every(),some(),filter()
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

## entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象
    for (let [index, item] of arr.entries()) {
      console.log('entries()-->','index:', index, ';item:', item);
    }
    for (let index of arr.values()) {
      console.log('.values()-->', 'index:', index);
    }
    for (let item of arr.keys()) {
      console.log('.keys()-->', 'item:', item);
    }

  
## Object.keys(obj)、Object.keys(obj)、Object.keys(obj)
#### 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键值对数组、键名、键值。  
    let entries = Object.entries(arr);
    console.log('Object.entries()-->', entries)

    let keys = Object.keys(arr);
    console.log('Object.keys()-->', keys)

    let values = Object.values(arr);
    console.log('Object.values()-->', values)

    // 删除变量
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

## <a name=""></a>
## <a name=""></a>
## <a name=""></a>