import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newPage',
      name: 'newPage',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a',
          component: () => import('../views/ComponentA.vue')
        },
        {
          path: 'b',
          component: () => import('../views/ComponentB.vue')
        },
        {
          path: 'dynamicRouter/:id',
          component: () => import('../views/DynamicRouter.vue')
        },
        {
          path: 'dynamicRouterByProps/:id',
          component: () => import('../views/DynamicRouterByProps.vue'),
          props: (route) => {
            console.log('route:', route.params.id)
            return {
              id: route.params.id
            }
          }
        },
        {
          path: 'namedView',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: 'C2A',
              components: {
                left: () => import('../views/ComponentA.vue'),
                right: () => import('../views/ComponentC.vue')
              }
            },
            {
              path: 'A2B',
              components: {
                left: () => import('../views/ComponentA.vue'),
                right: () => import('../views/ComponentB.vue')
              }
            }
          ]
        },
        {
          path: 'namedViewCus',
          component: () => import('../views/nameViewCus.vue'),
          children: [
            {
              path: 'namedViewPractice',
              components: {
                top: () => import('../views/ComponentA.vue'),
                bottom: () => import('../views/ComponentB.vue')
              }
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
