<template>
  <div class="result">
    <Item
      v-for = "(item, index) in results"
      :key="index"
      :sort="item"
      />
      <div class="no-result" v-show="results.length === 0">
        Aucun résultats
      </div>
  </div>

</template>

<script>
import Item from '@/components/resultats/Item.vue'
export default {
  components: {
    Item
  },
  props: {
    results: {
      type: Array
    }
  }
}
</script>
<style lang="css" scoped>
 .result {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
    margin: 20px auto;
    width:75vw;
}
.no-result {
  padding: 1rem;
  color: var(--text-color);
}
</style>
