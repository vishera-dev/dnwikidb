import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import ClassView from '../views/Classes.vue'
import JadeView from '../views/Jade.vue'
import TalismanView from '../views/Talisman.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassView
    },
    {
      path: '/jades',
      name: 'jades',
      component: JadeView     
    },
    {
      path: '/talismans',
      name: 'talismans',
      component: TalismanView     
    }
  ]
})

export default router
