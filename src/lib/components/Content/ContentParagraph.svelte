<script>
	const { children, class: className = '' } = $props();
</script>

<p class={["mt-2", className]}>{@render children()}</p>
