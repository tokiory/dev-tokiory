<script lang="ts">
	import { untrack } from 'svelte';
	import ArticleTitle from './ArticleTitle.svelte';
	import { animate } from 'animejs';

	interface Props {
		title: string;
		description: string;
	}

	const { title, description }: Props = $props();
	let descriptionRef: HTMLElement;

	$effect(() => {
		if (!descriptionRef) return;
		animate(descriptionRef, { opacity: 1, duration: 400 });
		untrack(() => {});
	});
</script>

<hgroup>
	<ArticleTitle {title} />
	<div bind:this={descriptionRef} class="opacity-0">
		<div class="whitespace-pre-line text-driftwood-700">{description}</div>
		<div class="mt-6 border-b-dashed border-b-1 border-driftwood-300"></div>
	</div>
</hgroup>
