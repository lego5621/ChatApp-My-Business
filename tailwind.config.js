module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xl: { max: '1919px' },

			'2lg': { max: '1692px' },
			lg: { max: '1464px' },

			'2md': { max: '1294px' },
			md: { max: '1130px' },

			'2sm': { max: '836px' },
			sm: { max: '624px' },
		},
	},
	plugins: [],
	prefix: 'tw-',
};
