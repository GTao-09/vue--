<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'

import axios from 'axios'

import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper,
    HomeIcons: Icons,
    HomeRecommend: Recommend,
    HomeWeekend: Weekend
  },
  data () {
    return {
      lastCiyt: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        // .then(data => {
        //   // console.log(data)
        // })
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) { // ret为true 且 res.data不为空
        // this.city = res.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.lastCiyt = this.city
    this.getHomeInfo()
  },
  activated () { // 在keep-alive激活时调用
    if (this.lastCiyt !== this.city) { // 切换其他城市时则触发this.getHomeInfo()
      this.lastCiyt = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
