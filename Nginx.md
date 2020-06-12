# nginx

[下载](http://nginx.org/en/download.html)

基本命令 
* 启动服务：start nginx
* 退出服务：nginx -s quit
* 强制关闭服务：nginx -s stop
* 重载服务：nginx -s reload　　（重载服务配置文件，类似于重启，服务不会中止）
* 验证配置文件：nginx -t
* 使用配置文件：nginx -c "配置文件路径"
* 使用帮助：nginx -h


配置路径
```conf
location / {
    # root html; //默认打开当前 html 文件夹下 index.html
    root  D:/my-project/mydemo/dist; 
    index  index.html index.htm;
    try_files $uri $uri/ /index.html; // 刷新重新请求资源
}
```

配置gzip压缩
```conf
server {
  # 开启gzip on为开启，off为关闭
  gzip on;
  # 检查是否存在请求静态文件的gz结尾的文件，如果有则直接返回该gz文件内容，不存在则先压缩再返回
  gzip_static on;
  # 设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。
  # 默认值是0，不管页面多大都压缩。
  # 建议设置成大于10k的字节数，配合compression-webpack-plugin
  gzip_min_length 10k;
  # 对特定的MIME类型生效,其中'text/html’被系统强制启用
  gzip_types text/javascript application/javascript text/css application/json;
  # Nginx作为反向代理的时候启用，开启或者关闭后端服务器返回的结果
  # 匹配的前提是后端服务器必须要返回包含"Via"的 header头
  # off(关闭所有代理结果的数据的压缩)
  # expired(启用压缩,如果header头中包括"Expires"头信息)
  # no-cache(启用压缩,header头中包含"Cache-Control:no-cache")
  # no-store(启用压缩,header头中包含"Cache-Control:no-store")
  # private(启用压缩,header头中包含"Cache-Control:private")
  # no_last_modefied(启用压缩,header头中不包含"Last-Modified")
  # no_etag(启用压缩,如果header头中不包含"Etag"头信息)
  # auth(启用压缩,如果header头中包含"Authorization"头信息)
  # any - 无条件启用压缩
  gzip_proxied any;
  # 请求加个 vary头，给代理服务器用的，有的浏览器支持压缩，有的不支持，所以避免浪费不支持的也压缩
  gzip_vary on;
  # 同 compression-webpack-plugin 插件一样，gzip压缩比（1~9），
  # 越小压缩效果越差，但是越大处理越慢，一般取中间值
  gzip_comp_level 6;
  # 获取多少内存用于缓存压缩结果，‘16  8k’表示以8k*16 为单位获得。
  # PS: 如果没有.gz文件，是需要Nginx实时压缩的
  gzip_buffers 16 8k;
  # 注：99.99%的浏览器基本上都支持gzip解压了，所以可以不用设这个值,保持系统默认即可。
  gzip_http_version 1.1; 
}

```    