<script setup>
import { RouterLink, RouterView } from 'vue-router';
import IndexLayout from './layout/IndexLayout.vue';
import { container as WidgetContainerModal } from 'jenesius-vue-modal';
</script>

<template>
	<IndexLayout />
	<notifications position="bottom right" :max="3" />
	<WidgetContainerModal />
</template>

<style>
:root {
	--popper-theme-background-color: #333333;
	--popper-theme-background-color-hover: #333333;
	--popper-theme-text-color: #ffffff;
	--popper-theme-border-width: 0px;
	--popper-theme-border-style: solid;
	--popper-theme-border-radius: 6px;
	--popper-theme-padding: 5px 10px;
	--popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.modal-container {
	z-index: 999999;

}
</style>
