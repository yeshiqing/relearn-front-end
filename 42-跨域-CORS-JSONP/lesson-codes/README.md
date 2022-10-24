# 本课代码模拟跨域请求

## 操作步骤

安装 node-dev，服务器端代码修改，自动更新服务器。  
```shell
yarn global add node-dev
```

修改`/etc/hosts`文件，将两个域名映射到 127.0.0.1，模拟两个不同源的服务器。  
```shell
127.0.0.1 frank.com
127.0.0.1 qq.com
```
启动两个服务器  

```shell
cd ./lesson-codes/frank-com
node-dev server.js 9990
```

```shell
cd ./lesson-codes/qq-com
node-dev server.js 8888
```

在浏览器访问两个服务器，从 frank.com 发送请求到 qq.com 服务器。

