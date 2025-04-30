<script>
	const { children } = $props();
</script>

<div class="bg-driftwood-800/5 text-sm border border-driftwood-800/10 mr-4 shrink-0 text-red-600 inline-block px-2 rounded-md">
	{@render children()}
</div>
