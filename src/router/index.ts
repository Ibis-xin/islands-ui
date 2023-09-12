import { createRouter, createWebHistory } from 'vue-router'
import { routeName } from './routerValue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeName.home,
      component: HomeView
    },
    {
      path: '/userBackend',
      name: routeName.userBackend,
      component: () => import('../views/UserBackendView.vue')
    },
    {
      path: '/creation',
      name: routeName.creation,
      component: () => import('../views/UserCreation.vue')
    }
  ]
})

export default router
