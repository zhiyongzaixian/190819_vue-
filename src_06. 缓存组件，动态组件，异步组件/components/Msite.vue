<template>
  <div id="msiteContainer" ref="msite">
    <br>
    <br>
    <br>
    <h2>Msite 组件</h2>
    <hr>
    <br>
    <br>
    <ul class="list">
      <li @click="navIndex = index" :class="{active: navIndex === index}" class="listItem" v-for="(item, index) in 100" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        navIndex: 0,
        scrollTop: 0
      }
    },
    mounted(){

      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop
        this.scrollTop = scrollTop
      })
    },
    deactivated(){
      console.log('msite deactivated');
      // 组件即将被切换缓存起来
      // let scrollTop = document.documentElement.scrollTop
      // console.log(scrollTop);
      // console.log(this.navIndex);
      sessionStorage.setItem('scrollTop', this.scrollTop)

    },
    activated(){
      sessionStorage.getItem('scrollTop') && (document.documentElement.scrollTop =  sessionStorage.getItem('scrollTop'))
      // document.documentElement.scrollTop = this.scrollTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #msiteContainer
    padding-top 80px
    .list
      .listItem
        height 80px
        line-height 80px
        &.active
          color greenyellow
</style>
