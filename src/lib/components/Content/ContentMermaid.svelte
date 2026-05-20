<script module lang="ts">
	let mermaidLoader: Promise<any> | null = null;

	const loadMermaid = async () => {
		if (!mermaidLoader) {
			mermaidLoader = import('mermaid').then(({ default: mermaid }) => {
				mermaid.initialize({
					startOnLoad: false,
					securityLevel: 'strict',
					theme: 'default'
				});

				return mermaid;
			});
		}

		return mermaidLoader;
	};
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import ContentZoomViewer from './ContentZoomViewer.svelte';

	interface Props {
		code?: string;
		class?: string;
	}

	const { code = '', class: className = '' }: Props = $props();

	let diagramImageSrc = $state('');
	let renderError = $state('');
	let imageRef = $state<HTMLImageElement>();
	let isZoomOpen = $state(false);

	const toSvgDataUrl = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

	const handleClick = () => {
		if (!imageRef) return;
		isZoomOpen = true;
	};

	$effect(() => {
		if (!browser) return;

		const source = code.trim();

		if (!source) {
			diagramImageSrc = '';
			renderError = '';
			return;
		}

		let aborted = false;

		const renderDiagram = async () => {
			try {
				const mermaid = await loadMermaid();
				const id = `mermaid-${crypto.randomUUID()}`;
				const { svg } = await mermaid.render(id, source);

				if (aborted) return;

				diagramImageSrc = toSvgDataUrl(svg);
				renderError = '';
			} catch (err) {
				if (aborted) return;

				renderError =
					err instanceof Error
						? `Failed to render Mermaid diagram: ${err.message}`
						: 'Failed to render Mermaid diagram.';
				diagramImageSrc = '';
			}
		};

		renderDiagram();

		return () => {
			aborted = true;
		};
	});
</script>

<div class={["diagram", className]}>
	{#if renderError}
		<pre class="mermaid-error">{renderError}</pre>
	{:else if diagramImageSrc}
		<button class="diagram-zoom-trigger" type="button" onclick={handleClick} aria-label="Zoom diagram">
			<img
				bind:this={imageRef}
				class="diagram-image"
				data-diagram="true"
				data-mermaid-zoom="true"
				src={diagramImageSrc}
				alt="Mermaid diagram"
			/>
		</button>
		<ContentZoomViewer
			src={diagramImageSrc}
			alt="Mermaid diagram"
			open={isZoomOpen}
			onClose={() => (isZoomOpen = false)}
		/>
	{/if}
</div>

<style>
	.diagram {
		@apply w-full h-fit mt-4 mb-10 overflow-x-auto;
	}

	.mermaid-error {
		@apply m-0 p-3 text-xs border-2 rounded-md border-dashed border-stone-800/30 bg-stone-100;
		font-family: 'Martian Mono Variable', monospace;
	}

	.diagram-zoom-trigger {
		@apply p-0 m-0 w-full bg-transparent border-none cursor-zoom-in;
	}

	.diagram-image {
		@apply w-full h-auto block;
	}
</style>
