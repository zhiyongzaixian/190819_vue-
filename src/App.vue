<template>
  <div id="appContainer">
    <h1>App 组件</h1>
    <Home >
      <!--<p slot="left">Home的左护法</p>-->
      <!--<p slot="right">Home的右护法</p>-->

      <template v-slot:left>
        <p >{{msg}}Home的左护法</p>
      </template>
      <template v-slot:right="rightProps">
        <p>{{rightProps.person.lastName}}Home的右护法</p>
      </template>
    </Home>
  </div>
</template>

<script>
  import Home from './components/Home'
  export default {
    components: {
      Home
    },
    data(){
      return {
        msg: 'App组件的数据'
      }
    }
  }
</script>

<style lang="stylus">

</style>
