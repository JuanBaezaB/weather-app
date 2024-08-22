/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['"Inter Variable"', 'sans-serif'],
			},
			colors: {
        'sunny': '#D6E8EF',
				trunder: '#9894AA',
				rainy: '#DEDCE7',
				cloudy: '#20233A',
				mostlycloudy: '#F3E8D6',
				mostlyclear: '#362947',
      },
		},
	},
	plugins: [
    require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
  ],
}
