<a id="top"></a>


* <a href="#ref和reactive区别">ref和reactive区别</a>  

# <a name="ref和reactive区别">ref和reactive区别</a>[![bakTop](/img/backward.png)](#top)  

* ref内部使用defineProperty,reactive使用proxy
* ref一般对基本类型，reactive对引用类型
  
# 
vue2和vue3的computed不一样，
vue3的computed会收集依赖  

# 
setup返回函数代表render,返回对象就是data数据
```js

setup(props,context) {
  return ()=> {
    return h('div',{style:{color:'red'}},'hello world')
  }
}

// 等同于
render (proxy) {
  return h('div',{style:{color:'red'}},'hello world')
}
```