<script setup>
import { ref } from 'vue';
import { notify } from '@kyvg/vue3-notification';

import { useProfileStore } from '../store/profile/state.js';
let profileStore = useProfileStore();

let password = ref('');
let newPassword = ref('');
let newPasswordConfirmation = ref('');

let changePassword = async () => {

	const form = new FormData();
	form.append('name', profileStore.name);
	form.append('password', password.value);
	form.append('new_password', newPassword.value);
	form.append('new_password_confirmation', newPasswordConfirmation.value);

	let response = await profileStore.chengeProfileData(form);

	if (response.ok) {
		notify({
			text: 'Пароль изменен',
		});
		password.value =''
		newPassword.value =''
		newPasswordConfirmation.value =''
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
	<section class="my-business-password">
		<div class="mb-password-wrap mb-cart bg-white tw-mr-5 xl:tw-mr-0">
			<p>Смена пароля</p>
			<div class="password-input">
				<label for="input1" class="d-flex justify-content-end">
					<span class="bg-white">Текущий пароль</span>
				</label>
				<input type="text" class="form-control" v-model="password" />
			</div>
			<div class="password-input">
				<label for="input1" class="d-flex justify-content-end">
					<span class="bg-white">Новый пароль</span>
				</label>
				<input type="text" class="form-control" v-model="newPassword" />
			</div>
			<div class="password-input">
				<label for="input1" class="d-flex justify-content-end">
					<span class="bg-white">Повторите пароль</span>
				</label>
				<input
					type="text"
					class="form-control"
					v-model="newPasswordConfirmation"
				/>
			</div>
			<div class="d-flex justify-content-center">
				<div
					class="password-btn-save d-flex justify-content-center align-items-center text-white"
					@click="changePassword"
				>
					Сохранить
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
input:focus {
	border: 1px solid #0088cc !important;
}

.password-input:focus-within label {
	color: #000000 !important;
}

.password-input {
	margin-bottom: 6px;
}

.password-input > label {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #c7c7c7;
	margin-bottom: 0;
	margin-right: 10px;
	padding: 0 4px;
}

.password-input > input {
	margin-top: -8px !important;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
}

.password-btn-save {
	background: #0088cc;
	border-radius: 3px;
	width: 175px;
	height: 35px;
	margin-top: 22px;
}

.mb-password-wrap > p {
	margin-bottom: 3px;
}

/* Общие классы */
.mb-cart {
	border-radius: 3px;
	padding: 14px 20px 23px 20px;
	margin-bottom: 20px;
}

.mb-cart > p {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	margin-bottom: 10px;
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
	color: #000000;
}

.cart-icons {
	width: 14px;
	margin-left: 21px;
	height: 14px;
}

input[readonly] {
	background-color: #f5f5f5;
}
</style>
