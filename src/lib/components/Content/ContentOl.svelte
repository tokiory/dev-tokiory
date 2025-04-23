<script>
	const { children } = $props();
</script>

<ol class="list">
	{@render children()}
</ol>

<style scoped>
	.list {
		@apply mt-2 ml-4 flex flex-col gap-0.5;
	}

	:global(.list ul, .list ol) {
		@apply !mt-0.5;
	}
</style>
