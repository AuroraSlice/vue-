// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/reset200802.css'
import './assets/css/iconfont.css'
//fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body);

//Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


//axios
import axios from "axios"
Vue.prototype.$http =axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
