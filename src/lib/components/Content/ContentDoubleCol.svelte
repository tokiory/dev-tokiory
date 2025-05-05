<script>
	const { children } = $props();
</script>

<div class="flex flex-col [&>*]:w-full justify-center gap-4 md:flex-row ">
	{@render children?.()}
</div>
