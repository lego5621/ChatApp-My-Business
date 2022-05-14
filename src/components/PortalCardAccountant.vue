<script setup>
import BaseInput from './BaseInput.vue';
</script>

<template>
	<div class="bg-white mb-cart card-accountant tw-flex">
		<p>Бухгалтер</p>
		<BaseInput label="email" class="w-100 email" />
		<BaseInput label="ФИО" class="w-100" />
		<div class="d-flex justify-content-center">
			<button type="button" class="btn btn-primary">Сохранить</button>
		</div>
	</div>
</template>

<style scoped>
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

p {
	margin-bottom: 10px;
}

.card-accountant {
	width: 100%;
	/* height: 224px; */
	flex-direction: column;
}

.email {
	margin-bottom: 10px;
}

.btn {
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
</style>
