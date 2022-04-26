<template>
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
</template>
<script>
export default {
  props: {
    sort: {
      type: Array
    }
  }
}
</script>
<style scoped>
ul{
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
