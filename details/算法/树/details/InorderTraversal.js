// 中序遍历

// 递归
inorderTraversal(callback) {
  function reversal(node) {
    if(node === null)return
    reversal(node.left)
    callback(node)
    reversal(node.right)
  }
  reversal(node)
}