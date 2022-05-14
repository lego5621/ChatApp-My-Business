<script setup>
const props = defineProps({ label: String, placeholder: String });
</script>

<template>
	<div class="base-input">
		<label for="input1" class="d-flex justify-content-end">
			<span class="bg-white">{{ props.label }}</span>
		</label>
		<input type="text" class="form-control" :placeholder="props.placeholder" />
	</div>
</template>

<style scoped>
.base-input > label {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #c7c7c7;
	margin-bottom: 0;
	margin-right: 10px;
	padding: 0 4px;
}

.base-input > input {
	margin-top: -8px !important;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
}

input:focus {
	border: 1px solid #0088cc !important;
}

.base-input:focus-within label {
	color: #000000 !important;
}
</style>
