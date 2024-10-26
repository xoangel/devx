import { defineStore } from "pinia"
import { ref, Ref } from "vue"
import { ServiceModalData } from "../types/typeCase";

export const useModalStore = defineStore('modals', ()=>{
    const servicesStore = ref(false);
    const servicesStoreData: Ref<ServiceModalData | null> = ref(null)

    return{
        servicesStore,
        servicesStoreData
    }
})