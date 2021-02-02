# vue-ts-starter
> 这是一个 [vue-cli](https://github.com/vuejs/vue-cli) 项目模板，开发语言为 TypeScript



## 如何使用?

首先安装 Vue 官方提供的工具 [vue-cli 3.x](https://cli.vuejs.org/)
``` bash
npm install -g @vue/cli
```
使用vue cli 3命令创建项目:
``` bash
vue create --preset NiceDayToDie/vue-ts-starter my-project
```



## 文件名的边界情况

如果你想要渲染一个以点开头的模板文件 (例如 .env)，则需要遵循一个特殊的命名约定，因为以点开头的文件会在插件发布到 npm 的时候被忽略：
```bash
# 以点开头的模板需要使用下划线取代那个点：

/generator/template/_env

# 当调用 api.render('./template') 时，它在项目文件夹中将被渲染为：

/generator/template/.env
```
同时这也意味着当你想渲染以下划线开头的文件时，同样需要遵循一个特殊的命名约定：
```bash
# 这种模板需要使用两个下划线来取代单个下划线：

/generator/template/__variables.scss

# 当调用 api.render('./template') 时，它在项目文件夹中将被渲染为：

/generator/template/_variable.scss
```



## 更新说明

### v1.0.1

+ 添加lodash库类型判断
+ 新增全局过滤器配置
+ 通过媒体查询自适应移动端设备
+ 根据条件动态引入mock库
+ 更新启动类结构
+ 更新部分依赖版本解决潜在安全缺陷