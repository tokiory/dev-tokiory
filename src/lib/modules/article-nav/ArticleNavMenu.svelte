<script lang="ts">
	import ContentH2 from '$components/Content/ContentH2.svelte';
	import type { Heading } from './types/heading';

	interface Props {
		onselect: (idx: number) => void;
		onclose: () => void;
		currentHeadingId: number;
		headings: Heading[];
	}

	const { onselect, onclose, currentHeadingId, headings }: Props = $props();

	const handleClick = (e: MouseEvent) => {
		if (e.target === e.currentTarget) onclose();
	};

	const links = [
		{
			title: 'Домой',
			uri: '/',
			icon: 'i-tabler-home'
		},
		{
			title: 'Статьи',
			uri: '/articles',
			icon: 'i-tabler-note'
		}
	];
</script>

<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
<!-- svelte-ignore a11y_no_static_element_interactions,a11y_click_events_have_key_events -->
<div
	aria-label="backdrop of navigation"
	onclick={handleClick}
	class="menu h-screen px-4 fixed py-24 inset-0 z-20"
>
	<div class="mx-auto h-full flex flex-col max-w-[854px]">
		<div class="flex justify-between items-center">
			<ContentH2 nospy class="!mt-0">Оглавление</ContentH2>
			<div class="flex gap-2">
				{#each links as link (link)}
					<a
						href={link.uri}
						onclick={onclose}
						class="border-b-2 hover:border-driftwood-800/50 active:border-driftwood-800/70 border-dashed border-driftwood-800/30 flex gap-1 items-center"
					>
						<div class={link.icon}></div>
						{link.title}
					</a>
				{/each}
			</div>
		</div>
		<ul class="navigation mt-3 overflow-y-auto">
			{#each headings as heading, idx (idx)}
				<li
					class={[
						'flex items-center justify-between pr-2 gap-1',
						heading.level == 2 && 'ml-4',
						heading.level == 3 && 'ml-8',
						idx === currentHeadingId && 'font-bold'
					]}
				>
					<button aria-label="выбрать пункт навигации" onclick={() => onselect(idx)}>
						{heading.text}
					</button>
					{#if idx === currentHeadingId}
					<div class="i-tabler-arrow-left"></div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.menu {
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		background-color: theme('colors.frangipani.50 / 55%');
	}

	.navigation {
		&::-webkit-scrollbar {
			width: 3px;
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background-color: black;
			border-radius: 2px;
			background: theme('colors.driftwood.800');
			border: 0;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}
	}
</style>
