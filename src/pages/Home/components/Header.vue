<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backicon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont findicon">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <router-link :to="{name: 'CityLink'}">
      <div class="header-right">
        <!-- <span>{{city}}</span> -->
        <span>{{$store.state.city}}</span>
        <span class="iconfont arrowicon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
  // props: {
  //   city: String
  // }
}
</script>

<style lang="stylus" scoped>
  /*! 1rem = html font-size = 50px */
  /*! @import '../../../assets/styles/iconfont.css' */
  // 全局变量
  @import '../../../assets/styles/varibles.styl'
  .header
    display flex
    height $HeaderHeight
    background-color $bgColor
    color #ffffff
    line-height $HeaderHeight
    .header-left
      width .64rem
      float left
      .backicon
        font-size .32rem
        padding 0rem .2rem
    .header-input
      .findicon
        padding 0rem 0rem 0rem .2rem
      flex 1
      height .64rem
      margin-top .12rem
      margin-left .2rem
      background-color #ffffff
      border-radius .1rem
      color #cccccc
      line-height .64rem
    .header-right
      .arrowicon
        font-size .2rem
        text-align center
      width 1.24rem
      float right
      text-align center
      color #ffffff
</style>
