import {
	defineConfig,
	presetIcons,
	presetMini,
	transformerDirectives,
	type UserConfig
} from 'unocss';

export default defineConfig({
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
