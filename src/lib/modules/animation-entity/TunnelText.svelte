<script lang="ts">
	import { createTimeline } from 'animejs';
	import { onMount } from 'svelte';
	interface Props {
		text?: string;
		class?: string;
	}

	const { text, class: className = '' }: Props = $props();

	const letters = $derived(text?.split('') || []);
	const lettersRef = $state<HTMLSpanElement[]>([]);

	onMount(() => {
		const timeline = createTimeline({
			duration: 2000,
			loop: true
		});

		for (const letter of lettersRef) {
			timeline.add(letter, {
				scale: [1, 3.5],
				easing: 'easeInOutElastic',
				opacity: [0.5, 0]
			});
		}
	});
</script>

<div
	class={[
		'flex font-bold justify-center items-center h-180px text-72px overflow-hidden',
		className
	]}
>
	{#each letters as letter, i (`${i}-${letter}`)}
		<div class="relative">
			<span>{letter}</span>
			<span
				bind:this={lettersRef[i]}
				class="left-0 top-0 ghost-letter text-transparent inline absolute">{letter}</span
			>
		</div>
	{/each}
</div>

<style>
	.ghost-letter {
		-webkit-text-stroke: 2px theme('colors.driftwood.800');
	}
</style>
