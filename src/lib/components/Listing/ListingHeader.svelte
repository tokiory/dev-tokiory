<script lang="ts">
	import Link from '$components/Link.svelte';
	import { type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		href?: string;
		counter?: number;
	}

	const { children, href, counter }: Props = $props();
</script>

<div class="flex items-center">
	<div class="border-b-1 border-driftwood-600 border-b-dashed h-0 w-[50px]"></div>
	{#if href}
		<Link
			darker
			{href}
			class={['ml-4 relative text-xl text-driftwood-600 font-semibold']}
		>
			{@render children()}
			<div class="absolute -top-0.25 -right-4 i-tabler-arrow-up-right text-sm"></div>
		</Link>
	{:else}
		<div class="ml-4 relative text-xl text-driftwood-800 font-semibold">
			{@render children()}
		</div>
	{/if}
	<div
		class={[href ? 'ml-6' : 'ml-4', 'border-b-1 border-driftwood-600 border-b-dashed h-0 w-full']}
	></div>
	{#if counter}
		<div
			class="ml-4 shrink-0 flex border-driftwood-600 items-center justify-center rounded-full border-1 w-4 h-4 text-[9px]"
		>
			{counter}
		</div>
	{/if}
</div>
