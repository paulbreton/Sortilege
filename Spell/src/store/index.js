import Vue from 'vue'
import Vuex from 'vuex'

import filters from './filters'
import enableFilters from './enableFilters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    filters,
    enableFilters
  }
})
