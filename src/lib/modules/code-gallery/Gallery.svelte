<script lang="ts">
	import { onMount, setContext, type Snippet } from 'svelte';
	import Control from './Control.svelte';
	import { GALLERY_CONTEXT } from './data/context';

	interface Props {
		withKeys?: boolean;
		class?: string;
		children?: Snippet;
	}

	let slides = $state<HTMLDivElement[]>([]);
	let currentSlideIdx = $state(0);
	let slidesAmount = $derived(slides.length);
	let galleryViewerRef = $state<HTMLDivElement>();
	let isExpanded = $state(false);

	const registerSlide = (element: HTMLDivElement) => {
		slides.push(element);
	};

	setContext(GALLERY_CONTEXT, {
		registerSlide,
		isExpanded,
		getIsExpanded: () => isExpanded,
		getAmountOfSlides: () => slidesAmount,
	});

	const { children, class: className = '', withKeys }: Props = $props();

	const scrollToSlide = (idx: number) => {
		const currentSlide = slides[idx];
		galleryViewerRef!.scrollTo({
			left: currentSlide.offsetLeft - galleryViewerRef!.offsetLeft,
			behavior: 'smooth'
		});
	};

	const handlePrevSlide = () => {
		if (currentSlideIdx <= 0) {
			return;
		}

		scrollToSlide(--currentSlideIdx);
	};

	const handleNextSlide = () => {
		if (currentSlideIdx + 1 >= slidesAmount) {
			return;
		}

		if (!galleryViewerRef) {
			return;
		}

		scrollToSlide(++currentSlideIdx);
	};

	const handleExpand = () => {
	  isExpanded = true
	}

	const handleViewerScroll = () => {
		if (!galleryViewerRef) return;
		const { offsetWidth, scrollLeft } = galleryViewerRef;
		currentSlideIdx = scrollLeft / offsetWidth;
	};

	onMount(() => {
		const galleryView = galleryViewerRef;
		if (!galleryView) return;
		galleryView.addEventListener('scrollend', handleViewerScroll);

		return () => {
			galleryView.removeEventListener('scrollend', handleViewerScroll);
		};
	});
</script>

<div class={['border-driftwood-800/80 rounded-md overflow-hidden border border-dashed', className]}>
	<Control
	  {withKeys}
		{slidesAmount}
		onexpand={handleExpand}
		expanded={isExpanded}
		onleft={handlePrevSlide}
		onright={handleNextSlide}
		slideIdx={currentSlideIdx}
	>
		<div bind:this={galleryViewerRef} class={["view flex overflow-hidden overflow-x-auto", isExpanded && "flex-col gap-4"]}>
			{@render children?.()}
		</div>
	</Control>
</div>

<style>
	.view {
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	.view::-webkit-scrollbar {
		display: none; /* WebKit */
	}
</style>
