import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "demo" */ '../views/demo.vue') },
  { path: '/xxx', component: () => import(/* webpackChunkName: "demo2" */ '../views/demo2.vue') },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
