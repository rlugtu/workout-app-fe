<template>
    <div>
        <h1 class="text-red-400">Profile Page</h1>
        <div>
            <LogoutButton></LogoutButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { LogoutButton } from '@/components';
import { getUserInfo } from '@/services';
import type { User } from '@/types';

/**
 * Template handler to show the userSignUp form via a modal.
 * Only shows when a user logs in but does not exist in the Users table.
 */
const isNewUser = ref<boolean>(false);

/**
 * Object containing user information.
 */
const userInfo = ref<User>();

/**
 * Obtains the user profile. If a profile does not exist, will prompt the
 * Sign up form to add user information.
 */
async function getProfile(): Promise<User | void> {
    return await getUserInfo();
}

onMounted(async () => {
    const user = await getProfile();
    if (!user) {
        isNewUser.value = true;
        return;
    }
    userInfo.value = user;
});
</script>
