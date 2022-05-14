import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store/pinia.config.js';
import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);

app.use(router).use(Notifications).use(pinia);

app.mount('#app');
