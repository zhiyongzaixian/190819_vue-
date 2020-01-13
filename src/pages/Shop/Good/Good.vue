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
    <div class="rightContainer"></div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.leftContainer', {
        scrollY: true, // 纵向滑动
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      background gray

</style>
