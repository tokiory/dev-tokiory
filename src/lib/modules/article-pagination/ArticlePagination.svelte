<script>
	const { class: className = '', children } = $props();
</script>

<div class={['flex flex-col gap-2 sm:flex-row justify-between items-center', className]}>
	{@render children?.()}
</div>
