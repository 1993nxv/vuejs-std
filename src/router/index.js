import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/ServiceView.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuarios-editar',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/UserEditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
