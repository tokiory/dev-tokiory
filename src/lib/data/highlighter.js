import { createHighlighter } from 'shiki';

const THEMES = ['vitesse-light', 'vitesse-dark'];
const SUPPORTED_LANGS = [
	'vue',
	'elisp',
	'yaml',
	'javascript',
	'typescript',
	'dockerfile',
	'go',
	'json',
	'lua',
	'jsonc',
	'tsx',
	'jsx',
	'bash',
	'html',
	'zig',
	'protobuf',
	'markdown'
];

const highlighter = await createHighlighter({
	themes: THEMES,
	langs: SUPPORTED_LANGS
});

export { highlighter };
