<template>
  <div class="star star-24">
    <span class="star-item" :class="item" v-for="(item, index) in starClasses" :key="index"></span>
  </div>
</template>

<script>
  export default {
    props: {
      rating: {
        required: true,
        type: Number,
        default: 5
      }
    },
    computed: {
      starClasses(){
        let result = []
        let rating = this.rating
        // 1. 全星: 0-5
        let onClasses = Math.floor(rating)
        for (var i = 0; i < onClasses; i++) {
          result.push('on')
        }
        // 2. 半星: 1 || 0 看评分是否有小数位
        (rating - onClasses > 0) && result.push('half')
        // 3. 灰色星星: 0-5
        while(result.length < 5){
          result.push('off')
        }
        return result
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../common/images/stars/star48_on')
        &.half
          bg-image('../../common/images/stars/star48_half')
        &.off
          bg-image('../../common/images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../common/images/stars/star36_on')
        &.half
          bg-image('../../common/images/stars/star36_half')
        &.off
          bg-image('../../common/images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../common/images/stars/star24_on')
        &.half
          bg-image('../../common/images/stars/star24_half')
        &.off
          bg-image('../../common/images/stars/star24_off')

</style>
