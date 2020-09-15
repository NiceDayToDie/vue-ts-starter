# ReadMe

### 简介

> 本初始项目基于[vue2.x](https://cn.vuejs.org/) + [typescript](https://www.typescriptlang.org/) + [scss](https://www.sass.hk/)，UI组件库选用的是[view-design](https://www.iviewui.com/)，工具类库使用的是[loadsh.js](https://lodash.com/)，以及使用[mock.js](http://mockjs.com/)模拟数据与接口



### 项目结构

```bash
├─public
│  └─static # 静态资源
└─src
    ├─application  # 启动类，初始化vue实例
    ├─assets       # 公共样式与图片、字体等资源
    ├─components   # 公共组件
    ├─decorators   # 装饰器
    ├─directives   # 自定义指令
    ├─mixins       # 混入
    ├─mock         # 模拟接口与数据
    ├─models       # 数据模型
    ├─pages        # 多页页面
    ├─router       # 路由
    ├─services     # 请求类
    ├─settings     # 通用设置
    ├─store        # vuex状态管理
    ├─types        # ts类型声明
    ├─utils        # 工具类
    └─views        # 单页页面
```



### 命令

> 详见`package.json`

```bash
npm run serve   # 启动本地服务
npm run build   # 打包项目
npm run dist    # 以打包目录启动本地服务
npm run lint    # 代码风格格式化及检查
```

