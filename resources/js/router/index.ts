import type { RouteRecordRaw, Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/Home.vue'),
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
