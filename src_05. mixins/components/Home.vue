<template>
  <div>

  </div>
</template>

<script>
  import mixin from '../mixins'

  export default {
    mixins: [mixin],
    mounted(){
      let arr = [1,2,3,4,5,6,7]
      let result = this._chunk(arr, 3)
      console.log(result);
      console.log(this.msg);
      console.log('home mounted');
    },
    beforeCreate(){
      console.log('home beforeCreate');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
