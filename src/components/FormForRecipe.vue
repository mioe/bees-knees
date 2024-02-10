<script setup lang="ts">
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useFirebaseStorage  } from 'vuefire'

import Loader from '~/components/Loader.vue'
import Cropper from '~/components/Cropper.vue'
const inputFileRef = shallowRef<HTMLInputElement | undefined>()
const cropperRef = shallowRef<InstanceType<typeof Cropper> | undefined>()
const authStore = useAuthStore()
const currentUser = computed(() => authStore.currentUser)

const storage = useFirebaseStorage()
const reference = storageRef(storage, `recipes/${Date.now()}-${currentUser.value?.uid}.png`)

const loading = ref(false)

const formData = reactive({
	name: '',
	ingredients: [
		{ key: '', val: ''},
	],
	description: '',
	image: '',
})

function handleUploadPhoto() {
	inputFileRef.value?.click()
}

async function onFileChange(ev: any) {
	const { target: { files } } = ev
	const file = files[0]
	try {
		const cropFile = await cropperRef.value?.open({ file }) as File
		loading.value = true
		uploadBytes(reference, cropFile)
			.then(snapshot => getDownloadURL(snapshot.ref))
			.then(downloadURL => {
				loading.value = false
				formData.image = downloadURL
			})
	} catch (err) {
		console.error(err)
	}
}

function handleAddIngredient() {
	formData.ingredients.push({ key: '', val: '' })
}

function handleRemoveIngredient(idx: number) {
	formData.ingredients.splice(idx, 1)
}

const emit = defineEmits<{
	submit: [formData: any]
}>()

async function onSubmit() {
	emit('submit', formData)
}
</script>

<template>
	<form
		class="relative flex flex-col"
		@submit.prevent="onSubmit"
	>
		<Loader :is-loading="loading" />
		<header class="sticky left-0 top-0 z-1 w-full flex items-center justify-between bg-$document px-$safe-x py-$safe-y">
			<RouterLink
				:to="{ name: 'index' }"
			>
				{{ $t('back') }}
			</RouterLink>

			<button type="submit">
				{{ $t('done') }}
			</button>
		</header>
		<div class="w-full flex flex-col gap-$safe-y px-$safe-x py-$safe-y">
			<div v-if="!formData.image">
				<input
					ref="inputFileRef"
					type="file"
					:multiple="false"
					class="hidden"
					@change="onFileChange"
				>

				<button @click.prevent="handleUploadPhoto">
					<span>image</span>
				</button>

				<Cropper ref="cropperRef" />
			</div>
			<div v-else>
				<img
					:src="formData.image"
					alt=""
				>
			</div>

			<input
				id="slug"
				v-model="formData.name"
				type="text"
				required
				autocomplete="off"
				:placeholder="$t('name-recipe')"
			>
			<div class="form-for-recipe--fieldset">
				<p class="mb-$y">
					{{ $t('ingredients') }}:
				</p>
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
							:placeholder="$t('name-ingredient')"
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
			</div>
			<textarea
				id="description"
				v-model="formData.description"
				:placeholder="$t('description')"
				rows="10"
			/>
		</div>
	</form>
</template>

<style scoped>
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
