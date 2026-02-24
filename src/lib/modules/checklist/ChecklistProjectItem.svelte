<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';

	interface Props {
		title: string;
		done?: boolean;
		description?: string;
		tags?: string[];
		links?: string[];
	}

	const { title, description, done, tags, links }: Props = $props();
</script>

<ChecklistGenericItem {title} {done} {tags}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="text-sm mt-1">{@html description}</div>
	<ul class="text-sm flex flex-col gap-.5 mt-1">
		{#each links || [] as link (`${title}-${link}`)}
			<li class="flex items-center flex-nowrap gap-2">
				<span>—</span>
				<a
					target="_blank"
					class="max-w-xl text-stone-900/70 whitespace-nowrap text-ellipsis overflow-hidden hover:text-stone-900/90"
					href={link}>{link}</a
				>
			</li>
		{/each}
	</ul>
</ChecklistGenericItem>
