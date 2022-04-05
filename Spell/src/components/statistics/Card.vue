<template>
  <div class='stat-item'>
    <slot class="test"/>
    <Value :chiffre="chiffre" :desc="desc"/>
  </div>
</template>

<script>
import Value from '@/components/statistics/Value'
export default{
  components: {
    Value
  },
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
.stat-item{
  background-color: var(--background-secondary-color);
  text-align: center;
  padding:5px 5% 5px 10%;
  border-radius:10px;
  width:100%;
  height:20vh;
  align-items: center;
  justify-content: space-between;
}
svg{
  height:65%;
  color:var(--primary-color);
}
</style>
