<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper,
    HomeIcons: Icons
  }
}
</script>

<style lang="stylus" scoped>

</style>
