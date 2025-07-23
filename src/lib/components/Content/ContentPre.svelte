<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		meta?: string;
		language: string;
	}
	const { children, meta = '', language }: Props = $props();

	const parseMetaFields = (metaString: string): Record<string, string> => {
		const decodedMeta = decodeURI(metaString);
		const matches = decodedMeta.match(/\w+=([\w\d.]+|".+"|'.+')/g);

		if (!matches) return {};

		return matches.reduce(
			(acc, curr) => {
				const [key, value] = curr.split('=');
				const cleanedValue = value?.replace(/(^["'])|(["']$)/g, '');
				acc[key] = cleanedValue || '';
				return acc;
			},
			{} as Record<string, string>
		);
	};

	const parseFlags = (metaString: string): string[] => {
		const decodedMeta = decodeURI(metaString);
		const matches = decodedMeta.match(/(?<![=])\s?\w+\s?/g);
		return matches?.map((match) => match.trim()) || [];
	};

	const metaFields = $derived.by(() => parseMetaFields(meta));
	const flags = $derived.by(() => parseFlags(meta));

	let codeRef = $state<Element>();
	let lastCopiedTimerId = $state<number | null>(null);

	const copy = async () => {
		try {
			const codeElement = codeRef!.getElementsByTagName('code')[0];
			const sourceCode = codeElement.textContent;
			await navigator.clipboard.writeText(sourceCode!);

			if (lastCopiedTimerId) clearTimeout(lastCopiedTimerId);

			lastCopiedTimerId = setTimeout(() => {
				lastCopiedTimerId = null;
			}, 5000);
		} catch (err) {
			console.error('Failed to copy source code:', err);
		}
	};
</script>

{#snippet errorBanner(position: 'top' | 'bottom')}
	<div
		class={[
			'w-full flex justify-center items-center gap-2 overflow-hidden',
			position === 'top' && 'mb-2',
			position === 'bottom' && 'mt-2'
		]}
	>
		{#each new Array(15) as _, i (i)}
			<div class="text-xs text-rose-900">Ошибка</div>
		{/each}
	</div>
{/snippet}

<div class={['codesnippet w-full mt-4 mb-6', flags.includes('error') && 'bg-rose-100 py-2 px-4']}>
	{#if flags.includes('error')}
		{@render errorBanner('top')}
	{/if}
	{#if metaFields['filename']}
		<div
			class="border-b pb-1 flex justify-between text-xs font-semibold border-dashed w-full mb-2 border-frangipani-800/80"
		>
			<div>
				{metaFields['filename']}
			</div>
			<div>
				{language}
			</div>
		</div>
	{/if}
	<div class="relative">
		<div bind:this={codeRef} class="codeblock">
			{@render children?.()}

			<!-- Copy button -->
			<button
				onclick={copy}
				aria-label="copy"
				class={[
					'absolute z-10 cursor-pointer  transition-colors top-0 right-0 p-2 rounded-md',
					flags.includes('error')
						? 'bg-rose-100 hover:bg-rose-200'
						: 'bg-frangipani-50 hover:bg-driftwood-200/30'
				]}
			>
				{#if lastCopiedTimerId}
					<div class="i-tabler-check"></div>
				{:else}
					<div class="i-tabler-copy"></div>
				{/if}
			</button>

			<!-- Play button -->
			{#if metaFields['play']}
				<a aria-label="Run code in REPL" href={metaFields['play']} target="_blank" rel="noopener">
					<button
						aria-label="Run code in REPL"
						class="absolute z-10 cursor-pointer bg-frangipani-50 hover:bg-driftwood-200/30 transition-colors top-0 right-10 p-2 rounded-md"
					>
						<div class="i-tabler-play"></div>
					</button>
				</a>
			{/if}
		</div>
	</div>
	{#if flags.includes('error')}
		{@render errorBanner('bottom')}
	{/if}
</div>

<style>
	.codeblock {
		@apply max-w-full overflow-x-auto;
		:global(pre) {
			background: transparent !important;

			& .line {
				line-height: 1.9;
			}
		}

		:global(pre.has-focused) {
			& :not(.focused).line {
				filter: blur(2px);
			}
		}

		:global(pre.has-highlighted) {
			& .line.highlighted {
				@apply relative inline-block w-full transition-colors;
				@apply bg-frangipani-100/80;
			}
		}

		:global(pre.has-diff) {
			& .diff {
				@apply relative inline-block w-full transition-colors;
			}

			& .diff::after {
				@apply absolute right-2 top-1/2 -translate-y-1/2;
			}

			& .diff.remove {
				@apply opacity-60 bg-rose-100;
			}

			& .diff.remove::after {
				@apply content-['-'];
			}

			& .diff.add {
				@apply bg-sky-100;
			}

			& .diff.add::after {
				@apply content-['+'];
			}
		}
	}
</style>
