[文档-中](https://react.docschina.org/docs/hello-world.html)

[文档-英](https://reactjs.org/docs/hello-world.html)
# React
React 是一个用于构建用户界面的JavaScript库 核心专注于视图,目的实现组件化开发
## 安装

* npm i -g create-react-app // create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

* npm config set registry https://registry.npm.taobao.org // 修改npm安装资源为淘宝的资源
* npm config get registry // 查看是否设置成功
* create-react-app my-app // 创建项目
* cd react-demo 
* npm start



## JSX
[JSX](/details\React\JSX.md)
## 组件,props 
* React元素不但可以是DOM标签，还可以是用户自定义的组件
* 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 props
* 组件名称必须以大写字母开头
* 组件必须在使用的时候定义或引用它
* 组件的返回值只能有一个根元素

### 函数组件
```js
function Hello(props) {
  return <h1>{props.name} -- Hello World!</h1>;
}
ReactDOM.render(
  <Hello name="tom" />,
  document.getElementById('root')
)
```

### class 组件
```js

class Hello extends React.Component {
  render() {
    return <h1>{this.props.name} -- Hello World!</h1>;
  }
}
ReactDOM.render(<Hello name="tom" />,document.getElementById('root'))
```

### 渲染组件
React 元素也可以是用户自定义的组件：

`const element = <Welcome name="Sara" />;`

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

例如，这段代码会在页面上渲染 “Hello, Sara”：
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
## 状态
```js
import React,{useState} from 'react';

```

## 生命周期
![旧版](/img/React/react15.jpg)

![新版](/img/React/react16.jpg)


* componentWillMount 在渲染前调用,在客户端也在服务端。

* componentDidMount 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构

* componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

* shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。

* componentWillUpdate 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

* componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

* componentWillUnmount 在组件从 DOM 中移除之前立刻被调用。