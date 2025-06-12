<script lang="ts">
	import '@/styles/content.css';
	import ArticleHeader from '$components/Article/ArticleHeader.svelte';
	import { fadeRight } from '$lib/animations/fadeRight';
	import { animate } from 'animejs';
	import type { PageProps } from './$types';
	import OpengraphMeta from '$mod/seo/OpengraphMeta.svelte';
	import TwitterMeta from '$mod/seo/TwitterMeta.svelte';
	import ArticlePagination from '@/lib/modules/article-pagination/ArticlePagination.svelte';
	import PreviousLink from '@/lib/modules/article-pagination/PreviousLink.svelte';
	import NextLink from '@/lib/modules/article-pagination/NextLink.svelte';

	let { data }: PageProps = $props();
	const meta = $derived(data.meta);
	const pagination = $derived(data.pagination);

	let contentRef = $state<Element>();

	$effect(() => {
		animate(contentRef!, {
			...fadeRight,
			x: { from: '-1.25em', ease: 'outCirc' },
			duration: 400
		});
	});

	console.log(pagination);

	const ogImage = $derived({
		opengraph: encodeURI(
			`${data.baseURL}/api/ogimg/?title=${meta.title}&tags=${meta.tags.join('&tags=')}`
		),
		twitter: encodeURI(
			`${data.baseURL}/api/ogimg/?title=${meta.title}&tags=${meta.tags.join('&tags=')}&type=twitter`
		)
	});
</script>

<svelte:head>
	<title>/dev/tokiory: {meta.title}</title>

	<!-- OG -->
	<OpengraphMeta {...meta} image={ogImage.opengraph} />
	<TwitterMeta {...meta} image={ogImage.twitter} />

	<!-- Twitter -->
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

	<ArticlePagination class="mt-4">
		{#if pagination.previous}
			<PreviousLink {...pagination.previous} />
		{/if}
		{#if pagination.next}
			<NextLink {...pagination.next} />
		{/if}
	</ArticlePagination>
</article>
