// main
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue'
import router from './router'

// css
import '@/style/index.less'

// components

const app = createApp(App)
app.use(router)
    .use(ArcoVue)
app.mount('#app')
