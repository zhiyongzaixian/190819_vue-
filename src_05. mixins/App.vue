<template>
  <div id="appContainer">
    <h1>App 组件</h1>
    <Home></Home>
  </div>
</template>

<script>
  import mixin from './mixins'
  import Home from './components/Home'
  export default {
    components: {Home},
    mixins: [mixin], // 声明使用混入对象，同时可以使用多个
    data(){
      return {
        msg: 'App组件的数据'
      }
    },
    beforeCreate(){
      console.log('app beforeCreate');
    },
    mounted(){
      let arr = [1,2,3,4,5,6]
      let result = this._chunk2(arr, 2)
      console.log(result);
      console.log(this.msg);
      console.log('app mounted');
    }
  }
</script>

<style lang="stylus">

</style>
