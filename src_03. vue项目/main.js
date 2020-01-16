import Vue from 'vue'
import 'lib-flexible/flexible'
import './veeValidate'
import {Button} from 'mint-ui'
// import 'mint-ui/lib/style.css'
import './mock/mockServer'

import * as API from './api'
import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader'

import App from './App.vue'
import i18n from './i18n'

Vue.prototype.$API = API
Vue.component('GshopHeader', GshopHeader)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,
  i18n,
  store
})



