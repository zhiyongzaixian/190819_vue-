<template>
  <div id="homeContainer">
    <br>
    <br>
    <br>
    <h2>Home 组件</h2>
    <hr>
  </div>
</template>

<script>
  export default {
    mounted(){
      console.log('home mounted');
    },
    activated(){
      document.documentElement.scrollTop = 0
      // 发送请求获取数据
    },
    deactivated(){
      console.log('home deactivated');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #homeContainer
    height 2000px
</style>
