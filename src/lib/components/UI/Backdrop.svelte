<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const { children, class: className = '', ...props }: HTMLAttributes<HTMLDivElement> = $props();

	onMount(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	});
</script>

<div {...props} class={['backdrop bg-frangipani-50/70', className]}>
	{@render children?.()}
</div>

<style>
	.backdrop {
		backdrop-filter: blur(8px);
	}
</style>
