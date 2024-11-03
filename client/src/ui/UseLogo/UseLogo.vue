<script setup lang="ts">

</script>

<template>
    <router-link to="/">
       <img class="logo pointer" src="/logo.svg" alt="">
    </router-link>
</template>

<style scoped lang="scss">
    .logo{
        @media screen and (min-width: 1900px) {
            height: 48px;
            max-width: unset;
        }
    }
</style>