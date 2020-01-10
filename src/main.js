import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'

import App from './App.vue'


Vue.component('GshopHeader', GshopHeader)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router
})

