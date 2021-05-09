import {createRouter, createWebHistory} from 'vue-router';

const index = () => import('@/components/Index.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
		{
			name: 'home',
			path: '/',
			component: index
		},
    ]
});
