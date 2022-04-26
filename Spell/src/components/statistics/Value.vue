<template>
  <div class="stat-value">
    <p class="stat-nb">{{ chiffre }}</p>
    <p> {{ desc }}</p>
  </div>
</template>
<script>
export default {
  props: {
    chiffre: {
      type: Number
    },
    desc: {
      type: String
    }
  }
}
</script>

<style lang="css" scoped>
.stat-value{
  text-align: center;
  padding:5px;
  flex-direction:column;
  width:60%;
}
.stat-nb{
  font-size:4.5rem;
  margin:0;
  padding:0;
  font-family: var(--font-stat);
  color:var(--primary-color);
}
p{
  margin:0;
}
</style>
