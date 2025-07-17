<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '@/styles/app.css';
	import { onMount, type Snippet } from 'svelte';
	import 'virtual:uno.css';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/martian-mono';

	import '@unocss/reset/tailwind.css';
	import TwitterMeta from '$mod/seo/TwitterMeta.svelte';
	import OpengraphMeta from '$mod/seo/OpengraphMeta.svelte';
	import { init as initTMA, swipeBehavior, backButton } from '@telegram-apps/sdk';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	const isDevelopment = import.meta.env.MODE === 'development';

	const initializeTelegramMiniApp = () => {
		try {
			initTMA();

			if (swipeBehavior.mount.isAvailable()) {
				swipeBehavior.mount();
				swipeBehavior.disableVertical();
			}

			if (backButton.mount.isAvailable()) {
				backButton.mount();

				if (window.location.pathname === '/') {
					backButton.show();
				} else {
					backButton.hide();
				}

				backButton.onClick(() => {
					window.history.back();
				});
			}
		} catch {
			console.warn('Telegram Mini App is not initialized, continuing without integration...');
		}
	};

	onMount(() => {
		initializeTelegramMiniApp();
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
