<template>
  <div class="HomeRecommend">
    <div class="title">热销推荐</div>
    <ul>
      <!-- <li class="item border-bottom" v-for="list in recommendList" :key="list.id"> -->
        <router-link tag="li" :to="`/detail/${list.id}`"
        class="item border-bottom" v-for="list in recommendList" :key="list.id"
        >
          <img class="item-img" :src="list.imgUrl" />
          <div class="item-info">
            <p class="item-info-title">{{list.title}}</p>
            <p class="item-info-desc">{{list.desc}}</p>
            <button class="item-info-button">查看详情</button>
          </div>
        </router-link>
      <!-- </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
      //     title: '上海迪士尼乐园',
      //     desc: '全球最大的迪士尼城堡'
      //   },
      //   {
      //     id: '002',
      //     itemImgSrc: 'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_200x200_a32b9a92.jpg',
      //     title: '上海野生动物园',
      //     desc: '会跳芭蕾的小海狮们~'
      //   },
      //   {
      //     id: '003',
      //     itemImgSrc: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg',
      //     title: '上海欢乐谷',
      //     desc: '敢上1200米长的木质过山车吗?'
      //   },
      //   {
      //     id: '004',
      //     itemImgSrc: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_200x200_c7f8a6ad.jpg',
      //     title: '上海动物园',
      //     desc: '巨型象龟了解一下~'
      //   },
      //   {
      //     id: '005',
      //     itemImgSrc: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
      //     title: '上海海洋水族馆',
      //     desc: '亲眼见证鲨鱼的恐怖'
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
.HomeRecommend
  .title
    height .8rem
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
    margin-top .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 2rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0 // 解决ellipsis()失效
      .item-info-title
        height .54rem
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-info-desc
        margin-top .05rem
        height .4rem
        line-height .4rem
        color #FF3030
        ellipsis()
      .item-info-button
        background-color #ff9300
        padding 0 .2rem
        color #ffffff
        border-radius .06rem
        margin-top .16rem
</style>
