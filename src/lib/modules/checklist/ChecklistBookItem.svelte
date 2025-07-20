<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';

	interface Props {
		title: string;
		description?: string;
		done?: boolean;
		publisher?: string;
		author: string;
		tags?: string[];
	}

	const { title, description, done, publisher, author, tags }: Props = $props();
</script>

<ChecklistGenericItem {title} {done} {tags}>
	<div class="font-medium text-xs">
		{#if publisher}
			<span class="text-driftwood-900/70">{publisher}</span>
			<span> • </span>
		{/if}

		<span>
			{author}
		</span>
	</div>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="text-sm mt-1">{@html description}</div>
</ChecklistGenericItem>
