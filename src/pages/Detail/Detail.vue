<template>
  <div class="Detail">
    <DetailHeader></DetailHeader>
    <DetailTop></DetailTop>
    <div style="height: 100rem;">演示Top效果</div>
  </div>
</template>

<script>
import Header from './components/Header'
import Top from './components/Top'
export default {
  name: 'Detail',
  components: {
    DetailHeader: Header,
    DetailTop: Top
  }
}
</script>

<style lang="stylus" scoped>

</style>
