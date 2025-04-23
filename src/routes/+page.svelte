<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import ListingArticle from '$components/Listing/ListingArticle.svelte';
	import ListingHeader from '$components/Listing/ListingHeader.svelte';
	import ListingProject from '$components/Listing/ListingProject.svelte';
	import type { PageProps } from './$types';
	import Greeting from '$components/Greeting.svelte';
	import { animate } from 'animejs';
	import { fadeUp } from '@/lib/animations/fadeUp';

	let { data }: PageProps = $props();
	const posts = $derived(data.posts);

	let articlesRef: HTMLElement;
	let projectsRef: HTMLElement;
	let greetingRef: HTMLElement;

	$effect(() => {
		animate(greetingRef, {
			...fadeUp
		});
		animate(articlesRef, {
			...fadeUp,
			delay: 150
		});
		animate(projectsRef, {
			...fadeUp,
			delay: 300
		});
	});
</script>

<div class="opacity-0" bind:this={greetingRef}>
	<Greeting class="mt-12" />
</div>

<div bind:this={articlesRef} class="flex opacity-0 flex-col gap-2 mt-12">
	<ListingHeader href="/articles">Статьи</ListingHeader>
	{#each posts as post (post.slug)}
		<ListingArticle description={post.description} href={post.slug}>{post.title}</ListingArticle>
	{/each}
</div>

<div bind:this={projectsRef} class="flex opacity-0 flex-col gap-1 mt-12">
	<ListingHeader>Проекты</ListingHeader>
	<div class="flex items-center gap-8 flex-wrap">
		{#each PROJECTS as project (project.href)}
			<ListingProject href={project.href}>{project.name}</ListingProject>
		{/each}
	</div>
</div>
