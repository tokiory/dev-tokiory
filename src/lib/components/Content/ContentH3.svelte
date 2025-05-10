<script>
	import { getContext, onMount } from 'svelte';

	const { children, nospy = false, class: className = '' } = $props();

	let titleRef = $state();
	const { registerHeading } = getContext('scroller');

	onMount(() => {
		if (!titleRef) return;
		if (nospy) return;

		registerHeading?.({
			element: titleRef,
			level: 3,
			text: titleRef.innerText
		});
	});
</script>

<h3 bind:this={titleRef} class={['text-lg font-semibold mt-4', className]}>{@render children()}</h3>
