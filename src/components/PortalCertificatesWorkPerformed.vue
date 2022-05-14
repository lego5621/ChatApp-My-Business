<script setup>
import BaseInput from './BaseInput.vue';
</script>

<template>
	<div class="bg-white mb-cart">
		<p>Настройки для актов выполненных работ</p>
		<div class="grid-form">
			<BaseInput label="Банк" placeholder="" class="bank" />
			<BaseInput label="БИК" placeholder="" class="bik" />
			<BaseInput label="Р/счёт" placeholder="" class="estimated" />
			<BaseInput label="Кор/счёт" placeholder="" class="corporate" />
			<BaseInput label="Ответственный" placeholder="" class="responsible" />
		</div>
		<BaseInput
			label="Подписант, он же представитель лицензиата"
			placeholder="Директор"
			class="w-100 mt-11"
		/>
		<div class="w-100 d-flex flex-wrap">
			<div class="badge-cas mt-5 mr-1 text-truncate">Директор</div>
			<div class="badge-cas mt-5 mr-1 text-truncate">Генеральный директор</div>
			<div class="badge-cas mt-5 mr-1 text-truncate">
				Индивидуальный предпрениматель
			</div>
		</div>

		<BaseInput label="Основание" placeholder="Устав" class="w-100 mt-3" />
		<div class="w-100 d-flex flex-wrap">
			<div class="badge-cas mt-5 mr-1 text-truncate">Устав</div>
			<div class="badge-cas mt-5 mr-1 text-truncate">
				Свидетельство о регистрации ИП
			</div>
			<div class="badge-cas mt-5 mr-1 text-truncate">Лист ЕГРИП</div>
			<div class="badge-cas mt-5 mr-1 text-truncate">Довереннсоть</div>
		</div>

		<div class="d-flex justify-content-center mt-3">
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

.grid-form {
	display: grid;
	grid-template:
		'bank       bik          estimated '
		'corporate  responsible  responsible ';
	grid-column-gap: 20px;
	grid-row-gap: 11px;
}

.bank {
	grid-area: bank;
}

.bik {
	grid-area: bik;
}
.estimated {
	grid-area: estimated;
}
.corporate {
	grid-area: corporate;
}
.responsible {
	grid-area: responsible;
}

.mt-11 {
	margin-top: 11px;
}

.mt-5 {
	margin-top: 5px !important;
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
	width: 175px;
}

.badge-cas {
	border: 1px solid #0088cc;
	box-sizing: border-box;
	border-radius: 3px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	color: #0088cc;
	padding: 3px 9px;
}

@media (max-width: 1919px) {
	.grid-form {
		display: grid;
		grid-template:
			'bank          bik         '
			'estimated    corporate  '
			'responsible  responsible';
		grid-column-gap: 20px;
		grid-row-gap: 11px;
	}
}

@media (max-width: 1130px) {
	.grid-form {
		display: grid;
		grid-template:
			'bank        '
			'bik         '
			'estimated   '
			'corporate   '
			'responsible '
			'responsible ';
		grid-column-gap: 20px;
		grid-row-gap: 11px;
	}

	.badge-cas {
		max-width: 50%;
		min-width: 87px;
	}
}

@media (max-width: 500px) {
	.badge-cas {
		max-width: 47px;
	}
}
</style>
