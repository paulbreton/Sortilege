<template>
  <div>
    <Card :chiffre="sorts" desc="sorts">
      <template>
        <font-awesome-icon icon="fa-solid fa-wand-sparkles" />
      </template>
    </Card>
    <Card :chiffre="books" desc="livres">
      <template>
        <font-awesome-icon icon="fa-solid fa-book" />
      </template>
    </Card>
    <Card :chiffre="schools" desc="écoles">
      <template>
        <font-awesome-icon icon="fa-solid fa-hat-wizard" />
      </template>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import { countSorts, countBooks, countSchools } from '@/api/service'

export default {
  components: {
    Card
  },
  setup () {
    // récuperer le nombre de sort
    const sorts = countSorts()

    // récuperer le nombre de livres
    const books = countBooks()

    // récuperer le nombre d'école
    const schools = countSchools()

    return {
      sorts,
      books,
      schools
    }
  }
}
</script>
