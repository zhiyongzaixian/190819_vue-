<template>
  <div id="appContainer">
    <h1>App 组件</h1>
    <button class="btn1">测试按钮1</button>
    <button class="btn2">测试按钮2</button>
    <ul>
      <li @click="handleClick(item)" :class="{active: navIndex === item}" v-for="item in 10" :key="item">{{item}}</li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      navIndex: 1
    }
  },
  methods: {
    handleClick(item){
      this.navIndex = item
    }
  }
}
</script>

<style lang="stylus">
  /*引入*/
  @import "./common/stylus/mixins.styl"
/*
  #appContainer {
    color: red;
  }
  h1 {
    font-size 40px
  }
*/

  /*定义变量*/
  $color = red

  /*定义混合*/
  btnStyle(w, h, bgColor)
    width w
    height h
    background bgColor
    border none
  /*定义函数*/
  add(a, b)
    padding a + b

  #appContainer

    h1
      font-size 40px
    .btn1
      btnStyle(100px, 100px, $color)
      add(20px, 30)
      box-sizing content-box
    .btn2
      btnStyle(200px, 200px, green)
    ul
      li
        line-height 40px
        &.active
          color $green
</style>
