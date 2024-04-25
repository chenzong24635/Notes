
## Class 与 Style 绑定

对于只有一个根元素的组件，当你使用了 class attribute 时，这些 class 会被添加到根元素上并与该元素上已有的 class 合并。
```html
<!-- 子组件模板 -->
<template>
  <p class="foo bar">Hi!</p>
</template>

<!-- 在使用组件时 -->
<MyComponent class="baz boo" />

<!-- 渲染出的 HTML 为： -->
<p class="foo bar baz boo">Hi!</p>
```


如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 $attrs 属性来指定接收的元素：
```html
<!-- 子组件模板 模板使用 $attrs 时 -->
<template>
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
</template>

<!-- 在使用组件时 -->
<MyComponent class="baz" />

<!-- 渲染出的 HTML 为： -->
<p class="baz">Hi!</p>
<span>This is a child component</span>
```

## 依赖注入和响应式数据配合使用

有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数：
```html
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
```

```html
<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```


最后，如果你想确保提供的数据不能被注入方的组件更改，你可以使用 readonly() 来包装提供的值。

```html
<script setup>
import { ref, provide, readonly } from 'vue'

const count = ref(0)
provide('read-only-count', readonly(count))
</script>
```