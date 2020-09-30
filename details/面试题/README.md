# 
## 题
实现函数，将entry转换为output的数据格

```js
const entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

// 要求转换成如下对象
const output = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }

```

```js
function transform(obj) {
  const res = {}
  for (let [key, value] of Object.entries(obj)) {
    key
      .split('.')
      .reduce((prev, cur, idx, arr) =>
        prev[cur] = prev[cur] || (arr[idx + 1] ? {} : value)
        , res)
  }
  return res
}
```


# CSS
## 重绘和重排
## 那些属性可以直接避免重绘和重排

# JS
## 常见的DOM操作
创建
* document.createDocumentFragment
* document.createElement
* document.createTextNode
* document.createAttribute
* document.createComment

获取
* document.getElementById
* document.getElementsByClassName
* document.getElementsByTagName
* document.getElementsByName

* document.querySelector
* document.querySelectorAll

* document.all
* document.documentElement
* document.body
  
添加移除
* appendChild
* removeChild
* insertChild
* replaceChild
* cloneNode

获取属性
* getAttribute
* setAttribute
* hasAttribute
* removeAttribute
* getAttributeNode
* setAttributeNode

事件
* click
* blur
* focus
* change
* mouseover  冒泡
* mouseout   冒泡
* mouseenter 不冒泡
* mouseleave 不冒泡

## 数组去重


## 深拷贝
## 深拷贝如何解决循环引用
## 垃圾回收机制
## 模块化
## treeshaking 原理
## 按需加载的原理
## 讲讲原型链
## 事件循环

# Vue
## key 值唯一
## 前端路由
## vue 和 react 的区别
## vm.$set 原理
## nextTick 原理
## vue 如何做权限检验
## 双向数据绑定原理
## diff 算法
## 虚拟 dom
## vue 如何收集依赖的
## 状态逻辑复用方案
Vue实现代码逻辑复用主要5个途径： Vuex, Mixins(混入, Vue推荐), Hooks, HOC(高阶组件, React推荐), 函数式组件
## vuex 持久化插件



# webpack 
## webpack 工作流
## webpack 是如何解决两次引入的
## webpack 你是如何做优化的

# 浏览器，HTTP
## 状态码 403 404 503 304 
##  DNS 如何进行解析

## http 缓存头部字段

## 讲讲tcp三次握手，为什么需要三次握手

## 讲讲tcp四次挥手，为什么需要四次而不是三次

## 浏览器缓存
## 浏览器渲染流程

## 输入一串 url 到浏览器，会发生什么