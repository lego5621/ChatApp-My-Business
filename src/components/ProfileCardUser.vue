<script setup>
import IconEditVue from './icons/IconEdit.vue';
import IconCopyVue from './icons/IconCopy.vue';
import IconCloseVue from './icons/IconClose.vue';
import IconSaveVue from './icons/IconSave.vue';

import { useClipboard } from '../use/useClipboard';
import { ref } from 'vue';
import { useProfileStore } from '../store/profile/state.js';
import { notify } from '@kyvg/vue3-notification';

let input = ref(null);
let inputName = ref(null);

let profileStore = useProfileStore();

let isVisibleEditBtn = ref(false);

let changeName = async () => {
	const form = new FormData();
	form.append('name', inputName.value.value);
	let response = await profileStore.chengeProfileData(form);

	if (response.ok) {
		profileStore.name = inputName.value.value;
		notify({
			text: 'Сохранено',
		});
		isVisibleEditBtn.value = !isVisibleEditBtn.value;
	} else {
		let errorStatus = await response.json();

		notify({
			text: errorStatus.message,
			type: 'error',
		});
	}
};
</script>

<template>
	<section>
		<div class="mb-cart tw-p-5 tw-pt-[14px] bg-white tw-rounded-[3px] tw-mb-5">
			<p>Пользователь</p>
			<div class="d-flex" style="margin-bottom: 7px">
				<input
					type="text"
					class="mb-input flex-grow-1"
					:value="profileStore.name"
					:readonly="!isVisibleEditBtn"
					ref="inputName"
				/>
				<div class="d-flex align-items-center">
					<IconEditVue
						class="cart-icons tw-cursor-pointer"
						@click="isVisibleEditBtn = !isVisibleEditBtn"
						v-if="!isVisibleEditBtn"
					/>
				</div>
				<div class="d-flex align-items-center" v-if="isVisibleEditBtn">
					<IconSaveVue
						class="cart-icons tw-cursor-pointer"
						@click="changeName"
					/>
					<IconCloseVue
						class="cart-icons tw-cursor-pointer"
						@click="isVisibleEditBtn = !isVisibleEditBtn"
					/>
				</div>
			</div>
			<div class="d-flex">
				<input
					type="email"
					class="mb-input tw-bg-[#F5F5F5] flex-grow-1"
					readonly
					:value="profileStore.email"
					ref="input"
				/>
				<div class="d-flex align-items-center">
					<IconCopyVue
						class="cart-icons tw-cursor-pointer"
						@click="useClipboard(input, 'Email скопирован')"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.mb-cart > p {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	margin-bottom: 13px;
}

.mb-input {
	border: 1px solid #e4e4e4;
	border-radius: 3px;
	padding: 8px 12px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	outline: none;
	color: #000000 !important;
}

.cart-icons {
	width: 14px;
	margin-left: 21px;
	height: 14px;
}
</style>
