import Vue from 'vue'
import App from './App.vue'


Vue.component('asyncComponent', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})

//
// function asyncComponent(resolve, reject) {
//   // 发送请求
//   setTimeout(() => {
//     resolve(异步组件)
//   }, 2000)
// }


new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
})


