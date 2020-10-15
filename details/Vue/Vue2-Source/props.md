为什么给组件绑定属性，组件就能获取数据
<my a=1 b=2 />


```js
// vdom/create-component.js
// 获取 props 数据
propsData = extractPropsFromVNodeData(data,Ctor,tag)

const vnode =new VNode(
  ...
  {Ctor,propsData,listeners,tag,children}
)


// core/instance/init.js
// 初始化内部组件
initInternalComponent(vm,options){
  opts.propsData =vnodeComponentOptions.propsData //属性放在实例上
}


// core/instance/state.js
initProps
```

绑定的方法
```js
<my @click="fn"  />
my.$on('click',fn)
my.$emit('click')
// vdom/create-component.js

listeners = data.on // 事件相关

const vnode =new VNode(
  ...
  {Ctor,propsData,listeners,tag,children}
)


// core/instance/init.js
// 初始化内部组件
initInternalComponent(vm,options){
  opts.parentListeners =vnodeComponentOptions.listeners 事件合并
}


// core/instance/events.js
initEvents // 更新组件事件
```
