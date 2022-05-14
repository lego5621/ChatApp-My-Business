<script setup>
import { computed } from 'vue';
const props = defineProps({
	label: String,
	option: Array,
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

let model = computed({
	get() {
		return props.modelValue;
	},

	set(value) {
		emit('update:modelValue', value);
	},
});
</script>

<template>
	<div class="base-input">
		{{ props.selectCountry }}

		<label for="input1" class="d-flex justify-content-end">
			<span class="bg-white">{{ props.label }}</span>
		</label>
		<select class="form-control" v-model="model">
			<option v-for="item in props.option" :value="item" :key="item">
				{{ item }}
			</option>
		</select>
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

.base-input > select {
	margin-top: -8px !important;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	background: url('data:image/svg+xml;utf8,<svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.12654 0.125877C0.16655 0.0859754 0.21408 0.0543181 0.266408 0.0327181C0.318736 0.0111181 0.374834 0 0.431489 0C0.488143 0 0.544241 0.0111181 0.596569 0.0327181C0.648897 0.0543181 0.696428 0.0859754 0.736438 0.125877L5.60011 4.96493L10.4638 0.125877C10.5038 0.0860399 10.5514 0.0544397 10.6037 0.0328803C10.656 0.0113209 10.7121 0.000224329 10.7687 0.000224329C10.8254 0.000224329 10.8815 0.0113209 10.9338 0.0328803C10.9861 0.0544397 11.0336 0.0860399 11.0737 0.125877C11.1137 0.165713 11.1455 0.213006 11.1672 0.265055C11.1888 0.317104 11.2 0.37289 11.2 0.429228C11.2 0.485565 11.1888 0.541351 11.1672 0.5934C11.1455 0.645449 11.1137 0.692742 11.0737 0.732579L5.90506 5.87412C5.86505 5.91402 5.81752 5.94568 5.76519 5.96728C5.71286 5.98888 5.65677 6 5.60011 6C5.54346 6 5.48736 5.98888 5.43503 5.96728C5.3827 5.94568 5.33517 5.91402 5.29516 5.87412L0.12654 0.732579C0.0864285 0.692779 0.0546046 0.645497 0.0328908 0.593443C0.011177 0.541389 0 0.485585 0 0.429228C0 0.37287 0.011177 0.317066 0.0328908 0.265012C0.0546046 0.212958 0.0864285 0.165677 0.12654 0.125877Z" fill="black"/></svg>')
		no-repeat;
	background-position: right 15px top 50%;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
}

select:focus {
	border: 1px solid #0088cc !important;
}

.base-input:focus-within label {
	color: #000000 !important;
}
</style>
