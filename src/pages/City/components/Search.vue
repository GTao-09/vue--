<template>
  <dir class="CitySearch">
    <input type="search" name="search" class="city-search" placeholder="输入城市名或拼音">
  </dir>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
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
    padding 0 .3rem
    border-radius .1rem
</style>
