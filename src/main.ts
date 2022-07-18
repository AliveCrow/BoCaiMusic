// main
import {createApp} from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
// css
import '@/style/index.less'

// components
import register from '@/plugins/register'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
    .use(pinia)
    .use(ArcoVue)
    .use(register)
    .mount('#app')

console.log(app)
