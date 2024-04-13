/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'default': 'IBM Plex Sans',
			'mono': 'IBM Plex Mono',
		},
		fontSize: {
			'std': 14,
			'lg': 20,
			'xl': 24,
			'xs': 12,
		},
		extend: {
			colors: {
				'primary': '#00232E',
				'gray': '#F5F5F5'
			}
		},
	},
	plugins: [],
}

