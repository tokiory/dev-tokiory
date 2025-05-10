<script>
	const { children, class: className = '' } = $props();
</script>

<div class={["output", className]}>{@render children?.()}</div>

<style>
  :global(.codesnippet:has(+ .output)) {
     @apply !mb-2;
   }

	.output {
		@apply mb-6 p-2 border-2 rounded-md border-dashed text-[13px] border-frangipani-800/30;
		font-family: 'Martian Mono Variable', monospace;

		:global(& *) {
			@apply !m-0;
		}
	}
</style>
