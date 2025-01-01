<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { useModalStore } from '../../helpers/store/modalStore';

const modalStore = useModalStore();
const data = computed(()=>modalStore.servicesStoreData)
const selectedTab: Ref<1 | 2> = ref(1);

const activateTab = (tab: 1 | 2) => selectedTab.value = tab;

const openContact = () => {
  modalStore.servicesStore = false;
  modalStore.contactModal = true;
}

</script>

<template>
  <Transition name="fade">
    <div v-if="modalStore.servicesStore"
      class="modal_overlay w-full h-full fixed flex items-center justify-center top-0 left-0 z-50"
      :class="{ 'active': modalStore.servicesStore }" 
      @click="modalStore.servicesStore = false"
    >
      <div class="modal" @click.stop>
        <form class="form">
          <div class="banner"></div>
          <label class="title">{{ data?.title }}</label>
          <div v-if="data?.secondTab" class="tab-container">
            <div
              @mouseover="activateTab(1)" 
              class="tab tab--1"
              :class="{'selected-one' : selectedTab === 1}"
              >{{  data.firstTab.title }}</div>
            <div
              @mouseover="activateTab(2)"
              class="tab tab--2"
              :class="{'selected-two' : selectedTab === 2}"
              >{{ data.secondTab.title  }}</div>
            <div class="indicator"> </div>
          </div>
          <Transition name="stagger" mode="out-in">
          <div v-if="selectedTab === 1" class="benefits benefits-tab-1">
            
            <ul>
              <li v-for="(point, idx) in data?.firstTab.points" :key="idx">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
                  <rect fill="black" rx="8" height="16" width="16"></rect>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white"
                    d="M5 8.5L7.5 10.5L11 6"></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
            <img class="w-3/4 rounded-xl mx-auto" v-if="data?.image" :src="data?.image" alt="">
            <span class="w-full text-right">от {{ data?.firstTab.minPrice }} руб.</span>
          </div>
          <div v-else class="benefits benefits-tab-2">
            
            <ul>
              <li v-for="(point, idx) in data?.secondTab?.points" :key="idx">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
                  <rect fill="black" rx="8" height="16" width="16"></rect>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white"
                    d="M5 8.5L7.5 10.5L11 6"></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
            <span class="w-full text-right">от {{ data?.secondTab?.minPrice }} руб.</span>
          </div>
          </Transition>
          <div class="modal--footer flex items-center justify-end">
            <button @click.prevent="openContact" class="upgrade-btn">Бесплатная консультация</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

</template>

<style lang="scss" scoped>
.modal_overlay {
  background-color: #FFFFFF17;
  backdrop-filter: blur(46px);
}

.modal {
  width: 450px;
  background: var(--white-color);
  border-radius: 12px;
  box-shadow: 0 4px 8px #00000015;

  @media screen and (min-width: 1900px) {
    width: 650px;
  }
}

.banner {
  width: 100%;
  height: 30px;
  margin: 0;
  background-size: 100%;
  background-repeat: no-repeat;
}

.title {
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #2B2B2F;

  @media screen and (min-width: 1900px) {
    font-size: 32px;
  }
}

.description {
  max-width: 80%;
  margin: auto;
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #5F5D6B;

  @media screen and (min-width: 1900px) {
    font-size: 16px;
  }
}

.tab-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  padding: 2px;
  background-color: #ebebec;
  border-radius: 9px;
  margin: 10px 20px 0px 20px;
}

.indicator {
  content: "";
  width: 50%;
  height: 28px;
  background: #FFFFFF;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 9;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1900px) {
    height: 42px;
  }
}

.tab {
  width: 50%;
  height: 28px;
  position: relative;
  z-index: 99;
  background-color: transparent;
  border: 0;
  outline: none;
  flex: none;
  align-self: stretch;
  flex-grow: 1;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1900px) {
    height: 42px;
  }
}

.tab--1.selected-one.indicator {
  left: 2px;
}

.tab--2.selected-two~.indicator {
  left: calc(50% - 2px);
}


.benefits {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
 
}

.benefits>span {
  font-size: 15px;
  color: #2B2B2F;
  font-weight: 700;

  @media screen and (min-width: 1900px) {
    font-size: 24px;
  }
}

.benefits ul {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  max-height: 300px;
  overflow: auto;

  @media screen and (min-width: 1900px) {
    max-height: 400px;
  }
}

.benefits ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.benefits ul li span {
  font-weight: 600;
  font-size: 14px;
  color: var(--grey-color);

  @media screen and (min-width: 1900px) {
    font-size: 18px;
  }
}

.modal--footer {
  height: 60px;
  border-top: 1px solid #ebebec;

  @media screen and (min-width: 1900px) {
    height: 72px;
  }
}

.upgrade-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 40px;
  background-color: var(--orange-color);
  border-radius: 7px;
  border: 0;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  margin-right: 16px;
  transition: all .5s var(--fast-out);

  @media screen and (min-width: 1900px) {
    height: 56px;
    width: 280px;
    font-size: 18px;
  }
}

.upgrade-btn:hover {
  width: 100%;
  height: 100%;
  margin-right: 0;
  border-radius: 0 0 12px 12px
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
        
</style>