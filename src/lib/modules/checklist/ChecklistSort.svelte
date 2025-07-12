<script lang="ts">
	import Button from '@/lib/components/Button.svelte';
	import type { ChecklistSort } from './types/filter.types';

	interface Props {
		onupdate: (sort: ChecklistSort) => void;
		sort: ChecklistSort;
	}

	const { onupdate, sort }: Props = $props();

	const text = $derived.by(() => {
		switch (sort) {
			case 'asc':
				return 'Сначала старые';
			case 'desc':
				return 'Сначала новые';
			default:
				return 'Неотмеченные';
		}
	});

	const icon = $derived.by(() => {
		switch (sort) {
			case 'asc':
				return 'i-tabler-sort-ascending';
			case 'desc':
				return 'i-tabler-sort-descending';
			default:
				return 'i-tabler-eye';
		}
	});

	const getNextSort = (sort: ChecklistSort): ChecklistSort => {
		switch (sort) {
			case 'desc':
				return 'asc';
			case 'asc':
				return 'done';
			default:
				return 'desc';
		}
	};

	const handleSortChange = () => {
		const nextSort = getNextSort(sort);
		onupdate(nextSort);
	};
</script>

<Button onclick={handleSortChange} class="flex items-center justify-center w-full sm:w-[190px] text-sm gap-1.5">
	<div class={icon}></div>
	<div class="text-nowrap">{text}</div>
</Button>
