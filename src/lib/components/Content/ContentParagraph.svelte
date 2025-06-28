<script>
	const { children, class: className = '', custommark = false } = $props();
</script>

<p class={[!custommark && 'mt-2', className]}>{@render children()}</p>
