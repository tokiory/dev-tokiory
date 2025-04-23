<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}
	const { children }: Props = $props();

	let codeRef = $state<Element>();
	let lastCopiedTimerId = $state<NodeJS.Timer | null>(null);

	const copy = async () => {
		try {
			const codeElement = codeRef!.getElementsByTagName('code')[0];
			const sourceCode = codeElement.textContent;
			await navigator.clipboard.writeText(sourceCode!);

			if (lastCopiedTimerId) clearTimeout(lastCopiedTimerId);

			lastCopiedTimerId = setTimeout(() => {
				lastCopiedTimerId = null;
			}, 5000);
		} catch (err) {
			console.error('Failed to copy source code:', err);
		}
	};
</script>

<div bind:this={codeRef} class="relative codeblock mt-6 mb-4">
	<button
		onclick={copy}
		aria-label="copy"
		class="absolute cursor-pointer hover:bg-driftwood-200/30 transition-colors top-0 right-0 p-2 rounded-md"
	>
		{#if lastCopiedTimerId}
			<div class="i-tabler-check"></div>
		{:else}
			<div class="i-tabler-copy"></div>
		{/if}
	</button>
	{@render children?.()}
</div>

<style>
	.codeblock {
		:global(pre) {
			background: transparent !important;
		}
	}
</style>
