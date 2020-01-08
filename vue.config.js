

const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 64   // 设计稿10等分之后的值
})



module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, // 关闭enlint语法检查
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}

