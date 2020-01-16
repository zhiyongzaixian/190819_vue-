<template>
  <div id="appContainer">
    <div class="tabs">
      <!--异步组件-->
      <!--<div class="tab-item" @click="comName = 'asyncComponent'">Home组件</div>-->
      <div class="tab-item" @click="comName = 'Home'">Home组件</div>
      <div class="tab-item" @click="comName = 'Msite'">Msite组件</div>
    </div>
    <component :is="comName"></component>
    <!--<Home />-->
    <!--<Msite />-->
  </div>
</template>

<script>
  import Home from './components/Home'
  import Msite from './components/Msite'
  export default {
    components: {
      Home: (resolve, reject) => {
        setTimeout(() => {
          resolve(Home)
        }, 2000)
        // 发送ajax请求异步获取组件数

      },
      Msite
    },
    data(){
      return {
       // comName: 'asyncComponent'
        comName: 'Home'
      }
    },
  }
</script>

<style lang="stylus">
  #appContainer
    .tabs
      display flex
      .tab-item
        border 1px solid #999
        height 80px
        width 50%
        line-height 80px
        text-align center
</style>
