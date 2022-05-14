<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
	<div class="tw-flex tw-space-x-5 tw-w-full">
		<div>
			<Sidebar class="tw-w-[296px] lg:tw-w-[204px] md:tw-w-[78px]" />
		</div>
		<div class="tw-grow">
			<RouterView />
		</div>
	</div>
</template>
