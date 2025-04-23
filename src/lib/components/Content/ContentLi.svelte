<script>
  const {children} = $props();
</script>

<li class="list-item">{@render children()}</li>

<style>
  :global(ul.list .list-item) {
    @apply relative;
    &::before {
      @apply content-[""] absolute h-1.5 w-1.5 top-[1ch] -left-4 bg-driftwood-800 rounded-full;
    }
  }

  :global(ol.list .list-item) {
    list-style: decimal;
  }
</style>
