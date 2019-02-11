import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import City from '@/components/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
