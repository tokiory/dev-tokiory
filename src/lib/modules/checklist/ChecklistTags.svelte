<script>
	const { tags = [], class: className = '' } = $props();
</script>

<div class={['flex gap-2', className]}>
	{#each tags as tag (tag)}
		<div class="rounded-sm bg-frangipani-100 text-xs px-1 py-0.5">#{tag}</div>
	{/each}
</div>
