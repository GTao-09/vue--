<template>
  <div>
    <div class="DetailHeader" @click="handleShowGallary">
      <img class="detail-img" :src="bannerImg">
      <div class="detailHeader-info">
        <div class="detail-title">{{sightName}}</div>
        <div class="detail-imgNumber">
          <span class="iconfont imgfont">&#xe640;</span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimate>
      <Gallary v-show="showGallary" @closed="handleNoShowGallary" :imgGallary="gallaryImgs"></Gallary>
    </FadeAnimate>
  </div>
</template>

<script>
import Gallary from '../../../common/gallary/Gallary'
import FadeAnimate from '../../../common/FadeAnimate/FadeAnimate'
export default {
  name: 'DetailHeader',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    Gallary,
    FadeAnimate
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleNoShowGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.DetailHeader
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .detail-img
    width 100%
  .detailHeader-info
    display flex
    position absolute
    right 0
    left 0
    bottom 0
    height .6rem
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .detail-title
      flex 1
      height 0.4rem
      line-height 0.4rem
      font-size 0.36rem
      color #ffffff
      padding-left 0.2rem
    .detail-imgNumber
      padding 0 .3rem
      border-radius .2rem
      background-color rgba(0, 0, 0, .8)
      margin-right 0.2rem
      height .4rem
      line-height 0.4rem
      color #eeeeee
      .imgfont
        font-size .2rem
        padding-right .1rem
</style>
