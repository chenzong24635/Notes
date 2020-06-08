## <a name="SVG封装">SVG封装</a>
[vue 中封装 svg-icon 组件并使用](https://www.cnblogs.com/lhjfly/p/10756650.html)
[svgo-优化 SVG 文件的 Node.js 工具](https://blog.csdn.net/qq_35366269/article/details/102716256)



src文件夹下新增  
```js
├── components    
|   |── SvgIcon  
|   |   |── index.vue
├── icons    
|   |── svg //存放 .svg 文件  
|   |── index.js //封装 svg文件夹的 .svg 文件 
|   |── svgo.yml //svgo插件配置 
```

components/SvgIcon/index.vue
```html
<template>
    <svg 
      :class="svgClass" 
      aria-hidden="true" 
      v-on="$listeners" 
      :style="{'font-size': size + 'px','fill': color}"
    >
      <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: Number,
      default: 20
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    },
    svgClass() {
      return 'svg-icon ' +   this.className
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
```


icons/index.js
```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

Vue.component('svg-icon', SvgIcon) //注册全局组件

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

npm install svgo -D  //安装svgo --用于优化SVG文件的Node.js工具  

svgo作用：  
我们从网上下载或者导出的SVG文件中包含着大量无用的信息，例如编辑源信息，注释以及其它一些不会影响渲染效果但可以去除的信息，  
通过svgo插件，将这些无用的信息进行去除，减小文件大小

[svgo 详细配置](https://github.com/svg/svgo/blob/master/README.md)

icons/svgo.yml 添加配置
```yml
# 替换默认配置
# plugins 表示配置自定义的插件
# removeAttrs 表示按模式删除属性
# 'fill' 表示移除填充属性
# multipass: true
# full: true

plugins:

  # - name
  #
  # or:
  # - name: false
  # - name: true
  #
  # or:
  # - name:
  #     param1: 1
  #     param2: 2

- removeAttrs:
    attrs:
      - 'fill'
      - 'fill-rule'
```

package.json文件中配置检测 svg 的命令
```js
"svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
```

执行 npm run svgo 命令，对指定文件下的所有.svg进行优化


main.js引入
```js
import './icons'
```

vue.config.js配置
```js
const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

chainWebpack: (config) => {
//SVG封装  
  config.plugins.delete('preload')
  config.plugins.delete('prefetch')
  config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
},
```

