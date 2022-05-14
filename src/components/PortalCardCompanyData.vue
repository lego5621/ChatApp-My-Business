<script setup>
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import { ref } from 'vue';

let countries = ref(['Россия', 'Не Россия']);

let selectCountry = ref('Россия');
</script>

<template>
	<div class="bg-white mb-cart card-company-data">
		<p>Общие данные о компании “ООО Ростелеком”</p>
		<BaseInput label="Название компании" />
		<div class="d-flex cd-input justify-content-between country">
			<BaseSelect
				v-model="selectCountry"
				label="Страна компании"
				:option="countries"
				class="w-32"
			/>
			<BaseSelect label="Тип компании" class="w-66" />
		</div>

		<div class="tw-flex cd-input md:tw-flex-wrap">
			<BaseInput
				label="ИНН"
				placeholder=""
				class="tw-grow tw-mr-5 md:tw-w-full md:tw-mr-0"
			/>
			<button
				type="button"
				class="btn btn-primary tw-w-[175px] btn-top md:tw-w-full md:tw-mt-5"
			>
				Проверить
			</button>
		</div>

		<p class="company-rec">Реквизиты компании</p>
		<BaseInput
			label="Адресс регистрации"
			placeholder="Случайная улица, дом 3"
			class="w-100"
		/>
		<div class="d-flex cd-input company-rec-form">
			<BaseInput label="ИНН" placeholder="" class="mr-3 flex-grow-1" />
			<BaseInput label="КПП" placeholder="" class="flex-grow-1" />
		</div>
		<div class="d-flex justify-content-center mt-3">
			<button type="button" class="btn btn-primary w-32">Сохранить</button>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


.mb-cart {
	border-radius: 3px;
	padding: 14px 20px 20px 20px;
}

.mb-cart > p {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
}

/* .card-company-data {
	width: 100%;
} */

.cd-input {
	margin-top: 8px;
}
.w-32 {
	width: 32%;
}

.w-66 {
	width: 66%;
}

.btn-top {
	margin-top: 7px;
	height: 37px !important;
}

.btn {
	height: 35px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	background: #0088cc;
	border-radius: 3px;
	color: #ffffff;
}

.company-rec {
	margin-top: 34px;
}

@media (max-width: 1130px) {
	.company-rec-form {
		flex-wrap: wrap;
	}
	.company-rec-form .base-input {
		margin-right: 0 !important;
		margin-top: 20px;
		width: 100%;
	}

	.country > .w-66 {
		width: 38%;
	}

	.country > .w-32 {
		width: 53%;
	}
}
</style>
