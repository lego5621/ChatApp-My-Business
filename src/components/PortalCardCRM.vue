<script setup>
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
let crmList = ref(['AMO', 'Bitrix 24']);

let selectCrm = ref('Bitrix 24');
</script>

<template>
	<div class="bg-white mb-cart card-crm tw-flex flex-column">
		<p>Подключите CRM</p>
		<BaseInput label="Ссылка на портал" placeholder="https://sampleurl.com" />
		<BaseSelect
			label="Тип портала"
			class="mt-10"
			v-model="selectCrm"
			:option="crmList"
		/>

		<div class="d-flex justify-content-center flex-grow-1 align-items-end">
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

.mt-10 {
	margin-top: 10px;
}
</style>
