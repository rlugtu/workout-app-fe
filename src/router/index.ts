import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
const CallbackPage = () => import('@/views/CallbackView.vue')
import { authGuard } from '@auth0/auth0-vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: '/',
        //     name: 'profile',
        //     component: ProfileView
        // },
        {
            path: '/profile',
            name: 'profile',
            beforeEnter: authGuard,
            component: ProfileView
        },
        {
            path: '/callback',
            name: 'callback',
            component: CallbackPage
        }

        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
