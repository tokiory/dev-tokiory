<script lang="ts">
	interface Props {
		class: string;
	}

	const { class: className }: Props = $props();

	const LINES_GAP = 8;
	const BANNER_WIDTH = 830;
	const AMOUNT_OF_LINES = 6;
	const LINE_SECTIONS = 5;
	const MINIMAL_LINE_WIDTH = 32;

	const lines = Array.from({ length: 14 }, (_, i) => {
		const y = 2 + i * AMOUNT_OF_LINES;
		const splitCoords = Array.from({ length: LINE_SECTIONS })
			.map(() => {
				return Math.floor(Math.random() * BANNER_WIDTH);
			})
			.sort((a, b) => a - b)
			.map((element, i, arr) => {
				if (i === 0) {
					return element < MINIMAL_LINE_WIDTH ? element + MINIMAL_LINE_WIDTH : element;
				}

				if (element - arr[i - 1] < MINIMAL_LINE_WIDTH) {
					return arr[i - 1] + MINIMAL_LINE_WIDTH;
				}

				return element;
			});

		return splitCoords.map((coord, idx) => {
			const isFirst = idx === 0;
			const isLast = idx === splitCoords.length - 1;
			return {
				y,
				h: isLast ? BANNER_WIDTH : coord,
				x: isFirst ? 0 : splitCoords[idx - 1] + LINES_GAP
			};
		});
	});
</script>

<div class={['banner', className]}>
	<svg xmlns="http://www.w3.org/2000/svg">
  	{#each lines as line, i (i)}
     	<path class="dashed-line" d="M2,{line[0].y} H880" />
  	{/each}
		{#each lines as line, i (i)}
			{#each line as section, j (`${i}-${j}`)}
				<path class="moving-line" d="M{section.x},{section.y} H{section.h}" />
			{/each}
		{/each}
	</svg>
</div>

<style>
	.banner {
		position: relative;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 12px;
			top: 0;
			bottom: 0;
		}

		&::before {
			left: 0;
			background: linear-gradient(to left, rgba(0, 0, 0, 0), theme('colors.frangipani.50'));
		}

		&::after {
			right: 0;
			background: linear-gradient(to right, rgba(0, 0, 0, 0), theme('colors.frangipani.50'));
		}
	}

	svg {
		width: 100%;
		height: 86px;
		display: block;
	}

	.dashed-line,
  .moving-line {
    fill: none;
		stroke-width: 2;
		stroke: theme('colors.driftwood.800');
		stroke-linecap: round;
	}

	.moving-line {
		stroke-dashoffset: 880;
		stroke-dasharray: 880;
		animation: dash 12s cubic-bezier(0.86, 0, 0.14, 1) forwards infinite;
	}

	.dashed-line {
	  stroke-dasharray: 12;
		opacity: 0.1;
		animation: glow 1s ease-in-out infinite alternate;
	}

	@keyframes glow {
    to {
      opacity: 0.075;
    }
	}

	@keyframes dash {
		50% {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: -880;
		}
	}
</style>
