import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../../views/IndexView.vue";
import ProjectsView from "../../views/ProjectsView.vue";
import TestView from "../../views/TestView.vue";
import CaseView from "../../views/CaseView.vue";
import ServicesView from "../../views/ServicesView.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: IndexView
        },
        {
            path: "/projects/",
            component: ProjectsView
        },
        {
            path: "/test",
            component: TestView
        },
        {
            path: "/projects/:id",
            component: CaseView
        },
        {
            path: "/services",
            component: ServicesView
        }
    ],
    history: createWebHistory()
})