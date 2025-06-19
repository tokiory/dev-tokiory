<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	const { children, class: className = '' }: Props = $props();
</script>

<div class={['flex flex-wrap gap-y-1', className]}>
	{@render children?.()}
</div>
