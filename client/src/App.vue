<script setup lang="ts">
import TopBar from './widgets/TopBar/TopBar.vue';
import NavBar from './widgets/NavBar/NavBar.vue';
</script>

<template>
<TopBar />
<router-view />
<NavBar />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app{
    background-color: var(--black-color);
    height: 100vh;
    width: 100%;
    padding: 36px 5%;
    display: grid;
    grid-template-rows: 42px 1fr 42px;
    gap: 16px;
  }

  h1, h2, h3, h4, h5, p, a, button, span, div{
    font-family: "Exo 2", sans-serif;
  }

  h1{
    font-size: 40px;
  }

  h2{
    font-size: 24px;
  }

  p, a, button{
    font-size: 16px;
  }

  p, a{
    color: var(--white-color);
  }

  a{
    text-decoration: none;
  }

</style>
