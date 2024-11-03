<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore } from '../helpers/store/modalStore';

const modalStore = useModalStore();
const loader = computed(() => modalStore.loader)
</script>

<template>
  <Transition name="fade">
    <div v-if="loader" class="absolute animate-loading loader-component rounded-xl top-0 left-0"></div>
  </Transition>
  <Transition name="fade">
    <div v-if="loader" class="loader-component__layout absolute">
      <div class="flex items-center justify-center h-full w-full"
        :class="{ 'still-loading': loader }">
        <div class="loader">
          <span>Загружаем</span>
          <div class="words">
            <span class="word">текст</span>
            <span class="word">картинки</span>
            <span class="word">кнопки</span>
            <span class="word">карточки</span>
            <span class="word">цвета</span>
          </div>
        </div>
      </div>
    </div>

  </Transition>
</template>

<style lang="scss" scoped>
.loader-component,
.loader-component__layout {
  z-index: 1;
  width: calc(100vw - var(--x-padding) * 2);
  left: calc(var(--x-padding));
  height: calc(100vh - var(--y-padding) - 152px);
  top: calc(var(--y-padding) / 2 + 76px);

  @media screen and (max-width: 650px) {
    width: 95vw;
    height: calc(100% - 136px);
    top: 68px;
    left: 2.5vw;
  }
}

.loader-component__layout {
  z-index: 50;
  background-color: #F6F8FF17;
  border-radius: 12px;
  border: 1px solid var(--white-color)
}

.still-loading {
  animation: blur 5s ease infinite forwards;
}

@keyframes blur {
  0% {
    backdrop-filter: blur(8px)
  }

  30% {
    backdrop-filter: blur(16px)
  }

  100% {
    backdrop-filter: blur(8px)
  }
}

.loader {
  color: rgb(124, 124, 124);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 25px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 8px;
}

.words {
  overflow: hidden;
  position: relative;
}

.word {
  display: block;
  height: 100%;
  padding-left: 6px;
  color: var(--orange-color);
  animation: spin_4991 4s infinite;
}

@keyframes spin_4991 {
  10% {
    -webkit-transform: translateY(-102%);
    transform: translateY(-102%);
  }

  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  35% {
    -webkit-transform: translateY(-202%);
    transform: translateY(-202%);
  }

  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }

  60% {
    -webkit-transform: translateY(-302%);
    transform: translateY(-302%);
  }

  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }

  85% {
    -webkit-transform: translateY(-402%);
    transform: translateY(-402%);
  }

  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }
}
</style>