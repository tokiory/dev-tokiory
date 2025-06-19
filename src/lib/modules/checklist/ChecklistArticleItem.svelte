<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';

	interface Props {
		title: string;
		link: string;
		done?: boolean;
		description?: string;
		tags?: string[];
		rating?: number;
	}

	const { title, description, done, link, tags, rating }: Props = $props();
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
		{#if done && rating}
			<div class="flex mt-1 text-xs gap-1 items-center text-driftwood-700/60">
				<div class="i-tabler-star"></div>
				<div>
					{rating} / 10
				</div>
			</div>
		{/if}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="text-sm mt-1">{@html description}</div>
	</ChecklistGenericItem>
</a>
