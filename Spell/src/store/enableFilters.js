const state = {
  name: true,
  school: false,
  branch: false,
  class: false,
  level: false
}

const actions = ({
  fetch_name ({ commit }, value) {
    commit('setName', value)
  },
  fetch_school ({ commit }, value) {
    commit('setSchool', value)
  },
  fetch_branch ({ commit }, value) {
    commit('setBranch', value)
  },
  fetch_class ({ commit }, value) {
    commit('setClass', value)
  },
  fetch_level ({ commit }, value) {
    commit('setLevel', value)
  }
})

const mutations = ({
  setName (state, value) {
    state.name = value
  },
  setSchool (state, value) {
    state.school = value
  },
  setBranch (state, value) {
    state.branch = value
  },
  setClass (state, value) {
    state.class = value
  },
  setLevel (state, value) {
    state.level = value
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
