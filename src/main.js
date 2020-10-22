import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'popper.js'
import 'jquery'
import 'bootstrap'



createApp(App).use(router).mount('#app')