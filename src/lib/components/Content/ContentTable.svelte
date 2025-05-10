<script>
	const { children } = $props();
</script>

<div class="max-w-full overflow-x-auto">
  <table class="table w-full text-sm my-6">
	{@render children?.()}
  </table>
</div>

<style>
  :global(.table code) {
		font-size: 11px;
		padding-block: 0;
	}
  </style>
