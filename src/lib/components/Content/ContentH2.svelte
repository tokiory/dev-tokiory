<script>
	const { children, class: className } = $props();
</script>

<h2 class={['text-xl font-semibold mt-6', className]}>{@render children()}</h2>
