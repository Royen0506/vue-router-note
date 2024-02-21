import './assets/main.css'
import './assets/all.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
