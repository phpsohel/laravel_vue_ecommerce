import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/page/About.vue';
import Login from '../components/auth/Login.vue';
const routes = [
    { path: '/about', name: 'about', component: About },
    {path: '/login', name: 'login', component: Login },

];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
