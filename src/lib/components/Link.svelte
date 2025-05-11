<script lang="ts">
  import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
  interface Props extends HTMLAttributes<HTMLAnchorElement> {
    target?: string;
    darker?: boolean;
    href: string;
    children?: Snippet;
    class?: string | string[];
  }

  let { href, target, darker, children, class: className, ...attributes }: Props = $props();
  let linkRef = $state()
</script>

<a
  bind:this={linkRef}
  {...attributes}
  class={[
    "cursor-pointer transition-colors",
    darker ? "text-driftwood-800 hover:text-driftwood-900" : "text-driftwood-600 hover:text-driftwood-700 active:text-driftwood-800",
    className,
  ]}
  {href}
  target={target || "_self"}
>
  {@render children?.()}
</a>
