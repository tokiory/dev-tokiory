<script lang="ts">
	import { untrack } from 'svelte';
	import ArticleTitle from './ArticleTitle.svelte';
	import { animate } from 'animejs';
	import ArticleControl from './ArticleControl.svelte';
	import type { Article } from '@/lib/types';

	interface Props {
		meta: Article;
	}

	const { meta }: Props = $props();
	const title = $derived(meta.title);
	const description = $derived(meta.description);

	let descriptionRef: HTMLElement;

	$effect(() => {
		if (!descriptionRef) return;
		animate(descriptionRef, { opacity: 1, duration: 400 });
		untrack(() => {});
	});
</script>

<hgroup class="pb-6 border-b border-b-dashed border-driftwood-300">
	<ArticleTitle {title} />
	<div bind:this={descriptionRef} class="opacity-0">
		<div class="whitespace-pre-line text-driftwood-700">{description}</div>
	</div>
	<ArticleControl class="mt-2" meta={meta} />
</hgroup>
