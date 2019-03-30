<template>
  <div class="Top">
    <router-link v-show="topshow" tag="div" to="/" class="iconfont Top-back">&#xe624;</router-link>
    <div class="top-info" v-show="!topshow" :style="{opacity: opacityValue}">
      <div class="Top-title">景点详情</div>
      <router-link tag="div" to="/" class="iconfont Top-title-back">&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      topshow: true,
      opacityValue: 0
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      let top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityValue = opacity
        this.topshow = false
      } else {
        this.topshow = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.Top
  .Top-back
    position absolute
    left .2rem
    top .2rem
    height .7rem
    width .7rem
    border-radius .7rem
    background-color rgba(0, 0, 0, .7)
    text-align center
    line-height .7rem
    color #ffffff
  .top-info
    height $HeaderHeight
    background-color $bgColor
    position fixed
    top 0
    left 0
    right 0
    .Top-title
      line-height $HeaderHeight
      text-align center
      color #ffffff
      font-size .32rem
    .Top-title-back
      position absolute
      left 0
      top 0
      line-height $HeaderHeight
      color #ffffff
      margin-left .2rem
</style>
