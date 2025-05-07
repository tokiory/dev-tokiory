<script>
	const { children, class: className, flex = false, speed = 'normal' } = $props();
</script>

<div class={['w-full flex relative overflow-hidden', className]}>
	<div class={['moving-line shrink-0', flex && 'flex', speed]}>
		{@render children()}
	</div>
	<div class={['moving-line shrink-0', flex && 'flex', speed]}>
		{@render children()}
	</div>
</div>

<style scoped>
	.moving-line {
		animation: moving-line 7.5s linear infinite;

		&.slow {
			animation-duration: 25s;
		}

		&.fast {
			animation-duration: 3s;
		}

		&.wave {
			animation-name: wave-line;
			animation-timing-function: ease-in-out;
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
