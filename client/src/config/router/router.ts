import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../../views/IndexView.vue";
import ProjectsView from "../../views/ProjectsView.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: IndexView
        },
        {
            path: "/projects/",
            component: ProjectsView
        }
    ],
    history: createWebHistory()
})