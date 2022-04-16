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

/* ======================================= */
/* ============= STATISTICS ============== */
/* ======================================= */

// comptes le nombre de sorts
export function countSorts () {
  return sortTable.length
}
// comptes le nombre de livres
export function countBooks () {
  const books = fetchBookAvailable()
  return books.length
}
// comptes le nombre d'écoles
export function countSchools () {
  const schools = fetchAllSchool()
  return schools.length
}

function countSort (school) {
  return sortTable.filter((sort) => sort[2] === school)
}

// Récupère la répartition des sorts par écoles
export function countSortsBySchools () {
  // pour chaque école, on compte le nombre de sort
  const schools = fetchAllSchool()

  const tabSortBySchool = []

  schools.forEach(school => {
    tabSortBySchool.push({'name': school, 'nbSorts': countSort(school).length})
  })
  return tabSortBySchool
}
