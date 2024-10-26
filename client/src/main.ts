import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./config/router/router";
import { pinia } from './config/pinia/pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import "./assets/var.scss";

createApp(App)
.use(router)
.use(pinia)
.use(ElementPlus)
.mount('#app')
