<script setup>
import IconCopyVue from './icons/IconCopy.vue';
import IconQuestionVue from './icons/IconQuestion.vue';

import { useClipboard } from '../use/useClipboard';
import { ref } from 'vue';
import { useProfileStore } from '../store/profile/state.js';
import Popper from 'vue3-popper';

let input = ref(null);

let profileStore = useProfileStore();
</script>

<template>
	<section class="my-business-referrals">
		<div
			class="mb-cart tw-p-5 tw-pt-[14px] tw-mb-5 tw-rounded-[3px] bg-white tw-min-h-[149px] tw-mr-5 2md:tw-mr-0"
		>
			<p>Реферальная ссылка</p>
			<div class="d-flex">
				<input
					type="text"
					class="mb-input flex-grow-1 tw-bg-[#F5F5F5]"
					readonly
					:value="profileStore.referralLink"
					ref="input"
				/>
				<div class="d-flex align-items-center">
					<IconCopyVue
						class="cart-icons tw-cursor-pointer"
						@click="useClipboard(input, 'Реферальная ссылка скопирована')"
					/>
				</div>
			</div>
			<div class="d-flex justify-content-between referrals-footer">
				<p>У вас: <span> 14</span> рефералов</p>
				<Popper :hover="true" :arrow="true">
					<p class="tw-cursor-pointer">
						Что это значит <IconQuestionVue class="tw-ml-1" />
					</p>
					<template #content>
						<div class="tw-text-white tw-text-xs">
							какой-то очень длинный текст
						</div>
					</template>
				</Popper>
			</div>
		</div>
	</section>
</template>

<style scoped>
.referrals-footer p {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	margin-top: 16px;
	margin-bottom: 0;
}

.referrals-footer p:last-child {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	margin-top: 20px;

	color: rgba(0, 0, 0, 0.24);
}

.referrals-footer span {
	color: #0088cc;
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
	padding: 9px 12px;
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
