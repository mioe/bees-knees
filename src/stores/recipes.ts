import { useCollection, useFirestore, useDocument } from 'vuefire'
import { addDoc, collection, DocumentData, DocumentReference, Timestamp } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'


export const useRecipesStore = defineStore('recipes', () => {
	const db = useFirestore()
	const recipesRef = collection(db, 'recipes')
	const recipes = useCollection(recipesRef)

	async function addRecipe(body: any) {
		await addDoc(recipesRef, {
			...body,
			createdAt: Timestamp.fromDate(new Date(Date.now())),
			updatedAt: Timestamp.fromDate(new Date(Date.now())),
		})
	}

	function findRecipeById(
		recipeSource: ComputedRef<DocumentReference<DocumentData, DocumentData>>,
	): any {
		const {
			data: recipe,
			pending,
		} = useDocument(recipeSource, {
			once: true,
		})
		return {
			recipe,
			pending,
		}
	}

	return {
		recipesRef,
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
