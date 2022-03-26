import { sortTable } from './data'
import { mapArray, sortSingleStringArray, filterTable } from './functions/sortTableValue'

export function fetchBookAvailable () {
  return sortSingleStringArray(sortTable, 0)
}

export function fetchAllSchool () {
  return sortSingleStringArray(sortTable, 2)
}

export function fetchAllBranch () {
  return sortSingleStringArray(sortTable, 3)
}

export function fetchAllClass () {
  const allBranch = mapArray(sortTable, 4).flat()
  return sortSingleStringArray(allBranch, 0)
}

export function fetchAllLevel () {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

export function findByBranch (array, branch) {
  return filterTable(array, 3, branch)
}
