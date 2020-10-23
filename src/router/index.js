import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login')
    }, {
      path: '/',
      name: '',
      redirect: '/home',
      component: () => import('@/view/layout'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/view/home/home')
        }, {
          path: '/chart',
          name: 'chart',
          component: () => import('@/components/chart')
        }
      ]
    }, {
      path: '*',
      name: '404',
      component: () => import('@/view/404')
    }
  ]
})
