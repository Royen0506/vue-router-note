import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    return {
      top: 500, //預設載入時會滾到500的位置
      behavior: 'smooth'
    }
  },
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
      component: () => import('../views/AboutView.vue')
    },
    {
      //404頁面
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    },
    {
      //重新導向
      path: '/newPage/:pathMatch(.*)*',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
