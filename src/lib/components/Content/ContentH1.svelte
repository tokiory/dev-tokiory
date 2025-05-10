<script>
	import { getContext, onMount } from 'svelte';

	const { children, nospy = false } = $props();

	let titleRef = $state();
	const { registerHeading } = getContext('scroller');

	onMount(() => {
		if (!titleRef) return;

		if (nospy) {
			return;
		}

		registerHeading?.({
			element: titleRef,
			level: 1,
			text: titleRef.innerText
		});
	});
</script>

<h1 bind:this={titleRef} class="text-2xl mt-8">{@render children()}</h1>
