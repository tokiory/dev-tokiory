<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';

	interface Props {
		title: string;
		link: string;
		done?: boolean;
		description?: string;
		tags?: string[];
	}

	const { title, description, done, link, tags }: Props = $props();
</script>

<a target="_blank" class="block" href={link}>
	<ChecklistGenericItem {title} {done} {tags}>
		<div class="flex gap-1 items-center">
			<div
				class="text-xs whitespace-nowrap text-ellipsis overflow-hidden border-b border-driftwood-700/40 inline-block"
			>
				{link}
			</div>
		</div>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="text-sm mt-1">{@html description}</div>
	</ChecklistGenericItem>
</a>
