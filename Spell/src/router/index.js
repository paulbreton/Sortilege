import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/recherche/Search.vue'
import Configuration from '../pages/Configuration.vue'
import Index from '../pages/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: Configuration
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
