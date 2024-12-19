import { createApp } from 'vue'; // Vue 3 使用 createApp
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router 4 使用命名导入
import AppHome from './views/AppHome.vue';

const routes = [
    { path: '/', component: AppHome }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(ElementPlus);
app.use(router);

app.mount('#app');