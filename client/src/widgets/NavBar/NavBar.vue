<script setup lang="ts">
    import { Ref, ref } from 'vue';
    
    const nav: Ref<Element | null> = ref(null);
    const navMobile: Ref<Element | null> = ref(null);
    const mobileLinks: Ref<Element | null> = ref(null);

    function openContacts(){
        if(nav.value) nav.value.classList.toggle("open_contacts")
    }

    function expandMobileMenu(){
        if(navMobile.value){
            if(navMobile.value.classList.contains("mobile_contacts-opened")) navMobile.value.classList.remove("mobile_contacts-opened")
            navMobile.value.classList.toggle("menu-expanded");
        }
    }

    function contactsMobile() {
        if(navMobile.value) navMobile.value.classList.toggle("mobile_contacts-opened")
    }
</script>

<template>
<nav ref="nav" class="nav-desktop">
    <div class="nav_link">
        <RouterLink to="/">DEVX</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="nav_link">
        <RouterLink to="/projects/">Проекты</RouterLink>
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
<nav ref="navMobile" class="nav-mobile">
    <a @click="expandMobileMenu()" class="nav-mobile__button-main">
        <p>Меню</p>
        <div class="nav-mobile__main_button__icon">
            <span class="circle"></span>
            <span class="line"></span>
            <!-- <span class="line"></span> -->
            <span class="line"></span>
        </div>
    </a>
    <div ref="mobileLinks" class="nav-mobile__links">
        <a href="" class="nav-mobile__button">
            <p>Главная</p>
        </a>
        <a href="" class="nav-mobile__button">
            <p>Проекты</p>
        </a>
        <a href="" class="nav-mobile__button">
            <p>Услуги</p>
        </a>
        <a @click.prevent="contactsMobile()" href="" class="nav-mobile__button nav-mobile__button-contacts">
            <p>Контакты</p>
            <img src="/icons/cross.svg" class="close_contacts-m" alt="">
        </a>
        <div class="contact_buttons">
            <a href="" class="contact-m">
                <img src="/icons/telegram.svg" alt="">
            </a>
            <a href="" class="contact-m">
                <img src="/icons/whatsapp.svg" alt="">
            </a>
            <a href="" class="contact-m">
                <img src="/icons/phone.svg" alt="">
            </a>
            <a href="" class="contact-m">
                <img src="/icons/mail.svg" alt="">
            </a>
        </div>
    </div>
</nav>
</template>

