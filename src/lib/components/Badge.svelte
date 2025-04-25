<script>
  const {children, class: className = ''} = $props();
</script>

<div class={["w-fit text-sm rounded-sm bg-frangipani-800/10 py-0.25 px-2", className]}>
  {@render children()}
</div>
