<script>
	const { class: className } = $props();
</script>

<div class={['w-full flex relative overflow-hidden', className]}>
	{#each Array.from({ length: 2 }) as _, blockI (`moving-z-${blockI}`)}
		<div class={['moving-line text-7xl font-bold shrink-0']}>
			{#each Array.from({ length: 20 }) as _, index (`moving-z-${blockI}-${index}`)}
				<span class="z">Z</span>
			{/each}
		</div>
	{/each}
	<div class="glass"></div>
</div>

<style scoped>
	.moving-line {
		animation: moving-line 17.5s linear infinite;
	}

	.glass {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle, transparent, theme('colors.frangipani.50 / 85%'));
		mask-image: radial-gradient(circle at center, transparent, black 90%);
		backdrop-filter: blur(5px);
	}

	@keyframes glass {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}

	@keyframes moving-line {
		from {
			transform: translateX(0%);
		}

		to {
			transform: translateX(-100%);
		}
	}
</style>