<style lang="css">
    .nav-desktop{
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        transition: grid-template-columns .5s ease-in-out;
    }

    .nav-mobile{
        width: 100%;
        position: relative;
        display: none;
    }

    .open_contacts{
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1.45fr;
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
        gap: 12px;
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
        opacity: 0;
        transform: scale(.7) translateX(200%);
        transition: all .75s;
        box-shadow: 0 0 0 1px white inset;
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


    /* mobile */

    .nav-mobile__button-main, .nav-mobile__button, .contact-m {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        border: 1px solid var(--white-color);
        border-radius: 8px;
        padding: 4px 16px;
    }

    .contact-m{
        padding: 4px;
        background-color: #ffffff17;
        backdrop-filter: blur(42px);
        opacity: 0;
        transform: scale(.8) translateY(40px); 
        animation: collapse-contacts .5s var(--fast-out) forwards;
    }

    .nav-mobile__button{
        height: 42px;
        background: #ffffff17;
        backdrop-filter: blur(42px);
    }

    .nav-mobile__main_button__icon{
        position: relative;
        width: 24px;
        aspect-ratio: 1;
    }

    .mobile_contacts-opened .nav-mobile__button-contacts{
        background-color: var(--white-color);
        backdrop-filter: none;
        transition: all .5s ease;
    }

    .mobile_contacts-opened .nav-mobile__button-contacts>img{
        filter: invert(1);
    }

    .circle{
        position: absolute;
        border: 1px solid var(--white-color);
        height: 6px;
        width: 100%;
        border-radius: 8px; 
        top: 0;
        transition: top .5s var(--fast-out);;
    }

    .line{
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--white-color);
        border-radius: 2px;
        opacity: 1;
        transition: opacity .5s ease;
    }

    .line:nth-child(4){
        bottom: 0%;
        opacity: 1;
        transition: opacity .5s ease, bottom .5s var(--fast-out);
    }

    .line:nth-child(3){
        bottom: 25%;
        opacity: 1;
        transition: opacity .25s ease, bottom .5s var(--fast-out);
    }

    .line:nth-child(2){
        bottom: 50%;
        transition: bottom .5s .2s var(--fast-out);
    }

    .menu-expanded .line:nth-child(4), .menu-expanded .line:nth-child(3){
        opacity: 0;
        bottom: -10px;
        transition: opacity .25s ease, bottom .5s var(--fast-out);
    }

    .menu-expanded .line:nth-child(2){
        bottom: 25%;
        transition: bottom .5s var(--fast-out);
    }

    .menu-expanded .circle{
        top: 25%;
        transition: top .4s .2s var(--fast-out);
    }

    .nav-mobile__links{
        display: flex;
        position: absolute;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        top: -200px;
        visibility: hidden;
        opacity: 0;
        transition: opacity .5s ease-in-out, visibility 0s .5s;
    }

    .menu-expanded .nav-mobile__links{
        visibility: visible;
        opacity: 1;
        transition: opacity .5s ease-in-out, visibility 0s 0s;
    }

    .nav-mobile__button{
        opacity: 0;
        transform: scale(.7) translateY(200%);
        transition: all .5s ease; 
    }

    .menu-expanded .nav-mobile__button:nth-child(1){
        animation: pop-mobile .5s var(--fast-out) .4s forwards;
    }

    .menu-expanded .nav-mobile__button:nth-child(2){
        animation: pop-mobile .5s var(--fast-out) .25s forwards;
    }

    .menu-expanded .nav-mobile__button:nth-child(3){
        animation: pop-mobile .5s var(--fast-out) .1s forwards;
    }

    .menu-expanded .nav-mobile__button:nth-child(4){
        animation: pop-mobile .5s var(--fast-out) 0s forwards;
    }

    .mobile_contacts-opened .nav-mobile__links{
        align-items: end;
    }

    .mobile_contacts-opened .nav-mobile__button:nth-child(1){
        opacity: 0 !important;
        visibility: hidden;
        transition: opacity .5s ease, visibility 0s .5s
    }

    .mobile_contacts-opened .nav-mobile__button:nth-child(2){
        opacity: 0 !important;
        visibility: hidden;
        transition: opacity .5s ease, visibility 0s .5s
    }

    .mobile_contacts-opened .nav-mobile__button:nth-child(3){
        opacity: 0 !important;
        visibility: hidden;
        transition: opacity .5s ease, visibility 0s .5s
    }

    .mobile_contacts-opened .nav-mobile__button:nth-child(4){
        width: 42px;
    }
    
    .mobile_contacts-opened .nav-mobile__button:nth-child(4)>p{
        display: none;
    }

    .contact_buttons{
        width: calc(100% - 50px);
        left: 0;
        height: 42px;
        display: flex;
        gap: 8px;
        position: absolute;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s ease, visibility 0s .5s
    }

    .mobile_contacts-opened .contact_buttons{
        opacity: 1;
        visibility: visible;
        transition: opacity .5s ease, visibility 0s;
    }

    .close_contacts-m{
        display: none;
        transform: rotateZ(45deg);
    }

    .mobile_contacts-opened .close_contacts-m{
        display: block;
    }

    .mobile_contacts-opened .contact-m:nth-child(4){
        animation: pop-contacts .5s var(--fast-out) .4s forwards;
    }

    .mobile_contacts-opened .contact-m:nth-child(3){
        animation: pop-contacts .5s var(--fast-out) .25s forwards;
    }

    .mobile_contacts-opened .contact-m:nth-child(2){
        animation: pop-contacts .5s var(--fast-out) .1s forwards;
    }

    .mobile_contacts-opened .contact-m:nth-child(1){
        animation: pop-contacts .5s var(--fast-out) 0s forwards;
    }

    @media screen and (max-width: 640px) {
        .nav-desktop{
            display: none;
        }

        .nav-mobile{
            display: flex;
        }
    }

    @keyframes pop {
        from{
            opacity: 0;
            transform: scale(.7) translateX(200%); 
        }

        to{
            opacity: 1;
            transform: scale(1) translateX(0)
        }
    }

    @keyframes pop-mobile {
        from{
            opacity: 0;
            transform: scale(.7) translateY(200%); 
        }

        to{
            opacity: 1;
            transform: scale(1) translateY(0)
        }
    }

    @keyframes pop-contacts {
        from{
            opacity: 0;
            transform: scale(.8) translateY(40px);
        }

        to{
            opacity: 1;
            transform: scale(1) translateY(0); 
        }
    }

    @keyframes collapse-contacts {
        from{
            opacity: 1;
            transform: translateX(0);
        }

        to{
            opacity: 0;
            transform: translateX(200%);
        }
    }

</style>