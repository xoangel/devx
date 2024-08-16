<script setup lang="ts">
import TopBar from './widgets/TopBar/TopBar.vue';
import NavBar from './widgets/NavBar/NavBar.vue';
</script>

<template>
<TopBar />
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
<NavBar />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
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
    overflow: hidden;
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

  .arimo{
    font-family: "Arimo", sans-serif;
  }

  html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

main{
  grid-row: 2/3;
  grid-column: 1/2;
}

.main_navigation{
  grid-row: 3/4;
}

  @media screen and (max-width: 640px) {
    #app{
      padding: 18px 5%;
    }
  }

</style>
