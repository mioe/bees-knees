<script setup lang="ts">
import BubbleButton from '~/components/BubbleButton.vue'
</script>

<template>
	<main class="relative min-h-[100svh] flex flex-col">
		<img
			class="absolute z-0 w-full object-cover"
			src="/favicons/pwa-512x512.png"
			alt=""
		>

		<article class="h-full">
			hello
		</article>

		<footer class="sticky bottom-0 left-0 z-1 mt-auto w-full shrink-0">
			<BubbleButton />
		</footer>
	</main>
</template>
