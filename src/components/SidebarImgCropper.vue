<script setup>
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import { ref } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import { closeModal } from 'jenesius-vue-modal';

import { useProfileStore } from '../store/profile/state.js';
let profileStore = useProfileStore();

let image = ref(
	'https://images.radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2019-12/default_avatar_0.png?itok=FuE4zMx7'
);

let fileInput = ref(null);
let cropper = ref(null);

let loadImage = () => {
	let file = fileInput.value.files[0];
	image.value = URL.createObjectURL(file);
};

let uploadImage = () => {
	const { canvas } = cropper.value.getResult();
	if (canvas) {
		const form = new FormData();
		canvas.toBlob(async (blob) => {
			form.append('profile_image', blob);

			let response = await fetch('/profile/image/update', {
				method: 'POST',
				body: form,
			});

			if (response.ok) {
				notify({
					text: 'Изображение обновленно',
				});

				profileStore.profilePhotoUrl = URL.createObjectURL(blob);
				closeModal();
			} else {
				notify({
					text: 'Ошибка, попробуйте позже',
				});
			}
		}, 'image/jpeg');
	}
};
</script>

<template>
	<div class="tw-bg-white tw-text-black tw-w-[40vw] tw-p-4 tw-rounded">
		<h3 class="tw-text-black">Загрузка изображения</h3>
		<Cropper
			class="cropper tw-w-[80%] tw-min-h-[40vh] tw-mx-auto"
			:src="image"
			:stencil-props="{
				aspectRatio: 11 / 12,
			}"
			ref="cropper"
		></Cropper>

		<div class="tw-flex tw-justify-between">
			<div>
				<label for="file" class="btn">Выбрать фото</label>
				<input
					type="file"
					id="file"
					ref="fileInput"
					@change="loadImage()"
					accept="image/png, image/gif, image/jpeg"
					class="btn btn-primary tw-hidden"
					style="display: none"
				/>
			</div>

			<button @click="uploadImage" type="button" class="btn btn-primary">
				Сохранить
			</button>
		</div>
	</div>
</template>

<style scoped>
.btn,
::-webkit-file-upload-button {
	width: 175px;
	height: 35px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	background: #0088cc;
	border-radius: 3px;
	margin-top: 24px;
	color: #ffffff;
}

h3 {
	font-family: 'Inter';
}
</style>
