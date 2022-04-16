<template>
  <div class="list">
    <StatBySchool v-for="school in schools" v-bind:key="school.name" :school="school.name" :sorts="school.nbSorts" />
  </div>
</template>
<script>
import StatBySchool from './StatBySchool.vue'
export default {
  components: {
    StatBySchool
  },
  props: {
    schools: {
      type: Array
    }
  }
}
</script>
<style scoped>
.list {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8rem;
}
</style>
