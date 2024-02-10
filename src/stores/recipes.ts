import { useCollection, useFirestore, useDocument } from 'vuefire'
import { addDoc, collection, doc } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', () => {
	const db = useFirestore()
	const recipes = useCollection(collection(db, 'recipes'))

	async function addRecipe(body: any) {
		await addDoc(collection(db, 'recipes'), body)
	}

	function findRecipeById(id: string) {
		const recipe = useDocument(doc(collection(db, 'recipes'), id), {
			once: true,
		})
		return recipe
	}

	return {
		recipes,

		addRecipe,
		findRecipeById,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useRecipesStore, import.meta.hot))
