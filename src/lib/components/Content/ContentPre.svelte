<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		meta?: string;
		language: string;
	}
	const { children, meta, language }: Props = $props();

	const metaFields = $derived(
		meta?.match(/\w+=([\w\d.]+|".+"|'.+')/g)?.reduce(
			(s, i) => {
				const [key, value] = i.split('=');
				s[key] = value;
				return s;
			},
			{} as Record<string, string>
		) || {}
	);

	let codeRef = $state<Element>();
	let lastCopiedTimerId = $state<NodeJS.Timer | null>(null);

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

<div class="mt-4 mb-6">
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
				class="absolute z-10 cursor-pointer bg-frangipani-50 hover:bg-driftwood-200/30 transition-colors top-0 right-0 p-2 rounded-md"
			>
				{#if lastCopiedTimerId}
					<div class="i-tabler-check"></div>
				{:else}
					<div class="i-tabler-copy"></div>
				{/if}
			</button>
		</div>
	</div>
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
