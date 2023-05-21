<template>
    <div>
        <h1 class="text-red-400">Profile Page</h1>

        <div>
            <LogoutButton></LogoutButton>
        </div>
        <button @click="test">test</button>
    </div>
</template>

<script setup lang="ts">
import { LogoutButton } from '@/components';
import { getUserInfo } from '@/services';
import { useAuth0 } from '@auth0/auth0-vue';
const { getAccessTokenSilently } = useAuth0();

async function test(): Promise<void> {
    const accessToken = await getAccessTokenSilently();
    await getUserInfo(accessToken);
}
</script>
