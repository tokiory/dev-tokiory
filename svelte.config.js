// import adapter from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { join } from 'node:path';
import { highlighter } from './src/lib/data/highlighter.js';
import {
	transformerNotationFocus,
	transformerNotationDiff,
	transformerNotationHighlight
} from '@shikijs/transformers';

const ContentLayout = join(
	import.meta.dirname,
	'./src/lib/components/Content/ContentContext.svelte'
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	inlineStyleThreshold: 1024,
	extensions: ['.svelte', '.mdx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				_: ContentLayout
			},
			extensions: ['.mdx'],
			highlight: {
				highlighter: async (code, lang, meta) => {
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang,
							theme: 'vitesse-light',
							transformers: [
								transformerNotationFocus(),
								transformerNotationDiff(),
								transformerNotationHighlight()
							]
						})
					);
					return `<Components.pre
					  meta=${JSON.stringify(meta)}
						language=${lang}
					>{@html \`${html}\`}</Components.pre>`;
				}
			}
		})
	],
	/*

	filename={${filename}}

 meta={${meta}}
optimize={${optimize}}
code={${code}}
						lang={${lang}}
	*/
	kit: {
		adapter: adapterVercel(),
		alias: {
			'@/*': 'src/*',
			'$components/*': 'src/lib/components/*',
			'$mod/*': 'src/lib/modules/*',
			$unoconfig: './uno.config.ts',
			'$content/*': './content/*'
		}
	}
};

export default config;
