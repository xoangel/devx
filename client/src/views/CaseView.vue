<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { client } from '../config/graphql/client';
import { ApolloQueryResult, gql } from '@apollo/client/core';
import  Case  from '../helpers/types/typeCase';
import { onMounted, Ref, ref } from 'vue';
import Lenis from 'lenis';
import UseButton from '../ui/UseButton/UseButton.vue';
import useLinkButton from "../ui/UseButton/UseLinkButton.vue";

const route = useRoute();
const router = useRouter();
const id = route.query.id;
const thisCase: Ref<Case> = ref({} as Case);
const wrapper = ref(null);
const container = ref(null);
const host = import.meta.env.VITE_SERVER_HOST;
const getQuery = async () => {
  try {
    const response: ApolloQueryResult<any> = await client.query({
      query: gql`
        query Case($documentId: ID!) {
          case(documentId: $documentId) {
            company_name
            company_type
            documentId
            description
            screenshots {
              url
            }
            service
            screencast {
              url
            }
            link
          }
        }
      `,
      variables: {
        documentId: id, 
      }
    });
    if (response.data.case) {
      thisCase.value = response.data.case;
    }
  } catch (e) {
    console.error(e);
  }
};


onMounted(() => {
  if (container.value && wrapper.value) {
    const lenis = new Lenis({
      wrapper: wrapper.value,
      content: container.value,
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
})

getQuery()

</script>

<template>
  <article class="case h-full w-full flex">
    <div ref="wrapper" class="case__data case__data-media  h-full p-4 overflow-hidden">
      <div ref="container" class="case_data__scrollable flex flex-col gap-1">
        <video v-if="thisCase.screencast?.url" :src="host + thisCase.screencast?.url" muted autoplay loop
          class="w-full rounded-lg" />
        <img v-for="(img, idx) in thisCase.screenshots" :key="idx" :src="host + img.url" class="w-full rounded-lg">
      </div>
    </div>
    <div class="case__data case__data-info h-full p-4 flex flex-col gap-4">
      <div class="case__data__title flex justify-between">
        <h1>{{ thisCase.company_name }}</h1>
        <useLinkButton v-if="thisCase.link" :animated="false" :link="thisCase.link">
          <p class="only_desktop">Посмотреть сайт</p>
          <p class="only_mobile">Сайт</p>
          <img src="/icons/export.svg" alt="">
        </useLinkButton>
      </div>
      <div class="case__data__about">
        <p class="leading-6">{{ thisCase.description }}</p>
      </div>
      <useButton 
        :class="'font-medium mt-auto'"
        @click="router.go(-1)"
      >
        <p>Назад</p>
      </useButton>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.case {

  @media screen and (max-width: 640px) {
    flex-direction: column;
    max-height: calc(100vh - 140px);
  }
  &__data {
    border: 1px solid var(--light-grey-color);
    max-height: calc(100vh - 188px);   

    &__title{
      h1{
        color: var(--white-color)
      }

      @media screen and (max-width: 640px) {
        align-items: center;
      }
    }

    &-media {
      width: 50%;
      border-radius: 12px 0 0 12px;
      transition: width .5s var(--fast-out);

      @media screen and (max-width: 640px) {
        width: 100%;
        border-radius: 8px 8px 0 0;
        height: 50%;
        padding: 8px;
      }
    }

    &-media:hover{
      width: 100%;
      transition: width .5s var(--fast-out);
    }

    &-info {
      width: 100%;
      border-radius: 0 12px 12px 0;
      background-color: var(--dark-grey-color);

      @media screen and (max-width: 640px) {
        height: 50%;
        width: 100%;
        border-radius: 0 0 8px 8px;
      }
    }
  }
}
</style>