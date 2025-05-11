<script lang="ts">
	import type { Project } from '$mod/cv/types';
	import Link from '$components/Link.svelte';
	import ContentH3 from '@/lib/components/Content/ContentH3.svelte';

	export let project: Project;
	const { name, technologies, description, links = [] } = project;
</script>

<div class="border-y-2 border-driftwood-800/70 py-1.5 border-dashed">
	<div class="mb-1">
		<ContentH3 custommark>
			{name}
		</ContentH3>
		<div class="text-sm">{technologies}</div>
	</div>
	<div>
		{description}

		{#if links.length > 0}
			<div class="flex gap-2">
				{#each links as { text, url } (url)}
					<Link href={url} target="_blank" rel="noopener noreferrer">
						{text}
					</Link>
					<!-- {#if links.indexOf({ text, url }) !== links.length - 1}
					,
				{/if} -->
				{/each}
			</div>
		{/if}
	</div>
</div>
