<template>
  <div class="result">
    <Item
      v-for = "(item, index) in items"
      :key="index"
      :title="item.title"
      :desc="item.desc"
      />
  </div>

</template>

<script>
import Item from '@/components/Item.vue'
export default {
  components: {
    Item
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
        gap: 8px;
        margin: 0 auto;
    }
</style>
