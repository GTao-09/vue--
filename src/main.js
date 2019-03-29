// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import './assets/styles/reset.css' // 重置默认样式
import './assets/styles/border.css' // 移动端1px像素处理
import fastClick from 'fastclick' // 解决移动端click事件延迟300ms
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图组件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body) // 解决移动端click事件延迟300ms使用生效
Vue.use(VueAwesomeSwiper) // 轮播图插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
