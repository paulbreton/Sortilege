export function mapArray (array, indice) {
  return array.map((element) => element[indice])
}

export function sortSingleStringArray (array, indice) {
  const res = mapArray(array, indice).flat()
  return res.sort().filter((element, index, array) => index === array.indexOf(element))
}

export function filterTable (array, indice, value) {
  return array.filter((element) => element[indice].includes(value) && element[0] === 'MJ')
}
