<script setup lang="ts">
import TopBar from './widgets/TopBar/TopBar.vue';
import NavBar from './widgets/NavBar/NavBar.vue';
import ServicesModal from './widgets/ServicesModal/ServicesModal.vue';
</script>

<template>
<TopBar />
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition as string || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
<NavBar />

<ServicesModal />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
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

    :deep(.topbar){
      grid-row: 1/2;
    }

    :deep(.nav-desktop){
      grid-row: 3/4;
    }

    @media screen and (max-width: 640px) {
      padding: 12px;
    }

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

  .text-white{
    color: var(--white-color);
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


*::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #121212;
}

*::-webkit-scrollbar-track:hover {
  background-color: #202020;
}

*::-webkit-scrollbar-track:active {
  background-color: #202020;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #F6F8FF;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #C7C7C7;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #C7C7C7;
}

</style>
