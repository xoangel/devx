<script setup lang="ts">
import UseLogo from "./../../ui/UseLogo/UseLogo.vue";
import UseButton from "../../ui/UseButton/UseButton.vue";
</script>

<template>
<header class="topbar">
    <div class="logo_container">
        <UseLogo />
        <span class="vertical-divider"></span>
        <p class="">Команда разработки и дизайна</p>
    </div>
    <UseButton><p>Связаться</p></UseButton>
</header>
</template>

<style scoped lang="css">

.topbar{
    height: 42px;
    display: flex;
    justify-content: space-between;
}

.logo_container{
    display: flex;
    align-items: center;
    gap: 12px;
}

.vertical-divider{
    height: 100%;
    width: 4px;
    background-color: var(--light-grey-color);
}
</style>