// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Default from './layouts/Default.vue'
import router from './router'
import '@/assets/css/main.css'
import store from './store/index'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false

Vue.component('Default', Default)

Vue.use(VueCompositionAPI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
