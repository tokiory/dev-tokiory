<script lang="ts">
	import { animate, createSpring } from 'animejs';
	import { untrack } from 'svelte';

	interface Props {
		title: string;
	}

	const { title }: Props = $props();

	let titleRef: HTMLElement;

	$effect(() => {
		if (!titleRef) return;
		animate(titleRef.getElementsByClassName('letter'), {
			duration: 500,
			delay: (_, i) => i * 25,
			opacity: [0, 1],
			y: [20, 0],
			ease: createSpring({ stiffness: 100, damping: 12 })
		});
		untrack(() => {});
	});
</script>

<div bind:this={titleRef} class="text-2xl flex flex-wrap gap-x-[.4ch]">
	{#each title.split(' ') as word, wIndex (word + wIndex)}
		<div class="inline-block">
			{#each word.split('') as letter, index (letter + wIndex + index)}
				<div class="letter opacity-0 inline-block min-w-[.4ch]">{letter}</div>
			{/each}
		</div>
	{/each}
</div>
