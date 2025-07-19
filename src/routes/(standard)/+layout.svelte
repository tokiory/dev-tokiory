<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import MobileNavigation from '@/lib/components/MobileNavigation.svelte';
	import { telegramMiniApp } from '@/lib/modules/telegram/mini-app';
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

	const isTelegramInitialized = $derived(telegramMiniApp.isInitialized);
	const isArticlePage = $derived(/articles\/(.+)/.test(page.url.pathname));
</script>

<div class="main mx-auto flex flex-col min-h-screen">
	<Header class={[isTelegramInitialized && isArticlePage ? 'mt-6' : '']} onmenu={handleMenuOpen} />
	{#if isMobileNavigationOpen}
		<MobileNavigation onclose={handleMenuClose} />
	{/if}
	{@render children()}
	<Footer class="mt-auto" />
</div>
