import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'below-tablet' : {'max':'768px'},
			'below-desktop' : {'max':'1024px'},
		},
	},
	plugins: [],
	rules: [
		{
			test: /\.css$/,
			use: [
				'css-loader',
				'postcss-loader',
			],
		},
	]
};
export default config;
