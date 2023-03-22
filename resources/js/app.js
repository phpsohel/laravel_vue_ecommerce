require('./bootstrap');
import { createApp } from 'vue';
import router from './router/router';

import App from './components/App.vue';
import Header from './components/page/Header.vue';

createApp(app)
    .component('app-view', App)
    .component('header-view', Header)
    .use (router)
    .mount('#app');
