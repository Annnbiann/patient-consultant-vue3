import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      component: ()=> import('@/views/Login/index.vue')
    },
    {
      path:'/',
      redirect: '/home',
      component: ()=> import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue'),
          meta: { title: 'Homepage' }
        },
        {
          path: '/article',
          component: () => import('@/views/Article/index.vue'),
          meta: { title: 'Article' }
        },
        {
          path: '/notify',
          component: () => import('@/views/Notify/index.vue'),
          meta: { title: 'Notification' }
        },
        {
          path: '/user',
          component: () => import('@/views/User/index.vue'),
          meta: { title: 'Profile' }
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  //token
  const store = useUserStore()
  //white list
  const whiteList = ['/login']
  if (!store.user ?.token && !whiteList.includes(to.path))  return'/login'
})

export default router
