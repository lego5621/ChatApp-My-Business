<script setup>
import { useProfileStore } from '../store/profile/state.js';
let profileStore = useProfileStore();
</script>

<template>
	<section class="my-business-alerts">
		<div class="my-alerts-wrap mb-cart bg-white tw-mr-5 md:tw-mr-0">
			<p>Оповещения</p>

			<div
				class="mb-alert tw-flex"
				:class="notification.check ? 'activ' : ''"
				role="button"
				v-for="notification in profileStore.notifications"
				:key="notification.title"
				@click="profileStore.chengeNotificStatus(notification)"
			>
				<div>
					<img src="https://svgshare.com/i/hCH.svg" alt="icon" />
				</div>
				<p class="flex-grow-1 align-items-center d-flex">
					{{ notification.title }}
				</p>
				<div class="align-items-center">Включено</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
p {
	margin-bottom: 0;
}

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

.mb-alert {
	border: 1px solid #e4e4e4;
	border-radius: 3px;
	padding: 9px 15px 9px 6px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	color: rgba(0, 0, 0, 0.2);
	margin-bottom: 9px;
}

.mb-alert:nth-last-child(1) {
	margin-bottom: 0;
}

.mb-alert > div:last-child,
.mb-alert.activ > div:last-child {
	display: none;
}

.mb-alert > p {
	margin-left: 23px;
}

.mb-alert img {
	opacity: 0.33;
}

.mb-alert.activ {
	border: 1px solid #0088cc;
	color: #000000;
}

.mb-alert.activ img {
	opacity: 1;
}

.mb-alert.activ > div:last-child {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	color: #0088cc;
	display: flex;
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

@media (max-width: 1464px) and (min-width: 1130px) {
	.mb-alert.activ > div:last-child {
		display: none;
	}
}
</style>
