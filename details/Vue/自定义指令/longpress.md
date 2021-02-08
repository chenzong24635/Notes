```js
/**
 * 思路:
 * 创建一个计时器， 一定时间后执行函数
 * 当用户按下按钮时触发 mousedown 事件，启动计时器；用户松开按钮时调用 mouseout 事件。
 * 如果 mouseup 事件 一定时间内被触发，就清除计时器，当作一个普通的点击事件
 * 如果计时器没有在 一定时间内清除，则判定为一次长按，可以执行关联的函数。
 * 在移动端要考虑 touchstart，touchend 事件
 */
export default {
    bind: function(el, binding) {
        let duration = binding.arg && Number(binding.arg) || 2000;
        console.log(binding, duration);
        // 指令必须绑定方法
        if (typeof binding.value !== 'function') {
            throw 'callback must be a function'
        }
        // 定义变量
        let pressTimer = null
            // 创建计时器（ duration 秒后执行函数 ）
        let start = (e) => {
                if (e.type === 'click' && e.button !== 0) {
                    return
                }
                if (pressTimer === null) {
                    pressTimer = setTimeout(() => {
                        handler()
                    }, duration)
                }
            }
            // 取消计时器
        let cancel = () => {
                if (pressTimer !== null) {
                    clearTimeout(pressTimer)
                    pressTimer = null
                }
            }
            // 运行函数
        const handler = (e) => {
                binding.value(e)
            }
            // 添加事件监听器
        el.addEventListener('mousedown', start)
        el.addEventListener('touchstart', start)
            // 取消计时器
        el.addEventListener('click', cancel)
        el.addEventListener('mouseout', cancel)
        el.addEventListener('touchend', cancel)
        el.addEventListener('touchcancel', cancel)
    },
    // 当传进来的值更新的时候触发
    componentUpdated(el, { value }) {
        el.$value = value
    },
    // 指令与元素解绑的时候，移除事件绑定
    unbind(el) {
        el.removeEventListener('click', el.handler)
    },
}
```

```html
<button v-longpress:3000="longpress">长按</button>
```