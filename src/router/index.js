import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('../views/front/Index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/front/Home.vue')
        },
        {
          path: '/about',
          component: () => import('../views/front/About.vue')
        },
        {
          path: '/service',
          component: () => import('../views/front/Service.vue')
        },
        {
          path: '/contact',
          component: () => import('../views/front/Contact.vue')
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('@/views/front/Products.vue')
        },
        {
          path: '/product/:id',
          name: 'Product',
          component: () => import('@/views/front/Product.vue')
        },
        {
          path: '/checkorder',
          component: () => import('../views/front/Checkorder.vue')
        },
        {
          path: '/checkout/:orderId',
          component: () => import('../views/front/Checkout.vue')
        }
      ]
    },

    {
      path: '/login',
      component: () => import('../views/admin/Login.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/admin/Dashboard.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/Products.vue')
        }
      ]
    }
  ]
})

export default router
