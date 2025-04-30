<script>
	const { children } = $props();
</script>

<h1
	class="title"
>
	{@render children?.()}&nbsp;
</h1>

<style>
	.title {
		@apply font-extrabold text-transparent inline-block text-5xl;
		-webkit-text-stroke: 2px theme('colors.driftwood.800');
		font-family:
			Podkova Variable,
			sans-serif;
	}
</style>
