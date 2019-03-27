<template>
  <div class="homeswiper">
    <!-- v-if解决默认显示最后一张 -->
    <!-- 原因: 第一渲染是传过来的空数组 -->
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="imgstyle" :src="item.imgUrl" :alt="item.id">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
      // lists: [
      //   {
      //     id: '001',
      //     imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg'
      //   },
      //   {
      //     id: '002',
      //     imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg'
      //   },
      //   {
      //     id: '003',
      //     imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/278a88f18f1523eec8c52f650522be68.jpg_750x200_bc365244.jpg'
      //   },
      //   {
      //     id: '004',
      //     imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/58588dc342505cb74abd26600d0ee356.jpg_750x200_15fb77eb.jpg'
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .homeswiper >>> .swiper-pagination-bullet-active
      background-color #ffffff
  .homeswiper
    // 图片自适应
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.3%
    .imgstyle
      width 100%
</style>
