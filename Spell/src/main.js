// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Default from './layouts/Default.vue'
import router from './router'
import '@/assets/css/main.css'

Vue.config.productionTip = false

Vue.component('Default', Default)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
