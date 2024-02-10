<script setup lang="ts">
import FormForRecipe from '~/components/FormForRecipe.vue'
const authStore = useAuthStore()
const recipesStore = useRecipesStore()
const router = useRouter()

const { addRecipe } = recipesStore

function onSubmit(formData: any) {
	addRecipe(formData)
		.then(() => router.push('/'))
}

onMounted(() => {
	if (!authStore.isAdm) {
		router.push('/')
	}
})
</script>

<template>
	<FormForRecipe
		@submit="onSubmit"
	/>
</template>
