<script lang="ts">
	import ArticleTitle from '$components/Article/ArticleTitle.svelte';
	import ArticleHeader from '@/lib/components/Article/ArticleHeader.svelte';

	let { data } = $props();
	const meta = $derived(data.meta);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>

<article class="mt-16">
	<ArticleHeader title={meta.title} description={meta.description} />
	<div class="mt-6 border-b-dashed border-b-1 border-driftwood-300"></div>

	<div class="mt-8">
		<data.content />
	</div>
</article>
