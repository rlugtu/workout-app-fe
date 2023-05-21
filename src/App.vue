<template>
    <TopBar v-if="isAuthenticated"></TopBar>
    <RouterView />
    <header>
        <NavBar></NavBar>
    </header>
</template>
<style></style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NavBar, TopBar } from '@/components';
import { useAuth0 } from '@auth0/auth0-vue';

/** TODO: use to conditional render Navbar after router redirects to sign in */
const { isAuthenticated } = useAuth0();
</script>
