<template>
  <div id="shopContainer">
    <ShopHeader />
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/shop/good" replace>订餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {SAVE_SHOPDATAS, SAVE_CARTSHOPS} from '../../store/mutations-type'
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components: {
      ShopHeader
    },
    async mounted(){

      // let data = {}
      // sessionStorage.setItem('xxx', JSON.stringify(data))
      // 解决Vuex刷新页面数据丢失问题

      // 从sessionStorage读取数据
      let shopDatas = JSON.parse(sessionStorage.getItem('shopDatas'))
      if(shopDatas){
        // 1. 将读取的数据存入Vuex中
        this.$store.commit(SAVE_SHOPDATAS, shopDatas)

        // 2. 计算最新的购物车数据， food.count > 0
        let cartShops = shopDatas.goods.reduce((pre, good) => {
          pre.push(...good.foods.filter(food => food.count))
          return pre
        }, [])
        // 3. cartShops存入Vuex中
        this.$store.commit(SAVE_CARTSHOPS, cartShops)
      }else {
        // 分发action，发请求获取数据
        this.$store.dispatch('getShopDatasAction')
      }
      // unload事件在页面确定刷新，但是还没有真正刷新的时候，     页面即将刷新之前执行
      window.addEventListener('unload', () =>{
        // 将最新的shopDatas存入sessionStorage
        sessionStorage.setItem('shopDatas', JSON.stringify(this.shopDatas))
      })

    },
    beforeDestroy(){

      // 将最新的shopDatas存入sessionStorage
      sessionStorage.setItem('shopDatas', JSON.stringify(this.shopDatas))
    },
    computed: {
      ...mapState({
        initTest: state => state.shop.initTest,
        shopDatas: state => state.shop.shopDatas
      })

      // ...mapState(['shop.initTest'])
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
