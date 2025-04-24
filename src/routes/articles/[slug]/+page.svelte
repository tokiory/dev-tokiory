<script lang="ts">
	import ArticleHeader from '$components/Article/ArticleHeader.svelte';
	import { fadeRight } from '$lib/animations/fadeRight';
	import { animate } from 'animejs';

	let { data } = $props();
	const meta = $derived(data.meta);
	let contentRef = $state<Element>();

	$effect(() => {
		animate(contentRef!, {
			...fadeRight,
			x: { from: '-1.25em', ease: 'outCirc' },
			duration: 400
		});
	});
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>

<article class="mt-16">
	<ArticleHeader title={meta.title} description={meta.description} />

	<div bind:this={contentRef} class="opacity-0 mt-8">
		<data.content />
	</div>
</article>
