import { ref } from '@vue/composition-api'
import { findByName, findByBranch, findBySchool, findByClass } from '@/api/service'
import { sortTable } from '../../../api/data'

export function useSearch (root) {
  const allSearchFilters = ref({
    name: null,
    class: null,
    school: null,
    branch: null,
    bookAvailable: null,
    bookAddSelect: null
  })

  const reset = () => {
    allSearchFilters.value = {
      name: null,
      class: null,
      school: null,
      branch: null,
      bookAvailable: null,
      bookAddSelect: null
    }
    root.$store.dispatch('filters/reset')
  }

  const search = () => {
    const branch = allSearchFilters.value.branch
    const name = allSearchFilters.value.name
    const school = allSearchFilters.value.school
    const className = allSearchFilters.value.class
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

    // eslint-disable-next-line
    const array = sortTable
    // eslint-disable-next-line
    return eval('array.filter((book) => ' + filters + ')')
  }

  return {
    allSearchFilters,
    reset,
    search
  }
}
