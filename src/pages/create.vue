<script setup lang="ts">
import Loader from '~/components/Loader.vue'
import FormForRecipe from '~/components/FormForRecipe.vue'
const authStore = useAuthStore()
const recipesStore = useRecipesStore()
const router = useRouter()

const { addRecipe } = recipesStore

const loading = ref(false)

function onSubmit(formData: any) {
	loading.value = true
	addRecipe(formData)
		.then(() => router.push('/'))
		.finally(() => loading.value = false)
}

onMounted(() => {
	if (!authStore.isAdm) {
		router.push('/')
	}
})
</script>

<template>
	<div class="relative">
		<FormForRecipe @submit="onSubmit" />
		<Loader :is-loading="loading" />
	</div>
</template>
