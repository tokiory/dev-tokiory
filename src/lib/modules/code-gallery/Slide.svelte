<script>
	import { getContext, onMount } from 'svelte';
	import { GALLERY_CONTEXT } from './data/context';
	import Heading from '$components/Content/ContentH3.svelte';

	const { children, title = '' } = $props();

	const { registerSlide, getIsExpanded } = getContext(GALLERY_CONTEXT);
	let slideRef = $state();

	onMount(() => {
		if (!slideRef) {
			return;
		}
		registerSlide(slideRef);
	});
</script>

<div
	bind:this={slideRef}
	class={[
		'snap-start slide w-full shrink-0 px-4',
		getIsExpanded() && 'slide_expanded'
	]}
>
	{#if title}
		<Heading class="my-2 pb-2 border-b border-dashed border-driftwood-800/50" custommark nospy>{title}</Heading>
	{/if}
	<div class="slide-content flex-col flex gap-4">
	{@render children?.()}
	</div>
</div>

<style>
	.slide {
		scroll-snap-align: start;
	}

	.slide_expanded:not(:first-child) {
		@apply border-t border-dashed py-4 border-driftwood-800/80;
	}

	:global(.slide-content > *) {
		margin: 0 !important;
	}
</style>
