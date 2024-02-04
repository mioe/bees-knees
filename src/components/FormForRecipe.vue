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

async function onSubmit() {
	console.log('🦕 s')
}
</script>

<template>
	<form
		@submit.prevent="onSubmit"
	>
		<div>
			<label for="name">
				{{ $t('name') }}
			</label>
			<input
				id="name"
				type="text"
				required
				autocomplete="off"
			>
		</div>
		<fieldset>
			<legend>{{ $t('ingredients') }}:</legend>
			<div
				v-for="(i, idx) in formData.ingredients"
				:key="idx"
			>
				<input
					v-model="i.key"
					type="text"
				>
				<input
					v-model="i.val"
					type="text"
				>
			</div>
			<div @click="handleAddIngredient">
				+ add
			</div>
		</fieldset>
	</form>
</template>
