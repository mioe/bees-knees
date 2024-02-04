<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue'

useHead({
	title: 'Bee`s Knees App',
})

const authStore = useAuthStore()
const { getRedirectCallback } = authStore

const {
	top,
	right,
	bottom,
	left,
} = useScreenSafeArea()

onMounted(async() => {
	await getRedirectCallback()
	console.log('🦕 secret:', import.meta.env.VITE_SECRET)
})
</script>

<template>
	<Sidebar />
	<div class="relative flex flex-col min-h-svh">
		<p>
			top: {{ top }}<br>
			right: {{ right }}<br>
			bottom: {{ bottom }}<br>
			left {{ left }}<br>
		</p>
		<RouterView />
	</div>
</template>
