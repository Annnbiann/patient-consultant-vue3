import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      component: ()=> import('@/views/Login/index.vue'),
      meta: { title:'login' }
    },
    {
      path:'/user/patient',
      component: ()=> import('@/views/User/PatientPage.vue'),
      meta: { title:'familyrecord' }
    
    },
    {
      path:'/consult/fast',
      component: ()=> import('@/views/Consult/ConsultFast.vue'),
      meta: { title:'Express consultation' }
    
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
  NProgress.start()
  //  token 
  const store = useUserStore()
  // 
  const wihteList = ['/login', '/login/callback']
  //
  if (!store.user?.token && !wihteList.includes(to.path)) return '/login'
})

router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-HealthLink`
  NProgress.done()
})
export default router
