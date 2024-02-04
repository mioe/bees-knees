import { useCollection, useFirestore } from 'vuefire'
import { addDoc, collection } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', () => {
	const db = useFirestore()
	const recipes = useCollection(collection(db, 'recipes'))

	async function addRecipe(body: any) {
		await addDoc(collection(db, 'recipes'), body)
	}

	return {
		recipes,

		addRecipe,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useRecipesStore, import.meta.hot))
