<template>
  <div id="appContainer">
    <h1>App 组件</h1>
    <div class="noAdaptive">没有适配</div>
    <div class="haveAdaptive">有适配的</div>
  </div>

</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="stylus">
  #appContainer
    .noAdaptive
      width 750px
      height 100px
      background red
    .haveAdaptive
      width 10rem
      height 100px
      background green
</style>
