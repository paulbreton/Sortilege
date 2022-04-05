<template>
<div class="result-container">
    <h3>{{ sort[1] }}</h3>
    <button class="desc_container" @click="openDesc">En savoir + </button>
    <div class="desc_item" v-if="showDesc" >
      <ul>
        <li> <span>Livre :</span> {{ sort[0] }}</li>
        <li><span>Ecole :</span> {{ sort[2] }}</li>
        <li><span>Branche :</span> {{ sort[3].toString() }}</li>
        <li><span>Classes :</span> {{ sort[4].toString() }} </li>
        <li><span>Composantes :</span> {{ sort[5].toString() }} </li>
        <li><span>Temps d'incantation :</span> {{ sort[6] }} </li>
        <li><span>Portée :</span> {{ sort[7] }}</li>
        <li><span>Cible :</span> {{ sort[8] }}</li>
        <li><span>Durée :</span> {{ sort[9] }}</li>
        <li><span>Jet de sauvegarde :</span> {{ sort[10] }}</li>
        <li><span>Resistance à la magie :</span> {{ sort[11] }}</li>
        <li><span>Description :</span> {{ sort[12] }} </li>
        <li><span>Nécessaire :</span> {{ sort[13] }}</li>
      </ul>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  props: {
    sort: {
      type: Array
    }
  },
  setup (props) {
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
  ul{
      /*list-style-type: "\1F44D";*/
      list-style-type:none;

    padding-inline-start: 10px;
    }
    li{
      margin:3px 10px 3px 0 ;
      text-align:justify;
      padding-left:0;
    }
    span{
      font-weight: 600;
      color:var(--primary-color);
    }
</style>
