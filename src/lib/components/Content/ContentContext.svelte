<script module>
	export { default as h1 } from './ContentH1.svelte';
	export { default as h2 } from './ContentH2.svelte';
	export { default as h3 } from './ContentH3.svelte';
	export { default as pre } from './ContentPre.svelte';
	export { default as p } from './ContentParagraph.svelte';
</script>

<script>
	const { children } = $props();
</script>

{@render children()}
