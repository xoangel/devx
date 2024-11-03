<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useModalStore } from '../helpers/store/modalStore';
import UseButton from '../ui/UseButton/UseButton.vue';
import ArrowIcon from "./../assets/icons/ArrowIcon.vue";
import { gql } from '@apollo/client/core';
import { client } from '../config/graphql/client';
import { Vue3Lottie } from 'vue3-lottie'
import doneJSON from "./../assets/lottie/done_wide.json";

const modalStore = useModalStore();

const name: Ref<string> = ref('');
const company: Ref<string> = ref('');
const contact: Ref<string> = ref('');
const message: Ref<string> = ref('');
const buttonText: Ref<string> = ref('Отправить')
const methods = ref(null);
const loading = ref(false);
const notValid = ref(false);
const nameFieldError = ref(false);
const contactFieldError = ref(false);
const successState = ref(false);
const id: Ref<number> = ref(1);
const doneLottie = ref(null);

const methodsList = [
    {
        icon: "/icons/mail.svg",
        badge: "Написать на почту",
        placeholder: "me@mail.ru"
    },
    {
        icon: "/icons/telegram.svg",
        badge: "Написать в телеграм",
        placeholder: "@contact или +7 (999) 999-99-99"
    },
    {
        icon: "/icons/whatsapp.svg",
        badge: "Написать в WhatsApp",
        placeholder: "+7 (999) 999-99-99"
    },
    {
        icon: "/icons/phone.svg",
        badge: "Перезвонить",
        placeholder: "+7 (999) 999-99-99"
    },
]

const validate = () => {
    if (!contact.value) {
        buttonText.value = "Вы не сказали нам как с вами связаться ;(";
        notValid.value = true;
        contactFieldError.value = true;
    }
    if (!name.value) {
        buttonText.value = "Вы не сказали нам свое имя ;(";
        notValid.value = true;
        nameFieldError.value = true;
    };
}

const resetButton = () => {
    buttonText.value = 'Отправить';
    notValid.value = false;
}

const resetError = (field: 'name' | 'contact') => {
    if (field === 'name') nameFieldError.value = false;
    if (field === 'contact') contactFieldError.value = false;
}

const selectMethod = (direction: 1 | 0): void => {
    const x = window.innerWidth > 1920 ? 48 : 32; 
    direction ? id.value === 0 ? id.value = 3 : --id.value : id.value === 3 ? id.value = 0 : ++id.value;
    (methods.value as any).style.transform = `translateY(-${x * id.value + 12 * id.value}px)`
}

const submit = async () => {
    if (!notValid.value) {
        // try {
        //     loading.value = true;
        //     const response = await client.mutate({
        //         mutation: gql`
        //         mutation Mutation($data: FormInput!) {
        //             createForm(data: $data) {
        //                 company
        //                 contact
        //                 name
        //                 message
        //                 type
        //             }
        //         }
        //     `,
        //         variables: {
        //             data: {
        //                 "company": company.value,
        //                 "contact": contact.value,
        //                 "name": name.value,
        //                 "message": message.value,
        //                 "type": methodsList[id.value]?.badge
        //             }
        //         }

        //     });
        //     if (response.data?.code === 200) {
               
        //     }
        // } catch (e) {
        //     console.error(e);
        // } finally {
        //     loading.value = false;
        // }
        loading.value = true;
        successState.value = true;
        (doneLottie as any).play();    
    }

}

</script>

