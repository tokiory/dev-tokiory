<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import ListingArticle from '$components/Listing/ListingArticle.svelte';
	import ListingHeader from '$components/Listing/ListingHeader.svelte';
	import ListingProject from '$components/Listing/ListingProject.svelte';
	import type { PageProps } from './$types';
	import Greeting from '$components/Greeting.svelte';
	import { animate } from 'animejs';
	import { fadeUp } from '@/lib/animations/fadeUp';
	import { UmamiLinkEvent } from '$mod/umami';

	let { data }: PageProps = $props();
	const posts = $derived(data.articles);
	const amount = $derived(data.amount);

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
	<ListingHeader
		data-umami-event={UmamiLinkEvent.ArticleListing}
		data-umami-event-place="main-page"
		counter={amount}
		href="/articles">Статьи</ListingHeader
	>
	{#each posts as post (post.slug)}
		<ListingArticle {...post}>{post.title}</ListingArticle>
	{/each}
</div>

<div bind:this={projectsRef} class="flex opacity-0 flex-col gap-1 mt-12">
	<ListingHeader>Проекты</ListingHeader>
	<div class="flex items-center gap-x-8 gap-y-2 flex-wrap">
		{#each PROJECTS as project (project.href)}
			<ListingProject href={project.href}>{project.name}</ListingProject>
		{/each}
	</div>
</div>
