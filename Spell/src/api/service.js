import { sortTable } from './data'
import { mapArray, sortSingleStringArray } from './functions/sortTableValue'

/* ======================================= */
/* ============== FETCH DATA ============= */
/* ======================================= */

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

/* ======================================= */
/* ============ FIND BY FIELD ============ */
/* ======================================= */

export function findByName (name) {
  // indice 1 ---> 'String'
  return 'book[1].toUpperCase().includes(name.toUpperCase())'
}

export function findBySchool (school) {
  // indice 2 ---> 'String'
  return 'book[2] === school'
}

export function findByBranch (branch) {
  // indice 3 ---> ['String', 'String']
  return 'book[3].includes(branch)'
}

export function findByClass (className) {
  /* indice 4 ---> [
    ['String', 'Level'],
    ['String', 'Level']
  ] */
  return 'book[4].flat().includes(className)'
}

export function findByBook (bookAdd) {
  // indice 0 --> 'String'
  return 'bookAdd.includes(book[0])'
}

export function findByLevel (level) {
  // indice 0 --> 'String'
  return 'book[4].flat().includes(level)'
}

/* ======================================= */
/* =========== SORT RESULTATS ============ */
/* ======================================= */
