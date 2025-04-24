<script lang="ts">
	import ListingArticle from '$components/Listing/ListingArticle.svelte';
	import { animate } from 'animejs';
	import type { PageProps } from './$types';
	import { fadeUp } from '$lib/animations/fadeUp';

	let { data }: PageProps = $props();
	const posts = $derived(data.posts);
	let postsRef: HTMLElement[] = $state([]);

	$effect(() => {
		animate(postsRef, {
			...fadeUp,
			delay: (el, i) => i * 100,
		});
	});
</script>

<main class="mt-12">
	<div class="flex items-center gap-8 flex-wrap">
		{#each posts as post, index (post.slug + index)}
			<div class="opacity-0 w-full" bind:this={postsRef[index]}>
				<ListingArticle date={post.date} description={post.description} href={post.slug}>{post.title}</ListingArticle
				>
			</div>
		{/each}
	</div>
</main>
