import { createHighlighter } from 'shiki';

const THEME = 'vitesse-light';
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
];

const highlighter = await createHighlighter({
	themes: [THEME],
	langs: SUPPORTED_LANGS,
});

export { highlighter };
