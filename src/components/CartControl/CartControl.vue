<template>
  <div class="cartcontrol">
    <div class="iconfont icon-jianhao" @click="changeFoodCount(false)"></div>
    <div class="cart-count">{{food.count}}</div>
    <div class="iconfont icon-add" @click="changeFoodCount(true)"></div>
  </div>

</template>

<script>
  export default {
    props: {
      food: {
        required: true,
        type: Object
      }
    },
    methods: {
      changeFoodCount(isAdd){
        this.$store.dispatch('changeFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .icon-jianhao
      padding 2px
      color $green
    .cart-count
      display: inline-block
      width: 14px
      text-align: center
      font-size: 14px
      color: rgb(147, 153, 159)
      margin 0 8px
    .icon-add
      padding: 2px
      color $green
    .iconfont
      display: inline-block
      border 2px solid $green
      border-radius 50%
      font-size 10px

</style>
