https://segmentfault.com/a/1190000010090659

https://juejin.im/post/5eb3b77c6fb9a0436b221e2f

## 了解


diff 算法是一种通过同层的树节点进行比较的高效算法，避免了对树进行逐层搜索遍历，所以时间复杂度只有 O(n)。

diff 算法有两个比较显著的特点：
* 比较只会在同层级进行, 不会跨层级比较（同级比较）。
* 在 diff 比较的过程中，循环从两边向中间收拢（双指针）。


Vue2的核心Diff算法采用了双端比较的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。相比React的Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

## 源码路径 \src\core\vdom\patch.js
在 patch.js 中 createPatchFunction 定义了一系列的辅助方法，最终返回了一个 patch 方法，
这个方法就赋值给了 vm._update 函数里调用的 \vm.__patch__

patch比较新旧节点：
* 如果新节点不存在，旧节点存在，则删除
* 如果新节点存在，旧节点存在，则创建
* 如果新节点存在，旧节点存在，则 进行 diff 操作（patchVnode）


```js
// 比较新旧节点
  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    // 新旧节点相同，则不操作，直接返回
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode)
    }

    // 复用老元素
    const elm = vnode.elm = oldVnode.elm

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
      } else {
        vnode.isAsyncPlaceholder = true
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    /**
     * 如果新旧vnode都是静态
     * 且key相同（代表同一节点）
     * 且新vnode是克隆的 或 标记了 once（标记v-once属性，表示只渲染一次）
     * 那么只需替换 componentInstance 即可
     */
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance
      return
    }

    // 如果存在 data.hook.prepatch 则先执行
    let i
    const data = vnode.data
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode)
    }

    const oldCh = oldVnode.children // 旧节点的children
    const ch = vnode.children // 新节点的children
    //执行属性，事件，样式等更新操作
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
      if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)
    }

    // 开始判断vnode的子节点的各种情况

    // 如果vnode不是text文本
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        // 新旧 vnode 的 children 均存在
        // 且不相同,则对 children 进行 diff 操作
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
      } else if (isDef(ch)) {
        // 新vnode存在，旧vnode不存在children
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch)
        }
        // 清空文本内容，（如果旧oldVnode存在文本，先清空）
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
        // 加入 子节点
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      } else if (isDef(oldCh)) {
        // 新vnode不存在，旧vnode存在children
        // 则移除 所有子节点
        removeVnodes(oldCh, 0, oldCh.length - 1)
      } else if (isDef(oldVnode.text)) {
        // 新旧vnode都无 children 时，只是文本替换，
        // 而此时已知新 vnode 并无 text 文本，旧vnode存在 text 文本
        // 则清空文本内容
        nodeOps.setTextContent(elm, '')
      }
    } else if (oldVnode.text !== vnode.text) {
      // 如果新vnode是text文本，但与旧vnode不同，则直接替换文本
      nodeOps.setTextContent(elm, vnode.text)
    }
    //调用postpatch钩子
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode)
    }
  }
```

diff算法（patchVnode）有以下过程：（同级比较，再比较子节点）
* 新旧节点相同，则不操作，直接返回（新vnode，旧oldVnode）
* 如果 vnode 是text文本，但与 oldVnode 文本内容不同（或 oldVnode 不是文本），则直接替换文本
* 如果 vnode 不是text文本，则对子节点 children 进行对比 （oldCh = oldVnode.children，ch = vnode.children）
* 如果仅 ch 存在，则 addVnodes 添加 ch （如果 oldVnode 存在文本，先清空）
* 如果仅 oldCh 存在，则 removeVnodes 删除 oldCh
* 如果 ch oldCH 都存在，则进行比较（updateChildren） (核心diff)
* 递归比较子节点

