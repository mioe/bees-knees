<script setup lang="ts">
const appStore = useAppStore()
const { onChangeState } = appStore

const isOpen = computed({
	get() {
		return appStore.state.isOpenSidebar
	},
	set(val) {
		onChangeState('isOpenSidebar', val)
	},
})

function handleOpenSidebar() {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<aside
		class="fixed left-0 top-0 z-99 h-full w-[170px] flex flex-col transform gap-[24px] bg-red-200 p-[16px] transition-transform"
		:class="{
			'translate-x-0': isOpen,
			'-translate-x-[200px]': !isOpen,
		}"
	>
		<header class="relative">
			<p>
				Bee`s Knees
			</p>
		</header>
	</aside>
</template>
