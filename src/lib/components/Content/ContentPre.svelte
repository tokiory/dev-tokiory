<script>
	const { children } = $props();

	let codeRef = $state();

	const copy = async () => {
		try {
			const codeElement = codeRef.getElementsByTagName('code')[0];
			const sourceCode = codeElement.textContent;
			await navigator.clipboard.writeText(sourceCode);
		} catch (err) {
			console.error('Failed to copy source code:', err);
		}
	};
</script>

<div bind:this={codeRef} class="relative codeblock mt-6">
	<button
		onclick={copy}
		aria-label="copy"
		class="absolute cursor-pointer hover:bg-driftwood-200/30 transition-colors top-0 right-0 p-2 rounded-md"
	>
		<div class="i-tabler-copy"></div>
	</button>
	{@render children()}
</div>

<style>
	.codeblock {
		:global(pre) {
			background: transparent !important;
		}
	}
</style>
