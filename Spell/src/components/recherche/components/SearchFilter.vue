<template>
  <div class="search-filter">
    <div class="label">{{ label }}</div>
    <div class="search">
      <slot name="search"></slot>
    </div>
    <div class="btn">
      <slot name="button"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    }
  }
}
</script>
<style scoped>
.search-filter {
  margin: 0 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "label search btn";
  align-items: center;
}

.label {
  grid-area: label;
  justify-self: flex-start;
}

.search { grid-area: search; }

.btn { grid-area: btn; }

</style>
