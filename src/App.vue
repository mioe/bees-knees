<script setup lang="ts">
useHead({
	title: 'Bee`s Knees App',
})

const authStore = useAuthStore()
const { getRedirectCallback } = authStore

onMounted(async() => {
	await getRedirectCallback()
	console.log('🦕 secret:', import.meta.env.VITE_SECRET)
})
</script>

<template>
	<RouterView />
</template>
