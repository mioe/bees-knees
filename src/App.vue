<script setup lang="ts">
useHead({
	title: 'Bee`s Knees App',
})

onMounted(async() => {
	console.log('🦕 secret:', import.meta.env.VITE_SECRET)
})
</script>

<template>
	<div class="relative flex flex-col min-h-svh">
		<RouterView />
	</div>
</template>
