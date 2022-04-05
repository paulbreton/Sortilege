<template>
<div class="stat">
  <h1 class="title"> Statistiques </h1>
  <div class="nb-books">
    <h2>Statistiques globales</h2>
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
  </div>
  <div class="nb-schools">
     <h2>Statistiques par écoles </h2>
  <div class="school-item"> </div>
</div>

</div>

</template>

<script>

import Card from '@/components/statistics/Card'
import {countSorts, countBooks, countSchools} from '@/api/service'
export default{
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
<style lang="css" scoped>
.stat {
  display: grid;
  grid-template-columns: 0.75fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr;
  gap: 0px 0px;
  padding: 20px;;
  grid-template-areas:
    "title title title"
    "nb_books nb_categories nb_categories";
}
.nb-books { grid-area: nb_books;
 }
.nb-books div{
  display:flex;
  flex-wrap:wrap;
  gap: 10px;
}
.nb-schools {
  grid-area: nb_categories;
}
.title {
  grid-area: title;
  text-align: center;
}
h2{
  text-align:center;
  font-family:var(--text-subtitle);
}
.school-item{
 background-color: var(--background-secondary-color);
  text-align: center;
  margin:auto;
  border-radius:10px;
  width:90%;
  height:calc(60vh + 50px);
}

</style>
