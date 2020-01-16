import Vue from 'vue'


import App from './App.vue'

Vue.mixin({
  methods: {
    _chunk2(target, size){
      if(!Array.isArray(target) || size <=0){
        return target
      }
      let result = []
      while(target.length > size){
        result.push(target.splice(0, size))
      }
      !!target.length && result.push(target)
      return result
    }
  }
})



new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
})


