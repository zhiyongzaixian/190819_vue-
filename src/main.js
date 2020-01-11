import Vue from 'vue'
import 'lib-flexible/flexible'
import './veeValidate'

import * as API from './api'
import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader'

import App from './App.vue'

Vue.prototype.$API = API
Vue.component('GshopHeader', GshopHeader)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,
  store
})