<template>
    <Transition name="fade">
        <div v-if="modalStore.contactModal"
            class="modal_overlay w-full h-full fixed flex items-center justify-center top-0 left-0 z-50"
            :class="{ 'active': modalStore.contactModal }" @click="modalStore.contactModal = false">
            <div 
                class="modal relative p-6 rounded-xl" 
                :class="{ 'animate-loading': loading, 'success' : successState}" 
                @click.stop
            >
                <img 
                    src="/icons/cross.svg" 
                    class="absolute right-5 top-5 rotate-45 cursor-pointer" 
                    alt="close"
                    @click="modalStore.contactModal = false"    
                >
                <Transition name="fade" mode="out-in">
                    <div v-if="!successState" class="flex flex-col gap-8 items-center justify-center">
                        <div class="modal__title flex flex-col items-center">
                            <h2 class="text-white text-center">Давайте сделаем первый шаг</h2>
                            <p class="text-center">Расскажите о своих задачах в форме ниже или напишите в Telegram, WhatsApp или на почту
                            </p>
                        </div>
                        <div class="modal__body flex w-full gap-4">
                            <div class="modal__body__inputs flex flex-col w-full gap-2">
                                <div class="flex gap-2">
                                    <div class="modal__input_group flex flex-col  gap-1.5 w-full">
                                        <p>Имя</p>
                                        <input class="default_input" placeholder="Как к вам обращаться?" v-model="name"
                                            :class="{ 'empty': nameFieldError }" @focus="resetError('name')" />
                                    </div>
                                    <div class="modal__input_group flex flex-col  gap-1.5 w-full">
                                        <p>Компания</p>
                                        <input class="default_input" placeholder="Название компании"
                                            v-model="company" />
                                    </div>
                                </div>

                                <div class="modal__input_group flex flex-col gap-1.5">
                                    <p>Контакт</p>
                                    <input class="default_input" :placeholder="methodsList[id].placeholder"
                                        v-model="contact" :class="{ 'empty': contactFieldError }"
                                        @focus="resetError('contact')" />
                                </div>
                                <div class="modal__input_group flex flex-col gap-1.5">
                                    <p>Сообщение</p>
                                    <input class="default_input" placeholder="Мы хотим ..." v-model="message" />
                                </div>
                            </div>
                            <div class="flex flex-col w-full gap-1.5 ">
                                <p class="text-nowrap	">Как с Вами связаться?</p>
                                <div class="method__select  flex gap-3 items-center h-full">
                                    <div class="modal_body__method flex flex-col items-center">
                                        <ArrowIcon @click="selectMethod(1)" class="select_method_icon" />
                                        <div class="items__wrapper">
                                            <div ref="methods" class="method__items flex flex-col gap-3 w-8">
                                                <img v-for="(m, idx) in methodsList" :src="m.icon" class="method__icon"
                                                    :class="{ 'active': idx === id }">
                                            </div>
                                        </div>
                                        <ArrowIcon @click="selectMethod(0)" class="select_method_icon" id="down" />
                                    </div>
                                    <Transition :key="id" name="fade">
                                        <p class="badge"> {{ methodsList[id].badge }}</p>
                                    </Transition>
                                </div>
                            </div>

                        </div>
                        <UseButton @click="submit" @mouseover="validate" @mouseout="resetButton"
                            :class="{ 'invalid': notValid }" style="width: 100%;">
                            {{ buttonText }}
                        </UseButton>
                    </div>
                    <div v-else>
                        <h2 class="text-white text-center">Спасибо! <br> Мы совсем скоро с вами свяжется</h2>
                        <Vue3Lottie 
                            ref="doneLottie" 
                            :animationData="doneJSON" 
                            width="200px" 
                            height="200px"
                            :speed=".5"
                            :loop="false"
                        />
                    </div>
                </Transition>
            </div>

        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.link-button.invalid {
    background-color: var(--black-color);
    color: var(--white-color);
}

.modal_overlay {
    background-color: #FFFFFF17;
    backdrop-filter: blur(46px);
}

.modal {
    background: var(--black-color);
    width: 800px;
    height: 420px;
    transition: height 1s ease-in-out;

    @media screen and (min-width: 1920px) {
        width: 1200px;
        height: 535px;
    }

    @media screen and (max-width: 650px) {
        width: 95vw;
        height: 650px;
    }

    @media screen and (max-width: 450px) {
        height: 700px;
    }

    &.success{
        height: 350px;
    }

    &__title {
        p {
            color: #777777;
        }
    }
}

.modal__body{
    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
}

.default_input {
    height: 32px;
    border-radius: 6px;
    outline: none !important;
    padding: 4px 8px;
    border: 1px solid var(--white-color);
    background-color: var(--dark-grey-color);
    box-shadow: inset 3px 3px 8px #00000015;
    color: var(--white-color);
    transform: scale(1);
    transition: transform .3s ease-out, background-color .3s ease, border .3s ease;

    @media screen and (min-width: 1920px) {
        height: 48px;
        font-size: 24px;
        border-radius: 8px;
        padding: 8px 16px;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
        font-size: 12px;
    }

    &:focus {
        transform: scale(1.05);
        box-shadow: 0 0 8px #FFFFFF50;
        z-index: 9999;
    }

    &::placeholder {
        color: var(--light-grey-color);
    }

    &:hover {
        background-color: var(--black-color);
    }

    &.empty {
        border: 1px solid #e91e2f;
    }
}

.method__select {
    background-color: var(--dark-grey-color);
    border-radius: 8px;
    padding: 8px 16px;
    border: 1px solid var(--white-color);
    transition: background-color .3s ease;

    @media screen and (min-width: 1920px) {
        gap: 24px;
    }

    &:hover {
        background-color: var(--black-color);

        .modal_body__method {
            .items__wrapper::before {
                opacity: 0;
            }

            .items__wrapper::after {
                opacity: 1;
            }
        }

    }
}


.select_method_icon {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 0 8px #F6F8FF00);
    transition: filter .3s ease;
    cursor: pointer;

    @media screen and (min-width: 1920px) {
        width: 48px;
        height: 48px;
    }

    &:hover {
        filter: drop-shadow(0 0 8px #F6F8FF);
    }
}

.select_method_icon :deep(path) {
    fill: var(--white-color);
}

#down {
    transform: rotateZ(180deg);
}

.method__icon {
    transform: scale(.8);
    transition: transform .3s ease;

    &.active {
        transform: scale(1);
    }
}

.method__items img {
    height: 32px;

    @media screen and (min-width: 1920px) {
        height: 48px;
    }
}

.method__items {
    transform: translateY(-44px);
    transition: transform .3s ease-out;

    @media screen and (min-width: 1920px) {
        width: 48px;
        transform: translateY(-60px)
    }
}

.badge {
    color: #777777;
}

.items__wrapper {
    height: 80px;
    padding: 24px 0;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 1920px) {
        height: 96px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 105%;
        z-index: 1;
        background: linear-gradient(0deg, var(--dark-grey-color), transparent, var(--dark-grey-color));
        opacity: 1;
        transition: opacity .6s ease;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(0deg, var(--black-color), transparent, var(--black-color));
        opacity: 0;
        transition: opacity .3s ease;
    }
}
</style>