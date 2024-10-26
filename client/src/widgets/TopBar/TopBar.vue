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
    <UseButton use-hover><p>Связаться</p></UseButton>
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

@media screen and (max-width: 640px) {

    .topbar{
        align-items: center;
    }

    .topbar :deep(.link-button) p{
        display: none;
    }

    .logo_container{
        height: 24px;
    }

    .logo_container p{
        font-size: 12px;
    }

    .logo_container :deep(img){
        height: 100%;
    }
}
</style>