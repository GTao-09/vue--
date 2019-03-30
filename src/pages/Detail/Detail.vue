<template>
  <div class="Detail">
    <DetailHeader></DetailHeader>
    <DetailTop></DetailTop>
    <DetailList :list="list"></DetailList>
    <!-- <div style="height: 100rem;">演示Top效果</div> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Top from './components/Top'
import List from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailHeader: Header,
    DetailTop: Top,
    DetailList: List
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [{
            title: '成人票价格'
          }]
        },
        {
          title: '学生票',
          children: [{
            title: '学生票价格'
          }]
        },
        {
          title: '儿童票',
          children: [{
            title: '儿童票价格'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
