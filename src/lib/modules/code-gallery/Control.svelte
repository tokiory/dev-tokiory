<script lang="ts">
	import Button from '@/lib/components/Button.svelte';
	import Keyboard from '@/lib/components/Keyboard.svelte';
	import { onMount } from 'svelte';

	const {
		slideIdx,
		children,
		slidesAmount,
		onleft,
		onright,
		withKeys = false,
		onexpand,
		expanded
	} = $props();

	let hasChanged = $state(false);

	onMount(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			if (['KeyL', 'ArrowRight'].includes(event.code)) onright();
			if (['KeyH', 'ArrowLeft'].includes(event.code)) onleft();
		};

		if (withKeys) {
			addEventListener('keydown', handleKeydown);
		}

		return () => {
			removeEventListener('keydown', handleKeydown);
		};
	});

	const stopWatchingChanged = $effect.root(() => {
		$effect(() => {
			if (slideIdx !== 0) {
				hasChanged = true;
				stopWatchingChanged();
			}
		});
	});
</script>

<div class="py-2 px-4">
	<div class="flex w-full gap-2">
		{#if !expanded}
			<button
				onclick={onleft}
				disabled={slideIdx <= 0}
				class={['control control_left hidden md:flex']}
			>
				<div class="control__content group flex flex-col justify-center items-center gap-2">
					<div class="i-tabler-arrow-left text-driftwood-600"></div>
					{#if withKeys}
						<Keyboard>h</Keyboard>
						<Keyboard>←</Keyboard>
					{/if}
				</div>
			</button>
		{/if}
		{@render children?.()}
		{#if !expanded}
			<button
				onclick={onright}
				disabled={slideIdx + 1 >= slidesAmount}
				class={['control control_right hidden md:flex']}
			>
				<div class="control__content flex flex-col justify-center items-center gap-2">
					<div class="i-tabler-arrow-right text-driftwood-600"></div>
					{#if withKeys}
						<Keyboard>l</Keyboard>
						<Keyboard>→</Keyboard>
					{/if}
				</div>
			</button>
		{/if}
	</div>
	{#if !expanded}
		<div class="mx-auto mt-2 flex flex-col items-center">
			<div class="text-sm text-driftwood-600/80">
				{slideIdx + 1} / {slidesAmount}
			</div>
			{#if !hasChanged}
				<div class="text-[10px] text-driftwood-600/40">Свайпайте для просмотра слайдов</div>
			{/if}
		</div>
		<Button outlined onclick={onexpand} class="w-full mt-2">Развернуть вертикально</Button>
	{/if}
</div>

<style>
	.control {
		position: relative;
	}

	.control:disabled .control__content {
		filter: grayscale(1) brightness(0.8);
		opacity: 0.6;
		cursor: not-allowed;
	}

	.control::before,
	.control::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 24px;
	}

	.control_left::after {
		left: 100%;
		background: linear-gradient(to right, theme('colors.frangipani.50'), transparent);
	}

	.control_right::before {
		right: 100%;
		background: linear-gradient(to left, theme('colors.frangipani.50'), transparent);
	}
</style>
