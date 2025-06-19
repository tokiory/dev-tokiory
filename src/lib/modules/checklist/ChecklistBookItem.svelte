<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';

	interface Props {
		title: string;
		description?: string;
		done?: boolean;
		author: string;
		tags?: string[];
	}

	const { title, description, done, author, tags }: Props = $props();
</script>

<ChecklistGenericItem {title} {done} {tags}>
	<div class="font-medium text-xs">{author}</div>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="text-sm mt-1">{@html description}</div>
</ChecklistGenericItem>
