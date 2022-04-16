<template>
  <div class="sort-by-school">
    <div class="school">{{ school }}</div>
    <div class="sort">{{ sorts }}</div>
  </div>
</template>
<script>
export default {
  props: {
    school: {
      type: String
    },
    sorts: {
      type: Number
    }
  }
}
</script>
<style scoped>
.sort-by-school {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.school {
  color: var(--primary-color);
}
</style>
