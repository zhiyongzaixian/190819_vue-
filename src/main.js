import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'

import App from './App.vue'



Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router
})

