import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.mdx']
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': 'src/*',
			'$components/*': 'src/lib/components/*',
			// '$content': 'content/*',
		}
	}
};

export default config;
