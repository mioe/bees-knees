<script setup lang="ts">
defineProps<{
	isLoading: boolean
}>()
</script>

<template>
	<Teleport to="body">
		<div
			v-if="isLoading"
			class="fixed left-0 top-0 z-1 w-full flex items-center justify-center bg-$document c-$primary min-h-svh"
		>
			<div class="flex flex-col items-center justify-center gap-[4px] rounded-[8px] bg-$color-light-black p-[12px]">
				<div class="i-mi:svg-spinners-ring-resize h-[32px] w-[32px]" />
			</div>
		</div>
	</Teleport>
</template>
