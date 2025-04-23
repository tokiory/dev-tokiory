<script>
	const { children } = $props();

	console.log('hi?', children);
</script>

<div class="codeblock mt-8">
	{@render children()}
</div>

<style>
  .codeblock {
    :global(pre) {
      @apply rounded-md p-4;
      font-family: 'Martian Mono Variable', monospace;
      background: transparent !important;

    }

    :global(pre code) {
      background: transparent;
    }
  }
</style>
