<script>
  const {children} = $props();
</script>

<div class="bg-stone-300 py-0.25 px-3 rounded-md border-0.5 border-stone-700 inline-block text-xs">
  {@render children?.()}
</div>
