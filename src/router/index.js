import { createRouter, createWebHashHistory } from 'vue-router';
import Profile from '../views/ProfileView.vue';
import Portal from '../views/PortalView.vue';
import PageNotFound from '../views/PageNotFoundView.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: (to) => {
				return { path: '/profile' };
			},
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
		},
		{
			path: '/portal',
			name: 'portal',
			component: Portal,
		},
		{
			path: '/:pathMatch(.*)*',
			component: PageNotFound,
		},
	],
});

export default router;
