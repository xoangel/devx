<script setup lang="ts">
import Case from '../../helpers/types/typeCase';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = CyrillicToTranslit();
const props = defineProps<{
    case: Case
}>();
const url = `/projects/${encodeURIComponent(cyrillicToTranslit.transform(props.case.company_name).toLowerCase())}?id=${props.case.documentId}`
</script>

<template>
    <router-link class="case_card__link" :to="url">
        <article class="case_card relative">
            <div class="case_card__wrapper w-full h-full z-10 relative">
                <img class="case_card__cover" :src="`http://localhost:1337${props.case.screenshots[0].url}`" />
                <div class="case_card__service">
                    <p>{{ props.case.service }}</p>
                </div>
                <h1 class="case_card__title arimo leading-tight">
                    {{ props.case.company_name }}
                </h1>
                <div class="case_card__description">
                    <p>{{ props.case.company_type }}</p>
                </div>
                <img src="/icons/click.svg" alt="" class="case_card__icon">
            </div>
            <div class="dots_border"></div>
        </article>
    </router-link>
    
</template>

<style scoped lang="scss">
.case_card {
    position: relative;
    width: 512px;
    height: 100%;
    border-radius: 12px;
    cursor: pointer;
    transform-origin: center;

    @media screen and (max-width: 640px) {
        width: 100%;
        height: 500px;
        border-radius: 8px;
    }

    @media screen and (min-width: 1900px) {
        width: 640px;
    }

    &__wrapper{
        background-color: var(--dark-grey-color);
        border-radius: 12px;
    }

    .dots_border {
        --size_border: calc(100% + 4px);
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: var(--size_border);
        height: var(--size_border);
        background-color: transparent;
        z-index: 0;
        border-radius: 12px;
    }

    .dots_border::before {
        content: "";
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: left;
        transform: rotate(0deg);
        width: 100%;
        height: 25%;
        opacity: 0;
        background-color: white;
        mask: linear-gradient(transparent 0%, white 120%);
        animation: rotate 4s linear infinite;
        transition: opacity .5s ease;
    }
}

.case_card:hover .dots_border::before{
    opacity: 1;
    transition: opacity .5s ease;
}

.case_card__cover {
    width: 100%;
    border-radius: 12px;
    min-height: 35%;

    @media screen and (max-width: 640px){
        min-height: 100px;
    }
}

.case_card__service {
    margin-top: 8px;
    width: 100%;
    height: 42px;
    background-color: var(--grey-color);
    display: flex;
    align-items: center;
    padding: 0 16px;

    @media screen and (min-width: 1900px) {
        height: 64px;
        margin-top: 16px;
    }
}

.case_card__title {
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: 400;
    margin: 16px 16px 0px;
    transition: text-shadow .5s ease;
    text-shadow: 0 0 0 var(--white-color);

    @media screen and (min-width: 1900px) {
        margin: 36px 24px 12px;
    }
}

.case_card__description {
    padding: 0 16px 16px 16px;

    @media screen and (min-width: 1900px) {
        padding: 0 24px 24px 24px;
    }
}

.case_card__description>p {
    line-height: 132%;
    text-overflow: ellipsis;
}

.case_card__icon {
    height: 48px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    opacity: .35;
    transform: scale(1);
    transition: opacity .5s ease, transform .5s ease-in-out;
}

.case_card:hover {
    transition-duration: 150ms;
    box-shadow: 0 5px 20px 5px #00000044;

    .case_card__icon {
        opacity: 1;
        transform: scale(1.1);
        transition: opacity .5s ease, transform .5s ease-in-out;
    }

    .case_card__title{
        text-shadow: 0 0 4px var(--white-color);
    }
}

// .case_card__link:active .case_card__icon {
//         opacity: .2;
//         transform: translate(-20%, -20%) scale(50);
//         transition: opacity .5s ease, transform .5s ease-in-out;
//     }

@keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
</style>