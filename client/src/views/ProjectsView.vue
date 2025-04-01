<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import Case from '../helpers/types/typeCase';
import CaseCard from '../ui/CaseCard/CaseCard.vue';
import Lenis from 'lenis';
import { client } from '../config/graphql/client';
import { gql } from '@apollo/client/core';
import { useModalStore } from '../helpers/store/modalStore';
import FintechNda from '../widgets/NDAProjects/FintechNda.vue';
const caseList: Ref<Case[]> = ref([]);
const container: Ref<HTMLElement | null> = ref(null);
const wrapper: Ref<HTMLElement | null> = ref(null);
useModalStore().loader = true


let lenis: Lenis | null = null;

async function getCases() {
    try {
        const response = await client.query({
            query: gql`
                query Query {
                    cases {
                        company_name
                        screenshots {
                            url
                        }
                        company_type
                        service
                        description
                        documentId
                    }
                }
            `
        });
        caseList.value = response.data.cases;
    } catch (e) {
        console.error(e)
    } finally {
        useModalStore().loader = false;
    }
}
getCases();

onMounted(() => {
    if (container.value && wrapper.value) {
        if (window.innerWidth > 640) {
            lenis = new Lenis({
                wrapper: wrapper.value,
                content: container.value,
                lerp: 0.05,
                smoothWheel: true,
                syncTouch: true,
                orientation: 'horizontal',
            })
        } else {
            lenis = new Lenis({
                wrapper: wrapper.value,
                content: container.value,
                lerp: 0.05,
                smoothWheel: true,
                syncTouch: true,
                orientation: 'vertical',
            })
        }

        function raf(time: any) {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        addEventListener('resize', () => {
            if (container.value && wrapper.value) {
                if (window.innerWidth > 640) {
                    lenis = new Lenis({
                        wrapper: wrapper.value,
                        content: container.value,
                        lerp: 0.05,
                        smoothWheel: true,
                        syncTouch: true,
                        orientation: 'horizontal',
                    })
                } else {
                    lenis = new Lenis({
                        wrapper: wrapper.value,
                        content: container.value,
                        lerp: 0.05,
                        smoothWheel: true,
                        syncTouch: true,
                        orientation: 'vertical',
                    })
                }
            }

        })
    }
})

</script>

<template>
    <main ref="wrapper" class="cases view">
        <nav v-show="caseList.length > 0" ref="container" class="slides">
            <CaseCard v-for="c in caseList" :key="c.documentId" :case="c" />
            <div class="relative flex flex-col gap-4 w-full h-full md:border-l max-md:border-t border-gray-100 md:pl-4">
                <el-tooltip placement="bottom">
                    <template #content>
                        <p class=" text-white w-96">Проекты, в которых мы принимаем участие, но не можем показать</p>
                    </template>
                    <span class="sticky w-max left-4 text-[72px] font-bold text-white"><span
                            class="absolute top-4 right-0 text-base text-gray-500">?</span>NDA</span>
                </el-tooltip>
                <div class="flex max-md:flex-col items-center gap-4 w-full h-full">
                    <FintechNda title="Крипто-финансовый проект" role="Frontend разработка"
                        description="Frontend разработка для крупного российского прокта в сфере криптовалют.">
                        <template #icon>
                            <img src="/icons/crypto.svg" alt="teach" class="h-72" />
                        </template>
                    </FintechNda>
                    <FintechNda title="Образовательный проект" role="Fullstack разработка"
                        description="Разработка приложения и платформу для курсов в IT сфере ">
                        <template #icon>
                            <img src="/icons/education.svg" alt="teach" class="h-72" />
                        </template>
                    </FintechNda>
                </div>
            </div>
        </nav>
    </main>
</template>

<style scoped lang="scss">
.slides {
    position: relative;
    height: 100%;
    width: fit-content;
    display: flex;
    gap: 16px;

    @media screen and (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
}

.cases {
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    padding: 2px;
}
</style>