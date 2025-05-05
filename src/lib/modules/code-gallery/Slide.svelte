<script>
	import { getContext, onMount } from 'svelte';
	import { GALLERY_CONTEXT } from './data/context';

	const { children } = $props();

	const { registerSlide, getIsExpanded } = getContext(GALLERY_CONTEXT);
	let slideRef = $state();

	onMount(() => {
		if (!slideRef) {
			return;
		}
		registerSlide(slideRef);
	});
</script>

<div bind:this={slideRef} class={["snap-start slide w-full shrink-0 px-4 flex-col flex gap-4", getIsExpanded() && "slide_expanded"]}>
	{@render children?.()}
</div>

<style>
	.slide {
		scroll-snap-align: start;
	}

	.slide_expanded:not(:first-child) {
	  @apply border-t border-dashed py-4 border-driftwood-800/80;
	}

	:global(.slide > *) {
		margin: 0 !important;
	}
</style>
