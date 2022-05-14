<script setup>
import IconPlusVue from './icons/IconPlus.vue';
import IconSettingsVue from './icons/IconSettings.vue';
import IconCloseVue from './icons/IconClose.vue';

import { ref } from 'vue';

let isShowDeleteIcons = ref(false);
</script>

<template>
	<div class="bg-white mb-cart card-byssiness tw-flex flex-column">
		<p>Мой бизнес</p>
		<div class="flex-grow-1">
			<div class="company-item active text-truncate tw-flex">
				<div class="tw-grow tw-flex">ООО Ростелеком</div>
				<div>
					<IconCloseVue v-show="isShowDeleteIcons" class="tw-cursor-pointer" />
				</div>
			</div>
			<div class="company-item text-truncate tw-flex">
				<div class="tw-grow tw-flex">ООО Ромашка</div>
				<div>
					<IconCloseVue v-show="isShowDeleteIcons" class="tw-cursor-pointer" />
				</div>
			</div>
			<div class="company-item text-truncate tw-flex">
				<div class="tw-grow tw-flex">ОАО Газпром</div>
				<div>
					<IconCloseVue v-show="isShowDeleteIcons" class="tw-cursor-pointer" />
				</div>
			</div>
		</div>
		<div class="d-flex add-company" role="button">
			<IconPlusVue class="mr-2" />
			добавить компанию
		</div>

		<div class="setting-icon">
			<IconSettingsVue
				role="button"
				@click="isShowDeleteIcons = !isShowDeleteIcons"
			/>
		</div>
	</div>
</template>

<style scoped>
svg {
	color: rgba(0, 0, 0, 0.23);
}
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

.card-byssiness {
	position: relative;
	/* display: flex; */
}

.setting-icon {
	position: absolute;
	top: 7px;
	right: 7px;
}

.card-byssiness > p {
	margin-bottom: 15px;
}

svg {
	position: relative;
	top: 0.15em;
}

.add-company {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;

	color: #0088cc;
}

.company-item {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	padding-bottom: 15px;

	color: #000000;
}

.company-item .tw-grow::before {
	content: '';
	display: flex;
	width: 8px;
	height: 8px;
	background: transparent;
	border-radius: 7.5px;
	margin-right: 13px;
	margin-left: 7px;
	align-self: center;
}
.company-item.active .tw-grow::before {
	content: '';
	display: flex;
	width: 8px;
	height: 8px;
	background: #0088cc;
	border-radius: 7.5px;
	margin-right: 13px;
	margin-left: 7px;
	align-self: center;
}

.company-item:last-child {
	border-bottom: 1px solid #e4e4e4;
	margin-bottom: 10px;
}
</style>
