<script lang="ts">
	import type { Snippet } from 'svelte';
	import ChecklistCheckmark from './ChecklistCheckmark.svelte';
	import ChecklistTags from './ChecklistTags.svelte';

	interface Props {
		title: string;
		done?: boolean;
		tags?: string[];
		favorite?: boolean;
		children?: Snippet;
	}

	const { title, done, tags, favorite, children }: Props = $props();
</script>

<div class="flex gap-2.25">
	<div class="flex items-center pb-.25 flex-col gap-2 shrink-0">
		<ChecklistCheckmark {done} />
		{#if favorite}
			<div class="text-sm i-tabler-heart"></div>
		{/if}
	</div>
	<div class="min-w-0 grow-1 max-w-full mt-.33">
		<div class="sm:flex justify-between items-start gap-2">
			<div class="font-semibold line-height-none">{title}</div>
			{#if tags}
				<div class="hidden sm:block ml-auto">
					<ChecklistTags {tags} />
				</div>
			{/if}
		</div>
		<div>
			{@render children?.()}
			{#if tags}
				<div class="sm:hidden mt-1 ml-auto">
					<ChecklistTags {tags} />
				</div>
			{/if}
		</div>
	</div>
</div>
