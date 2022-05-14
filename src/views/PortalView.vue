<script setup>
import CardCompanyData from '../components/PortalCardCompanyData.vue';
import CardMyBusiness from '../components/PortalCardMyBusiness.vue';
import CardAccountant from '../components/PortalCardAccountant.vue';
import CardEmployees from '../components/PortalCardEmployees.vue';
import CardCertificatesWorkPerformed from '../components/PortalCertificatesWorkPerformed.vue';
import PortalCardCRM from '../components/PortalCardCRM.vue';
</script>

<template>
	<main class="tw-flex tw-flex-wrap">
		<div
			class="tw-hidden 2lg:tw-flex tw-w-full tw-mb-5 tw-space-x-5 2md:tw-space-x-0 2md:tw-flex-wrap"
		>
			<CardMyBusiness class="tw-w-2/4 2md:tw-w-full 2md:tw-mb-5" />
			<PortalCardCRM class="tw-w-2/4 2md:tw-w-full" />
		</div>

		<div
			class="tw-flex tw-w-[75%] tw-space-x-5 tw-mr-5 xl:tw-w-[59.5%] 2lg:tw-w-full 2lg:tw-mr-0 2lg:tw-mb-5"
		>
			<CardCompanyData class="tw-w-[66%] xl:tw-w-full" />
			<div class="tw-w-[33%] tw-flex tw-flex-col tw-space-y-5 xl:tw-hidden">
				<CardAccountant />

				<CardEmployees />
			</div>
		</div>
		<CardMyBusiness
			class="tw-w-[23%] xl:tw-w-[38%] 2lg:hidden 2lg:tw-mr-5 2lg:tw-hidden"
		/>
		<CardCertificatesWorkPerformed
			class="tw-self-start tw-w-[75%] tw-mr-5 tw-mt-5 xl:tw-w-[59.5%] 2lg:tw-w-full 2lg:tw-mr-0 2lg:tw-mt-0"
		/>
		<div class="tw-w-[23%] tw-mt-5 xl:tw-w-[38%] 2lg:tw-w-full">
			<PortalCardCRM class="tw-h-[224px] 2lg:tw-hidden" />
			<CardAccountant
				class="tw-hidden xl:tw-block tw-mt-5 2lg:tw-mt-0 2lg:tw-w-full"
			/>
		</div>
	</main>
</template>
