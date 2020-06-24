[文档-中](https://react.docschina.org/docs/hello-world.html)

[文档-英](https://reactjs.org/docs/hello-world.html)

## 安装

* npm i -g create-react-app // create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。
* npx create-react-app react-demo // 创建项目
* cd react-demo 
* npm start

create-react-app 创建项目很慢

* npm config set registry https://registry.npm.taobao.org // 修改npm安装资源为淘宝的资源
* npm config get registry // 查看是否设置成功
* create-react-app my-app 


## 生命周期
* componentWillMount 在渲染前调用,在客户端也在服务端。

* componentDidMount 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构

* componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

* shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。

* componentWillUpdate 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

* componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

* componentWillUnmount 在组件从 DOM 中移除之前立刻被调用。

## JSX
React 使用 JSX 来替代常规的 JavaScript。
JSX 是一个 JavaScript 语法扩展。

我们不需要一定使用 JSX，但它有以下优点：
* JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
* 它是类型安全的，在编译过程中就能发现错误。
* 使用 JSX 编写模板更加简单快速。
* 
JSX 防止注入攻击,React DOM 在渲染所有输入内容之前，默认会进行转义

### JSX用法
##### 表达式写在花括号 {} 中  
> JSX中不能使用 if else 语句，可使用三元表达式替代
```jsx
{1+1}
{true?1:0}
```

##### 注释也要写在花括号 {} 中  
```jsx
{/*注释...*/}
```

##### 在模板中插入数组，数组会自动展开所有成员
```js
let arr = [1,2,3]

<p>{arr}</p>

<p>{[1,2,3]}</p>
```
##### 标签添加属性 -- 使用 camelCase 语法
JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

```js
let myId = "id0"
<p 
  id={myId+' id1'}
  className="class1"
  onClick={()=>{console.log('click');}}
> 
```

##### 样式,React 推荐使用内联样式
```jsx
let myStyle = {
  fontSize: 100,
  color: '#FF0000'
};

<h1 style = {myStyle}>h1</h1>
```



## 组件: 组件命名必须大写字母开头，否则报错

使用函数定义一个组件
```js
function Hello() {
  return <h1>Hello World!</h1>;
}
```
或者使用 class 定义一个组件
```js

class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```
组件使用： `<Hello />`

## props使用

函数组件的props使用
```js
function Hello(props) {
  return <h1>{props.title}</h1>;
}
```

class 组件的props使用
```js
class Hello extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.title = props.title
  // }
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```
组件使用： `<Hello title="标题" />`

## 状态
```js
import React,{useState} from 'react';

```