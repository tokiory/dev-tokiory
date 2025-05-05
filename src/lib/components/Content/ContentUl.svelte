<script>
	const { children } = $props();
</script>

<ul class="list">
	{@render children()}
</ul>

<style scoped>
	.list {
		@apply mt-2 ml-4 flex flex-col gap-1;
	}

	:global(.list ul, .list ol) {
		@apply !mt-0.5;
	}
</style>
