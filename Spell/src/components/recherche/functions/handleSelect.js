export function useHandleSelect (allSearchFilters) {
  const nameSelected = (value) => {
    allSearchFilters.value.name = value
  }

  const classSelected = (value) => {
    allSearchFilters.value.class = value
  }

  const schoolSelected = (value) => {
    allSearchFilters.value.school = value
  }

  const branchSelected = (value) => {
    allSearchFilters.value.branch = value
  }

  const levelSelected = (value) => {
    allSearchFilters.value.level = value
  }

  const bookAvailableSelected = (value) => {
    allSearchFilters.value.bookAvailable = value
  }

  const bookAddSelected = (value) => {
    allSearchFilters.value.bookAddSelect = value
  }

  return {
    branchSelected,
    nameSelected,
    schoolSelected,
    classSelected,
    levelSelected,
    bookAvailableSelected,
    bookAddSelected
  }
}
