<script setup lang="ts">
const recipesStore = useRecipesStore()
const { findRecipeById } = recipesStore
const route = useRoute()

const recipe = computed(() => findRecipeById(route.params.id as string))
</script>

<template>
	<div>
		<RouterLink :to="{ name: 'index' }">
			index
		</RouterLink>
		<pre>{{ recipe }}</pre>
	</div>
</template>
