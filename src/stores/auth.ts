import { ref } from 'vue'
import {
	useCurrentUser,
	useFirebaseAuth,
} from 'vuefire'
import {
	getRedirectResult,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
} from 'firebase/auth'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
	const googleAuthProvider = new GoogleAuthProvider()
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const auth = useFirebaseAuth()! // only exists on client side
	const user = useCurrentUser()

	const error = ref(null)

	async function handleSignInPopup() {
		await signInWithPopup(auth, googleAuthProvider).catch((reason) => {
			console.error('🦕 Failed signInWithPopup', reason)
			error.value = reason
		})
	}

	async function handleSignOut() {
		await signOut(auth)
	}

	async function getRedirectCallback() {
		await getRedirectResult(auth).catch((reason) => {
			console.error('🦕 Failed getRedirectCallback', reason)
			error.value = reason
		})
	}

	return {
		currentUser: user,
		authError: error,

		handleSignInPopup,
		handleSignOut,
		getRedirectCallback,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
