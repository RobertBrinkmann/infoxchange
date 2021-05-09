import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import bootstrap from 'bootstrap';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

axios.defaults.baseURL = 'http://localhost:9000/api';

createApp(App)
	.use(router)
	.use(bootstrap)
	.mount('#app');
