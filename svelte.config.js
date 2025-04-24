import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { join } from 'node:path';
import { createHighlighter } from 'shiki';

const ContentLayout = join(
	import.meta.dirname,
	'./src/lib/components/Content/ContentContext.svelte'
);

const theme = 'vitesse-light';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['vue', 'yaml', 'javascript', 'typescript', 'go', 'json', 'tsx', 'jsx', 'bash', 'html']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				_: ContentLayout
			},
			extensions: ['.mdx'],
			highlight: {
				highlighter: async (code, lang) => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `<Components.pre>{@html \`${html}\`}</Components.pre>`;
				}
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': 'src/*',
			'$components/*': 'src/lib/components/*'
			// '$content': 'content/*',
		}
	}
};

export default config;
