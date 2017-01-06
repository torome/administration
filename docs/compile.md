# 编译

Administration 插件前端部分基于 NPM 进行项目构建，源码位置目录 resources/assets 。

## 编译前端项目

* 于目录 **resources/assets** 下执行 **npm install** 命令
* 于目录 **resources/assets** 下执行 **npm run build** 命令

## 发布前端资源

* 于代码根目录下执行 **php notadd vendor:publish --tag=public --force** 命令
