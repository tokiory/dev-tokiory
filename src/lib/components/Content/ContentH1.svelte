<script>
	import { getContext, onMount } from 'svelte';

	const { children, class: className = '', custommark = false, nospy = false } = $props();

	let titleRef = $state();
	const { registerHeading } = getContext('scroller') || {};

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

<h1 bind:this={titleRef} class={["text-2xl", !custommark && 'mt-8', className]}>{@render children()}</h1>
