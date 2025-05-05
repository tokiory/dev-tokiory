<script lang="ts">
	import { untrack } from 'svelte';

	const LINE_LENGTH = 80;
	const LINE_SYMBOL_DURATION = 100;

  interface Props {
    class?: string;
  }

  const {class: className}: Props = $props();

	const generateSymbol = () => {
		const randomN = Math.random();

		if (randomN < 0.45) {
			return 1;
		} else if (randomN < 0.9) {
			return 0;
		}

		return ' ';
	};

	const alternateSymbol = (symbol: 0 | 1 | ' ') => {
		switch (symbol) {
			case 0:
				return Math.random() < 0.33 ? ' ' : 1;
			case ' ':
				return Math.random() < 0.5 ? 1 : 0;
			default:
				return Math.random() < 0.5 ? 0 : 1;
		}
	};

	const generateLine = () => Array.from({ length: LINE_LENGTH }).map(generateSymbol);

	let symbolIdx = $state(0);
	let line = $state(generateLine());

	$effect(() => {
		untrack(() => {
			setInterval(() => {
				if (symbolIdx > LINE_LENGTH) {
					symbolIdx = 0;
				}

        const currentSymbol = line[symbolIdx]
				line[symbolIdx++] = alternateSymbol(currentSymbol);
			}, LINE_SYMBOL_DURATION);
		});
	});
</script>

<div class={["line font-semibold flex flex-nowrap overflow-hidden", className]}>
	{#each line as text, idx (text + '-' + idx)}
		<div class="min-w-[1ch]">
			{text}
		</div>
	{/each}
</div>

<style>
	.line {
		font-family: 'Martian Mono Variable', monospace;
	}
</style>
