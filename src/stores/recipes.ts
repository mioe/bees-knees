import { acceptHMRUpdate, defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', () => {
	return {
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useRecipesStore, import.meta.hot))
