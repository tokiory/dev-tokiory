<script lang="ts">
	import Link from '$components/Link.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		description: string;
		date: string;
		children: Snippet;
	}

	const { href, description, date: rawDate, children }: Props = $props();

	const date = $derived(new Date(rawDate));
	const formattedDate = $derived(
		date.toLocaleDateString('ru-RU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<Link class="w-full block" darker {href}>
	<div class="font-bold">{@render children()}</div>
	<div class="text-driftwood-900">
		{description}
	</div>
	<div class="flex mt-1 text-sm justify-between">
		<div class="font-medium flex gap-1 items-center text-driftwood-900">
			Читаемс <div class="i-tabler-arrow-right"></div>
		</div>
		<div class="text-driftwood-800/40">
			{formattedDate}
		</div>
	</div>
</Link>
