# [`vuex 官网`](https://vuex.vuejs.org/zh/)

![img](/img/Vue/vuex.png)
# 基本
>
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      }
    })

# State  
## state
>
    store.state 来获取状态对象
      this.$store.state.count --> 0

    store.commit 方法触发状态变更
      this.$store.commit('increment') -->1

    通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。

>
    由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：
    computed: {
      count () {
        return this.$store.state.count
      }
    }

## mapState
>
    //获取多个状态
    import { mapState } from 'vuex'

    export default {
      computed: mapState({
        // 箭头函数可使代码更简练
        count: state => state.count,

        // 传字符串参数 'count' 等同于state => state.count
        countAlias: 'count',

        // 为了能够使用this获取局部状态，必须使用常规函数
        countPlusLocalState (state) {
          return state.count + this.localCount
        }
      })
    }

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
>
    
    computed: mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ])
    或
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        // ...
      })
    }

# Getter
## getters
当需要从state 中派生出一些状态，例如对列表进行过滤并计数 使用getter

可以认为是 store 的计算属性。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

>
    //接受 state 作为其第一个参数， getter 作为第二个参数
    const store = new Vuex.Store({
      state: {
        todos: [
          { id: 1, text: '...', done: true },
          { id: 2, text: '...', done: false }
        ]
      },
      getters: {
        doneTodos: state => { //筛选返回 done 为true的数据对象
          return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => { //获取done 为true的个数
          return getters.doneTodos.length
        }
      }
    })

## mapGetters 
将getter映射到局部计算属性   
>
    import { mapGetters } from 'vuex'

    export default {
      computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
          'doneTodosCount',
          'anotherGetter',
          // ...
        ])
      }
    }

    //将一个 getter 属性另取一个名字，使用对象形式：
    mapGetters({
      // 把 this.doneCount映射为this.$store.getters.doneTodosCount
      doneCount: 'doneTodosCount'
    })

# Mutation
## mutations
mutation是更改state的唯一方法  

每个mutation都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：

第一参数state，额外参数载荷（payload）,在大多数情况下，载荷应该是一个对象
>
    const store = new Vuex.Store({
      state: {
        count: 1
      },
      mutations: {
        increment (state,n) {
          // 变更状态
          state.count += n
        },
        increment1 (state,obj) {
          // 变更状态
          state.count += obj.n
        }
      }
    })

    //触发方式
    $store.commit('increment', 10) //载荷形式
    $store.commit('increment1', {n: 100}) //载荷形式 ，载荷为对象
    $store.commit({type: 'increment1',n: 100}) //对象形式

注意：
 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新
>
    最好提前在你的 store 中初始化好所有所需属性。

    当需要在对象上添加新属性时，你应该
        1.使用 Vue.set(obj, 'newProp', 'value')
        2.以新对象替换老对象。如：state.obj = { ...state.obj, newProp: 'value' }

      Mutation必须是同步函数 ,异步可使用Action

使用常量替代 Mutation 事件类型
>

    // mutation-types.js
    export const SOME_MUTATION = 'SOME_MUTATION' //使用常量作为Mutation 事件函数名

    // store.js
    import Vuex from 'vuex'
    import { SOME_MUTATION } from './mutation-types'

    const store = new Vuex.Store({
      state: { ... },
      mutations: {
        [SOME_MUTATION] (state) {
        }
      }
    })        


## mapMutations
>
    import { mapMutations } from 'vuex'

    export default {
      methods: {
        ...mapMutations([
          'increment', // 将this.increment()映射为this.$store.commit('increment')

          //mapMutations也支持载荷：
          'incrementBy' // 将this.incrementBy(amount)映射为this.$store.commit('incrementBy', amount)
        ]),
        ...mapMutations({
          add: 'increment' // 将this.add()映射为this.$store.commit('increment')
        })
      }
    }  

# Action
## actions
Action 提交的是 mutation，而不是直接变更状态。  
Action 可以包含任意异步操作  
通过 context.state 和 context.getters 来获取 state 和 getters  
通过 context.commit 提交一个 mutation  
通过 store.dispatch 方法触发：store.dispatch('increment')

>
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      },
      actions: {
        increment (context) {
          context.commit('increment')
        },
        increment1 ({ commit }) { //使用参数解构来简化代码
          setTimeout(() => { // 异步操作
            commit('increment')
          }, 1000)
        }
      }
    })  

触发方法同mutation
>
    // 以载荷形式
    store.dispatch('incrementAsync', {
      amount: 10
    })

    // 以对象形式
    store.dispatch({
      type: 'incrementAsync',
      amount: 10
    })

## mapActions
同mapMutations

## 组合 Action
store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：  
>
    store.dispatch('actionA').then(() => {
      // ...
    })

    actions: {
      // ...
      actionB ({ dispatch, commit }) {
        return dispatch('actionA').then(() => {
          commit('someOtherMutation')
        })
      }
    }
一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。

>
    // 假设 getData() 和 getOtherData() 返回的是 Promise

    actions: {
      async actionA ({ commit }) {
        commit('gotData', await getData())
      },
      async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
      }
}


# Module

将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

moduleA.js
```js
const state = {
  info: {
    name: 'moduleA---',
    age: 11
  },
}
const getters = {
  getName: state => {
    return '我是A模块的name，我叫'+state.info.name
  }
}
const mutations = {
  setName(state, payload){
    state.info.name = payload
  }
}
const actions = {
  setNameAsync({commit}, payload){
    commit.setName(payload)
  }
}

export default {
  namespaced: true, // 解决不同模块命名冲突的问题
  state,
  getters,
  mutations,
  actions
}
```

index.js引入 moduleA 模块
```js
import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleA
  }
})
```

使用
1. this.$store调用
```js
this.$store.state.moduleA.info.name
this.$store.getters["moduleA/getName"]
this.$store.commit('moduleA/setName','newName')
```

2. mapState、mapMutations等调用
```js
...mapState({
  name: state=>state.moduleA.info.name
})

...mapMutations(['moduleA/setName'])
this['moduleA/setName']('newName')

// 或者
...mapMutations({
  setName:'moduleA/setName'
})
this.setName('newName')

// 或者
...mapMutations('moduleA',[
  'setName'
])
this.setName('newName')
```

3. 通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。
```js
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('moduleA')
...mapState({
  name: state=>state.info.name
})

...mapMutations([
  'setName'
])
this.setName('newName')
```


# 
## 为什么 Vuex 的 mutation 中不能做异步操作？

Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

[参考尤大回答](https://www.zhihu.com/question/48759748/answer/112823337)