子节点比较方法 updateChildren 
```js
// 对新旧两个VNode的children得出最小操作补丁
function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
  let oldStartIdx = 0 // 旧节点 开始下标
  let newStartIdx = 0 // 新节点 开始下标
  let oldEndIdx = oldCh.length - 1 // 旧节点 结束下标
  let oldStartVnode = oldCh[0] // 旧节点 开始节点
  let oldEndVnode = oldCh[oldEndIdx] // 旧节点 结束节点
  let newEndIdx = newCh.length - 1 // 新节点 结束下标
  let newStartVnode = newCh[0] // 新节点 开始节点
  let newEndVnode = newCh[newEndIdx] // 新节点 结束节点
  let oldKeyToIdx, idxInOld, vnodeToMove, refElm

  // removeOnly is a special flag used only by <transition-group>
  // to ensure removed elements stay in correct relative positions
  // during leaving transitions
  // 确保移除元素在过度动画过程中待在正确的相对位置，仅用于<transition-group>
  const canMove = !removeOnly

  if (process.env.NODE_ENV !== 'production') {
    checkDuplicateKeys(newCh)
  }

  // 在新旧两组VNode节点的左右头尾两侧都有一个变量标记，在遍历过程中这几个变量都会向中间靠拢。
  // 当oldStartIdx > oldEndIdx或者newStartIdx > newEndIdx时结束循环。
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {

    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx]

    }
    // 分别比较oldCh以及newCh的两头节点4种情况，为同一个VNode，则直接patchVnode
    else if (sameVnode(oldStartVnode, newStartVnode)) {
      //新旧children 的开头，相同
      // 继续patch（更新属性和递归比较子节点等）
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      //新旧children 的结尾，相同
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
      //旧children 的开头与新children的结尾，相同 （表示：先shift()，再将其push()）
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
      //旧children 的结尾与新children的开头，相同 （表示：先pop()，再将其unshift()）
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 生成一个映射表，key是 oldVNode 的key,index是索引
      /* 
        oldVNode [A,B,C,D] ==> {A: 0,B:1,C:2,D:3} 
        vnode  [B,E,A,Q] 找到B，A可以复用
       */
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      // 如果newStartVnode存在key且这个key在oldVnode中能找到则返回这个节点的索引
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
      if (isUndef(idxInOld)) { // New element
        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
      } else {
        //如果以上情况均不符合，则在old VNode中找与newStartVnode满足sameVnode的vnodeToMove，
        vnodeToMove = oldCh[idxInOld]
        // 若存在执行 patchVnode，同时将vnodeToMove对应DOM移动到oldStartVnode对应的DOM的前⾯。
        if (sameVnode(vnodeToMove, newStartVnode)) {
          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
          oldCh[idxInOld] = undefined
          canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
        } else {
          //newStartVnode 在旧 VNode节点中找不到一致的key
          //，或者是即便key相同却不是sameVnode，
          // 这个时候会调用createElm创建一个新的DOM节点。
          // same key but different element. treat as new element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        }
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }
  // 对比结束后，判断是否还有剩余，
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx)
  }
}

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
```
updateChildren首先定义了新旧节点的开始/结束的索引/节点，
![](/img/Vue/diff/1.png)

开始一个while 循环，在这过程中，oldStartIdx 、newStartIdx、oldEndIdx 以及 newEndIdx 会逐渐向中间靠拢。


updateChildren diff：
* 新旧节点的开头相同
  >(sameVnode(oldStartVnode, newStartVnode))

* 新旧节点的结尾相同
  >(sameVnode(oldEndVnode, newEndVnode))

* 旧节点的开头与新节点的结尾相同 （元素从开头移到末尾，表示：先shift()，再将其push(),）
  >sameVnode(oldStartVnode, newEndVnode)

* 旧节点的结尾与新节点的开头，相同 （元素从末尾移到开头，表示：先pop()，再将其unshift()）
  >sameVnode(oldEndVnode, newStartVnode)

* 都不是，再把所有旧子节点的 key 做一个映射到旧节点下标的 key -> index 表，然后用新 vnode 的 key 去找出在旧节点中可以复用的位置

* 以上对比结束后，继续判断是否还有剩余，
* 剩余情况：oldStartIdx > oldEndIdx；说明旧节点都被 patch 完了，但是有可能还有新的节点没有被处理到。接着会去判断是否要新增子节点
* 否则是，新节点先patch完了，可能还有旧的节点没有被处理到。那么就会去删除多余的旧子节点。

