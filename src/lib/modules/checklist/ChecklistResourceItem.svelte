<script lang="ts">
	import ChecklistGenericItem from './ChecklistGenericItem.svelte';
	import type { ChecklistResource } from '$mod/checklist/types/checklist.types';

	const { title, description, done, link, tags, type }: ChecklistResource = $props();
</script>

<a target="_blank" href={link}>
	<ChecklistGenericItem {title} {done} {tags}>
      <div class="flex gap-1 text-xs text-driftwood-900/70 items-center">
      {#if type === 'walkthrough'}
        <div class="i-tabler-arrow-big-up-line-filled" />
        <span>Проходимый ресурс</span>
      {/if}
      {#if type === 'repo'}
        <div class="i-tabler-terminal-2" />
        <span>Репозиторий</span>
      {/if}
      {#if type === 'course'}
        <div class="i-tabler-users-group" />
        <span>Курс</span>
      {/if}
    </div>

		<div class={['flex gap-1 items-center mt-.25']}>
			<div
				class="max-w-xl text-xs whitespace-nowrap text-ellipsis overflow-hidden border-b border-driftwood-700/40 inline-block"
			>
				{link}
			</div>
		</div>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="text-sm mt-1">{@html description}</div>

	</ChecklistGenericItem>
</a>
