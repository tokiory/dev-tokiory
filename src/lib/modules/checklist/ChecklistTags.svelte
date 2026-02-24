<script>
	const { tags = [], class: className = '' } = $props();
</script>

<div class={['flex gap-2', className]}>
	{#each tags as tag (tag)}
		<div
			class="rounded-sm text-xs px-1 py-0.5 border bg-[var(--theme-tag-bg)] text-[var(--theme-tag-text)] border-[var(--theme-tag-border)]"
		>
			#{tag}
		</div>
	{/each}
</div>
