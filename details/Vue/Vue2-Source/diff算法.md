https://segmentfault.com/a/1190000010090659

https://juejin.im/post/5eb3b77c6fb9a0436b221e2f

## 了解


diff 算法是一种通过同层的树节点进行比较的高效算法，避免了对树进行逐层搜索遍历，所以时间复杂度只有 O(n)。

diff 算法有两个比较显著的特点：
* 比较只会在同层级进行, 不会跨层级比较。
* 在 diff 比较的过程中，循环从两边向中间收拢。

只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。

Vue2的核心Diff算法采用了双端比较的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。相比React的Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

## 源码路径 \src\core\vdom\patch.js
在 patch.js 中 createPatchFunction 定义了一系列的辅助方法，最终返回了一个 patch 方法，
这个方法就赋值给了 vm._update 函数里调用的 \vm.__patch__

patch比较新旧节点：
* 如果新节点不存在，旧节点存在，则删除
* 如果新节点存在，旧节点存在，则创建
* 如果新节点存在，旧节点存在，则 进行 diff 操作


diff算法有以下过程：

* 同级比较，再比较子节点
* 先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
* 比较都有子节点的情况(核心diff)
* 递归比较子节点

主要是子节点比较 updateChildren 
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
      // 生成一个哈希表，key是旧VNode的key，值是该VNode在旧VNode中索引
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
```
updateChildren：
* 新旧children 的开头相同
* 新旧children 的结尾相同
* 旧children 的开头与新children的结尾相同 （元素从开头移到末尾，表示：先shift()，再将其push(),）
* 旧children 的结尾与新children的开头，相同 （元素从末尾移到开头，表示：先pop()，再将其unshift()）
* 都不是，则

首先定义了新旧节点的开始/结束的索引/节点，
![](/img/Vue/diff/1.png)

开始一个while 循环，在这过程中，oldStartIdx 、newStartIdx、oldEndIdx 以及 newEndIdx 会逐渐向中间靠拢。