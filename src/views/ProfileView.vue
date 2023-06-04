<template>
    <div>
        <h1 class="text-red-400">Profile Page</h1>
        <h1>{{ userInfo.displayName }}</h1>
        <div>
            <LogoutButton></LogoutButton>
        </div>

        <Overlay v-if="isNewUser">
            <div class="max-w-[600px] w-full bg-slate-800 bg-opacity-80 py-8 px-4 m-6 rounded-lg">
                <EditProfileForm
                    class="max-w-[600px] w-full"
                    :userInfo="userInfo"
                    @updateUserInfo="submitUserInfo"
                    @changeDistanceMetric="changeDistanceMetric"
                    @changeWeightMetric="changeWeightMetric"
                ></EditProfileForm>
            </div>
        </Overlay>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { LogoutButton, EditProfileForm, Overlay } from '@/components';
import { getUserInfo, saveUserInfo } from '@/services';
import type { DistanceMetric, User, WeightMetric } from '@/types';
import { useAuthStore } from '@/stores';

/**
 * Template handler to show the userSignUp form via a modal.
 * Only shows when a user logs in but does not exist in the Users table.
 */
const isNewUser = ref<boolean>(false);

/**
 * Object containing user information.
 */
const userInfo = ref<User>({
    displayName: '',
    email: '',
    height: 60,
    weight: 100,
    settings: {
        weightMetric: 'pounds',
        distanceMetric: 'metric',
    },
});

/**
 * Obtains the user profile. If a profile does not exist, will prompt the
 * Sign up form to add user information.
 */
async function getProfile(): Promise<User | void> {
    return await getUserInfo();
}

/**
 * Saves User Info along with user settings.
 */
async function submitUserInfo(): Promise<void> {
    const auth = useAuthStore();
    const email = await auth.email;
    userInfo.value.email = email;

    return await saveUserInfo(userInfo.value);
}

/**
 * Used by the editProfileForm to change the user distance metric in user settings.
 * @param metric
 */
function changeDistanceMetric(metric: DistanceMetric): void {
    userInfo.value.settings.distanceMetric = metric;
}

/**
 * Used by the editProfile Form to change the user weight metric in user settings.
 * @param metric
 */
function changeWeightMetric(metric: WeightMetric): void {
    userInfo.value.settings.weightMetric = metric;
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
