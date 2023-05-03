
<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { ref, type Ref } from "vue"

const { loginWithRedirect } = useAuth0();

// FUNCTIONS
const auth: Ref<Boolean> = ref(false);

function handleLogin(): void {
    loginWithRedirect({
        appState: {
            target: "/profile",
        },
    });
}

</script>
<template>
    <div>
        <h2>Auth: {{ auth }}</h2>
        <button class="px-2 py-2 rounded-lg bg-slate-400" @click="handleLogin()">Login</button>
    </div>
</template>
