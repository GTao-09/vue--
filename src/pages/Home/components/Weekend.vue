<template>
  <div class="HomeWeekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="list in Weekendlists" :key="list.id">
        <div class="item-img-wrap">
          <img class="item-img" :src="list.itemImgSrc" />
        </div>
        <div class="item-info">
          <p class="item-info-title">{{list.title}}</p>
          <p class="item-info-desc">{{list.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      Weekendlists: [
        {
          id: '001',
          itemImgSrc: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '002',
          itemImgSrc: 'http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
          title: '上海看花',
          desc: '这个好天气，一起去看花吧'
        },
        {
          id: '003',
          itemImgSrc: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
          title: '周末亲子爱玩',
          desc: '走进自然或玩转乐园，感知大千世界，游乐项目惊险刺激，特色表演异彩纷呈，等你们~'
        },
        {
          id: '004',
          itemImgSrc: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          title: '上海城市观光',
          desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
        },
        {
          id: '005',
          itemImgSrc: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
          title: '情迷博物馆',
          desc: '走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
.HomeWeekend
  .title
    height .8rem
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
    padding-bottom .1rem
    margin-top .2rem
  .item
    margin-top .2rem
    .item-img-wrap
      overflow hidden
      height 0
      padding-bottom 39%
      .item-img
        width 100%
    .item-info
      min-width 0 // 解决ellipsis()失效
      .item-info-title
        height .40rem
        line-height .40rem
        font-size .32rem
        text-indent .2rem
        ellipsis()
      .item-info-desc
        height .4rem
        line-height .4rem
        color #cccccc
        text-indent .2rem
        ellipsis()
</style>
