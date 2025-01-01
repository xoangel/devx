<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import Case from '../helpers/types/typeCase';
import CaseCard from '../ui/CaseCard/CaseCard.vue';
import Lenis from 'lenis';
import { client } from '../config/graphql/client';
import { gql } from '@apollo/client/core';
import { useModalStore } from '../helpers/store/modalStore';

const caseList: Ref<Case[]> = ref([]);
const container: Ref<HTMLElement | null> = ref(null);
const wrapper: Ref<HTMLElement | null> = ref(null);
useModalStore().loader = true

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
        let lenis = new Lenis({
            wrapper: wrapper.value,
            content: container.value,
            lerp: 0.05,
            smoothWheel: true,
            syncTouch: true,
            orientation: 'horizontal',
        });

        function raf(time: any) {
            lenis.raf(time);
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
        <nav ref="container" class="slides">
            <CaseCard v-for="c in caseList" :key="c.documentId" :case="c" />
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
    }
}

.cases {
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    padding: 2px;
}
</style>