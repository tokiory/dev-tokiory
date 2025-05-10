<script>
	import { getContext, onMount } from 'svelte';

	const { children, class: className = '', nospy = false } = $props();

	let titleRef = $state();
	const { registerHeading } = getContext('scroller');

	onMount(() => {
		if (!titleRef) return;

		if (nospy) {
			return;
		}

		registerHeading?.({
			element: titleRef,
			level: 2,
			text: titleRef.innerText
		});
	});
</script>

<h2 bind:this={titleRef} class={['text-xl font-semibold mt-6', className]}>{@render children()}</h2>
