<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '@/styles/app.css';
	import { onMount, type Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import 'virtual:uno.css';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/martian-mono';
	import { afterNavigate } from '$app/navigation';

	import '@unocss/reset/tailwind.css';
	import TwitterMeta from '$mod/seo/TwitterMeta.svelte';
	import OpengraphMeta from '$mod/seo/OpengraphMeta.svelte';
	import { telegramMiniApp } from '@/lib/modules/telegram/mini-app';
	import { trackEvent, UmamiMiniAppEvent } from '$mod/umami';
	import { initializeTheme, theme, type Theme } from '$mod/theme';
	import '@fontsource-variable/podkova';
	import '@/styles/latex-mode.css';
	import '@/styles/dyslexia-mode.css';
	import { initializeSettings } from '$mod/settings';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	const isDevelopment = import.meta.env.MODE === 'development';
	const TELEGRAM_THEME_COLORS: Record<Theme, { backgroundColor: string; headerColor: string }> = {
		light: {
			backgroundColor: '#ffffff',
			headerColor: '#ffffff'
		},
		dark: {
			backgroundColor: '#000000',
			headerColor: '#000000'
		},
		gruvvy: {
			backgroundColor: '#282828',
			headerColor: '#282828'
		}
	};

	if (browser) {
		initializeTheme();
		initializeSettings();
	}

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

	onMount(() => {
		let stopThemeSync = () => {};

		const initialize = async () => {
			telegramMiniApp.initializeMiniApp();

			if (telegramMiniApp.isTelegramEnv) {
				trackEvent(UmamiMiniAppEvent.Initialized);

				if (telegramMiniApp.paramStore.article) {
					trackEvent(UmamiMiniAppEvent.ArticleOpen);
					await goto('/articles/' + telegramMiniApp.paramStore.article);
				}

				telegramMiniApp.windowStore.initialize();
				stopThemeSync = theme.subscribe((currentTheme) => {
					telegramMiniApp.windowStore.setTheme(TELEGRAM_THEME_COLORS[currentTheme]);
				});

				await telegramMiniApp.viewportStore.initialize();

				telegramMiniApp.swipeBehaviourStore.initialize();
				telegramMiniApp.swipeBehaviourStore.toggleVerticalScroll();

				telegramMiniApp.historyStore.initialize();
				telegramMiniApp.historyStore.setBackButtonListener(() => {
					history.back();
				});
			}
		};

		void initialize();

		return () => {
			stopThemeSync();
		};
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
