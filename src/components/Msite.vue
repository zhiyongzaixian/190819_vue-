<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <hr>
    <h2>Msite 组件</h2>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    props: ['value']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
