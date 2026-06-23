import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "index.vue" */ '../views/index.vue') },
  { path: '/123', component: () => import(/* webpackChunkName: "123.vue" */ '../views/123.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
