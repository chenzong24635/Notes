# [proxy](http://es6.ruanyifeng.com/#docs/proxy)

Proxy用于修改某些操作的默认行为，也可以理解为在目标对象之前架设一层拦截，外部所有的访问都必须先通过这层拦截，因此提供了一种机制，可以对外部的访问进行过滤和修改。这个词的原理为代理，在这里可以表示由它来“代理”某些操作，译为“代理器”。

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例:
>
    new Proxy(target, handler);
>Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。  
>new Proxy()表示生成一个Proxy实例，  
>target参数表示所要拦截的目标对象，  
>handler参数是个配置对象，用来定制拦截行为。
>>若handler是一个空对象，没有任何拦截效果，访问proxy就等同于访问target。


```js
let target = {};
let proxy = new Proxy(target, {});
proxy.name = 'A';
console.log(proxy.name, target.name);
target.age = 12;
console.log(proxy.age, target.age);
```   

# Proxy 支持的拦截操作一览，一共 13 种：

### get(target, key, receiver)
拦截对象属性的读取

>target: 目标对象  
>key：要读取的键(字符串或者Symbol类型)   
>receiver：操作的对象( Proxy 实例本身)


### set(target, key, value, receiver)
拦截对象属性的设置

>target: 目标对象
>key：要写入的键
>value：被写入值
>receiver：操作的对象

* has(target, key)
拦截 in操作符 的操作，返回一个布尔值

>target: 目标对象
>key: 要检查的键

### deleteProperty(target, key)
拦截delete proxy[key]的操作，返回一个布尔值

### defineProperty(target, key, descriptor)
拦截Object.defineProperty(proxy, key,descriptor)、Object.defineProperties(proxy, descriptor)，返回一个布尔值。
>参数：

### getPrototypeOf(target)
拦截Object.getPrototypeOf(proxy)，返回一个对象


### setPrototypeOf(target, proto)
拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。


### ownKeys(target)
拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
>参数：目标对象

### getOwnPropertyDescriptor(target, key)
拦截Object.getOwnPropertyDescriptor(proxy, key)，返回属性的描述对象。
>参数：目标对象、需查询的属性名


### preventExtensions(target)
拦截Object.preventExtensions(proxy)，返回一个布尔值。


### isExtensible(target)
拦截Object.isExtensible(proxy)，返回一个布尔值。


### apply(target, object, args)
拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
>参数：目标对象、目标对象的上下文对象（this）和目标对象的参数数组。

### construct(target, args)
拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)

```js
let proxy = new Proxy({}, {
  get(target, key, receiver) {
    console.log(`getting--> ${key},值:${target[key]}`);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`setting--> ${key},值:${value}`);
    return Reflect.set(target, key, value, receiver);
  },
  has(target, key) {
    return Reflect.has(target, key);
  },
  deleteProperty(target, key) {
    return Reflect.deleteProperty(target, key);
  },
  setPrototypeOf(target, value){
    console.log(target,value);
    return Reflect.setPrototypeOf(target, value);
  },
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => {
      // 排除属性开头带有_的键
      return typeof key !== 'string' || key[0] !== '_'
    })
  },
});
proxy.a = 42;
proxy.c = 'c';
proxy.a;
console.log('a' in proxy);
console.log('b' in proxy);
console.log(delete proxy.a);

// Object.setPrototypeOf(proxy)
```
