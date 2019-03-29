<template>
  <div id="app">
    <keep-alive> <!-- 路由缓存 -->
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
