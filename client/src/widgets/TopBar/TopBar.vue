<script setup lang="ts">
import UseLogo from "./../../ui/UseLogo/UseLogo.vue";
import UseButton from "../../ui/UseButton/UseButton.vue";
import { useModalStore } from "../../helpers/store/modalStore";

const modalStore = useModalStore();
</script>

<template>
<header class="topbar">
    <div class="logo_container">
        <UseLogo />
        <span class="vertical-divider"></span>
        <p class="">Команда разработки и дизайна</p>
    </div>
    <UseButton class="contact_button" use-hover @click="modalStore.contactModal = true">
        <p>Связаться</p>
        <img class="contact_icon" src="/icons/text.svg" alt="">
    </UseButton>
</header>
</template>

<style scoped lang="scss">

.topbar{
    height: var(--bar-height);
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

.topbar :deep(.link-button) .contact_icon{
    display: none;
}

@media screen and (max-width: 640px) {

    .topbar{
        align-items: center;
    }

    .topbar :deep(.link-button) p{
        display: none;
    }

    .topbar :deep(.link-button) .contact_icon{
        display: block;
        width: 32px;
    }

    .logo_container{
        height: 24px;
    }

    .logo_container p{
        font-size: 12px;

        @media screen and (min-width: 1900px) {
            font-size: 32px;
        }
    }

    .logo_container :deep(img){
        height: 100%;
    }

    .contact_button{
        padding: 2px;
    }
}
</style>