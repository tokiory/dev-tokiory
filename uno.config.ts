import {
	defineConfig,
	presetIcons,
	presetMini,
	transformerDirectives,
	type UserConfig
} from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			primary: 'var(--theme-text)',
			secondary: 'var(--theme-text-soft)',
			'border-strong': 'var(--theme-border-strong)'
		}
	},
	presets: [
		presetMini(),
		presetIcons({
			collections: {
				tabler: () => import('@iconify-json/tabler/icons.json').then((i) => i.default)
			}
		})
	],
	transformers: [transformerDirectives()]
}) as UserConfig;
