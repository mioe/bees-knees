<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue'

useHead({
	title: 'Bee`s Knees App',
})

onMounted(async() => {
	console.log('🦕 secret:', import.meta.env.VITE_SECRET)
})
</script>

<template>
	<Sidebar />
	<div class="relative flex flex-col min-h-svh">
		<RouterView />
	</div>
</template>
