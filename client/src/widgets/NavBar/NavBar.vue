<script setup lang="ts">
    import { Ref, ref } from 'vue';
    
    const nav: Ref<Element | null> = ref(null);

    function openContacts(){
        if(nav.value) nav.value.classList.toggle("open_contacts")
    }
</script>

<template>
<nav ref="nav">
    <div class="nav_link">
        <RouterLink to="/">DEVX</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="nav_link">
        <RouterLink to="/">Проекты</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="nav_link">
        <RouterLink to="/">Услуги</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div @click="openContacts()" class="nav_link nav_link-contacts">
        <a class="nav_link__contacts">Контакты</a>
    </div>
    <div class="nav__contacts_bar">
        <div class="nav__contacts_bar__link">
            <img src="/icons/telegram.svg" alt="tg" class="nav__contacts_bar__icon">
            <a>Telegram</a>
        </div>
        <div class="nav__contacts_bar__link">
            <img src="/icons/whatsapp.svg" alt="wa" class="nav__contacts_bar__icon">
            <a>What's App</a>
        </div>
        <div class="nav__contacts_bar__link">
            <img src="/icons/phone.svg" alt="phone" class="nav__contacts_bar__icon">
            <a>+7 (999) 420-31-61</a>
        </div>
        <div class="nav__contacts_bar__link">
            <img src="/icons/mail.svg" alt="mail" class="nav__contacts_bar__icon">
            <a>dev.x.team@ya.ru</a>
        </div>
    </div>
</nav>
</template>

<style lang="css">
    nav{
        position: relative;
        display: grid;
        grid-template-columns: 1fr 150px 1fr 150px 1fr 150px 1fr;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        transition: grid-template-columns .5s ease-in-out;
    }

    .open_contacts{
        grid-template-columns: 1fr 150px 1fr 150px 1fr 150px 1.25fr;
        transition: grid-template-columns .5s ease-in-out;
    }

    .nav_dots{
        display: flex;
        align-self: center;
        justify-content: space-around;
        width: 100%;
    }

    .dot{
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: var(--white-color);
    }

    .nav_link, .nav__contacts_bar__link{
        box-shadow: 0 0 0 0px white inset;
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: box-shadow .45s ease;
    }

    .nav_link>a{
        z-index: 1;
    }

    .nav_link::before{
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #121212;
        width: 102%;
        aspect-ratio: 1;
        pointer-events: none;
        transition: width .5s ease;
    }

    .nav_link:hover{
        box-shadow: 0 0 0 1px white inset;
    }

    .nav_link:hover::before{
        width: 0%;
        transition: width .5s ease;
    }

    .nav__contacts_bar{
        position: absolute;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        gap: 16px;
        background-color: var(--black-color);
        z-index: 2;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0s ease-in-out, visibility 0s 0s;
    }

    .open_contacts .nav__contacts_bar{
        visibility: visible;
        opacity: 1;
        transition: opacity .5s ease-in-out, visibility 0s 0s;
    }

    .open_contacts .nav_link-contacts{
        z-index: 3;
        background-color: var(--white-color);
        transition: background-color .5s ease-in-out;
    }

    .open_contacts .nav_link__contacts{
        color: var(--black-color);
        transition:  color .5s ease-in-out;
    }

    .open_contacts .nav_link-contacts::before{
        display: none;
    }

    .nav__contacts_bar__icon{
        height: 24px;
    }

    .nav__contacts_bar__link{
        justify-content: flex-start;
        gap: 12px;
        padding: 0 16px;
        background-color: #121212;
        transform: scale(.7) translateX(200%);
        transition: all .75s;
        box-shadow: 0 0 0 1px white inset;
    }

    .nav__contacts_bar__link{
    
    }

    .open_contacts .nav__contacts_bar__link:nth-child(1){
        animation: pop .5s ease-in-out .4s forwards;
    }

    .open_contacts .nav__contacts_bar__link:nth-child(2){
        animation: pop .5s ease-in-out .25s forwards;   
    }

    .open_contacts .nav__contacts_bar__link:nth-child(3){
        animation: pop .5s ease-in-out .1s forwards;
    }

    .open_contacts .nav__contacts_bar__link:nth-child(4){
        animation: pop .5s ease-in-out 0s forwards;
    }

    @keyframes pop {
        from{
            transform: scale(.7) translateX(200%); 
        }

        to{
            transform: scale(1) translateX(0)
        }
    }
</style>