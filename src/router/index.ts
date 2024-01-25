import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import FiltersPageViewVue from '@/views/FiltersPageView.vue'

import AddViewVue from '@/views/AddView.vue'
import EditViewVue from '@/views/EditView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {

      path: '/filters',
      name: 'Filters Page',
      component: FiltersPageViewVue
    }

      path: '/Add',
      name: 'Añadir',
      component: AddViewVue
    },
    {
      path: '/Edit',
      name: 'Editar',
      component: EditViewVue
    },


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
