<script setup lang="ts">
import Lenis from 'lenis'
import { onMounted, Ref, ref } from 'vue';
const container: Ref<HTMLElement | null> = ref(null);
const wrapper: Ref<HTMLElement | null> = ref(null);
onMounted(()=>{
  
      if(container.value && wrapper.value){
        const lenis = new Lenis({
            wrapper: wrapper.value,
            content: container.value,
            lerp: 0.1,
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
  <div class="horizontal-section" ref="wrapper">
    <div class="cards-wrapper" ref="container">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
    </div>
  </div>

</template>

<style lang="css">
.horizontal-section {
  height: auto;
  overflow: hidden;

}

.cards-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: max-content;
  top: 15px;
}

.card {
  width: 600px;
  height: 400px;
  background-color: #ccc;
  flex-shrink: 0;
}

</style>