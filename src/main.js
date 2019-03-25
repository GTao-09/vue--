// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/reset.css' // 重置默认样式
import '../static/border.css' // 移动端1px像素处理
import fastClick from 'fastclick' // 解决移动端click事件延迟300ms

Vue.config.productionTip = false

fastClick.attach(document.body) // 使用生效

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
