<template>
  <div class="CityList" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">{{$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for="item in hotCities" :key="item.id">
            <div class="button" @click="handleChangeCity(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(citys, key) in cities"
          :key="key"
          :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city in citys" :key="city.id"
            @click="handleChangeCity(city.name)"
          >{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter])
        const element = this.$refs[this.letter][0] // 获取第this.letter的结构
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleChangeCity (city) {
      this.$store.dispatch('changecity', city)
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.border-bottom
  &:after
    border-color #cccccc
.CityList
  position absolute
  top 1.6rem
  left 0
  right 0
  bottom 0
  // background-color red
  overflow hidden
  .area
    .title
      height .54rem
      line-height .44rem
      padding-left .2rem
      font-size .26rem
      color #666666
      background-color #eeeeee
    .button-list
      overflow hidden // 开启BFC因为下面浮动
      padding .1rem .6rem .1rem .1rem
      .button-wrap
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #cccccc
          border-radius .06rem
    .item-list
      .item
        line-height .54rem
        color #666666
        padding-left .2rem
</style>
