<script lang="ts">
	import { onMount, setContext, type Snippet } from 'svelte';
	import ArticleNavScroller from './ArticleNavScroller.svelte';
	import type { Heading } from './types/heading';
	import ArticleNavMenu from './ArticleNavMenu.svelte';
	import ArticleNavObserver from './ArticleNavObserver.svelte';
	import { animate } from 'animejs';
	import { fadeRight } from '@/lib/animations/fadeRight';

	interface Props {
		children?: Snippet;
	}

	const { children }: Props = $props();
	let headings = $state<Heading[]>([]);
	let currentHeadingId = $state(0);
	let isMenuOpen = $state(false);

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
	};

	const selectNavigationItem = (idx: number) => {
		headings[idx].element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		toggleMenu();
	};

	const updateHeadingId = (id: number) => {
		currentHeadingId = id;
	};

	setContext('scroller', {
		registerHeading: (h: Heading) => {
			headings.push(h);
		}
	});

	let scrollerRef = $state<HTMLButtonElement>();

	onMount(() => {
		animate(scrollerRef!, {
			...fadeRight
		});
	});
</script>

<div>
	<button
		bind:this={scrollerRef}
		aria-label="открыть меню навигации"
		onclick={toggleMenu}
		class={['scroller', 'opacity-0 fixed z-24 top-0 left-0 right-0 pt-1 pb-3 px-2']}
	>
		<ArticleNavScroller />
		<ArticleNavObserver {currentHeadingId} {headings} onupdateheading={updateHeadingId} />
	</button>

	{#if isMenuOpen}
		<ArticleNavMenu
			onclose={toggleMenu}
			{currentHeadingId}
			{headings}
			onselect={selectNavigationItem}
		/>
	{/if}

	{@render children?.()}
</div>

<style>
	.scroller {
		background-image: linear-gradient(to bottom, theme('colors.frangipani.50 / 95%'), transparent);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		mask-image: linear-gradient(to bottom, black 70%, transparent);
	}
</style>
