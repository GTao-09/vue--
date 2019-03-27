<template>
  <div class="City">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader: Header,
    CitySearch: Search
  }
}
</script>

<style lang="stylus" scoped>

</style>
