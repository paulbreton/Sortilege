const state = {
  name: 'Page accueil'
}

const actions = ({
  fetchName ({ commit }, newName) {
    commit('setName', newName)
  },

  resetName ({ commit }) {
    commit('setName', 'Page accueil')
  }
})

const mutations = ({
  setName (state, newName) {
    state.name = newName
  }
})

const getters = ({})

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
