<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
