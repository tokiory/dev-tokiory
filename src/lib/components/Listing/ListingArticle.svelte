<script lang="ts">
	import Link from '$components/Link.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		description: string;
		children: Snippet;
	}
	const { href, description, children }: Props = $props();
</script>

<Link {href}>
	<div class="font-bold">{@render children()}</div>
	<div class="text-driftwood-900">
		{description}
	</div>
	<div class="mt-1 text-sm font-medium flex gap-1 items-center text-driftwood-900">
		Читаемс <div class="i-tabler-arrow-right"></div>
	</div>
</Link>
