<script setup lang="ts">
    import { Ref, ref } from 'vue';
    
    const nav: Ref<Element | null> = ref(null);
    const navMobile: Ref<Element | null> = ref(null);
    const mobileLinks: Ref<Element | null> = ref(null);
    const cop: Ref<boolean> = ref(false);
    // const routes = [
    //     {
    //         title: "Главная",
    //         path: "/"
    //     },
    //     {
    //         title: "Проекты",
    //         path: "/projects"
    //     },
    //     {
    //         title: "Услуги",
    //         path: "/services"
    //     },
    // ]

    function openContacts(){
        if(nav.value) nav.value.classList.toggle("open_contacts")
        cop.value = !cop.value
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
<nav ref="nav" class="nav-desktop main_navigation">
    <div class="nav_link" :class="{'active': $route.path ==='/'}">
        <RouterLink to="/">Главная</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="nav_link" :class="{'active': $route.path.startsWith('/projects')}">
        <RouterLink to="/projects/">Проекты</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="nav_link" :class="{'active': $route.path.startsWith('/services')}">
        <RouterLink to="/services">Услуги</RouterLink>
    </div>
    <div class="nav_dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div @click="openContacts" class="nav_link nav_link-contacts relative">
        <a class="nav_link__contacts">Контакты</a>
        <Transition name="fade">
                    <img v-if="cop" @click="openContacts" src="/icons/cross.svg" class="close-contacts-desktop absolute invert right-4" :class="{'active' : cop}"alt="close">
        </Transition>
    </div>
    <div class="nav__contacts_bar">
        <a href="https://t.me/xoangel17" target="_blank" class="nav__contacts_bar__link">
            <img src="/icons/telegram.svg" alt="tg" class="nav__contacts_bar__icon">
            <span>Telegram</span>
        </a>
        <a href="https://wa.me/message/5MGTG5NCVSJXF1" target="_blank" class="nav__contacts_bar__link">
            <img src="/icons/whatsapp.svg" alt="wa" class="nav__contacts_bar__icon">
            <span>What's App</span>
        </a>
        <a href="tel:+79994203161" class="nav__contacts_bar__link">
            <img src="/icons/phone.svg" alt="phone" class="nav__contacts_bar__icon">
            <span>+7 (999) 420-31-61</span>
        </a>
        <a href="mailto:dev.x.team@ya.ru" class="nav__contacts_bar__link">
            <img src="/icons/mail.svg" alt="mail" class="nav__contacts_bar__icon">
            <span>dev.x.team@ya.ru</span>
        </a>
    </div>
</nav>
<nav ref="navMobile" class="nav-mobile main_navigation">
    <a @click="expandMobileMenu()" class="nav-mobile__button-main">
        <p>Меню</p>
        <div class="nav-mobile__main_button__icon">
            <span class="circle"></span>
            <span class="line"></span>
            <!-- <span class="line"></span> -->
            <span class="line"></span>
        </div>
    </a>
    <div ref="mobileLinks" class="nav-mobile__links z-40">
        <router-link to="/" @click="expandMobileMenu()" class="nav-mobile__button">
            <p>Главная</p>
        </router-link>
        <router-link to="/projects" @click="expandMobileMenu()" class="nav-mobile__button">
            <p>Проекты</p>
        </router-link>
        <router-link to="/services" @click="expandMobileMenu()" class="nav-mobile__button">
            <p>Услуги</p>
        </router-link>
        <a @click.prevent="contactsMobile()" href="" class="nav-mobile__button nav-mobile__button-contacts relative">
            <p>Контакты</p>
            <img src="/icons/cross.svg" class="close_contacts-m w-6" alt="">
        </a>
        <div class="contact_buttons">
            <a href="https://t.me/xoangel17" target="_blank" class="contact-m">
                <img src="/icons/telegram.svg" alt="">
            </a>
            <a href="https://wa.me/message/5MGTG5NCVSJXF1" target="_blank"class="contact-m">
                <img src="/icons/whatsapp.svg" alt="">
            </a>
            <a href="tel:+79994203161" class="contact-m">
                <img src="/icons/phone.svg" alt="">
            </a>
            <a href="mailto:dev.x.team@ya.ru" class="contact-m">
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

    .nav_link:hover, .nav_link.active{
        box-shadow: 0 0 0 1px white inset;
    }

    .nav_link:hover::before, .nav_link.active::before{
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

    .close-contacts-desktop{
        transform: translateY(-50%) rotateZ(0deg);
        transition: all .3s var(--fast-out);
        top: 50%;
    }

    .close-contacts-desktop.active{
        transform: translateY(-50%) rotateZ(45deg);
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