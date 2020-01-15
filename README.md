# 1. 课堂笔记

1. Vue脚手架
   1. 版本： 
      1. 脚手架版本4.x， Vue版本2
      2. 脚手架版本2， Vue版本2
2. stylus
   1. CSS预编译语言
   2. 语法特点：
      1. 省略{}， 冒号，封号
      2. 明显的层级关系，该关系同DOM结构一致
      3. 定义变量： $color = red
      4. 定义混合(mixins): 等同于之前的函数，用来复用代码
      5. 定义函数： 函数可以用来内部计算
      6. 父级引用： & = 当前位置的父级元素
      7. 引入： @import '文件路径'

# 2. 适配

1. 为什么要做适配

   1. 手机默认的网页宽度是980，手机屏幕的大小通常小于980
   2. 手机机型不同，屏幕大小不同

2. 适配的目的

   1. 让一张设计稿的内容在不同的机型上呈现的效果一致(等比)

3. 如何做适配

   1. viewport适配

      1. 视觉视口: 所见即所得，屏幕的大小
      2. 布局视口: 网页的宽度
      3. 适配： 布局视口 = 视觉视口
      4. 代码实现： meta name='viewport' content='width=device-width, initial-sclae=1,user-scalable=no'

   2. rem适配

      1. rem: 根节点字体的大小

      2. 流程： 1rem = 屏幕宽度 / 10

      3. 代码实现

         ```
         function remRefresh() {
                 // 1. 获取屏幕的宽度
                 let clientWidth = document.documentElement.clientWidth;
         
                 // 2. 将屏幕的宽度等分, 等分的目的： 降低单位rem值的大小，便于换算，提高精确度
                 let rem = clientWidth / 10;
         
                 // 3. 设置根节点字体的大小
                 document.documentElement.style.fontSize = rem + 'px'
         
                 // 4. 设置body字体大小
                 document.body.style.fontSize = '16px'
               }
         
         
               window.addEventListener('pageshow', () => {
                 remRefresh()
               })
               let timeoutId;
               window.addEventListener('resize', () => {
                 timeoutId && clearTimeout(timeoutId)
                 timeoutId = setTimeout(() => {
                   console.log('resize');
                   remRefresh()
                 }, 2000)
               })
         
         ```

# 3. 路由

1. 核心概念
   1. 生成路由器: const router = new VueRouter()
   2. 安装路由器: new Vue(router)
   3. 管理路由: new VueRouter({[{path: '路由路径', component: '路由组件'}]})
   4. 请求路由: 1) router-link to='路由路径'， 2) $router.路由方法
   5. 显示路由组件: router-view

# 4. Vuex

1. 核心概念：

   1. store对象

      1. state： 多个组件共享的数据，用于集中管理
      2. mutations
         1. mutation本质是函数
         2. mutation作用: 修改state的状态数据
         3. mutation特性： 只能处理同步数据，处理不了异步数据
      3. actions
         1. action本质是函数
         2. action作用: 1) 获取异步数据 2) 调用mutation同时将异步数据交给mutation
         3. 调用mutation： commit('mutation的函数名', 交给mutation的异步数据)
      4. getters
         1. getter本质：函数
         2. getter作用： 同Vue的computed一样，依赖于原数据(state数据)进行计算得到新的数据
      5. dispatch
         1. dispatch本质： 函数
         2. dispatch作用： 调用action

   2. 组件同Vuex交互

      1. mapState, 语法： computed
         1. ...mapState(['映射的状态数据key'])， 不能动态定义映射的key值
         2. ...mapState({key: state => state.key})
2. 常见问题
   1. 刷新Vuex数据丢失
      1. 问题原因： 
         1. Vuex的数据保存在运行的内存中
         2. 刷新页面会重新初始化整个应用，重新分配内存
      2. 解决方案：
         1. 当页面刷新的时候重新发请求获取数据，更新Vuex中的数据
         2. 利用页面刷新的事件  + sessionStorage
            1. 在unload事件的回调中将数据保存至sessionStorage中
            2. 在组件重新加载之后从sessionStorage中读取并更新至Vuex中

# 5. 响应式属性 VS 非响应式属性

 	1. 响应式属性
      	1. 组件实例初始化就有的属性：data，props，computed
      	2. 响应式属性的改变会触发视图的更新
      	3. 响应式属性在定义的时候有setter监视属性
 	2. 非响应式属性
      	1. 组件实例初始化的时候没有，后期添加的属性： 通常是需要给data中的某一个对象添加新的属性
      	2. 属性的改变不会触发视图的更新
      	3. 非响应式属性没有setter方法
 	3. 如何定义一个响应式属性
      	1. Vue.set(target, propertyName, value)
      	2. vm.$set(target, propertyName, value)

# 6. 项目即将上线之前应该做的事情

 	1. 性能优化1
      	1. 路由组件懒加载
      	2. 语法: import(路由组件的相对路径)
 	2. 性能优化2
      	1. 关闭source map文件
      	2. webpack的配置，在vue3的脚手架里vue.config.js中： productionSourceMap: false, // 不生成 source map文件