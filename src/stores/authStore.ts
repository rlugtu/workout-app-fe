import { defineStore } from 'pinia';
import { useAuth0 } from '@auth0/auth0-vue';
import type { Ref } from 'vue';

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
