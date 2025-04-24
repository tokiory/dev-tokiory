<script lang="ts">
	import AVNode from './ArrayVisualizerNode.svelte';
	import AVControl from './ArrayVisualizerControl.svelte';
	import type { Snippet } from 'svelte';
	import type { Node } from '$mod/array-visualizer/types/node';
	import ContentH2 from '$components/Content/ContentH2.svelte';
	import { randomizeInput } from '$mod/array-visualizer/utils/visualizer';
	import type { AlgorithmFunc } from '$mod/array-visualizer/types/algorithm';
	import { numsToNodes } from '../utils/node';

	interface Props {
		class: string | string[];
		control?: boolean;
		autoplay?: boolean;
		repeat?: boolean;
		algorithm: AlgorithmFunc;
		children?: Snippet;
		title?: string;
	}

	const {
		class: className,
		children,
		algorithm,
		title,
		autoplay,
		control,
		repeat
	}: Props = $props();

	const createGenerator = () => {
		return algorithm(structuredClone(nodes));
	};

	let userInput = $state(randomizeInput());
	let nodes = $derived<Node[]>(numsToNodes(userInput.split(',').map(Number)));
	let history = $state<Node[][]>([]);
	let speed = $state(1);
	let description = $state('');
	let currentTimerId = $state<NodeJS.Timeout | null>(null);
	let generator = $state<ReturnType<AlgorithmFunc>>(createGenerator());
	let isRepeating = $state(repeat);
	const isPlaying = $derived(currentTimerId !== null);

	const play = () => {
		if (isPlaying) return;
		currentTimerId = setInterval(() => {
			const { value, done } = generator.next();

			if (done) {
				stop();

				if (isRepeating) play();
				return;
			}

			history = [...history, value.nodes];
			description = value.description || '';
		}, 400 / speed);
	};

	const pause = () => {
		if (!isPlaying) return;
		if (currentTimerId) clearInterval(currentTimerId);
		currentTimerId = null;
	};

	const stop = () => {
		pause();
		history = [];
		generator = createGenerator();
	};

	const randomize = () => {
		history = [];
		userInput = randomizeInput();
		generator = createGenerator();
	};

	const handleSpeedChange = () => {
		const isPlayed = isPlaying;
		pause();

		switch (speed) {
			case 1:
				speed = 2;
				break;
			case 2:
				speed = 3;
				break;
			case 3:
				speed = 0.25;
				break;
			case 0.25:
				speed = 0.5;
				break;
			default:
				speed = 1;
				break;
		}

		if (isPlayed) play();
	};

	const handleInputChange = (input: string) => {
		const isPlayed = isPlaying;
		userInput = input.replace(/[^0-9,]/g, '').replaceAll(',,', ',');
		stop();

		if (isPlayed) {
			play();
		}
	};

	const handleRepeatChange = (repeat: boolean) => {
		isRepeating = repeat;

		if (!isPlaying) {
			play();
		}
	};

	if (autoplay) play();
</script>

<div class={['flex border p-2 flex-col border-driftwood-700/70 rounded-md', className]}>
	{#if title}
		<ContentH2 class="!mt-0 !mb-0">{title}</ContentH2>
	{/if}
	{#if children}
		<div class="text-sm">
			{@render children()}
		</div>
	{/if}
	<div class="text-xs mt-4">
		{#if history.length}
			Шаг: {history.length}
			{#if description}
				// {description}
			{/if}
		{:else}
			Нажмите кнопку "Старт" для демонстрации
		{/if}
	</div>
	<div class="flex mt-2 flex-wrap gap-2">
		{#each history.at(-1) || nodes as node (node.id)}
			<AVNode {...node} />
		{/each}
	</div>
	{#if control}
		<AVControl
			input={userInput}
			oninputchange={handleInputChange}
			onpause={pause}
			onrandomize={randomize}
			onplay={play}
			onstop={stop}
			playing={isPlaying}
			repeating={isRepeating}
			onrepeatchange={handleRepeatChange}
			onchangespeed={handleSpeedChange}
			{speed}
			class="mt-4"
		></AVControl>
	{/if}
</div>
