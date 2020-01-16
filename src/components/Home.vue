<template>
  <div>
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
      console.log('home activated');
      // 发送请求获取数据
    },
    deactivated(){
      console.log('home deactivated');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
