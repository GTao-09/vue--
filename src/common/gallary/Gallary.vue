<template>
  <div class="Gallary" @click="NoshowGallary">
    <div class="warp">
     <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgGallary" :key="index">
          <img class="imgstyle" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgGallary: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    NoshowGallary () {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="stylus" scoped>
.Gallary >>> .swiper-container
  overflow inherit
.Gallary
  display flex
  flex-direction column
  justify-content center
  position fixed
  right 0
  left 0
  top 0
  bottom 0
  background-color #000000
  .warp
    // overflow hidden
    height 0
    width 100%
    padding-bottom 70%
    .imgstyle
      width 100%
    .swiper-pagination
      bottom -1rem
      color #ffffff
</style>
