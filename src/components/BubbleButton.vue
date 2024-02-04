<script setup lang="ts">
withDefaults(
	defineProps<{
		tag?: string
	}>(),
	{
		tag: 'a',
	},
)
</script>

<template>
	<Component :is="tag">
		hello
	</Component>
</template>
