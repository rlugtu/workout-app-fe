import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/styles/main.css'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)

app.use(createPinia())
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
        }
    })
)
app.use(router)
app.mount('#app')
