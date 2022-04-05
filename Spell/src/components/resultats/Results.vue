<template>
  <div class="result">
    <Item
      v-for = "(item, index) in results"
      :key="index"
      :sort="item"
      />
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
  },
  setup () {
    const items = [
      {
        title: 'titre1',
        desc: 'desc1'
      },
      {
        title: 'titre2',
        desc: 'desc2'
      }
    ]
    return {
      items
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
</style>
