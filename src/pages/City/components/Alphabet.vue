<template>
  <div class="CityAlphabet">
    <ul class="list">
      <!-- <li class="item" v-for="(citys, key) in cities" -->
        <li class="item" v-for="key in letters"
          :key="key"
          :ref="key"
          @click="handleClickLetter"
          @touchstart.prevent="handlerTouchStart"
          @touchmove="handlerTouchMove"
          @touchend="handlerTouchEnd"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchState: false,
      ALetterTop: 0,
      TimeOut: null
    }
  },
  updated () {
    this.ALetterTop = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () { // 将cities中的字母提出来组成一个数组
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClickLetter (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handlerTouchStart () {
      this.touchState = true
    },
    handlerTouchMove (e) {
      // if (this.touchState) {
      //   const ALetterTop = this.$refs['A'][0].offsetTop // A字母离顶端的距离
      //   // console.log(ALetterTop)
      //   // console.log(Math.round(e.touches[0].clientY))
      //   const ClientY = Math.round(e.touches[0].clientY) - 79 // 滑动位置离字幕条顶端的距离
      //   const letterIndex = Math.round((ClientY - ALetterTop) / 20) // 20为每个字母的高度;letterIndex滑动位置的字母位置
      //   // console.log(letterIndex)
      //   if (letterIndex >= 0 && letterIndex < this.letters.length) {
      //     // console.log(this.letters[letterIndex])
      //     this.$emit('change', this.letters[letterIndex])
      //   }
      // }
      if (this.touchState) {
        // 利用函数节流对函数进行优化
        if (this.TimeOut) {
          clearTimeout(this.TimeOut)
        }
        this.TimeOut = setTimeout(() => {
          const ClientY = Math.round(e.touches[0].clientY) - 79
          const letterIndex = Math.round((ClientY - this.ALetterTop) / 20)
          if (letterIndex >= 0 && letterIndex < this.letters.length) {
            this.$emit('change', this.letters[letterIndex])
          }
        }, 16)
      }
    },
    handlerTouchEnd () {
      this.touchState = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.CityAlphabet
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
