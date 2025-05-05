<script module>
	export { default as h1 } from './ContentH1.svelte';
	export { default as h2 } from './ContentH2.svelte';
	export { default as h3 } from './ContentH3.svelte';
	export { default as pre } from './ContentPre.svelte';
	export { default as p } from './ContentParagraph.svelte';
	export { default as ul } from './ContentUl.svelte';
	export { default as ol } from './ContentOl.svelte';
	export { default as li } from './ContentLi.svelte';
	export { default as img } from './ContentImg.svelte';
	export { default as blockquote } from './ContentBlockquote.svelte';
	export { default as a } from '$components/Link.svelte';
	export { default as tr } from '$components/Content/ContentTableRow.svelte';
	export { default as td } from '$components/Content/ContentTableCell.svelte';
	export { default as th } from '$components/Content/ContentTableHeading.svelte';
	export { default as table } from '$components/Content/ContentTable.svelte';
</script>

<script>
	const { children } = $props();
</script>

<div class="content">
	{@render children()}
</div>
