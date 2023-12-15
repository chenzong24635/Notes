## 关于
[Nuxt官网](https://zh.nuxtjs.org/guide)

一个基于 Vue.js 的服务端渲染应用框架，Nuxt.js 预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置。

* npx create-nuxt-app <project-name>

## 配置全局 less
* npm i @nuxtjs/style-resources -D // 安装style-resources
* npm i less-loader less -D // 安装less

// nuxt.config.js
```js
module.exports = {
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    less: [
      '@/assets/css/main.less'
    ],
  },
}

```