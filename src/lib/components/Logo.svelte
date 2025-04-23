<script lang="ts">
	import { animate, type JSAnimation } from 'animejs';

	const LOGO_TEXT = '/dev/tokiory';
	let logoRef: HTMLElement;
	let logoLetters: HTMLElement[] = $state([]);
	let isHovered = $state(false);

	let animation: JSAnimation;

	$effect(() => {
		if (logoLetters.length !== LOGO_TEXT.length) return;
		animation = animate(logoLetters!, {
			y: [
				{ to: '-1em', ease: 'outExpo', duration: 600 },
				{ to: 0, ease: 'outBounce', duration: 800, delay: 100 }
			],
			// Property specific parameters
			rotate: {
				from: '-1turn',
				delay: 0
			},
			delay: (_, i) => i * 50, // Function based value
			ease: 'inOutCirc',
			loopDelay: 1000,
			loop: true,
			autoplay: false,
			onLoop: () => {
				if (!isHovered) {
					animation.reset();
				}
			}
		});
	});

	const handleHoverEnter = () => {
		isHovered = true;
		animation.play();
	};

	const handleHoverLeave = () => {
		isHovered = false;
	};
</script>

<a href="/">
	<div
		onpointerenter={handleHoverEnter}
		onpointerleave={handleHoverLeave}
		bind:this={logoRef}
		class="font-bold text-2xl flex"
	>
		{#each LOGO_TEXT.split('') as char, index (char + index)}
			<div bind:this={logoLetters[index]}>{char}</div>
		{/each}
	</div>
	<div class="text-driftwood-700 text-xs">Блог &lt;tokiory&gt;</div>
</a>
