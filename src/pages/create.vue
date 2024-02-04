<script setup lang="ts">
const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
	if (!authStore.isAdm) {
		router.push('/')
	}
})
</script>

<template>
	<main>
		<form @submit.prevent="() => {}">
			<input
				type="text"
				required
			>
		</form>
	</main>
</template>
