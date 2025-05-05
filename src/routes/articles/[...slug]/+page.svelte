<script lang="ts">
  import "@/styles/content.css"
	import ArticleHeader from '$components/Article/ArticleHeader.svelte';
	import { fadeRight } from '$lib/animations/fadeRight';
	import { animate } from 'animejs';
  import type { PageProps } from './$types'

	let { data }: PageProps = $props();
	const meta = $derived(data.meta);
	let contentRef = $state<Element>();

	$effect(() => {
		animate(contentRef!, {
			...fadeRight,
			x: { from: '-1.25em', ease: 'outCirc' },
			duration: 400
		});
	});

	const ogImage = $derived({
		opengraph: encodeURI(`${data.baseURL}/api/ogimg/?title=${meta.title}&tags=${meta.tags.join('&tags=')}`),
		twitter: encodeURI(
			`${data.baseURL}/api/ogimg/?title=${meta.title}&tags=${meta.tags.join('&tags=')}&type=twitter`
		)
	});
</script>

<svelte:head>
	<title>{meta.title}</title>

	<!-- OG -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={ogImage.opengraph} />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:width" content="1200" />

	<!-- Twitter -->
	<meta property="twitter:title" content={meta.title} />
	<meta property="twitter:description" content={meta.description} />
	<meta
		property="twitter:image"
		content={ogImage.twitter}
	/>
	<meta property="twitter:image:height" content="512" />
	<meta property="twitter:image:width" content="1024" />
	<meta property="twitter:card" content="summary_large_image" />
	<link
		rel="preload"
		href="/fonts/Virgil.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<article class="mt-16">
	<ArticleHeader title={meta.title} description={meta.description} />

	<div bind:this={contentRef} class="opacity-0 mt-8">
		<data.content />
	</div>
</article>
