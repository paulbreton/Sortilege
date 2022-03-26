<template>
  <nav>
        <img src="../assets/logo.png" height="40vh">
        <router-link class="name" to="/">Sortilege </router-link>
        <ul>
            <li><router-link to="/configuration">Configuration </router-link></li>
            <li><router-link to="/search">Recherche</router-link></li>
            <li><a href="Statistiques.html">Statistiques</a></li>
        </ul>
    </nav>
</template>

<style lang="css" scoped>
   nav{
       display:flex;
       flex-direction: row;
       justify-content: space-between;
       height: 10vh;
       margin:0;
       position: sticky;
       width:100wv;
       align-items: center;
       background-color: var(--background-secondary-color);
   }
   nav ul{
        display: flex;
        flex-direction: row;
        width:90vw;
        justify-content: flex-end;
        margin:0;
        list-style: none;
    }

    nav ul li{
        margin : 0 20px;
        font-size:  var(--nav-size);
    }
    .name{
        font-family: var(--font-stat);
        font-size: 2rem;
        padding:5px;
        color: var(--primary-color);
    }

</style>
