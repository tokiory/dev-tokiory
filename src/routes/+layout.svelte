<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '@/styles/app.css';
	import { onMount, type Snippet } from 'svelte';
	import 'virtual:uno.css';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/martian-mono';
	import { afterNavigate } from '$app/navigation';

	import '@unocss/reset/tailwind.css';
	import TwitterMeta from '$mod/seo/TwitterMeta.svelte';
	import OpengraphMeta from '$mod/seo/OpengraphMeta.svelte';
	import { initializeMiniApplication, handleBackButton } from '@/lib/modules/telegram';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	const isDevelopment = import.meta.env.MODE === 'development';

	onMount(async () => {
		try {
			await initializeMiniApplication();
		} catch {
			console.warn(
				'Failed to initialize Telegram Mini Application, continuing without integrations'
			);
		}
	});

	afterNavigate(handleBackButton);

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
