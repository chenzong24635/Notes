// 后续遍历

// 递归
postorderTraversal(callback) {
  function reversal(node) {
    if(node === null)return
    reversal(node.left)
    reversal(node.right)
    callback(node)
  }
  reversal(node)
}