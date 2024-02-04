<script setup lang="ts">
import BubbleButton from '~/components/BubbleButton.vue'
</script>

<template>
	<main class="relative flex flex-col min-h-svh">
		<header>
			dd
		</header>

		<article class="h-full">
			hello
		</article>

		<footer class="sticky bottom-0 left-0 z-1 mt-auto w-full shrink-0">
			<BubbleButton :to="{ name: 'create' }">
				ff
			</BubbleButton>
		</footer>
	</main>
</template>
