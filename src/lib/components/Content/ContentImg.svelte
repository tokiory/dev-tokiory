<script>
	import zoom from 'medium-zoom';
	const { src, alt } = $props();
	let imageRef = $state();

	const handleClick = () => {
		zoom(imageRef);
	};
</script>

<img
	bind:this={imageRef}
	onclick={handleClick}
	class="w-full block rounded-md mt-4 mb-6"
	{src}
	{alt}
/>

<style>
	:global {
		.medium-zoom-overlay {
			z-index: 1000;
			background: theme('colors.frangipani.50') !important;
		}

		.medium-zoom-image {
			z-index: 1001;
		}
	}
</style>
