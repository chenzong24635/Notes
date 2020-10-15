体积优化
* HTML压缩：html-webpack-plugin
* CSS提取： mini-css-extract-plugin
* CSS压缩： optimize-css-assets-webpack-plugin
* JS压缩: terser-webpack-plugin（Webpack4.0 默认安装）
* gzip压缩: compression-webpack-plugin
* CSS tree shaking: purifycss-webpack
* JS tree shaking: （production模式自动开启(webpack4限EsModule;webpack5不限EsModule,CommonJs）
* 提取公共代码 SplitChunksPlugin
* url-loader设置limit：文件小于 一定字节时，返回 base64 编码

打包速度优化
* CDN
* 缓存性能开销较大的 loader: cache-loader
* 开启多进程Loader转换: HappyPack
* 分析打包依赖体积：webpack-bundle-analyzer
* 测量打包构建时间：speed-measure-webpack-plugin