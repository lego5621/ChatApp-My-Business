<template>
	<section class="my-business-tims ">
		<div class="mb-tims-wrap mb-cart bg-white">
			<p>Часовой пояс</p>
			<div>
				<select class="form-control">
					<option>UTC +3</option>
					<option>UTC +4</option>
				</select>
			</div>
		</div>
	</section>
</template>

<style scoped>
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
</style>
