import { fetchBookAvailable } from '@/api/service'

const state = {
  name: 'Page accueil',
  bookAvailable: [],
  bookAdd: []
}

const actions = ({
  fetchBookAvailable ({ commit }) {
    const book = fetchBookAvailable()
    commit('setBookAvailable', book)
  },
  addBook ({ commit }, book) {
    commit('setBookAdd', book)
  },
  deleteBook ({ commit }, book) {
    commit('setDeleteBook', book)
  },
  reset ({ commit }) {
    commit('reset')
  },
  resetName ({ commit }) {
    commit('setName', 'Page accueil')
  }
})

const mutations = ({
  setName (state, newName) {
    state.name = newName
  },
  setBookAvailable (state, book) {
    state.bookAvailable = [...book]
  },
  setBookAdd (state, book) {
    state.bookAdd.push(book)
    state.bookAvailable.splice(state.bookAvailable.findIndex((oldBook) => oldBook === book), 1)
  },
  setDeleteBook (state, book) {
    state.bookAvailable.push(book)
    state.bookAdd.splice(state.bookAdd.findIndex((oldBook) => oldBook === book), 1)
  },
  reset (state) {
    state.bookAdd = []
    this.dispatch('filters/fetchBookAvailable')
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
