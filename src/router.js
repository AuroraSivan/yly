import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import Product1 from '../views/Product1.vue';
import Product2 from '../views/Product2.vue';
import Services from '../views/Services.vue';
import ContactUs from '../views/ContactUs.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product1', component: Product1 },
    { path: '/product2', component: Product2 },
    { path: '/services', component: Services },
    { path: '/contact', component: ContactUs },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// 在路由守卫中判断如果当前不是首页，则跳转到首页
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next(); // 如果是首页，继续执行
    } else {
        // 否则跳转到首页
        next('/');
    }
});

export default router;
