<template>
  <div class="search-filter">
    <div class="label">{{ label }}</div>
    <div class="search">
      <!-- injection soit d'un input ou un select -->
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
  margin: 1rem 10rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "label search btn";
  align-items: center;
}
.search-filter{
  align-items: stretch;
  margin:0;
  padding:2px;
}
.label {
  grid-area: label;
  justify-self: flex-start;
  align-self: center;
  padding-left:10%;
}

.search {
  grid-area: search;
  align-items: stretch;
}

.btn {
  grid-area: btn;
  justify-self: center;
}

</style>
