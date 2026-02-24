<script>
	const { children, class: className = '' } = $props();
</script>

<div
	class={[
		'w-fit text-sm rounded-sm py-0.25 px-2 border bg-[var(--theme-tag-bg)] text-[var(--theme-tag-text)] border-[var(--theme-tag-border)]',
		className
	]}
>
	{@render children()}
</div>
