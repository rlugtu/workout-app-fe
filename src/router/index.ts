import { createRouter, createWebHistory } from 'vue-router';
import {
    AuthorizingView,
    ExerciseListView,
    ExerciseView,
    ProfileView,
    WorkoutListView,
} from '@/views';
import { authGuard } from '@auth0/auth0-vue';

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
            component: ProfileView,
        },
        {
            path: '/exercises',
            name: 'exercises',
            beforeEnter: authGuard,
            component: ExerciseListView,
        },
        {
            path: '/exercises/:exerciseId',
            name: 'exercise',
            beforeEnter: authGuard,
            component: ExerciseView,
        },
        {
            path: '/workouts',
            name: 'workouts',
            beforeEnter: authGuard,
            component: WorkoutListView,
        },
        {
            path: '/callback',
            name: 'callback',
            component: AuthorizingView,
        },

        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../views/AboutView.vue')
        // }
    ],
});

export default router;
