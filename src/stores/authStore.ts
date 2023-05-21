import { defineStore } from 'pinia';
import { createAuth0, useAuth0 } from '@auth0/auth0-vue';
import type { Ref } from 'vue';
import { auth0 } from '@/main';

/**
 * By default, auth0 does not allow to get access token outside of a
 * vue component. This allows it to be :)
 */
export async function getAccessToken(options?: any) {
    return auth0.getAccessTokenSilently(options);
}

interface IAuthStore {
    id: string;
    name: string;
}

type StateShape = {
    isAuthenticated: boolean;
};
export const useAuthStore = defineStore('AuthStore', {
    state: (): StateShape => ({
        isAuthenticated: false,
    }),
    getters: {
        isLoggedIn: (state): Ref<boolean> => {
            const { isAuthenticated } = useAuth0();
            return isAuthenticated;
        },
    },
    actions: {},
});
