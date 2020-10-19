
```js
// src\platforms\web\compiler\directives\model.js

export default function model (
  el: ASTElement,
  dir: ASTDirective,
  _warn: Function
): ?boolean {
  warn = _warn
  const value = dir.value
  const modifiers = dir.modifiers
  const tag = el.tag
  const type = el.attrsMap.type

  ...

  if (el.component) {
    // 自定义组件上的 v-model无需编译
    genComponentModel(el, value, modifiers)
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    // 定义在 select 上的v-model
    genSelect(el, value, modifiers)
  } else if (tag === 'input' && type === 'checkbox') {
    // 定义在 input上 type为checkbox 上的v-model
    genCheckboxModel(el, value, modifiers)
  } else if (tag === 'input' && type === 'radio') {
    // 定义在 input上 type为radio 上的v-model
    genRadioModel(el, value, modifiers)
  } else if (tag === 'input' || tag === 'textarea') {
    // 定义在 input上 type为text或textarea 上的v-model
    genDefaultModel(el, value, modifiers)
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers)
    // component v-model doesn't need extra runtime
    return false
  }
  ...
  // ensure runtime directive metadata
  return true
}
```


```js
function genDefaultModel (
  el: ASTElement,
  value: string,
  modifiers: ?ASTModifiers
): ?boolean {
  const type = el.attrsMap.type

  ...
  // 修饰符
  const { lazy, number, trim } = modifiers || {}
  const needCompositionGuard = !lazy && type !== 'range'
  // 存在 lazy 修饰符时，事件类型为 change
  // 否则 除非 type设为range，则事件类型为 input
  const event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input'

  // 获取值的表达式
  let valueExpression = '$event.target.value'
  // 去除两侧空格
  if (trim) {
    valueExpression = `$event.target.value.trim()`
  }
  // _n： toNumber方法
  if (number) {
    valueExpression = `_n(${valueExpression})`
  }
  // 跨平台代码生成辅助程序，用于生成v型值分配代码
  let code = genAssignmentCode(value, valueExpression)
  if (needCompositionGuard) {
    code = `if($event.target.composing)return;${code}`
  }

  addProp(el, 'value', `(${value})`)
  addHandler(el, event, code, null, true)
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()')
  }
}
```