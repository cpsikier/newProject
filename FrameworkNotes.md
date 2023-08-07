# 一、项目搭建 
## 1.创建VUE3项目
```
npm create v3-ts-pro
```
## 2. 下载安装pnpm 
```
npm install pnpm -g  (安装pnpm)
pnpm config get registry (查看源)
pnpm config set registry https://registry.npmmirror.com/ (切换淘宝源)
pnpm run serve (运行)
pnpm install 包名称 (安装包)
pnpm add 包名称 (-S 默认写入dependencies)
pnpm add -g/-D  (-g 全局安装，-D devDependencies)
```
## 3. 安装路由vue-router(V3路由版本 vue-router 4.x以上)
```
pnpm install vue-router --save
```
## 4. 安装element plus
```
pnpm install element-plus --save
```
# 二、常用包
## 1. @type/node
```
pnpm install #type/node --save-dev
```