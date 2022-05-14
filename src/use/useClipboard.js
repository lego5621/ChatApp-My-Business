import { notify } from '@kyvg/vue3-notification';

export function useClipboard(input, alertText) {
	navigator.clipboard.writeText(input.value).then(() => {
		notify({
			text: alertText,
		});
	});
}
