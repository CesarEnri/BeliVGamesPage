import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from './App.vue'
import router from './router'

const app = createApp(App)
//app.use(VueQueryPlugin)
VueQueryPlugin.install(app,
    {
        queryClientConfig:
            {
                queries:
                    {
                        cacheTime : 1000 * 120,//2 minutes
                        refetchOnReconnect: 'always',
                    }
            }
    });

app.use(router)

app.mount('#app')
