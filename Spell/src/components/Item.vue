<template>
<div class="result-container">
    <h3>{{title}}</h3>
    <button class="desc_container" @click="openDesc">En savoir + </button>
    <div class="desc_item" v-if="showDesc" >
        <p>{{desc}}</p>
    </div>
</div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
export default {
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  setup (props) {
    const tmp = computed(() => props.title + ' ' + props.desc)

    const showDesc = ref(false)

    const openDesc = () => {
      showDesc.value = !showDesc.value
    }

    return {
      tmp,
      openDesc,
      showDesc
    }
  }
}
</script>

<style lang="css" scoped>
    .result-container {
        background-color: var(--background-secondary-color);
        width: 17.5vw;
        border-radius: 10px;
        padding: 5px;
    }

    h3 {
        text-align: center;
       font-family: var(--font-stat);
       color:var(--primary-color);
       font-size:2rem;
       margin:0;
    }
    button{
      font-family: var(--font-text);
      color:var(--text-color);
      background-color:transparent;
      box-shadow: none;
      border:none;
    }
</style>
