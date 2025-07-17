import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { fileURLToPath } from 'node:url';
import unocss from 'unocss/vite';
import unoConfig from './uno.config';
import { defineConfig } from 'vite';
import { ViteToml as toml } from 'vite-plugin-toml';

const resolve = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	server: {
		fs: {
			allow: [resolve('./content'), resolve('./uno.config.ts')]
		}
	},
	define: {
		unotheme: unoConfig.theme
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
			extractors: [extractorSvelte()]
		}),
		toml(),
		sveltekit()
	]
});
