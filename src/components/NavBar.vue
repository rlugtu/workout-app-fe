<template>
    <header
        class="fixed bottom-0 h-[60px] bg-midGray w-full left-0 flex justify-center items-center rounded-t-xl cursor-pointer"
    >
        <nav class="w-full h-full grid grid-flow-col justify-stretch items-center text-gray">
            <template v-if="isAuthenticated">
                <RouterLink
                    to="/exercises"
                    class="h-full flex justify-center items-center text-center text-xl"
                >
                    <font-awesome-icon icon="fa-solid fa-shop" />
                </RouterLink>
                <RouterLink
                    to="/workouts"
                    class="h-full flex justify-center items-center text-center border-x text-2xl"
                >
                    <font-awesome-icon icon="fa-solid fa-chart-line" />
                </RouterLink>
                <RouterLink
                    to="/profile"
                    class="h-full flex justify-center items-center text-center text-xl"
                >
                    <font-awesome-icon icon="fa-solid fa-user" />
                </RouterLink>
            </template>
            <LoginButton v-if="!isAuthenticated"></LoginButton>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { LoginButton } from './buttons';
import { useAuthStore } from '@/stores';

/**
 * Used to conditionally render the proper navbar based on authentication.
 */
const auth = useAuthStore();
const isAuthenticated = auth.isLoggedIn;
</script>
