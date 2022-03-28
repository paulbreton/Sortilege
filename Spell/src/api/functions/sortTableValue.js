export function mapArray (array, indice) {
  return array.map((element) => element[indice])
}

export function sortSingleStringArray (array, indice) {
  const res = mapArray(array, indice).flat()
  return res.sort().filter((element, index, array) => index === array.indexOf(element))
}

export function mapValueNotNull (array) {
  return array.map((element) => element !== null)
}

export const mergeArray = (array, indice) => {
  return array.filter((element, index) => {
    return array.findIndex((c) => c[indice] === element[indice]) !== index
  })
}
