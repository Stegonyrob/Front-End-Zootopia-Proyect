import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD

import FiltersPageViewVue from '@/views/FiltersPageView.vue'

=======
>>>>>>> dev
import AddViewVue from '@/views/AddView.vue'
import FamilyViewVue from '@/views/FamilyView.vue'
import EditViewVue from '@/views/EditView.vue'
<<<<<<< HEAD

=======
import FiltersPageViewVue from '@/views/FiltersPageView.vue'
import { useAuthStore } from '@/stores/Auth'
>>>>>>> dev

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },
     {
      path: '/Familias',
      name: 'Familias',
      component: FamilyViewVue
    }, 
    {
      path: '/animals',
      name: 'animals',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AnimalsView.vue')
    },
    {
<<<<<<< HEAD

      path: '/filters',
      name: 'Filters Page',
      component: FiltersPageViewVue
    }

=======
>>>>>>> dev
      path: '/Add',
      name: 'Añadir',
      component: AddViewVue
    }, 
    {
      path: '/editar/:id',
      name: 'Editar',
      component: EditViewVue
    },
<<<<<<< HEAD


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
=======
    {
      path: '/filters',
      name: 'Buscar',
      component: FiltersPageViewVue
    }, 
>>>>>>> dev
  ]
})

router.beforeEach( (to, from) => {
  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated){
    return {name: 'login'}
  }
})

export default router
