<script lang="ts">
	import { onMount } from 'svelte';

	const { class: className = '' } = $props();
	let canvasEl: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let width = 0;
	let height = 0;
	let luaText = 'Lua';

	const droplets: {
		x: number;
		y: number;
		speed: number;
		size: number;
		opacity: number;
		angle: number;
		weight: number;
	}[] = [];

	function spawnDrop() {
		droplets.push({
			x: Math.random() * width,
			y: -20,
			speed: 0.5 + Math.random(),
			size: 16 + Math.random() * 16,
			angle: ((Math.random() - 0.5) * Math.PI) / 3,
			weight: (Math.random() * 7 + 1) * 100,
			opacity: 0.6 + Math.random() * 0.4
		});
	}

	function draw() {
		ctx.clearRect(0, 0, width, height);

		for (const d of droplets) {
			d.y += d.speed;

			if (d.y > height + d.size) {
				d.y = -d.size;
				d.x = Math.random() * width;
			}

			ctx.globalAlpha = d.opacity;
			ctx.save();
			ctx.translate(d.x + d.size / 2, d.y + d.size / 2);
			ctx.rotate(d.angle);
			ctx.font = `${d.weight} ${d.size}px "Manrope Variable", Arial, sans-serif`;
			ctx.fontKerning = 'auto';
			ctx.fillStyle = `rgba(51, 27, 21, ${d.opacity})`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(luaText, 0, 0);
			ctx.restore();
		}

		ctx.globalAlpha = 1;
		requestAnimationFrame(draw);
	}

	onMount(() => {
		ctx = canvasEl.getContext('2d')!;
		width = canvasEl.clientWidth;
		height = canvasEl.clientHeight;
		canvasEl.width = width;
		canvasEl.height = height;

		for (let i = 0; i < 20; i++) spawnDrop();

		draw();
	});
</script>

<div class={['rain relative w-full h-32', className]}>
	<canvas bind:this={canvasEl} class="h-full w-full"></canvas>
</div>

<style>
	.rain {
		position: relative;

		&::before,
		&::after {
			content: '';
			position: absolute;
			height: 12px;
			left: 0;
			right: 0;
		}

		&::before {
			top: 0;
			background: linear-gradient(to top, rgba(0, 0, 0, 0), theme('colors.frangipani.50'));
		}

		&::after {
			bottom: 0;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0), theme('colors.frangipani.50'));
		}
	}
</style>
