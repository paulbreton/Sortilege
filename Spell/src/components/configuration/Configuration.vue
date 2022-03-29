<template>
  <div class="configuration">
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
<style lang="css" scoped>
.group-filters{
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
}
.configuration {
  background-color: var(--background-secondary-color);
  border-radius: 15px;
  margin:5vh auto auto auto;
  width:70vw;
  height:70vh;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
