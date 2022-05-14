<script setup>
import IconUserVue from './icons/IconUser.vue';
import IconBusinessVue from './icons/IconBusiness.vue';
import IconExitVue from './icons/IconExit.vue';
import IconSettingsVue from './icons/IconSettings.vue';
import SidebarImgCropper from './SidebarImgCropper.vue';
import { openModal } from 'jenesius-vue-modal';

import { useProfileStore } from '../store/profile/state.js';
import { computed } from 'vue';

let profileStore = useProfileStore();
</script>

<template>
	<section class="tw-flex tw-flex-col my-business-sidebar">
		<div
			class="tw-flex tw-flex-col tw-rounded-[3px] tw-bg-white md:tw-h-[70vh] tw-w-full tw-h-[775px]"
		>
			<div class="tw-relative">
				<img class="mb-avatar" :src="profileStore.profilePhotoUrl" alt="" />
				<div class="mb-avatar-gradient position-absolute tw-flex tw-flex-col">
					<div class="tw-flex justify-content-end flex-grow-1">
						<div
							role="button"
							class="tw-flex md:tw-justify-center md:tw-items-center"
						>
							<IconSettingsVue
								class="md:tw-w-full md:tw-h-full"
								@click="openModal(SidebarImgCropper)"
							/>
						</div>
					</div>
					<div class="avatar-name text-truncate">{{ profileStore.name }}</div>
					<div
						class="avatar-description tw-flex justify-content-between flex-wrap"
					>
						<div class="text-nowrap" style="margin-right: 10px">
							ID: {{ profileStore.id }}
						</div>
						<div class="text-nowrap">{{ profileStore.email }}</div>
					</div>
				</div>
			</div>

			<div class="mb-avatar-link-wrap flex-grow-1 tw-flex tw-flex-col">
				<div class="link-title">Навигация</div>
				<div class="link-id">ID:{{ profileStore.id }}</div>

				<router-link to="/profile" class="mb-avatar-link tw-flex">
					<div class="tw-flex">
						<IconUserVue />
					</div>
					<div class="tw-flex tw-grow md:tw-hidden tw-text-[#0000004d]">
						Профиль
					</div>
					<div class="text-truncate ml-3">{{ profileStore.fullName }}</div>
				</router-link>

				<router-link to="/portal" class="mb-avatar-link tw-flex">
					<div class="tw-flex">
						<IconBusinessVue />
					</div>
					<div class="tw-flex tw-grow md:tw-hidden tw-text-[#0000004d]">
						Мой бизнес
					</div>
					<div>4</div>
				</router-link>
				<div class="flex-grow-1"></div>
				<a class="mb-avatar-link d-flex" href="#">
					<div class="tw-flex tw-self-center">
						<IconExitVue />
					</div>
					<div class="flex-grow-1">Выйти</div>
					<div></div>
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
svg {
	color: #ffffff;
}

.mb-sidebar-link {
	padding-left: 34px;
}

.mb-sidebar-link > div > p.active {
	color: #000000;
}

.mb-avatar {
	width: 100%;
	height: 303px;
	object-fit: cover;
}

.mb-avatar-gradient {
	padding: 8px 8px 20px 16px;
	width: 100%;
	height: 303px;
	top: 0;
	right: 0;
	background: linear-gradient(to bottom, transparent 50%, #000000 100%);
	color: white;
}

.mb-avatar-gradient .avatar-name {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	margin-bottom: 7px;
}

.avatar-description {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: rgba(255, 255, 255, 0.64);
}

.mb-avatar-link-wrap {
	padding: 21px 26px 21px 26px;
}

.link-title {
	padding-bottom: 21px;
	border-bottom: 1px solid #e4e4e4;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: rgba(0, 0, 0, 0.5);
	text-align: center;
}

.mb-avatar-link,
.mb-avatar-link:hover {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	margin-top: 21px;

	color: rgba(0, 0, 0, 0.3);
}

.mb-avatar-link:last-child {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
}

.mb-avatar-link > div > svg {
	margin-right: 15px;
	color: #0000004d;
}

/* .mb-avatar-link.activ {
	color: #000000;
} */

.link-id {
	display: none;
}

@media (max-width: 1464px) {
	.mb-avatar-link > div:last-child {
		display: none;
	}

	.mb-avatar {
		height: 209px;
	}

	.mb-avatar-gradient {
		height: 209px;
	}

	.avatar-name {
		display: none;
	}

	.avatar-description > div:last-child {
		order: -1;
	}
}

@media (max-width: 1129px) {
	.mb-avatar-link > div {
		display: none;
	}

	.mb-avatar-link > div > svg {
		margin-right: 0px;
	}

	.mb-avatar-link > div:first-child {
		display: flex;
	}

	.mb-avatar-link {
		justify-content: center;
	}

	.mb-avatar-link-wrap {
		padding: 16px 11px 20px 11px;
	}

	.link-id {
		display: block;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: rgba(0, 0, 0, 0.5);
		text-align: center;

		padding-bottom: 16px;
		border-bottom: 1px solid #e4e4e4;
	}

	.link-title {
		display: none;
	}

	/* .my-business-sidebar > div {
		height: 70vh;
	} */

	.mb-avatar {
		height: 79px;
	}

	.mb-avatar-gradient {
		height: 79px;
	}

	.avatar-description,
	.avatar-name {
		display: none !important;
	}

	.mb-avatar-gradient {
		padding: 14px;
	}

	.mb-avatar-gradient > div > div {
		flex-grow: 1;
	}

	.mb-avatar-gradient > div > div > img {
		width: 100%;
		opacity: 0.5;
	}
}

a.router-link-active * {
	color: #000000 !important;
}
</style>
