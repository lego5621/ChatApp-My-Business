import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
	state: () => ({
		name: '',
		id: '',
		email: '',
		profilePhotoUrl: '',
		notifications: [],
	}),

	actions: {
		async getProfileData() {
			let url = 'https://dev2cabinet.chatapp.online/member/profile/data';
			let response = await fetch(url);
			let profileData = await response.json();
			this.name = profileData.user.name;
			this.id = profileData.user.id;
			this.email = profileData.user.email;
			this.profilePhotoUrl = profileData.user.profile_photo_url;
			this.notifications = profileData.notifications;

			// this.name = 'Эргашев Алишер';
			// this.id = 4570;
			// this.email = 'alisher@social.uz';
			// this.profilePhotoUrl =
			// 	'https://eu.ui-avatars.com/api/?name=Эргашев Алишер&background=5ad066&color=ffff';

			// this.notifications = [
			// 	{
			// 		title: 'Scan QR',
			// 		code: 'qr',
			// 		check: false,
			// 	},
			// 	{
			// 		title: 'Device error',
			// 		code: 'error',
			// 		check: false,
			// 	},
			// 	{
			// 		title: 'The battery is discharged',
			// 		code: 'notify_error',
			// 		check: false,
			// 	},
			// 	{
			// 		title: 'Balance [WABA]',
			// 		code: 'waba_minimal_balance',
			// 		check: true,
			// 	},
			// ];
		},

		async chengeNotificStatus(notification) {
			let url = `/ajax/notify/${notification.code}/${
				notification.check ? 'off' : 'on'
			}`;

			let response = await fetch(url, {
				method: 'POST',
			});

			if (response.ok) {
				notification.check = !notification.check;
				this.$notify({
					text: 'Изменения сохранены',
				});
			} else {
				this.$notify({
					text: 'Ошибка, попробуйте позже',
					type: 'error',
				});
			}
		},

		async chengeProfileData(data) {
			let url = ` https://dev2cabinet.chatapp.online/profile/update`;

			console.log(data);

			let response = await fetch(url, {
				method: 'POST',
				body: data,
			});

			return response;
		},
	},

	getters: {
		fullName: (state) => {
			// Возвращает Первое слово полностью и первую букву второго слова если оно есть
			let wordsArray = state.name.split(' ');
			return `${wordsArray?.[0]} ${wordsArray[1]?.[0] ? wordsArray[1][0] : ''}`;
		},

		referralLink: (state) => {
			return document.documentElement.lang == 'ru'
				? `https://chatapp.online/ru/referral/?p=${state.id}`
				: `https://chatapp.online/referral/?p=${state.id}`;
		},
	},
});
