<script setup lang="ts">
useHead({
	title: 'Bee`s Knees App',
})

onMounted(() => {
	console.log('🦕 secret', import.meta.env.VITE_SECRET)
})
</script>

<template>
	<RouterView />
</template>
