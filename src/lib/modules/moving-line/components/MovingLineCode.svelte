<script>
	const { children } = $props();
</script>

<div class="bg-stone-800/5 text-sm border border-stone-800/10 mr-4 shrink-0 text-stone-700 inline-block px-2 rounded-md">
	{@render children()}
</div>
