<script setup lang="ts">
const authStore = useAuthStore()
const { handleSignInPopup } = authStore
</script>

<template>
	<main class="relative flex flex-col min-h-svh">
		<article class="h-full">
			hello
		</article>

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
