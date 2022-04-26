import { ref } from '@vue/composition-api'
import { findByName, findByBranch, findBySchool, findByClass, findByBook, findByLevel } from '@/api/service'
import { sortTable } from '../../../api/data'

export function useSearch (root, emit) {
  const allSearchFilters = ref({
    name: null,
    class: null,
    school: null,
    branch: null,
    level: null,
    bookAvailable: null,
    bookAddSelect: null,
    nbBookFind: 0
  })

  // remise à zéro des filtres sélectionnés
  const reset = () => {
    allSearchFilters.value = {
      name: null,
      class: null,
      level: null,
      school: null,
      branch: null,
      bookAvailable: null,
      bookAddSelect: null,
      nbBookFind: 0
    }
    emit('results', [])
    root.$store.dispatch('filters/reset')
  }

  // constitution de la requête selon les filtres sélectionnés
  const search = () => {
    const branch = allSearchFilters.value.branch
    const name = allSearchFilters.value.name
    const school = allSearchFilters.value.school
    const className = allSearchFilters.value.class
    const level = parseInt(allSearchFilters.value.level)
    const bookAdd = root.$store.state.filters.bookAdd

    let filters = ''
    if (name) {
      filters = filters.concat(findByName(name))
    }
    if (branch) {
      filters = filters.length ? filters.concat(' && ') : filters
      filters = filters.concat(findByBranch(branch))
    }
    if (school) {
      filters = filters.length ? filters.concat(' && ') : filters
      filters = filters.concat(findBySchool(school))
    }
    if (className) {
      filters = filters.length ? filters.concat(' && ') : filters
      filters = filters.concat(findByClass(className))
    }
    if (bookAdd.length > 0) {
      filters = filters.length ? filters.concat(' && ') : filters
      filters = filters.concat(findByBook(bookAdd))
    }
    if (level) {
      filters = filters.length ? filters.concat(' && ') : filters
      filters = filters.concat(findByLevel(level))
    }

    // eslint-disable-next-line
    const array = sortTable

    if (filters.length > 0) {
      // eslint-disable-next-line
      const res = eval('array.filter((book) => ' + filters + ')')
      allSearchFilters.value.nbBookFind = res.length
      emit('results', res)
    } else {
      allSearchFilters.value.nbBookFind = 0
      emit('results', [])
    }
  }

  return {
    allSearchFilters,
    reset,
    search
  }
}
