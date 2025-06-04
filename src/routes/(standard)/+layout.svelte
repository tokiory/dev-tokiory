<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import MobileNavigation from '@/lib/components/MobileNavigation.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	let isMobileNavigationOpen = $state(false);

	const handleMenuClose = () => {
		isMobileNavigationOpen = false;
	};

	const handleMenuOpen = () => {
		isMobileNavigationOpen = true;
	};
</script>

<div class="main mx-auto flex flex-col min-h-screen">
	<Header onmenu={handleMenuOpen} />
	{#if isMobileNavigationOpen}
		<MobileNavigation onclose={handleMenuClose} />
	{/if}
	{@render children()}
	<Footer class="mt-auto" />
</div>
