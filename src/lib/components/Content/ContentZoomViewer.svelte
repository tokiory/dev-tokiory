<script lang="ts">
	import type { PanzoomObject } from '@panzoom/panzoom';

	interface Props {
		src: string;
		alt?: string;
		open?: boolean;
		onClose: () => void;
	}

	const { src, alt = '', open = false, onClose }: Props = $props();

	let viewportRef = $state<HTMLDivElement>();
	let zoomContentRef = $state<HTMLDivElement>();
	let zoom = $state<PanzoomObject>();

	const portal = (node: HTMLElement) => {
		document.body.appendChild(node);

		return {
			destroy: () => {
				node.remove();
			}
		};
	};

	$effect(() => {
		if (!open || !viewportRef || !zoomContentRef) return;
		const viewport = viewportRef;
		const zoomContent = zoomContentRef;
		let panzoom: PanzoomObject | undefined;
		let aborted = false;
		let previousOverflow = document.body.style.overflow;

		const handleWheel = (event: WheelEvent) => {
			panzoom?.zoomWithWheel(event);
		};

		const setupZoom = async () => {
			const { default: Panzoom } = await import('@panzoom/panzoom/dist/panzoom.es.js');

			if (aborted) return;

			panzoom = Panzoom(zoomContent, {
				maxScale: 8,
				minScale: 1
			});
			zoom = panzoom;

			document.body.style.overflow = 'hidden';
			viewport.addEventListener('wheel', handleWheel, { passive: false });
		};

		setupZoom();

		return () => {
			aborted = true;
			viewport.removeEventListener('wheel', handleWheel);
			panzoom?.destroy();
			zoom = undefined;
			document.body.style.overflow = previousOverflow;
		};
	});
</script>

<svelte:window onkeydown={(event) => open && event.key === 'Escape' && onClose()} />

{#if open}
	<div use:portal class="zoom-viewer" role="dialog" aria-modal="true" tabindex="-1">
		<div class="zoom-viewer__toolbar">
			<button type="button" onclick={() => zoom?.zoomOut()}>-</button>
			<button type="button" onclick={() => zoom?.reset()}>Reset</button>
			<button type="button" onclick={() => zoom?.zoomIn()}>+</button>
			<button type="button" onclick={onClose} aria-label="Close zoomed image">Close</button>
		</div>

		<div bind:this={viewportRef} class="zoom-viewer__viewport">
			<div bind:this={zoomContentRef} class="zoom-viewer__content">
				<img class="zoom-viewer__image" {src} {alt} draggable="false" />
			</div>
		</div>
	</div>
{/if}

<style>
	.zoom-viewer {
		@apply fixed inset-0 z-[1000] flex flex-col;
		background: var(--theme-bg);
		color: var(--theme-text);
	}

	.zoom-viewer__toolbar {
		@apply relative z-10 flex justify-end gap-2 p-3 border-b;
		border-color: var(--theme-border);
	}

	.zoom-viewer__toolbar button {
		@apply rounded-md border-2 px-3 py-1 text-sm font-semibold shadow-sm;
		background: var(--theme-surface);
		border-color: var(--theme-border);
		color: var(--theme-text);
	}

	.zoom-viewer__viewport {
		@apply min-h-0 flex-1 overflow-hidden cursor-grab flex items-center justify-center p-4;
		touch-action: none;
	}

	.zoom-viewer__viewport:active {
		@apply cursor-grabbing;
	}

	.zoom-viewer__content {
		@apply inline-flex items-center justify-center;
		width: calc(100vw - 2rem);
		height: calc(100vh - 6rem);
	}

	.zoom-viewer__image {
		@apply block h-full w-full select-none;
		object-fit: contain;
	}
</style>
