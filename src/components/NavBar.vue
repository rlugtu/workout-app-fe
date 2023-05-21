<script setup lang="ts">
import { LoginButton } from './buttons';
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated } = useAuth0();
</script>
<template>
    <header
        class="fixed bottom-0 h-[60px] bg-midGray w-full left-0 flex justify-center items-center rounded-t-xl cursor-pointer"
    >
        <nav class="w-full h-full grid grid-flow-col justify-stretch items-center text-gray">
            <template v-if="isAuthenticated">
                <RouterLink to="/exercises" class="text-center text-xl">
                    <font-awesome-icon icon="fa-solid fa-dumbbell" />
                </RouterLink>
                <RouterLink
                    to="/workouts"
                    class="text-center border-x h-full flex justify-center items-center text-2xl"
                >
                    <font-awesome-icon icon="fa-solid fa-person-running" />
                </RouterLink>
                <RouterLink to="/profile" class="text-center text-xl">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </RouterLink>
            </template>
            <LoginButton v-if="!isAuthenticated"></LoginButton>
        </nav>
    </header>
</template>
