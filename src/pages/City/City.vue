<template>
  <div class="City">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityAlphabet></CityAlphabet>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader: Header,
    CitySearch: Search,
    CityList: List,
    CityAlphabet: Alphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
