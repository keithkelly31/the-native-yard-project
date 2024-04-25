import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.emerald,
				secondary: colors.slate
			},
			fontFamily: {
				sans: 'Courier Prime',
				...defaultTheme.fontFamily.sans
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
