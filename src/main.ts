import {createApp} from 'vue'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus';

import {router} from "@/router.ts";
import '@/style.css'
import 'element-plus/dist/index.css'

import App from '@/App.vue'

createApp(App)
    .use(createPinia())
    .use(ElementPlus)
    .use(router)
    .mount('#app')
