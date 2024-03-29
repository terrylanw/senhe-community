import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/'),
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa/'),
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/'),
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/'),
      },
    ],
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
