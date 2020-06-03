// 分别暴露
export function foo1() {
  console.log('foo1() module1')
}
export function bar1() {
  console.log('bar1() module1')
}
export function add1(num1, num2) {
  let num = num1 + num2
  console.log('add1', num)
}