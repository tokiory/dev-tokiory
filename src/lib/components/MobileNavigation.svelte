<script lang="ts">
	import ContentH1 from './Content/ContentH1.svelte';
	import ContentH2 from './Content/ContentH2.svelte';
	import Link from './Link.svelte';
	import Backdrop from './UI/Backdrop.svelte';
	import { GITHUB_LINK, HABR_LINK, TELEGRAM_LINK } from '$lib/data/links';
	import { animate, createSpring, JSAnimation } from 'animejs';
	import { onMount } from 'svelte';
	import ContentH3 from './Content/ContentH3.svelte';

	const LINKS = [
		{ href: '/', text: 'Главная' },
		{ href: '/articles', text: 'Статьи' }
	];
	const CLOSE_DY = 300;
	const MENU_SPRING = createSpring({ damping: 14 });

	interface Props {
		onclose: () => void;
	}

	const { onclose }: Props = $props();
	let mobileNavRef = $state<HTMLDivElement>();
	let startPointerY = $state(0);
	let pointerDY = $state(0);
	let currentAnimation = $state<JSAnimation | null>(null);

	const handlePointerMove = (event: PointerEvent) => {
	  currentAnimation?.cancel();
		pointerDY = startPointerY - event.y;

		if (!mobileNavRef) return;
		mobileNavRef.style.transform = `translateY(${Math.min(-pointerDY, 0)}px)`;
	};

	const handlePointerDown = (event: PointerEvent) => {
		startPointerY = event.y;
	};

	const handlePointerUp = async () => {
		if (!mobileNavRef) return;

		console.log(`${-pointerDY}px`);
		if (pointerDY > CLOSE_DY) {
			currentAnimation = animate(mobileNavRef, {
				duration: 300,
				ease: MENU_SPRING,
				translateY: [`${-pointerDY}px`, `${-window.innerHeight}px`],
				onComplete: () => {
					onclose();
				}
			});
			return;
		}

		currentAnimation = animate(mobileNavRef, {
			duration: 300,
			ease: MENU_SPRING,
			translateY: [`${-pointerDY}px`, `0`],
			onComplete: () => {
				if (!mobileNavRef) return;
				startPointerY = 0;
				pointerDY = 0;
			}
		});
	};

	onMount(() => {
		if (!mobileNavRef) return;
		mobileNavRef.style.transform = 'translateY(-100%)';
		currentAnimation = animate(mobileNavRef, {
			duration: 300,
			ease: MENU_SPRING,
			translateY: ['-100%', '0']
		});
	});
</script>

<div bind:this={mobileNavRef} class="mobile-nav fixed flex flex-col z-24 inset-0">
	<Backdrop class="px-3 w-full grow-1 pt-14 pb-4 flex flex-col justify-between">
		<div class="flex flex-col gap-4">
			<ContentH1 custommark nospy>Навигация</ContentH1>
			<ul class="flex flex-col gap-2">
				{#each LINKS as link (link.href)}
					<li>
						<Link darker href={link.href}
							><ContentH2 class="color-inherit" custommark nospy>{link.text}</ContentH2></Link
						>
					</li>
				{/each}
			</ul>
			<ul class="flex gap-2 mt-4">
				<li>
					<Link darker target="_blank" href={TELEGRAM_LINK}
						><ContentH3 class="color-inherit" custommark nospy>Телеграм</ContentH3></Link
					>
				</li>
				<li>
					<Link darker target="_blank" href={GITHUB_LINK}
						><ContentH3 class="color-inherit" custommark nospy>Гитхаб</ContentH3></Link
					>
				</li>
				<li>
					<Link darker target="_blank" href={HABR_LINK}
						><ContentH3 class="color-inherit" custommark nospy>Хабр</ContentH3></Link
					>
				</li>
			</ul>
		</div>
		<div
			onpointerdown={handlePointerDown}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
			class="group w-full select-none mx-auto pt-24 text-center text-driftwood-900/80 flex flex-col gap-1 items-center"
		>
			<div class="i-tabler-arrow-up"></div>
			<div class="text-sm">Свайпните вверх, чтобы закрыть</div>
			<div
				class="bg-driftwood-700/30 group-active:bg-driftwood-700/70 h-1.5 rounded-full mt-2 w-32"
			></div>
		</div>
	</Backdrop>
</div>

<style>
	.mobile-nav {
		touch-action: none;
	}
</style>
