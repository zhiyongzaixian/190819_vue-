<template>
  <section class="msite">
    <!--首页头部-->
    <!--<header class="header">-->
      <!--<span class="header_search">-->
        <!--<i class="iconfont icon-sousuo"></i>-->
      <!--</span>-->
      <!--<span class="header_title">-->
        <!--<span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>-->
      <!--</span>-->
      <!--<span class="header_login">-->
        <!--<span class="header_login_text">登录|注册</span>-->
      <!--</span>-->
    <!--</header>-->
    <GshopHeader :title="address.name?address.name:'定位中...'">
      <!--<span slot="left" class="header_search">-->
        <!--<i class="iconfont icon-sousuo"></i>-->
      <!--</span>-->
      <!--<span slot="right" class="header_login">-->
        <!--<span class="header_login_text">登录|注册</span>-->
      <!--</span>-->

      <template v-slot:left>
        <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>
      <template v-slot:right>
         <span class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </template>
    </GshopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(category, index) in newCateGorys" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(categoryItem, index) in category" :key="index">
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com/${categoryItem.image_url}`">
              </div>
              <span>{{categoryItem.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList />
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import _ from 'lodash'
  import {mapState} from 'vuex'
  import {getAddress} from '../../api'

  import ShopList from '../../components/ShopList/ShopList'
  export default {
    components: {
      ShopList
    },
    async mounted(){
      // let result = await getAddress(40.10038,116.36867)
      // console.log(result)
      // this.$store.commit('save_address')
      this.$store.dispatch('getAddressAction')
      this.$store.dispatch('getCategorysAction', () => {
        // 解决swiper滑动方式二
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      })


    },
    methods: {
      _chunk(target, size){
        if(!Array.isArray(target) || size <=0){
          return target
        }
        let result = []
        while(target.length > size){
          result.push(target.splice(0, size))
        }
        !!target.length && result.push(target)
        return result
      }
    },
    computed: {
      // ...mapState(['address']) 不能自定义映射的key值
      ...mapState({
        address: state => state.address,
        categorys: state => state.categorys
      }),
      newCateGorys(){
        // return _.chunk(this.categorys, 8)
        return this._chunk(this.categorys, 8)
      }
    },
    watch: {
      // 解决swiper滑动方式一
      // categorys(){
      //   // $nextTick 保证下一次组件加载完毕执行
      //   this.$nextTick(() => {
      //     new Swiper('.swiper-container', {
      //       pagination: {
      //         el: '.swiper-pagination',
      //       },
      //       loop: true
      //     })
      //   })
      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            height 100%
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        /*深度选择器*/
        /deep/.swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
