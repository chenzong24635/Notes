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

>
    let proxy = new Proxy({}, {
      get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
      }
    });