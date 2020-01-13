<template>
  <div id="shopContainer">
    <ShopHeader />
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/shop/good">订餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components: {
      ShopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #shopContainer
    .tabs
      display flex
      bottom-border-1px(#eee)
      .tab-item
        /*width 33.3333%*/
        flex 1
        text-align center
        height 40px
        line-height 40px
        font-size 16px
        a
          display block
          position relative
          &.router-link-active
            color $green
            &:after
              content: ''
              height 4px
              width 40px
              background $green
              transform scaleY(0.5)
              position absolute
              bottom 0
              left 50%
              margin-left -20px

</style>
