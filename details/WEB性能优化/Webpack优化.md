
* url-loader设置limit：文件小于 一定字节时，返回 base64 编码
* 缓存性能开销较大的 loader: cache-loader
* CSS压缩: optimize-css-assets-webpack-plugin
* JS压缩: terser-webpack-glugin
* CSS tree shaking: purifycss-webpack
* JS tree shaking: 
* gzip压缩: compression-webpack-plugin
* 提取公共代码 SplitChunksPlugin
* CDN
* 开启多进程Loader转换: HappyPack
* 分析打包依赖体积：webpack-bundle-analyzer
* 测量打包构建时间：speed-measure-webpack-plugin