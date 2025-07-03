<script>
	import Link from '$components/Link.svelte';

	const { href, children } = $props();

	let target = $derived(href.startsWith('http') ? '_blank' : '_self');
</script>

<Link {target} {href}>{@render children?.()}</Link>
