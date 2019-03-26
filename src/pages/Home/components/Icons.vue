<template>
  <div class="HomeIcons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icons" v-for="item in page" :key="item.id">
          <div class="Icons-img">
            <img class="Icons-imgContent" :src="item.IconsImgUrl" />
          </div>
          <p class="Icons-text">{{item.description}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      lists: [
        {id: '001', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', description: '景点门票'},
        {id: '002', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', description: '一日游'},
        {id: '003', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', description: '上海必游'},
        {id: '004', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', description: '动植物园'},
        {id: '005', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png', description: '城市观光'},
        {id: '006', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png', description: '踏青赏花'},
        {id: '007', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png', description: '东方明珠'},
        {id: '008', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', description: '野生动物园'},
        {id: '009', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', description: '景点门票'},
        {id: '010', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', description: '景点门票'},
        {id: '011', IconsImgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', description: '景点门票'}
      ]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.lists.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  @import '../../../assets/styles/mixins.styl'
  .HomeIcons >>> .swiper-container // 解决lists只有一排时滑动下面一排没效果
    // overflow hidden
    height 0
    padding-bottom 50%
    // background-color green
  .HomeIcons
    margin-top .1rem
    .icons
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      // background-color red
      .Icons-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        // background-color blue
        .Icons-imgContent
          height 100%
          display block
          margin 0 auto
      .Icons-text
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $DarkTextColor
        ellipsis()
</style>
