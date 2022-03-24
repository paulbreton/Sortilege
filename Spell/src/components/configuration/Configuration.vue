<template>
  <div>
    <h1>Configuration</h1>
    <div class="group-filters">
      <FilterEnable module="name" label="Recherche nom"></FilterEnable>
      <FilterEnable module="school" label="Recherche école"></FilterEnable>
      <FilterEnable module="branch" label="Recherche branches"></FilterEnable>
      <FilterEnable module="class" label="Recherche classes et domaines"></FilterEnable>
      <FilterEnable module="level" label="Recherche par niveau"></FilterEnable>
    </div>
  </div>
</template>

<script>
import FilterEnable from '@/components/configuration/components/Filter.vue'
export default {
  components: {
    FilterEnable
  },
  setup () {}
}
</script>
<style scoped>
.group-filters {
  margin: 2rem 10rem;
}
</style>
