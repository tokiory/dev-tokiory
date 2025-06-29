<script lang="ts">
	import katex, { type KatexOptions } from 'katex';

	const { expression = '', displayMode = false } = $props();

	const options: KatexOptions = {
		displayMode: displayMode,
		throwOnError: false,
		output: 'mathml'
	};

	let texHtml = $derived(katex.renderToString(expression, options));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html texHtml}
