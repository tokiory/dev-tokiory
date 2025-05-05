<script>
	const { children } = $props();
</script>

<th class="not-last:border-r-2 p-2 font-semibold border-frangipani-800/20">
	{@render children?.()}
</th>
