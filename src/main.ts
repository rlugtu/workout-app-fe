import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import './assets/styles/main.css';
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
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
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faUserSecret,
    faDumbbell,
    faTableTennis,
    faPersonRunning,
    faStopwatch,
    faHourglass,
    faUser,
    faPlusCircle,
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        },
    }),
);
app.mount('#app');
