<script lang="ts">
	import '@fontsource-variable/podkova';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="ghost">{@render children()}</div>

<style>
	.ghost {
		line-height: 0.8;
		font-family: 'Podkova Variable', sans-serif;
		font-size: clamp(20px, 10vw, 110px);
		@apply text-driftwood-800/30 text-center;
		@apply inline text-center;
		@apply font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
	}
</style>
