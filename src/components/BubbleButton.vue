<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
	defineProps<{
		to?: RouteLocationRaw
		href?: string
		disabled?: boolean | undefined
	}>(),
	{
		href: '#',
		disabled: undefined,
	},
)

const tag = computed(() =>
	props.to
		? 'RouterLink'
		: props.href
			? 'a'
			: 'button',
)
</script>

<template>
	<Component
		:is="tag"
		:to
		:href
		:disabled
	>
		<slot />
	</Component>
</template>
