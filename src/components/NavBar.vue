
<script setup lang="ts">
import {LogoutButton, LoginButton} from "./buttons";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();

</script>
<template>
    <header>
    <div>
        <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/profile" v-if="isAuthenticated">Profile</RouterLink>

        <LoginButton v-if="!isAuthenticated"></LoginButton>
        <LogoutButton v-else></LogoutButton>
        </nav>
    </div>
    </header>
</template>
