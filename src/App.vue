<template>
  <div id="appContainer">
    <router-view></router-view>
    <FooterGuide />
  </div>

</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'app',
  components: {FooterGuide}
}
</script>

<style lang="stylus">
</style>
