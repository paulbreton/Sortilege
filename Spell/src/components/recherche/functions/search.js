import { ref } from '@vue/composition-api'
import { findByBranch } from '@/api/service'
import { sortTable } from '@/api/data'

export function useSearch (root) {
  const allSearchFilters = ref({
    name: null,
    class: null,
    school: null,
    branch: null,
    bookAvailable: null,
    bookAddSelect: null,
    bookAdd: []
  })

  const reset = () => {
    allSearchFilters.value = {
      name: null,
      class: null,
      school: null,
      branch: null,
      bookAvailable: null,
      bookAddSelect: null,
      bookAdd: []
    }
    root.$store.dispatch('filters/reset')
  }

  const search = () => {
    findByBranch(sortTable, allSearchFilters.value.branch)
  }

  return {
    allSearchFilters,
    reset,
    search
  }
}
