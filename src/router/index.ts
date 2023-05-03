import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
const CallbackPage = () => import('@/views/CallbackView.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/login',
            name: 'profile',
            component: LoginView
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
