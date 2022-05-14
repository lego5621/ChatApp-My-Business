<script setup>
import IconPlusVue from './icons/IconPlus.vue';
</script>

<template>
	<div class="bg-white mb-cart card-accountant">
		<div class="title">
			Количество сотрудников
			<div class="ml-2">
				<IconPlusVue role="button" />
			</div>
		</div>
		<div class="title">
			Сотрудников
			<div class="ml-2">
				<IconPlusVue role="button" />
			</div>
		</div>

		<div class="d-flex justify-content-center caunt">14</div>
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

.title {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	display: flex;
}

.card-accountant {
	width: 100%;
	height: 192px;
}

.card-accountant > .title {
	margin-bottom: 0;
}

.card-accountant > .title:nth-last-child(2) {
	display: none;
}
.card-accountant > .caunt {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 110px;
	line-height: 133px;
	display: flex;
	align-items: center;
	margin-top: -5px;
	color: #0088cc;
}

svg {
	position: relative;
	top: 0.15em;
}

@media (max-width: 1464px) {
	.card-accountant > .title:first-child {
		display: none;
	}

	.card-accountant > .title:nth-last-child(2) {
		display: block;
	}
}
</style>
