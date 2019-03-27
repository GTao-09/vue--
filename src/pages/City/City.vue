<template>
  <div class="City">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :hotCities="hotCities" :cities="cities"></CityList>
    <CityAlphabet :cities="cities"></CityAlphabet>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'

import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader: Header,
    CitySearch: Search,
    CityList: List,
    CityAlphabet: Alphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            // console.log(res)
            this.hotCities = res.data.hotCities
            this.cities = res.data.cities
          }
        })
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
