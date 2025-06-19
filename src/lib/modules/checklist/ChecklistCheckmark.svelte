<script>
	const { done } = $props();
</script>

<div
	class="rounded-md shrink-0 h-5 w-5 flex items-center justify-center border text-sm border-driftwood-700/70"
>
	{#if done}
		<div class="i-tabler-check"></div>
	{/if}
</div>
