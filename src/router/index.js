import { createRouter, createWebHashHistory } from 'vue-router'
import { inject } from 'vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/front/Index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/front/Home.vue')
        },
        {
          path: '/about',
          component: () => import('@/views/front/About.vue')
        },
        {
          path: '/service',
          component: () => import('@/views/front/Service.vue')
        },
        {
          path: '/contact',
          component: () => import('@/views/front/Contact.vue')
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
          component: () => import('@/views/front/Checkorder.vue')
        },
        {
          path: '/checkout/:orderId',
          component: () => import('@/views/front/Checkout.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/admin/Login.vue')
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/Dashboard.vue'),
      children: [
        {
          path: 'products',
          component: () => import('@/views/admin/Products.vue'),
          meta: {
            title: '商品管理'
          }
        },
        {
          path: 'coupons',
          component: () => import('@/views/admin/Coupons.vue'),
          meta: {
            title: '優惠券管理'
          }
        },
        {
          path: 'orders',
          component: () => import('@/views/admin/Orders.vue'),
          meta: {
            title: '訂單管理'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/Error.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   next()
// })
router.afterEach(() => {
  const lenis = inject('lenis')
  if (lenis === null) return
  lenis.stop()
  lenis.start()
})
export default router
