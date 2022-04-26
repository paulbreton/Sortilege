<template>
  <div class="result-container">
      <h3>{{ sort[1] }}</h3>
      <button class="desc_container" @click="openDesc">En savoir + </button>
      <div class="desc_item" v-if="showDesc" >
          <Details :sort="sort" />
      </div>
  </div>
</template>

<script>
import Details from './Details.vue'
import { ref } from '@vue/composition-api'
export default {
  components: {
    Details
  },
  props: {
    sort: {
      type: Array
    }
  },
  setup () {
    /*
      livre: 0
      ecole: 2
      branches: 3
      Classe : 4
      composantes: 5
      temps: 6
      portée: 7
      cible: 8
      durée: 9
      jet: 10
      resistance: 11
      description: 12
      necessaire: 13
     */
    const showDesc = ref(false)

    const openDesc = () => {
      showDesc.value = !showDesc.value
    }

    return {
      openDesc,
      showDesc
    }
  }
}
</script>

<style lang="css" scoped>
.result-container {
    background-color: var(--background-secondary-color);
    width: 35vw;
    border-radius: 10px;
    padding: 5px;
}

h3 {
    text-align: center;
    font-family: var(--font-subtitle);
    color:var(--primary-color);
    font-size:1.25rem;
    word-spacing: 2px;
    margin:0;
}
button{
  font-family: var(--font-text);
  color:var(--text-color);
  background-color:transparent;
  box-shadow: none;
  border:none;
  font-size:1rem;
}

button:hover{
    color:var(--primary-color);
}
</style>
