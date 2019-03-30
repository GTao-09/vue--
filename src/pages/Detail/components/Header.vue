<template>
  <div class="DetailHeader">
    <img class="detail-img" src="//img1.qunarzz.com/sight/p0/1412/77/cb5a5c0c47e96f6b42ce646cddf4af0d.water.jpg_600x330_17d4b9aa.jpg">
    <div class="detailHeader-info">
      <div class="detail-title">鸟巢(AAAAAA景区)</div>
      <div class="detail-imgNumber">
        <span class="iconfont imgfont">&#xe640;</span>6
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
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
