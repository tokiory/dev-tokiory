<script lang="ts">
	import Link from '$components/Link.svelte';
	import { type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		href?: string;
	}

	const { children, href }: Props = $props();
</script>

<div class="flex items-center">
	<div class="border-b-1 border-driftwood-600 border-b-dashed h-0 w-[50px]"></div>
	{#if href}
		<Link darker {href} class="ml-4 relative text-xl text-driftwood-600 font-semibold">
			{@render children()}
			<div class="absolute -top-0.25 -right-4 i-tabler-arrow-up-right text-sm"></div>
		</Link>
		<div class="ml-6 border-b-1 border-driftwood-600 border-b-dashed h-0 w-full"></div>
	{:else}
		<div class="ml-4 relative text-xl text-driftwood-800 font-semibold">
			{@render children()}
		</div>
		<div class="ml-4 border-b-1 border-driftwood-600 border-b-dashed h-0 w-full"></div>
	{/if}
</div>
