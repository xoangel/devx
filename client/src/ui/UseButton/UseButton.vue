<script setup lang="ts">
defineProps({
    useHover: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button class="link-button" :class="useHover ? 'animated' : ''" type="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    .link-button{
        background-color: var(--white-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px;
        border-radius: 8px;
        height: 42px;
        min-width: 240px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border: 1px solid var(--black-color);
        transition: border .5s .5s ease, background-color .3s ease;

        &:not(.animated){
            overflow: visible;
        }

        @media screen and (min-width: 1900px){
            height: 56px;
        }
    }

    .link-button:not(.animated)::before{
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scaleY(.8) scaleX(.95);
        border-radius: 8px;
        border: 1px solid var(--white-color);
        width: 100%;
        height: 100%;
        transition: transform .5s var(--fast-out), opacity 1s ease;
        opacity: 0;
        background: transparent
    }

    .link-button:not(.animated):hover::before{
        opacity: .5;
        transform: translate(-50%, -50%) scaleY(1.3) scaleX(1.02);
    }


    .animated{
        overflow: hidden;
    }


    .animated::before{
        content: '';
        display: block;
        position: absolute;
        right: -110%;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 0px;
        width: 110%;
        height: 100px;
        background-color: #121212;
        transition: right .5s ease-in-out, border-radius .25s ease-in-out;
    }

    .animated:hover{
        border: 1px solid var(--white-color);
        transition: border .5s ease;
    }

    .animated:hover::before{
        border-radius: 80px;
        right: -5%;
        transition: right .5s ease-in-out, border-radius .25s ease-in-out;
    }

    .link-button>p{
        color: var(--black-color);
        transition: color .5s ease;
    }

    .animated:hover>p{
        color: var(--white-color);
        transition: color .5s ease;
        z-index: 1;
    }

    @media screen and (max-width: 640px) {
        .link-button{
            min-width: 42px;
        }
    }
</style>