<template>
  <div class="home">
    <h1>Sortilege</h1>
    <p> Bienvenu dans le monde des Sortileges </p>
    <img src="../assets/logo.png">
  </div>
</template>

<style lang="css" scoped>
.home{
  background-color: var(--background-secondary-color);
  background-image: url(../assets/fond.gif);
  width:75vw;
  height:70vh;
  margin:10vh auto;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  justify-content:center;
}
 img{
   align-self: center;
}
.home h1, .home p{
  text-align: center;
}
.home h1{
  font-size:5rem;
  margin:0;
  font-family: var(--font-title);
}

</style>
