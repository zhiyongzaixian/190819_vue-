import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import shop from './modules/shop'

Vue.use(Vuex)


// 1. 生成store对象
const store = new Vuex.Store({
  modules: {
    shop
  },
  state,
  mutations,
  actions,
  getters
})


// 2. 暴露
export default store
