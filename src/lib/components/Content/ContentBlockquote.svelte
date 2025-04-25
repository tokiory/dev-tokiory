<blockquote class="mt-4 mb-4 relative pl-4 before:content-[''] before:absolute before:h-full before:left-0 before:w-1 before:bg-driftwood-800/40">
  {@render children()}
</blockquote>

<script lang="ts">
	import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const {children}: Props = $props();
</script>
