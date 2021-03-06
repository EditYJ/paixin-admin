import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'home',
    path: '/',
    component: () => import('@/layout/CommonLayout.vue'),
    redirect: '/login',
    children: [
      {
        name: 'welcome',
        path: 'welcome',
        component: () => import('@/views/welcome/index.vue'),
      },
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
