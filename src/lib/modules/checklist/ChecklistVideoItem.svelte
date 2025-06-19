<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';

	interface Props {
		title: string;
		link: string;
		done?: boolean;
		description?: string;
		tags?: string[];
		channel?: string;
	}

	const { title, description, channel, done, link, tags }: Props = $props();
</script>

<a target="_blank" class="block" href={link}>
	<ChecklistGenericItem {title} {done} {tags}>
		<div class="flex gap-1 items-center">
			<div
				class="whitespace-nowrap text-ellipsis overflow-hidden text-xs border-b border-driftwood-700/40 inline-block"
			>
				{link}
			</div>
		</div>
		<div class="text-sm mt-1 flex gap-1 items-center text-driftwood-900/50">
			<div class="i-tabler-user"></div>
			<div>
				{channel}
			</div>
		</div>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="text-sm mt-1">{@html description}</div>
	</ChecklistGenericItem>
</a>
