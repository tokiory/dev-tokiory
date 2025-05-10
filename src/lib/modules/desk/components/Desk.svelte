<script lang="ts">
	import { onMount } from 'svelte';
	const { children, class: className, center, iconsPerRow = 4 } = $props();

	let deskElement = $state<HTMLElement>();

	const getRandomIconPosition = (
		deskElement: HTMLElement,
		icons: HTMLElement[],
		index: number,
		icon: HTMLElement
	) => {
		const containerWidth = deskElement.offsetWidth,
			containerHeight = deskElement.offsetHeight;

		const iconPartWidth = containerWidth / icons.length;

		const offsetX = (index * iconPartWidth)
		const zoneX = iconPartWidth - (2 * icon.offsetWidth);
		const randomX = Math.floor(offsetX + icon.offsetWidth + Math.random() * zoneX),
			randomY = Math.floor(Math.random() * containerHeight);
		return {
			x: `${index + 1 === icons.length ? randomX - icon.offsetWidth : randomX}px`,
			y: `${randomY + icon.offsetHeight > containerHeight ? randomY - icon.offsetHeight : randomY}px`
		};
	};

	const getCenteredIconPosition = ({
		deskElement,
		spacingX,
		spacingY,
		icon,
		icons,
		index
	}: {
		deskElement: HTMLElement;
		icon: HTMLElement;
		index: number;
		spacingX: number;
		spacingY: number;
		icons: HTMLElement[];
	}) => {
		const rows = Math.ceil(icons.length / iconsPerRow);
		const iconWidth = icon.offsetWidth;
		const iconHeight = icon.offsetHeight;
		const parentHeight = deskElement.offsetHeight;
		const parentWidth = deskElement.offsetWidth;

		const row = Math.floor(index / iconsPerRow);
		const col = index % iconsPerRow;

		const iconsInThisRow = Math.min(iconsPerRow, icons.length - row * iconsPerRow);
		const rowWidth = iconWidth * iconsInThisRow + spacingX * (iconsInThisRow - 1);
		const startX = (parentWidth - rowWidth) / 2;

		const verticalCenter = parentHeight / 2;
		const totalRowsHeight = iconHeight * rows + spacingY * (rows - 1);
		const startY = verticalCenter - totalRowsHeight / 2;

		return {
			x: `${startX + (iconWidth + spacingX) * col}px`,
			y: `${startY + (iconHeight + spacingY) * row}px`
		};
	};

	onMount(() => {
		if (!deskElement) return;

		// Find all DeskIcon components
		const deskIcons = [...deskElement.querySelectorAll('[data-desk-type="icon"]')] as HTMLElement[];

		const spacing = 20;
		const verticalSpacing = 20;

		deskIcons.forEach((icon, index) => {
			if (!deskElement) return;

			if (center) {
				const { x, y } = getCenteredIconPosition({
					deskElement,
					spacingX: spacing,
					spacingY: verticalSpacing,
					icon,
					icons: deskIcons,
					index
				});
				icon.style.left = x;
				icon.style.top = y;
			} else {
				const { x, y } = getRandomIconPosition(deskElement, deskIcons, index, icon);
				icon.style.left = x;
				icon.style.top = y;
			}
		});
	});
</script>

<div class={['desk', className]} bind:this={deskElement}>
	{@render children()}
</div>

<style>
	.desk {
		position: relative;
		height: 300px;
		width: 100%;
		background-position-x: center;
		background-position-y: -10px;
		background-image:
			linear-gradient(theme('colors.driftwood.800 / 20%') 1px, transparent 1px),
			linear-gradient(to right, theme('colors.driftwood.800 / 20%') 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
