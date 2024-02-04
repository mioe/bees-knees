<script setup lang="ts">
const formData = reactive({
	name: '',
	ingredients: [
		{ key: '', val: ''},
	],
	description: '',
	images: [],
})

function handleAddIngredient() {
	formData.ingredients.push({ key: '', val: '' })
}

function handleRemoveIngredient(idx: number) {
	formData.ingredients.splice(idx, 1)
}

async function onSubmit() {
	console.log('🦕 s')
}
</script>

<template>
	<form
		class="w-full flex flex-col gap-$safe-y"
		@submit.prevent="onSubmit"
	>
		<input
			id="slug"
			type="text"
			required
			autocomplete="off"
			:placeholder="$t('name', { lorem: ' коктейля' })"
		>
		<fieldset class="form-for-recipe--fieldset">
			<legend class="mb-$y">
				{{ $t('ingredients') }}:
			</legend>
			<div>
				<div
					v-for="(i, idx) in formData.ingredients"
					:key="idx"
					class="form-for-recipe--fieldset--row"
				>
					<input
						:id="`${idx}-${i.key}`"
						v-model="i.key"
						type="text"
						autocomplete="off"
						:placeholder="$t('name')"
					>
					<input
						:id="`${idx}-${i.val}`"
						v-model="i.val"
						type="text"
						autocomplete="off"
						:placeholder="$t('value')"
					>

					<div class="flex items-center justify-end">
						<button
							@click.prevent="handleRemoveIngredient(idx)"
						>
							<div class="i-mi:trash h-[20px] w-[20px]" />
						</button>
					</div>
				</div>
			</div>
			<button
				class="mt-$y"
				@click.prevent="handleAddIngredient"
			>
				+ {{ $t('add-ingredient') }}
			</button>
		</fieldset>
	</form>
</template>

<style>
.form-for-recipe--fieldset {
	all: unset;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

.form-for-recipe--fieldset .form-for-recipe--fieldset--row {
	display: grid;
	grid-template-columns: 1fr .5fr 40px;
}

.form-for-recipe--fieldset .form-for-recipe--fieldset--row input {
	border-radius: 0;
}

.form-for-recipe--fieldset .form-for-recipe--fieldset--row:first-of-type input:first-of-type {
	border-top-left-radius: var(--x);
}
.form-for-recipe--fieldset .form-for-recipe--fieldset--row:first-of-type input:last-of-type {
	border-top-right-radius: var(--x);
}

.form-for-recipe--fieldset .form-for-recipe--fieldset--row:last-of-type input:first-of-type {
	border-bottom-left-radius: var(--x);
}

.form-for-recipe--fieldset .form-for-recipe--fieldset--row:last-of-type input:last-of-type {
	border-bottom-right-radius: var(--x);
}
</style>
