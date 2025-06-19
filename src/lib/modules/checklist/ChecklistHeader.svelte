<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	const { children, class: className = '' }: Props = $props();
</script>

<div class={['flex', className]}>
	{@render children?.()}
</div>
