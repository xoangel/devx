<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ServiceTip from '../ui/ServiceTip.vue';
import Lenis from 'lenis';
import { useModalStore } from '../helpers/store/modalStore';
import { ServiceModalData } from '../helpers/types/typeCase';

const developmentTips = ["Лендинги", "CMS", "Хостинг", "Анимации и взаимодействие", "Telegram Mini Apps", "Telegram-боты", "Корпоративные сайты"];
const designTips = ["Прототипирование", "Анализ и исследование", "UX/UI", "Адаптивный дизайн"];
const aiTips = ["Анализ данных", "Маркетинговые исследования", "Разработка стратегий", "Формирование документации", "Системная интеграция"];
const modalStore = useModalStore();

const container = ref(null);
const wrapper = ref(null);
const developmentModalData: ServiceModalData = {
    title: "Разработка",
    firstTab: {
        title: "Веб-сайт",
        minPrice: "60 000",
        points: [
            "Аудит/Анализ (исследование рынка, конкурентный анализ)",
            "Карта сайта, структура, копирайтинг",
            "Прототипитрование",
            "Дизайн",
            "Backend-разработка",
            "Frontend-разработка",
            "Интеграции",
            "SEO-оптимизация",
            "Запуск"
        ]
    },
    secondTab: {
        title: "Telegram Web Apps",
        minPrice: "15 000",
        points: [
            "Аудит/Анализ (исследование рынка, конкурентный анализ)",
            "Проектирование",
            "Дизайн",
            "Backend-разработка",
            "Frontend-разработка",
            "Интеграции",
            "Запуск"
        ]
    }
};

const designModalData: ServiceModalData = {
    title: "Дизайн интерфейса",
    firstTab: {
        title: "Стадии разработки",
        minPrice: "25 000",
        points: [
            "Аудит/Анализ (исследование рынка, конкурентный анализ)",
            "Прототипитрование",
            "Дизайн десктопной (ПК) версии",
            "Дизайн адаптивов",
        ]
    },
    image: "/design_cover.png"
};

const loadModal = (data: ServiceModalData) => {
    modalStore.servicesStoreData = data;
    modalStore.servicesStore = true;
}

onMounted(async () => {
    if (container.value && wrapper.value) {
        const lenis = new Lenis({
            wrapper: wrapper.value,
            content: container.value,
            lerp: 0.1,
            smoothWheel: true,
            syncTouch: true
        });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

    document.querySelectorAll('.services__service_card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const chrome = card.querySelector('.chrome');
            const cardRect = card.getBoundingClientRect();

            // Вычисляем смещение относительно курсора
            const offsetX = (((e as any).clientX - cardRect.left) / cardRect.width - 0.5) * 64; // 16px в обе стороны
            const offsetY = (((e as any).clientY - cardRect.top) / cardRect.height - 0.5) * 64;
            const rotateZ = (((e as any).clientX - cardRect.left) / cardRect.width - 0.5) * 20;

            if (chrome) (chrome as any).style.transform = `translate(${offsetX}px, ${offsetY}px) rotateZ(${-rotateZ}deg)`;
        });

        // Возвращаем обратно при уходе курсора с карточки
        card.addEventListener('mouseleave', () => {
            const chrome = card.querySelector('.chrome');
            if (chrome) (chrome as any).style.transform = 'translate(0, 0) rotate(0deg)';
        });
    });

})
</script>

<template>
    <main ref="wrapper" class="services view">
            <div ref="container" class="services__content flex flex-col">
                <div class="services__title w-full flex items-center gap-6 mb-6">
                    <p class="text-white text-nowrap leading-none text-2xl">Стадия 1</p>
                    <span class="w-full h-0.5 opacity-25" style="background-color: var(--white-color)"></span>
                </div>
                <div class="services__group flex gap-4">
                    <div class="services__service_card p-6 relative rounded-xl w-full h-96 flex flex-col justify-between overflow-hidden"
                        @click="loadModal(developmentModalData)">
                        <h1 class="text-white">Разработка</h1>
                        <div class="z-10">
                            <div class="services__tips  flex flex-wrap w-full gap-x-3 gap-y-2 mt-auto">
                                <ServiceTip v-for="(tip, idx) in developmentTips" :key="idx" :text="tip" />
                            </div>
                            <img src="/icons/click.svg" class="click ml-auto">
                        </div>
                        <img src="/chrome_1.png" class="chrome absolute right-4 bottom-8 h-4/5">
                    </div>
                    <div class="services__service_card relative p-6 rounded-xl w-full h-96 flex flex-col justify-between overflow-hidden"
                        @click="loadModal(designModalData)">
                        <h1 class="text-white">Дизайн</h1>
                        <div class="z-10">
                            <div class="services__tips flex flex-wrap w-full gap-3 mt-auto">
                                <ServiceTip v-for="(tip, idx) in designTips" :key="idx" :text="tip" />
                            </div>
                            <img src="/icons/click.svg" class="click ml-auto">
                        </div>
                        <img src="/chrome_2.png" class="chrome absolute right-4 bottom-8 h-4/5">
                    </div>
                </div>
                <div class="services__title w-full flex items-center gap-6 mt-6 mb-8">
                    <p class="text-white text-nowrap leading-none text-2xl">Стадия 2 - Скоро</p>
                    <span class="w-full h-0.5 opacity-25" style="background-color: var(--white-color)"></span>
                </div>
                <div class="services__group flex gap-4 pb-4">
                    <div
                        class="services__service_card services__service_card-blocked p-6 relative rounded-xl w-full h-96 flex flex-col justify-between overflow-hidden">
                        <div class="blocked_overlay absolute w-full h-full left-0 top-0 rounded-xl z-20">

                        </div>
                        <h1 class="text-white">Интеграция ИИ для бизнеса</h1>
                        <div class="z-10">
                            <div class="services__tips  flex flex-wrap w-1/2 gap-x-3 gap-y-3 mt-auto">
                                <ServiceTip v-for="(tip, idx) in aiTips" :key="idx" :text="tip" />
                            </div>
                            <img src="/icons/click.svg" class="click ml-auto">
                        </div>
                        <img src="/document.png" class="absolute right-4 bottom-8 h-4/5">
                    </div>
                </div>
            </div>
        </main>
</template>

<style lang="scss" scoped>

.services__group{
    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
}
.services {
    overflow: hidden;
    background: var(--black-color);
    border-radius: 12px
}

.services__service_card {
    background: #202020;
    border: 1px solid var(--light-grey-color);
    cursor: pointer;
    transition: background .3s ease;

    @media screen and (max-width: 640px) {
        height: 500px;
    }

    h2 {
        color: var(--white-color);
    }

    &-blocked {
        cursor: default;
        background: #202020 !important;

        .blocked_overlay {
            backdrop-filter: blur(16px);
        }
    }
}

.services__service_card:hover {
    background: #2F2F2F;
    transition: background .3s ease;
}

.chrome {
    z-index: 0;
    transition: transform 1s ease-out;

    @media screen and (max-width: 640px) {
        height: 60%;
        bottom: 10%;
    }
}

.services__service_card:hover .chrome {
    transition: transform 1s ease-out
}

.click {
    opacity: .5;
    transition: opacity .3s ease;
}

.services__service_card:hover .click {
    opacity: 1;
    transition: opacity .3s ease;
}
</style>