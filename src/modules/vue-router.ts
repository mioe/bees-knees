import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'
import NotFound from '~/404.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		...routes,
		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

export {
	router,
}
