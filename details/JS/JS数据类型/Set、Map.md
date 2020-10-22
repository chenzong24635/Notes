# Set（集合）

ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。  
Set本身是一个构造函数，用来生成 Set 数据结构。  
Set接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。  
>new Set() // ok
>new Set([]) // ok
>new Set({}) // eror!!!
>new Set(4) // eror!!!

### 特点：
* 成员唯一，不能重复
  >不会发生类型转换，所以5和"5"是两个不同的值  
  >NaN是相等的  
  >对象总是不相等的  

* [value, value]，只有键值，没有键名，有点类似数组。

* 可以遍历(遍历方法：keys(),values(),entries(),forEach())
  ```js
  for (let value of new Set(['a','b']).values()) {
    console.log(value);
  } 
  ```

### 方法：
* add 添加某个值，返回 Set 结构本身  
* delete  删除某个值，返回一个布尔值，表示删除是否成功  
* has  返回一个布尔值，表示该值是否为Set的成员  
* clear 清除所有成员，没有返回值  

### 属性：
* size 实例的成员总数 

### 例
```js
let set = new Set();
let obj = {a:1}
set.add(obj);
set.size // 1
set.has(obj) // true
set.delete(obj)
set.has(obj) // false
```

# WeakSet
WeakSet 结构与 Set 类似，也是不重复的值的集合。
>区别：只接受对象作为键名（null除外）；成员都是弱引用 即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

### 特点：
* 成员唯一，不能重复且都是对象（null除外）

* 只有键值，没有键名，有点类似数组。

* 成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏

* 不能遍历，

### 方法：
  >add  添加某个值(接受具有 Iterable 接口的对象)，返回 WeakSet 结构本身  
  >delete  删除某个值，返回一个布尔值，表示删除是否成功  
  >has 返回一个布尔值，表示该值是否为WeakSet的成员  
  >没有clear方法

### 属性：
* 没有size属性

### 例
```js
let weakset = new WeakSet();
weakset.add({});
// 只能添加引用类型，否则报错
weakset.add(0); // Uncaught TypeError: Invalid value used in weak set
// 没有clear方法
weakset.clear(); // Uncaught TypeError: weakset.clear is not a function
weakset.size // undefined
```


# Map(字典)
Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应


### 特点：
* [key, value]，本质上是键值对的集合，类似Set  
  >任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数（Set和Map都可以用来生成新的 Map)  

* 可以遍历(遍历方法：keys(),values(),entries(),forEach())

### 方法：
* set 添加、修改成员(如果对同一个键多次赋值，后面的值将覆盖前面的值)，可以采用链式写法  
* get 获取成员  
* delete  删除某个值，返回一个布尔值，表示删除是否成功  
* has 返回一个布尔值，表示该值是否为WeakSet的成员  
* clear 清除所有成员，没有返回值 

### 属性：
* size 返回 Map 结构的成员总数

### 例
```js
const m = new Map();
const o = {a: 'a1'};

m.set(o, 'content').set('b','b1')
m.get(o) // "content"

[...m] // [[{a:'a1'},'o1'],["b", "b1"]]

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

```js
//将set对象作为map参数
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m = new Map(set);
m.get('foo') // 1
```

# weakMap
WeakMap结构与Map结构类似，也是用于生成键值对的集合。
>区别：只接受对象作为键名（null除外）；成员都是弱引用 即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

### 特点：

* 只接受对象作为键名（null除外），不接受其他类型的值作为键名

* 成员都是弱引用,，随时可以消失,键名所指向的对象，不计入垃圾回收机制

* 不能遍历，

### 方法
* set
* get
* has
* delete
* 无clear()方法

### 属性：
* 没有size属性
