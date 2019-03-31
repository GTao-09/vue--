<template>
  <div class="Detail">
    <DetailHeader :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailHeader>
    <DetailTop></DetailTop>
    <DetailList :list="categoryList"></DetailList>
    <div style="height: 100rem;"></div><!-- 演示Top效果 -->
  </div>
</template>

<script>
import Header from './components/Header'
import Top from './components/Top'
import List from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader: Header,
    DetailTop: Top,
    DetailList: List
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      sightName: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(res => {
          // console.log(res)
          let res1 = res.data
          // console.log(res1)
          if (res1.ret && res1.data) {
            this.bannerImg = res1.data.bannerImg
            this.categoryList = res1.data.categoryList
            this.sightName = res1.data.sightName
            this.gallaryImgs = res1.data.gallaryImgs
            // console.log(this.categoryList)
          }
        })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
