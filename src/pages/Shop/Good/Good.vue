<template>
  <div id="goodContainer">
    <div class="leftContainer">
      <ul class="navList">
        <li v-for="(good, index) in goods" :key="index">
          {{good.name}}
        </li>

      </ul>
    </div>
    <div class="rightContainer">
      <div class="foods-wrapper">
        <ul>
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.image">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl组件
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        test: 'xxx'
      }
    },
    async mounted(){
      console.log(this.goods);
      // let result = await this.$API.getShopDatas()
      // console.log(result);
      if(this.goods){
        this._initScroll()
      }
    },
    computed: {
      ...mapState({
        goods: state => state.shop.shopDatas.goods
      })
    },
    methods: {
      _initScroll(){
        new BScroll('.leftContainer', {
          scrollY: true, // 纵向滑动
        })
        new BScroll('.rightContainer', {
          scrollY: true, // 纵向滑动
        })
      }
    },
    watch: {
      goods(){
        console.log(this.goods);
        // this.$nextTick组件下一次渲染完毕
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  #goodContainer
    display flex
    overflow hidden
    height calc(100vh - 224px)

    .leftContainer
      width 80px
      background #f3f5f7
      /* calc可以动态计算高度，宽度*/
      /* vh, vw 视口单位 1vh=1%视口高度 */
      /*position absolute*/
      /*bottom 0*/
      /*top 224px*/
      /*overflow hidden*/
      .navList
        li
          width 100%
          height 50px
          text-align center
          line-height 50px
          position relative
          &:after
            content: ''
            width 80%
            height 1px
            background rgba(7,17,27,0.1)
            position absolute
            bottom 0
            left 10%
    .rightContainer
      width 295px
      .foods-wrapper
        flex: 1
        .title
          padding-left: 14px
          height: 26px
          line-height: 26px
          border-left: 2px solid #d9dde1
          font-size: 12px
          color: rgb(147, 153, 159)
          background: #f3f5f7
        .food-item
          display: flex
          margin: 18px
          padding-bottom: 18px
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
            margin-bottom: 0
          .icon
            flex: 0 0 57px
            margin-right: 10px
          .content
            flex: 1
            .name
              margin: 2px 0 8px 0
              height: 14px
              line-height: 14px
              font-size: 14px
              color: rgb(7, 17, 27)
            .desc, .extra
              line-height: 10px
              font-size: 10px
              color: rgb(147, 153, 159)
            .desc
              line-height: 12px
              margin-bottom: 8px
            .extra
              .count
                margin-right: 12px
            .price
              font-weight: 700
              line-height: 24px
              .now
                margin-right: 8px
                font-size: 14px
                color: rgb(240, 20, 20)
              .old
                text-decoration: line-through
                font-size: 10px
                color: rgb(147, 153, 159)
            .cartcontrol-wrapper
              position: absolute
              right: 0
              bottom: 12px


</style>
