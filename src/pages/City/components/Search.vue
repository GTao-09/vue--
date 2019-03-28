<template>
  <div>
    <div class="CitySearch">
      <input v-model="keyword" type="search" class="city-search" placeholder="输入城市名或拼音">
    </div>
    <div v-show="keyword" class="search-content" ref="search1">
      <ul>
        <li class="content border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li v-show="!list.length" class="nosearch"> 没有匹配到 </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      TimeOut: null
    }
  },
  watch: {
    keyword () {
      if (this.TimeOut) {
        clearTimeout(this.TimeOut)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.TimeOut = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search1)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.border-bottom
  &:after
    border-color #cccccc
.CitySearch
  height .72rem
  background-color $bgColor
  padding 0 .1rem
  margin 0
  .city-search
    height .62rem
    width 100%
    text-align center
    box-sizing border-box
    padding 0 .2rem 0 .5rem
    border-radius .1rem
.search-content
  overflow hidden
  z-index 1
  position absolute
  top 1.58rem
  right 0
  left 0
  bottom 0
  background-color #eeeeee
  .content
  .nosearch
    height .54rem
    line-height .54rem
    background-color #ffffff
    color #666666
</style>
