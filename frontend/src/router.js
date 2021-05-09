import {createRouter, createWebHistory} from 'vue-router';

const index = () => import('@/components/Index.vue');
const movie = () => import('@/components/imdb/Item.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
		{
			name: 'home',
			path: '/',
			component: index
		},
		{
			name: 'movie',
            path: '/movie/:id/:keywords',
            component: movie
		},
    ]
});
