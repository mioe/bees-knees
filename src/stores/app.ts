import { reactive } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
	const state = reactive({
		isOpenSidebar: false,
	})

	function onChangeState(key: string, val: boolean) {
		// @ts-ignore
		state[key] = val
	}

	function onCloseAllState() {
		Object.keys(state).forEach((key) => {
			// @ts-ignore
			state[key] = false
		})
	}

	return {
		state,

		onChangeState,
		onCloseAllState,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
