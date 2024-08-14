import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../../views/IndexView.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: IndexView
        }
    ],
    history: createWebHistory()
})