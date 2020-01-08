import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })


new Vue({
  el: '#app',
  components: {App},
  template: '<App />'
})

console.log('xxx');
