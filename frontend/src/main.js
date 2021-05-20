import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import bootstrap from 'bootstrap';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

axios.defaults.baseURL = 'http://localhost:9000/api';

createApp(App)
	.use(router)
	.use(bootstrap)
	.use(FontAwesomeIcon)
    .component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
