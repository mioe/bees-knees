<script setup lang="ts">
defineProps<{
	isLoading: boolean
}>()
</script>

<template>
	<div
		v-if="isLoading"
		class="absolute inset-0 z-1 flex items-center justify-center bg-$document c-$primary"
	>
		<div class="flex flex-col items-center justify-center gap-[4px] rounded-[8px] bg-$color-light-black p-[12px]">
			<div class="i-mi:svg-spinners-ring-resize h-[32px] w-[32px]" />
		</div>
	</div>
</template>
