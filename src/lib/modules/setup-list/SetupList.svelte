<script>
	const { class: className = '', children } = $props();
</script>

<ul class={["mt-2 flex flex-col gap-2 md:gap-.5", className]}>
	{@render children?.()}
</ul>
