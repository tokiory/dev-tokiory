<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { TABULATOR_CONTEXT } from './data/contexts';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	interface Tab {
		title: string;
		idx: number;
	}

	const { children, class: className = '' }: Props = $props();

	let tabs = $state<Tab[]>([]);
	let activeTab = $state<number>(0);

	setContext(TABULATOR_CONTEXT, {
		isActive: (idx: number): boolean => idx === activeTab,
		register: (tab: Omit<Tab, 'idx'>): number => {
			const idx = tabs.length;
			tabs.push({
				...tab,
				idx
			});

			return idx;
		}
	});
</script>

<div class={['tabulator flex flex-col gap-3 overflow-hidden', className]}>
	<div class="flex gap-2 flex-wrap">
		{#each tabs as { title, idx } (idx)}
			<button
				class={[
					'border p-2 text-sm border-driftwood-800 rounded-md',
					activeTab !== idx && 'opacity-50'
				]}
				onclick={() => {
					activeTab = idx;
				}}
			>
				{title}
			</button>
		{/each}
	</div>
	<div class="tabulator__content flex">
		{@render children?.()}
	</div>
</div>

<style>
	:global(.tabulator__content table) {
		margin: 0 !important;
	}
</style>
