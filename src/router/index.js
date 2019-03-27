import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import City from '../pages/City/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/city',
      name: 'CityLink',
      component: City
    },
    {
      path: '*', redirect: '/'
    }
  ],
  mode: 'history'
})
