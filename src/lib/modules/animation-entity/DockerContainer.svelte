<script>
	const { class: className } = $props();
</script>

<div
	style="--initial-y:{`${Math.floor(Math.random() * 180)}deg`}"
	class={['container-wrapper mr-6', className]}
>
	<div
		style={`animation-duration: ${20 + Math.random() * 10}s`}
		class="container"
	>
		<div class="face front">
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
		</div>
		<div class="face back">
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
		</div>
		<div class="face top">
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
		</div>
		<div class="face bottom">
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
			<div class="divider"></div>
		</div>
		<div class="face left"></div>
		<div class="face right"></div>
	</div>
</div>

<style>
	.container-wrapper {
		perspective: 800px;
		width: 100px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		transform: rotateX(-10deg) rotateY(var(--initial-y));
		width: 80px;
		height: 40px;
		transform-style: preserve-3d;
		animation: rotate 20s linear infinite;
		position: relative;
	}

	.face {
		position: absolute;
		background: #0db7ed;
		border: 1px solid #0a6c8c;
		opacity: 0.95;
	}

	/* Faces */
	.front,
	.back {
		width: 80px;
		height: 40px;
	}
	.front {
		transform: translateZ(20px);
	}
	.back {
		transform: rotateY(180deg) translateZ(20px);
	}

	.top,
	.bottom {
		width: 80px;
		height: 40px;
		transform: rotateX(90deg);
	}
	.top {
		transform: rotateX(90deg) translateZ(20px);
	}
	.bottom {
		transform: rotateX(90deg) translateZ(-20px);
	}

	.left,
	.right {
		width: 40px;
		height: 40px;
	}
	.left {
		transform: rotateY(-90deg) translateZ(15px);
	}
	.right {
		transform: rotateY(90deg) translateZ(55px);
	}

	/* Lines (dividers) */
	.divider {
		position: absolute;
		height: 100%;
		width: 3px;
		background-color: #ffffff66;
		top: 0;
	}

	.divider:nth-child(1) {
		left: 16px;
	}
	.divider:nth-child(2) {
		left: 32px;
	}
	.divider:nth-child(3) {
		left: 48px;
	}
	.divider:nth-child(4) {
		left: 64px;
	}

	@keyframes rotate {
		from {
			transform: rotateX(-10deg) rotateY(var(--initial-y));
		}
		to {
			transform: rotateX(-10deg) rotateY(calc(var(--initial-y) + 360deg));
		}
	}
</style>
