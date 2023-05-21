import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/main.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faUserSecret,
    faDumbbell,
    faTableTennis,
    faPersonRunning,
    faStopwatch,
    faHourglass,
    faUser,
    faPlusCircle,
    faShop,
    faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { createAuth0 } from '@auth0/auth0-vue';
/**
 * Font Awesome icons. All icons must be added here.
 */
library.add(
    faUserSecret,
    faDumbbell,
    faTableTennis,
    faPersonRunning,
    faStopwatch,
    faHourglass,
    faUser,
    faPlusCircle,
    faShop,
    faChartLine,
);

/**
 * Creates the auth0 instance that is used by the app below.
 */
export const auth0 = createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    },
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(auth0);

app.mount('#app');
