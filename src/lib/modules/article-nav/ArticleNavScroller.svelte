<script>
	import { onMount } from 'svelte';
	import { throttle } from 'throttle-debounce';

	let scrollProgress = $state(0);
	const handleScroll = throttle(25, () => {
		scrollProgress = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
	});

	onMount(() => {
		addEventListener('scroll', handleScroll);
		return () => {
			removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="h-1 bg-driftwood-800 rounded-lg" style:width="calc({scrollProgress}%)"></div>
