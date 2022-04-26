// map un tableau selon un indice précis, allège l'écriture dans l'utilisation
export function mapArray (array, indice) {
  return array.map((element) => element[indice])
}

// trie un tableau et renvoie uniquement des valeurs unique
export function sortSingleStringArray (array, indice) {
  const res = mapArray(array, indice).flat()
  return res.sort().filter((element, index, array) => index === array.indexOf(element))
}
