<script setup lang="ts">

</script>

<template>
    <button href="" class="link-button" type="button">
        <slot></slot>
    </button>
</template>

<style lang="css">
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
        overflow: hidden;
        position: relative;
        border: 1px solid var(--black-color);
        transition: border .5s .5s ease;
    }

    .link-button::before{
        content: '';
        display: block;
        position: absolute;
        right: -110%;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 80px;
        width: 110%;
        height: 100px;
        background-color: #121212;
        transition: right .5s ease-in-out;
    }

    .link-button:hover{
        border: 1px solid var(--white-color);
        transition: border .5s ease;
    }

    .link-button:hover::before{
        right: -5%;
        transition: right .5s ease-in-out;
    }

    .link-button>p{
        color: var(--black-color);
        transition: color .5s ease;
    }

    .link-button:hover>p{
        color: var(--white-color);
        transition: color .5s ease;
        z-index: 1;
    }
</style>