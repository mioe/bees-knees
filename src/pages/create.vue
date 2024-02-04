<script setup lang="ts">
const authStore = useAuthStore()
const recipesStore = useRecipesStore()
const router = useRouter()

const { addRecipe } = recipesStore

const formData = reactive({
	name: '',
	ingredients: [],
	description: '',
})

function handleAddIngredient() {
	// @ts-ignore
	formData.ingredients.push({ key: '', val: '' })
}

function onSubmit() {
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
	<main class="relative flex flex-col min-h-svh">
		<form
			class="flex flex-col gap-[8px] p-[16px]"
			@submit.prevent="onSubmit"
		>
			<fieldset>
				<legend>Name:</legend>
				<input
					v-model="formData.name"
					type="text"
					required
				>
			</fieldset>
			<fieldset>
				<legend>Ingredients:</legend>
				<div
					v-for="(i, idx) in formData.ingredients"
					:key="idx"
				>
					<input
						v-model="i.key"
						type="text"
					>
					<input
						v-model="i.val"
						type="text"
					>
				</div>
				<div @click="handleAddIngredient">
					+ add
				</div>
			</fieldset>
			<fieldset>
				<legend>Description:</legend>
				<input
					v-model="formData.description"
					type="text"
					required
				>
			</fieldset>

			<button type="submit">
				Done
			</button>
		</form>
	</main>
</template>
