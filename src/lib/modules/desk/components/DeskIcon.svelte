<script lang="ts">
	import { animate } from 'animejs';
	import { untrack } from 'svelte';
	import type { PointerEventHandler } from 'svelte/elements';

	interface Props {
		src: string;
		alt: string;
		rectangle?: boolean;
	}

	const { src, alt, rectangle }: Props = $props();

	let iconRef = $state<Element>();
	let isMoving = $state(false);
	let position = $state({ top: 0, left: 0 });
	let offset = $state({ x: 0, y: 0 });

	const handlePointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
		isMoving = true;
		const rect = (event.target as HTMLElement).getBoundingClientRect();
		offset = {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		};
	};

	const handlePointerUp = () => {
		isMoving = false;
	};

	const handlePointerMove = (event: PointerEvent) => {
		if (!(isMoving && iconRef)) return;
		event.preventDefault();

		const container = iconRef!.parentElement!;
		const containerRect = container.getBoundingClientRect();
		const iconRect = iconRef!.getBoundingClientRect();

		let newLeft = event.clientX - containerRect.left - offset.x;
		let newTop = event.clientY - containerRect.top - offset.y;

		// Prevent overflow
		newLeft = Math.max(0, Math.min(newLeft, containerRect.width - iconRect.width));
		newTop = Math.max(0, Math.min(newTop, containerRect.height - iconRect.height));

		position = { left: newLeft, top: newTop };
	};

	$effect(() => {
		if (isMoving) {
			addEventListener('pointermove', handlePointerMove);
			addEventListener('pointerup', handlePointerUp);
		}

		return () => {
			removeEventListener('pointermove', handlePointerMove);
			removeEventListener('pointerup', handlePointerUp);
		};
	});

	$effect(() => {
		untrack(() => {
			animate(iconRef!, {
				duration: Math.random() * 2000 + 1000,
				rotate: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
				easing: 'easeInOutCirc',
				loop: true
			});
		});
	});
</script>

<img
	bind:this={iconRef}
	data-desk-type="icon"
	class={['absolute cursor-grab active:cursor-grabbing h-16', rectangle ? '' : 'w-16 aspect-square']}
	style:top={`${position.top}px`}
	style:left={`${position.left}px`}
	onpointerdown={handlePointerDown}
	draggable="false"
	{src}
	{alt}
/>
