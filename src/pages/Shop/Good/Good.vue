<template>
  <div id="goodContainer">
    <div class="leftContainer">
      <ul class="navList">
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
        <li>
          爽口凉菜
        </li>
      </ul>
    </div>
    <div class="rightContainer">
      <div class="foods-wrapper">
        <ul>
          <li class="food-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
              <li class="food-item bottom-border-1px">
                <div class="icon">
                  <img width="57" height="57"
                       src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114">
                </div>
                <div class="content">
                  <h2 class="name">南瓜粥</h2>
                  <p class="desc">甜粥</p>
                  <div class="extra">
                    <span class="count">月售91份</span>
                    <span>好评率100%</span></div>
                  <div class="price">
                    <span class="now">￥9</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl组件
                  </div>
                </div>
              </li>
              <li class="food-item bottom-border-1px">
                <div class="icon">
                  <img width="57" height="57"
                       src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114">
                </div>
                <div class="content">
                  <h2 class="name">红豆薏米美肤粥</h2>
                  <p class="desc">甜粥</p>
                  <div class="extra">
                    <span class="count">月售86份</span>
                    <span>好评率100%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥12</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl组件
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="food-list food-list-hook">
            <h1 class="title">香浓甜粥</h1>
            <ul>
              <li class="food-item bottom-border-1px">
                <div class="icon">
                  <img width="57" height="57" src="http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114">
                </div>
                <div class="content">
                  <h2 class="name">红枣山药粥</h2>
                  <p class="desc">红枣山药糙米粥,素材包</p>
                  <div class="extra">
                    <span class="count">月售17份</span>
                    <span>好评率100%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥29</span>
                    <span class="old">￥36</span>
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

  import BScroll from 'better-scroll'
  export default {
    async mounted(){
      new BScroll('.leftContainer', {
        scrollY: true, // 纵向滑动
      })


      let result = await this.$API.getShopDatas()
      console.log(result);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  #goodContainer
    display flex
    overflow hidden
    .leftContainer
      width 80px
      background #f3f5f7
      /* calc可以动态计算高度，宽度*/
      height calc(100vh - 224px)
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
