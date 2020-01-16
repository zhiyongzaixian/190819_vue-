<template>
  <div>
    <h2>Home 组件</h2>
    <br>
    <br>
    <hr>
    <slot name="left"></slot>
    <!--<slot name="right">我是默认的Home右护法</slot>-->
    <p>{{person.firstName}}</p>
    <slot name="right" :person="person"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        person: {
          firstName: 'kobe',
          lastName: 'bryant'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
