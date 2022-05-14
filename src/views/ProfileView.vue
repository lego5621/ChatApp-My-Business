<script setup>
import ProfileCardReferral from '../components/ProfileCardReferral.vue';
import ProfileCardUser from '../components/ProfileCardUser.vue';
import ProfileCardAlert from '../components/ProfileCardAlert.vue';
import ProfileCardPassword from '../components/ProfileCardPassword.vue';
import ProfileCardTime from '../components/ProfileCardTime.vue';

import { useProfileStore } from '../store/profile/state.js';

let profileStore = useProfileStore();
profileStore.getProfileData()
</script>

<template>
	<main class="tw-flex tw-flex-wrap">
		<ProfileCardReferral class="tw-w-[37%] xl:tw-w-2/4 2md:tw-w-full" />
		<ProfileCardUser
			class="tw-w-[63%] tw-h-[149px] xl:tw-w-2/4 2md:tw-w-full 2md:tw-mb-5"
		/>
		<ProfileCardAlert class="tw-w-[37%] xl:tw-w-2/4 md:tw-w-full" />
		<ProfileCardPassword class="tw-w-[37%] xl:tw-w-2/4 md:tw-w-full" />
		<ProfileCardTime class="tw-w-[26%] 2md:tw-w-3/4 md:tw-w-full" />
	</main>
</template>
