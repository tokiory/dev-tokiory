<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let oldText = '';
	export let newText = '';

	let cursorPos = 0;
	let diffText = '';
	let showCursor = true;

	onMount(() => {
		// Animate cursor blinking
		setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		// Animate diff text
		let i = 0;
		const interval = setInterval(() => {
			if (i < newText.length) {
				if (oldText[i] !== newText[i]) {
					diffText = diffText.slice(0, i) + newText[i];
					cursorPos = i;
				}
				i++;
			} else {
				clearInterval(interval);
			}
		}, 100);
	});
</script>

<div class="diff-container">
"="text	<div transition:fade>
		{diffText}
		{#if showCursor}
			<span class="cursor" style="left: {cursorPos * 8}px">|</span>
		{/if}
	</div>
</div>

<style>
	.diff-container {
		font-family: monospace;
		position: relative;
	}

	.text {
		white-space: pre;
	}

	.cursor {
		position: absolute;
		color: #666;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
</style>
