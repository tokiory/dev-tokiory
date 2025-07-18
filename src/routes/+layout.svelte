<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '@/styles/app.css';
	import { onMount, type Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import 'virtual:uno.css';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/martian-mono';
	import { afterNavigate } from '$app/navigation';

	import '@unocss/reset/tailwind.css';
	import TwitterMeta from '$mod/seo/TwitterMeta.svelte';
	import OpengraphMeta from '$mod/seo/OpengraphMeta.svelte';
	import { telegramMiniApp } from '@/lib/modules/telegram/mini-app';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	const isDevelopment = import.meta.env.MODE === 'development';

	const handleHistoryChange = (path: string) => {
		if (path === '/') {
			telegramMiniApp.historyStore.hideBackButton();
		} else {
			telegramMiniApp.historyStore.showBackButton();
		}
	};

	$effect(() => {
		handleHistoryChange(window.location.pathname);
	});

	onMount(async () => {
		telegramMiniApp.initializeMiniApp();

		if (telegramMiniApp.isInitialized) {
			umami.track('tma_initialized');

			telegramMiniApp.windowStore.initialize();
			telegramMiniApp.windowStore.setTheme({
				backgroundColor: unotheme?.colors.frangipani['50'] || '#fff',
				headerColor: unotheme?.colors.frangipani['50'] || '#fff'
			});

			telegramMiniApp.viewportStore.initialize()

			telegramMiniApp.swipeBehaviourStore.initialize();
			telegramMiniApp.swipeBehaviourStore.toggleVerticalScroll();

			telegramMiniApp.historyStore.initialize();
			telegramMiniApp.historyStore.setBackButtonListener(() => {
				history.back();
			});

			if (telegramMiniApp.paramStore.article) {
				await goto('/article/' + telegramMiniApp.paramStore.article);
			}
		}
	});

	afterNavigate((afterNav) => {
		handleHistoryChange(afterNav.to?.url.pathname || '');
	});

	const meta = {
		title: '/dev/tokiory',
		keywords:
			'blog, блог, tokiory, dev, разработка, tech, технологии, программирование, programming, it',
		description:
			'/dev/tokiory — место где обсуждаются технологии, обмениваются знаниями и просто смотрят на всякие интересности',
		image: {
			opengraph: '/api/ogimg/?type=opengraph&title=/dev/tokiory',
			twitter: '/api/ogimg/?type=twitter&title=/dev/tokiory'
		}
	};
</script>

<svelte:head>
	<title>Блог {meta.title}</title>
	<meta name="keywords" content={meta.keywords} />
	<OpengraphMeta {...meta} image={meta.image.opengraph} />
	<TwitterMeta {...meta} image={meta.image.twitter} />
	{#if !isDevelopment}
		<script
			defer
			src="https://cloud.umami.is/script.js"
			data-website-id="bf824cc6-dd5e-4d41-b05f-7e072ee7d071"
		></script>
	{/if}
</svelte:head>

{@render children()}
