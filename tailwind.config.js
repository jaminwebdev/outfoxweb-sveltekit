/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#62E9C3',
				secondary: '#198CE8',
				tertiary: '#8E59ED',
				orange: '#F7754C',
				'body-color': {
					light: '#F4F4F5',
					dark: '#1D1D20'
				},
				'body-text': {
					light: '#F4F4F5',
					dark: '#1D1D20'
				},
				'secondary-bg': {
					dark: '#1F2326',
					light: '#E6EDF4'
				},
				'tertiary-bg': {
					dark: '#4C4F51',
					light: '#cad9e8'
				}
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'html.dark p': {
					color: 'text-body-text-light'
				}
			});
		})
	]
};
