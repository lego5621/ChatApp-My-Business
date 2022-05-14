import { createPinia } from 'pinia';
import { notify } from '@kyvg/vue3-notification';

// import { i18n } from '../translator/index.js';

const pinia = createPinia();

pinia.use(({ store }) => {
	store.$notify = notify;
});


// pinia.use(({ store }) => {
// 	store.$i18n = markRaw(i18n);
// });

export default pinia;
