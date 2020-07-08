[你不知道的 JSON.stringify() 的威力](https://juejin.im/post/5decf09de51d45584d238319)

### 定义:

JavaScript 对象表示法（JavaScript Object Notation）
是轻量级的文本数据交换格式,用于存储和交换文本数据领域，与xml类似但比xml更简洁，更快，更易解析
JSON 的网络媒体类型是 application/json。

### 相比XML，JSON的优势如下：  
* 没有结束标签，长度更短，读写更快  
* 能够直接被 JavaScript 解释器解析  
* 可以使用数组

### 两种数据结构：1.无序的对象结构；2.有序的数组结构

>
    {
      "name": "a",
      "friends": ["b", "c"]
    }

    [
      {a:1},{b:2}
    ]

### 方法：  

* JSON.parse(json, replacer)  //把json解析为javascript对象  
>第二个参数，是一个函数(key, value)=>{}。此函数有两个参数：key 和 value，分别代表键和值。当传入一个 JSON 字符串后，JSON 的每一组键/值对都要调用此函数。该函数有返回值，返回值将赋值给当前的键key。
```
JSON.parse('{"a":1,"b":2}', (key,value)=>console.log(key,value))

输出：
a 1
b 2
```

* JSON.stringify(obj, replacer, space) //把javascript对象转换为JSON字符串  
>第二个参数（数组形式| 函数） 

>>数组形式：指定需要转成字符串的属性，只对对象的属性有效，对数组无效。
  ```
  JSON.stringify({"a":1,"b":2},['a'])

  输出：
  "{"a":1}"
```

>>函数：(key, value)=>{},每一组键/值对都会调用此函数，该函数返回一个值，作为键的值变换到结果字符串中，如果返回 undefined，则该成员被忽略。
```
JSON.stringify({"a":1,"b":2}, (key, value) => {
  console.log('key:',key);
  console.log('value:',value);
  return value;
})
// "{"a":1,"b":2}"

输出：
// 第一个参数不是对象的第一个键值对，而是空字符串作为 key 值，value 值是整个对象的键值对：
key: 
value: {a: 1, b: 2}
key: a
value: 1
key: b
value: 2


```

>space第三个参数（数字| 字符串），用于增加返回的JSON字符串的可读性。
>>数字：表示每个属性前面添加的空格（最多不超过10个）；  
>>字符串：（不超过10个字符），该字符串会添加在每行前面。  