import {
    createRouter, createWebHistory
} from "vue-router";

import Index from '../views/index.vue'


const routes = [
    {
        name : "首页",
        path : "/",
        component : Index
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router