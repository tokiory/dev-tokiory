<script>
	const { title = '', class: className = 'mt-4 mb-4', children } = $props();
</script>

<div class={['information', 'border border-2 p-2 border-frangipani-800/70 rounded-md', className]}>
	<div
		class="flex items-center border-b-2 border-dashed text-driftwood-800 border-frangipani-800/30 pb-1 gap-1.5"
	>
		<div class="i-tabler-info-circle text-xl"></div>
		<div class="font-semibold">{title}</div>
	</div>
	<div class="!text-sm information-container">{@render children?.()}</div>
</div>

<style>
	:global(.information-container > :last-child) {
		@apply !mb-2;
	}

	:global(.information code) {
		font-size: 11px;
		padding-block: 0;
		margin-bottom: 0;
	}
</style>
