import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/token'
Vue.use(Router)
const router = new Router({
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

router.beforeEach((to, from, next) => {
    let token = getToken()
    if (to.path === '/login') {
        if (token) {
            next({path: from.path})
        } else {
            next()
        }
    } else {
        if (token) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})

export default router
