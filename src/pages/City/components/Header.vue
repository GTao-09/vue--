<template>
  <div class="CityHeader">
     <div class="city-title">城市选择</div>
     <router-link to="/">
       <div class="iconfont citybackicon">&#xe624;</div>
     </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.CityHeader
  position relative
  overflow hidden
  height $HeaderHeight
  background-color $bgColor
  .city-title
    text-align center
    line-height $HeaderHeight
    color #ffffff
    font-size .32rem
  .citybackicon
    position absolute
    left 0
    top 0
    width .64rem
    text-align center
    line-height $HeaderHeight
    font-size .32rem
    color #ffffff
    padding 0rem .1rem
</style>
