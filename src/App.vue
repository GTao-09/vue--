<template>
  <div id="app">
    <keep-alive exclude="Top"> <!-- 路由缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
