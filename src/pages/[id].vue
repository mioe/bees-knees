<script setup lang="ts">
import { doc } from 'firebase/firestore'

// const authStore = useAuthStore()
const recipesStore = useRecipesStore()
const { recipesRef, findRecipeById } = recipesStore
const route = useRoute()

const recipeSource = computed(() =>
	doc(recipesRef, route.params.id as string),
)
const {
	recipe,
	pending,
} = findRecipeById(recipeSource)

watch(pending, (val) => {
	if (!val && !recipe.value) {
		console.log('🦕 NOT FOUND')
	}
})
</script>

<template>
	<main class="relative flex flex-col">
		<header class="sticky left-0 top-0 z-1 w-full flex items-center justify-between bg-$document px-$safe-x py-$safe-y">
			<RouterLink
				:to="{ name: 'index' }"
			>
				{{ $t('back') }}
			</RouterLink>
			<!-- <RouterLink
				v-if="authStore.isAdm"
				class="flex-inline items-center gap-[8px]"
				:to="{ name: 'edit-id', params: { id: route.params.id } }"
			>
				<div class="i-mi:square-and-pencil h-[28px] w-[28px]" />
				<p>{{ $t('edit') }}</p>
			</RouterLink> -->
		</header>
		<div
			v-if="!pending && !!recipe"
			class="w-full flex flex-col gap-$safe-y px-$safe-x py-$safe-y"
		>
			<header
				v-if="recipe.image"
				class="relative w-full w-full flex"
			>
				<img
					:src="recipe.image"
					:alt="recipe.name"
					class="h-full max-h-[200px] object-cover"
				>
			</header>
			<h1>{{ recipe.name }}</h1>
			<div>
				<div
					v-for="(i, idx) in recipe.ingredients"
					:key="idx"
					class="grid grid-cols-2"
				>
					<div>
						{{ i.key }}
					</div>
					<div>
						{{ i.val }}
					</div>
				</div>
			</div>
			<div class="whitespace-pre-line">
				{{ recipe.description }}
			</div>
		</div>
	</main>
</template>
