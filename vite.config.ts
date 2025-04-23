import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { fileURLToPath } from 'node:url';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

const resolve = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	server: {
		fs: {
			allow: [resolve('./content')]
		}
	},
	resolve: {
		alias: [
			{
				find: '$content',
				replacement: resolve('./content')
			}
		]
	},
	plugins: [
		unocss({
			// mode: 'global',
			extractors: [extractorSvelte()]
		}),
		sveltekit()
	]
});
