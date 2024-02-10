<script setup lang="ts">
import { Cropper } from 'vue-advanced-cropper'
import Loader from '~/components/Loader.vue'

const cropperRef = ref<InstanceType<typeof Cropper> | null>(null)

const isOpen = ref(false)
const isLoaded = ref(false)
const resolveCallback = ref<any>(null)
const rejectCallback = ref<any>(null)
const base64File = ref<string | null>(null)

function reset() {
	isOpen.value = false
	isLoaded.value = false
	resolveCallback.value = null
	rejectCallback.value = null

	if (base64File.value)
		URL.revokeObjectURL(base64File.value)
}

function open({ file }: { file: File }) {
	reset()

	const promise = new Promise((resolve, reject) => {
		resolveCallback.value = resolve
		rejectCallback.value = reject
	})

	isOpen.value = true
	base64File.value = URL.createObjectURL(file)

	return promise
}

function close() {
	rejectCallback.value()
	reset()
}

function submit() {
	const { canvas } = cropperRef.value?.getResult() as any

	canvas.toBlob((blob: any) => {
		const file = new File([blob], Date.now() + '.png', {
			type: 'image/png',
		})
		resolveCallback.value(file)
		reset()
	}, 'image/png', 1)
}

const onReady = () => {
	isLoaded.value = true
}

const handleSubmit = () => {
	submit()
}

const handleClose = () => {
	close()
}

defineExpose({
	open,
})
</script>

<template>
	<Teleport to="body">
		<div
			v-if="isOpen"
			class="fixed bottom-0 top-0 z-99 w-full flex flex-col bg-$document h-svh"
		>
			<header class="w-full flex shrink-0 items-center justify-between gap-$safe-x bg-$document px-$safe-x py-$safe-y">
				<button @click="handleClose">
					{{ $t('back') }}
				</button>

				<button
					v-if="isLoaded"
					@click="handleSubmit"
				>
					{{ $t('crop') }}
				</button>
			</header>
			<div class="relative h-full w-full flex flex-1 items-center justify-center">
				<Cropper
					ref="cropperRef"
					:src="base64File"
					@ready="onReady"
				/>

				<Loader :is-loading="!isLoaded" />
			</div>
		</div>
	</Teleport>
</template>
