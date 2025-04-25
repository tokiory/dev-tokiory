<script>
	const { children } = $props();
</script>

<div class="thought my-8 text-lg font-medium text-center w-full">
	{@render children()}
</div>

<style scoped>
	:global(.thought *) {
		@apply my-0;
	}
</style>
