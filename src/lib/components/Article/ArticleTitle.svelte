<script lang="ts">
	import { animate, createSpring } from 'animejs';
	import { untrack } from 'svelte';

	interface Props {
		title: string;
	}

	const { title }: Props = $props();

	const letters: Element[] = $state([])

	$effect(() => {
		if (letters.length !== title.length) return;

		console.log(letters)
		animate(letters, {
			duration: 500,
			delay: (_, i) => i * 25,
			opacity: [0, 1],
			y: [20, 0],
			ease: createSpring({ stiffness: 100, damping: 12 })
		});
		untrack(() => {});
	});
</script>

<div class="text-2xl">
	{#each title.split('') as letter, index (letter + index)}
		<div class="opacity-0 inline-block min-w-[.4ch]" bind:this={letters[index]}>{letter}</div>
	{/each}
</div>
