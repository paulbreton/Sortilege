<template>
  <div class="stat">
    <h1 class="title"> Statistiques </h1>
    <div class="nb-books">
      <h2>Statistiques globales</h2>
      <ColumnCard />
    </div>
    <div class="nb-schools">
      <h2>Statistiques nombre de sorts par écoles </h2>
      <div class="school-item">
        <List :schools="sortBySchool" />
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/statistics/List'
import ColumnCard from '@/components/statistics/ColumnCard'
import { countSortsBySchools } from '@/api/service'
export default{
  components: {
    ColumnCard,
    List
  },
  setup () {
    // sort par école
    const sortBySchool = countSortsBySchools()

    return {
      sortBySchool
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
  padding: 20px;
  grid-template-areas:
    "title title title"
    "nb_books nb_categories nb_categories";
}
.nb-books {
  grid-area: nb_books;
 }
.nb-books div {
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
