# 课堂笔记

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

# 适配

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

