<script lang="ts">
	import type { Snippet } from 'svelte';
	import ChecklistCheckmark from './ChecklistCheckmark.svelte';
	import ChecklistTags from './ChecklistTags.svelte';

	interface Props {
		title: string;
		done?: boolean;
		tags?: string[];
		children?: Snippet;
		postTitle?: Snippet;
	}

	const { title, done, tags, children, postTitle }: Props = $props();
</script>

<div class="flex flex-col">
	<div class="sm:flex items-center gap-2">
		<div class="flex items-center gap-2">
			<ChecklistCheckmark {done} />
			<div class="font-semibold">{title}</div>
			{#if postTitle}
			  {@render postTitle?.()}
			{/if}
		</div>

		{#if tags}
			<div class="hidden sm:block ml-auto">
				<ChecklistTags {tags} />
			</div>
		{/if}
	</div>
	<div class="ml-7">
		{@render children?.()}
		{#if tags}
			<div class="sm:hidden mt-1 ml-auto">
				<ChecklistTags {tags} />
			</div>
		{/if}
	</div>
</div>
