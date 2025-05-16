<script>
	const { icon, class: className = '' } = $props();
</script>

<div class={["circ flex justify-center items-center relative overflow-hidden w-full h-156px", className]}>
	<img src={icon} alt="zed logo" class="z-10 w-16 h-16" />
	{#each Array.from({ length: 20 }).map((_, i) => i) as i (i)}
		<div
			style="animation-delay: {i * 1}s;"
			class="circ__element block transform-origin-c absolute top-50% left-50% transform -translate-x-50% -translate-y-50% h-0 border-3 border-driftwood-800/20 rounded-full"
		></div>
	{/each}
</div>

<style>
	.circ {
		box-shadow: inset 0 0 8px 8px theme('colors.frangipani.50');
	}

	.circ__element {
		animation: circ 20s infinite;
		z-index: -1;
	}

	@keyframes circ {
		0% {
			/* scale: 0; */
			width: 0;
			height: 0;
		}
		100% {
			/* scale: 100; */
			width: 880px;
			height: 880px;
		}
	}
</style>
