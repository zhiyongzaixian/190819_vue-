<template>
  <div id="appContainer">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import {SAVE_USER} from './store/mutations-type'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'app',
  components: {FooterGuide},
  async mounted(){
    let result = await this.$API.autoLogin()
    // 存入至Vuex中
    this.$store.commit(SAVE_USER, result.data)
  }
}
</script>

<style lang="stylus">

</style>
