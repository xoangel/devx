<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import CaseAPI from '../helpers/api/CasesAPI';
import Case from '../helpers/types/typeCase';
import CaseCard from '../ui/CaseCard/CaseCard.vue';
import Lenis from 'lenis';


const CaseAPIInstance = new CaseAPI();
const caseList: Ref<Case[]> = ref([]);
const container: Ref<HTMLElement | null> = ref(null);
const wrapper: Ref<HTMLElement | null> = ref(null);

async function getCases() {
    const cases = await CaseAPIInstance.getAllCases();
    caseList.value = cases;
}

getCases()

onMounted(()=>{
    if(container.value && wrapper.value){
        const lenis = new Lenis({
            wrapper: wrapper.value,
            content: container.value,
            lerp: 0.05,
            smoothWheel: true,
            orientation: 'horizontal',
        });

        function raf(time: any){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }
})

</script>

<template>

    <main ref="wrapper" class="cases">
        <nav ref="container" class="slides">
            <CaseCard v-for="c in caseList" :key="c.id" :case="c" />
        </nav>
    </main>
</template>

<style scoped lang="css">
.slides {
    position: relative;
    height: 100%;
    width: fit-content;
    display: flex;
    gap: 16px;
}

.cases{
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
}
</style>