<script lang="ts">
  import Link from "$components/Link.svelte";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    href: string;
  }

  const { children, href }: Props = $props();
</script>

<Link darker href={href} class="flex w-fit relative">
  <div class="font-semibold">{@render children()}</div>
  <div
    class="absolute -top-0.25 -right-4 i-tabler-arrow-up-right text-sm"
  ></div>
</Link>
