<script>
	const { children } = $props();
</script>

<table class="table w-full text-sm my-6">
	{@render children?.()}
</table>

<style>
  :global(.table code) {
		font-size: 11px;
		padding-block: 0;
	}
  </style>
