<script setup lang="ts">
const authStore = useAuthStore()
const recipesStore = useRecipesStore()
const { handleSignInPopup } = authStore
</script>

<template>
	<main class="relative flex flex-col min-h-svh">
		<div class="flex flex-wrap gap-[16px] px-$safe-x py-$safe-y">
			<RouterLink
				v-for="(r, idx) in recipesStore.recipes"
				:key="idx"
				class="h-full min-w-[220px] flex flex-1"
				:to="{ name: 'id', params: {id: r.id} }"
			>
				{{ r.name }}
			</RouterLink>
		</div>

		<footer
			class="sticky bottom-0 left-0 z-1 mt-auto w-full flex shrink-0 items-center justify-center bg-black p-[24px]"
		>
			<template v-if="!authStore.currentUser">
				<button
					class="flex-inline items-center gap-[8px]"
					@click="handleSignInPopup"
				>
					<div class="i-mi:touchid h-[28px] w-[28px]" />
					<p>{{ $t('sign-in') }}</p>
				</button>
			</template>
			<template v-else>
				<template v-if="authStore.isAdm">
					<RouterLink
						class="flex-inline items-center gap-[8px]"
						:to="{ name: 'create' }"
					>
						<div class="i-mi:square-and-pencil h-[28px] w-[28px]" />
						<p>{{ $t('new-recipe') }}</p>
					</RouterLink>
				</template>
				<template v-else>
					<p>Welcome</p>
				</template>
			</template>
		</footer>
	</main>
</template>
