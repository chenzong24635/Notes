// 层级遍历


// 迭代，通过队列结构 遍历树
levelorderTraversal(callback) {
  let queue = [this.root]
  // [10]
  while(queue.length) {
    let node = queue.shift()
    callback(node)
    if(node.left !== null) {
      queue.push(node.left)
    }
    if(node.right !== null) {
      queue.push(node.right)
    }
    // 10 [8,19]
    // 10 8[19,6]
    // 10 8 19[6,15,22]
    // 10 8 19 6[15,22]
    // 10 8 19 6 15[22]
    // 10 8 19 6 15 22[20]
    // 10 8 19 6 15 22 20[]
  }
} 